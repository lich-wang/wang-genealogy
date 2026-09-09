---
schema: wang-person/v1
id: p_Zc7kKe5A1m569f69JWYGqF
status: active
merged_into: null
display_name: 王道興
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q8NzLtbkdnBcezFhfFW716
        subject_person_id: p_Zc7kKe5A1m569f69JWYGqF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dm6iZRgmFf764NuppY8rMw
          claim_id: c_Q8NzLtbkdnBcezFhfFW716
          source_id: s_wDuSL3DEP6gsF1RyJmvCf7
          stance: supports
          locator: CBDB:487264
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（487264）
          source: &a1
            id: s_wDuSL3DEP6gsF1RyJmvCf7
            source_type: api_record
            title: 中国历代人物传记资料库：王道興（CBDB 487264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487264&o=json
            external_identifier: CBDB:487264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X6v9a2y21Cb35BQ2wgb4qD
        subject_person_id: p_Zc7kKe5A1m569f69JWYGqF
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
        - id: cs_j4eb3rMQYw4ijq45sB8kmf
          claim_id: c_X6v9a2y21Cb35BQ2wgb4qD
          source_id: s_wDuSL3DEP6gsF1RyJmvCf7
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

# 王道興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道興 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道興（CBDB 487264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487264&o=json)
