---
schema: wang-person/v1
id: p_8kzSpprqvBVxvPECr52ZAv
status: active
merged_into: null
display_name: 王紹基
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6J64hkpgVGAr9U81142Lpk
        subject_person_id: p_8kzSpprqvBVxvPECr52ZAv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qSvG1Cae1FhAMvpABFDCis
          claim_id: c_6J64hkpgVGAr9U81142Lpk
          source_id: s_ae4Hg8uz44tMRN2kMgtAqm
          stance: supports
          locator: CBDB:222280
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222280）
          source: &a1
            id: s_ae4Hg8uz44tMRN2kMgtAqm
            source_type: api_record
            title: 中国历代人物传记资料库：王紹基（CBDB 222280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222280&o=json
            external_identifier: CBDB:222280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.372Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6bUsZGJHaT8GGNdCeStxFE
        subject_person_id: p_8kzSpprqvBVxvPECr52ZAv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹基，明人物。萬曆十一年進士，籍贯咸寧。（中国历代人物传记资料库 CBDB 222280）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hBGpqG9DuHnp6gAKKAqaaK
          claim_id: c_6bUsZGJHaT8GGNdCeStxFE
          source_id: s_ae4Hg8uz44tMRN2kMgtAqm
          stance: supports
          locator: CBDB:222280
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pnY5DCDZAhH2tJO2JvbaYl
        subject_person_id: p_MzjvisS65eTZTH4c6EA4mL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8kzSpprqvBVxvPECr52ZAv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x3hWwQOLaObOBJkUZq-tjg
          claim_id: c_pnY5DCDZAhH2tJO2JvbaYl
          source_id: s_IeYYSJvKDHhZ4U76YyTzFW
          stance: supports
          locator: CBDB：兄弟 王紹先（206726）之父／母 王昌功
          quotation: null
          interpretation_note: 由兄弟关系推断：王紹基 与 王紹先 为同胞（CBDB 记「兄」），王紹先 之父／母即 王紹基 之父／母。
          source:
            id: s_IeYYSJvKDHhZ4U76YyTzFW
            source_type: api_record
            title: 中国历代人物传记资料库：王紹基（CBDB 222280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222280&o=json
            external_identifier: CBDB:222280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MzjvisS65eTZTH4c6EA4mL
        status: active
        display_name: 王昌功
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_6zFZ0tTOAPt_3Zc4KRhqUJ
        subject_person_id: p_8kzSpprqvBVxvPECr52ZAv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_stumq3LKUX83aY7FDSYoQ9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wti3nyf5GoP2GtHYCu6m3v
          claim_id: c_6zFZ0tTOAPt_3Zc4KRhqUJ
          source_id: s_IeYYSJvKDHhZ4U76YyTzFW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206726 王紹先）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IeYYSJvKDHhZ4U76YyTzFW
            source_type: api_record
            title: 中国历代人物传记资料库：王紹基（CBDB 222280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222280&o=json
            external_identifier: CBDB:222280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_stumq3LKUX83aY7FDSYoQ9
        status: active
        display_name: 王紹先
        merged_into_person_id: null
---

# 王紹基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹基 | accepted |
| bio.summary | 王紹基，明人物。萬曆十一年進士，籍贯咸寧。（中国历代人物传记资料库 CBDB 222280） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MzjvisS65eTZTH4c6EA4mL | 王昌功 | accepted |
| other | p_stumq3LKUX83aY7FDSYoQ9 | 王紹先 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紹基（CBDB 222280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222280&o=json)
