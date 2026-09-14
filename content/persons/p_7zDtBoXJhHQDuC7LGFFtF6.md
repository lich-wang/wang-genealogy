---
schema: wang-person/v1
id: p_7zDtBoXJhHQDuC7LGFFtF6
status: active
merged_into: null
display_name: 王朝輔
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8zqBAhcLCVQdMiFNA8VHkr
        subject_person_id: p_7zDtBoXJhHQDuC7LGFFtF6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GT2Jx9GGWUzgp2ksBVNRAd
          claim_id: c_8zqBAhcLCVQdMiFNA8VHkr
          source_id: s_G9yR3MEaqvFb2RLT9A6TVA
          stance: supports
          locator: CBDB:267017
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267017）
          source: &a1
            id: s_G9yR3MEaqvFb2RLT9A6TVA
            source_type: api_record
            title: 中国历代人物传记资料库：王朝輔（CBDB 267017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267017&o=json
            external_identifier: CBDB:267017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HRQ5QLzBzoH8H3U6BmgUeo
        subject_person_id: p_7zDtBoXJhHQDuC7LGFFtF6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝輔，明人物。弘治九年進士，籍贯定州，曾任陰陽典術。（中国历代人物传记资料库 CBDB 267017）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_l5DYBTZRNISZ62Jmt2rmJl
          claim_id: c_HRQ5QLzBzoH8H3U6BmgUeo
          source_id: s_G9yR3MEaqvFb2RLT9A6TVA
          stance: supports
          locator: CBDB:267017
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_QDRp24ZGQKzcCpEws0bovg
        subject_person_id: p_7zDtBoXJhHQDuC7LGFFtF6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hzz13QG3KkgrJrrmRHzuBL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yzJYs2wIZR0GaJONaWJFII
          claim_id: c_QDRp24ZGQKzcCpEws0bovg
          source_id: s_G9yR3MEaqvFb2RLT9A6TVA
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第二十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Hzz13QG3KkgrJrrmRHzuBL
        status: active
        display_name: 王宣
        merged_into_person_id: null
    - claim:
        id: c_kP9CRt_vGctJGAvymH-2jx
        subject_person_id: p_7zDtBoXJhHQDuC7LGFFtF6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9TFfPBPbuARXG78htBxBNo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aHJp3h3KR_dMzyom1U7lbz
          claim_id: c_kP9CRt_vGctJGAvymH-2jx
          source_id: s_ms0ED1IMQoqL5K4hhpHYxh
          stance: supports
          locator: CBDB：兄弟 王宣（201094）之父／母 王朝輔
          quotation: null
          interpretation_note: 由兄弟关系推断：王宥 与 王宣 为同胞（CBDB 记「兄」），王宣 之父／母即 王宥 之父／母。
          source:
            id: s_ms0ED1IMQoqL5K4hhpHYxh
            source_type: api_record
            title: 中国历代人物传记资料库：王宥（CBDB 267024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267024&o=json
            external_identifier: CBDB:267024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9TFfPBPbuARXG78htBxBNo
        status: active
        display_name: 王宥
        merged_into_person_id: null
    - claim:
        id: c_JnpMmgQv0DQOvuALlf2fZU
        subject_person_id: p_7zDtBoXJhHQDuC7LGFFtF6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QqTzi2VpVBUVXaBss511gD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bF5RZjmkOTTbze_Di3I179
          claim_id: c_JnpMmgQv0DQOvuALlf2fZU
          source_id: s_hGr2ld0W3ZfMq_UWSC8H36
          stance: supports
          locator: CBDB：兄弟 王宣（201094）之父／母 王朝輔
          quotation: null
          interpretation_note: 由兄弟关系推断：王宜 与 王宣 为同胞（CBDB 记「兄」），王宣 之父／母即 王宜 之父／母。
          source:
            id: s_hGr2ld0W3ZfMq_UWSC8H36
            source_type: api_record
            title: 中国历代人物传记资料库：王宜（CBDB 267025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267025&o=json
            external_identifier: CBDB:267025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QqTzi2VpVBUVXaBss511gD
        status: active
        display_name: 王宜
        merged_into_person_id: null
    - claim:
        id: c_hR31w0t8WCFfm15W8Cc0oe
        subject_person_id: p_7zDtBoXJhHQDuC7LGFFtF6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T1TfDLuTZAccqowhsYwN5x
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tCEIvRWlKqgSEY3DWWE8Io
          claim_id: c_hR31w0t8WCFfm15W8Cc0oe
          source_id: s_QuMRT5OpCv4-cncFQw3jwg
          stance: supports
          locator: CBDB：兄弟 王宣（201094）之父／母 王朝輔
          quotation: null
          interpretation_note: 由兄弟关系推断：王登 与 王宣 为同胞（CBDB 记「弟」），王宣 之父／母即 王登 之父／母。
          source:
            id: s_QuMRT5OpCv4-cncFQw3jwg
            source_type: api_record
            title: 中国历代人物传记资料库：王登（CBDB 267023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267023&o=json
            external_identifier: CBDB:267023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_T1TfDLuTZAccqowhsYwN5x
        status: active
        display_name: 王登
        merged_into_person_id: null
    - claim:
        id: c_OCrge90R_girHYY4osOG_L
        subject_person_id: p_7zDtBoXJhHQDuC7LGFFtF6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VBCCW8RrJa5vKyLH73DcCe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vIPgqy9-7YVj4SgPufTmUG
          claim_id: c_OCrge90R_girHYY4osOG_L
          source_id: s_Qt8wLm0XVPBQJSbfFda-5y
          stance: supports
          locator: CBDB：兄弟 王宣（201094）之父／母 王朝輔
          quotation: null
          interpretation_note: 由兄弟关系推断：王潛 与 王宣 为同胞（CBDB 记「弟」），王宣 之父／母即 王潛 之父／母。
          source:
            id: s_Qt8wLm0XVPBQJSbfFda-5y
            source_type: api_record
            title: 中国历代人物传记资料库：王潛（CBDB 267022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267022&o=json
            external_identifier: CBDB:267022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VBCCW8RrJa5vKyLH73DcCe
        status: active
        display_name: 王潛
        merged_into_person_id: null
    - claim:
        id: c_y88OBxMTELWCx3VchAGWJa
        subject_person_id: p_7zDtBoXJhHQDuC7LGFFtF6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rUxWN13HzHvQTaEFbgzcv9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HnfaWPLRDBMzpw_uVLU4RK
          claim_id: c_y88OBxMTELWCx3VchAGWJa
          source_id: s_OSaNxovwl29jUQKpySniBJ
          stance: supports
          locator: CBDB：兄弟 王宣（201094）之父／母 王朝輔
          quotation: null
          interpretation_note: 由兄弟关系推断：王清 与 王宣 为同胞（CBDB 记「弟」），王宣 之父／母即 王清 之父／母。
          source:
            id: s_OSaNxovwl29jUQKpySniBJ
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 267021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267021&o=json
            external_identifier: CBDB:267021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rUxWN13HzHvQTaEFbgzcv9
        status: active
        display_name: 王清
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朝輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝輔 | accepted |
| bio.summary | 王朝輔，明人物。弘治九年進士，籍贯定州，曾任陰陽典術。（中国历代人物传记资料库 CBDB 267017） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Hzz13QG3KkgrJrrmRHzuBL | 王宣 | accepted |
| children | p_9TFfPBPbuARXG78htBxBNo | 王宥 | accepted |
| children | p_QqTzi2VpVBUVXaBss511gD | 王宜 | accepted |
| children | p_T1TfDLuTZAccqowhsYwN5x | 王登 | accepted |
| children | p_VBCCW8RrJa5vKyLH73DcCe | 王潛 | accepted |
| children | p_rUxWN13HzHvQTaEFbgzcv9 | 王清 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝輔（CBDB 267017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267017&o=json)
- [中国历代人物传记资料库：王登（CBDB 267023）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267023&o=json)
- [中国历代人物传记资料库：王潛（CBDB 267022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267022&o=json)
- [中国历代人物传记资料库：王清（CBDB 267021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267021&o=json)
- [中国历代人物传记资料库：王宜（CBDB 267025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267025&o=json)
- [中国历代人物传记资料库：王宥（CBDB 267024）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267024&o=json)
