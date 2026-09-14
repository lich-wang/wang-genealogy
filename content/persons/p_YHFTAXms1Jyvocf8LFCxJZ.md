---
schema: wang-person/v1
id: p_YHFTAXms1Jyvocf8LFCxJZ
status: active
merged_into: null
display_name: 王經
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uyxiXCh8BiwdTahcuZ9Qdg
        subject_person_id: p_YHFTAXms1Jyvocf8LFCxJZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4YH31R1YX7htJH5M4386bD
          claim_id: c_uyxiXCh8BiwdTahcuZ9Qdg
          source_id: s_4qnCunUAHcxrQUp4BKk1Ud
          stance: supports
          locator: CBDB:329695
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329695）
          source: &a1
            id: s_4qnCunUAHcxrQUp4BKk1Ud
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 329695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329695&o=json
            external_identifier: CBDB:329695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.336Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4uXMbkcaN5UNCAfFXSF3tp
        subject_person_id: p_YHFTAXms1Jyvocf8LFCxJZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經，明人物。嘉靖四十四年進士，籍贯遵化。（中国历代人物传记资料库 CBDB 329695）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ojRV8grM9lbDjiWl5rUW3W
          claim_id: c_4uXMbkcaN5UNCAfFXSF3tp
          source_id: s_4qnCunUAHcxrQUp4BKk1Ud
          stance: supports
          locator: CBDB:329695
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ig6JwRn-E3L0QRUBNrjAJe
        subject_person_id: p_YHFTAXms1Jyvocf8LFCxJZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hoiRRCExCw4KSUTuvH17WP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PCXHeU4H5Yn0y3Fc9_RmCz
          claim_id: c_ig6JwRn-E3L0QRUBNrjAJe
          source_id: s_4qnCunUAHcxrQUp4BKk1Ud
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第二十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hoiRRCExCw4KSUTuvH17WP
        status: active
        display_name: 王楣
        merged_into_person_id: null
    - claim:
        id: c_zSFX17ivJyAZtc25NWEAME
        subject_person_id: p_YHFTAXms1Jyvocf8LFCxJZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9st3vp7RQQDmU7evKyY6MH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LSTIW5POWr57sDC6EJ-xBE
          claim_id: c_zSFX17ivJyAZtc25NWEAME
          source_id: s_35q681ETLhqp6nUW-H8bDn
          stance: supports
          locator: CBDB：兄弟 王楣（205205）之父／母 王經
          quotation: null
          interpretation_note: 由兄弟关系推断：王楹 与 王楣 为同胞（CBDB 记「弟」），王楣 之父／母即 王楹 之父／母。
          source:
            id: s_35q681ETLhqp6nUW-H8bDn
            source_type: api_record
            title: 中国历代人物传记资料库：王楹（CBDB 329700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329700&o=json
            external_identifier: CBDB:329700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9st3vp7RQQDmU7evKyY6MH
        status: active
        display_name: 王楹
        merged_into_person_id: null
    - claim:
        id: c_VE3GZX0v5s1zN4BXrc86AI
        subject_person_id: p_YHFTAXms1Jyvocf8LFCxJZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PEhQA5fEbXziCDFGGChCsV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WD9_SaD1JvAh0YgC--e9Ab
          claim_id: c_VE3GZX0v5s1zN4BXrc86AI
          source_id: s_w-zJcVJBJMuqngf9hfjI2g
          stance: supports
          locator: CBDB：兄弟 王楣（205205）之父／母 王經
          quotation: null
          interpretation_note: 由兄弟关系推断：王橋 与 王楣 为同胞（CBDB 记「兄」），王楣 之父／母即 王橋 之父／母。
          source:
            id: s_w-zJcVJBJMuqngf9hfjI2g
            source_type: api_record
            title: 中国历代人物传记资料库：王橋（CBDB 329702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329702&o=json
            external_identifier: CBDB:329702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PEhQA5fEbXziCDFGGChCsV
        status: active
        display_name: 王橋
        merged_into_person_id: null
    - claim:
        id: c_3nSS_XBYQ8t1maxXzaUONk
        subject_person_id: p_YHFTAXms1Jyvocf8LFCxJZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WvpouDrnZddAA1pwt6Bsjk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KDD1wZCT_FqZjsM6bHtDJM
          claim_id: c_3nSS_XBYQ8t1maxXzaUONk
          source_id: s_B6RwL-qEeT8gLK-17S1050
          stance: supports
          locator: CBDB：兄弟 王楣（205205）之父／母 王經
          quotation: null
          interpretation_note: 由兄弟关系推断：王松 与 王楣 为同胞（CBDB 记「兄」），王楣 之父／母即 王松 之父／母。
          source:
            id: s_B6RwL-qEeT8gLK-17S1050
            source_type: api_record
            title: 中国历代人物传记资料库：王松（CBDB 329703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329703&o=json
            external_identifier: CBDB:329703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WvpouDrnZddAA1pwt6Bsjk
        status: active
        display_name: 王松
        merged_into_person_id: null
    - claim:
        id: c_WR7q2lgP4WPMZHRwIPKWVt
        subject_person_id: p_YHFTAXms1Jyvocf8LFCxJZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cMk6Bz7fGGhwUvZTa5dmgt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vYhq5Y0KZVidxwBDrWwfC2
          claim_id: c_WR7q2lgP4WPMZHRwIPKWVt
          source_id: s_uAasZHuSmL0FfEFDv_ONKz
          stance: supports
          locator: CBDB：兄弟 王楣（205205）之父／母 王經
          quotation: null
          interpretation_note: 由兄弟关系推断：王楠 与 王楣 为同胞（CBDB 记「兄」），王楣 之父／母即 王楠 之父／母。
          source:
            id: s_uAasZHuSmL0FfEFDv_ONKz
            source_type: api_record
            title: 中国历代人物传记资料库：王楠（CBDB 329704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329704&o=json
            external_identifier: CBDB:329704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cMk6Bz7fGGhwUvZTa5dmgt
        status: active
        display_name: 王楠
        merged_into_person_id: null
    - claim:
        id: c_Retssxo9pTJ5Yaw8PXt-Hy
        subject_person_id: p_YHFTAXms1Jyvocf8LFCxJZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kw6Povg4ac2DoDdZJ3HgDC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OmYUasQZJocWfGL-FxaKa_
          claim_id: c_Retssxo9pTJ5Yaw8PXt-Hy
          source_id: s_mCGro8Por4zFzGPk_L9Phi
          stance: supports
          locator: CBDB：兄弟 王楣（205205）之父／母 王經
          quotation: null
          interpretation_note: 由兄弟关系推断：王樓 与 王楣 为同胞（CBDB 记「弟」），王楣 之父／母即 王樓 之父／母。
          source:
            id: s_mCGro8Por4zFzGPk_L9Phi
            source_type: api_record
            title: 中国历代人物传记资料库：王樓（CBDB 329701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329701&o=json
            external_identifier: CBDB:329701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kw6Povg4ac2DoDdZJ3HgDC
        status: active
        display_name: 王樓
        merged_into_person_id: null
    - claim:
        id: c_wX7OhII_tlfv1NTv_SpeW_
        subject_person_id: p_YHFTAXms1Jyvocf8LFCxJZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_maYRENQxzfRp4y47Nm1HV9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_65k6FRsTQusNvzDV4qYPy_
          claim_id: c_wX7OhII_tlfv1NTv_SpeW_
          source_id: s_ycb0B_bh6bsgoWE8CSc0Tl
          stance: supports
          locator: CBDB：兄弟 王楣（205205）之父／母 王經
          quotation: null
          interpretation_note: 由兄弟关系推断：王棟 与 王楣 为同胞（CBDB 记「弟」），王楣 之父／母即 王棟 之父／母。
          source:
            id: s_ycb0B_bh6bsgoWE8CSc0Tl
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 329699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329699&o=json
            external_identifier: CBDB:329699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_maYRENQxzfRp4y47Nm1HV9
        status: active
        display_name: 王棟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王經 | accepted |
| bio.summary | 王經，明人物。嘉靖四十四年進士，籍贯遵化。（中国历代人物传记资料库 CBDB 329695） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hoiRRCExCw4KSUTuvH17WP | 王楣 | accepted |
| children | p_9st3vp7RQQDmU7evKyY6MH | 王楹 | accepted |
| children | p_PEhQA5fEbXziCDFGGChCsV | 王橋 | accepted |
| children | p_WvpouDrnZddAA1pwt6Bsjk | 王松 | accepted |
| children | p_cMk6Bz7fGGhwUvZTa5dmgt | 王楠 | accepted |
| children | p_kw6Povg4ac2DoDdZJ3HgDC | 王樓 | accepted |
| children | p_maYRENQxzfRp4y47Nm1HV9 | 王棟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王棟（CBDB 329699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329699&o=json)
- [中国历代人物传记资料库：王經（CBDB 329695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329695&o=json)
- [中国历代人物传记资料库：王樓（CBDB 329701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329701&o=json)
- [中国历代人物传记资料库：王楠（CBDB 329704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329704&o=json)
- [中国历代人物传记资料库：王橋（CBDB 329702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329702&o=json)
- [中国历代人物传记资料库：王松（CBDB 329703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329703&o=json)
- [中国历代人物传记资料库：王楹（CBDB 329700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329700&o=json)
