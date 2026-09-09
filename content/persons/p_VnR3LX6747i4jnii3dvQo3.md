---
schema: wang-person/v1
id: p_VnR3LX6747i4jnii3dvQo3
status: active
merged_into: null
display_name: 王翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uMZ9zf1Y7rkHAdiM3rT1Vg
        subject_person_id: p_VnR3LX6747i4jnii3dvQo3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TpqHgqmsdQJ5yuDVUg76DY
          claim_id: c_uMZ9zf1Y7rkHAdiM3rT1Vg
          source_id: s_L7Ffk9hkZNZevUqv8uHT85
          stance: supports
          locator: CBDB:22232
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22232）
          source: &a1
            id: s_L7Ffk9hkZNZevUqv8uHT85
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 22232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22232&o=json
            external_identifier: CBDB:22232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.858Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2jAM2C3J9dL63kARxAQPkh
        subject_person_id: p_VnR3LX6747i4jnii3dvQo3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XYwdKjKuxHy1A2aWE1wNK4
          claim_id: c_2jAM2C3J9dL63kARxAQPkh
          source_id: s_L7Ffk9hkZNZevUqv8uHT85
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

# 王翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翰 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翰（CBDB 22232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22232&o=json)
