---
schema: wang-person/v1
id: p_T2DCj9d6XKU4djHJMs2kSM
status: active
merged_into: null
display_name: 王恕
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UdvyNuBMkkZNVtK8jqk7ny
        subject_person_id: p_T2DCj9d6XKU4djHJMs2kSM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NsGjpE2kFyVa1HoBYoApBq
          claim_id: c_UdvyNuBMkkZNVtK8jqk7ny
          source_id: s_mpKLosjwmu72pWYGf8F7EG
          stance: supports
          locator: CBDB:62505
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（62505）
          source: &a1
            id: s_mpKLosjwmu72pWYGf8F7EG
            source_type: api_record
            title: 中国历代人物传记资料库：王恕（CBDB 62505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=62505&o=json
            external_identifier: CBDB:62505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.926Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_e3HJoMwVqjgmCfK27Myn46
        subject_person_id: p_T2DCj9d6XKU4djHJMs2kSM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1416年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MaHUaTNo7mRHzVAkxP8cVp
          claim_id: c_e3HJoMwVqjgmCfK27Myn46
          source_id: s_mpKLosjwmu72pWYGf8F7EG
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
        id: c_GW53VoB2zeMpnSuS7GPj2c
        subject_person_id: p_T2DCj9d6XKU4djHJMs2kSM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1508年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DbhWEN7QKn16rJ8VkF6Wyb
          claim_id: c_GW53VoB2zeMpnSuS7GPj2c
          source_id: s_mpKLosjwmu72pWYGf8F7EG
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
        id: c_xrwu2MRxGDf5V7o3MpwoDi
        subject_person_id: p_T2DCj9d6XKU4djHJMs2kSM
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
        - id: cs_f7ixZhQGLJcVcuiFHL2xjJ
          claim_id: c_xrwu2MRxGDf5V7o3MpwoDi
          source_id: s_mpKLosjwmu72pWYGf8F7EG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xHCsy7M-tomSGYMsjlx-on
        subject_person_id: p_8ZBDQjrPzNEsJHrpRrVWkK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T2DCj9d6XKU4djHJMs2kSM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1wcExFNLQjUStNEosN4M_z
          claim_id: c_xHCsy7M-tomSGYMsjlx-on
          source_id: s_vB51GoqLZdVHHypmKy4CwU
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第二十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vB51GoqLZdVHHypmKy4CwU
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仲智（240859）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240859&o=json
            external_identifier: CBDB:240859
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:33.681Z
            metadata_json: null
      object_person:
        id: p_8ZBDQjrPzNEsJHrpRrVWkK
        status: active
        display_name: 王仲智
        merged_into_person_id: null
  children:
    - claim:
        id: c_MG5ECdH-GoztBwC8j60Rq8
        subject_person_id: p_T2DCj9d6XKU4djHJMs2kSM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GuMVVJrYyjeKWA3Y94GdUk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_61XBo51JUiX-ImladJep2X
          claim_id: c_MG5ECdH-GoztBwC8j60Rq8
          source_id: s_J8HoMgcp9P8ypb7EYki5M5
          stance: supports
          locator: 王文恪公集:三十六卷，29.5a：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_J8HoMgcp9P8ypb7EYki5M5
            source_type: api_record
            title: 中国历代人物传记资料库：王承祜（CBDB 264044）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264044&o=json
            external_identifier: CBDB:264044
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.631Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GuMVVJrYyjeKWA3Y94GdUk
        status: active
        display_name: 王承祜
        merged_into_person_id: null
    - claim:
        id: c_S0mOaE3ZCz7Ll4hKti56k4
        subject_person_id: p_T2DCj9d6XKU4djHJMs2kSM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j4RsuRBKFYJbK5j9md2YXD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BrJmeyeF7kHgVSYq2zDC9A
          claim_id: c_S0mOaE3ZCz7Ll4hKti56k4
          source_id: s_KwAAbYEBjQwNhkLyALJnCV
          stance: supports
          locator: 王文恪公集:三十六卷，29.5a：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KwAAbYEBjQwNhkLyALJnCV
            source_type: api_record
            title: 中国历代人物传记资料库：王承裕（CBDB 67772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67772&o=json
            external_identifier: CBDB:67772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.017Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_j4RsuRBKFYJbK5j9md2YXD
        status: active
        display_name: 王承裕
        merged_into_person_id: null
    - claim:
        id: c_PlaOK-v-kwb-SP3IULbI90
        subject_person_id: p_T2DCj9d6XKU4djHJMs2kSM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Rt8zszeV3ee7gT623mGP46
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9dCrBEC12oiTUP5Ft9PemV
          claim_id: c_PlaOK-v-kwb-SP3IULbI90
          source_id: s_LtkxDWZVxbk8hKaa71BMa1
          stance: supports
          locator: 王文恪公集:三十六卷，29.5a：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LtkxDWZVxbk8hKaa71BMa1
            source_type: api_record
            title: 中国历代人物传记资料库：王承祥（CBDB 264048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264048&o=json
            external_identifier: CBDB:264048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.632Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Rt8zszeV3ee7gT623mGP46
        status: active
        display_name: 王承祥
        merged_into_person_id: null
    - claim:
        id: c_cPhBxcJ0t2zZqFUoy9FMYb
        subject_person_id: p_T2DCj9d6XKU4djHJMs2kSM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3M6kuHH9zakyDuQ7sPhqpb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PUF8rKUNLMtKmZWOcN9KeU
          claim_id: c_cPhBxcJ0t2zZqFUoy9FMYb
          source_id: s_SFX3Hp1sAfyFtcdUMTGqiy
          stance: supports
          locator: 王端毅公文集:九卷，29.5a：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SFX3Hp1sAfyFtcdUMTGqiy
            source_type: api_record
            title: 中国历代人物传记资料库：王承祿（CBDB 264046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264046&o=json
            external_identifier: CBDB:264046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_3M6kuHH9zakyDuQ7sPhqpb
        status: active
        display_name: 王承祿
        merged_into_person_id: null
    - claim:
        id: c_lEV296fxoGCKiOCKq7r6iE
        subject_person_id: p_T2DCj9d6XKU4djHJMs2kSM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zgv1SMZqH9eDf28KchsL7f
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EKPwJPW-X84HRhcKw7piFm
          claim_id: c_lEV296fxoGCKiOCKq7r6iE
          source_id: s_HqhdUtZAf4v3PL3Gdz18ew
          stance: supports
          locator: 王端毅公文集:九卷，29.5a：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HqhdUtZAf4v3PL3Gdz18ew
            source_type: api_record
            title: 中国历代人物传记资料库：王承禋（CBDB 264049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264049&o=json
            external_identifier: CBDB:264049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_zgv1SMZqH9eDf28KchsL7f
        status: active
        display_name: 王承禋
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_vgZaE-7utJQDvjoqCA76_p
        subject_person_id: p_6YXXSJdAPJLEUzeSSmAThW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_T2DCj9d6XKU4djHJMs2kSM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6THKrYZjSpK7KjqRSnNOAV
          claim_id: c_vgZaE-7utJQDvjoqCA76_p
          source_id: s_3h3nFT4G4FpBiqDaquKS13
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第二十六名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3h3nFT4G4FpBiqDaquKS13
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：蓋氏（240861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240861&o=json
            external_identifier: CBDB:240861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:37.604Z
            metadata_json: null
      object_person:
        id: p_6YXXSJdAPJLEUzeSSmAThW
        status: active
        display_name: 盖氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_D8wSxMPcrGB-3wmk-p5Pcg
        subject_person_id: p_1LjXtHaC5ZgBX5ntEmabuX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_T2DCj9d6XKU4djHJMs2kSM
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zIfBvKj2RfaIAdovlTlqi9
          claim_id: c_D8wSxMPcrGB-3wmk-p5Pcg
          source_id: s_77uPWEr3G5D5qjv5UcVsRV
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第二十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_77uPWEr3G5D5qjv5UcVsRV
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王彥成（240857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240857&o=json
            external_identifier: CBDB:240857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_1LjXtHaC5ZgBX5ntEmabuX
        status: active
        display_name: 王彦成
        merged_into_person_id: null
    - claim:
        id: c_fSQ-VTwtD8LvMmkxoh1R7o
        subject_person_id: p_m8pEmRBSH6ayXuTKwEAjBF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_T2DCj9d6XKU4djHJMs2kSM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hzEtTfDaPdwLuzkEWK_wbG
          claim_id: c_fSQ-VTwtD8LvMmkxoh1R7o
          source_id: s_JWt2Et9S3FX1mKPHVPZw8A
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第二十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JWt2Et9S3FX1mKPHVPZw8A
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王惟真（240858）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240858&o=json
            external_identifier: CBDB:240858
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:38.991Z
            metadata_json: null
      object_person:
        id: p_m8pEmRBSH6ayXuTKwEAjBF
        status: active
        display_name: 王惟真
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恕 | accepted |
| birth.date | 1416年 | accepted |
| death.date | 1508年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8ZBDQjrPzNEsJHrpRrVWkK | 王仲智 | accepted |
| children | p_GuMVVJrYyjeKWA3Y94GdUk | 王承祜 | accepted |
| children | p_j4RsuRBKFYJbK5j9md2YXD | 王承裕 | accepted |
| children | p_Rt8zszeV3ee7gT623mGP46 | 王承祥 | accepted |
| children | p_3M6kuHH9zakyDuQ7sPhqpb | 王承祿 | accepted |
| children | p_zgv1SMZqH9eDf28KchsL7f | 王承禋 | accepted |
| spouses | p_6YXXSJdAPJLEUzeSSmAThW | 盖氏 | accepted |
| ancestors | p_1LjXtHaC5ZgBX5ntEmabuX | 王彦成 | accepted |
| ancestors | p_m8pEmRBSH6ayXuTKwEAjBF | 王惟真 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承祜（CBDB 264044）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264044&o=json)
- [中国历代人物传记资料库：王承祿（CBDB 264046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264046&o=json)
- [中国历代人物传记资料库：王承祥（CBDB 264048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264048&o=json)
- [中国历代人物传记资料库：王承禋（CBDB 264049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264049&o=json)
- [中国历代人物传记资料库：王承裕（CBDB 67772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67772&o=json)
- [中国历代人物传记资料库：王恕（CBDB 62505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=62505&o=json)
- [CBDB 中国历代人物传记资料库：蓋氏（240861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240861&o=json)
- [CBDB 中国历代人物传记资料库：王惟真（240858）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240858&o=json)
- [CBDB 中国历代人物传记资料库：王彥成（240857）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240857&o=json)
- [CBDB 中国历代人物传记资料库：王仲智（240859）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240859&o=json)
