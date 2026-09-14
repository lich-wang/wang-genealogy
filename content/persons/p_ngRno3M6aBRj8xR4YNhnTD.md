---
schema: wang-person/v1
id: p_ngRno3M6aBRj8xR4YNhnTD
status: active
merged_into: null
display_name: 王紹先
revision: 14
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VeJxP79qNNTzZN3QpXZ2zT
        subject_person_id: p_ngRno3M6aBRj8xR4YNhnTD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹先
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xgcPbvKe8wKPmYP6kNs2Qa
          claim_id: c_VeJxP79qNNTzZN3QpXZ2zT
          source_id: s_ugDRhybgZS9LAqKbX3tkbr
          stance: supports
          locator: CBDB:329980
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329980）
          source: &a1
            id: s_ugDRhybgZS9LAqKbX3tkbr
            source_type: api_record
            title: 中国历代人物传记资料库：王紹先（CBDB 329980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329980&o=json
            external_identifier: CBDB:329980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.340Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BrGm4BH6ARz912GGqj2Unv
        subject_person_id: p_ngRno3M6aBRj8xR4YNhnTD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹先，明人物。嘉靖四十四年進士，籍贯定遠。（中国历代人物传记资料库 CBDB 329980）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CXnvuUz3MiRJWbS3pp5PdU
          claim_id: c_BrGm4BH6ARz912GGqj2Unv
          source_id: s_ugDRhybgZS9LAqKbX3tkbr
          stance: supports
          locator: CBDB:329980
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_pdZjE97jWFVXAK2j4Viu9r
        subject_person_id: p_ngRno3M6aBRj8xR4YNhnTD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fS_N_O-lKr0eOKVF2kKHSt
          claim_id: c_pdZjE97jWFVXAK2j4Viu9r
          source_id: s_ugDRhybgZS9LAqKbX3tkbr
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第五十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mYaz7ZtA5wiQaCjCBZf5rq
        status: active
        display_name: 王子蕙
        merged_into_person_id: null
    - claim:
        id: c__SDIKcM4IGNZn6sSAmwnQ_
        subject_person_id: p_ngRno3M6aBRj8xR4YNhnTD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4otBg1xjFfpjDCBKCwjG7N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_048IEb_GRibb3kooqzPXrx
          claim_id: c__SDIKcM4IGNZn6sSAmwnQ_
          source_id: s_Fdo89E_XqbmQ7Jz8cyKMIm
          stance: supports
          locator: CBDB：兄弟 王子蕙（205224）之父／母 王紹先
          quotation: null
          interpretation_note: 由兄弟关系推断：王會典 与 王子蕙 为同胞（CBDB 记「兄」），王子蕙 之父／母即 王會典 之父／母。
          source:
            id: s_Fdo89E_XqbmQ7Jz8cyKMIm
            source_type: api_record
            title: 中国历代人物传记资料库：王會典（CBDB 329994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329994&o=json
            external_identifier: CBDB:329994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4otBg1xjFfpjDCBKCwjG7N
        status: active
        display_name: 王會典
        merged_into_person_id: null
    - claim:
        id: c__r9KL5elEmdqtJEjkOLi0g
        subject_person_id: p_ngRno3M6aBRj8xR4YNhnTD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8WVJEdZ51ffa2JFnSSwFyK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gIpL3EaeoqBqTZOuWEap38
          claim_id: c__r9KL5elEmdqtJEjkOLi0g
          source_id: s_x5N8YpkqXY08RifVxyKLBQ
          stance: supports
          locator: CBDB：兄弟 王子蕙（205224）之父／母 王紹先
          quotation: null
          interpretation_note: 由兄弟关系推断：王子某 与 王子蕙 为同胞（CBDB 记「兄」），王子蕙 之父／母即 王子某 之父／母。
          source:
            id: s_x5N8YpkqXY08RifVxyKLBQ
            source_type: api_record
            title: 中国历代人物传记资料库：王子某（CBDB 329991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329991&o=json
            external_identifier: CBDB:329991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8WVJEdZ51ffa2JFnSSwFyK
        status: active
        display_name: 王子某
        merged_into_person_id: null
    - claim:
        id: c_9orRS8Me6G4wqgt3jpVRKx
        subject_person_id: p_ngRno3M6aBRj8xR4YNhnTD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9Bm8jiJiKVgRdaCFCRVeqr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YgnLU_9Oej92BNWE4huQ_C
          claim_id: c_9orRS8Me6G4wqgt3jpVRKx
          source_id: s_JZH-05rzBFJ0yBdZkKKZra
          stance: supports
          locator: CBDB：兄弟 王子蕙（205224）之父／母 王紹先
          quotation: null
          interpretation_note: 由兄弟关系推断：王會篇 与 王子蕙 为同胞（CBDB 记「兄」），王子蕙 之父／母即 王會篇 之父／母。
          source:
            id: s_JZH-05rzBFJ0yBdZkKKZra
            source_type: api_record
            title: 中国历代人物传记资料库：王會篇（CBDB 329993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329993&o=json
            external_identifier: CBDB:329993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9Bm8jiJiKVgRdaCFCRVeqr
        status: active
        display_name: 王會篇
        merged_into_person_id: null
    - claim:
        id: c_gQPohNERrEE-uMCfp9Kbek
        subject_person_id: p_ngRno3M6aBRj8xR4YNhnTD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ATUD83UALiA71wZ7nEBUi2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ocF7bxg0U8KyzSdpe4G7EF
          claim_id: c_gQPohNERrEE-uMCfp9Kbek
          source_id: s_zBTl0jcgkZaTGhz35TncZj
          stance: supports
          locator: CBDB：兄弟 王子蕙（205224）之父／母 王紹先
          quotation: null
          interpretation_note: 由兄弟关系推断：王會圖 与 王子蕙 为同胞（CBDB 记「兄」），王子蕙 之父／母即 王會圖 之父／母。
          source:
            id: s_zBTl0jcgkZaTGhz35TncZj
            source_type: api_record
            title: 中国历代人物传记资料库：王會圖（CBDB 329992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329992&o=json
            external_identifier: CBDB:329992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ATUD83UALiA71wZ7nEBUi2
        status: active
        display_name: 王會圖
        merged_into_person_id: null
    - claim:
        id: c_DrQrDezMCZWzqBAUsGMphF
        subject_person_id: p_ngRno3M6aBRj8xR4YNhnTD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LKzjyV3bk4T9BGTAKx9XxS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QcxRlsbBtbwVuylRkoJE4n
          claim_id: c_DrQrDezMCZWzqBAUsGMphF
          source_id: s_c3AZRbUfj9mg49KWpdecdo
          stance: supports
          locator: CBDB：兄弟 王子蕙（205224）之父／母 王紹先
          quotation: null
          interpretation_note: 由兄弟关系推断：王子蘭 与 王子蕙 为同胞（CBDB 记「弟」），王子蕙 之父／母即 王子蘭 之父／母。
          source:
            id: s_c3AZRbUfj9mg49KWpdecdo
            source_type: api_record
            title: 中国历代人物传记资料库：王子蘭（CBDB 329985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329985&o=json
            external_identifier: CBDB:329985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LKzjyV3bk4T9BGTAKx9XxS
        status: active
        display_name: 王子蘭
        merged_into_person_id: null
    - claim:
        id: c_o6TbSV-Zd2lHXrpkvFBWxP
        subject_person_id: p_ngRno3M6aBRj8xR4YNhnTD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R9ETm2GXhnXnSM5Tv4s8BB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TB5GPpp01qGU0gvOeGlJDJ
          claim_id: c_o6TbSV-Zd2lHXrpkvFBWxP
          source_id: s__UZxzoEGqq0KgJ-Mf9g-YN
          stance: supports
          locator: CBDB：兄弟 王子蕙（205224）之父／母 王紹先
          quotation: null
          interpretation_note: 由兄弟关系推断：王子某 与 王子蕙 为同胞（CBDB 记「兄」），王子蕙 之父／母即 王子某 之父／母。
          source:
            id: s__UZxzoEGqq0KgJ-Mf9g-YN
            source_type: api_record
            title: 中国历代人物传记资料库：王子某（CBDB 329987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329987&o=json
            external_identifier: CBDB:329987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_R9ETm2GXhnXnSM5Tv4s8BB
        status: active
        display_name: 王子某
        merged_into_person_id: null
    - claim:
        id: c_iSkrrQHDq39JNuq0izoNWE
        subject_person_id: p_ngRno3M6aBRj8xR4YNhnTD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WQ7Fk2JkN9CLXSW8EvM4tQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xko7d6O3z4iUl7rwMrfJmo
          claim_id: c_iSkrrQHDq39JNuq0izoNWE
          source_id: s_jlzBFs56LbI8NQRa1FGy_K
          stance: supports
          locator: CBDB：兄弟 王子蕙（205224）之父／母 王紹先
          quotation: null
          interpretation_note: 由兄弟关系推断：王子才 与 王子蕙 为同胞（CBDB 记「兄」），王子蕙 之父／母即 王子才 之父／母。
          source:
            id: s_jlzBFs56LbI8NQRa1FGy_K
            source_type: api_record
            title: 中国历代人物传记资料库：王子才（CBDB 329990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329990&o=json
            external_identifier: CBDB:329990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WQ7Fk2JkN9CLXSW8EvM4tQ
        status: active
        display_name: 王子才
        merged_into_person_id: null
    - claim:
        id: c_fGRWN86z3z-txb8jcm8-zr
        subject_person_id: p_ngRno3M6aBRj8xR4YNhnTD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XAuxCXpjiMrXtEUJvU2Rgm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bIt6gWM159QNskxM0fIuCP
          claim_id: c_fGRWN86z3z-txb8jcm8-zr
          source_id: s_LPlWhI_YTacj3tZnBMDqEN
          stance: supports
          locator: CBDB：兄弟 王子蕙（205224）之父／母 王紹先
          quotation: null
          interpretation_note: 由兄弟关系推断：王子勤 与 王子蕙 为同胞（CBDB 记「兄」），王子蕙 之父／母即 王子勤 之父／母。
          source:
            id: s_LPlWhI_YTacj3tZnBMDqEN
            source_type: api_record
            title: 中国历代人物传记资料库：王子勤（CBDB 329989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329989&o=json
            external_identifier: CBDB:329989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XAuxCXpjiMrXtEUJvU2Rgm
        status: active
        display_name: 王子勤
        merged_into_person_id: null
    - claim:
        id: c_h5qJFzfgGbBXWFBSuEpZgb
        subject_person_id: p_ngRno3M6aBRj8xR4YNhnTD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZDhJrFTTNwPzjHRmEJcH8V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8-DL_qM7HrQTohTipwFhli
          claim_id: c_h5qJFzfgGbBXWFBSuEpZgb
          source_id: s_bT5Ld59N0zTTDi24L0i7fn
          stance: supports
          locator: CBDB：兄弟 王子蕙（205224）之父／母 王紹先
          quotation: null
          interpretation_note: 由兄弟关系推断：王會通 与 王子蕙 为同胞（CBDB 记「兄」），王子蕙 之父／母即 王會通 之父／母。
          source:
            id: s_bT5Ld59N0zTTDi24L0i7fn
            source_type: api_record
            title: 中国历代人物传记资料库：王會通（CBDB 329996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329996&o=json
            external_identifier: CBDB:329996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZDhJrFTTNwPzjHRmEJcH8V
        status: active
        display_name: 王會通
        merged_into_person_id: null
    - claim:
        id: c_DGehYw6M8TNnJuN3GzMXur
        subject_person_id: p_ngRno3M6aBRj8xR4YNhnTD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q9Z3XPvDF8eZirf8EQCppq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZM_94BjaN6F9-rWhtugguY
          claim_id: c_DGehYw6M8TNnJuN3GzMXur
          source_id: s_Kb2mnbKtX37NL28GJwmEOt
          stance: supports
          locator: CBDB：兄弟 王子蕙（205224）之父／母 王紹先
          quotation: null
          interpretation_note: 由兄弟关系推断：王子梅 与 王子蕙 为同胞（CBDB 记「兄」），王子蕙 之父／母即 王子梅 之父／母。
          source:
            id: s_Kb2mnbKtX37NL28GJwmEOt
            source_type: api_record
            title: 中国历代人物传记资料库：王子梅（CBDB 329988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329988&o=json
            external_identifier: CBDB:329988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_q9Z3XPvDF8eZirf8EQCppq
        status: active
        display_name: 王子梅
        merged_into_person_id: null
    - claim:
        id: c_t92mEYm8wAviKqbcUvZX42
        subject_person_id: p_ngRno3M6aBRj8xR4YNhnTD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tG4mLKgocsBjuybbT6WdRt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HOBfYg-ENzCOsLCVNGvdm-
          claim_id: c_t92mEYm8wAviKqbcUvZX42
          source_id: s_z5HaZg6M5xqY7x-i1wqiL2
          stance: supports
          locator: CBDB：兄弟 王子蕙（205224）之父／母 王紹先
          quotation: null
          interpretation_note: 由兄弟关系推断：王會某 与 王子蕙 为同胞（CBDB 记「兄」），王子蕙 之父／母即 王會某 之父／母。
          source:
            id: s_z5HaZg6M5xqY7x-i1wqiL2
            source_type: api_record
            title: 中国历代人物传记资料库：王會某（CBDB 329995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329995&o=json
            external_identifier: CBDB:329995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tG4mLKgocsBjuybbT6WdRt
        status: active
        display_name: 王會某
        merged_into_person_id: null
    - claim:
        id: c_eDXyKIrYq17ZgbPpsf5OEW
        subject_person_id: p_ngRno3M6aBRj8xR4YNhnTD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xy3NggnDJ3XS1fvp5HtDyP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LUhVm1N69Rbbc_gJ6uqf1R
          claim_id: c_eDXyKIrYq17ZgbPpsf5OEW
          source_id: s_SBu3lXVsUc3kJw_bsWSpx5
          stance: supports
          locator: CBDB：兄弟 王子蕙（205224）之父／母 王紹先
          quotation: null
          interpretation_note: 由兄弟关系推断：王子清 与 王子蕙 为同胞（CBDB 记「弟」），王子蕙 之父／母即 王子清 之父／母。
          source:
            id: s_SBu3lXVsUc3kJw_bsWSpx5
            source_type: api_record
            title: 中国历代人物传记资料库：王子清（CBDB 329984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329984&o=json
            external_identifier: CBDB:329984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xy3NggnDJ3XS1fvp5HtDyP
        status: active
        display_name: 王子清
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王紹先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹先 | accepted |
| bio.summary | 王紹先，明人物。嘉靖四十四年進士，籍贯定遠。（中国历代人物传记资料库 CBDB 329980） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_mYaz7ZtA5wiQaCjCBZf5rq | 王子蕙 | accepted |
| children | p_4otBg1xjFfpjDCBKCwjG7N | 王會典 | accepted |
| children | p_8WVJEdZ51ffa2JFnSSwFyK | 王子某 | accepted |
| children | p_9Bm8jiJiKVgRdaCFCRVeqr | 王會篇 | accepted |
| children | p_ATUD83UALiA71wZ7nEBUi2 | 王會圖 | accepted |
| children | p_LKzjyV3bk4T9BGTAKx9XxS | 王子蘭 | accepted |
| children | p_R9ETm2GXhnXnSM5Tv4s8BB | 王子某 | accepted |
| children | p_WQ7Fk2JkN9CLXSW8EvM4tQ | 王子才 | accepted |
| children | p_XAuxCXpjiMrXtEUJvU2Rgm | 王子勤 | accepted |
| children | p_ZDhJrFTTNwPzjHRmEJcH8V | 王會通 | accepted |
| children | p_q9Z3XPvDF8eZirf8EQCppq | 王子梅 | accepted |
| children | p_tG4mLKgocsBjuybbT6WdRt | 王會某 | accepted |
| children | p_xy3NggnDJ3XS1fvp5HtDyP | 王子清 | accepted |

## 外部来源

- [中国历代人物传记资料库：王會典（CBDB 329994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329994&o=json)
- [中国历代人物传记资料库：王會某（CBDB 329995）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329995&o=json)
- [中国历代人物传记资料库：王會篇（CBDB 329993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329993&o=json)
- [中国历代人物传记资料库：王會通（CBDB 329996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329996&o=json)
- [中国历代人物传记资料库：王會圖（CBDB 329992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329992&o=json)
- [中国历代人物传记资料库：王紹先（CBDB 329980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329980&o=json)
- [中国历代人物传记资料库：王子才（CBDB 329990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329990&o=json)
- [中国历代人物传记资料库：王子蘭（CBDB 329985）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329985&o=json)
- [中国历代人物传记资料库：王子梅（CBDB 329988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329988&o=json)
- [中国历代人物传记资料库：王子某（CBDB 329987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329987&o=json)
- [中国历代人物传记资料库：王子某（CBDB 329991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329991&o=json)
- [中国历代人物传记资料库：王子勤（CBDB 329989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329989&o=json)
- [中国历代人物传记资料库：王子清（CBDB 329984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329984&o=json)
