---
schema: wang-person/v1
id: p_tJVHjGjKc27ATYVAuaH8nP
status: active
merged_into: null
display_name: 王瑄
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YA2UCMn7jzdVWGYnQtEz4H
        subject_person_id: p_tJVHjGjKc27ATYVAuaH8nP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LHr1i4JoGwU1d51Uapdtmg
          claim_id: c_YA2UCMn7jzdVWGYnQtEz4H
          source_id: s_GTjDTtJCADJetUY4LvTp7A
          stance: supports
          locator: CBDB:241966
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241966）
          source: &a1
            id: s_GTjDTtJCADJetUY4LvTp7A
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 241966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241966&o=json
            external_identifier: CBDB:241966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.963Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NdpSkZi2QuDi3skvSLBkFM
        subject_person_id: p_tJVHjGjKc27ATYVAuaH8nP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄，明人物。成化二年進士，籍贯長興，曾任按察使。（中国历代人物传记资料库 CBDB 241966）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_InQaGIWnWVwYZoJeTjCVxX
          claim_id: c_NdpSkZi2QuDi3skvSLBkFM
          source_id: s_GTjDTtJCADJetUY4LvTp7A
          stance: supports
          locator: CBDB:241966
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_EHFENOmakZWuj_VRB8mObh
        subject_person_id: p_tJVHjGjKc27ATYVAuaH8nP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wzpgCTfy9H3iqMXKhqaPfp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XC88WczPbME9hEhfCNX7is
          claim_id: c_EHFENOmakZWuj_VRB8mObh
          source_id: s_GTjDTtJCADJetUY4LvTp7A
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百八十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wzpgCTfy9H3iqMXKhqaPfp
        status: active
        display_name: 王俁
        merged_into_person_id: null
    - claim:
        id: c_fqdCoDd8Sc3sHkgTgDTJLH
        subject_person_id: p_tJVHjGjKc27ATYVAuaH8nP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FyGrssxVbK1S7N1cPsQAhY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pKPAjGj-s9Z0xxKJAwRf8M
          claim_id: c_fqdCoDd8Sc3sHkgTgDTJLH
          source_id: s_ir-K3dFgu22x7AnFVbh7nb
          stance: supports
          locator: CBDB：兄弟 王俁（199224）之父／母 王瑄
          quotation: null
          interpretation_note: 由兄弟关系推断：王明 与 王俁 为同胞（CBDB 记「弟」），王俁 之父／母即 王明 之父／母。
          source:
            id: s_ir-K3dFgu22x7AnFVbh7nb
            source_type: api_record
            title: 中国历代人物传记资料库：王明（CBDB 241970）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241970&o=json
            external_identifier: CBDB:241970
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FyGrssxVbK1S7N1cPsQAhY
        status: active
        display_name: 王明
        merged_into_person_id: null
    - claim:
        id: c_mWbYza4e4ZJ-aYSTIt-rI0
        subject_person_id: p_tJVHjGjKc27ATYVAuaH8nP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KSARYj8m8V8QHj4geNb5ZQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nX3bJ2CgBDou-TXQSLomOs
          claim_id: c_mWbYza4e4ZJ-aYSTIt-rI0
          source_id: s_TUw1LKPTOULchR5XI3dGxs
          stance: supports
          locator: CBDB：兄弟 王俁（199224）之父／母 王瑄
          quotation: null
          interpretation_note: 由兄弟关系推断：王健 与 王俁 为同胞（CBDB 记「弟」），王俁 之父／母即 王健 之父／母。
          source:
            id: s_TUw1LKPTOULchR5XI3dGxs
            source_type: api_record
            title: 中国历代人物传记资料库：王健（CBDB 241973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241973&o=json
            external_identifier: CBDB:241973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KSARYj8m8V8QHj4geNb5ZQ
        status: active
        display_name: 王健
        merged_into_person_id: null
    - claim:
        id: c_6Da9URqgsmx5CQelWlkZTh
        subject_person_id: p_tJVHjGjKc27ATYVAuaH8nP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PM4YWzJVTKEm6U2bcRBjoc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9hfyGFVUwQJUAosy0r4SCs
          claim_id: c_6Da9URqgsmx5CQelWlkZTh
          source_id: s_SXo8xDxfG3Fu4_BNytzL93
          stance: supports
          locator: CBDB：兄弟 王俁（199224）之父／母 王瑄
          quotation: null
          interpretation_note: 由兄弟关系推断：王俶 与 王俁 为同胞（CBDB 记「兄」），王俁 之父／母即 王俶 之父／母。
          source:
            id: s_SXo8xDxfG3Fu4_BNytzL93
            source_type: api_record
            title: 中国历代人物传记资料库：王俶（CBDB 241974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241974&o=json
            external_identifier: CBDB:241974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PM4YWzJVTKEm6U2bcRBjoc
        status: active
        display_name: 王俶
        merged_into_person_id: null
    - claim:
        id: c_dZgNAuuM_45_s3flT_r9Q2
        subject_person_id: p_tJVHjGjKc27ATYVAuaH8nP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QSEkkEB8qbex32MMKkXKip
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PwPJ6NLdOgBG3Y0gNSyDUc
          claim_id: c_dZgNAuuM_45_s3flT_r9Q2
          source_id: s_v0yPCUVfcC7vzNg-uPEKV-
          stance: supports
          locator: CBDB：兄弟 王俁（199224）之父／母 王瑄
          quotation: null
          interpretation_note: 由兄弟关系推断：王儀 与 王俁 为同胞（CBDB 记「弟」），王俁 之父／母即 王儀 之父／母。
          source:
            id: s_v0yPCUVfcC7vzNg-uPEKV-
            source_type: api_record
            title: 中国历代人物传记资料库：王儀（CBDB 241971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241971&o=json
            external_identifier: CBDB:241971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QSEkkEB8qbex32MMKkXKip
        status: active
        display_name: 王儀
        merged_into_person_id: null
    - claim:
        id: c_sn3itoIEJXZsQ4dB8-j6Wh
        subject_person_id: p_tJVHjGjKc27ATYVAuaH8nP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZLTLi9G69MXn5EmEPVXeGM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O4_F6ScqBGkYeCA42vD36R
          claim_id: c_sn3itoIEJXZsQ4dB8-j6Wh
          source_id: s_DGNqgFkxALgbwJ7F8cpyOB
          stance: supports
          locator: CBDB：兄弟 王俁（199224）之父／母 王瑄
          quotation: null
          interpretation_note: 由兄弟关系推断：王僖 与 王俁 为同胞（CBDB 记「兄」），王俁 之父／母即 王僖 之父／母。
          source:
            id: s_DGNqgFkxALgbwJ7F8cpyOB
            source_type: api_record
            title: 中国历代人物传记资料库：王僖（CBDB 241976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241976&o=json
            external_identifier: CBDB:241976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZLTLi9G69MXn5EmEPVXeGM
        status: active
        display_name: 王僖
        merged_into_person_id: null
    - claim:
        id: c_uJqlgkA2yl2qDMecEI1Imp
        subject_person_id: p_tJVHjGjKc27ATYVAuaH8nP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cyfFANRfy5A2sJbfJMhjFT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nYUYGInZZ0blyFAS-QxeYI
          claim_id: c_uJqlgkA2yl2qDMecEI1Imp
          source_id: s_bhAOrjI4Gkd-jKDEftA_Uh
          stance: supports
          locator: CBDB：兄弟 王俁（199224）之父／母 王瑄
          quotation: null
          interpretation_note: 由兄弟关系推断：王儼 与 王俁 为同胞（CBDB 记「弟」），王俁 之父／母即 王儼 之父／母。
          source:
            id: s_bhAOrjI4Gkd-jKDEftA_Uh
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 241972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241972&o=json
            external_identifier: CBDB:241972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cyfFANRfy5A2sJbfJMhjFT
        status: active
        display_name: 王儼
        merged_into_person_id: null
    - claim:
        id: c_GCEASxZEpnz_EyafGyMG9N
        subject_person_id: p_tJVHjGjKc27ATYVAuaH8nP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nqezkw6HCpZSj6YpGM31cg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0aGbQzs2gp1bO_ExLKRlZT
          claim_id: c_GCEASxZEpnz_EyafGyMG9N
          source_id: s_GHpuv8A_PNTVCm-xIPLhTD
          stance: supports
          locator: CBDB：兄弟 王俁（199224）之父／母 王瑄
          quotation: null
          interpretation_note: 由兄弟关系推断：王佶 与 王俁 为同胞（CBDB 记「兄」），王俁 之父／母即 王佶 之父／母。
          source:
            id: s_GHpuv8A_PNTVCm-xIPLhTD
            source_type: api_record
            title: 中国历代人物传记资料库：王佶（CBDB 241977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241977&o=json
            external_identifier: CBDB:241977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nqezkw6HCpZSj6YpGM31cg
        status: active
        display_name: 王佶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑄 | accepted |
| bio.summary | 王瑄，明人物。成化二年進士，籍贯長興，曾任按察使。（中国历代人物传记资料库 CBDB 241966） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wzpgCTfy9H3iqMXKhqaPfp | 王俁 | accepted |
| children | p_FyGrssxVbK1S7N1cPsQAhY | 王明 | accepted |
| children | p_KSARYj8m8V8QHj4geNb5ZQ | 王健 | accepted |
| children | p_PM4YWzJVTKEm6U2bcRBjoc | 王俶 | accepted |
| children | p_QSEkkEB8qbex32MMKkXKip | 王儀 | accepted |
| children | p_ZLTLi9G69MXn5EmEPVXeGM | 王僖 | accepted |
| children | p_cyfFANRfy5A2sJbfJMhjFT | 王儼 | accepted |
| children | p_nqezkw6HCpZSj6YpGM31cg | 王佶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俶（CBDB 241974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241974&o=json)
- [中国历代人物传记资料库：王佶（CBDB 241977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241977&o=json)
- [中国历代人物传记资料库：王健（CBDB 241973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241973&o=json)
- [中国历代人物传记资料库：王明（CBDB 241970）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241970&o=json)
- [中国历代人物传记资料库：王僖（CBDB 241976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241976&o=json)
- [中国历代人物传记资料库：王瑄（CBDB 241966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241966&o=json)
- [中国历代人物传记资料库：王儼（CBDB 241972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241972&o=json)
- [中国历代人物传记资料库：王儀（CBDB 241971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241971&o=json)
