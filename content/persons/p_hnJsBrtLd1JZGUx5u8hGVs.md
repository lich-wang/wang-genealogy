---
schema: wang-person/v1
id: p_hnJsBrtLd1JZGUx5u8hGVs
status: active
merged_into: null
display_name: 王觀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9k92yERjgEA2YTL1nPjWvx
        subject_person_id: p_hnJsBrtLd1JZGUx5u8hGVs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fMXjcMYxCkGEe3Q9cbV4Ra
          claim_id: c_9k92yERjgEA2YTL1nPjWvx
          source_id: s_DyobPWShM5Z4DDtDfanG4o
          stance: supports
          locator: CBDB:202360
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202360）
          source: &a1
            id: s_DyobPWShM5Z4DDtDfanG4o
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 202360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202360&o=json
            external_identifier: CBDB:202360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.738Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hp8X2j8x9JK2VJsMcBMZRU
        subject_person_id: p_hnJsBrtLd1JZGUx5u8hGVs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1384年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MRyYZVkgjvHqEuMY8PxTn6
          claim_id: c_hp8X2j8x9JK2VJsMcBMZRU
          source_id: s_DyobPWShM5Z4DDtDfanG4o
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ksBemLyVN4PKtBUE43XwZ8
        subject_person_id: p_hnJsBrtLd1JZGUx5u8hGVs
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
        - id: cs_tzrc3WGsp7g3zAx9zsbG7y
          claim_id: c_ksBemLyVN4PKtBUE43XwZ8
          source_id: s_DyobPWShM5Z4DDtDfanG4o
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

# 王觀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀 | accepted |
| birth.date | 1384年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王觀（CBDB 202360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202360&o=json)
