---
schema: wang-person/v1
id: p_CN2jDLgCox9JFiLJPyx2Za
status: active
merged_into: null
display_name: 王鎮
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d1ypY2pNrAT58awuPqrVBV
        subject_person_id: p_CN2jDLgCox9JFiLJPyx2Za
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mmHJwG8LTZ5H2ePFMNb89L
          claim_id: c_d1ypY2pNrAT58awuPqrVBV
          source_id: s_J95sa3D4knKZ2APmyRXNg9
          stance: supports
          locator: CBDB:284296
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284296）
          source: &a1
            id: s_J95sa3D4knKZ2APmyRXNg9
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 284296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284296&o=json
            external_identifier: CBDB:284296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.197Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WwHRUbX3iaPaJxLXjEcq7L
        subject_person_id: p_CN2jDLgCox9JFiLJPyx2Za
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮，明人物。正德十六年進士，籍贯唐山。（中国历代人物传记资料库 CBDB 284296）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_edhghRwnrqjVaBj5i2qgKn
          claim_id: c_WwHRUbX3iaPaJxLXjEcq7L
          source_id: s_J95sa3D4knKZ2APmyRXNg9
          stance: supports
          locator: CBDB:284296
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__aZxU1BR7Wf8_Cq1xfI2uT
        subject_person_id: p_CN2jDLgCox9JFiLJPyx2Za
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nqDcwomowXtBuBN0weBMsm
          claim_id: c__aZxU1BR7Wf8_Cq1xfI2uT
          source_id: s_LMA8xHJ4EXr524gv8VeY3b
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LMA8xHJ4EXr524gv8VeY3b
            source_type: api_record
            title: 中国历代人物传记资料库：王密（CBDB 202150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202150&o=json
            external_identifier: CBDB:202150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3VWyJNWMm17kXtvGcMVL5b
        status: active
        display_name: 王密
        merged_into_person_id: null
    - claim:
        id: c_3VihH0d3py-unkcn8VGaNL
        subject_person_id: p_CN2jDLgCox9JFiLJPyx2Za
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5WPzkVA5sDWY8eV3w56KtW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZPd38k5QziR9Z_yK_TH4sD
          claim_id: c_3VihH0d3py-unkcn8VGaNL
          source_id: s_4ByhTxTB1iATISY6YxXl9W
          stance: supports
          locator: CBDB：兄弟 王密（202150）之父／母 王鎮
          quotation: null
          interpretation_note: 由兄弟关系推断：王玳 与 王密 为同胞（CBDB 记「兄」），王密 之父／母即 王玳 之父／母。
          source:
            id: s_4ByhTxTB1iATISY6YxXl9W
            source_type: api_record
            title: 中国历代人物传记资料库：王玳（CBDB 284308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284308&o=json
            external_identifier: CBDB:284308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5WPzkVA5sDWY8eV3w56KtW
        status: active
        display_name: 王玳
        merged_into_person_id: null
    - claim:
        id: c_pQEDbw1HKW52-qE0jAkJFw
        subject_person_id: p_CN2jDLgCox9JFiLJPyx2Za
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5vJLAzNDx7JY5MNSu628Uh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F071zN7JWyWGyc1DmyyORN
          claim_id: c_pQEDbw1HKW52-qE0jAkJFw
          source_id: s_yx1RFaviIwL3uIjTd8Fbn3
          stance: supports
          locator: CBDB：兄弟 王密（202150）之父／母 王鎮
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑁 与 王密 为同胞（CBDB 记「兄」），王密 之父／母即 王瑁 之父／母。
          source:
            id: s_yx1RFaviIwL3uIjTd8Fbn3
            source_type: api_record
            title: 中国历代人物传记资料库：王瑁（CBDB 284309）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284309&o=json
            external_identifier: CBDB:284309
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5vJLAzNDx7JY5MNSu628Uh
        status: active
        display_name: 王瑁
        merged_into_person_id: null
    - claim:
        id: c_4b7Mxw0B7_1ZHz3i3LtPJV
        subject_person_id: p_CN2jDLgCox9JFiLJPyx2Za
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_86NzEXq2mafv9E7Hd1xdpn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pbrFvrFAfd9EAmscj1TZvn
          claim_id: c_4b7Mxw0B7_1ZHz3i3LtPJV
          source_id: s_E3pznG4p8ospBVsx_n5--B
          stance: supports
          locator: CBDB：兄弟 王密（202150）之父／母 王鎮
          quotation: null
          interpretation_note: 由兄弟关系推断：王玕 与 王密 为同胞（CBDB 记「兄」），王密 之父／母即 王玕 之父／母。
          source:
            id: s_E3pznG4p8ospBVsx_n5--B
            source_type: api_record
            title: 中国历代人物传记资料库：王玕（CBDB 284307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284307&o=json
            external_identifier: CBDB:284307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_86NzEXq2mafv9E7Hd1xdpn
        status: active
        display_name: 王玕
        merged_into_person_id: null
    - claim:
        id: c_bf2Vy2YWe_WckA1hyUYId3
        subject_person_id: p_CN2jDLgCox9JFiLJPyx2Za
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9e32nes6FjvsBfwyF5Xit5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8A00Hs593gbNFQkJ2L53Kf
          claim_id: c_bf2Vy2YWe_WckA1hyUYId3
          source_id: s_nNWCElBLwGPmtHy7JeIqXP
          stance: supports
          locator: CBDB：兄弟 王密（202150）之父／母 王鎮
          quotation: null
          interpretation_note: 由兄弟关系推断：王璿 与 王密 为同胞（CBDB 记「弟」），王密 之父／母即 王璿 之父／母。
          source:
            id: s_nNWCElBLwGPmtHy7JeIqXP
            source_type: api_record
            title: 中国历代人物传记资料库：王璿（CBDB 284300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284300&o=json
            external_identifier: CBDB:284300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9e32nes6FjvsBfwyF5Xit5
        status: active
        display_name: 王璿
        merged_into_person_id: null
    - claim:
        id: c_eWQnf0bKux2Pgwv2FI_1Vv
        subject_person_id: p_CN2jDLgCox9JFiLJPyx2Za
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DZogi6J9BCFb91BenUosQ4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H9L_fu31bsV-aQyHPzmkEz
          claim_id: c_eWQnf0bKux2Pgwv2FI_1Vv
          source_id: s_hjqTNI5SqeUsfpYq1NVnuy
          stance: supports
          locator: CBDB：兄弟 王密（202150）之父／母 王鎮
          quotation: null
          interpretation_note: 由兄弟关系推断：王璣 与 王密 为同胞（CBDB 记「弟」），王密 之父／母即 王璣 之父／母。
          source:
            id: s_hjqTNI5SqeUsfpYq1NVnuy
            source_type: api_record
            title: 中国历代人物传记资料库：王璣（CBDB 284301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284301&o=json
            external_identifier: CBDB:284301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DZogi6J9BCFb91BenUosQ4
        status: active
        display_name: 王璣
        merged_into_person_id: null
    - claim:
        id: c_V3wDI7NZ9f5N5IiAVpByzo
        subject_person_id: p_CN2jDLgCox9JFiLJPyx2Za
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gowA3oBCakD6RUbFUVQs5N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UQ9X5OjNXNFrzJQR6x1jx7
          claim_id: c_V3wDI7NZ9f5N5IiAVpByzo
          source_id: s_W0ky_mgl51OBuQVqvGuiAy
          stance: supports
          locator: CBDB：兄弟 王密（202150）之父／母 王鎮
          quotation: null
          interpretation_note: 由兄弟关系推断：王珢 与 王密 为同胞（CBDB 记「兄」），王密 之父／母即 王珢 之父／母。
          source:
            id: s_W0ky_mgl51OBuQVqvGuiAy
            source_type: api_record
            title: 中国历代人物传记资料库：王珢（CBDB 284306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284306&o=json
            external_identifier: CBDB:284306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gowA3oBCakD6RUbFUVQs5N
        status: active
        display_name: 王珢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鎮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎮 | accepted |
| bio.summary | 王鎮，明人物。正德十六年進士，籍贯唐山。（中国历代人物传记资料库 CBDB 284296） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3VWyJNWMm17kXtvGcMVL5b | 王密 | accepted |
| children | p_5WPzkVA5sDWY8eV3w56KtW | 王玳 | accepted |
| children | p_5vJLAzNDx7JY5MNSu628Uh | 王瑁 | accepted |
| children | p_86NzEXq2mafv9E7Hd1xdpn | 王玕 | accepted |
| children | p_9e32nes6FjvsBfwyF5Xit5 | 王璿 | accepted |
| children | p_DZogi6J9BCFb91BenUosQ4 | 王璣 | accepted |
| children | p_gowA3oBCakD6RUbFUVQs5N | 王珢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玳（CBDB 284308）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284308&o=json)
- [中国历代人物传记资料库：王玕（CBDB 284307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284307&o=json)
- [中国历代人物传记资料库：王璣（CBDB 284301）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284301&o=json)
- [中国历代人物传记资料库：王瑁（CBDB 284309）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284309&o=json)
- [中国历代人物传记资料库：王密（CBDB 202150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202150&o=json)
- [中国历代人物传记资料库：王璿（CBDB 284300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284300&o=json)
- [中国历代人物传记资料库：王珢（CBDB 284306）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284306&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 284296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284296&o=json)
