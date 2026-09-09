---
schema: wang-person/v1
id: p_eb9kb2zEZ1XzT8oo7vkHQF
status: active
merged_into: null
display_name: 王懋政
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RFgpg51wrZoHhwXcHTySZT
        subject_person_id: p_eb9kb2zEZ1XzT8oo7vkHQF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uT6ygsS8FQJL42g78447vs
          claim_id: c_RFgpg51wrZoHhwXcHTySZT
          source_id: s_uF54NetPfAa8Q18Bcjyuv8
          stance: supports
          locator: CBDB:638015
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638015）
          source: &a1
            id: s_uF54NetPfAa8Q18Bcjyuv8
            source_type: api_record
            title: 中国历代人物传记资料库：王懋政（CBDB 638015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638015&o=json
            external_identifier: CBDB:638015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qhmazzr85C8ep9mVCyUbS6
        subject_person_id: p_eb9kb2zEZ1XzT8oo7vkHQF
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
        - id: cs_V3Q59AC4smXZ2jV9sirTwo
          claim_id: c_Qhmazzr85C8ep9mVCyUbS6
          source_id: s_uF54NetPfAa8Q18Bcjyuv8
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

# 王懋政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋政 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懋政（CBDB 638015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638015&o=json)
