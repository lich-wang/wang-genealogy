---
schema: wang-person/v1
id: p_7nLDqRUiM1HQGsWK6gxVHc
status: active
merged_into: null
display_name: 王瑞
revision: 12
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PpgzxMGuyQWjwxHKcUeZo7
        subject_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UHzeAnHA4yxPNHY2URoW69
          claim_id: c_PpgzxMGuyQWjwxHKcUeZo7
          source_id: s_gLTowmCEC7vGFGymkruUKP
          stance: supports
          locator: CBDB:67734
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67734）
          source: &a1
            id: s_gLTowmCEC7vGFGymkruUKP
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞（CBDB 67734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67734&o=json
            external_identifier: CBDB:67734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.006Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TVkjFBScbRKrutqrtx717U
        subject_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞，明人物。明清進士進士，籍贯望江，入仕進士，曾任參議、吏科都給事中、吏科給事中。（中国历代人物传记资料库 CBDB 67734）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MIwAW_05IqhW6-TwQy8uv8
          claim_id: c_TVkjFBScbRKrutqrtx717U
          source_id: s_gLTowmCEC7vGFGymkruUKP
          stance: supports
          locator: CBDB:67734
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_U0Giy7KSApj3fylG9herOo
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U7ZVQ89WfPAjwWj75-y5p8
          claim_id: c_U0Giy7KSApj3fylG9herOo
          source_id: s_gLTowmCEC7vGFGymkruUKP
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZBwZdB8tEY2KUEfDHqhpeB
        status: active
        display_name: 王景
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ofjHAwCTN5GSDtjc-zlKcB
        subject_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WNALSz5VTnZfNEGwjyuoa9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bvqoNG-d8L2po2VcNztL2s
          claim_id: c_ofjHAwCTN5GSDtjc-zlKcB
          source_id: s_MWI2QG2H06LkCVnQVhRUBy
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MWI2QG2H06LkCVnQVhRUBy
            source_type: api_record
            title: 中国历代人物传记资料库：吳氏(王瑞妻)（CBDB 242766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242766&o=json
            external_identifier: CBDB:242766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WNALSz5VTnZfNEGwjyuoa9
        status: active
        display_name: 吳氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_0cQBpfe8170N0AcClH9RL4
        subject_person_id: p_8hh6AFzwKDsJFPwN8t9CVF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AskLU-G30oZk6ONQVyatxR
          claim_id: c_0cQBpfe8170N0AcClH9RL4
          source_id: s_gLTowmCEC7vGFGymkruUKP
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8hh6AFzwKDsJFPwN8t9CVF
        status: active
        display_name: 王華卿
        merged_into_person_id: null
    - claim:
        id: c_EGeg2z6DWBSxPnQYwwVDKk
        subject_person_id: p_bwmZjjY7o3MxQTBoZTELxQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u6K_YR0xC1HKJI_-x8Eupd
          claim_id: c_EGeg2z6DWBSxPnQYwwVDKk
          source_id: s_gLTowmCEC7vGFGymkruUKP
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bwmZjjY7o3MxQTBoZTELxQ
        status: active
        display_name: 王偉
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_FEAyTdtHI9gUOEGlATuJj5
        subject_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AXyBVkPGwHPT7CKdmQDD9u
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HjegvT3fxPKtb2Fmlx2-oT
          claim_id: c_FEAyTdtHI9gUOEGlATuJj5
          source_id: s_cQBxf8FWp5bkIyiv0ue-vR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67734 王瑞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cQBxf8FWp5bkIyiv0ue-vR
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 242774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242774&o=json
            external_identifier: CBDB:242774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AXyBVkPGwHPT7CKdmQDD9u
        status: active
        display_name: 王瑛
        merged_into_person_id: null
    - claim:
        id: c_EVaw_UoDCxdAKXz3K469jO
        subject_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_D2wPSDAQKN7cA3Y8wQgqPM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZOWrC3DJKuxrSyNPWFmJrF
          claim_id: c_EVaw_UoDCxdAKXz3K469jO
          source_id: s_FnIdFzNCRSLECjaYD2utNi
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67734 王瑞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FnIdFzNCRSLECjaYD2utNi
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 242770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242770&o=json
            external_identifier: CBDB:242770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D2wPSDAQKN7cA3Y8wQgqPM
        status: active
        display_name: 王璽
        merged_into_person_id: null
    - claim:
        id: c_ZK1ZubBzKBHr8jCyEBbb40
        subject_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_LAzmXqeLSTSSaP91CUcU6f
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L-uDMTVj_Q045kZGkxIktw
          claim_id: c_ZK1ZubBzKBHr8jCyEBbb40
          source_id: s_xnEfw-N7Om1zIM3q-uuW3Y
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67734 王瑞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xnEfw-N7Om1zIM3q-uuW3Y
            source_type: api_record
            title: 中国历代人物传记资料库：王理（CBDB 242768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242768&o=json
            external_identifier: CBDB:242768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LAzmXqeLSTSSaP91CUcU6f
        status: active
        display_name: 王理
        merged_into_person_id: null
    - claim:
        id: c_BN8p6wXwCD4j11fmY5QSck
        subject_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PtKrmNSM1VBXgJwtTbSXrv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uob3QoXRMUserghM5ICrBK
          claim_id: c_BN8p6wXwCD4j11fmY5QSck
          source_id: s_fXoMpQCp3H-oufFhxitQgZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67734 王瑞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fXoMpQCp3H-oufFhxitQgZ
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 242776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242776&o=json
            external_identifier: CBDB:242776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PtKrmNSM1VBXgJwtTbSXrv
        status: active
        display_name: 王珪
        merged_into_person_id: null
    - claim:
        id: c_Bz39sEmwPy9JTBc7OHmehN
        subject_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dPvTec33SE8eiE5zqJyPAE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__exTjoeiDXYyumkVePh17B
          claim_id: c_Bz39sEmwPy9JTBc7OHmehN
          source_id: s_R1Uqzf_6OxhnGDnQjQhBtD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67734 王瑞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_R1Uqzf_6OxhnGDnQjQhBtD
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 242772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242772&o=json
            external_identifier: CBDB:242772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dPvTec33SE8eiE5zqJyPAE
        status: active
        display_name: 王琳
        merged_into_person_id: null
    - claim:
        id: c_Z0AP35fQrJwpAOcEFLhS9n
        subject_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iq8Eb3F4aUXFNdQJfFK2NM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QRJM83y6Bj6w-oZKr_Q3Ft
          claim_id: c_Z0AP35fQrJwpAOcEFLhS9n
          source_id: s_5B-7RdjrTCiffnIcQqDS-_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67734 王瑞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5B-7RdjrTCiffnIcQqDS-_
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 242773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242773&o=json
            external_identifier: CBDB:242773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iq8Eb3F4aUXFNdQJfFK2NM
        status: active
        display_name: 王琦
        merged_into_person_id: null
    - claim:
        id: c_IJkEDwQsuY4vmgtpK_MdFW
        subject_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mhvpK9DERFQ11tcoM98rV6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2lA3te5htprsqRJJv3X0R0
          claim_id: c_IJkEDwQsuY4vmgtpK_MdFW
          source_id: s_oACEjltYYMeO4y64X42TSb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67734 王瑞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oACEjltYYMeO4y64X42TSb
            source_type: api_record
            title: 中国历代人物传记资料库：王琅（CBDB 242778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242778&o=json
            external_identifier: CBDB:242778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mhvpK9DERFQ11tcoM98rV6
        status: active
        display_name: 王琅
        merged_into_person_id: null
    - claim:
        id: c_V1C0BCtqoyZyXUumyc7kor
        subject_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rhtpen9afcH7UJSJYWUQNy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YMmr4mC4PI46A4DxukTUT2
          claim_id: c_V1C0BCtqoyZyXUumyc7kor
          source_id: s_10aSUErAVixRvf4heRLaj0
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67734 王瑞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_10aSUErAVixRvf4heRLaj0
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 242769）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242769&o=json
            external_identifier: CBDB:242769
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rhtpen9afcH7UJSJYWUQNy
        status: active
        display_name: 王瓊
        merged_into_person_id: null
    - claim:
        id: c_94GN9i44gCwSeOdtf-SxHS
        subject_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ziy9ABVVuhK7qvMg7sm9J4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5vc9TIgfasaeSoaImdyADp
          claim_id: c_94GN9i44gCwSeOdtf-SxHS
          source_id: s_tmIxMokX3rAVMLLLwVbgMF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67734 王瑞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tmIxMokX3rAVMLLLwVbgMF
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 242771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242771&o=json
            external_identifier: CBDB:242771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ziy9ABVVuhK7qvMg7sm9J4
        status: active
        display_name: 王璉
        merged_into_person_id: null
---

# 王瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑞 | accepted |
| bio.summary | 王瑞，明人物。明清進士進士，籍贯望江，入仕進士，曾任參議、吏科都給事中、吏科給事中。（中国历代人物传记资料库 CBDB 67734） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZBwZdB8tEY2KUEfDHqhpeB | 王景 | accepted |
| spouses | p_WNALSz5VTnZfNEGwjyuoa9 | 吳氏 | accepted |
| ancestors | p_8hh6AFzwKDsJFPwN8t9CVF | 王華卿 | accepted |
| ancestors | p_bwmZjjY7o3MxQTBoZTELxQ | 王偉 | accepted |
| other | p_AXyBVkPGwHPT7CKdmQDD9u | 王瑛 | accepted |
| other | p_D2wPSDAQKN7cA3Y8wQgqPM | 王璽 | accepted |
| other | p_LAzmXqeLSTSSaP91CUcU6f | 王理 | accepted |
| other | p_PtKrmNSM1VBXgJwtTbSXrv | 王珪 | accepted |
| other | p_dPvTec33SE8eiE5zqJyPAE | 王琳 | accepted |
| other | p_iq8Eb3F4aUXFNdQJfFK2NM | 王琦 | accepted |
| other | p_mhvpK9DERFQ11tcoM98rV6 | 王琅 | accepted |
| other | p_rhtpen9afcH7UJSJYWUQNy | 王瓊 | accepted |
| other | p_ziy9ABVVuhK7qvMg7sm9J4 | 王璉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 242776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242776&o=json)
- [中国历代人物传记资料库：王琅（CBDB 242778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242778&o=json)
- [中国历代人物传记资料库：王理（CBDB 242768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242768&o=json)
- [中国历代人物传记资料库：王璉（CBDB 242771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242771&o=json)
- [中国历代人物传记资料库：王琳（CBDB 242772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242772&o=json)
- [中国历代人物传记资料库：王琦（CBDB 242773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242773&o=json)
- [中国历代人物传记资料库：王瓊（CBDB 242769）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242769&o=json)
- [中国历代人物传记资料库：王瑞（CBDB 67734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67734&o=json)
- [中国历代人物传记资料库：王璽（CBDB 242770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242770&o=json)
- [中国历代人物传记资料库：王瑛（CBDB 242774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242774&o=json)
- [中国历代人物传记资料库：吳氏(王瑞妻)（CBDB 242766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242766&o=json)
