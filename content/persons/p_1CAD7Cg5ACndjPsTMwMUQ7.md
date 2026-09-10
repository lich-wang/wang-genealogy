---
schema: wang-person/v1
id: p_1CAD7Cg5ACndjPsTMwMUQ7
status: merged
merged_into: p_SAKZSsVXkQRnwcLYqa1oYe
display_name: 王越
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DKFTWTCvq3ZWN3WDS1aSTq
        subject_person_id: p_1CAD7Cg5ACndjPsTMwMUQ7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王越
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tVyUkBsvzDnPtV75G8jryJ
          claim_id: c_DKFTWTCvq3ZWN3WDS1aSTq
          source_id: s_qxt5DMMgSNVDRYEUqG9Gbk
          stance: supports
          locator: CBDB:467429
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（467429）
          source: &a1
            id: s_qxt5DMMgSNVDRYEUqG9Gbk
            source_type: api_record
            title: 中国历代人物传记资料库：王越（CBDB 467429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467429&o=json
            external_identifier: CBDB:467429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f7ohzhPefnjqNJB6gS1p2r
        subject_person_id: p_1CAD7Cg5ACndjPsTMwMUQ7
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
        - id: cs_HGH1NE58JfMBadVUBjPVSr
          claim_id: c_f7ohzhPefnjqNJB6gS1p2r
          source_id: s_qxt5DMMgSNVDRYEUqG9Gbk
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

# 王越

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王越 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王越（CBDB 467429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467429&o=json)
