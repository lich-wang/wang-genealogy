---
schema: wang-person/v1
id: p_PBvaMHmmNoVTz4SDbundN8
status: active
merged_into: null
display_name: 王來
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n8rs9MpfvG1WuYjnfRu7FK
        subject_person_id: p_PBvaMHmmNoVTz4SDbundN8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N5FrLNLhErNyHBPa9xYFQX
          claim_id: c_n8rs9MpfvG1WuYjnfRu7FK
          source_id: s_kHzyfSBiSvgPQEWeNZHUb3
          stance: supports
          locator: CBDB:67477
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67477）
          source: &a1
            id: s_kHzyfSBiSvgPQEWeNZHUb3
            source_type: api_record
            title: 中国历代人物传记资料库：王來（CBDB 67477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67477&o=json
            external_identifier: CBDB:67477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.996Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NJAHDSSRAkgKZfyhzDnZ84
        subject_person_id: p_PBvaMHmmNoVTz4SDbundN8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1395年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M1S9mkgRPcJ8YcN6gqRjPR
          claim_id: c_NJAHDSSRAkgKZfyhzDnZ84
          source_id: s_kHzyfSBiSvgPQEWeNZHUb3
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
        id: c_CVGDzGE2A6BRh1piJphons
        subject_person_id: p_PBvaMHmmNoVTz4SDbundN8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1470年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fm9DwkVChY31D4b5817c1t
          claim_id: c_CVGDzGE2A6BRh1piJphons
          source_id: s_kHzyfSBiSvgPQEWeNZHUb3
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
        id: c_mZRotwUsAgNoEdDhtn3FuG
        subject_person_id: p_PBvaMHmmNoVTz4SDbundN8
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
        - id: cs_9VWGKRhVqNtRm1hMAjDVfV
          claim_id: c_mZRotwUsAgNoEdDhtn3FuG
          source_id: s_kHzyfSBiSvgPQEWeNZHUb3
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

# 王來

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王來 | accepted |
| birth.date | 1395年 | accepted |
| death.date | 1470年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王來（CBDB 67477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67477&o=json)
