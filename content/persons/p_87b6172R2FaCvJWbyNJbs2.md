---
schema: wang-person/v1
id: p_87b6172R2FaCvJWbyNJbs2
status: active
merged_into: null
display_name: 王命
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M6h4c3NuN3bT4H2dTo13MS
        subject_person_id: p_87b6172R2FaCvJWbyNJbs2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王命
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sB4963VdYTLm754VZEyQE2
          claim_id: c_M6h4c3NuN3bT4H2dTo13MS
          source_id: s_oig4ux3iZrfoYJ8Dy5FhQ9
          stance: supports
          locator: CBDB:126586
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126586）
          source: &a1
            id: s_oig4ux3iZrfoYJ8Dy5FhQ9
            source_type: api_record
            title: 中国历代人物传记资料库：王命（CBDB 126586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126586&o=json
            external_identifier: CBDB:126586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.043Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pHneiEyfwd6YzWHbP7w4qE
        subject_person_id: p_87b6172R2FaCvJWbyNJbs2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1533年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GW7UMv79nkLPtJ3qPiY37Z
          claim_id: c_pHneiEyfwd6YzWHbP7w4qE
          source_id: s_oig4ux3iZrfoYJ8Dy5FhQ9
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
        id: c_RoVx61949CXHK2GbRP26Fb
        subject_person_id: p_87b6172R2FaCvJWbyNJbs2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1598年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cAifUh5dEQgk4etjGYpjkQ
          claim_id: c_RoVx61949CXHK2GbRP26Fb
          source_id: s_oig4ux3iZrfoYJ8Dy5FhQ9
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
        id: c_i1kVoxWfJhjp8EaCm8KPe7
        subject_person_id: p_87b6172R2FaCvJWbyNJbs2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王命（1533年—1598年），明人物。籍贯饒陽，曾任縣令。（中国历代人物传记资料库 CBDB 126586）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BbMu-nZNzlNR6e1xYW4qQD
          claim_id: c_i1kVoxWfJhjp8EaCm8KPe7
          source_id: s_oig4ux3iZrfoYJ8Dy5FhQ9
          stance: supports
          locator: CBDB:126586
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  descendants: []
  other: []
---

# 王命

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王命 | accepted |
| birth.date | 1533年 | accepted |
| death.date | 1598年 | accepted |
| bio.summary | 王命（1533年—1598年），明人物。籍贯饒陽，曾任縣令。（中国历代人物传记资料库 CBDB 126586） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王命（CBDB 126586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126586&o=json)
