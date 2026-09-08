# GitHub 身份与 Git 内容架构

## 一、总体结构

```text
匿名读取
浏览器 ── Cloudflare Pages ── 静态 JSON
                                  ▲
                                  │ CI 从 main 构建
                                  │
GitHub OAuth 用户 ── 站内贡献表单 ── Contribution Worker
                                         │ 以用户 OAuth token 调 GitHub API
                                         ▼
用户 fork / 分支 / commit ── Pull Request ── main
                                      │ 维护者审阅并合并
                                      └── 合并即审核通过并触发发布

身份与运行数据
浏览器 ── Contribution Worker ── Account D1
                    │                └── GitHub 绑定、会话、加密 token、偏好、安全审计
                    └── GitHub OAuth（唯一登录/注册方式）
```

`content/persons/*.md` 是人物、`Claim`、亲属关系、`Source`、合并状态和资料版本的唯一权威数据。公开页面、搜索、来源反查、最近修改和家族图都读取随站点版本发布的静态 JSON，不查询 D1。

## 二、身份决策

站点不提供邮箱、密码、验证码或独立注册表单。访客点击“使用 GitHub 登录”后进入 GitHub OAuth Web Application Flow；首次成功回调即按不可变的 GitHub numeric user ID 建立本地账号绑定，再次回调即登录。GitHub 用户名仅用于显示，改名不会产生新账号。

OAuth 必须由 Worker 完成，客户端不能持有 client secret 或 GitHub access token。授权请求使用不可猜测的 `state` 和 PKCE `S256`，回调后重新调用 GitHub `/user` 确认身份。站点会话使用 `Secure`、`HttpOnly`、`SameSite=Lax` Cookie；退出登录撤销本地会话，断开 GitHub 则同时撤销并删除保存的 OAuth 凭据。

为让站内表单能以贡献者本人身份创建公开 fork、写入分支和发起 Pull Request，贡献授权需要 `public_repo`。这是 GitHub OAuth App 能提供的最窄公开仓库写权限，但仍覆盖用户可访问的全部公开仓库；授权页与隐私说明必须明确提示。不得申请 `repo`，以免取得私有仓库权限。若未来改用 GitHub App，必须先证明其能在不要求用户向个人账号安装全仓库权限的前提下完成 fork 工作流。

## 三、投稿流程

站内贡献表单编辑最终人物 Markdown，不直接修改 `main`：

1. 用户先以 GitHub 登录，随后载入站内编辑器；编辑中的草稿和 `submission_id` 只存于浏览器 `sessionStorage`，不写 D1。
2. 新增人物时由前端生成稳定 `p_` ID；更新人物时加载当前静态 JSON 与对应 Markdown 的基线 SHA。
3. 前端以 `wang-person/v1` 模板或现有文件为基线，让用户编辑最终 Markdown，并展示 diff、来源说明和投稿许可确认。
4. Contribution Worker 校验会话、CSRF、路径白名单、大小限制、基线 SHA 和 OAuth scope；请求正文只在内存中处理，不保存到 D1 或日志。
5. Worker 使用当前用户的 GitHub token 创建或复用该用户的 fork，从最新 `main` 建立 `contrib/<github-id>/<submission-id>` 分支，写入 Markdown commit，并以该用户身份创建 Pull Request。
6. 相同 `submission_id` 重试时，Worker先在 GitHub 查询确定性分支或已存在的 Pull Request，存在则原样返回，不重复创建分支、commit 或 PR。
7. CI 对 Pull Request 的最终树执行 Markdown schema、ID、来源、关系引用、双端关系一致性、环和收录边界校验。
8. 维护者在 GitHub 审阅；合并 Pull Request 就是审核通过。合并到 `main` 后重新生成静态 JSON 并部署 Pages。

所有 GitHub 写操作必须使用当前用户 token，不能用机器人、仓库 installation token 或维护者 token代替；否则 Pull Request 作者不再是实际贡献者。Worker 不提供合并接口，管理员审核只在 GitHub 分支保护下进行。

## 四、内容组织

- `content/persons/<person-id>.md`：一位公开历史人物一个页面；YAML front matter 保存结构化主张和关系，正文提供可读摘要。
- 外部史料只保存书目信息、URL、定位、必要短引文和解释，不保存网页镜像、扫描件或附件。
- `scripts/build-content.mjs`：唯一内容构建入口，校验 schema、ID 唯一性、关系目标、跨文件主张一致性与来源。
- `apps/web/public/data/`：临时生成目录，不提交 Git；人物按 ID 独立输出，来源按 ID 首字符分片，家族图按连通分量输出。

静态 JSON 是派生物，不是第二份数据库。缓存失效时必须从当前 Git 提交重新生成，不能从 D1 恢复人物数据。

## 五、D1 边界

Account D1 只允许保存：

- 不可变 GitHub user ID、当前 login、公开头像 URL 和账号状态；
- OAuth scope、到期时间，以及由独立密钥加密的 access/refresh token；
- 随机站点会话的摘要、到期和撤销状态；
- 界面偏好、通知订阅、限流状态和账号安全审计。

D1 明确禁止保存：邮箱密码凭据、`Person`、`Claim`、`ClaimRevision`、`Source`、`ClaimSource`、亲属边、人物合并提案、投稿 Markdown、diff、草稿、导入队列和公开搜索索引。账号表不得以数据库外键绑定人物；关注人物时只保存公开 `person_id` 字符串。

OAuth token 必须静态加密，密钥只存在于 Worker secret，不能写入 D1、日志或前端。贡献审计以 GitHub commit、Pull Request 和 review 为准；D1 安全审计只记录动作类别、GitHub user ID、结果和时间，不复制人物 ID、标题、Markdown、来源或 diff。

## 六、部署边界

Pages 发布流水线只执行内容校验、测试、静态构建和部署，不需要 D1 或 GitHub OAuth secret。Contribution Worker 使用独立入口、独立账号迁移和独立部署任务；生产环境通过同源 `/api/auth/*`、`/api/account/*` 和 `/api/contributions/*` 路由访问。

迁移前的 `apps/api/`、`migrations/` 和数据库导入脚本属于历史实现。旧邮箱密码接口、人物写接口和族谱 D1 表不得复用；账号 Worker 只能使用新的账号迁移。旧生产 D1 中的族谱表仅可作为离线迁移备份，不能继续接受写入。
