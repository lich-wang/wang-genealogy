---
schema: wang-person/v1
id: p_VvXuCA9FZ7qFDxDX6BZHDa
status: active
merged_into: null
display_name: 王遘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QLJux3baL685LSLLXiXov2
        subject_person_id: p_VvXuCA9FZ7qFDxDX6BZHDa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TJCzKjFgWLPXVkM9UAQves
          claim_id: c_QLJux3baL685LSLLXiXov2
          source_id: s_7YkweB7hzEBgrF5XAZjmks
          stance: supports
          locator: CBDB:98042
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（98042）
          source: &a1
            id: s_7YkweB7hzEBgrF5XAZjmks
            source_type: api_record
            title: 中国历代人物传记资料库：王遘（CBDB 98042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98042&o=json
            external_identifier: CBDB:98042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.303Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Av1TsL1EPQehvr1yBEBuQk
        subject_person_id: p_VvXuCA9FZ7qFDxDX6BZHDa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PizAz35tod3q8KdsRh9fxy
          claim_id: c_Av1TsL1EPQehvr1yBEBuQk
          source_id: s_7YkweB7hzEBgrF5XAZjmks
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

# 王遘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遘 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遘（CBDB 98042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98042&o=json)
