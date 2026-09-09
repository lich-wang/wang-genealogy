---
schema: wang-person/v1
id: p_cesJ2pvb6c3P2L8y3swbr3
status: active
merged_into: null
display_name: 王爾康
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8irDr4CouBkHaTtPvJmLg1
        subject_person_id: p_cesJ2pvb6c3P2L8y3swbr3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爾康
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_99xD6uQYRDorBAvzUV66Mr
          claim_id: c_8irDr4CouBkHaTtPvJmLg1
          source_id: s_HdEAXywtB6U5DfFxHvFjZc
          stance: supports
          locator: CBDB:126782
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126782）
          source: &a1
            id: s_HdEAXywtB6U5DfFxHvFjZc
            source_type: api_record
            title: 中国历代人物传记资料库：王爾康（CBDB 126782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126782&o=json
            external_identifier: CBDB:126782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.201Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_K6YzvJ7fNwFB1BFR6MTUhR
        subject_person_id: p_cesJ2pvb6c3P2L8y3swbr3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1567年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1LUGw2QkeNvEt218tDCuUX
          claim_id: c_K6YzvJ7fNwFB1BFR6MTUhR
          source_id: s_HdEAXywtB6U5DfFxHvFjZc
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
        id: c_HjBpJC1xmFLFg2ZYRX6EbS
        subject_person_id: p_cesJ2pvb6c3P2L8y3swbr3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1604年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ydpte3qCExtJyQAKqq9DmK
          claim_id: c_HjBpJC1xmFLFg2ZYRX6EbS
          source_id: s_HdEAXywtB6U5DfFxHvFjZc
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
        id: c_Qimedyssdd9g7rJMfv1jRx
        subject_person_id: p_cesJ2pvb6c3P2L8y3swbr3
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
        - id: cs_QPPL3CqX5wC6UdDoyRhqn1
          claim_id: c_Qimedyssdd9g7rJMfv1jRx
          source_id: s_HdEAXywtB6U5DfFxHvFjZc
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

# 王爾康

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爾康 | accepted |
| birth.date | 1567年 | accepted |
| death.date | 1604年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王爾康（CBDB 126782）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126782&o=json)
