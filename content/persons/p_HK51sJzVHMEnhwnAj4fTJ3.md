---
schema: wang-person/v1
id: p_HK51sJzVHMEnhwnAj4fTJ3
status: active
merged_into: null
display_name: 王聖蘭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ueQ2qDAcTk6PvFijEjDjan
        subject_person_id: p_HK51sJzVHMEnhwnAj4fTJ3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聖蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mS3jgQHReQ37rTGsanXvo8
          claim_id: c_ueQ2qDAcTk6PvFijEjDjan
          source_id: s_bL7hDZBgEdMaCp6RRUTCib
          stance: supports
          locator: CBDB:639941
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639941）
          source: &a1
            id: s_bL7hDZBgEdMaCp6RRUTCib
            source_type: api_record
            title: 中国历代人物传记资料库：王聖蘭（CBDB 639941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639941&o=json
            external_identifier: CBDB:639941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.093Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vjQGQfSqj5VU7yJG2EMEQv
        subject_person_id: p_HK51sJzVHMEnhwnAj4fTJ3
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
        - id: cs_GHVK7a3JJNAWEzj1spCmM6
          claim_id: c_vjQGQfSqj5VU7yJG2EMEQv
          source_id: s_bL7hDZBgEdMaCp6RRUTCib
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

# 王聖蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聖蘭 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聖蘭（CBDB 639941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639941&o=json)
