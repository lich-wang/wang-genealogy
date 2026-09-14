---
schema: wang-person/v1
id: p_jp7Who27nqLM3Z2dWPqF3U
status: active
merged_into: null
display_name: 王銓
revision: 14
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9Gu33iBaVtXyUHccuiRP4H
        subject_person_id: p_jp7Who27nqLM3Z2dWPqF3U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rWSGJpvCHJGFFmvJBrTnLm
          claim_id: c_9Gu33iBaVtXyUHccuiRP4H
          source_id: s_HdtR9Y586aJ6gpfNHRKxPc
          stance: supports
          locator: CBDB:314222
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314222）
          source: &a1
            id: s_HdtR9Y586aJ6gpfNHRKxPc
            source_type: api_record
            title: 中国历代人物传记资料库：王銓（CBDB 314222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314222&o=json
            external_identifier: CBDB:314222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cwmHkZfStFPnxhUTMBRwNp
        subject_person_id: p_jp7Who27nqLM3Z2dWPqF3U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銓，明人物。嘉靖二十九年進士，籍贯金華，曾任提刑按察使司僉事。（中国历代人物传记资料库 CBDB 314222）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fDV-KC0-MNXdZW0EX_tusd
          claim_id: c_cwmHkZfStFPnxhUTMBRwNp
          source_id: s_HdtR9Y586aJ6gpfNHRKxPc
          stance: supports
          locator: CBDB:314222
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_WjuLA8-3X31ysCkjfTHGj7
        subject_person_id: p_jp7Who27nqLM3Z2dWPqF3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oPmElOUPUB6Wxll5TfQlkO
          claim_id: c_WjuLA8-3X31ysCkjfTHGj7
          source_id: s_HdtR9Y586aJ6gpfNHRKxPc
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百五十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        status: active
        display_name: 王汝述
        merged_into_person_id: null
    - claim:
        id: c_zxHScAXissU1WbSjp8u0x4
        subject_person_id: p_jp7Who27nqLM3Z2dWPqF3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1AXfev5jLoFbbnQugYk4b6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4ZnKN8yfB44dCa7CGIiN8u
          claim_id: c_zxHScAXissU1WbSjp8u0x4
          source_id: s_37ykKCyhH6OPx8tjS4VoPm
          stance: supports
          locator: CBDB：兄弟 王汝述（204086）之父／母 王銓
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝倫 与 王汝述 为同胞（CBDB 记「弟」），王汝述 之父／母即 王汝倫 之父／母。
          source:
            id: s_37ykKCyhH6OPx8tjS4VoPm
            source_type: api_record
            title: 中国历代人物传记资料库：王汝倫（CBDB 314232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314232&o=json
            external_identifier: CBDB:314232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1AXfev5jLoFbbnQugYk4b6
        status: active
        display_name: 王汝倫
        merged_into_person_id: null
    - claim:
        id: c_4go7qCBPGGpVk_mSqffGxf
        subject_person_id: p_jp7Who27nqLM3Z2dWPqF3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6nmzxaGP1qSmMy6MfMxEKa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X6JUwHOFRBw5Mz1WZo6fu4
          claim_id: c_4go7qCBPGGpVk_mSqffGxf
          source_id: s_DnmNMp6KPNhQmDq-Kt5vdC
          stance: supports
          locator: CBDB：兄弟 王汝述（204086）之父／母 王銓
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝繼 与 王汝述 为同胞（CBDB 记「弟」），王汝述 之父／母即 王汝繼 之父／母。
          source:
            id: s_DnmNMp6KPNhQmDq-Kt5vdC
            source_type: api_record
            title: 中国历代人物传记资料库：王汝繼（CBDB 314234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314234&o=json
            external_identifier: CBDB:314234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6nmzxaGP1qSmMy6MfMxEKa
        status: active
        display_name: 王汝繼
        merged_into_person_id: null
    - claim:
        id: c_19rgUVyKjAo68NeXpqP8EF
        subject_person_id: p_jp7Who27nqLM3Z2dWPqF3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AmBfkDBygmu2cLPSPTaU8S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AUi4qoYv9WkMSW3_-WneT4
          claim_id: c_19rgUVyKjAo68NeXpqP8EF
          source_id: s_iKe2aFDdHAvLR82bvFkhak
          stance: supports
          locator: CBDB：兄弟 王汝述（204086）之父／母 王銓
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝新 与 王汝述 为同胞（CBDB 记「弟」），王汝述 之父／母即 王汝新 之父／母。
          source:
            id: s_iKe2aFDdHAvLR82bvFkhak
            source_type: api_record
            title: 中国历代人物传记资料库：王汝新（CBDB 314237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314237&o=json
            external_identifier: CBDB:314237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AmBfkDBygmu2cLPSPTaU8S
        status: active
        display_name: 王汝新
        merged_into_person_id: null
    - claim:
        id: c_zxfxE7U5v3H9Sm2B3IEuA3
        subject_person_id: p_jp7Who27nqLM3Z2dWPqF3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BRk8GRJ9ALS1shYv5ub2na
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_McQGiIkth0AMjIAMW8pGj9
          claim_id: c_zxfxE7U5v3H9Sm2B3IEuA3
          source_id: s_5FnxBodn9_iXWOQsLMUZvz
          stance: supports
          locator: CBDB：兄弟 王汝述（204086）之父／母 王銓
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝光 与 王汝述 为同胞（CBDB 记「弟」），王汝述 之父／母即 王汝光 之父／母。
          source:
            id: s_5FnxBodn9_iXWOQsLMUZvz
            source_type: api_record
            title: 中国历代人物传记资料库：王汝光（CBDB 314230）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314230&o=json
            external_identifier: CBDB:314230
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BRk8GRJ9ALS1shYv5ub2na
        status: active
        display_name: 王汝光
        merged_into_person_id: null
    - claim:
        id: c_l_7TKgKeD-1IQbKfxtkKgg
        subject_person_id: p_jp7Who27nqLM3Z2dWPqF3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Er9fsNmsYSEDcW8NMxTeiW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b1zBilWcpgmrd5oLClqJD-
          claim_id: c_l_7TKgKeD-1IQbKfxtkKgg
          source_id: s_lCGf4klL1aHSOHA32Ob0OW
          stance: supports
          locator: CBDB：兄弟 王汝述（204086）之父／母 王銓
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝儀 与 王汝述 为同胞（CBDB 记「弟」），王汝述 之父／母即 王汝儀 之父／母。
          source:
            id: s_lCGf4klL1aHSOHA32Ob0OW
            source_type: api_record
            title: 中国历代人物传记资料库：王汝儀（CBDB 314235）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314235&o=json
            external_identifier: CBDB:314235
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Er9fsNmsYSEDcW8NMxTeiW
        status: active
        display_name: 王汝儀
        merged_into_person_id: null
    - claim:
        id: c_1FQXN4j--Wwt6zh5J2Vgjz
        subject_person_id: p_jp7Who27nqLM3Z2dWPqF3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V62fNQDx9yA3R1RJt6P8gC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z92zNJHGXQ5yfE46S5d_05
          claim_id: c_1FQXN4j--Wwt6zh5J2Vgjz
          source_id: s_UB1jiP1durdCGn9cxbkEi5
          stance: supports
          locator: CBDB：兄弟 王汝述（204086）之父／母 王銓
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝嘉 与 王汝述 为同胞（CBDB 记「弟」），王汝述 之父／母即 王汝嘉 之父／母。
          source:
            id: s_UB1jiP1durdCGn9cxbkEi5
            source_type: api_record
            title: 中国历代人物传记资料库：王汝嘉（CBDB 314227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314227&o=json
            external_identifier: CBDB:314227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V62fNQDx9yA3R1RJt6P8gC
        status: active
        display_name: 王汝嘉
        merged_into_person_id: null
    - claim:
        id: c_aD-BWwNCHKiAC76A5wlfbR
        subject_person_id: p_jp7Who27nqLM3Z2dWPqF3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dS2Wb96WKEJfumFDVDFNes
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_79mAQAvaYAfZd4yrKmf47h
          claim_id: c_aD-BWwNCHKiAC76A5wlfbR
          source_id: s_jZtNWSe_IPyLsz5dITyJoG
          stance: supports
          locator: CBDB：兄弟 王汝述（204086）之父／母 王銓
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝偉 与 王汝述 为同胞（CBDB 记「弟」），王汝述 之父／母即 王汝偉 之父／母。
          source:
            id: s_jZtNWSe_IPyLsz5dITyJoG
            source_type: api_record
            title: 中国历代人物传记资料库：王汝偉（CBDB 314233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314233&o=json
            external_identifier: CBDB:314233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dS2Wb96WKEJfumFDVDFNes
        status: active
        display_name: 王汝偉
        merged_into_person_id: null
    - claim:
        id: c_dkXPZZZk8SvUjsouWPScEe
        subject_person_id: p_jp7Who27nqLM3Z2dWPqF3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eNv5d7w4KD4ugJ5YeDzYxk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l8aAZtOmiVGLpqQLrEfv0C
          claim_id: c_dkXPZZZk8SvUjsouWPScEe
          source_id: s_vjLGOybTHnLaV0hohHsehT
          stance: supports
          locator: CBDB：兄弟 王汝述（204086）之父／母 王銓
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝耀 与 王汝述 为同胞（CBDB 记「弟」），王汝述 之父／母即 王汝耀 之父／母。
          source:
            id: s_vjLGOybTHnLaV0hohHsehT
            source_type: api_record
            title: 中国历代人物传记资料库：王汝耀（CBDB 314231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314231&o=json
            external_identifier: CBDB:314231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eNv5d7w4KD4ugJ5YeDzYxk
        status: active
        display_name: 王汝耀
        merged_into_person_id: null
    - claim:
        id: c_S2DLtDQq2sPJWXbqUgj7-q
        subject_person_id: p_jp7Who27nqLM3Z2dWPqF3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nk9HMkgY4xke8h5CW5tUKy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HYtCLm34mBbq-YSSK5mZ8f
          claim_id: c_S2DLtDQq2sPJWXbqUgj7-q
          source_id: s_yDV44TBYtjMKNkem_1djEK
          stance: supports
          locator: CBDB：兄弟 王汝述（204086）之父／母 王銓
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝倬 与 王汝述 为同胞（CBDB 记「弟」），王汝述 之父／母即 王汝倬 之父／母。
          source:
            id: s_yDV44TBYtjMKNkem_1djEK
            source_type: api_record
            title: 中国历代人物传记资料库：王汝倬（CBDB 314236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314236&o=json
            external_identifier: CBDB:314236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nk9HMkgY4xke8h5CW5tUKy
        status: active
        display_name: 王汝倬
        merged_into_person_id: null
    - claim:
        id: c_pFW6bg_UJu_jrblEM85E5N
        subject_person_id: p_jp7Who27nqLM3Z2dWPqF3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pXgJTHeMwK5XZyuVjyKWfY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PR1y2V7W7h9CDar6UfYwpz
          claim_id: c_pFW6bg_UJu_jrblEM85E5N
          source_id: s_x4NNm0cYb2HD7_HZIe9ldE
          stance: supports
          locator: CBDB：兄弟 王汝述（204086）之父／母 王銓
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝直 与 王汝述 为同胞（CBDB 记「弟」），王汝述 之父／母即 王汝直 之父／母。
          source:
            id: s_x4NNm0cYb2HD7_HZIe9ldE
            source_type: api_record
            title: 中国历代人物传记资料库：王汝直（CBDB 314238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314238&o=json
            external_identifier: CBDB:314238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pXgJTHeMwK5XZyuVjyKWfY
        status: active
        display_name: 王汝直
        merged_into_person_id: null
    - claim:
        id: c_SKqeZIv2ew5XaVK1C1fc-N
        subject_person_id: p_jp7Who27nqLM3Z2dWPqF3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ssWuezQYa3QEq5g4RHRJTs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gmiwrX0Ft1atHlyDkUL7ue
          claim_id: c_SKqeZIv2ew5XaVK1C1fc-N
          source_id: s_2ReZHvCfuuQGXm3UCEwbWl
          stance: supports
          locator: CBDB：兄弟 王汝述（204086）之父／母 王銓
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝舟 与 王汝述 为同胞（CBDB 记「弟」），王汝述 之父／母即 王汝舟 之父／母。
          source:
            id: s_2ReZHvCfuuQGXm3UCEwbWl
            source_type: api_record
            title: 中国历代人物传记资料库：王汝舟（CBDB 314228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314228&o=json
            external_identifier: CBDB:314228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ssWuezQYa3QEq5g4RHRJTs
        status: active
        display_name: 王汝舟
        merged_into_person_id: null
    - claim:
        id: c_-rOeVgRnaDhaFJZ9W6PqmG
        subject_person_id: p_jp7Who27nqLM3Z2dWPqF3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yUCWxdZ3S4LebXfQQb2QCQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_piNFStMCZVYNc5yfR1n-Ue
          claim_id: c_-rOeVgRnaDhaFJZ9W6PqmG
          source_id: s_2wZq1dQO4dGoRuAXFLqHru
          stance: supports
          locator: CBDB：兄弟 王汝述（204086）之父／母 王銓
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝謙 与 王汝述 为同胞（CBDB 记「弟」），王汝述 之父／母即 王汝謙 之父／母。
          source:
            id: s_2wZq1dQO4dGoRuAXFLqHru
            source_type: api_record
            title: 中国历代人物传记资料库：王汝謙（CBDB 314226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314226&o=json
            external_identifier: CBDB:314226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yUCWxdZ3S4LebXfQQb2QCQ
        status: active
        display_name: 王汝謙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王銓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銓 | accepted |
| bio.summary | 王銓，明人物。嘉靖二十九年進士，籍贯金華，曾任提刑按察使司僉事。（中国历代人物传记资料库 CBDB 314222） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_FJ5VCJ2dfQ9YvKZT3bmX4c | 王汝述 | accepted |
| children | p_1AXfev5jLoFbbnQugYk4b6 | 王汝倫 | accepted |
| children | p_6nmzxaGP1qSmMy6MfMxEKa | 王汝繼 | accepted |
| children | p_AmBfkDBygmu2cLPSPTaU8S | 王汝新 | accepted |
| children | p_BRk8GRJ9ALS1shYv5ub2na | 王汝光 | accepted |
| children | p_Er9fsNmsYSEDcW8NMxTeiW | 王汝儀 | accepted |
| children | p_V62fNQDx9yA3R1RJt6P8gC | 王汝嘉 | accepted |
| children | p_dS2Wb96WKEJfumFDVDFNes | 王汝偉 | accepted |
| children | p_eNv5d7w4KD4ugJ5YeDzYxk | 王汝耀 | accepted |
| children | p_nk9HMkgY4xke8h5CW5tUKy | 王汝倬 | accepted |
| children | p_pXgJTHeMwK5XZyuVjyKWfY | 王汝直 | accepted |
| children | p_ssWuezQYa3QEq5g4RHRJTs | 王汝舟 | accepted |
| children | p_yUCWxdZ3S4LebXfQQb2QCQ | 王汝謙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銓（CBDB 314222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314222&o=json)
- [中国历代人物传记资料库：王汝光（CBDB 314230）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314230&o=json)
- [中国历代人物传记资料库：王汝繼（CBDB 314234）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314234&o=json)
- [中国历代人物传记资料库：王汝嘉（CBDB 314227）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314227&o=json)
- [中国历代人物传记资料库：王汝倫（CBDB 314232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314232&o=json)
- [中国历代人物传记资料库：王汝謙（CBDB 314226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314226&o=json)
- [中国历代人物传记资料库：王汝偉（CBDB 314233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314233&o=json)
- [中国历代人物传记资料库：王汝新（CBDB 314237）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314237&o=json)
- [中国历代人物传记资料库：王汝耀（CBDB 314231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314231&o=json)
- [中国历代人物传记资料库：王汝儀（CBDB 314235）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314235&o=json)
- [中国历代人物传记资料库：王汝直（CBDB 314238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314238&o=json)
- [中国历代人物传记资料库：王汝舟（CBDB 314228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314228&o=json)
- [中国历代人物传记资料库：王汝倬（CBDB 314236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314236&o=json)
