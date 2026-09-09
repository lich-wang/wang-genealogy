---
schema: wang-person/v1
id: p_NVvisx7JWBXhBVSDuNEQ5h
status: active
merged_into: null
display_name: 王晏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3MWYc4176QjNjEFixumQ6o
        subject_person_id: p_NVvisx7JWBXhBVSDuNEQ5h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_whpFFcwKbTnbUKXmpYH2xR
          claim_id: c_3MWYc4176QjNjEFixumQ6o
          source_id: s_zFq2iZXK3W5DyYNHWEW3ci
          stance: supports
          locator: CBDB:468597
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（468597）
          source: &a1
            id: s_zFq2iZXK3W5DyYNHWEW3ci
            source_type: api_record
            title: 中国历代人物传记资料库：王晏（CBDB 468597）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=468597&o=json
            external_identifier: CBDB:468597
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.099Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yM2rPqZXpJYCxv8aNYsiK8
        subject_person_id: p_NVvisx7JWBXhBVSDuNEQ5h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为後周人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8J8TBeHCfUAtq6GTc4GTas
          claim_id: c_yM2rPqZXpJYCxv8aNYsiK8
          source_id: s_zFq2iZXK3W5DyYNHWEW3ci
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

# 王晏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晏 | accepted |
| bio.summary | CBDB 记载为後周人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晏（CBDB 468597）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=468597&o=json)
