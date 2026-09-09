---
schema: wang-person/v1
id: p_jasLYL7MFDq9Qk1eitM1MF
status: active
merged_into: null
display_name: 王宸績
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5LCX4PfGjiWo8JxQ8SKheY
        subject_person_id: p_jasLYL7MFDq9Qk1eitM1MF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宸績
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1474MN9r5zLy1BVVNedw5S
          claim_id: c_5LCX4PfGjiWo8JxQ8SKheY
          source_id: s_3gU76YrocEysReLWp5styu
          stance: supports
          locator: CBDB:637233
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637233）
          source: &a1
            id: s_3gU76YrocEysReLWp5styu
            source_type: api_record
            title: 中国历代人物传记资料库：王宸績（CBDB 637233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637233&o=json
            external_identifier: CBDB:637233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.367Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qz14xYsX7zR12WjXMPUFF7
        subject_person_id: p_jasLYL7MFDq9Qk1eitM1MF
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
        - id: cs_y135HWkEKASuhSAVoZT4oy
          claim_id: c_qz14xYsX7zR12WjXMPUFF7
          source_id: s_3gU76YrocEysReLWp5styu
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

# 王宸績

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宸績 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宸績（CBDB 637233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637233&o=json)
