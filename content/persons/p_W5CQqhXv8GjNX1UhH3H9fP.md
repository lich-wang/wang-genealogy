---
schema: wang-person/v1
id: p_W5CQqhXv8GjNX1UhH3H9fP
status: active
merged_into: null
display_name: 王可佳
cbdb_id: 318735
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p48XoRDaokAXMBWYn5vD6F
        subject_person_id: p_W5CQqhXv8GjNX1UhH3H9fP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可佳，明人物。嘉靖三十二年進士，籍贯平鄉。（中国历代人物传记资料库 CBDB 318735）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_S9gJmLogFgNeK3nUZj3FR3
          claim_id: c_p48XoRDaokAXMBWYn5vD6F
          source_id: s_Cs3t5gUxXMyFN1eLqAk5Zg
          stance: supports
          locator: CBDB:318735
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Cs3t5gUxXMyFN1eLqAk5Zg
            source_type: api_record
            title: 中国历代人物传记资料库：王可佳（CBDB 318735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318735&o=json
            external_identifier: CBDB:318735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ydwJqdsVtmv9SGAADF2Mbt
        subject_person_id: p_W5CQqhXv8GjNX1UhH3H9fP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可佳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aQL82mmxkQvVDX9eHKgh8J
          claim_id: c_ydwJqdsVtmv9SGAADF2Mbt
          source_id: s_Cs3t5gUxXMyFN1eLqAk5Zg
          stance: supports
          locator: CBDB:318735
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_h57guq7Xq_Xysbgq1OFihZ
        subject_person_id: p_YaWmd84uDmuR4z7SAP4Eam
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W5CQqhXv8GjNX1UhH3H9fP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9d7fVRPgB-QliE_4q_wmTn
          claim_id: c_h57guq7Xq_Xysbgq1OFihZ
          source_id: s_hszi-39s5_NID9rMAs3hSW
          stance: supports
          locator: CBDB：兄弟 王可信（204413）之父／母 王崇德
          quotation: null
          interpretation_note: 由兄弟关系推断：王可佳 与 王可信 为同胞（CBDB 记「兄」），王可信 之父／母即 王可佳 之父／母。
          source:
            id: s_hszi-39s5_NID9rMAs3hSW
            source_type: api_record
            title: 中国历代人物传记资料库：王可佳（CBDB 318735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318735&o=json
            external_identifier: CBDB:318735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YaWmd84uDmuR4z7SAP4Eam
        status: active
        display_name: 王崇德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_sjEAA3hIl0N3hp-5Ucc2U9
        subject_person_id: p_W5CQqhXv8GjNX1UhH3H9fP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cDtAvQGzuVZRFeJxenEh2g
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_boA4eIhf8R77UFmDj5XSp2
          claim_id: c_sjEAA3hIl0N3hp-5Ucc2U9
          source_id: s_hszi-39s5_NID9rMAs3hSW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204413 王可信）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hszi-39s5_NID9rMAs3hSW
            source_type: api_record
            title: 中国历代人物传记资料库：王可佳（CBDB 318735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318735&o=json
            external_identifier: CBDB:318735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cDtAvQGzuVZRFeJxenEh2g
        status: active
        display_name: 王可信
        merged_into_person_id: null
---

# 王可佳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王可佳，明人物。嘉靖三十二年進士，籍贯平鄉。（中国历代人物传记资料库 CBDB 318735） | accepted |
| name.primary | 王可佳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YaWmd84uDmuR4z7SAP4Eam | 王崇德 | accepted |
| other | p_cDtAvQGzuVZRFeJxenEh2g | 王可信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王可佳（CBDB 318735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318735&o=json)
