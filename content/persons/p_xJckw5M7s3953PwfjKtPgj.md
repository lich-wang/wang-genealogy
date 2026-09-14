---
schema: wang-person/v1
id: p_xJckw5M7s3953PwfjKtPgj
status: active
merged_into: null
display_name: 王東溪
cbdb_id: 261338
revision: 8
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nfy7Qur5PCJjyYcRGJdPLJ
        subject_person_id: p_xJckw5M7s3953PwfjKtPgj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王東溪，明人物。弘治三年進士，籍贯慈溪，曾任義官。（中国历代人物传记资料库 CBDB 261338）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_9iZ6-1u102PSzDOsd18XnF
          claim_id: c_nfy7Qur5PCJjyYcRGJdPLJ
          source_id: s_nwQ37XeqP8XiBynqejnHsn
          stance: supports
          locator: CBDB:261338
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_nwQ37XeqP8XiBynqejnHsn
            source_type: api_record
            title: 中国历代人物传记资料库：王東溪（CBDB 261338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261338&o=json
            external_identifier: CBDB:261338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_72acGEcwMMsiEXAJwPasrk
        subject_person_id: p_xJckw5M7s3953PwfjKtPgj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王東溪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hCAZPsKkxFRNjSLK4o6pPE
          claim_id: c_72acGEcwMMsiEXAJwPasrk
          source_id: s_nwQ37XeqP8XiBynqejnHsn
          stance: supports
          locator: CBDB:261338
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_VkL_kdzIfQ3P3W_rcM8QC4
        subject_person_id: p_xJckw5M7s3953PwfjKtPgj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f1bLsqqsW0CFbrfWPQxfK3
          claim_id: c_VkL_kdzIfQ3P3W_rcM8QC4
          source_id: s_nwQ37XeqP8XiBynqejnHsn
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第二甲第四十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nwQ37XeqP8XiBynqejnHsn
            source_type: api_record
            title: 中国历代人物传记资料库：王東溪（CBDB 261338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261338&o=json
            external_identifier: CBDB:261338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        status: active
        display_name: 王惠
        merged_into_person_id: null
    - claim:
        id: c_VK54GxMw4bwlx8MOc9kWng
        subject_person_id: p_xJckw5M7s3953PwfjKtPgj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7kTVFUC7XFEmstH2h6JYzx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ua5zFx9V2R9bD4GQCErkCh
          claim_id: c_VK54GxMw4bwlx8MOc9kWng
          source_id: s_ZDKKq7SAv_k5G8HHKNRxSC
          stance: supports
          locator: CBDB：兄弟 王惠（200679）之父／母 王東溪
          quotation: null
          interpretation_note: 由兄弟关系推断：王鈍 与 王惠 为同胞（CBDB 记「弟」），王惠 之父／母即 王鈍 之父／母。
          source:
            id: s_ZDKKq7SAv_k5G8HHKNRxSC
            source_type: api_record
            title: 中国历代人物传记资料库：王鈍（CBDB 261342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261342&o=json
            external_identifier: CBDB:261342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7kTVFUC7XFEmstH2h6JYzx
        status: active
        display_name: 王鈍
        merged_into_person_id: null
    - claim:
        id: c_GIELVKvO6Qs4B0Tb_qWP7u
        subject_person_id: p_xJckw5M7s3953PwfjKtPgj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D6MTYcoXWu1kJ19Cn9qoGQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_81yiK155nI-D7ZFvENItvb
          claim_id: c_GIELVKvO6Qs4B0Tb_qWP7u
          source_id: s_QeUgpLNte31DquBaapQY8v
          stance: supports
          locator: CBDB：兄弟 王惠（200679）之父／母 王東溪
          quotation: null
          interpretation_note: 由兄弟关系推断：王泰 与 王惠 为同胞（CBDB 记「弟」），王惠 之父／母即 王泰 之父／母。
          source:
            id: s_QeUgpLNte31DquBaapQY8v
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 261344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261344&o=json
            external_identifier: CBDB:261344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D6MTYcoXWu1kJ19Cn9qoGQ
        status: active
        display_name: 王泰
        merged_into_person_id: null
    - claim:
        id: c_YMAhUZ7PRYcWaiI076VtgR
        subject_person_id: p_xJckw5M7s3953PwfjKtPgj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H9B21E5HTX9HA1ces2r47Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_--ceHj7Ex4HmJ3862q2Ifp
          claim_id: c_YMAhUZ7PRYcWaiI076VtgR
          source_id: s_91bDv5JJC4f_mIa25xYd91
          stance: supports
          locator: CBDB：兄弟 王惠（200679）之父／母 王東溪
          quotation: null
          interpretation_note: 由兄弟关系推断：王恩 与 王惠 为同胞（CBDB 记「弟」），王惠 之父／母即 王恩 之父／母。
          source:
            id: s_91bDv5JJC4f_mIa25xYd91
            source_type: api_record
            title: 中国历代人物传记资料库：王恩（CBDB 261345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261345&o=json
            external_identifier: CBDB:261345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H9B21E5HTX9HA1ces2r47Q
        status: active
        display_name: 王恩
        merged_into_person_id: null
    - claim:
        id: c_KM3sDEg630rP4lST0j0VCq
        subject_person_id: p_xJckw5M7s3953PwfjKtPgj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MeHjASz2bYaGspzm6oBiB4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_js8D4gwqeo_nDK7tTLxZDb
          claim_id: c_KM3sDEg630rP4lST0j0VCq
          source_id: s_4_kHqoB1Q2X0-lgqoT01g-
          stance: supports
          locator: CBDB：兄弟 王惠（200679）之父／母 王東溪
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲 与 王惠 为同胞（CBDB 记「兄」），王惠 之父／母即 王憲 之父／母。
          source:
            id: s_4_kHqoB1Q2X0-lgqoT01g-
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 261346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261346&o=json
            external_identifier: CBDB:261346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MeHjASz2bYaGspzm6oBiB4
        status: active
        display_name: 王憲
        merged_into_person_id: null
    - claim:
        id: c_ylZxu8VpEitm1Vnp1p9268
        subject_person_id: p_xJckw5M7s3953PwfjKtPgj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RJjX4B39FEMZ3oEV6BcoE8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6CU-n7UMPZ9e570LBo7pU8
          claim_id: c_ylZxu8VpEitm1Vnp1p9268
          source_id: s_z938_1ypJYap0mKIUxCQf-
          stance: supports
          locator: CBDB：兄弟 王惠（200679）之父／母 王東溪
          quotation: null
          interpretation_note: 由兄弟关系推断：王錤 与 王惠 为同胞（CBDB 记「弟」），王惠 之父／母即 王錤 之父／母。
          source:
            id: s_z938_1ypJYap0mKIUxCQf-
            source_type: api_record
            title: 中国历代人物传记资料库：王錤（CBDB 261343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261343&o=json
            external_identifier: CBDB:261343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RJjX4B39FEMZ3oEV6BcoE8
        status: active
        display_name: 王錤
        merged_into_person_id: null
    - claim:
        id: c_OsRi0aYyrAZz7hGhHq4CVu
        subject_person_id: p_xJckw5M7s3953PwfjKtPgj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VNegNkvdW3tq1pVEAxmwB8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OWoFthat9y-nyJtxFy7XPJ
          claim_id: c_OsRi0aYyrAZz7hGhHq4CVu
          source_id: s_dQfIQC5WqUQPPXuMQqt2mE
          stance: supports
          locator: CBDB：兄弟 王惠（200679）之父／母 王東溪
          quotation: null
          interpretation_note: 由兄弟关系推断：王鎰 与 王惠 为同胞（CBDB 记「弟」），王惠 之父／母即 王鎰 之父／母。
          source:
            id: s_dQfIQC5WqUQPPXuMQqt2mE
            source_type: api_record
            title: 中国历代人物传记资料库：王鎰（CBDB 261341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261341&o=json
            external_identifier: CBDB:261341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VNegNkvdW3tq1pVEAxmwB8
        status: active
        display_name: 王鎰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王東溪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王東溪，明人物。弘治三年進士，籍贯慈溪，曾任義官。（中国历代人物传记资料库 CBDB 261338） | accepted |
| name.primary | 王東溪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Z5nYxV4Tqg6P2c2jCvDNPx | 王惠 | accepted |
| children | p_7kTVFUC7XFEmstH2h6JYzx | 王鈍 | accepted |
| children | p_D6MTYcoXWu1kJ19Cn9qoGQ | 王泰 | accepted |
| children | p_H9B21E5HTX9HA1ces2r47Q | 王恩 | accepted |
| children | p_MeHjASz2bYaGspzm6oBiB4 | 王憲 | accepted |
| children | p_RJjX4B39FEMZ3oEV6BcoE8 | 王錤 | accepted |
| children | p_VNegNkvdW3tq1pVEAxmwB8 | 王鎰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王東溪（CBDB 261338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261338&o=json)
- [中国历代人物传记资料库：王鈍（CBDB 261342）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261342&o=json)
- [中国历代人物传记资料库：王恩（CBDB 261345）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261345&o=json)
- [中国历代人物传记资料库：王錤（CBDB 261343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261343&o=json)
- [中国历代人物传记资料库：王泰（CBDB 261344）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261344&o=json)
- [中国历代人物传记资料库：王憲（CBDB 261346）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261346&o=json)
- [中国历代人物传记资料库：王鎰（CBDB 261341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261341&o=json)
