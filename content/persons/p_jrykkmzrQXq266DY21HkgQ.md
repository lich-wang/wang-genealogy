---
schema: wang-person/v1
id: p_jrykkmzrQXq266DY21HkgQ
status: active
merged_into: null
display_name: 王灌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cH75uJpgud21DSMVwxSy2C
        subject_person_id: p_jrykkmzrQXq266DY21HkgQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王灌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ijP8n1J1awRBZJwhGNzxgX
          claim_id: c_cH75uJpgud21DSMVwxSy2C
          source_id: s_Q6Q779p5KY37kgE2Gxof7x
          stance: supports
          locator: CBDB:284252
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284252）
          source: &a1
            id: s_Q6Q779p5KY37kgE2Gxof7x
            source_type: api_record
            title: 中国历代人物传记资料库：王灌（CBDB 284252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284252&o=json
            external_identifier: CBDB:284252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.191Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PTTzgRGRtJpkPiKGXF9HNy
        subject_person_id: p_jrykkmzrQXq266DY21HkgQ
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
        - id: cs_1Aj5qRXmy3hn8VxZidTAMx
          claim_id: c_PTTzgRGRtJpkPiKGXF9HNy
          source_id: s_Q6Q779p5KY37kgE2Gxof7x
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

# 王灌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王灌 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王灌（CBDB 284252）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284252&o=json)
