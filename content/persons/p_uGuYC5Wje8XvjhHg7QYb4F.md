---
schema: wang-person/v1
id: p_uGuYC5Wje8XvjhHg7QYb4F
status: active
merged_into: null
display_name: 王檢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6kV3dMwsweQyQEMWQU3ymR
        subject_person_id: p_uGuYC5Wje8XvjhHg7QYb4F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王檢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b3EHBgu1CgG48UDa8zPCZD
          claim_id: c_6kV3dMwsweQyQEMWQU3ymR
          source_id: s_Mh89bjVQtcDGVhtdUib94X
          stance: supports
          locator: CBDB:497132
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（497132）
          source: &a1
            id: s_Mh89bjVQtcDGVhtdUib94X
            source_type: api_record
            title: 中国历代人物传记资料库：王檢（CBDB 497132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497132&o=json
            external_identifier: CBDB:497132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.622Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zy2HTM6EPQX6gw1WVN6LXX
        subject_person_id: p_uGuYC5Wje8XvjhHg7QYb4F
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
        - id: cs_2cQvptydy2hJ25ZQric96Z
          claim_id: c_zy2HTM6EPQX6gw1WVN6LXX
          source_id: s_Mh89bjVQtcDGVhtdUib94X
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

# 王檢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王檢 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王檢（CBDB 497132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497132&o=json)
