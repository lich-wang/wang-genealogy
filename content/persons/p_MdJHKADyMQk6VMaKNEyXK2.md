---
schema: wang-person/v1
id: p_MdJHKADyMQk6VMaKNEyXK2
status: active
merged_into: null
display_name: 王棟
revision: 14
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QKkao2aUfCBAxDJybhUF9a
        subject_person_id: p_MdJHKADyMQk6VMaKNEyXK2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mnaMnWNifkp92dSjAXvr9n
          claim_id: c_QKkao2aUfCBAxDJybhUF9a
          source_id: s_Pm1DFSHsEaGPKCyweGVWKa
          stance: supports
          locator: CBDB:209976
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209976）
          source: &a1
            id: s_Pm1DFSHsEaGPKCyweGVWKa
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 209976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209976&o=json
            external_identifier: CBDB:209976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.990Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GqceC2MRBrhuw1MJmRNXvG
        subject_person_id: p_MdJHKADyMQk6VMaKNEyXK2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟，明人物。隆慶五年進士，籍贯合江。（中国历代人物传记资料库 CBDB 209976）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M7dV1nAX34WNc_-KwKwx-B
          claim_id: c_GqceC2MRBrhuw1MJmRNXvG
          source_id: s_Pm1DFSHsEaGPKCyweGVWKa
          stance: supports
          locator: CBDB:209976
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_b6LbboeZZ_ypk7OMxSKPy3
        subject_person_id: p_MdJHKADyMQk6VMaKNEyXK2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3K8YMQuna5CRk3d72KDoG1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JfYLaylmtfhpA9MXJNsxVV
          claim_id: c_b6LbboeZZ_ypk7OMxSKPy3
          source_id: s_Pm1DFSHsEaGPKCyweGVWKa
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百零四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3K8YMQuna5CRk3d72KDoG1
        status: active
        display_name: 王淑民
        merged_into_person_id: null
    - claim:
        id: c_k8CymstGgwR2jsDndJTgib
        subject_person_id: p_MdJHKADyMQk6VMaKNEyXK2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2a5b2EncYngS1EeFET9iYo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8440ErS9Lqd3HYKk__vPzd
          claim_id: c_k8CymstGgwR2jsDndJTgib
          source_id: s_oc8z6jb1vc3mnujEJoEfhl
          stance: supports
          locator: CBDB：兄弟 王淑民（205869）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王治民 与 王淑民 为同胞（CBDB 记「兄」），王淑民 之父／母即 王治民 之父／母。
          source:
            id: s_oc8z6jb1vc3mnujEJoEfhl
            source_type: api_record
            title: 中国历代人物传记资料库：王治民（CBDB 209984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209984&o=json
            external_identifier: CBDB:209984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2a5b2EncYngS1EeFET9iYo
        status: active
        display_name: 王治民
        merged_into_person_id: null
    - claim:
        id: c_rY4SAXcE6h00ClO-xIuSrb
        subject_person_id: p_MdJHKADyMQk6VMaKNEyXK2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4vdSvSD5BUu5uYcGsx6QVM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nRKKRyGDpluaDUlZDRDgnS
          claim_id: c_rY4SAXcE6h00ClO-xIuSrb
          source_id: s_n-_myCbE-gKcafyPH73jpp
          stance: supports
          locator: CBDB：兄弟 王淑民（205869）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王潤民 与 王淑民 为同胞（CBDB 记「兄」），王淑民 之父／母即 王潤民 之父／母。
          source:
            id: s_n-_myCbE-gKcafyPH73jpp
            source_type: api_record
            title: 中国历代人物传记资料库：王潤民（CBDB 209991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209991&o=json
            external_identifier: CBDB:209991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4vdSvSD5BUu5uYcGsx6QVM
        status: active
        display_name: 王潤民
        merged_into_person_id: null
    - claim:
        id: c_M_2Ed4fJ1VJrrjQ7QsHOp_
        subject_person_id: p_MdJHKADyMQk6VMaKNEyXK2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9FnMbrqY96eB9jhu5soBKp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iJG6BUvFWsTDV1a5n8ZTiU
          claim_id: c_M_2Ed4fJ1VJrrjQ7QsHOp_
          source_id: s_-olYzWxisAfozf9nG1z5OT
          stance: supports
          locator: CBDB：兄弟 王淑民（205869）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王澤民 与 王淑民 为同胞（CBDB 记「兄」），王淑民 之父／母即 王澤民 之父／母。
          source:
            id: s_-olYzWxisAfozf9nG1z5OT
            source_type: api_record
            title: 中国历代人物传记资料库：王澤民（CBDB 209980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209980&o=json
            external_identifier: CBDB:209980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9FnMbrqY96eB9jhu5soBKp
        status: active
        display_name: 王澤民
        merged_into_person_id: null
    - claim:
        id: c_Y2WhYaTKAFWzK7bUUYRbiI
        subject_person_id: p_MdJHKADyMQk6VMaKNEyXK2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A241Q19C1D7aArnNcNR92N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R32yGaBA_eZolC2Krh5Wjh
          claim_id: c_Y2WhYaTKAFWzK7bUUYRbiI
          source_id: s_y5T4RsPoBoLPWiUC_WEoV1
          stance: supports
          locator: CBDB：兄弟 王淑民（205869）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王添民 与 王淑民 为同胞（CBDB 记「弟」），王淑民 之父／母即 王添民 之父／母。
          source:
            id: s_y5T4RsPoBoLPWiUC_WEoV1
            source_type: api_record
            title: 中国历代人物传记资料库：王添民（CBDB 209979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209979&o=json
            external_identifier: CBDB:209979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A241Q19C1D7aArnNcNR92N
        status: active
        display_name: 王添民
        merged_into_person_id: null
    - claim:
        id: c_uZzDvVfX8XyOYgsxYbRsqr
        subject_person_id: p_MdJHKADyMQk6VMaKNEyXK2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DnZ4fAo8LTtYb3mHpB6mKy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8AXksimWlFyRf905_Ow8gP
          claim_id: c_uZzDvVfX8XyOYgsxYbRsqr
          source_id: s_taSKqws-wRv9zexakH1CsA
          stance: supports
          locator: CBDB：兄弟 王淑民（205869）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王洽民 与 王淑民 为同胞（CBDB 记「兄」），王淑民 之父／母即 王洽民 之父／母。
          source:
            id: s_taSKqws-wRv9zexakH1CsA
            source_type: api_record
            title: 中国历代人物传记资料库：王洽民（CBDB 209987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209987&o=json
            external_identifier: CBDB:209987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DnZ4fAo8LTtYb3mHpB6mKy
        status: active
        display_name: 王洽民
        merged_into_person_id: null
    - claim:
        id: c_4j_ZrXGdGtEsaPjbf7rmyh
        subject_person_id: p_MdJHKADyMQk6VMaKNEyXK2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EgF6159zTeoxFCZpxCx9LH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xw5MjUVAkzfbBBmUZYTC6q
          claim_id: c_4j_ZrXGdGtEsaPjbf7rmyh
          source_id: s_WBg9tpiyx6Ki3Y0haeoqQB
          stance: supports
          locator: CBDB：兄弟 王淑民（205869）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王漸民 与 王淑民 为同胞（CBDB 记「兄」），王淑民 之父／母即 王漸民 之父／母。
          source:
            id: s_WBg9tpiyx6Ki3Y0haeoqQB
            source_type: api_record
            title: 中国历代人物传记资料库：王漸民（CBDB 209990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209990&o=json
            external_identifier: CBDB:209990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EgF6159zTeoxFCZpxCx9LH
        status: active
        display_name: 王漸民
        merged_into_person_id: null
    - claim:
        id: c_UlO_j7HAUXNveMJ2BdBPAF
        subject_person_id: p_MdJHKADyMQk6VMaKNEyXK2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GRZw2nCbPbC8htfhCoBGGw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LXZTTJvGsx-e6eT605zubH
          claim_id: c_UlO_j7HAUXNveMJ2BdBPAF
          source_id: s_PXPGeVp4pjMuODlM0PGnLI
          stance: supports
          locator: CBDB：兄弟 王淑民（205869）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王新民 与 王淑民 为同胞（CBDB 记「兄」），王淑民 之父／母即 王新民 之父／母。
          source:
            id: s_PXPGeVp4pjMuODlM0PGnLI
            source_type: api_record
            title: 中国历代人物传记资料库：王新民（CBDB 209983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209983&o=json
            external_identifier: CBDB:209983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GRZw2nCbPbC8htfhCoBGGw
        status: active
        display_name: 王新民
        merged_into_person_id: null
    - claim:
        id: c_MWEGWKtPtTI2TI5SAL9B_I
        subject_person_id: p_MdJHKADyMQk6VMaKNEyXK2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PLdr4HzfLKbdZ815EbDVvb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sNIXKwHfNuQ-86-PFIV_pz
          claim_id: c_MWEGWKtPtTI2TI5SAL9B_I
          source_id: s_GBbJQGUDDsFQitplGaufzn
          stance: supports
          locator: CBDB：兄弟 王淑民（205869）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王淶民 与 王淑民 为同胞（CBDB 记「兄」），王淑民 之父／母即 王淶民 之父／母。
          source:
            id: s_GBbJQGUDDsFQitplGaufzn
            source_type: api_record
            title: 中国历代人物传记资料库：王淶民（CBDB 209986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209986&o=json
            external_identifier: CBDB:209986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PLdr4HzfLKbdZ815EbDVvb
        status: active
        display_name: 王淶民
        merged_into_person_id: null
    - claim:
        id: c_lRRg6Grfi0bdBy25btwFlf
        subject_person_id: p_MdJHKADyMQk6VMaKNEyXK2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PmtdNELQSzzM7UiLsJ1HEf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_37gyEEH0zRsQQL1Y6D7vrJ
          claim_id: c_lRRg6Grfi0bdBy25btwFlf
          source_id: s_j8QMY5_M7WTurFIuTcjsFa
          stance: supports
          locator: CBDB：兄弟 王淑民（205869）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王溥民 与 王淑民 为同胞（CBDB 记「兄」），王淑民 之父／母即 王溥民 之父／母。
          source:
            id: s_j8QMY5_M7WTurFIuTcjsFa
            source_type: api_record
            title: 中国历代人物传记资料库：王溥民（CBDB 209994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209994&o=json
            external_identifier: CBDB:209994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PmtdNELQSzzM7UiLsJ1HEf
        status: active
        display_name: 王溥民
        merged_into_person_id: null
    - claim:
        id: c_Gh2G3yHkf0HHDpHwQr8C9Z
        subject_person_id: p_MdJHKADyMQk6VMaKNEyXK2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RN9ocucA86xJHPbc7HAmg6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0a9M469kHTRYySO5-p-uKs
          claim_id: c_Gh2G3yHkf0HHDpHwQr8C9Z
          source_id: s_OW248VDGMOZbgqJZ5DLpIw
          stance: supports
          locator: CBDB：兄弟 王淑民（205869）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王濟民 与 王淑民 为同胞（CBDB 记「兄」），王淑民 之父／母即 王濟民 之父／母。
          source:
            id: s_OW248VDGMOZbgqJZ5DLpIw
            source_type: api_record
            title: 中国历代人物传记资料库：王濟民（CBDB 209989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209989&o=json
            external_identifier: CBDB:209989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RN9ocucA86xJHPbc7HAmg6
        status: active
        display_name: 王濟民
        merged_into_person_id: null
    - claim:
        id: c_a_StdwyJs3U8yMhDzlysL3
        subject_person_id: p_MdJHKADyMQk6VMaKNEyXK2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Uy6H9AXTAspCpioXp5nn27
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g2uZXxfamboWZcB6g937oi
          claim_id: c_a_StdwyJs3U8yMhDzlysL3
          source_id: s_e5mLgSb4eOaDFktWZTmSc4
          stance: supports
          locator: CBDB：兄弟 王淑民（205869）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王淳民 与 王淑民 为同胞（CBDB 记「兄」），王淑民 之父／母即 王淳民 之父／母。
          source:
            id: s_e5mLgSb4eOaDFktWZTmSc4
            source_type: api_record
            title: 中国历代人物传记资料库：王淳民（CBDB 209985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209985&o=json
            external_identifier: CBDB:209985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Uy6H9AXTAspCpioXp5nn27
        status: active
        display_name: 王淳民
        merged_into_person_id: null
    - claim:
        id: c_s7CE5JjVMGWSEoMGEBgxvJ
        subject_person_id: p_MdJHKADyMQk6VMaKNEyXK2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wZUHKXVL2uGTGTcwh5LhvR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0W1tXvWWNGZ5_V9KgN0mSx
          claim_id: c_s7CE5JjVMGWSEoMGEBgxvJ
          source_id: s_qqs5T-GaxLbBWS8VB5WPaT
          stance: supports
          locator: CBDB：兄弟 王淑民（205869）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王俊民 与 王淑民 为同胞（CBDB 记「兄」），王淑民 之父／母即 王俊民 之父／母。
          source:
            id: s_qqs5T-GaxLbBWS8VB5WPaT
            source_type: api_record
            title: 中国历代人物传记资料库：王俊民（CBDB 209982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209982&o=json
            external_identifier: CBDB:209982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wZUHKXVL2uGTGTcwh5LhvR
        status: active
        display_name: 王俊民
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棟 | accepted |
| bio.summary | 王棟，明人物。隆慶五年進士，籍贯合江。（中国历代人物传记资料库 CBDB 209976） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3K8YMQuna5CRk3d72KDoG1 | 王淑民 | accepted |
| children | p_2a5b2EncYngS1EeFET9iYo | 王治民 | accepted |
| children | p_4vdSvSD5BUu5uYcGsx6QVM | 王潤民 | accepted |
| children | p_9FnMbrqY96eB9jhu5soBKp | 王澤民 | accepted |
| children | p_A241Q19C1D7aArnNcNR92N | 王添民 | accepted |
| children | p_DnZ4fAo8LTtYb3mHpB6mKy | 王洽民 | accepted |
| children | p_EgF6159zTeoxFCZpxCx9LH | 王漸民 | accepted |
| children | p_GRZw2nCbPbC8htfhCoBGGw | 王新民 | accepted |
| children | p_PLdr4HzfLKbdZ815EbDVvb | 王淶民 | accepted |
| children | p_PmtdNELQSzzM7UiLsJ1HEf | 王溥民 | accepted |
| children | p_RN9ocucA86xJHPbc7HAmg6 | 王濟民 | accepted |
| children | p_Uy6H9AXTAspCpioXp5nn27 | 王淳民 | accepted |
| children | p_wZUHKXVL2uGTGTcwh5LhvR | 王俊民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淳民（CBDB 209985）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209985&o=json)
- [中国历代人物传记资料库：王棟（CBDB 209976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209976&o=json)
- [中国历代人物传记资料库：王濟民（CBDB 209989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209989&o=json)
- [中国历代人物传记资料库：王漸民（CBDB 209990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209990&o=json)
- [中国历代人物传记资料库：王俊民（CBDB 209982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209982&o=json)
- [中国历代人物传记资料库：王淶民（CBDB 209986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209986&o=json)
- [中国历代人物传记资料库：王溥民（CBDB 209994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209994&o=json)
- [中国历代人物传记资料库：王洽民（CBDB 209987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209987&o=json)
- [中国历代人物传记资料库：王潤民（CBDB 209991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209991&o=json)
- [中国历代人物传记资料库：王添民（CBDB 209979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209979&o=json)
- [中国历代人物传记资料库：王新民（CBDB 209983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209983&o=json)
- [中国历代人物传记资料库：王澤民（CBDB 209980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209980&o=json)
- [中国历代人物传记资料库：王治民（CBDB 209984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209984&o=json)
