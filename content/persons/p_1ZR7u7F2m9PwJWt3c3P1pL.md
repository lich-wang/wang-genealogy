---
schema: wang-person/v1
id: p_1ZR7u7F2m9PwJWt3c3P1pL
status: active
merged_into: null
display_name: 王式
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e5zYEUk9wSKYqhy3B5DamN
        subject_person_id: p_1ZR7u7F2m9PwJWt3c3P1pL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zzkvwoQHg1AAroAr4LnAXQ
          claim_id: c_e5zYEUk9wSKYqhy3B5DamN
          source_id: s_87eJFrJ7v6RTnyMZqLb4eT
          stance: supports
          locator: CBDB:561286
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（561286）
          source: &a1
            id: s_87eJFrJ7v6RTnyMZqLb4eT
            source_type: api_record
            title: 中国历代人物传记资料库：王式（CBDB 561286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561286&o=json
            external_identifier: CBDB:561286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.737Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hoFn9pZ9vfLc6oMnvLSx9b
        subject_person_id: p_1ZR7u7F2m9PwJWt3c3P1pL
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
        - id: cs_BuranYkuH8tqoR4d7Stj1Z
          claim_id: c_hoFn9pZ9vfLc6oMnvLSx9b
          source_id: s_87eJFrJ7v6RTnyMZqLb4eT
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

# 王式

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王式 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王式（CBDB 561286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561286&o=json)
