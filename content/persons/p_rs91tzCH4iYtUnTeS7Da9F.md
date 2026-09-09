---
schema: wang-person/v1
id: p_rs91tzCH4iYtUnTeS7Da9F
status: active
merged_into: null
display_name: 王重儒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CRFBuUfoTw3M1PSk7bEymY
        subject_person_id: p_rs91tzCH4iYtUnTeS7Da9F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fKgY7DHZPwDwzRqr154g4R
          claim_id: c_CRFBuUfoTw3M1PSk7bEymY
          source_id: s_Ut5VWxhdBJA2ooATv5M5vd
          stance: supports
          locator: CBDB:499466
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（499466）
          source: &a1
            id: s_Ut5VWxhdBJA2ooATv5M5vd
            source_type: api_record
            title: 中国历代人物传记资料库：王重儒（CBDB 499466）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499466&o=json
            external_identifier: CBDB:499466
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.762Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fFZCf2d1jCKrFCcKKzRLPA
        subject_person_id: p_rs91tzCH4iYtUnTeS7Da9F
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
        - id: cs_KW4eUnPSQdJuRUSzeAqA1P
          claim_id: c_fFZCf2d1jCKrFCcKKzRLPA
          source_id: s_Ut5VWxhdBJA2ooATv5M5vd
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
  descendants: []
  other: []
---

# 王重儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王重儒 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王重儒（CBDB 499466）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499466&o=json)
