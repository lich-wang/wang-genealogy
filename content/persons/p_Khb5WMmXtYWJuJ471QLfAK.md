---
schema: wang-person/v1
id: p_Khb5WMmXtYWJuJ471QLfAK
status: active
merged_into: null
display_name: 王一寧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xBZxU9MzxAtZyueiKeT3Uy
        subject_person_id: p_Khb5WMmXtYWJuJ471QLfAK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wqbjdev88ez5Sz8wDcuBvW
          claim_id: c_xBZxU9MzxAtZyueiKeT3Uy
          source_id: s_P2BWzx8jvp7mWTRayg5o9x
          stance: supports
          locator: CBDB:457814
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（457814）
          source: &a1
            id: s_P2BWzx8jvp7mWTRayg5o9x
            source_type: api_record
            title: 中国历代人物传记资料库：王一寧（CBDB 457814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457814&o=json
            external_identifier: CBDB:457814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.617Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fqahAXEx7uoprfjUBNKY3c
        subject_person_id: p_Khb5WMmXtYWJuJ471QLfAK
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
        - id: cs_RwDW4wMTNuWDwF8f9Cg79N
          claim_id: c_fqahAXEx7uoprfjUBNKY3c
          source_id: s_P2BWzx8jvp7mWTRayg5o9x
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

# 王一寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一寧 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一寧（CBDB 457814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457814&o=json)
