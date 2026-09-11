---
schema: wang-person/v1
id: p_rcPAcS7Lyjcup6SuHz77V7
status: active
merged_into: null
display_name: 王春承
cbdb_id: 526751
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5XK51cKPdFND3AKdZ1CxgM
        subject_person_id: p_rcPAcS7Lyjcup6SuHz77V7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春承，清人物。中国历代人物传记资料库（CBDB）以人物编号 526751 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_SvD_1053ulwXvRhXEuEL5m
          claim_id: c_5XK51cKPdFND3AKdZ1CxgM
          source_id: s_BMFwfRmy7L1rjq7yzp91ef
          stance: supports
          locator: CBDB:526751
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_BMFwfRmy7L1rjq7yzp91ef
            source_type: api_record
            title: 中国历代人物传记资料库：王春承（CBDB 526751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526751&o=json
            external_identifier: CBDB:526751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1V4Jz7Dq74MyHuyFPA7s2V
        subject_person_id: p_rcPAcS7Lyjcup6SuHz77V7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春承
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UN4zh8xEj7ptohwh44GCPs
          claim_id: c_1V4Jz7Dq74MyHuyFPA7s2V
          source_id: s_BMFwfRmy7L1rjq7yzp91ef
          stance: supports
          locator: CBDB:526751
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_BMFwfRmy7L1rjq7yzp91ef
            source_type: api_record
            title: 中国历代人物传记资料库：王春承（CBDB 526751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526751&o=json
            external_identifier: CBDB:526751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bYSuHu9Xrxvq9si1RDwreY
        subject_person_id: p_BfaQnGUtghoJMQn4UNU2d9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rcPAcS7Lyjcup6SuHz77V7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZK_M43OL6j-jVGtWCGHgTk
          claim_id: c_bYSuHu9Xrxvq9si1RDwreY
          source_id: s_T2t6q9rkHU71Xk73Jf7hwy
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12881：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_T2t6q9rkHU71Xk73Jf7hwy
            source_type: api_record
            title: 中国历代人物传记资料库：王百齡（CBDB 69183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69183&o=json
            external_identifier: CBDB:69183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.149Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BfaQnGUtghoJMQn4UNU2d9
        status: active
        display_name: 王百齡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王春承

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王春承，清人物。中国历代人物传记资料库（CBDB）以人物编号 526751 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王春承 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BfaQnGUtghoJMQn4UNU2d9 | 王百齡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王百齡（CBDB 69183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69183&o=json)
- [中国历代人物传记资料库：王春承（CBDB 526751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526751&o=json)
