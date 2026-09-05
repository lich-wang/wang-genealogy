# Luna：第三轮亲属关系审核

## 结论

审核对象：`scripts/kinship-roster-followup-2026-09-round3.json`，共 523 条边。只读对照快照：`/tmp/wang-expansion-fM1AHK/wang.sqlite`。

- accepted：273（{"parent":210,"spouse":61,"adoptive_parent":2}）
- rejected：195（{"parent":192,"spouse":3}）
- manual_review：55（{"parent":42,"spouse":12,"adoptive_parent":1}）

只有 accepted 被放入 `scripts/luna-kinship-round3-approved-plan-2026-09.json`。rejected 和 manual_review 明确不得随该建议计划导入。逐边理由和原始引文位于机器裁决文件。

## 审核口径

1. 快照中已存在的同向关系归为 rejected/no-op，以落实数据库最小写入；这不表示否定史实。
2. 含拉丁占位符、仅“王”或“王某”等不可识别姓名的边拒绝。
3. 命中原计划 `name_collisions` 的新端点一律人工复核，不凭同名自动复用。
4. 单侧关系陈述原则上人工复核。双方 Wikidata 陈述交叉出现，或 Wikidata 与 CBDB 共同支持且无其他风险时通过。
5. “嗣父”只可作为 `adoptive_parent`；若同一人物对已有 `parent_of`，转人工处理，避免亲生/收养混淆。
6. 对拟通过的亲子边检查自环、重复边与有向环；本轮未发现新增自环或计划内有向环。计划没有足够结构化生卒年可做全面年龄差判断，因此年代未知不被误当成通过证据。

## 关键风险

- 快照已经含有 182 条相同关系。再次导入既浪费 D1 配额，也违反零写入重跑规则。
- `王RR`、`王D` 等拉丁占位符参与的边均拒绝；应先回到 CBDB/底本恢复真实姓名。
- `王继恩 → 王怀珪` 同时出现既有亲生父子和新“嗣父”陈述；这是关系语义冲突，必须人工修正既有记录后再决定。
- 泛称“某氏”及其他同名端点虽然可能由 QID 区分，但仍不能只凭显示名连接；均保留在 manual_review。
- Wikidata 的双向属性并不等同两份独立史料。本报告按项目现行聚合证据允许其进入 accepted；若目标是学术级谱系，仍应补充正史、方志或族谱页码。

## 文件

- 逐边裁决：`scripts/luna-kinship-round3-decisions-2026-09.json`
- 仅 accepted 的建议计划：`scripts/luna-kinship-round3-approved-plan-2026-09.json`
