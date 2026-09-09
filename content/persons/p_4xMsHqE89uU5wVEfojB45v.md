---
schema: wang-person/v1
id: p_4xMsHqE89uU5wVEfojB45v
status: active
merged_into: null
display_name: 王國璽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tBYnPogD9d4ZVLEP9CgAiR
        subject_person_id: p_4xMsHqE89uU5wVEfojB45v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3T12B2Ru2N4GZsX5n3Lgmx
          claim_id: c_tBYnPogD9d4ZVLEP9CgAiR
          source_id: s_oFSf5HVPB2gYEYWeaEx4go
          stance: supports
          locator: CBDB:554864
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（554864）
          source: &a1
            id: s_oFSf5HVPB2gYEYWeaEx4go
            source_type: api_record
            title: 中国历代人物传记资料库：王國璽（CBDB 554864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=554864&o=json
            external_identifier: CBDB:554864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.621Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hmNA6LTVwksHRfF4WbHVKv
        subject_person_id: p_4xMsHqE89uU5wVEfojB45v
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
        - id: cs_vmcaurPceSZuCJM3DdExc5
          claim_id: c_hmNA6LTVwksHRfF4WbHVKv
          source_id: s_oFSf5HVPB2gYEYWeaEx4go
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

# 王國璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國璽 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國璽（CBDB 554864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=554864&o=json)
