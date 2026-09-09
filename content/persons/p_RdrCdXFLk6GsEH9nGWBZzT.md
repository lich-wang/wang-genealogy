---
schema: wang-person/v1
id: p_RdrCdXFLk6GsEH9nGWBZzT
status: active
merged_into: null
display_name: 王銓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uoNQKurCH4gyFyEbZZ7o3m
        subject_person_id: p_RdrCdXFLk6GsEH9nGWBZzT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GSTVRnvFXHSJvtFFxRHmKk
          claim_id: c_uoNQKurCH4gyFyEbZZ7o3m
          source_id: s_L71Dx7dGPXqKLvGiejhQKe
          stance: supports
          locator: CBDB:480941
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（480941）
          source: &a1
            id: s_L71Dx7dGPXqKLvGiejhQKe
            source_type: api_record
            title: 中国历代人物传记资料库：王銓（CBDB 480941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480941&o=json
            external_identifier: CBDB:480941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.662Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2CQ3E8b8QvNksHs6JwraFS
        subject_person_id: p_RdrCdXFLk6GsEH9nGWBZzT
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
        - id: cs_Y85o55vNtM6JDXXZQL6aB6
          claim_id: c_2CQ3E8b8QvNksHs6JwraFS
          source_id: s_L71Dx7dGPXqKLvGiejhQKe
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

# 王銓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銓 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銓（CBDB 480941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480941&o=json)
