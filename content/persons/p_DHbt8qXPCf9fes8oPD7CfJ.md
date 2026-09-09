---
schema: wang-person/v1
id: p_DHbt8qXPCf9fes8oPD7CfJ
status: active
merged_into: null
display_name: 王佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2yZhkznowg1uBBvhj58YPz
        subject_person_id: p_DHbt8qXPCf9fes8oPD7CfJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bVvkJBJxEMU3QURMRqZ1fQ
          claim_id: c_2yZhkznowg1uBBvhj58YPz
          source_id: s_Q7uPVrPTCmFTmS3aBnKvKD
          stance: supports
          locator: CBDB:475310
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（475310）
          source: &a1
            id: s_Q7uPVrPTCmFTmS3aBnKvKD
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 475310）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475310&o=json
            external_identifier: CBDB:475310
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.397Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rb9EKUFy7bLQw6HK9B9nng
        subject_person_id: p_DHbt8qXPCf9fes8oPD7CfJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_96aKVGUH9mE6WgnonDstAu
          claim_id: c_Rb9EKUFy7bLQw6HK9B9nng
          source_id: s_Q7uPVrPTCmFTmS3aBnKvKD
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

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 475310）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475310&o=json)
