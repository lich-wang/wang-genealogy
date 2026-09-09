---
schema: wang-person/v1
id: p_n8TP9jYMfB42i9HyDqBZ6V
status: active
merged_into: null
display_name: 王恪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Af6PH442WE49JQFxoXD5oB
        subject_person_id: p_n8TP9jYMfB42i9HyDqBZ6V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zEB1SEgcpbPsz2qW45K7J3
          claim_id: c_Af6PH442WE49JQFxoXD5oB
          source_id: s_Qu1bBY9Rw3EbkXxpYYhPXg
          stance: supports
          locator: CBDB:71176
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71176）
          source: &a1
            id: s_Qu1bBY9Rw3EbkXxpYYhPXg
            source_type: api_record
            title: 中国历代人物传记资料库：王恪（CBDB 71176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71176&o=json
            external_identifier: CBDB:71176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.454Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3CVBiL77qpWSWJ1mvgVmDR
        subject_person_id: p_n8TP9jYMfB42i9HyDqBZ6V
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1670年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nWaVwdK49iQ1eFXbgF1tYb
          claim_id: c_3CVBiL77qpWSWJ1mvgVmDR
          source_id: s_Qu1bBY9Rw3EbkXxpYYhPXg
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
        id: c_kv5HVU3k7c7ytZjpZc8DS4
        subject_person_id: p_n8TP9jYMfB42i9HyDqBZ6V
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1739年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nu5cRxY6AyzdgUuYBeGtbu
          claim_id: c_kv5HVU3k7c7ytZjpZc8DS4
          source_id: s_Qu1bBY9Rw3EbkXxpYYhPXg
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
        id: c_GmYPn8YZAWztnyJrY8RBmf
        subject_person_id: p_n8TP9jYMfB42i9HyDqBZ6V
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
        - id: cs_hhDxwhhYzA13RJdMB1CU2L
          claim_id: c_GmYPn8YZAWztnyJrY8RBmf
          source_id: s_Qu1bBY9Rw3EbkXxpYYhPXg
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

# 王恪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恪 | accepted |
| birth.date | 1670年 | accepted |
| death.date | 1739年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恪（CBDB 71176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71176&o=json)
