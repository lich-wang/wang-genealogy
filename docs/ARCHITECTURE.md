# 架构决策草案

## 一、目标部署

```text
GitHub
  │ push / pull request
  ▼
Cloudflare Pages ── 静态前端
  │
  ▼
Cloudflare Workers ── REST API、认证、审核、限流
  │
  ▼
Cloudflare D1 ── 人物、主张、来源、版本、合并、审计
```

首期不使用对象存储，因为明确不保存影像和附件。

## 二、为什么不直接采用现有族谱系统

- webtrees 依赖 PHP 和传统数据库服务器；
- Gramps Web 依赖 Python 后端；
- GeneWeb 依赖常驻服务进程；
- 这些系统以一棵家族树的当前状态为中心，而本项目以“可冲突、有来源的主张”为中心。

可以参考它们的 GEDCOM、权限、图表和隐私设计，但不直接复制运行架构。

## 三、仓库结构

```text
apps/
  web/          # 前端（React + Vite → Cloudflare Pages）
  api/          # Cloudflare Worker API（Hono + Zod）
packages/
  domain/       # 共享类型、枚举、公共 ID
  i18n/         # 简繁字形转换与折叠（显示层与搜索共用）
  validation/   # 输入、日期、亲属关系校验
migrations/     # D1 SQL 迁移
scripts/        # 导入与运维脚本
e2e/            # Playwright 冒烟检查
docs/           # 产品、数据和接口设计
```

## 四、D1 数据策略

- 使用字符串形式的不可猜测公共 ID；
- 所有外键和常用筛选字段建立索引；
- 公开人物摘要可物化缓存，但主张仍是权威记录；
- 写入使用事务或批处理，人物合并必须原子化；
- 审计和版本记录采用追加写入；
- 删除使用状态字段，默认不物理删除。

## 五、认证与防滥用

- 公开读取无需登录；
- 投稿需要认证；
- 注册、登录和高频投稿使用 Turnstile；
- 写接口按账号和 IP 限流；
- 新账号投稿默认进入审核队列；
- 管理操作采用更强认证和独立审计。

认证提供商尚未确定。GitHub OAuth 适合早期技术用户，但未来应考虑普通族谱研究者能使用的邮箱登录方式。

## 六、搜索

MVP 先使用规范化姓名、异名、地点和外部 ID 的数据库索引搜索。不要在免费层首期引入独立搜索服务。公开数据稳定后，可构建只读静态索引以降低 D1 读取量。

搜索必须对简繁字形不敏感（搜「王賁」要找到录入为「王贲」的人物）。存储值是有来源的证据，不做归一化写入，因此折叠发生在查询侧：Worker 把查询词展开为简体与繁體两种写法一起匹配。这样无需新增派生列或回填。若将来数据量使 `LIKE` 不再够用，再引入以折叠后姓名为键的只读索引表——仍是派生数据，不是 `Person` 上的“最终值”。

## 六之二、简繁字形（packages/i18n）

- 转换基于 `opencc-js`，但只装载需要的词典，避免把 1 MB 数据带进 Worker：
  - 繁體→简体（`TSPhrases` + `TSCharacters`，约 20 kB gzip）：Worker 与前端都常驻，也是同名折叠的方向（多对一，结果稳定）；
  - 简体→繁體字级（`STCharacters`，约 20 kB gzip）：常驻，够用于姓名与多数地名；
  - 简体→繁體词级（`STPhrases`，约 400 kB gzip）：仅前端在读者切到繁體时按需动态加载，作为独立 chunk 缓存。字级转换会把「王后」错成「王後」，因此在词典就绪前不转换存储文本，先按原文显示。
- 前端字形状态存于 `localStorage`，同步到 `<html lang>`；界面文案以繁體书写，简体由转换得到。
- 任何转换结果都不回写数据库、也不提交给 API。

## 六之三、亲属关系导入管线（scripts/）

从外部数据库补充亲属关系分两步，中间留下可人工复核的计划文件：

```text
D1（现有人物 + 其维基数据 QID）
  │  scripts/fetch-kinship.mjs      读 D1，查 Wikidata（P22 父 / P25 母 / P40 子女）
  ▼
scripts/kinship-data.json           计划：待建人物、待建关系、跳过项及原因
  │  scripts/import-kinship.mjs     只经 /api/v1 写入
  ▼
Worker API → D1
```

约束：

- **写入只走 HTTP API。** 亲属方向归一化、亲属环检测、来源门槛、追加式版本和审计记录都在服务端，直接写 D1 会全部绕过。脚本只用 D1 做只读花名册查询和运维维护（`scripts/lib/d1.mjs`）。
- **幂等。** 人物按 QID 认领，来源按外部标识复用，关系已存在（`409 relationship_exists`）时只补引用并确保状态为 `accepted`，不重复建行。
- **可再走一代。** 花名册来自数据库，所以导入后再跑一次就会向外扩展一代。
- **维基数据声明引用维基数据条目。** 同一 QID 可能既有维基百科条目来源、又有维基数据条目来源；`P40（子女）` 这类 `locator` 只能挂在维基数据条目那条来源上。
- 发布缺少卒年的人物需要 `maintainer` 及以上角色（API 对「权威数据库认定为历史人物」的放行口），判定依据记录在计划文件的 `historicity` 字段，规则见 `SOURCES_AND_POLICY.md`。

## 七、备份与可移植性

- 定期导出 D1 SQL；
- 提供人物、主张、来源和版本的结构化 JSON 导出；
- 后续评估 GEDCOM 7、JSON-LD 和 GraphML；
- 任何平台级数据结构不得仅存在于 Cloudflare 专有 API 中。

## 八、编码前待决策（已定案）

首期实现采用以下决策；如需变更须同步更新领域模型、API、协作与来源政策文档。

1. **前端框架**：React + TypeScript + Vite，部署到 Cloudflare Pages。
2. **Worker 路由与验证库**：[Hono](https://hono.dev/) 作为 Worker 路由；[Zod](https://zod.dev/) 作为输入校验，校验逻辑集中在 `packages/validation`。
3. **认证方式**：首期采用平台内置的邮箱注册 + 会话令牌（服务端只存 `email_hash`，令牌用 Worker 密钥 HMAC 签名），并把接口设计成可在后续接入 GitHub OAuth 等外部登录。公开读取始终匿名。
4. **公共 ID 规则**：不可猜测的字符串，格式 `<prefix>_<22位base58随机>`，前缀区分实体：`p_`（Person）、`c_`（Claim）、`s_`（Source）、`m_`（MergeProposal）、`u_`（User）、`rev_`（Revision）、`ct_`（Contribution）。ID 不可变；合并后旧 ID 永久重定向到目标。
5. **主张状态流转与审核权限**：`proposed → accepted | disputed | retracted | superseded`。新账号或无维护者背书的写入进入 `proposed` 审核队列；维护者/审核者可将其转为 `accepted`；任何有有效来源的争议可标记 `disputed` 且不隐藏；修改经 `expected_revision` 乐观并发控制，冲突返回 `409`。
6. **用户投稿许可证**：CC BY-SA 4.0（与 `SOURCES_AND_POLICY.md` 候选一致）；每个 `Source` 另存自身 `license_code`，不得把 NC/SA 数据标记为 CC0。
7. **人物摘要选择规则**：按谓词分组，仅从 `accepted` 主张中为每个字段选“推荐值”，排序键依次为：来源数量（去重后独立来源更多者优先）→ 置信度 `confidence` → 最近更新时间。争议中的主张（`disputed`）与少数意见并列展示，不隐藏。关系摘要同理按谓词聚合。
8. **人物合并的简化条件与强制审核阈值**：首期一律走审核（`proposed → reviewing → approved | rejected | reverted`），始终生成完整 `merge_snapshot_json` 且可回滚；仅当发起者同时维护两条记录、无已接受主张冲突、且受影响关系数 ≤ 5 时允许“简化确认”直接 `approved`，否则必须审核者确认。旧 ID 永久重定向。
