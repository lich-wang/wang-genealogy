---
schema: wang-person/v1
id: p_oJyHrTtA8vuQzWweqp45TE
status: active
merged_into: null
display_name: 王以佐
cbdb_id: 216206
revision: 16
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_twYEnDFGm5WBSovSJisGym
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以佐，明人物。萬曆五年進士，籍贯惠安，曾任教授、教諭、訓導。（中国历代人物传记资料库 CBDB 216206）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_varGF-lqnc3cg_xCzTiKVC
          claim_id: c_twYEnDFGm5WBSovSJisGym
          source_id: s_SHB1Q3HUDhwHtdLgBrPtUp
          stance: supports
          locator: CBDB:216206
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_SHB1Q3HUDhwHtdLgBrPtUp
            source_type: api_record
            title: 中国历代人物传记资料库：王以佐（CBDB 216206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216206&o=json
            external_identifier: CBDB:216206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_N4S9nKt1nDvFPHjUAaW6qX
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_zgcxtRPWCKT7QNEG6zFNiv
          claim_id: c_N4S9nKt1nDvFPHjUAaW6qX
          source_id: s_SHB1Q3HUDhwHtdLgBrPtUp
          stance: supports
          locator: CBDB:216206
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Xlbgvxg4M5ARYKg0ZwQ8Mo
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J55afBgCkqtPSYRig4M9VL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OH5PO2KGnFzB2fcNA3JVbK
          claim_id: c_Xlbgvxg4M5ARYKg0ZwQ8Mo
          source_id: s_Q9EatNnQ4FxJEyR2y492WM
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Q9EatNnQ4FxJEyR2y492WM
            source_type: api_record
            title: 中国历代人物传记资料库：王約（CBDB 206312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206312&o=json
            external_identifier: CBDB:206312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_J55afBgCkqtPSYRig4M9VL
        status: active
        display_name: 王約
        merged_into_person_id: null
    - claim:
        id: c_uR3CqBWFm48LvhemMxvxS2
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3wXtvBGTqaPxMPdaYocPsB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pq2XJVmDyMxjbBNzCpMCM6
          claim_id: c_uR3CqBWFm48LvhemMxvxS2
          source_id: s_qX5F4Oa5qOx1XAfxvCfRcA
          stance: supports
          locator: CBDB：兄弟 王約（206312）之父／母 王以佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王經 与 王約 为同胞（CBDB 记「弟」），王約 之父／母即 王經 之父／母。
          source:
            id: s_qX5F4Oa5qOx1XAfxvCfRcA
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 216211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216211&o=json
            external_identifier: CBDB:216211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3wXtvBGTqaPxMPdaYocPsB
        status: active
        display_name: 王經
        merged_into_person_id: null
    - claim:
        id: c_bPWrxebjpwkO36JOonsiYQ
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4Wha6EM9QfU8SMLa35FcMb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-_Y136OzlWbqIozSmWCL52
          claim_id: c_bPWrxebjpwkO36JOonsiYQ
          source_id: s__bB-HArSrP61zZIB609LTn
          stance: supports
          locator: CBDB：兄弟 王約（206312）之父／母 王以佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王緒 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王緒 之父／母。
          source:
            id: s__bB-HArSrP61zZIB609LTn
            source_type: api_record
            title: 中国历代人物传记资料库：王緒（CBDB 216219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216219&o=json
            external_identifier: CBDB:216219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4Wha6EM9QfU8SMLa35FcMb
        status: active
        display_name: 王緒
        merged_into_person_id: null
    - claim:
        id: c_JrMaEDhvHbUu-8HwyFN4Sl
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5TYbP6MDoUN9rZz2riVJEn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qGSpMAr96F85zlLNp1EKYg
          claim_id: c_JrMaEDhvHbUu-8HwyFN4Sl
          source_id: s_I1HN9NZ8N6i_sM48cgql7g
          stance: supports
          locator: CBDB：兄弟 王約（206312）之父／母 王以佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王組 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王組 之父／母。
          source:
            id: s_I1HN9NZ8N6i_sM48cgql7g
            source_type: api_record
            title: 中国历代人物传记资料库：王組（CBDB 216221）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216221&o=json
            external_identifier: CBDB:216221
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5TYbP6MDoUN9rZz2riVJEn
        status: active
        display_name: 王組
        merged_into_person_id: null
    - claim:
        id: c_Ue7MXfEO2xN_IK9uv_m5vT
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8oVoUEeybBRpXSZtAJ43JG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2FD1rF48Cv0FS8OyIf45xu
          claim_id: c_Ue7MXfEO2xN_IK9uv_m5vT
          source_id: s_vW4x9VgHconTAOGTW_fYA9
          stance: supports
          locator: CBDB：兄弟 王約（206312）之父／母 王以佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王綗 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王綗 之父／母。
          source:
            id: s_vW4x9VgHconTAOGTW_fYA9
            source_type: api_record
            title: 中国历代人物传记资料库：王綗（CBDB 216220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216220&o=json
            external_identifier: CBDB:216220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8oVoUEeybBRpXSZtAJ43JG
        status: active
        display_name: 王綗
        merged_into_person_id: null
    - claim:
        id: c_Pb5ofZyaHK5rRwpsHF7FYZ
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ei3b6mRBgz6HK8Lmk5SYRM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-r9PKA4vJhQzLK3P3Z3snk
          claim_id: c_Pb5ofZyaHK5rRwpsHF7FYZ
          source_id: s_rr2NKn0Mm3rb_iV-FF97Jw
          stance: supports
          locator: CBDB：兄弟 王約（206312）之父／母 王以佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王綸 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王綸 之父／母。
          source:
            id: s_rr2NKn0Mm3rb_iV-FF97Jw
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 216217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216217&o=json
            external_identifier: CBDB:216217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ei3b6mRBgz6HK8Lmk5SYRM
        status: active
        display_name: 王綸
        merged_into_person_id: null
    - claim:
        id: c_NvhSc-H67MdzZE1RIgxMtz
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FQ6xf8EEGiuyn95dg6WPvA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UhYaLrAaaJfiO-5FC9qXHC
          claim_id: c_NvhSc-H67MdzZE1RIgxMtz
          source_id: s_QY1tA4QCDpTd3gm7ljBEZE
          stance: supports
          locator: CBDB：兄弟 王約（206312）之父／母 王以佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王繩 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王繩 之父／母。
          source:
            id: s_QY1tA4QCDpTd3gm7ljBEZE
            source_type: api_record
            title: 中国历代人物传记资料库：王繩（CBDB 216222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216222&o=json
            external_identifier: CBDB:216222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FQ6xf8EEGiuyn95dg6WPvA
        status: active
        display_name: 王繩
        merged_into_person_id: null
    - claim:
        id: c_4vcmPaBIvM2CwQFgykpREr
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QuTC5KpJVPEypHFFxaiUGj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1c91lRutA5UaoCmTdIpzgA
          claim_id: c_4vcmPaBIvM2CwQFgykpREr
          source_id: s_qhSJX65Yw3B8dOzf1V999T
          stance: supports
          locator: CBDB：兄弟 王約（206312）之父／母 王以佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王纘 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王纘 之父／母。
          source:
            id: s_qhSJX65Yw3B8dOzf1V999T
            source_type: api_record
            title: 中国历代人物传记资料库：王纘（CBDB 216224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216224&o=json
            external_identifier: CBDB:216224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QuTC5KpJVPEypHFFxaiUGj
        status: active
        display_name: 王纘
        merged_into_person_id: null
    - claim:
        id: c_tZw2H8hjMtumzHDPLDj6L1
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WdZFqDJ8Ppagnw2nTLm3be
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zvgvYdi5cvSQ2PKcwhR6Z9
          claim_id: c_tZw2H8hjMtumzHDPLDj6L1
          source_id: s_HntUWixABTyozdQ5Pi23Mf
          stance: supports
          locator: CBDB：兄弟 王約（206312）之父／母 王以佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王繪 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王繪 之父／母。
          source:
            id: s_HntUWixABTyozdQ5Pi23Mf
            source_type: api_record
            title: 中国历代人物传记资料库：王繪（CBDB 216223）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216223&o=json
            external_identifier: CBDB:216223
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WdZFqDJ8Ppagnw2nTLm3be
        status: active
        display_name: 王繪
        merged_into_person_id: null
    - claim:
        id: c_u08HuMQfEjIYDcAqlqzkXD
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c77MSeXhbgSyFGiUSQQqhk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MwF74xSzvbzjQi1SShcxKH
          claim_id: c_u08HuMQfEjIYDcAqlqzkXD
          source_id: s_ZPf_7STNg8u_dFyxe0gTBv
          stance: supports
          locator: CBDB：兄弟 王約（206312）之父／母 王以佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王紹 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王紹 之父／母。
          source:
            id: s_ZPf_7STNg8u_dFyxe0gTBv
            source_type: api_record
            title: 中国历代人物传记资料库：王紹（CBDB 216213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216213&o=json
            external_identifier: CBDB:216213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_c77MSeXhbgSyFGiUSQQqhk
        status: active
        display_name: 王紹
        merged_into_person_id: null
    - claim:
        id: c_s9oiEsk5ayAznfyBt_MziC
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dm9JtAbbhsRuK6N7S2Zy5v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jQjqjH7Dn3WGcFWH_MDGYh
          claim_id: c_s9oiEsk5ayAznfyBt_MziC
          source_id: s_jUpYuyHzNd6subwJvgC-Jc
          stance: supports
          locator: CBDB：兄弟 王約（206312）之父／母 王以佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王緯 与 王約 为同胞（CBDB 记「弟」），王約 之父／母即 王緯 之父／母。
          source:
            id: s_jUpYuyHzNd6subwJvgC-Jc
            source_type: api_record
            title: 中国历代人物传记资料库：王緯（CBDB 216212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216212&o=json
            external_identifier: CBDB:216212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dm9JtAbbhsRuK6N7S2Zy5v
        status: active
        display_name: 王緯
        merged_into_person_id: null
    - claim:
        id: c_mM3HeE6-5MoteaO1ncSmbd
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o27JMw6S16NHVcRysyfq9z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OxdNtyJ-YdEp7g3EY3UOKx
          claim_id: c_mM3HeE6-5MoteaO1ncSmbd
          source_id: s_edIW9d1aD4fK4fkNl36twM
          stance: supports
          locator: CBDB：兄弟 王約（206312）之父／母 王以佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王綵 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王綵 之父／母。
          source:
            id: s_edIW9d1aD4fK4fkNl36twM
            source_type: api_record
            title: 中国历代人物传记资料库：王綵（CBDB 216225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216225&o=json
            external_identifier: CBDB:216225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_o27JMw6S16NHVcRysyfq9z
        status: active
        display_name: 王綵
        merged_into_person_id: null
    - claim:
        id: c_Dtq7ZUYQ4qkMxQEuqqmBqu
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sfgG47nwNSCzr33ze97V2Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bl1_aidO8jSDHh_2BhPdVn
          claim_id: c_Dtq7ZUYQ4qkMxQEuqqmBqu
          source_id: s_Q_zIE_byeG3v9zYUi2VDPM
          stance: supports
          locator: CBDB：兄弟 王約（206312）之父／母 王以佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王純 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王純 之父／母。
          source:
            id: s_Q_zIE_byeG3v9zYUi2VDPM
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 216216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216216&o=json
            external_identifier: CBDB:216216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sfgG47nwNSCzr33ze97V2Y
        status: active
        display_name: 王純
        merged_into_person_id: null
    - claim:
        id: c_OAtCcQ7sJ66vroZkdfKPJy
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tQ6nzH2FsCGBPchTs3gMft
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8V7QukhQkEeYeKG5DdQEs1
          claim_id: c_OAtCcQ7sJ66vroZkdfKPJy
          source_id: s_sI3K9AmSPXtVf9QKhGH40k
          stance: supports
          locator: CBDB：兄弟 王約（206312）之父／母 王以佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王縉 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王縉 之父／母。
          source:
            id: s_sI3K9AmSPXtVf9QKhGH40k
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 216218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216218&o=json
            external_identifier: CBDB:216218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tQ6nzH2FsCGBPchTs3gMft
        status: active
        display_name: 王縉
        merged_into_person_id: null
    - claim:
        id: c_hU-Mcyaxyv_qtFUf5-OG_a
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_woVBtYjYH41Tdzkh8YPme2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g8D61WcvH3Vh6AKI4M_6KO
          claim_id: c_hU-Mcyaxyv_qtFUf5-OG_a
          source_id: s_iSISy7znpNpySOiQq3jwOO
          stance: supports
          locator: CBDB：兄弟 王約（206312）之父／母 王以佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝 与 王約 为同胞（CBDB 记「弟」），王約 之父／母即 王汝 之父／母。
          source:
            id: s_iSISy7znpNpySOiQq3jwOO
            source_type: api_record
            title: 中国历代人物传记资料库：王汝（CBDB 216210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216210&o=json
            external_identifier: CBDB:216210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_woVBtYjYH41Tdzkh8YPme2
        status: active
        display_name: 王汝
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王以佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王以佐，明人物。萬曆五年進士，籍贯惠安，曾任教授、教諭、訓導。（中国历代人物传记资料库 CBDB 216206） | accepted |
| name.primary | 王以佐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_J55afBgCkqtPSYRig4M9VL | 王約 | accepted |
| children | p_3wXtvBGTqaPxMPdaYocPsB | 王經 | accepted |
| children | p_4Wha6EM9QfU8SMLa35FcMb | 王緒 | accepted |
| children | p_5TYbP6MDoUN9rZz2riVJEn | 王組 | accepted |
| children | p_8oVoUEeybBRpXSZtAJ43JG | 王綗 | accepted |
| children | p_Ei3b6mRBgz6HK8Lmk5SYRM | 王綸 | accepted |
| children | p_FQ6xf8EEGiuyn95dg6WPvA | 王繩 | accepted |
| children | p_QuTC5KpJVPEypHFFxaiUGj | 王纘 | accepted |
| children | p_WdZFqDJ8Ppagnw2nTLm3be | 王繪 | accepted |
| children | p_c77MSeXhbgSyFGiUSQQqhk | 王紹 | accepted |
| children | p_dm9JtAbbhsRuK6N7S2Zy5v | 王緯 | accepted |
| children | p_o27JMw6S16NHVcRysyfq9z | 王綵 | accepted |
| children | p_sfgG47nwNSCzr33ze97V2Y | 王純 | accepted |
| children | p_tQ6nzH2FsCGBPchTs3gMft | 王縉 | accepted |
| children | p_woVBtYjYH41Tdzkh8YPme2 | 王汝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綵（CBDB 216225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216225&o=json)
- [中国历代人物传记资料库：王純（CBDB 216216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216216&o=json)
- [中国历代人物传记资料库：王繪（CBDB 216223）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216223&o=json)
- [中国历代人物传记资料库：王縉（CBDB 216218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216218&o=json)
- [中国历代人物传记资料库：王經（CBDB 216211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216211&o=json)
- [中国历代人物传记资料库：王綗（CBDB 216220）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216220&o=json)
- [中国历代人物传记资料库：王綸（CBDB 216217）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216217&o=json)
- [中国历代人物传记资料库：王汝（CBDB 216210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216210&o=json)
- [中国历代人物传记资料库：王紹（CBDB 216213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216213&o=json)
- [中国历代人物传记资料库：王繩（CBDB 216222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216222&o=json)
- [中国历代人物传记资料库：王緯（CBDB 216212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216212&o=json)
- [中国历代人物传记资料库：王緒（CBDB 216219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216219&o=json)
- [中国历代人物传记资料库：王以佐（CBDB 216206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216206&o=json)
- [中国历代人物传记资料库：王約（CBDB 206312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206312&o=json)
- [中国历代人物传记资料库：王組（CBDB 216221）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216221&o=json)
- [中国历代人物传记资料库：王纘（CBDB 216224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216224&o=json)
