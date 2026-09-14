---
schema: wang-person/v1
id: p_Z5nYxV4Tqg6P2c2jCvDNPx
status: active
merged_into: null
display_name: 王惠
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g39MFLmHd6EP3gfhsEgFoz
        subject_person_id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n2DFTDEepzMU3EVjameb1R
          claim_id: c_g39MFLmHd6EP3gfhsEgFoz
          source_id: s_WQDCsfu859LGuhYditnp8F
          stance: supports
          locator: CBDB:200679
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200679）
          source: &a1
            id: s_WQDCsfu859LGuhYditnp8F
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 200679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200679&o=json
            external_identifier: CBDB:200679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.627Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZtaKXSJKE5zuBUDRpdqzmb
        subject_person_id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1464年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XXwnvwMdYQ13Neogzjb8Gc
          claim_id: c_ZtaKXSJKE5zuBUDRpdqzmb
          source_id: s_WQDCsfu859LGuhYditnp8F
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ttrHtApmBE6wnj1eKSNJ7b
        subject_person_id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠（生于1464年），明人物。明清進士進士，籍贯慈溪，入仕進士。（中国历代人物传记资料库 CBDB 200679）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__yi49t290RgbJH4cTPJ9-y
          claim_id: c_ttrHtApmBE6wnj1eKSNJ7b
          source_id: s_WQDCsfu859LGuhYditnp8F
          stance: supports
          locator: CBDB:200679
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_xJckw5M7s3953PwfjKtPgj
        status: active
        display_name: 王東溪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_H-iOgisw44eeLMzkE2L3Hf
        subject_person_id: p_smxXzZUQV98RoMAng6P1kS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y-A5dJJz8sV2VL48XndXYO
          claim_id: c_H-iOgisw44eeLMzkE2L3Hf
          source_id: s_Xc3wWPGCrELpdBJEKtyL1m
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第二甲第四十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Xc3wWPGCrELpdBJEKtyL1m
            source_type: api_record
            title: 中国历代人物传记资料库：王璡（CBDB 261337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261337&o=json
            external_identifier: CBDB:261337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.537Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_smxXzZUQV98RoMAng6P1kS
        status: active
        display_name: 王璡
        merged_into_person_id: null
    - claim:
        id: c_gQaLurmY_UxIvyPNvYhrCR
        subject_person_id: p_vueLBrU1RnBx1aZUzw5XWG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BfOAf3teWXzvUSw6w_rwhu
          claim_id: c_gQaLurmY_UxIvyPNvYhrCR
          source_id: s_mxLnv6QWPebEbZYfUNZtmx
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第二甲第四十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mxLnv6QWPebEbZYfUNZtmx
            source_type: api_record
            title: 中国历代人物传记资料库：王頤（CBDB 261335）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261335&o=json
            external_identifier: CBDB:261335
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.536Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vueLBrU1RnBx1aZUzw5XWG
        status: active
        display_name: 王頤
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_ZbW4eR0oSh0DiEyDMvupsK
        subject_person_id: p_7kTVFUC7XFEmstH2h6JYzx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ewLuTPqlO2lG-hjxYHesc0
          claim_id: c_ZbW4eR0oSh0DiEyDMvupsK
          source_id: s_ZDKKq7SAv_k5G8HHKNRxSC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200679 王惠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_bZKgBaztmX4ZSrJMlrQnGQ
        subject_person_id: p_D6MTYcoXWu1kJ19Cn9qoGQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dhWdNeIVrq9mh3KnT-sq8S
          claim_id: c_bZKgBaztmX4ZSrJMlrQnGQ
          source_id: s_QeUgpLNte31DquBaapQY8v
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200679 王惠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_6fygquFtzwFYIdqoqIFYg0
        subject_person_id: p_H9B21E5HTX9HA1ces2r47Q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fhD659ss8ZQhBIX5weOtTh
          claim_id: c_6fygquFtzwFYIdqoqIFYg0
          source_id: s_91bDv5JJC4f_mIa25xYd91
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200679 王惠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_VJmL6KqZwwt9qF4U8RdZ5b
        subject_person_id: p_MeHjASz2bYaGspzm6oBiB4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5v7ZufbM5qtxE5-nVs_Ckb
          claim_id: c_VJmL6KqZwwt9qF4U8RdZ5b
          source_id: s_4_kHqoB1Q2X0-lgqoT01g-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200679 王惠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_NNzBfymCWMsRVgTcsGDC7C
        subject_person_id: p_RJjX4B39FEMZ3oEV6BcoE8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZcvnlaTqsFVzUUKAlGZOkP
          claim_id: c_NNzBfymCWMsRVgTcsGDC7C
          source_id: s_z938_1ypJYap0mKIUxCQf-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200679 王惠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_tOrhBAcAEcQGd1WEKEPO0f
        subject_person_id: p_VNegNkvdW3tq1pVEAxmwB8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y2dDT0qDuX_AqU6cX4exHa
          claim_id: c_tOrhBAcAEcQGd1WEKEPO0f
          source_id: s_dQfIQC5WqUQPPXuMQqt2mE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200679 王惠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惠 | accepted |
| birth.date | 1464年 | accepted |
| bio.summary | 王惠（生于1464年），明人物。明清進士進士，籍贯慈溪，入仕進士。（中国历代人物传记资料库 CBDB 200679） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xJckw5M7s3953PwfjKtPgj | 王東溪 | accepted |
| ancestors | p_smxXzZUQV98RoMAng6P1kS | 王璡 | accepted |
| ancestors | p_vueLBrU1RnBx1aZUzw5XWG | 王頤 | accepted |
| other | p_7kTVFUC7XFEmstH2h6JYzx | 王鈍 | accepted |
| other | p_D6MTYcoXWu1kJ19Cn9qoGQ | 王泰 | accepted |
| other | p_H9B21E5HTX9HA1ces2r47Q | 王恩 | accepted |
| other | p_MeHjASz2bYaGspzm6oBiB4 | 王憲 | accepted |
| other | p_RJjX4B39FEMZ3oEV6BcoE8 | 王錤 | accepted |
| other | p_VNegNkvdW3tq1pVEAxmwB8 | 王鎰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王東溪（CBDB 261338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261338&o=json)
- [中国历代人物传记资料库：王鈍（CBDB 261342）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261342&o=json)
- [中国历代人物传记资料库：王恩（CBDB 261345）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261345&o=json)
- [中国历代人物传记资料库：王惠（CBDB 200679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200679&o=json)
- [中国历代人物传记资料库：王錤（CBDB 261343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261343&o=json)
- [中国历代人物传记资料库：王璡（CBDB 261337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261337&o=json)
- [中国历代人物传记资料库：王泰（CBDB 261344）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261344&o=json)
- [中国历代人物传记资料库：王憲（CBDB 261346）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261346&o=json)
- [中国历代人物传记资料库：王頤（CBDB 261335）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261335&o=json)
- [中国历代人物传记资料库：王鎰（CBDB 261341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261341&o=json)
