---
schema: wang-person/v1
id: p_wzpgCTfy9H3iqMXKhqaPfp
status: active
merged_into: null
display_name: 王俁
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wc1BQ81D1TdDJJNpHiJXBZ
        subject_person_id: p_wzpgCTfy9H3iqMXKhqaPfp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bCS5T7BRJCR2N5pSr2JDt1
          claim_id: c_wc1BQ81D1TdDJJNpHiJXBZ
          source_id: s_B9L5fN3DkcARu6bLC2ETfy
          stance: supports
          locator: CBDB:199224
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199224）
          source: &a1
            id: s_B9L5fN3DkcARu6bLC2ETfy
            source_type: api_record
            title: 中国历代人物传记资料库：王俁（CBDB 199224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199224&o=json
            external_identifier: CBDB:199224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.533Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GZDYMf7DqEq7WhNsGxr74k
        subject_person_id: p_wzpgCTfy9H3iqMXKhqaPfp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1434年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ERkx9rBPeqw1rzt7sJHKo4
          claim_id: c_GZDYMf7DqEq7WhNsGxr74k
          source_id: s_B9L5fN3DkcARu6bLC2ETfy
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
        id: c_LYU2FNKE22FHAw4Vo6Vt4j
        subject_person_id: p_wzpgCTfy9H3iqMXKhqaPfp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俁（生于1434年），明人物。明清進士進士，籍贯長興，入仕進士。（中国历代人物传记资料库 CBDB 199224）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IwIjs7Hh0cPmJim-hNBnSV
          claim_id: c_LYU2FNKE22FHAw4Vo6Vt4j
          source_id: s_B9L5fN3DkcARu6bLC2ETfy
          stance: supports
          locator: CBDB:199224
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_tJVHjGjKc27ATYVAuaH8nP
        status: active
        display_name: 王瑄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_1gPv_K57UctEDAJasvURTY
        subject_person_id: p_VarZXRJnwgWEBjNMSnKqjH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wzpgCTfy9H3iqMXKhqaPfp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UVSBmm_JyoFzs23B0XPf6Z
          claim_id: c_1gPv_K57UctEDAJasvURTY
          source_id: s_8cbVgqbi8c3Z1PXXtGQUsD
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百八十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8cbVgqbi8c3Z1PXXtGQUsD
            source_type: api_record
            title: 中国历代人物传记资料库：王彥誠（CBDB 241965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241965&o=json
            external_identifier: CBDB:241965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.963Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VarZXRJnwgWEBjNMSnKqjH
        status: active
        display_name: 王彥誠
        merged_into_person_id: null
    - claim:
        id: c_k0j0hLwXLqSsHVtpFxioP7
        subject_person_id: p_5LbkjGHubbcvGPbg3TNESX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wzpgCTfy9H3iqMXKhqaPfp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2LWjtu7zL-Sk-PN5lk5lqu
          claim_id: c_k0j0hLwXLqSsHVtpFxioP7
          source_id: s_rUXzqdjLLJKEY1N93iJuZx
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百八十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rUXzqdjLLJKEY1N93iJuZx
            source_type: api_record
            title: 中国历代人物传记资料库：王信甫（CBDB 241962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241962&o=json
            external_identifier: CBDB:241962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_5LbkjGHubbcvGPbg3TNESX
        status: active
        display_name: 王信甫
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_Og3_p4xvMvyG8XqjNIctBA
        subject_person_id: p_FyGrssxVbK1S7N1cPsQAhY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wzpgCTfy9H3iqMXKhqaPfp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jZpzqV1PohZoLEAMl63OAK
          claim_id: c_Og3_p4xvMvyG8XqjNIctBA
          source_id: s_ir-K3dFgu22x7AnFVbh7nb
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199224 王俁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_f4XJvJ76YG0HByX2uDyE-y
        subject_person_id: p_KSARYj8m8V8QHj4geNb5ZQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wzpgCTfy9H3iqMXKhqaPfp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ve7CC3s007XS_bIxPOpCYe
          claim_id: c_f4XJvJ76YG0HByX2uDyE-y
          source_id: s_TUw1LKPTOULchR5XI3dGxs
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199224 王俁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_Jo7jT6Tyne-FQfIyuCj2oE
        subject_person_id: p_PM4YWzJVTKEm6U2bcRBjoc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wzpgCTfy9H3iqMXKhqaPfp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ftIuUk3ZGs-Hfgwk2zNPvb
          claim_id: c_Jo7jT6Tyne-FQfIyuCj2oE
          source_id: s_SXo8xDxfG3Fu4_BNytzL93
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199224 王俁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_0RcBLpcFaibBTVh6Xz_sUT
        subject_person_id: p_QSEkkEB8qbex32MMKkXKip
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wzpgCTfy9H3iqMXKhqaPfp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YMz6wWHa7gpF5pohBzme4S
          claim_id: c_0RcBLpcFaibBTVh6Xz_sUT
          source_id: s_v0yPCUVfcC7vzNg-uPEKV-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199224 王俁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_XoOTHBU5y-80AHKVvLbEHn
        subject_person_id: p_ZLTLi9G69MXn5EmEPVXeGM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wzpgCTfy9H3iqMXKhqaPfp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pqKRw73nA1J8VDAtkzVdFc
          claim_id: c_XoOTHBU5y-80AHKVvLbEHn
          source_id: s_DGNqgFkxALgbwJ7F8cpyOB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199224 王俁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_OMTMF6gFwQNPKEZTz4ztNi
        subject_person_id: p_cyfFANRfy5A2sJbfJMhjFT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wzpgCTfy9H3iqMXKhqaPfp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HNHuAR1okNjpSrZShv9NB7
          claim_id: c_OMTMF6gFwQNPKEZTz4ztNi
          source_id: s_bhAOrjI4Gkd-jKDEftA_Uh
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199224 王俁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_ic7YHd66BXz6S0eSJzrkUq
        subject_person_id: p_nqezkw6HCpZSj6YpGM31cg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wzpgCTfy9H3iqMXKhqaPfp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I8GNxl5xzveQDROjZzFLlu
          claim_id: c_ic7YHd66BXz6S0eSJzrkUq
          source_id: s_GHpuv8A_PNTVCm-xIPLhTD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199224 王俁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王俁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俁 | accepted |
| birth.date | 1434年 | accepted |
| bio.summary | 王俁（生于1434年），明人物。明清進士進士，籍贯長興，入仕進士。（中国历代人物传记资料库 CBDB 199224） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tJVHjGjKc27ATYVAuaH8nP | 王瑄 | accepted |
| ancestors | p_VarZXRJnwgWEBjNMSnKqjH | 王彥誠 | accepted |
| ancestors | p_5LbkjGHubbcvGPbg3TNESX | 王信甫 | accepted |
| other | p_FyGrssxVbK1S7N1cPsQAhY | 王明 | accepted |
| other | p_KSARYj8m8V8QHj4geNb5ZQ | 王健 | accepted |
| other | p_PM4YWzJVTKEm6U2bcRBjoc | 王俶 | accepted |
| other | p_QSEkkEB8qbex32MMKkXKip | 王儀 | accepted |
| other | p_ZLTLi9G69MXn5EmEPVXeGM | 王僖 | accepted |
| other | p_cyfFANRfy5A2sJbfJMhjFT | 王儼 | accepted |
| other | p_nqezkw6HCpZSj6YpGM31cg | 王佶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俶（CBDB 241974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241974&o=json)
- [中国历代人物传记资料库：王佶（CBDB 241977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241977&o=json)
- [中国历代人物传记资料库：王健（CBDB 241973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241973&o=json)
- [中国历代人物传记资料库：王明（CBDB 241970）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241970&o=json)
- [中国历代人物传记资料库：王僖（CBDB 241976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241976&o=json)
- [中国历代人物传记资料库：王信甫（CBDB 241962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241962&o=json)
- [中国历代人物传记资料库：王瑄（CBDB 241966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241966&o=json)
- [中国历代人物传记资料库：王儼（CBDB 241972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241972&o=json)
- [中国历代人物传记资料库：王彥誠（CBDB 241965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241965&o=json)
- [中国历代人物传记资料库：王儀（CBDB 241971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241971&o=json)
- [中国历代人物传记资料库：王俁（CBDB 199224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199224&o=json)
