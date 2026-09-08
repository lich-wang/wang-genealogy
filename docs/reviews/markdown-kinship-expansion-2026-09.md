# Markdown 亲属关系扩展审核记录（2026-09）

## 结果

本轮把旧流程中已经审核、但受 D1 写入边界影响而未落库的关系迁入权威 Markdown 内容，并补查现有 CBDB 与 Wikidata 身份：

- 迁入既有最终审核计划 326 条关系，新建 139 位关系端点人物；
- 从现有 CBDB 缓存补查并实时复核 11 条关系；
- 对 1,756 个唯一对应的 Wikidata 身份限速重查，1,368 个候选中 1,275 条已存在，新增 8 条；
- 连同王恁的父、祖父、曾祖父，共新增 348 条关系。

完成后共有 9,467 位人物、1,778 条不重复亲属关系、7,792 个连通分量；孤立人物由 7,863 位降至 7,661 位，最大连通分量由 830 位增至 868 位。

## 采纳规则

自动迁移只使用稳定的 Wikidata QID、CBDB 编号或计划内明确人物 ID，不按姓名猜测同名人物。父母、子女关系两端必须都是王姓范围人物；非王姓人物只保留与王姓人物的配偶关系。

写入前排除以下情况：已有关系、自环或有向环、第三位生物学父母、同角色父母冲突、编码占位名，以及无法唯一对应现有人物的外部标识。所有写入均在关系两端同步，重复执行为零写入。

## 审核材料

- `scripts/kinship-round3-final-approved-plan-2026-09.json`
- `scripts/cbdb-stage3-kinship-approved-plan-2026-09.json`
- `scripts/wikidata-existing-kinship-approved-plan-2026-09.json`
- `scripts/migrate-reviewed-kinship-to-markdown.mjs`
- `scripts/audit-wikidata-existing-kinship.mjs`
