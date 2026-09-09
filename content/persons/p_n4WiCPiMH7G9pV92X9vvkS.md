---
schema: wang-person/v1
id: p_n4WiCPiMH7G9pV92X9vvkS
status: active
merged_into: null
display_name: 王元禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZYrX88mhMteUQPHPqoMxf1
        subject_person_id: p_n4WiCPiMH7G9pV92X9vvkS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G9LgQP4uStd4kR7q9spdXL
          claim_id: c_ZYrX88mhMteUQPHPqoMxf1
          source_id: s_P5J3EfKQmH7yx41mNo7g7c
          stance: supports
          locator: CBDB:509204
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（509204）
          source: &a1
            id: s_P5J3EfKQmH7yx41mNo7g7c
            source_type: api_record
            title: 中国历代人物传记资料库：王元禮（CBDB 509204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509204&o=json
            external_identifier: CBDB:509204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.142Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gNjrMXviRGRM7hyQT513Ez
        subject_person_id: p_n4WiCPiMH7G9pV92X9vvkS
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
        - id: cs_qaZx7kKnM35CQA8RQeYxGt
          claim_id: c_gNjrMXviRGRM7hyQT513Ez
          source_id: s_P5J3EfKQmH7yx41mNo7g7c
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

# 王元禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元禮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元禮（CBDB 509204）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509204&o=json)
