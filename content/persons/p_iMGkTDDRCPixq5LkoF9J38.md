---
schema: wang-person/v1
id: p_iMGkTDDRCPixq5LkoF9J38
status: active
merged_into: null
display_name: 王輔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uY9nbPhk8QuUCxdX7fLEaK
        subject_person_id: p_iMGkTDDRCPixq5LkoF9J38
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PdEKNHNBogtMG46ki9jkLB
          claim_id: c_uY9nbPhk8QuUCxdX7fLEaK
          source_id: s_VJxJuV1Lew8X6UrJMcVZmh
          stance: supports
          locator: CBDB:100925
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100925）
          source: &a1
            id: s_VJxJuV1Lew8X6UrJMcVZmh
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 100925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100925&o=json
            external_identifier: CBDB:100925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.571Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vMNV7tE6bHoNZiH4TrMPvi
        subject_person_id: p_iMGkTDDRCPixq5LkoF9J38
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1223年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xwfvcu6ikRXQk93S4ewQSS
          claim_id: c_vMNV7tE6bHoNZiH4TrMPvi
          source_id: s_VJxJuV1Lew8X6UrJMcVZmh
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
        id: c_C29okiNpBbTR5h2rqScfkM
        subject_person_id: p_iMGkTDDRCPixq5LkoF9J38
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1276年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2HEMdU86m6y3F6gBeVB81u
          claim_id: c_C29okiNpBbTR5h2rqScfkM
          source_id: s_VJxJuV1Lew8X6UrJMcVZmh
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
        id: c_8y8jnfqshaW3T5iwqwtii5
        subject_person_id: p_iMGkTDDRCPixq5LkoF9J38
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SWjs6M94QjpVejXBfR25C8
          claim_id: c_8y8jnfqshaW3T5iwqwtii5
          source_id: s_VJxJuV1Lew8X6UrJMcVZmh
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

# 王輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輔 | accepted |
| birth.date | 1223年 | accepted |
| death.date | 1276年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輔（CBDB 100925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100925&o=json)
