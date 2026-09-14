---
schema: wang-person/v1
id: p_pj1hQzuo8QaWabdrm9w4P8
status: active
merged_into: null
display_name: 王誥
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JKPzzh5tzNJfSNPVY16F1X
        subject_person_id: p_pj1hQzuo8QaWabdrm9w4P8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DW9APuuo2LGKBwxPqkFVSb
          claim_id: c_JKPzzh5tzNJfSNPVY16F1X
          source_id: s_k59AFKsXY2snAkai9DfLw1
          stance: supports
          locator: CBDB:313483
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313483）
          source: &a1
            id: s_k59AFKsXY2snAkai9DfLw1
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 313483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313483&o=json
            external_identifier: CBDB:313483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.908Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oHSxTNGkWrNKUHUMAQQmif
        subject_person_id: p_pj1hQzuo8QaWabdrm9w4P8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誥，明人物。嘉靖二十九年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 313483）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KVkwMdGl6HF_DQBFa86yrW
          claim_id: c_oHSxTNGkWrNKUHUMAQQmif
          source_id: s_k59AFKsXY2snAkai9DfLw1
          stance: supports
          locator: CBDB:313483
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_T82P5Iv8DZrkKiPabIjeJt
        subject_person_id: p_bAZKMRH7j8tU7qjcKDr2aW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pj1hQzuo8QaWabdrm9w4P8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e5K8lG24sdfeNsscwWWbDk
          claim_id: c_T82P5Iv8DZrkKiPabIjeJt
          source_id: s_u2nMamULpp7PMvNILIKuE7
          stance: supports
          locator: CBDB：兄弟 王諍（126801）之父／母 王鍊
          quotation: null
          interpretation_note: 由兄弟关系推断：王誥 与 王諍 为同胞（CBDB 记「弟」），王諍 之父／母即 王誥 之父／母。
          source:
            id: s_u2nMamULpp7PMvNILIKuE7
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 313483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313483&o=json
            external_identifier: CBDB:313483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bAZKMRH7j8tU7qjcKDr2aW
        status: active
        display_name: 王鍊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_XPfjp6FUaITdjtPHTR2Hhp
        subject_person_id: p_5GKmc7UBMnwgzBKbep1LTG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pj1hQzuo8QaWabdrm9w4P8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XYnXQ_cqtoONHg5pnWgG4V
          claim_id: c_XPfjp6FUaITdjtPHTR2Hhp
          source_id: s_u2nMamULpp7PMvNILIKuE7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126801 王諍）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_u2nMamULpp7PMvNILIKuE7
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 313483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313483&o=json
            external_identifier: CBDB:313483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5GKmc7UBMnwgzBKbep1LTG
        status: active
        display_name: 王諍
        merged_into_person_id: null
---

# 王誥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誥 | accepted |
| bio.summary | 王誥，明人物。嘉靖二十九年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 313483） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bAZKMRH7j8tU7qjcKDr2aW | 王鍊 | accepted |
| other | p_5GKmc7UBMnwgzBKbep1LTG | 王諍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誥（CBDB 313483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313483&o=json)
