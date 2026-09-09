---
schema: wang-person/v1
id: p_Heoj3oaQRQiQ5W2ijnMteF
status: active
merged_into: null
display_name: 王滕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cHFGgvDFuGv4HHX3KAhWPZ
        subject_person_id: p_Heoj3oaQRQiQ5W2ijnMteF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JYmth3rmAqzAhY3CzuqKM5
          claim_id: c_cHFGgvDFuGv4HHX3KAhWPZ
          source_id: s_HYn4MG9H1rFDsMhMNULXV7
          stance: supports
          locator: CBDB:191748
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191748）
          source: &a1
            id: s_HYn4MG9H1rFDsMhMNULXV7
            source_type: api_record
            title: 中国历代人物传记资料库：王滕（CBDB 191748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191748&o=json
            external_identifier: CBDB:191748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.285Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_wqaA85DgthSNUbWDQy7AZ2
        subject_person_id: p_Heoj3oaQRQiQ5W2ijnMteF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 868年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZUXSDidDJrYAhQfE559tKM
          claim_id: c_wqaA85DgthSNUbWDQy7AZ2
          source_id: s_HYn4MG9H1rFDsMhMNULXV7
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
        id: c_E9asPJXnwh14CtXGZ3c2S8
        subject_person_id: p_Heoj3oaQRQiQ5W2ijnMteF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dDxuTJfRweYLKQu1BoKXVH
          claim_id: c_E9asPJXnwh14CtXGZ3c2S8
          source_id: s_HYn4MG9H1rFDsMhMNULXV7
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

# 王滕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王滕 | accepted |
| death.date | 868年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王滕（CBDB 191748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191748&o=json)
