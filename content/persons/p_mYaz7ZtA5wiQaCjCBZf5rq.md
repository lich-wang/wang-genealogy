---
schema: wang-person/v1
id: p_mYaz7ZtA5wiQaCjCBZf5rq
status: active
merged_into: null
display_name: 王子蕙
cbdb_id: 205224
revision: 16
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4xdUGF3E2EZ79Fv4fsX2E8
        subject_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子蕙（生于1529年），明人物。明清進士進士，籍贯定遠，入仕進士。（中国历代人物传记资料库 CBDB 205224）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_hxhWTks_-Y0UMItgdPTspy
          claim_id: c_4xdUGF3E2EZ79Fv4fsX2E8
          source_id: s_MZUvWCmLuFz6txFxYZ5Zzr
          stance: supports
          locator: CBDB:205224
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_MZUvWCmLuFz6txFxYZ5Zzr
            source_type: api_record
            title: 中国历代人物传记资料库：王子蕙（CBDB 205224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205224&o=json
            external_identifier: CBDB:205224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_VaYhd6FZtxeJqQmMPrKeb6
        subject_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1529年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1529-01-01
            latest: 1529-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y2Mtt9ZZHerijRdr7VxaGg
          claim_id: c_VaYhd6FZtxeJqQmMPrKeb6
          source_id: s_MZUvWCmLuFz6txFxYZ5Zzr
          stance: supports
          locator: CBDB:205224
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1529
          source:
            id: s_MZUvWCmLuFz6txFxYZ5Zzr
            source_type: api_record
            title: 中国历代人物传记资料库：王子蕙（CBDB 205224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205224&o=json
            external_identifier: CBDB:205224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VjQoReEMWkf7aJshkBsJKX
        subject_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子蕙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_So6r4mH2fAvBcgDAtPNe4P
          claim_id: c_VjQoReEMWkf7aJshkBsJKX
          source_id: s_MZUvWCmLuFz6txFxYZ5Zzr
          stance: supports
          locator: CBDB:205224
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1529
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_ngRno3M6aBRj8xR4YNhnTD
        status: active
        display_name: 王紹先
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_AOAbE-pqCUBYOgaKVURRhO
        subject_person_id: p_GyncCM4qXswHtDVRt1psRp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9l7oOCmNbDtpR9uti0LgS6
          claim_id: c_AOAbE-pqCUBYOgaKVURRhO
          source_id: s_zMJK9Hgo2VW5NwdTj55oMG
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第五十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zMJK9Hgo2VW5NwdTj55oMG
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 329978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329978&o=json
            external_identifier: CBDB:329978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.339Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GyncCM4qXswHtDVRt1psRp
        status: active
        display_name: 王侃
        merged_into_person_id: null
    - claim:
        id: c_ngWzpQPPpdbHJX-OGhpqRx
        subject_person_id: p_wjdnY8BzSPyC3Wya3QDsTC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WMG79KkS82YYve97tT50cr
          claim_id: c_ngWzpQPPpdbHJX-OGhpqRx
          source_id: s_mbbtQt8Kgwk5RNMCpEfR12
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第五十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mbbtQt8Kgwk5RNMCpEfR12
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 329979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329979&o=json
            external_identifier: CBDB:329979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.340Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wjdnY8BzSPyC3Wya3QDsTC
        status: active
        display_name: 王鏞
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_4PDTX3IyKCgVuyUu5SGjhJ
        subject_person_id: p_4otBg1xjFfpjDCBKCwjG7N
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aOMPqSTlLiklxkiU4kR9VG
          claim_id: c_4PDTX3IyKCgVuyUu5SGjhJ
          source_id: s_Fdo89E_XqbmQ7Jz8cyKMIm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205224 王子蕙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_Y6jIaUIH60bfhGKvVFCLFg
        subject_person_id: p_8WVJEdZ51ffa2JFnSSwFyK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fFQ3XQKn89NbgH4r1jAy-8
          claim_id: c_Y6jIaUIH60bfhGKvVFCLFg
          source_id: s_x5N8YpkqXY08RifVxyKLBQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205224 王子蕙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_6B6vF4KLoZinu8zsl5uL8n
        subject_person_id: p_9Bm8jiJiKVgRdaCFCRVeqr
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4w9uXELAH2Kkfy5vp1D3wZ
          claim_id: c_6B6vF4KLoZinu8zsl5uL8n
          source_id: s_JZH-05rzBFJ0yBdZkKKZra
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205224 王子蕙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_Hdkp-q9mpEX5qtnQZOjZfP
        subject_person_id: p_ATUD83UALiA71wZ7nEBUi2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xJGZYKs96W2wkAWX4V7gsA
          claim_id: c_Hdkp-q9mpEX5qtnQZOjZfP
          source_id: s_zBTl0jcgkZaTGhz35TncZj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205224 王子蕙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_KeQiq2ID-1mJskT_VYu1rR
        subject_person_id: p_LKzjyV3bk4T9BGTAKx9XxS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xan162FhtfznPPWXtiyYF_
          claim_id: c_KeQiq2ID-1mJskT_VYu1rR
          source_id: s_c3AZRbUfj9mg49KWpdecdo
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205224 王子蕙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_SXDtrx9mniZeosGzyFvCBi
        subject_person_id: p_R9ETm2GXhnXnSM5Tv4s8BB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kjlmXOUbnGrybvP5abwSLt
          claim_id: c_SXDtrx9mniZeosGzyFvCBi
          source_id: s__UZxzoEGqq0KgJ-Mf9g-YN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205224 王子蕙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_GvgaYtblmoQ7VSMyQlbCy_
        subject_person_id: p_WQ7Fk2JkN9CLXSW8EvM4tQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MJAAiph_CgOD_ooTluas3n
          claim_id: c_GvgaYtblmoQ7VSMyQlbCy_
          source_id: s_jlzBFs56LbI8NQRa1FGy_K
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205224 王子蕙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_i1ThWHgtVoOGn_hj2tNgOK
        subject_person_id: p_XAuxCXpjiMrXtEUJvU2Rgm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KoMIC9vxQwKMxIqhGlNojB
          claim_id: c_i1ThWHgtVoOGn_hj2tNgOK
          source_id: s_LPlWhI_YTacj3tZnBMDqEN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205224 王子蕙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_viFY2mtCDz5ZPW4HnS6xRk
        subject_person_id: p_ZDhJrFTTNwPzjHRmEJcH8V
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A2UmAIQ7EwJOeto3Z-6QCz
          claim_id: c_viFY2mtCDz5ZPW4HnS6xRk
          source_id: s_bT5Ld59N0zTTDi24L0i7fn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205224 王子蕙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_CsJoGaDbvXEcwEj3X4RPJS
        subject_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_q9Z3XPvDF8eZirf8EQCppq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZUaQUbSA-9TPT93CkFrqNl
          claim_id: c_CsJoGaDbvXEcwEj3X4RPJS
          source_id: s_Kb2mnbKtX37NL28GJwmEOt
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205224 王子蕙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_Q5wE7th1Pa5j5xjil31pvX
        subject_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tG4mLKgocsBjuybbT6WdRt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vkOaOnEx6t7caCsZYVQ5wB
          claim_id: c_Q5wE7th1Pa5j5xjil31pvX
          source_id: s_z5HaZg6M5xqY7x-i1wqiL2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205224 王子蕙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_rVRXXQghRpq_hQv34GG-sK
        subject_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xy3NggnDJ3XS1fvp5HtDyP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dgl73GzvlDbvBe8dOXn20C
          claim_id: c_rVRXXQghRpq_hQv34GG-sK
          source_id: s_SBu3lXVsUc3kJw_bsWSpx5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205224 王子蕙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王子蕙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子蕙（生于1529年），明人物。明清進士進士，籍贯定遠，入仕進士。（中国历代人物传记资料库 CBDB 205224） | accepted |
| birth.date | 1529年 | accepted |
| name.primary | 王子蕙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ngRno3M6aBRj8xR4YNhnTD | 王紹先 | accepted |
| ancestors | p_GyncCM4qXswHtDVRt1psRp | 王侃 | accepted |
| ancestors | p_wjdnY8BzSPyC3Wya3QDsTC | 王鏞 | accepted |
| other | p_4otBg1xjFfpjDCBKCwjG7N | 王會典 | accepted |
| other | p_8WVJEdZ51ffa2JFnSSwFyK | 王子某 | accepted |
| other | p_9Bm8jiJiKVgRdaCFCRVeqr | 王會篇 | accepted |
| other | p_ATUD83UALiA71wZ7nEBUi2 | 王會圖 | accepted |
| other | p_LKzjyV3bk4T9BGTAKx9XxS | 王子蘭 | accepted |
| other | p_R9ETm2GXhnXnSM5Tv4s8BB | 王子某 | accepted |
| other | p_WQ7Fk2JkN9CLXSW8EvM4tQ | 王子才 | accepted |
| other | p_XAuxCXpjiMrXtEUJvU2Rgm | 王子勤 | accepted |
| other | p_ZDhJrFTTNwPzjHRmEJcH8V | 王會通 | accepted |
| other | p_q9Z3XPvDF8eZirf8EQCppq | 王子梅 | accepted |
| other | p_tG4mLKgocsBjuybbT6WdRt | 王會某 | accepted |
| other | p_xy3NggnDJ3XS1fvp5HtDyP | 王子清 | accepted |

## 外部来源

- [中国历代人物传记资料库：王會典（CBDB 329994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329994&o=json)
- [中国历代人物传记资料库：王會某（CBDB 329995）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329995&o=json)
- [中国历代人物传记资料库：王會篇（CBDB 329993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329993&o=json)
- [中国历代人物传记资料库：王會通（CBDB 329996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329996&o=json)
- [中国历代人物传记资料库：王會圖（CBDB 329992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329992&o=json)
- [中国历代人物传记资料库：王侃（CBDB 329978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329978&o=json)
- [中国历代人物传记资料库：王紹先（CBDB 329980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329980&o=json)
- [中国历代人物传记资料库：王鏞（CBDB 329979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329979&o=json)
- [中国历代人物传记资料库：王子才（CBDB 329990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329990&o=json)
- [中国历代人物传记资料库：王子蕙（CBDB 205224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205224&o=json)
- [中国历代人物传记资料库：王子蘭（CBDB 329985）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329985&o=json)
- [中国历代人物传记资料库：王子梅（CBDB 329988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329988&o=json)
- [中国历代人物传记资料库：王子某（CBDB 329987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329987&o=json)
- [中国历代人物传记资料库：王子某（CBDB 329991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329991&o=json)
- [中国历代人物传记资料库：王子勤（CBDB 329989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329989&o=json)
- [中国历代人物传记资料库：王子清（CBDB 329984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329984&o=json)
