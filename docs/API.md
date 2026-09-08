# 静态内容与 GitHub 贡献接口

## 一、人物内容读取

人物资料不提供通用可写 CRUD API。浏览器只读取与站点同版本发布的静态文件：

- `/data/index.json`：统计、搜索索引、首页入口、Git 最近修改、人物到家族图分量的映射；
- `/data/persons/{personId}.json`：单个人物摘要、主张、关系和来源；
- `/data/graphs/{componentId}.json`：一个亲缘连通分量；
- `/data/sources/{shard}.json`：来源及反向引用分片。

这些 JSON 是构建派生物，不是权威数据，不提交仓库，也不写入 D1。公开稳定契约是 `content/persons/*.md` 的 `wang-person/v1` schema。

## 二、GitHub 登录

```http
GET  /api/auth/github/start?return_to=/contribute
GET  /api/auth/github/callback?code=...&state=...
POST /api/auth/logout
POST /api/auth/github/disconnect
GET  /api/account/me
```

- `start` 设置短期 `HttpOnly` OAuth Cookie，并以 `state`、PKCE `S256` 和 `public_repo` scope 跳转 GitHub。
- `callback` 校验 Cookie、`state`、PKCE 和有效期，交换 token，再通过 GitHub `/user` 取得不可变 user ID。成功后建立站点会话并只重定向到同源白名单中的 `return_to`。
- `logout` 必须幂等：已退出时返回 `204`，不新增数据库记录。
- `disconnect` 撤销 GitHub grant、删除加密 token 并撤销全部站点会话；再次调用仍返回 `204`。
- `me` 只返回公开身份和授权状态，不返回 GitHub token、邮箱或内部密钥。

响应示例：

```json
{
  "user": {
    "github_id": 8718,
    "login": "example",
    "avatar_url": "https://avatars.githubusercontent.com/u/8718?v=4"
  },
  "can_submit": true
}
```

## 三、创建 Pull Request

登录后先取得用于编辑和并发检查的 GitHub `main` 基线：

```http
GET /api/contributions/base?person_id=p_xxx
GET /api/contributions/base?new_person_id=p_xxx
```

接口分别返回现有人物 Markdown，或已替换稳定 ID 的人物模板；响应同时包含 `path` 和 `base_sha`。浏览器应以此内容生成并预览最终 diff，不能直接从 D1 读取草稿。

```http
POST /api/contributions/pull-requests
Content-Type: application/json
X-CSRF-Token: <session-csrf-token>
```

```json
{
  "submission_id": "01994f07-8a50-7a1f-89af-6ddf3ab614d8",
  "base_sha": "8e4b0a...",
  "title": "content: 补充王安石生卒来源",
  "body": "涉及人物、来源定位、判断依据和许可确认",
  "changes": [
    {
      "path": "content/persons/p_123456789ABCDEFGHJKLMN.md",
      "content": "---\nschema: wang-person/v1\nid: p_123456789ABCDEFGHJKLMN\n..."
    }
  ]
}
```

约束：

- 必须使用有效 GitHub 会话、CSRF token 和包含 `public_repo` 的用户 OAuth token；
- `submission_id` 为客户端生成的 UUID，用于确定分支名和幂等重试；
- `base_sha` 必须是提交者预览 diff 时使用的 `main` SHA；落后时返回 `409 base_changed`，客户端重新加载并让用户确认，不能静默覆盖；
- `changes` 只能包含 `content/persons/*.md`，文件名必须匹配 front matter 的 `id`，数量和总字节数必须有限制；
- Worker 在内存中处理 `content`，不得保存到 D1、KV、日志或账号审计；
- Worker 必须先查询确定性分支/PR。相同 `submission_id` 已成功时直接返回已有 PR，不产生新的 GitHub 写入；
- commit 和 PR 必须由当前用户 OAuth token 创建，`maintainer_can_modify` 默认开启；
- Worker 只创建 PR，绝不调用 merge、approve 或修改分支保护的接口。

成功响应：

```json
{
  "pull_request": {
    "number": 123,
    "url": "https://github.com/lich-wang/wang-genealogy/pull/123",
    "state": "open"
  }
}
```

主要错误码：`401 authentication_required`、`403 github_scope_required`、`409 base_changed`、`409 submission_conflict`、`422 content_validation_failed`、`429 rate_limited`、`502 github_unavailable`。

## 四、禁止的接口

以下旧式接口和邮箱密码认证不得恢复：

```text
POST /api/auth/email-verifications
POST /api/auth/signup
POST /api/auth/login
POST /api/persons
POST /api/persons/{id}/claims
POST /api/persons/{id}/relationships
POST /api/claims/{id}/revisions
POST /api/sources
POST /api/person-merge-proposals
POST /api/pull-requests/{number}/merge
```

站内贡献接口是受限的 GitHub PR 编排器，不是第二个族谱写 API。权威写入只发生在用户 fork/分支，只有维护者在 GitHub 合并后才进入 `main`。
