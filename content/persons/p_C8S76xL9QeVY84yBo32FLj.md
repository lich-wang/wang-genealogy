---
schema: wang-person/v1
id: p_C8S76xL9QeVY84yBo32FLj
status: active
merged_into: null
display_name: 陈德卿
cbdb_id: 123338
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EvHvt7RJZS7dhd4Ri-t-r5
        subject_person_id: p_C8S76xL9QeVY84yBo32FLj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陈德卿，清人物。CBDB 记录其籍贯记录为山陰。中国历代人物传记资料库（CBDB）以人物编号 123338 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__U04DssWbP6Jp3Oz5_1AYe
          claim_id: c_EvHvt7RJZS7dhd4Ri-t-r5
          source_id: s_9c3z4fCfcPETSi2p4MeGes
          stance: supports
          locator: CBDB:123338
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_9c3z4fCfcPETSi2p4MeGes
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：陳德卿（123338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123338&o=json
            external_identifier: CBDB:123338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:21.973Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sRDVB64sEnB6CoBwDk8keq
        subject_person_id: p_C8S76xL9QeVY84yBo32FLj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陈德卿
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_F2FNEr9jB2x4Nd7qfgR2LC
          claim_id: c_sRDVB64sEnB6CoBwDk8keq
          source_id: s_9c3z4fCfcPETSi2p4MeGes
          stance: supports
          locator: Q45675173
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_t5v94WwkFARPruxDxydASr
          claim_id: c_sRDVB64sEnB6CoBwDk8keq
          source_id: s_hDze6Q7hSboGoHCJDzDSQB
          stance: supports
          locator: Q45675173
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_hDze6Q7hSboGoHCJDzDSQB
            source_type: api_record
            title: 维基数据：陈德卿（Q45675173）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45675173
            external_identifier: Q45675173
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:21.813Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_BPbetayxYtdFTSL7rF2asE
        subject_person_id: p_C8S76xL9QeVY84yBo32FLj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Sj8hygc8GvhojMcdiG5GCH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GgJFPcN4Jcsni2Jiw9jMtw
          claim_id: c_BPbetayxYtdFTSL7rF2asE
          source_id: s_fkB7x3AEr3j4xZJ4A1BA3K
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_fkB7x3AEr3j4xZJ4A1BA3K
            source_type: api_record
            title: 维基数据：王槐起（Q45675252）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45675252
            external_identifier: Q45675252
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:14.436Z
            metadata_json: null
        - id: cs_BVYdDRKeGQAiSp44pSAd4H
          claim_id: c_BPbetayxYtdFTSL7rF2asE
          source_id: s_hDze6Q7hSboGoHCJDzDSQB
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_GRv9WT99dHE5sbUkFxWV43
          claim_id: c_BPbetayxYtdFTSL7rF2asE
          source_id: s_Mzx6GHSLqTuVLs67XBw7DL
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source:
            id: s_Mzx6GHSLqTuVLs67XBw7DL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王槐起（123340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123340&o=json
            external_identifier: CBDB:123340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:14.657Z
            metadata_json: null
      object_person:
        id: p_Sj8hygc8GvhojMcdiG5GCH
        status: active
        display_name: 王槐起
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陈德卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陈德卿，清人物。CBDB 记录其籍贯记录为山陰。中国历代人物传记资料库（CBDB）以人物编号 123338 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 陈德卿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Sj8hygc8GvhojMcdiG5GCH | 王槐起 | accepted |

## 外部来源

- [维基数据：陈德卿（Q45675173）](https://www.wikidata.org/wiki/Q45675173)
- [维基数据：王槐起（Q45675252）](https://www.wikidata.org/wiki/Q45675252)
- [CBDB 中国历代人物传记资料库：陳德卿（123338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123338&o=json)
- [CBDB 中国历代人物传记资料库：王槐起（123340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123340&o=json)
