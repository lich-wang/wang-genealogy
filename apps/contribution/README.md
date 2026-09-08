# Contribution Worker

这个 Worker 是 GitHub OAuth 与 Pull Request 的受限编排层。它只接受 `content/persons/*.md`，使用当前用户的 OAuth token 在其 fork 中创建单个 commit，再向 `lich-wang/wang-genealogy:main` 创建 Pull Request；它没有审核或合并接口。

## 生产资源

- Worker：`wang-genealogy-contribution`
- 路由：`history.wang/api/*`
- Account D1：`wang-genealogy-accounts`
- GitHub OAuth callback：`https://history.wang/api/auth/github/callback`

真实 OAuth 凭据与 token 加密密钥只保存在 Cloudflare Worker secrets。本机开发值放在 `.dev.vars`（已被 Git 忽略），键名见 `.dev.vars.example`。

## 首次配置参考

1. 在 GitHub 创建 OAuth App：
   - Homepage URL：`https://history.wang`
   - Authorization callback URL：`https://history.wang/api/auth/github/callback`
2. 创建独立 D1，不得复用旧族谱数据库：

   ```bash
   npx wrangler d1 create wang-genealogy-accounts
   ```

3. 把返回的 `database_id` 写入 `wrangler.jsonc`，再添加生产路由并关闭 `workers.dev`：

   ```json
   "workers_dev": false,
   "routes": [{ "pattern": "history.wang/api/*", "zone_name": "history.wang" }]
   ```

4. 设置 Worker secrets：

   ```bash
   npx wrangler secret put GITHUB_CLIENT_ID
   npx wrangler secret put GITHUB_CLIENT_SECRET
   npx wrangler secret put TOKEN_ENCRYPTION_SECRET
   ```

   `TOKEN_ENCRYPTION_SECRET` 应使用密码学安全随机值，不能与 GitHub client secret 复用。

5. 生成类型、应用账号迁移并部署：

   ```bash
   npm run types
   npx wrangler d1 migrations apply wang-genealogy-accounts --remote
   npm run deploy
   ```

不要把真实值写入仓库。GitHub Actions 只需要 Cloudflare 部署凭据；运行时 OAuth secrets 由 Worker 自身保存，常规部署不会覆盖。

## 校验

```bash
npm test
npm run typecheck
npx wrangler deploy --dry-run
```

部署前确认数据库只有本目录迁移创建的 GitHub 绑定、会话、偏好和安全审计表。
