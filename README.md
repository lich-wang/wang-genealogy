# 王氏历史族谱知识库（暂名）

一个面向王姓历史族谱关系的开放、可追溯、可协作维护的知识库。

项目只收录已故历史人物及其谱系资料，不收集族谱影像，不收录在世人物。公开资料和用户投稿不会直接覆盖“唯一真相”，而是形成带来源、版本和审核状态的资料主张。

## 当前阶段

MVP 已实现并部署：`docs/` 是设计的准绳，`apps/`、`packages/`、`migrations/` 是它的实现。

```bash
npm install
npm test          # 单元测试
npm run typecheck # 全部工作区类型检查
npm run build     # 类型检查 + 前端构建
npm run test:e2e  # Playwright 冒烟检查
```

推送到 `main` 会自动跑检查、应用 D1 迁移并部署 Worker 与 Pages。

### 注册邮箱验证

生产站点使用 `history.wang`。Cloudflare Email Routing 将
`verify@history.wang` 及其子地址路由到 `wang-genealogy-api` Worker；例如一次
注册会生成 `verify+WG-...@history.wang`。用户必须从注册表单填写的邮箱向该
一次性地址发信，网页检测到验证结果后才允许创建账号。注册挑战有效期为 30
分钟且只能使用一次；Worker 仅使用 SMTP envelope 的发件人与收件人完成验证，
不读取或保存邮件正文。

Cloudflare 生产配置要点：

1. `history.wang` 使用 Cloudflare 权威 DNS，并启用 Email Routing 所需的 MX、SPF
   与 DKIM 记录。
2. 启用 Email Routing 的子地址功能。
3. 创建 `verify@history.wang` → `wang-genealogy-api` Worker 的路由规则；
   `+WG-...` 子地址会回落到该基础地址规则并保留完整收件地址。
4. API Worker 的 `REGISTRATION_EMAIL_ADDRESS` 必须保持为
   `verify@history.wang`。

## 阅读字形

全站支持简体与繁體两种阅读字形，页头可切换。字形转换只发生在阅读时：主张文本按来源原文的字形保存，页面会标明哪些文字是自动转换结果。搜索与同名判定对字形不敏感——搜「王賁」会找到录入为「王贲」的人物。

## 核心原则

1. 每个历史人物拥有稳定、可访问的独立 ID 和接口。
2. 姓名、生卒、籍贯等基本信息也以“主张”保存，而不是无来源字段。
3. 父母、子女等关系以关系主张保存，并统一归一化为一次关系记录。
4. 每个主张至少说明来源；一个主张可以关联多个来源。
5. 所有修改保留版本历史，撤销也是一次新修改，不抹除旧记录。
6. 对冲突资料并存展示，不以最后一次编辑简单覆盖。
7. 重复人物采用可回滚的软合并，旧人物 ID 永久重定向。
8. 用户账号与历史人物完全分离。

## 部署

- 源码：GitHub
- 前端：Cloudflare Pages
- API：Cloudflare Workers
- 数据库：Cloudflare D1
- 滥用防护：Cloudflare Turnstile

详见：

- [产品范围](docs/PRODUCT.md)
- [领域与数据模型](docs/DOMAIN_MODEL.md)
- [接口草案](docs/API.md)
- [协作、版本与合并机制](docs/COLLABORATION.md)
- [来源、许可与收录边界](docs/SOURCES_AND_POLICY.md)
- [架构决策](docs/ARCHITECTURE.md)

## 尚未确定

- 正式项目名称与域名
- 代码许可证
- 用户投稿数据许可证
- 管理员、维护者和普通贡献者的最终权限边界
- 上海图书馆 API Key 获得后的可用字段与批量策略
