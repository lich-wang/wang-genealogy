---
schema: wang-person/v1
id: p_ymQLsviGVnJad7qLTZDHb4
status: active
merged_into: null
display_name: 王渙
revision: 15
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NQJ2imKW4rPwuB5vNBVEZA
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AHW6BbXLHL53qNKKGk6voc
          claim_id: c_NQJ2imKW4rPwuB5vNBVEZA
          source_id: s_Hi4Dfz1rKMoiuGrViGfdTN
          stance: supports
          locator: CBDB:294432
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294432）
          source: &a1
            id: s_Hi4Dfz1rKMoiuGrViGfdTN
            source_type: api_record
            title: 中国历代人物传记资料库：王渙（CBDB 294432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294432&o=json
            external_identifier: CBDB:294432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.456Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FixB7uyvxTBGRktyUpMtUJ
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渙，明人物。嘉靖十一年進士，籍贯象山，曾任監察御史。（中国历代人物传记资料库 CBDB 294432）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4xssS5A6jqJfw8so7SLrm3
          claim_id: c_FixB7uyvxTBGRktyUpMtUJ
          source_id: s_Hi4Dfz1rKMoiuGrViGfdTN
          stance: supports
          locator: CBDB:294432
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_xTI7CCJzeGfkvUZQEA4upw
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hWm92R8BxfH1SXFUJfsfle
          claim_id: c_xTI7CCJzeGfkvUZQEA4upw
          source_id: s_Hi4Dfz1rKMoiuGrViGfdTN
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TdovnQSDHPgtdb6L5QzgtZ
        status: active
        display_name: 王梴
        merged_into_person_id: null
    - claim:
        id: c_ODyKc0NltoSHqoJD68lChU
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2rqmo3og7G8V9Dr9vMvnwH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P_yBColzqRrHxWSUzQSUpA
          claim_id: c_ODyKc0NltoSHqoJD68lChU
          source_id: s_5xP3-zkwZTeRNXIEt9jTxc
          stance: supports
          locator: CBDB：兄弟 王梴（202789）之父／母 王渙
          quotation: null
          interpretation_note: 由兄弟关系推断：王𬄣 与 王梴 为同胞（CBDB 记「弟」），王梴 之父／母即 王𬄣 之父／母。
          source:
            id: s_5xP3-zkwZTeRNXIEt9jTxc
            source_type: api_record
            title: 中国历代人物传记资料库：王𬄣（CBDB 294437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294437&o=json
            external_identifier: CBDB:294437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2rqmo3og7G8V9Dr9vMvnwH
        status: active
        display_name: 王𬄣
        merged_into_person_id: null
    - claim:
        id: c_VeNBj6F2agENYEJd4c0T2V
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_66iBPSDxjazgshmXgCinW3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yRcGf417WUQ516biD0foo1
          claim_id: c_VeNBj6F2agENYEJd4c0T2V
          source_id: s_VdifsS33Qpk4BeXbMfUovO
          stance: supports
          locator: CBDB：兄弟 王梴（202789）之父／母 王渙
          quotation: null
          interpretation_note: 由兄弟关系推断：王楊 与 王梴 为同胞（CBDB 记「兄」），王梴 之父／母即 王楊 之父／母。
          source:
            id: s_VdifsS33Qpk4BeXbMfUovO
            source_type: api_record
            title: 中国历代人物传记资料库：王楊（CBDB 294448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294448&o=json
            external_identifier: CBDB:294448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_66iBPSDxjazgshmXgCinW3
        status: active
        display_name: 王楊
        merged_into_person_id: null
    - claim:
        id: c_sJA2fX9lTNcL8iWUZ6ZzuG
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B9zZ1dWS88mCc3eFnzsa8t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vuy_8qvY4m8KTP3l9JKPtX
          claim_id: c_sJA2fX9lTNcL8iWUZ6ZzuG
          source_id: s_1-y6caMC3pT96Zo0W4GLNF
          stance: supports
          locator: CBDB：兄弟 王梴（202789）之父／母 王渙
          quotation: null
          interpretation_note: 由兄弟关系推断：王模 与 王梴 为同胞（CBDB 记「弟」），王梴 之父／母即 王模 之父／母。
          source:
            id: s_1-y6caMC3pT96Zo0W4GLNF
            source_type: api_record
            title: 中国历代人物传记资料库：王模（CBDB 294441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294441&o=json
            external_identifier: CBDB:294441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_B9zZ1dWS88mCc3eFnzsa8t
        status: active
        display_name: 王模
        merged_into_person_id: null
    - claim:
        id: c_Sr-6pM57V9rRfLysnM_da8
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Jivm79X5Ec98aRrbuSP5SG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GSUmFBTsBQiF2xdSTDSFth
          claim_id: c_Sr-6pM57V9rRfLysnM_da8
          source_id: s_Jy2i9ETCsJrZtITBKRdd8z
          stance: supports
          locator: CBDB：兄弟 王梴（202789）之父／母 王渙
          quotation: null
          interpretation_note: 由兄弟关系推断：王楠 与 王梴 为同胞（CBDB 记「兄」），王梴 之父／母即 王楠 之父／母。
          source:
            id: s_Jy2i9ETCsJrZtITBKRdd8z
            source_type: api_record
            title: 中国历代人物传记资料库：王楠（CBDB 294447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294447&o=json
            external_identifier: CBDB:294447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Jivm79X5Ec98aRrbuSP5SG
        status: active
        display_name: 王楠
        merged_into_person_id: null
    - claim:
        id: c_lHuWdS0pjSPmBEngIk6htY
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LFt8Rsde3gMfwwAy7NB9xn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t4OCo4DyQctMmHAR3iJC3p
          claim_id: c_lHuWdS0pjSPmBEngIk6htY
          source_id: s_tRSIuMhN6gXMoreLKB6bCs
          stance: supports
          locator: CBDB：兄弟 王梴（202789）之父／母 王渙
          quotation: null
          interpretation_note: 由兄弟关系推断：王棟 与 王梴 为同胞（CBDB 记「兄」），王梴 之父／母即 王棟 之父／母。
          source:
            id: s_tRSIuMhN6gXMoreLKB6bCs
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 294445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294445&o=json
            external_identifier: CBDB:294445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LFt8Rsde3gMfwwAy7NB9xn
        status: active
        display_name: 王棟
        merged_into_person_id: null
    - claim:
        id: c_g1XBGRzrCyiFLMGGNl6N89
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N7CXSPXtEUxoPtcpzKGask
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bNa8PrwPD8RBnqQGOsAgj2
          claim_id: c_g1XBGRzrCyiFLMGGNl6N89
          source_id: s_c6_3r_hREfnIjT3kvB1P33
          stance: supports
          locator: CBDB：兄弟 王梴（202789）之父／母 王渙
          quotation: null
          interpretation_note: 由兄弟关系推断：王楷 与 王梴 为同胞（CBDB 记「弟」），王梴 之父／母即 王楷 之父／母。
          source:
            id: s_c6_3r_hREfnIjT3kvB1P33
            source_type: api_record
            title: 中国历代人物传记资料库：王楷（CBDB 294439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294439&o=json
            external_identifier: CBDB:294439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N7CXSPXtEUxoPtcpzKGask
        status: active
        display_name: 王楷
        merged_into_person_id: null
    - claim:
        id: c_Gsx_Xen6PZp1tUxNeiRq_N
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fbxtTcQ4A5CmnHLGeDox7c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L0rWphrXpcMvO5B5TO92zm
          claim_id: c_Gsx_Xen6PZp1tUxNeiRq_N
          source_id: s_I1basQgZPF72n37z6nDcNX
          stance: supports
          locator: CBDB：兄弟 王梴（202789）之父／母 王渙
          quotation: null
          interpretation_note: 由兄弟关系推断：王㭿 与 王梴 为同胞（CBDB 记「弟」），王梴 之父／母即 王㭿 之父／母。
          source:
            id: s_I1basQgZPF72n37z6nDcNX
            source_type: api_record
            title: 中国历代人物传记资料库：王㭿（CBDB 294443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294443&o=json
            external_identifier: CBDB:294443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fbxtTcQ4A5CmnHLGeDox7c
        status: active
        display_name: 王㭿
        merged_into_person_id: null
    - claim:
        id: c_cnBEQW1vP273FVdc43ggju
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ibHfsNHumtJYpPyWsKmmrk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q2J0Zbpjyu8v-HTbGljFlz
          claim_id: c_cnBEQW1vP273FVdc43ggju
          source_id: s_8JLrZ-7uovnJBf0I8FCT-O
          stance: supports
          locator: CBDB：兄弟 王梴（202789）之父／母 王渙
          quotation: null
          interpretation_note: 由兄弟关系推断：王林 与 王梴 为同胞（CBDB 记「弟」），王梴 之父／母即 王林 之父／母。
          source:
            id: s_8JLrZ-7uovnJBf0I8FCT-O
            source_type: api_record
            title: 中国历代人物传记资料库：王林（CBDB 294435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294435&o=json
            external_identifier: CBDB:294435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ibHfsNHumtJYpPyWsKmmrk
        status: active
        display_name: 王林
        merged_into_person_id: null
    - claim:
        id: c_L8IoCKiAMzUL3DBJgyBedm
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iz6rBd11y4FybC2WrF2LFJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HZFZDb8CDsOmD68hnY5ZSh
          claim_id: c_L8IoCKiAMzUL3DBJgyBedm
          source_id: s_Se_e5nlM5tPlnScgnDJreK
          stance: supports
          locator: CBDB：兄弟 王梴（202789）之父／母 王渙
          quotation: null
          interpretation_note: 由兄弟关系推断：王極 与 王梴 为同胞（CBDB 记「兄」），王梴 之父／母即 王極 之父／母。
          source:
            id: s_Se_e5nlM5tPlnScgnDJreK
            source_type: api_record
            title: 中国历代人物传记资料库：王極（CBDB 294446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294446&o=json
            external_identifier: CBDB:294446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iz6rBd11y4FybC2WrF2LFJ
        status: active
        display_name: 王極
        merged_into_person_id: null
    - claim:
        id: c_RMmZrJGDy-_kXytu27r-Sp
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kvFwT4sa4wGvdykoDxnfP9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uaW1NIeC0L-0-fWiDi7Pxp
          claim_id: c_RMmZrJGDy-_kXytu27r-Sp
          source_id: s_f1FfXpes1afQmKPy7eQv0O
          stance: supports
          locator: CBDB：兄弟 王梴（202789）之父／母 王渙
          quotation: null
          interpretation_note: 由兄弟关系推断：王櫕 与 王梴 为同胞（CBDB 记「弟」），王梴 之父／母即 王櫕 之父／母。
          source:
            id: s_f1FfXpes1afQmKPy7eQv0O
            source_type: api_record
            title: 中国历代人物传记资料库：王櫕（CBDB 294444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294444&o=json
            external_identifier: CBDB:294444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kvFwT4sa4wGvdykoDxnfP9
        status: active
        display_name: 王櫕
        merged_into_person_id: null
    - claim:
        id: c_LoAW44ExUUo_hfnM_Shm6U
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nT1qAM9Qvrc4bEuowpcXAi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_45yzuTcWM9B7DF-GqGU_BR
          claim_id: c_LoAW44ExUUo_hfnM_Shm6U
          source_id: s_xZE7rVEIZ7y3rQ8vOPhcV-
          stance: supports
          locator: CBDB：兄弟 王梴（202789）之父／母 王渙
          quotation: null
          interpretation_note: 由兄弟关系推断：王桓 与 王梴 为同胞（CBDB 记「弟」），王梴 之父／母即 王桓 之父／母。
          source:
            id: s_xZE7rVEIZ7y3rQ8vOPhcV-
            source_type: api_record
            title: 中国历代人物传记资料库：王桓（CBDB 294436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294436&o=json
            external_identifier: CBDB:294436
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nT1qAM9Qvrc4bEuowpcXAi
        status: active
        display_name: 王桓
        merged_into_person_id: null
    - claim:
        id: c_E4ok2O4FA8Soh_eukqFhh9
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nwcsGassEoZJf7LEyWo3fJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FlMi2T4x-V19hSiWXYnk1y
          claim_id: c_E4ok2O4FA8Soh_eukqFhh9
          source_id: s_RAuoK1DrSd53dS9WF6EjeE
          stance: supports
          locator: CBDB：兄弟 王梴（202789）之父／母 王渙
          quotation: null
          interpretation_note: 由兄弟关系推断：王橋 与 王梴 为同胞（CBDB 记「弟」），王梴 之父／母即 王橋 之父／母。
          source:
            id: s_RAuoK1DrSd53dS9WF6EjeE
            source_type: api_record
            title: 中国历代人物传记资料库：王橋（CBDB 294442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294442&o=json
            external_identifier: CBDB:294442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nwcsGassEoZJf7LEyWo3fJ
        status: active
        display_name: 王橋
        merged_into_person_id: null
    - claim:
        id: c_cLQUTBr6WC5lZWKrVGhec8
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z18ptdZJMMwCTGr7YAuqDh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3WOWDyzGk1Yzv9ZgcDElA6
          claim_id: c_cLQUTBr6WC5lZWKrVGhec8
          source_id: s_MEZb4ZGvQ8Wt8Fgl-5FwNP
          stance: supports
          locator: CBDB：兄弟 王梴（202789）之父／母 王渙
          quotation: null
          interpretation_note: 由兄弟关系推断：王檄 与 王梴 为同胞（CBDB 记「弟」），王梴 之父／母即 王檄 之父／母。
          source:
            id: s_MEZb4ZGvQ8Wt8Fgl-5FwNP
            source_type: api_record
            title: 中国历代人物传记资料库：王檄（CBDB 294438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294438&o=json
            external_identifier: CBDB:294438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_z18ptdZJMMwCTGr7YAuqDh
        status: active
        display_name: 王檄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王渙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王渙 | accepted |
| bio.summary | 王渙，明人物。嘉靖十一年進士，籍贯象山，曾任監察御史。（中国历代人物传记资料库 CBDB 294432） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_TdovnQSDHPgtdb6L5QzgtZ | 王梴 | accepted |
| children | p_2rqmo3og7G8V9Dr9vMvnwH | 王𬄣 | accepted |
| children | p_66iBPSDxjazgshmXgCinW3 | 王楊 | accepted |
| children | p_B9zZ1dWS88mCc3eFnzsa8t | 王模 | accepted |
| children | p_Jivm79X5Ec98aRrbuSP5SG | 王楠 | accepted |
| children | p_LFt8Rsde3gMfwwAy7NB9xn | 王棟 | accepted |
| children | p_N7CXSPXtEUxoPtcpzKGask | 王楷 | accepted |
| children | p_fbxtTcQ4A5CmnHLGeDox7c | 王㭿 | accepted |
| children | p_ibHfsNHumtJYpPyWsKmmrk | 王林 | accepted |
| children | p_iz6rBd11y4FybC2WrF2LFJ | 王極 | accepted |
| children | p_kvFwT4sa4wGvdykoDxnfP9 | 王櫕 | accepted |
| children | p_nT1qAM9Qvrc4bEuowpcXAi | 王桓 | accepted |
| children | p_nwcsGassEoZJf7LEyWo3fJ | 王橋 | accepted |
| children | p_z18ptdZJMMwCTGr7YAuqDh | 王檄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王櫕（CBDB 294444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294444&o=json)
- [中国历代人物传记资料库：王棟（CBDB 294445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294445&o=json)
- [中国历代人物传记资料库：王桓（CBDB 294436）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294436&o=json)
- [中国历代人物传记资料库：王渙（CBDB 294432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294432&o=json)
- [中国历代人物传记资料库：王極（CBDB 294446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294446&o=json)
- [中国历代人物传记资料库：王楷（CBDB 294439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294439&o=json)
- [中国历代人物传记资料库：王林（CBDB 294435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294435&o=json)
- [中国历代人物传记资料库：王模（CBDB 294441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294441&o=json)
- [中国历代人物传记资料库：王楠（CBDB 294447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294447&o=json)
- [中国历代人物传记资料库：王橋（CBDB 294442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294442&o=json)
- [中国历代人物传记资料库：王檄（CBDB 294438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294438&o=json)
- [中国历代人物传记资料库：王楊（CBDB 294448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294448&o=json)
- [中国历代人物传记资料库：王㭿（CBDB 294443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294443&o=json)
- [中国历代人物传记资料库：王𬄣（CBDB 294437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294437&o=json)
