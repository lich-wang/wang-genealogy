---
schema: wang-person/v1
id: p_zwjyvg4Tur4GoMjAZWnJee
status: active
merged_into: null
display_name: 王德欽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z2xrkf7aKCz19ypio1dq57
        subject_person_id: p_zwjyvg4Tur4GoMjAZWnJee
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1wHSWofz6WQpH55Nov5f3b
          claim_id: c_Z2xrkf7aKCz19ypio1dq57
          source_id: s_8xCG8psnoX12GUQ3jKd9qK
          stance: supports
          locator: CBDB:38408
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38408）
          source: &a1
            id: s_8xCG8psnoX12GUQ3jKd9qK
            source_type: api_record
            title: 中国历代人物传记资料库：王德欽（CBDB 38408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38408&o=json
            external_identifier: CBDB:38408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.454Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_d2GPvy8iMhw27y7pivwZku
        subject_person_id: p_zwjyvg4Tur4GoMjAZWnJee
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1279年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TDRrbp7RNjwMxhp1GS9kgb
          claim_id: c_d2GPvy8iMhw27y7pivwZku
          source_id: s_8xCG8psnoX12GUQ3jKd9qK
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
        id: c_WQUFbgBskGhVd3Mhff9pd1
        subject_person_id: p_zwjyvg4Tur4GoMjAZWnJee
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XTQq1EWQpUKSLR6sYBtsVb
          claim_id: c_WQUFbgBskGhVd3Mhff9pd1
          source_id: s_8xCG8psnoX12GUQ3jKd9qK
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

# 王德欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德欽 | accepted |
| death.date | 1279年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德欽（CBDB 38408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38408&o=json)
