---
schema: wang-person/v1
id: p_VXmY2wF6EXdBxQg3D2DH3o
status: active
merged_into: null
display_name: 王之正
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iUd2PLNQgXLjDoxraPxF5t
        subject_person_id: p_VXmY2wF6EXdBxQg3D2DH3o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xFxjSQqJLKDzayGg4FoB5q
          claim_id: c_iUd2PLNQgXLjDoxraPxF5t
          source_id: s_yXtJiN7H6qKPUCfApjNxa1
          stance: supports
          locator: CBDB:488937
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（488937）
          source: &a1
            id: s_yXtJiN7H6qKPUCfApjNxa1
            source_type: api_record
            title: 中国历代人物传记资料库：王之正（CBDB 488937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488937&o=json
            external_identifier: CBDB:488937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.008Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7pkTU2XszMvMqCaqhcJq3J
        subject_person_id: p_VXmY2wF6EXdBxQg3D2DH3o
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
        - id: cs_teFbJbynDLBxDa7xRqTckT
          claim_id: c_7pkTU2XszMvMqCaqhcJq3J
          source_id: s_yXtJiN7H6qKPUCfApjNxa1
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

# 王之正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之正 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之正（CBDB 488937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488937&o=json)
