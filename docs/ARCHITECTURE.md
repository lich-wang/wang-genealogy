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

家族树展示使用 React Flow（`@xyflow/react`）提供节点/关系边渲染、画布平移、缩放和适配视图；业务层把有来源的亲属关系转换为节点与边，并以所有父子方向的最长路径约束计算代际位置，保证长世系只向下延伸。页面先取上下各两代的轻量切片；用户选择「展开全部」或聚焦人物时，一次读取完整公开亲缘连通分量。点击人物后只保留其全部先祖、后代和主干配偶，旁系在显示层折叠，原图数据不丢失。该页面按路由动态加载，避免图形库进入首页主包。

发布包同时携带由 D1 导出生成的**公开家族树只读快照**。匿名读者选择「展开全部」时，Worker 直接按人物公共 ID 返回已发布的连通分量，避免每次浏览都扫描完整关系表；登录用户仍读取 D1，以便立即看到自己的候选修改。普通亲缘切片若读取失败也会退回该快照。生成器只选择 `active`／`merged` 人物及公开关系 DTO 所需字段，明确排除用户、候选草稿和其他主张正文。快照只读、不增加 D1 缓存表或缓存写入；数据发布后应重新生成快照。

其余成功的匿名公开 `GET` 在 Cloudflare 边缘按 URL 短期缓存：最近修改 30 秒、搜索 2 分钟、人物与来源详情 5 分钟、首页家族树入口 10 分钟。命中缓存时不会执行认证或 D1 查询，并返回 `X-Wang-Cache: HIT`。带 `Authorization` 的请求完全绕过缓存，写接口也不缓存，因此投稿、审核和权限数据始终以 D1 实时结果为准。采用边缘缓存而不是 D1 缓存表，既减少重复读取，也避免为了缓存而制造额外数据库写入。

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
scripts/expand-kinship.mjs        逐轮循环，直到没有待展开的人物
  │
  ├─ scripts/fetch-kinship.mjs    前沿=尚未查过的王姓人物（--frontier）
  │    维基数据：P22 父、P25 母、P40 子女、P26 配偶、P3373 兄弟姊妹，正反两个方向都读
  │    CBDB    ：亲属关系（中文称谓 → packages/validation 的映射表）
  │    ↓ scripts/kinship-data.json  计划：待建人物及其主张、关系及引用、跳过项、同名待查
  └─ scripts/import-kinship.mjs   只经 /api/v1 写入
         ↓
      Worker API → D1
scripts/mine-chart.mjs           世系图追踪：无头浏览器渲染页面，按画出来的线条几何求父子
     {{Tree chart}} 的源码是 ASCII 图，列对不齐（本页有错三列的行），
     解析源码会自信地给出错误的父子关系；渲染后每个人是带边框的格子、
     每条连线是已知像素上的边框，相接即同一连接器，与源码列号无关
     ↓ 候选表 → scripts/mine-prose.mjs --chart
scripts/mine-prose.mjs           条文识读：前沿=缺上一代或缺下一代的人物
     中文维基百科条目正文 + 中文维基文库正史列传（晉書、漢書…）
     交由模型通读，每条读数都回原文逐字核验后才进计划
     已读页面记入 scripts/.cache/pages-read.json，每轮只读新的
     ↓ scripts/kinship-data.json → scripts/import-kinship.mjs
scripts/enforce-scope.mjs        对齐收录范围：王姓及其配偶留下，其余转 suppressed；双向收敛
scripts/fix-titled-names.mjs     庙号/称号改记为异名，本名提为 name.primary
scripts/audit-data.mjs           复核：重复、无来源主张、悬空关系、待处理合并提案
scripts/longest-tree-path.mjs    从发布快照计算最长父子路径；不对生产 D1 跑递归全表查询
scripts/propose-merge.mjs        确认是同一人时，逐对提出可回滚的合并提案
scripts/resolve-duplicates.mjs   已判定的重复批量执行：提案 + 批准（需 reviewer）
scripts/set-role.mjs             审计式账号角色调整（写入 admin.set_role）
     scripts/duplicate-merges.json 每条写明识别依据；已执行的条目留在计划里，重跑为空操作
scripts/split-homonym.mjs        反向情形：一条记录其实是两个同名的人
     scripts/homonym-splits.json  拆分计划：新建谁、撤回哪几条边、同一引用改挂到哪
     scripts/wrong-edges.json     只用 retract：散文明确否证的亲属边（兄弟／姑侄读成父子）
     scripts/generation-errors.json 只用 retract：祖父被记成父亲
     每条撤回都写明预期的两端，与库里不一致就在写入前中止
scripts/purge-records.mjs        硬删除（政策例外，需 --yes-hard-delete 与 --backup）
```

约束：

- **写入只走 HTTP API。** 亲属方向归一化、配偶对的规范化、亲属环检测、来源门槛、追加式版本和审计记录都在服务端，直接写 D1 会全部绕过。脚本只用 D1 做只读花名册查询和运维维护（`scripts/lib/d1.mjs`）。
- **同一人只建一条记录。** 身份以外部标识为准：维基数据 QID 与 CBDB ID 通过维基数据的 P497 互相桥接，两个来源指向同一人时合并为一个节点。剩下的同名情况写入计划的 `name_collisions` 交人工判断——同名异人很常见（王益之妻吳氏与王安石之妻吳氏是两个人），因此绝不自动合并。
- **导入前先找环。** 服务端只拒绝闭合亲属环的那一条边，而单名史料（「錯生賁，賁生渝」）会把相隔七代的两个同名者匹配成一人，前面每条边都合法、逐条写入，最后剩下一段折叠的世系。因此在「已有世系边 + 计划世系边」的图上求强连通分量（`scripts/lib/loops.mjs`），落在同一分量的计划边整批跳过并按人名打印整个环；拆分见 `COLLABORATION.md`。
- **图不是句子，同名的框更不是同一个人。** 世系图追踪读的是渲染后的连线几何，这解决的是本项目解析器数错列的问题，解决不了页面自身 ASCII art 错位——《琅邪王氏世系圖》就把王劭四子的横杠画到了王协名下，追踪如实读出了一张错的图。因此图里读出的边只作单来源证据，与散文冲突时以散文为准；同一张图里出现多个同名框（三个王瑜）又没有各自条目时，一律进 `name_collisions` 交人工判断，绝不按名字认领已有记录。
- **矛盾的形状比矛盾的名字好查。** 三个父亲、两兄弟共用子女、父亲同时又是祖父——这些形状不依赖姓名就能发现一条记录悄悄变成了两个人，或一句话被读成了错的关系（`audit-data.mjs` 的 `persons_with_three_parents`、`same_parent_same_child_pairs`、`parent_is_also_grandparent`）。查出来之后：确属误读的撤回；两个来源各说各话的标为 `disputed` 并存，不删少数说。
- **两个来源互相印证。** 同一条关系若两边都有声明，就挂两条引用；`locator` 分别记维基数据属性号和 CBDB 亲属称谓，CBDB 还会带上它自己引用的文献。
- **只记录父母子女与配偶。** 兄弟、翁婿、孙辈、十世孙等称谓一律计入 `unmapped_cbdb_relations` 上报但不入库——有完整的父母子女链就能推导出它们，重复存储只会制造冗余与冲突（见 `SOURCES_AND_POLICY.md`）。
- **逐代扩展直到收敛。** `scripts/expand-kinship.mjs` 反复执行「取前沿 → 导入」，`scripts/.cache/expanded-keys.json` 记住问过谁，因此停止条件是明确的：没有未展开的人物即结束。`--max-new` 限制单轮新增（触顶会报告，不静默截断），`--stop-at` 是人数护栏。
- **前沿限定在王姓。** 默认只展开王姓人物（`--frontier wang`）；非王亲属照常记录为关系端点，但不再由他们向外扩展。不加这条限制时，配偶会成为跨宗族的桥，两三轮之后库里就是整个刘氏、司马氏帝系（实测 6 轮后 61% 的记录距王姓已在 2 步以上）。`--frontier all` 可解除限制。
- **只有名字，没有档案。** 非王姓人物与仅以配偶身份出现的人物只写 `name.primary`（必要时加称号异名），不写生卒与生平。
- **幂等。** 人物按标识认领，来源按「标识 + 记录类型」复用，关系已存在（`409 relationship_exists`）时只补引用并确保状态为 `accepted`。
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
