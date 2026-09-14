---
schema: wang-person/v1
id: p_FqMa4M2DAduvq9gtDKyST2
status: active
merged_into: null
display_name: 王釗
revision: 16
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5EHDhuNERPhBneD8QjB1mQ
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TT8ZMSqCSkGa9rH8JMeqrJ
          claim_id: c_5EHDhuNERPhBneD8QjB1mQ
          source_id: s_jgS2wM9ChQCSKTbp1QvjnE
          stance: supports
          locator: CBDB:295379
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295379）
          source: &a1
            id: s_jgS2wM9ChQCSKTbp1QvjnE
            source_type: api_record
            title: 中国历代人物传记资料库：王釗（CBDB 295379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295379&o=json
            external_identifier: CBDB:295379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.490Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZAQy4BKv4TcoruY6CAMDaa
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釗，明人物。嘉靖十四年進士，籍贯任邱。（中国历代人物传记资料库 CBDB 295379）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bbGWnxO1kmc2ngdIfAs8Mr
          claim_id: c_ZAQy4BKv4TcoruY6CAMDaa
          source_id: s_jgS2wM9ChQCSKTbp1QvjnE
          stance: supports
          locator: CBDB:295379
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_5PrwlHKYhV1mFA-aDI31WI
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2BUKVfjLttuBq79dFrNbRz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_576BAbjIh_DBMcs88UNJdp
          claim_id: c_5PrwlHKYhV1mFA-aDI31WI
          source_id: s_rSpqfo8s5BJMrtNFtFPgJQ
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rSpqfo8s5BJMrtNFtFPgJQ
            source_type: api_record
            title: 中国历代人物传记资料库：王崇（CBDB 202833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202833&o=json
            external_identifier: CBDB:202833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2BUKVfjLttuBq79dFrNbRz
        status: active
        display_name: 王崇
        merged_into_person_id: null
    - claim:
        id: c_ws-B6UzCTabotiBFrTq5Qk
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Ein837W8JAAsgzKqEZfds
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kj3mgaTZe9hu0VEGIEFrGB
          claim_id: c_ws-B6UzCTabotiBFrTq5Qk
          source_id: s_eX8Aioimh1ge2ApHfFJt1j
          stance: supports
          locator: CBDB：兄弟 王崇（202833）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王宮 与 王崇 为同胞（CBDB 记「兄」），王崇 之父／母即 王宮 之父／母。
          source:
            id: s_eX8Aioimh1ge2ApHfFJt1j
            source_type: api_record
            title: 中国历代人物传记资料库：王宮（CBDB 295398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295398&o=json
            external_identifier: CBDB:295398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2Ein837W8JAAsgzKqEZfds
        status: active
        display_name: 王宮
        merged_into_person_id: null
    - claim:
        id: c_CFmngLW1mxpvUj7KvWnTeA
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6xtQbRuBzA1uP67YjPrUyD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dbadfM722Jaki10hlloSES
          claim_id: c_CFmngLW1mxpvUj7KvWnTeA
          source_id: s_vDT1dAIEmmB_T3nV9p1Kj_
          stance: supports
          locator: CBDB：兄弟 王崇（202833）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王琦 与 王崇 为同胞（CBDB 记「弟」），王崇 之父／母即 王琦 之父／母。
          source:
            id: s_vDT1dAIEmmB_T3nV9p1Kj_
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 295390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295390&o=json
            external_identifier: CBDB:295390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6xtQbRuBzA1uP67YjPrUyD
        status: active
        display_name: 王琦
        merged_into_person_id: null
    - claim:
        id: c_lXJNiXGclCijEaspUsGsgq
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_89NdiNnYLVbveTmjL24u63
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oMKX99zFLNpk0wAvQDn3uE
          claim_id: c_lXJNiXGclCijEaspUsGsgq
          source_id: s_pCOGS-7iAtmWrAcIM5-WUQ
          stance: supports
          locator: CBDB：兄弟 王崇（202833）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王圍 与 王崇 为同胞（CBDB 记「兄」），王崇 之父／母即 王圍 之父／母。
          source:
            id: s_pCOGS-7iAtmWrAcIM5-WUQ
            source_type: api_record
            title: 中国历代人物传记资料库：王圍（CBDB 295395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295395&o=json
            external_identifier: CBDB:295395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_89NdiNnYLVbveTmjL24u63
        status: active
        display_name: 王圍
        merged_into_person_id: null
    - claim:
        id: c_21GbhC9FnkHdvno4_iOfxK
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9XvnKgD4BETFUuaznLpSPq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NYQ7J8eR50bAH3RkrAe9CE
          claim_id: c_21GbhC9FnkHdvno4_iOfxK
          source_id: s_CEU3P-0WUNB32in7oEwg5W
          stance: supports
          locator: CBDB：兄弟 王崇（202833）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王爵 与 王崇 为同胞（CBDB 记「弟」），王崇 之父／母即 王爵 之父／母。
          source:
            id: s_CEU3P-0WUNB32in7oEwg5W
            source_type: api_record
            title: 中国历代人物传记资料库：王爵（CBDB 295388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295388&o=json
            external_identifier: CBDB:295388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9XvnKgD4BETFUuaznLpSPq
        status: active
        display_name: 王爵
        merged_into_person_id: null
    - claim:
        id: c_Dqb2WMVxkEds8xnHgI4Sb1
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C8puYi9NgpgQpx43FYsihR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rhQ1118quW0YyJqUNFv17D
          claim_id: c_Dqb2WMVxkEds8xnHgI4Sb1
          source_id: s_JlPS4Na6drcMYWI13Y8xEX
          stance: supports
          locator: CBDB：兄弟 王崇（202833）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王官 与 王崇 为同胞（CBDB 记「弟」），王崇 之父／母即 王官 之父／母。
          source:
            id: s_JlPS4Na6drcMYWI13Y8xEX
            source_type: api_record
            title: 中国历代人物传记资料库：王官（CBDB 295394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295394&o=json
            external_identifier: CBDB:295394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C8puYi9NgpgQpx43FYsihR
        status: active
        display_name: 王官
        merged_into_person_id: null
    - claim:
        id: c_yXji8TMAoBgNZtpy2yYjW3
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FsR5Tt19tFVotojMRHp2N3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GOqR_IxEDwphgeQBv-66YM
          claim_id: c_yXji8TMAoBgNZtpy2yYjW3
          source_id: s_LvPbDvJ2Ue1jgxpbj9QlqT
          stance: supports
          locator: CBDB：兄弟 王崇（202833）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王慶 与 王崇 为同胞（CBDB 记「弟」），王崇 之父／母即 王慶 之父／母。
          source:
            id: s_LvPbDvJ2Ue1jgxpbj9QlqT
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 295393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295393&o=json
            external_identifier: CBDB:295393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FsR5Tt19tFVotojMRHp2N3
        status: active
        display_name: 王慶
        merged_into_person_id: null
    - claim:
        id: c_-cFwqOaFqlUtv2tUG3Ug-f
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GgDbyUiRy94GrHq1xQFBkg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y64k4BnODDs7N7w7oOSckn
          claim_id: c_-cFwqOaFqlUtv2tUG3Ug-f
          source_id: s_pw9EtsaQ1w2LbPaGaYOugg
          stance: supports
          locator: CBDB：兄弟 王崇（202833）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王璽 与 王崇 为同胞（CBDB 记「弟」），王崇 之父／母即 王璽 之父／母。
          source:
            id: s_pw9EtsaQ1w2LbPaGaYOugg
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 295386）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295386&o=json
            external_identifier: CBDB:295386
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GgDbyUiRy94GrHq1xQFBkg
        status: active
        display_name: 王璽
        merged_into_person_id: null
    - claim:
        id: c_bhl_iv8n9EOFApTrvBOFGv
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YQWY349n8N86T9edBNzktP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dOeFXfwMl2wQvJLSNYM1ss
          claim_id: c_bhl_iv8n9EOFApTrvBOFGv
          source_id: s_PowXKFYEpg9U8fzHMqIBlL
          stance: supports
          locator: CBDB：兄弟 王崇（202833）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王嶽 与 王崇 为同胞（CBDB 记「兄」），王崇 之父／母即 王嶽 之父／母。
          source:
            id: s_PowXKFYEpg9U8fzHMqIBlL
            source_type: api_record
            title: 中国历代人物传记资料库：王嶽（CBDB 295397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295397&o=json
            external_identifier: CBDB:295397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YQWY349n8N86T9edBNzktP
        status: active
        display_name: 王嶽
        merged_into_person_id: null
    - claim:
        id: c_pzQJOlihOz7rwGIieElthr
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hHDCw1tMaaR2qJj4cJFS8R
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NejJ27RwRIqGXnGqLeEr7c
          claim_id: c_pzQJOlihOz7rwGIieElthr
          source_id: s_VzlQsroYj1CqIJCDnbSPGt
          stance: supports
          locator: CBDB：兄弟 王崇（202833）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王燦 与 王崇 为同胞（CBDB 记「弟」），王崇 之父／母即 王燦 之父／母。
          source:
            id: s_VzlQsroYj1CqIJCDnbSPGt
            source_type: api_record
            title: 中国历代人物传记资料库：王燦（CBDB 295385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295385&o=json
            external_identifier: CBDB:295385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hHDCw1tMaaR2qJj4cJFS8R
        status: active
        display_name: 王燦
        merged_into_person_id: null
    - claim:
        id: c_lVKoLQyxe8bc-2EglJDr6o
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_niw5uJS3zvXwNh3yWH2M5Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__Zd5MPT17t1YvfIEPMQx7t
          claim_id: c_lVKoLQyxe8bc-2EglJDr6o
          source_id: s_bRsHMcKELtvcB8sbykpvR4
          stance: supports
          locator: CBDB：兄弟 王崇（202833）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王彝 与 王崇 为同胞（CBDB 记「弟」），王崇 之父／母即 王彝 之父／母。
          source:
            id: s_bRsHMcKELtvcB8sbykpvR4
            source_type: api_record
            title: 中国历代人物传记资料库：王彝（CBDB 295383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295383&o=json
            external_identifier: CBDB:295383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_niw5uJS3zvXwNh3yWH2M5Z
        status: active
        display_name: 王彝
        merged_into_person_id: null
    - claim:
        id: c_Bp0WquZZ4uhUhJkSJIqoaq
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_stmtYMocNUYHWEKMLvVwt1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Uwz_XA0rXSCgVoAuQ5Ae4
          claim_id: c_Bp0WquZZ4uhUhJkSJIqoaq
          source_id: s_i7uJ5pQaImXXNuqE7jB3L-
          stance: supports
          locator: CBDB：兄弟 王崇（202833）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王鼎 与 王崇 为同胞（CBDB 记「弟」），王崇 之父／母即 王鼎 之父／母。
          source:
            id: s_i7uJ5pQaImXXNuqE7jB3L-
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 295387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295387&o=json
            external_identifier: CBDB:295387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_stmtYMocNUYHWEKMLvVwt1
        status: active
        display_name: 王鼎
        merged_into_person_id: null
    - claim:
        id: c_d-xl9xGcwljyKFwFaxEPtv
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uFoq8xCZJis6iTmr9FLnBy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vp5YaEnjBQAeCVSB0n3AzF
          claim_id: c_d-xl9xGcwljyKFwFaxEPtv
          source_id: s_-qTk8cvyp7yPCGqi-02RAO
          stance: supports
          locator: CBDB：兄弟 王崇（202833）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王璋 与 王崇 为同胞（CBDB 记「弟」），王崇 之父／母即 王璋 之父／母。
          source:
            id: s_-qTk8cvyp7yPCGqi-02RAO
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 295389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295389&o=json
            external_identifier: CBDB:295389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uFoq8xCZJis6iTmr9FLnBy
        status: active
        display_name: 王璋
        merged_into_person_id: null
    - claim:
        id: c_IETBaBYGQ2gYuO44EMO5Pr
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wpuFNZnLqtyUBZUSZtR4bf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OtInApWoUf3PfN92DeK3R7
          claim_id: c_IETBaBYGQ2gYuO44EMO5Pr
          source_id: s_2AFZNEahkx9KcToCbBYCQV
          stance: supports
          locator: CBDB：兄弟 王崇（202833）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王琴 与 王崇 为同胞（CBDB 记「弟」），王崇 之父／母即 王琴 之父／母。
          source:
            id: s_2AFZNEahkx9KcToCbBYCQV
            source_type: api_record
            title: 中国历代人物传记资料库：王琴（CBDB 295392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295392&o=json
            external_identifier: CBDB:295392
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wpuFNZnLqtyUBZUSZtR4bf
        status: active
        display_name: 王琴
        merged_into_person_id: null
    - claim:
        id: c_3fa31aEQ9K2zbBYmPh_0o6
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xCyXXAVPZTfkMLcTEmPx6P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kHdVDutrw_wmUblBC9vQ9W
          claim_id: c_3fa31aEQ9K2zbBYmPh_0o6
          source_id: s_lVUJcVrV-O5FiKeRnTQRTf
          stance: supports
          locator: CBDB：兄弟 王崇（202833）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王鼏 与 王崇 为同胞（CBDB 记「弟」），王崇 之父／母即 王鼏 之父／母。
          source:
            id: s_lVUJcVrV-O5FiKeRnTQRTf
            source_type: api_record
            title: 中国历代人物传记资料库：王鼏（CBDB 295391）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295391&o=json
            external_identifier: CBDB:295391
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xCyXXAVPZTfkMLcTEmPx6P
        status: active
        display_name: 王鼏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王釗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王釗 | accepted |
| bio.summary | 王釗，明人物。嘉靖十四年進士，籍贯任邱。（中国历代人物传记资料库 CBDB 295379） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2BUKVfjLttuBq79dFrNbRz | 王崇 | accepted |
| children | p_2Ein837W8JAAsgzKqEZfds | 王宮 | accepted |
| children | p_6xtQbRuBzA1uP67YjPrUyD | 王琦 | accepted |
| children | p_89NdiNnYLVbveTmjL24u63 | 王圍 | accepted |
| children | p_9XvnKgD4BETFUuaznLpSPq | 王爵 | accepted |
| children | p_C8puYi9NgpgQpx43FYsihR | 王官 | accepted |
| children | p_FsR5Tt19tFVotojMRHp2N3 | 王慶 | accepted |
| children | p_GgDbyUiRy94GrHq1xQFBkg | 王璽 | accepted |
| children | p_YQWY349n8N86T9edBNzktP | 王嶽 | accepted |
| children | p_hHDCw1tMaaR2qJj4cJFS8R | 王燦 | accepted |
| children | p_niw5uJS3zvXwNh3yWH2M5Z | 王彝 | accepted |
| children | p_stmtYMocNUYHWEKMLvVwt1 | 王鼎 | accepted |
| children | p_uFoq8xCZJis6iTmr9FLnBy | 王璋 | accepted |
| children | p_wpuFNZnLqtyUBZUSZtR4bf | 王琴 | accepted |
| children | p_xCyXXAVPZTfkMLcTEmPx6P | 王鼏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王燦（CBDB 295385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295385&o=json)
- [中国历代人物传记资料库：王崇（CBDB 202833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202833&o=json)
- [中国历代人物传记资料库：王鼎（CBDB 295387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295387&o=json)
- [中国历代人物传记资料库：王宮（CBDB 295398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295398&o=json)
- [中国历代人物传记资料库：王官（CBDB 295394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295394&o=json)
- [中国历代人物传记资料库：王爵（CBDB 295388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295388&o=json)
- [中国历代人物传记资料库：王鼏（CBDB 295391）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295391&o=json)
- [中国历代人物传记资料库：王琦（CBDB 295390）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295390&o=json)
- [中国历代人物传记资料库：王琴（CBDB 295392）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295392&o=json)
- [中国历代人物传记资料库：王慶（CBDB 295393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295393&o=json)
- [中国历代人物传记资料库：王圍（CBDB 295395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295395&o=json)
- [中国历代人物传记资料库：王璽（CBDB 295386）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295386&o=json)
- [中国历代人物传记资料库：王彝（CBDB 295383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295383&o=json)
- [中国历代人物传记资料库：王嶽（CBDB 295397）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295397&o=json)
- [中国历代人物传记资料库：王璋（CBDB 295389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295389&o=json)
- [中国历代人物传记资料库：王釗（CBDB 295379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295379&o=json)
