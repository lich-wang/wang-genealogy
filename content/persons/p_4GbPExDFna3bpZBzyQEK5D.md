---
schema: wang-person/v1
id: p_4GbPExDFna3bpZBzyQEK5D
status: active
merged_into: null
display_name: 王崇古
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GxQLZXGS8KTPwD5WqKDSQN
        subject_person_id: p_4GbPExDFna3bpZBzyQEK5D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇古
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6YyALHRGkGdqUi46BnqUar
          claim_id: c_GxQLZXGS8KTPwD5WqKDSQN
          source_id: s_MU5GnZoDbPu96obnw6Nc5Z
          stance: supports
          locator: CBDB:124981
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（124981）
          source: &a1
            id: s_MU5GnZoDbPu96obnw6Nc5Z
            source_type: api_record
            title: 中国历代人物传记资料库：王崇古（CBDB 124981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124981&o=json
            external_identifier: CBDB:124981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.946Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4rBsozfnJRd65ToAszw8W9
        subject_person_id: p_4GbPExDFna3bpZBzyQEK5D
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1515年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tFicTwaKP7SgUZwWVTP7pF
          claim_id: c_4rBsozfnJRd65ToAszw8W9
          source_id: s_MU5GnZoDbPu96obnw6Nc5Z
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_LsTimnG7ET1g91U9JRqvc4
        subject_person_id: p_4GbPExDFna3bpZBzyQEK5D
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1588年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_axpJYj7KrmwwHeoh22vb48
          claim_id: c_LsTimnG7ET1g91U9JRqvc4
          source_id: s_MU5GnZoDbPu96obnw6Nc5Z
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GrejMpUrv67AisT629Ps17
        subject_person_id: p_4GbPExDFna3bpZBzyQEK5D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gQRhxsL9VtmPSZqfCSJXgG
          claim_id: c_GrejMpUrv67AisT629Ps17
          source_id: s_MU5GnZoDbPu96obnw6Nc5Z
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_DLwnihAdMh_dJAItQjOHsP
        subject_person_id: p_4GbPExDFna3bpZBzyQEK5D
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6Fd9RZJkiLMNbHMJLar9HR
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QXYiRD1NJ2I3T1KNBWxbUJ
          claim_id: c_DLwnihAdMh_dJAItQjOHsP
          source_id: s_DdbCU2KVuBwpCH1KFYmszP
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），14977：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DdbCU2KVuBwpCH1KFYmszP
            source_type: api_record
            title: 中国历代人物传记资料库：王之模（CBDB 529289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=529289&o=json
            external_identifier: CBDB:529289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.349Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6Fd9RZJkiLMNbHMJLar9HR
        status: active
        display_name: 王之模
        merged_into_person_id: null
    - claim:
        id: c_lFVYjvx7FkyjGaLRO_oClS
        subject_person_id: p_4GbPExDFna3bpZBzyQEK5D
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BBf4BFLNNhaDseWeW653WQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aCJvrYlTgbFfNPVyCYGrEX
          claim_id: c_lFVYjvx7FkyjGaLRO_oClS
          source_id: s_xHNrFkJi1DiR75c74pA4xN
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），14977：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xHNrFkJi1DiR75c74pA4xN
            source_type: api_record
            title: 中国历代人物传记资料库：王之禎（CBDB 529288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=529288&o=json
            external_identifier: CBDB:529288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.349Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BBf4BFLNNhaDseWeW653WQ
        status: active
        display_name: 王之禎
        merged_into_person_id: null
    - claim:
        id: c_CfiUGyoELnoUSFdYnr1RL5
        subject_person_id: p_4GbPExDFna3bpZBzyQEK5D
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dfv7c6RbwBEAB3F1H21BXL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yzewPx7rzOs0Kp7QmG7R1J
          claim_id: c_CfiUGyoELnoUSFdYnr1RL5
          source_id: s_CQ429q9NH3ibtzE9HU7xrF
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），14977：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CQ429q9NH3ibtzE9HU7xrF
            source_type: api_record
            title: 中国历代人物传记资料库：王隺孫（CBDB 529291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=529291&o=json
            external_identifier: CBDB:529291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.352Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dfv7c6RbwBEAB3F1H21BXL
        status: active
        display_name: 王隺孫
        merged_into_person_id: null
  other: []
---

# 王崇古

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇古 | accepted |
| birth.date | 1515年 | accepted |
| death.date | 1588年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_6Fd9RZJkiLMNbHMJLar9HR | 王之模 | accepted |
| descendants | p_BBf4BFLNNhaDseWeW653WQ | 王之禎 | accepted |
| descendants | p_dfv7c6RbwBEAB3F1H21BXL | 王隺孫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇古（CBDB 124981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124981&o=json)
- [中国历代人物传记资料库：王隺孫（CBDB 529291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=529291&o=json)
- [中国历代人物传记资料库：王之模（CBDB 529289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=529289&o=json)
- [中国历代人物传记资料库：王之禎（CBDB 529288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=529288&o=json)
