---
schema: wang-person/v1
id: p_Fo9Y6HDR7sX1CydNzoCiFm
status: active
merged_into: null
display_name: 王開運
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FFosqzhF28K2sp3iufoyNg
        subject_person_id: p_Fo9Y6HDR7sX1CydNzoCiFm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開運
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E16ByLh2PefAnQzGx99qXn
          claim_id: c_FFosqzhF28K2sp3iufoyNg
          source_id: s_yjtJFxQTtsGZko3UzNDmv7
          stance: supports
          locator: CBDB:506106
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（506106）
          source: &a1
            id: s_yjtJFxQTtsGZko3UzNDmv7
            source_type: api_record
            title: 中国历代人物传记资料库：王開運（CBDB 506106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506106&o=json
            external_identifier: CBDB:506106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dceodeL2SHKdFZ6U4d8KRy
        subject_person_id: p_Fo9Y6HDR7sX1CydNzoCiFm
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
        - id: cs_NGiBaU957r6QtvGSKwfyN2
          claim_id: c_dceodeL2SHKdFZ6U4d8KRy
          source_id: s_yjtJFxQTtsGZko3UzNDmv7
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

# 王開運

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王開運 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王開運（CBDB 506106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506106&o=json)
