---
schema: wang-person/v1
id: p_cz3SGUAeWiHX9zPy3wWp5t
status: active
merged_into: null
display_name: 王承基
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XABuL81tBZGY66H6hiADxZ
        subject_person_id: p_cz3SGUAeWiHX9zPy3wWp5t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9ky5zB2kLqzbA2KXDd4ZtD
          claim_id: c_XABuL81tBZGY66H6hiADxZ
          source_id: s_v7iWSRfBiEazhNXfYQaM8B
          stance: supports
          locator: CBDB:439451
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（439451）
          source: &a1
            id: s_v7iWSRfBiEazhNXfYQaM8B
            source_type: api_record
            title: 中国历代人物传记资料库：王承基（CBDB 439451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439451&o=json
            external_identifier: CBDB:439451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.095Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aSTZ6zcumciefhWRiCC87R
        subject_person_id: p_cz3SGUAeWiHX9zPy3wWp5t
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1813年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oiGu2krbvVWzdfvR4vMfkJ
          claim_id: c_aSTZ6zcumciefhWRiCC87R
          source_id: s_v7iWSRfBiEazhNXfYQaM8B
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
        id: c_QKMF8odeD6gu38w1G78yw9
        subject_person_id: p_cz3SGUAeWiHX9zPy3wWp5t
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1901年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eoaNhP6bXbbRrA4NJGywhu
          claim_id: c_QKMF8odeD6gu38w1G78yw9
          source_id: s_v7iWSRfBiEazhNXfYQaM8B
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
        id: c_1cRw22Pmg2j8KwKTvJVML5
        subject_person_id: p_cz3SGUAeWiHX9zPy3wWp5t
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
        - id: cs_ognusBK9ANEXFhb88ZoJRu
          claim_id: c_1cRw22Pmg2j8KwKTvJVML5
          source_id: s_v7iWSRfBiEazhNXfYQaM8B
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

# 王承基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承基 | accepted |
| birth.date | 1813年 | accepted |
| death.date | 1901年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承基（CBDB 439451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439451&o=json)
