---
schema: wang-person/v1
id: p_tj5DGCFDhYq1D9Wie2TAZW
status: active
merged_into: null
display_name: 王浹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2Fx7NpQvBYeguPjHBHsLWD
        subject_person_id: p_tj5DGCFDhYq1D9Wie2TAZW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6LyQ5HSwXTqoYFBJdPGs3D
          claim_id: c_2Fx7NpQvBYeguPjHBHsLWD
          source_id: s_HiqVa9588Q4L3BDsV4uF84
          stance: supports
          locator: CBDB:467955
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（467955）
          source: &a1
            id: s_HiqVa9588Q4L3BDsV4uF84
            source_type: api_record
            title: 中国历代人物传记资料库：王浹（CBDB 467955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467955&o=json
            external_identifier: CBDB:467955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.066Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JQvs4yCj5zbWqDhL4XjMkC
        subject_person_id: p_tj5DGCFDhYq1D9Wie2TAZW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为東晉人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vehJdYJJ4u884S8Vx5FTe6
          claim_id: c_JQvs4yCj5zbWqDhL4XjMkC
          source_id: s_HiqVa9588Q4L3BDsV4uF84
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

# 王浹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浹 | accepted |
| bio.summary | CBDB 记载为東晉人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王浹（CBDB 467955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467955&o=json)
