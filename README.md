# 王氏历史族谱知识库（暂名）

一个面向王姓历史族谱关系的开放、可追溯、可协作维护的知识库。

项目只收录已故历史人物及其谱系资料，不收集族谱影像，不收录在世人物。公开资料和用户投稿不会直接覆盖“唯一真相”，而是形成带来源、版本和审核状态的资料主张。

## 当前阶段

MVP 采用“GitHub 身份 + Git 内容”的架构：`content/persons/` 是人物资料的权威数据，每位公开历史人物对应一个 Markdown 页面。站点不提供邮箱密码注册；用户通过 GitHub OAuth 登录，在站内表单生成 Markdown 修改，并以自己的 GitHub 账号创建 Pull Request。维护者合并 PR 就是审核通过，随后自动生成静态索引并部署。

```bash
npm install
npm run check:content # 校验人物 Markdown、ID 与关系引用
npm test          # 单元测试
npm run typecheck # 全部工作区类型检查
npm run build     # 类型检查 + 前端构建
npm run test:e2e  # Playwright 冒烟检查
npm run dev:contribution # GitHub OAuth / PR Worker
```

推送到 `main` 会自动校验人物内容、运行测试、构建并部署 Cloudflare Pages；这个发布流程不读写 D1。Contribution Worker 只负责 GitHub OAuth、站点会话和以当前用户身份创建 PR，不能直接写 `main`。D1 只保存 GitHub 账号绑定、会话、加密 OAuth token、偏好和安全审计，不保存人物、主张、关系、来源、Markdown 或 diff。

## 阅读字形

全站支持简体与繁體两种阅读字形，页头可切换。字形转换只发生在阅读时：主张文本按来源原文的字形保存，页面会标明哪些文字是自动转换结果。搜索与同名判定对字形不敏感——搜「王賁」会找到录入为「王贲」的人物。

## 核心原则

1. 每个历史人物拥有稳定、可访问的独立 ID 和 Markdown 页面。
2. 姓名、生卒、籍贯等基本信息也以“主张”保存，而不是无来源字段。
3. 父母、子女等关系以关系主张保存，并统一归一化为一次关系记录。
4. 每个主张至少说明来源；一个主张可以关联多个来源。
5. 所有修改保留版本历史，撤销也是一次新修改，不抹除旧记录。
6. 对冲突资料并存展示，不以最后一次编辑简单覆盖。
7. 重复人物采用可回滚的软合并，旧人物 ID 永久重定向。
8. GitHub 账号是唯一站点身份，但与历史人物实体完全分离。

## 部署

- 生产站点：https://history.wang
- 源码：GitHub
- 前端：Cloudflare Pages
- 数据与版本：Git 仓库中的人物 Markdown
- 登录/注册：GitHub OAuth，不设站内邮箱密码账号
- 协作：站内贡献表单 + 用户 GitHub Pull Request + 分支保护
- 公开读取：Cloudflare Pages 静态文件，不访问 D1
- 贡献服务：独立 Cloudflare Worker + Account D1，仅保存 GitHub 绑定、会话、加密 token、偏好与安全审计

详见：

- [产品范围](docs/PRODUCT.md)
- [领域与数据模型](docs/DOMAIN_MODEL.md)
- [接口草案](docs/API.md)
- [协作、版本与合并机制](docs/COLLABORATION.md)
- [来源、许可与收录边界](docs/SOURCES_AND_POLICY.md)
- [架构决策](docs/ARCHITECTURE.md)
- [Contribution Worker 配置](apps/contribution/README.md)

## 尚未确定

- 正式项目名称
- 代码许可证
- 用户投稿数据许可证
- 管理员、维护者和普通贡献者的最终权限边界
- 上海图书馆 API Key 获得后的可用字段与批量策略
