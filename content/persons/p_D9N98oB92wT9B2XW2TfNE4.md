---
schema: wang-person/v1
id: p_D9N98oB92wT9B2XW2TfNE4
status: active
merged_into: null
display_name: 王良策
cbdb_id: 328155
revision: 20
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oNAzHYG9fVz4W4Z5SYpjAA
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良策，明人物。嘉靖四十一年進士，籍贯夷陵州。（中国历代人物传记资料库 CBDB 328155）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ANusYZpJy2J2scRRLPq4S0
          claim_id: c_oNAzHYG9fVz4W4Z5SYpjAA
          source_id: s_1SkpxRiqFu3c6zkjxMZfv3
          stance: supports
          locator: CBDB:328155
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1SkpxRiqFu3c6zkjxMZfv3
            source_type: api_record
            title: 中国历代人物传记资料库：王良策（CBDB 328155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328155&o=json
            external_identifier: CBDB:328155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PKVCWpTub2Mu4oQbDkXAgc
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良策
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jjceifsC17Hr5Kt8YoiBkw
          claim_id: c_PKVCWpTub2Mu4oQbDkXAgc
          source_id: s_1SkpxRiqFu3c6zkjxMZfv3
          stance: supports
          locator: CBDB:328155
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3CiTeJ3Vbu0_uP89Xq3w5I
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2f2eeKcOTCn4c-nu-QD76u
          claim_id: c_3CiTeJ3Vbu0_uP89Xq3w5I
          source_id: s_1SkpxRiqFu3c6zkjxMZfv3
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第九十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1SkpxRiqFu3c6zkjxMZfv3
            source_type: api_record
            title: 中国历代人物传记资料库：王良策（CBDB 328155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328155&o=json
            external_identifier: CBDB:328155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_oXNXhcmP3pgs4EeZNT7tYq
        status: active
        display_name: 王篆
        merged_into_person_id: null
    - claim:
        id: c_o8BqOXeIeFCv6TlLL0X86h
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2KcUZKCUdK4RPJmFdrf3y5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_akkbdEOJbMpsuoH8IzdARp
          claim_id: c_o8BqOXeIeFCv6TlLL0X86h
          source_id: s_imzOjNZ8rDMa-p6hM1qXvi
          stance: supports
          locator: CBDB：兄弟 王篆（205090）之父／母 王良策
          quotation: null
          interpretation_note: 由兄弟关系推断：王笈 与 王篆 为同胞（CBDB 记「兄」），王篆 之父／母即 王笈 之父／母。
          source:
            id: s_imzOjNZ8rDMa-p6hM1qXvi
            source_type: api_record
            title: 中国历代人物传记资料库：王笈（CBDB 328168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328168&o=json
            external_identifier: CBDB:328168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2KcUZKCUdK4RPJmFdrf3y5
        status: active
        display_name: 王笈
        merged_into_person_id: null
    - claim:
        id: c_bcvfcPHlanjCcfBkBocBdv
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2WktwwnTU4FENMPnQKtpiU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DJqSOWfPLiuzCbK79gwp1r
          claim_id: c_bcvfcPHlanjCcfBkBocBdv
          source_id: s_ejCjQ78tmsIZqmMLQ_EYQl
          stance: supports
          locator: CBDB：兄弟 王篆（205090）之父／母 王良策
          quotation: null
          interpretation_note: 由兄弟关系推断：王筥 与 王篆 为同胞（CBDB 记「兄」），王篆 之父／母即 王筥 之父／母。
          source:
            id: s_ejCjQ78tmsIZqmMLQ_EYQl
            source_type: api_record
            title: 中国历代人物传记资料库：王筥（CBDB 328169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328169&o=json
            external_identifier: CBDB:328169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2WktwwnTU4FENMPnQKtpiU
        status: active
        display_name: 王筥
        merged_into_person_id: null
    - claim:
        id: c_0N-9cVP8NBKA1j4AHwsOJQ
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3HHmqJEpLXSB6PpgNSryHi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3mu-niOc4p6saX4o6Op9BQ
          claim_id: c_0N-9cVP8NBKA1j4AHwsOJQ
          source_id: s_RXhe8H0napwnm96OLdqGh9
          stance: supports
          locator: CBDB：兄弟 王篆（205090）之父／母 王良策
          quotation: null
          interpretation_note: 由兄弟关系推断：王筵 与 王篆 为同胞（CBDB 记「兄」），王篆 之父／母即 王筵 之父／母。
          source:
            id: s_RXhe8H0napwnm96OLdqGh9
            source_type: api_record
            title: 中国历代人物传记资料库：王筵（CBDB 328171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328171&o=json
            external_identifier: CBDB:328171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3HHmqJEpLXSB6PpgNSryHi
        status: active
        display_name: 王筵
        merged_into_person_id: null
    - claim:
        id: c_SuIySNzik3o0JL_kvxOfdB
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5iJjdkhYivD15rGhLapXLc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sx2ju6MnuH_ASXsIkt1nYV
          claim_id: c_SuIySNzik3o0JL_kvxOfdB
          source_id: s_BNiFUaQnsTzlFLaoJxOSh_
          stance: supports
          locator: CBDB：兄弟 王篆（205090）之父／母 王良策
          quotation: null
          interpretation_note: 由兄弟关系推断：王笙 与 王篆 为同胞（CBDB 记「弟」），王篆 之父／母即 王笙 之父／母。
          source:
            id: s_BNiFUaQnsTzlFLaoJxOSh_
            source_type: api_record
            title: 中国历代人物传记资料库：王笙（CBDB 328161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328161&o=json
            external_identifier: CBDB:328161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5iJjdkhYivD15rGhLapXLc
        status: active
        display_name: 王笙
        merged_into_person_id: null
    - claim:
        id: c_x5lLYYcGiyBvBLtnFLuUF2
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7PrnkQ1vCQ85W1WNeGTe3T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z4geKRbCOG1W1M3Sq8NQwa
          claim_id: c_x5lLYYcGiyBvBLtnFLuUF2
          source_id: s_aeb3sQHq8NANJh0n9cWPny
          stance: supports
          locator: CBDB：兄弟 王篆（205090）之父／母 王良策
          quotation: null
          interpretation_note: 由兄弟关系推断：王籌 与 王篆 为同胞（CBDB 记「弟」），王篆 之父／母即 王籌 之父／母。
          source:
            id: s_aeb3sQHq8NANJh0n9cWPny
            source_type: api_record
            title: 中国历代人物传记资料库：王籌（CBDB 328160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328160&o=json
            external_identifier: CBDB:328160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7PrnkQ1vCQ85W1WNeGTe3T
        status: active
        display_name: 王籌
        merged_into_person_id: null
    - claim:
        id: c_BpzGnNzgRrXTEliMdr9oXS
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CD7Ej34g8gyM4KRWj46ezZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O2A6E1eic78nIXWUxVmIoa
          claim_id: c_BpzGnNzgRrXTEliMdr9oXS
          source_id: s_hCUbASrLGSX-f8QILn_-H9
          stance: supports
          locator: CBDB：兄弟 王篆（205090）之父／母 王良策
          quotation: null
          interpretation_note: 由兄弟关系推断：王簡 与 王篆 为同胞（CBDB 记「弟」），王篆 之父／母即 王簡 之父／母。
          source:
            id: s_hCUbASrLGSX-f8QILn_-H9
            source_type: api_record
            title: 中国历代人物传记资料库：王簡（CBDB 328165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328165&o=json
            external_identifier: CBDB:328165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CD7Ej34g8gyM4KRWj46ezZ
        status: active
        display_name: 王簡
        merged_into_person_id: null
    - claim:
        id: c_4bRAfY6i2qpz6Osfp4vIC7
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HxVPhw9dL6ewA5NrNhk92M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zO5Q3YVtiH06T5x-we6Kiv
          claim_id: c_4bRAfY6i2qpz6Osfp4vIC7
          source_id: s_n3VQ-IhbrENufASj_oFC8q
          stance: supports
          locator: CBDB：兄弟 王篆（205090）之父／母 王良策
          quotation: null
          interpretation_note: 由兄弟关系推断：王簪 与 王篆 为同胞（CBDB 记「兄」），王篆 之父／母即 王簪 之父／母。
          source:
            id: s_n3VQ-IhbrENufASj_oFC8q
            source_type: api_record
            title: 中国历代人物传记资料库：王簪（CBDB 328173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328173&o=json
            external_identifier: CBDB:328173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HxVPhw9dL6ewA5NrNhk92M
        status: active
        display_name: 王簪
        merged_into_person_id: null
    - claim:
        id: c_8pL3Nx3KS9D-IZQPHhOXoa
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KdcwAzhHL5tGaabPuXFMG9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qDqfW08jfTQIrEGw-lyLMm
          claim_id: c_8pL3Nx3KS9D-IZQPHhOXoa
          source_id: s_dBAFvraShmyZP5bKnFjqZ7
          stance: supports
          locator: CBDB：兄弟 王篆（205090）之父／母 王良策
          quotation: null
          interpretation_note: 由兄弟关系推断：王笏 与 王篆 为同胞（CBDB 记「弟」），王篆 之父／母即 王笏 之父／母。
          source:
            id: s_dBAFvraShmyZP5bKnFjqZ7
            source_type: api_record
            title: 中国历代人物传记资料库：王笏（CBDB 328167）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328167&o=json
            external_identifier: CBDB:328167
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KdcwAzhHL5tGaabPuXFMG9
        status: active
        display_name: 王笏
        merged_into_person_id: null
    - claim:
        id: c_SpCcgFA6QGsihkdrU4j8h7
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NXQP9MAoFTd4AtvGj4u9mE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s2pQ_QnVUJfuY5kWlM9pD0
          claim_id: c_SpCcgFA6QGsihkdrU4j8h7
          source_id: s_W2cn5-aVpXAWhYsqdD-RjB
          stance: supports
          locator: CBDB：兄弟 王篆（205090）之父／母 王良策
          quotation: null
          interpretation_note: 由兄弟关系推断：王竹 与 王篆 为同胞（CBDB 记「兄」），王篆 之父／母即 王竹 之父／母。
          source:
            id: s_W2cn5-aVpXAWhYsqdD-RjB
            source_type: api_record
            title: 中国历代人物传记资料库：王竹（CBDB 328174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328174&o=json
            external_identifier: CBDB:328174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NXQP9MAoFTd4AtvGj4u9mE
        status: active
        display_name: 王竹
        merged_into_person_id: null
    - claim:
        id: c_8CfKxY3x4fgL8Chr1KsBrX
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PzRePc5EJoq1KbEJRhjzun
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RMEXL9Ua8k8PaGTdbHNFmd
          claim_id: c_8CfKxY3x4fgL8Chr1KsBrX
          source_id: s_kZM-E3OQxwvBFpcAA_9e5z
          stance: supports
          locator: CBDB：兄弟 王篆（205090）之父／母 王良策
          quotation: null
          interpretation_note: 由兄弟关系推断：王箎 与 王篆 为同胞（CBDB 记「弟」），王篆 之父／母即 王箎 之父／母。
          source:
            id: s_kZM-E3OQxwvBFpcAA_9e5z
            source_type: api_record
            title: 中国历代人物传记资料库：王箎（CBDB 328163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328163&o=json
            external_identifier: CBDB:328163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PzRePc5EJoq1KbEJRhjzun
        status: active
        display_name: 王箎
        merged_into_person_id: null
    - claim:
        id: c_7gGfKNrt7b1L56wROBVbVF
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T3eCYqvXkHmvxr7mbNPNzJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XKz0lelCj5oggfq0tJNU1q
          claim_id: c_7gGfKNrt7b1L56wROBVbVF
          source_id: s_Zbyb6l2dOMrDxft3OXSP0p
          stance: supports
          locator: CBDB：兄弟 王篆（205090）之父／母 王良策
          quotation: null
          interpretation_note: 由兄弟关系推断：王笥 与 王篆 为同胞（CBDB 记「兄」），王篆 之父／母即 王笥 之父／母。
          source:
            id: s_Zbyb6l2dOMrDxft3OXSP0p
            source_type: api_record
            title: 中国历代人物传记资料库：王笥（CBDB 328179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328179&o=json
            external_identifier: CBDB:328179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_T3eCYqvXkHmvxr7mbNPNzJ
        status: active
        display_name: 王笥
        merged_into_person_id: null
    - claim:
        id: c_y_MziKLl8jWXpxbvKZCuQF
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aHPF2nHn3ZpvQSzEyKNrmv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wJpsNComGjFKAAOEIb_bbI
          claim_id: c_y_MziKLl8jWXpxbvKZCuQF
          source_id: s_-VIsHXN7AJCt3sCCcrH60U
          stance: supports
          locator: CBDB：兄弟 王篆（205090）之父／母 王良策
          quotation: null
          interpretation_note: 由兄弟关系推断：王籛 与 王篆 为同胞（CBDB 记「兄」），王篆 之父／母即 王籛 之父／母。
          source:
            id: s_-VIsHXN7AJCt3sCCcrH60U
            source_type: api_record
            title: 中国历代人物传记资料库：王籛（CBDB 328177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328177&o=json
            external_identifier: CBDB:328177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aHPF2nHn3ZpvQSzEyKNrmv
        status: active
        display_name: 王籛
        merged_into_person_id: null
    - claim:
        id: c_QrXpoMsJjdRi64lEk5wZmd
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bXZbmrS1UaMK1UjrZBShnE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nh-7ZB2x_jISAtILG8KGNw
          claim_id: c_QrXpoMsJjdRi64lEk5wZmd
          source_id: s_YlQ-EkNrIPSLs7i0RpXUdJ
          stance: supports
          locator: CBDB：兄弟 王篆（205090）之父／母 王良策
          quotation: null
          interpretation_note: 由兄弟关系推断：王答 与 王篆 为同胞（CBDB 记「兄」），王篆 之父／母即 王答 之父／母。
          source:
            id: s_YlQ-EkNrIPSLs7i0RpXUdJ
            source_type: api_record
            title: 中国历代人物传记资料库：王答（CBDB 328170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328170&o=json
            external_identifier: CBDB:328170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bXZbmrS1UaMK1UjrZBShnE
        status: active
        display_name: 王答
        merged_into_person_id: null
    - claim:
        id: c_hO_bfuQ7kI9rIZk7Va1yi7
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ooSt6tTvwspA6VdUfqmTRj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FBrgYz1GFLILqbWPNmCoaT
          claim_id: c_hO_bfuQ7kI9rIZk7Va1yi7
          source_id: s_hedxKt8BI2_jTeg_hI-b3h
          stance: supports
          locator: CBDB：兄弟 王篆（205090）之父／母 王良策
          quotation: null
          interpretation_note: 由兄弟关系推断：王籥 与 王篆 为同胞（CBDB 记「弟」），王篆 之父／母即 王籥 之父／母。
          source:
            id: s_hedxKt8BI2_jTeg_hI-b3h
            source_type: api_record
            title: 中国历代人物传记资料库：王籥（CBDB 328159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328159&o=json
            external_identifier: CBDB:328159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ooSt6tTvwspA6VdUfqmTRj
        status: active
        display_name: 王籥
        merged_into_person_id: null
    - claim:
        id: c_vY545A-s7EmPo7JoHsQo03
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tM6cJhm73R8fKS4eb5qBHW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ytSitfee4_dPJGvEbTg2qR
          claim_id: c_vY545A-s7EmPo7JoHsQo03
          source_id: s_1CoQ_LZDOFmKZU7Y2_JHHi
          stance: supports
          locator: CBDB：兄弟 王篆（205090）之父／母 王良策
          quotation: null
          interpretation_note: 由兄弟关系推断：王箋 与 王篆 为同胞（CBDB 记「兄」），王篆 之父／母即 王箋 之父／母。
          source:
            id: s_1CoQ_LZDOFmKZU7Y2_JHHi
            source_type: api_record
            title: 中国历代人物传记资料库：王箋（CBDB 328172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328172&o=json
            external_identifier: CBDB:328172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tM6cJhm73R8fKS4eb5qBHW
        status: active
        display_name: 王箋
        merged_into_person_id: null
    - claim:
        id: c_dTzphT0Y9_avvZAcfof_E6
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y3rQXS8GdBKYUREVoYrfCs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__Ea9bAPp8T_Bpo6a_4I-7q
          claim_id: c_dTzphT0Y9_avvZAcfof_E6
          source_id: s_GEnSRCMMxC6Sz8sN31q0sk
          stance: supports
          locator: CBDB：兄弟 王篆（205090）之父／母 王良策
          quotation: null
          interpretation_note: 由兄弟关系推断：王籣 与 王篆 为同胞（CBDB 记「兄」），王篆 之父／母即 王籣 之父／母。
          source:
            id: s_GEnSRCMMxC6Sz8sN31q0sk
            source_type: api_record
            title: 中国历代人物传记资料库：王籣（CBDB 328178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328178&o=json
            external_identifier: CBDB:328178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y3rQXS8GdBKYUREVoYrfCs
        status: active
        display_name: 王籣
        merged_into_person_id: null
    - claim:
        id: c_xZyeCW17jrteTlXGs-sdfX
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zEuXgNPzNyhH1Dt4YEDNHE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C1mu9dHAaHah5KL7ir8Qh8
          claim_id: c_xZyeCW17jrteTlXGs-sdfX
          source_id: s_5rKuPh6rTEzI-L430BUV9J
          stance: supports
          locator: CBDB：兄弟 王篆（205090）之父／母 王良策
          quotation: null
          interpretation_note: 由兄弟关系推断：王符 与 王篆 为同胞（CBDB 记「弟」），王篆 之父／母即 王符 之父／母。
          source:
            id: s_5rKuPh6rTEzI-L430BUV9J
            source_type: api_record
            title: 中国历代人物传记资料库：王符（CBDB 328162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328162&o=json
            external_identifier: CBDB:328162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zEuXgNPzNyhH1Dt4YEDNHE
        status: active
        display_name: 王符
        merged_into_person_id: null
    - claim:
        id: c_7ZkClauWpGGL45itFCKXrF
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zu98TRr6KJSR5KkKHM97Kg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_woy6jtDMR7KoyqCXHQ2epy
          claim_id: c_7ZkClauWpGGL45itFCKXrF
          source_id: s_Qqzwcd1lSi6ojKbGmPwRz8
          stance: supports
          locator: CBDB：兄弟 王篆（205090）之父／母 王良策
          quotation: null
          interpretation_note: 由兄弟关系推断：王簠 与 王篆 为同胞（CBDB 记「弟」），王篆 之父／母即 王簠 之父／母。
          source:
            id: s_Qqzwcd1lSi6ojKbGmPwRz8
            source_type: api_record
            title: 中国历代人物传记资料库：王簠（CBDB 328166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328166&o=json
            external_identifier: CBDB:328166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zu98TRr6KJSR5KkKHM97Kg
        status: active
        display_name: 王簠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王良策

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王良策，明人物。嘉靖四十一年進士，籍贯夷陵州。（中国历代人物传记资料库 CBDB 328155） | accepted |
| name.primary | 王良策 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_oXNXhcmP3pgs4EeZNT7tYq | 王篆 | accepted |
| children | p_2KcUZKCUdK4RPJmFdrf3y5 | 王笈 | accepted |
| children | p_2WktwwnTU4FENMPnQKtpiU | 王筥 | accepted |
| children | p_3HHmqJEpLXSB6PpgNSryHi | 王筵 | accepted |
| children | p_5iJjdkhYivD15rGhLapXLc | 王笙 | accepted |
| children | p_7PrnkQ1vCQ85W1WNeGTe3T | 王籌 | accepted |
| children | p_CD7Ej34g8gyM4KRWj46ezZ | 王簡 | accepted |
| children | p_HxVPhw9dL6ewA5NrNhk92M | 王簪 | accepted |
| children | p_KdcwAzhHL5tGaabPuXFMG9 | 王笏 | accepted |
| children | p_NXQP9MAoFTd4AtvGj4u9mE | 王竹 | accepted |
| children | p_PzRePc5EJoq1KbEJRhjzun | 王箎 | accepted |
| children | p_T3eCYqvXkHmvxr7mbNPNzJ | 王笥 | accepted |
| children | p_aHPF2nHn3ZpvQSzEyKNrmv | 王籛 | accepted |
| children | p_bXZbmrS1UaMK1UjrZBShnE | 王答 | accepted |
| children | p_ooSt6tTvwspA6VdUfqmTRj | 王籥 | accepted |
| children | p_tM6cJhm73R8fKS4eb5qBHW | 王箋 | accepted |
| children | p_y3rQXS8GdBKYUREVoYrfCs | 王籣 | accepted |
| children | p_zEuXgNPzNyhH1Dt4YEDNHE | 王符 | accepted |
| children | p_zu98TRr6KJSR5KkKHM97Kg | 王簠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王箎（CBDB 328163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328163&o=json)
- [中国历代人物传记资料库：王籌（CBDB 328160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328160&o=json)
- [中国历代人物传记资料库：王答（CBDB 328170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328170&o=json)
- [中国历代人物传记资料库：王符（CBDB 328162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328162&o=json)
- [中国历代人物传记资料库：王簠（CBDB 328166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328166&o=json)
- [中国历代人物传记资料库：王笏（CBDB 328167）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328167&o=json)
- [中国历代人物传记资料库：王笈（CBDB 328168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328168&o=json)
- [中国历代人物传记资料库：王箋（CBDB 328172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328172&o=json)
- [中国历代人物传记资料库：王簡（CBDB 328165）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328165&o=json)
- [中国历代人物传记资料库：王籛（CBDB 328177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328177&o=json)
- [中国历代人物传记资料库：王筥（CBDB 328169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328169&o=json)
- [中国历代人物传记资料库：王籣（CBDB 328178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328178&o=json)
- [中国历代人物传记资料库：王良策（CBDB 328155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328155&o=json)
- [中国历代人物传记资料库：王笙（CBDB 328161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328161&o=json)
- [中国历代人物传记资料库：王笥（CBDB 328179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328179&o=json)
- [中国历代人物传记资料库：王筵（CBDB 328171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328171&o=json)
- [中国历代人物传记资料库：王籥（CBDB 328159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328159&o=json)
- [中国历代人物传记资料库：王簪（CBDB 328173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328173&o=json)
- [中国历代人物传记资料库：王竹（CBDB 328174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328174&o=json)
