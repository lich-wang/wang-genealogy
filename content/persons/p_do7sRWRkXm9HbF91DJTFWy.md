---
schema: wang-person/v1
id: p_do7sRWRkXm9HbF91DJTFWy
status: active
merged_into: null
display_name: 王智
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Lvn6GGUp7QqNgYudgZ8HH4
        subject_person_id: p_do7sRWRkXm9HbF91DJTFWy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RheLjS1m9gsQe4DQAb6sAg
          claim_id: c_Lvn6GGUp7QqNgYudgZ8HH4
          source_id: s_x8iqghaZ9G1jhaNV7hymRN
          stance: supports
          locator: CBDB:281419
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（281419）
          source: &a1
            id: s_x8iqghaZ9G1jhaNV7hymRN
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 281419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281419&o=json
            external_identifier: CBDB:281419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.051Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tNUg7D16416r4vhGLuAL6x
        subject_person_id: p_do7sRWRkXm9HbF91DJTFWy
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
        - id: cs_ESCKq9miXu7UeAgbhrsHcM
          claim_id: c_tNUg7D16416r4vhGLuAL6x
          source_id: s_x8iqghaZ9G1jhaNV7hymRN
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

# 王智

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王智 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王智（CBDB 281419）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281419&o=json)
