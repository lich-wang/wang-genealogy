---
schema: wang-person/v1
id: p_j1vavY3RL68MMHmxfkd71c
status: active
merged_into: null
display_name: 王文徵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gNK376i1XtfFTA536fVzP6
        subject_person_id: p_j1vavY3RL68MMHmxfkd71c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文徵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_meW8s3qCKqDBP3ERmq6W6W
          claim_id: c_gNK376i1XtfFTA536fVzP6
          source_id: s_uLD76WPpXApXxowSWKJ9MX
          stance: supports
          locator: CBDB:71432
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71432）
          source: &a1
            id: s_uLD76WPpXApXxowSWKJ9MX
            source_type: api_record
            title: 中国历代人物传记资料库：王文徵（CBDB 71432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71432&o=json
            external_identifier: CBDB:71432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.664Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_25iLa3QY1FpgQEkRyr6gip
        subject_person_id: p_j1vavY3RL68MMHmxfkd71c
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1715年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6KMC6CXr4fhtgKmVUsVe9A
          claim_id: c_25iLa3QY1FpgQEkRyr6gip
          source_id: s_uLD76WPpXApXxowSWKJ9MX
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
        id: c_Zsbf4Do7N16L6mSnjZrVGX
        subject_person_id: p_j1vavY3RL68MMHmxfkd71c
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1768年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7ky8Hgy8YekfVVrZifhRPa
          claim_id: c_Zsbf4Do7N16L6mSnjZrVGX
          source_id: s_uLD76WPpXApXxowSWKJ9MX
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
        id: c_6Ttb6iDjV2ENJ1PJUb9MzM
        subject_person_id: p_j1vavY3RL68MMHmxfkd71c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qVa5XM786tLC98WZd1q6US
          claim_id: c_6Ttb6iDjV2ENJ1PJUb9MzM
          source_id: s_uLD76WPpXApXxowSWKJ9MX
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

# 王文徵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文徵 | accepted |
| birth.date | 1715年 | accepted |
| death.date | 1768年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文徵（CBDB 71432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71432&o=json)
