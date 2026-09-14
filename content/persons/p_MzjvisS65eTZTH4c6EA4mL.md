---
schema: wang-person/v1
id: p_MzjvisS65eTZTH4c6EA4mL
status: active
merged_into: null
display_name: 王昌功
cbdb_id: 222275
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bxRZ2BPx9Z4ji2FJxNDnG1
        subject_person_id: p_MzjvisS65eTZTH4c6EA4mL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌功，明人物。萬曆十一年進士，籍贯咸寧，曾任儒官。（中国历代人物传记资料库 CBDB 222275）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_QLfD9QCtDtQm3F_wDZgKFl
          claim_id: c_bxRZ2BPx9Z4ji2FJxNDnG1
          source_id: s_sAsyxDX9XjRZ9zN35jFNCJ
          stance: supports
          locator: CBDB:222275
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sAsyxDX9XjRZ9zN35jFNCJ
            source_type: api_record
            title: 中国历代人物传记资料库：王昌功（CBDB 222275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222275&o=json
            external_identifier: CBDB:222275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6dYnoVGdMT8ortbVVH6wbm
        subject_person_id: p_MzjvisS65eTZTH4c6EA4mL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌功
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Qo7JcK7fnwpNwZGBQpRvLd
          claim_id: c_6dYnoVGdMT8ortbVVH6wbm
          source_id: s_sAsyxDX9XjRZ9zN35jFNCJ
          stance: supports
          locator: CBDB:222275
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_TxDHEwS7pBQWCRkml8ZQzk
        subject_person_id: p_MzjvisS65eTZTH4c6EA4mL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_stumq3LKUX83aY7FDSYoQ9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WST65D7MHDJyzsxkcVGD0V
          claim_id: c_TxDHEwS7pBQWCRkml8ZQzk
          source_id: s_51SNKp1DcDfU2auLpQ39Cr
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_51SNKp1DcDfU2auLpQ39Cr
            source_type: api_record
            title: 中国历代人物传记资料库：王紹先（CBDB 206726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206726&o=json
            external_identifier: CBDB:206726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_stumq3LKUX83aY7FDSYoQ9
        status: active
        display_name: 王紹先
        merged_into_person_id: null
    - claim:
        id: c_tfF-8qnaMUFOFf_Ln59DiS
        subject_person_id: p_MzjvisS65eTZTH4c6EA4mL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8ZyPWhFTG5KhhhubTquXQD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wDLd_fIR-TxvmF_SQJ7C-E
          claim_id: c_tfF-8qnaMUFOFf_Ln59DiS
          source_id: s_vtSy3A54TT4pxL4PzVakr1
          stance: supports
          locator: CBDB：兄弟 王紹先（206726）之父／母 王昌功
          quotation: null
          interpretation_note: 由兄弟关系推断：王紹慶 与 王紹先 为同胞（CBDB 记「兄」），王紹先 之父／母即 王紹慶 之父／母。
          source:
            id: s_vtSy3A54TT4pxL4PzVakr1
            source_type: api_record
            title: 中国历代人物传记资料库：王紹慶（CBDB 222281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222281&o=json
            external_identifier: CBDB:222281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8ZyPWhFTG5KhhhubTquXQD
        status: active
        display_name: 王紹慶
        merged_into_person_id: null
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
        id: p_8kzSpprqvBVxvPECr52ZAv
        status: active
        display_name: 王紹基
        merged_into_person_id: null
    - claim:
        id: c_M-cZ51l6uBFUgzpuqDsG-7
        subject_person_id: p_MzjvisS65eTZTH4c6EA4mL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G1ykgCfKWZQhXAt9QemUyd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2LL8iOdba-CB1degjK1L03
          claim_id: c_M-cZ51l6uBFUgzpuqDsG-7
          source_id: s_0_h0FChb9_0eJrFbV_xotM
          stance: supports
          locator: CBDB：兄弟 王紹先（206726）之父／母 王昌功
          quotation: null
          interpretation_note: 由兄弟关系推断：王紹績 与 王紹先 为同胞（CBDB 记「兄」），王紹先 之父／母即 王紹績 之父／母。
          source:
            id: s_0_h0FChb9_0eJrFbV_xotM
            source_type: api_record
            title: 中国历代人物传记资料库：王紹績（CBDB 222279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222279&o=json
            external_identifier: CBDB:222279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_G1ykgCfKWZQhXAt9QemUyd
        status: active
        display_name: 王紹績
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昌功

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昌功，明人物。萬曆十一年進士，籍贯咸寧，曾任儒官。（中国历代人物传记资料库 CBDB 222275） | accepted |
| name.primary | 王昌功 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_stumq3LKUX83aY7FDSYoQ9 | 王紹先 | accepted |
| children | p_8ZyPWhFTG5KhhhubTquXQD | 王紹慶 | accepted |
| children | p_8kzSpprqvBVxvPECr52ZAv | 王紹基 | accepted |
| children | p_G1ykgCfKWZQhXAt9QemUyd | 王紹績 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昌功（CBDB 222275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222275&o=json)
- [中国历代人物传记资料库：王紹基（CBDB 222280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222280&o=json)
- [中国历代人物传记资料库：王紹績（CBDB 222279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222279&o=json)
- [中国历代人物传记资料库：王紹慶（CBDB 222281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222281&o=json)
- [中国历代人物传记资料库：王紹先（CBDB 206726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206726&o=json)
