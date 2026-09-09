---
schema: wang-person/v1
id: p_2ikP4x5v4Dn6VEoAAJy53Z
status: active
merged_into: null
display_name: 王汝玉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kNX97RqR8C8wBz7e3MrjwQ
        subject_person_id: p_2ikP4x5v4Dn6VEoAAJy53Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v7cH7rbEj72aTsKnVv5FT3
          claim_id: c_kNX97RqR8C8wBz7e3MrjwQ
          source_id: s_1KpQN7kM94ZaSMB6MNtr2m
          stance: supports
          locator: CBDB:126499
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126499）
          source: &a1
            id: s_1KpQN7kM94ZaSMB6MNtr2m
            source_type: api_record
            title: 中国历代人物传记资料库：王汝玉（CBDB 126499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126499&o=json
            external_identifier: CBDB:126499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.987Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4CughE1jUue47F2EvRkxFR
        subject_person_id: p_2ikP4x5v4Dn6VEoAAJy53Z
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1349年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xGKtE2m8iNUhUdMDvJFBRG
          claim_id: c_4CughE1jUue47F2EvRkxFR
          source_id: s_1KpQN7kM94ZaSMB6MNtr2m
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_vGLd9ADDY6SrPhr7WkKf2X
        subject_person_id: p_2ikP4x5v4Dn6VEoAAJy53Z
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1415年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Equ3XgiBt5a78UwvMexjPt
          claim_id: c_vGLd9ADDY6SrPhr7WkKf2X
          source_id: s_1KpQN7kM94ZaSMB6MNtr2m
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mkEjrmhQbXrsZ9K3BPBuJJ
        subject_person_id: p_2ikP4x5v4Dn6VEoAAJy53Z
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
        - id: cs_zUVZwUVdBSv9HRQKB3Qd2m
          claim_id: c_mkEjrmhQbXrsZ9K3BPBuJJ
          source_id: s_1KpQN7kM94ZaSMB6MNtr2m
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

# 王汝玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝玉 | accepted |
| birth.date | 1349年 | accepted |
| death.date | 1415年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝玉（CBDB 126499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126499&o=json)
