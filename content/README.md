# 人物数据

`content/persons/` 是公开族谱的权威数据源：每位公开历史人物对应一个 Markdown 文件，文件名与 front matter 中的稳定 `id` 相同。

人物、主张、关系、来源、合并和资料版本只保存在这里及 Git 历史中，不写入 Cloudflare D1。Account D1 仅用于 GitHub 账号绑定、站点会话、加密 OAuth token、偏好、订阅、限流和账号安全审计。

```text
content/persons/p_xxx.md
  ├─ YAML front matter：状态、基本信息主张、关系主张、外部来源引用
  └─ Markdown 正文：供 GitHub 审阅者快速阅读的基本信息、关系和来源目录
```

普通贡献者通过站内表单编辑最终 Markdown、预览差异，并由 Contribution Worker 使用当前 GitHub 账号创建 fork、分支、commit 和 Pull Request；熟悉仓库结构的贡献者也可以自行 fork 后提交 PR。新增人物从 `content/templates/person.md` 生成不与现有文件冲突的 `p_` ID。关系目标必须引用已有人物 ID；同一关系主张会出现在关系两端的两个人物文件中，新增或修改时必须同步更新两份副本，CI 会按主张 ID 检查一致性。来源应使用外部 URL，不把受版权保护的全文或影像复制到仓库。

运行 `npm run check:content` 会验证格式、ID 唯一性和关系引用，并生成前端只读数据。`main` 分支上的 Git 提交历史就是版本历史，Pull Request 的作者、审阅和讨论就是贡献审计。

## 批量补全介绍

运行 `npm run backfill:biographies` 可补全缺失、非中文或少于 40 个 Unicode 字符的人物介绍。脚本只使用人物页已锁定的 Wikidata QID、中文维基百科条目或 CBDB 人物编号，不按姓名猜测同名人物；在线结果缓存在 `scripts/.cache/biographies/`，重复运行只处理仍未达标的记录。

可用 `--offline` 仅使用缓存及现有来源，`--limit 250` 分批执行，或用 `--after p_xxx.md` 从指定文件之后继续。离线补全后可运行 `--enrich`，只为脚本生成的介绍补取更高层级来源；`--dry-run` 只统计而不写入。每批完成后应运行 `npm run check:content`。
