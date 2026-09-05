# 第三轮亲属关系联网复核

## 结论

在 Luna 初审的 55 条 `manual_review` 上逐条在线核对 Wikidata 实体声明、CBDB 实时人物记录及其所列底本；最终 53 条转为通过、1 条拒绝、1 条进入先撤回后改挂的修复计划，人工待查归零。

合并 Luna 初审后，本轮共通过 326 条、拒绝 196 条、修复 1 条。通过计划不含拒绝项和修复项。

## 明确拒绝

- `王氏 → 王珪`：Wikidata `Q65874579` 的中英文描述和引用均说明她是“李珪母”，但 `P40` 错指同字异人王珪 `Q1562454`。这是同名误链，不得导入。[Q65874579 实体数据](https://www.wikidata.org/wiki/Special:EntityData/Q65874579.json)；[王珪 Q1562454](https://www.wikidata.org/wiki/Special:EntityData/Q1562454.json)

## 需要修复

- `王继恩 → 王怀珪`：CBDB 119731 据《续资治通鉴长编》7509 明记王继恩为王怀珪“嗣父”。当前库中同端点已有亲生 `parent_of`，应先审核撤回旧边，再建立收养父子边，不能直接并存。[CBDB 119731](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119731&o=json)

## 转为通过

- 38 条在联网后的 Wikidata 两端条目中互相指向相同稳定 QID，排除了本库同名候选误挂。
- 王熙二子、王必达四子、王士祜二子分别由 CBDB 所列中央研究院历史语言研究所人名权威资料支持。
- 王士琦之子王立程由《临海县志》支持；王汝鲁之子王應修由《南阳府志》支持；王益恭妻李氏由宋李氏墓志支持。
- `王稌 → 王汶` 得《明文海》卷430《王孝庄先生墓志铭》原文“以子汶贵”及“子男二曰瀹曰汶”直接确认。[《明文海》卷430](https://zh.wikisource.org/wiki/明文海_(四庫全書本)/卷430)
- 王彦博之子王龜齡、王松龄二子王聿与王中虽获 CBDB 实时记录确认，但底本栏未详，仅以低置信度采纳，不提升为强证据。

逐条在线返回、推荐结果和来源 URL 保存在 `scripts/luna-kinship-round3-online-evidence-2026-09.json` 与 `scripts/kinship-round3-online-resolution-overrides-2026-09.json`。
