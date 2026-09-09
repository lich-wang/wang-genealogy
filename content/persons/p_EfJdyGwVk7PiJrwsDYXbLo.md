---
schema: wang-person/v1
id: p_EfJdyGwVk7PiJrwsDYXbLo
status: active
merged_into: null
display_name: 王豸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UwfckbXfu9gqE8no63xYjx
        subject_person_id: p_EfJdyGwVk7PiJrwsDYXbLo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HjRSmLTPe8r7riRJ423cqa
          claim_id: c_UwfckbXfu9gqE8no63xYjx
          source_id: s_xKQ5jL6DiHY4YSqMSAPFzD
          stance: supports
          locator: CBDB:308956
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（308956）
          source: &a1
            id: s_xKQ5jL6DiHY4YSqMSAPFzD
            source_type: api_record
            title: 中国历代人物传记资料库：王豸（CBDB 308956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308956&o=json
            external_identifier: CBDB:308956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.802Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C2kYN3Box5K1uKbmoK7bcH
        subject_person_id: p_EfJdyGwVk7PiJrwsDYXbLo
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
        - id: cs_HctXNCKo6F9AgxXyLUjGV3
          claim_id: c_C2kYN3Box5K1uKbmoK7bcH
          source_id: s_xKQ5jL6DiHY4YSqMSAPFzD
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

# 王豸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王豸 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王豸（CBDB 308956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308956&o=json)
