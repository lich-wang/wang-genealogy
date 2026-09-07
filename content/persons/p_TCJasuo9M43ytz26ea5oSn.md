---
schema: wang-person/v1
id: p_TCJasuo9M43ytz26ea5oSn
status: active
merged_into: null
display_name: 王益
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FBQL2iCgVaqhvTgv2HU2bt
        subject_person_id: p_TCJasuo9M43ytz26ea5oSn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益（993年—1038年），史料所见人物。本项目依据《維基數據：王益》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_5KNwd43g3YCbaRNGla0-Hx
          claim_id: c_FBQL2iCgVaqhvTgv2HU2bt
          source_id: s_c3iRor2ubBu2jQ1UWHJaUS
          stance: supports
          locator: Q45365249
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_c3iRor2ubBu2jQ1UWHJaUS
            source_type: api_record
            title: 維基數據：王益（Q45365249）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45365249
            external_identifier: Q45365249
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:54.906Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ANbfGD6rWQ4G1AfTcAGQLq
        subject_person_id: p_TCJasuo9M43ytz26ea5oSn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 993年
            calendar_note: 維基數據 P569 結構化日期，精度：年
            earliest: 0993-01-01
            latest: 0993-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_T7NTrfrxC6feFDULBXM7G7
          claim_id: c_ANbfGD6rWQ4G1AfTcAGQLq
          source_id: s_c3iRor2ubBu2jQ1UWHJaUS
          stance: supports
          locator: Q45365249
          quotation: null
          interpretation_note: null
          source:
            id: s_c3iRor2ubBu2jQ1UWHJaUS
            source_type: api_record
            title: 維基數據：王益（Q45365249）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45365249
            external_identifier: Q45365249
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:54.906Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_YFaFiz2BpxPrvBYaSuopZx
        subject_person_id: p_TCJasuo9M43ytz26ea5oSn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1038年
            calendar_note: 維基數據 P570 結構化日期，精度：年
            earliest: 1038-01-01
            latest: 1038-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C16GLTPA4VTwCU5aPxxuH7
          claim_id: c_YFaFiz2BpxPrvBYaSuopZx
          source_id: s_c3iRor2ubBu2jQ1UWHJaUS
          stance: supports
          locator: Q45365249
          quotation: null
          interpretation_note: null
          source:
            id: s_c3iRor2ubBu2jQ1UWHJaUS
            source_type: api_record
            title: 維基數據：王益（Q45365249）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45365249
            external_identifier: Q45365249
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:54.906Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_J9HYDQ7GpC9DB9WDYjDjSZ
        subject_person_id: p_TCJasuo9M43ytz26ea5oSn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NJeXsH9wwNufG5qT59BoHp
          claim_id: c_J9HYDQ7GpC9DB9WDYjDjSZ
          source_id: s_c3iRor2ubBu2jQ1UWHJaUS
          stance: supports
          locator: Q45365249
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KDydhWyyxBQVCfbLmJMgyF
        subject_person_id: p_qhr63u6HvGLzGzcHEvaWtZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TCJasuo9M43ytz26ea5oSn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5wcnEwYyGR4dGkx1v9ScQX
          claim_id: c_KDydhWyyxBQVCfbLmJMgyF
          source_id: s_RcEL59cJV9N9h52CGk5rEv
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_RcEL59cJV9N9h52CGk5rEv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王益（7082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7082&o=json
            external_identifier: CBDB:7082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:19.208Z
            metadata_json: null
        - id: cs_ciD5hTMGHAHeyM7KFNe7WZ
          claim_id: c_KDydhWyyxBQVCfbLmJMgyF
          source_id: s_c3iRor2ubBu2jQ1UWHJaUS
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_c3iRor2ubBu2jQ1UWHJaUS
            source_type: api_record
            title: 維基數據：王益（Q45365249）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45365249
            external_identifier: Q45365249
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:54.906Z
            metadata_json: null
        - id: cs_UVye4rBe8GZTnr8BsNvmLu
          claim_id: c_KDydhWyyxBQVCfbLmJMgyF
          source_id: s_bf7i3HJ55dCKhrKsK4HAr1
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bf7i3HJ55dCKhrKsK4HAr1
            source_type: api_record
            title: 维基数据：王用之（Q45389721）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45389721
            external_identifier: Q45389721
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:18.559Z
            metadata_json: null
        - id: cs_FYMACmSCCeD79bYUHSydHk
          claim_id: c_KDydhWyyxBQVCfbLmJMgyF
          source_id: s_nN8U88v6ioGd6Vn7FnijMg
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_nN8U88v6ioGd6Vn7FnijMg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王用之（18553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18553&o=json
            external_identifier: CBDB:18553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:18.692Z
            metadata_json: null
      object_person:
        id: p_qhr63u6HvGLzGzcHEvaWtZ
        status: active
        display_name: 王用之
        merged_into_person_id: null
  children:
    - claim:
        id: c_C3CN6ppEEzJSt2ssnirL2o
        subject_person_id: p_TCJasuo9M43ytz26ea5oSn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fuv1kE3UCBeTFNiA6c9Tuw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4bKV1aJRu34KJWzF5rKZjb
          claim_id: c_C3CN6ppEEzJSt2ssnirL2o
          source_id: s_fLAce8PGeb2eAaVFYTSBka
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_fLAce8PGeb2eAaVFYTSBka
            source_type: api_record
            title: 維基數據：王安石（Q319618）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q319618
            external_identifier: Q319618
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:55.261Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%89%E7%9F%B3
        - id: cs_hbzermAEWTGncLM2kQoVnM
          claim_id: c_C3CN6ppEEzJSt2ssnirL2o
          source_id: s_c3iRor2ubBu2jQ1UWHJaUS
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_c3iRor2ubBu2jQ1UWHJaUS
            source_type: api_record
            title: 維基數據：王益（Q45365249）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45365249
            external_identifier: Q45365249
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:54.906Z
            metadata_json: null
        - id: cs_5hRTdbtQUBaFGmnRdYpNH2
          claim_id: c_C3CN6ppEEzJSt2ssnirL2o
          source_id: s_Gh6euCr2RKfuAXB8kPrVBR
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_Gh6euCr2RKfuAXB8kPrVBR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库
            creator: null
            publisher: null
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu
            external_identifier: CBDB:1762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_XNdpn8557vqkfT8CLbNTTH
          claim_id: c_C3CN6ppEEzJSt2ssnirL2o
          source_id: s_RcEL59cJV9N9h52CGk5rEv
          stance: supports
          locator: 亲属关系：三子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_RcEL59cJV9N9h52CGk5rEv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王益（7082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7082&o=json
            external_identifier: CBDB:7082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:19.208Z
            metadata_json: null
        - id: cs_FvaR273EknbXAemd1xxAq7
          claim_id: c_C3CN6ppEEzJSt2ssnirL2o
          source_id: s_5g7WxJuDRVzW6i37RBszym
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王安石的父亲为王益，官至都官员外郎。
          interpretation_note: null
          source:
            id: s_5g7WxJuDRVzW6i37RBszym
            source_type: website
            title: 中文维基百科：王安石
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%89%E7%9F%B3
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:03.947Z
            metadata_json: null
      object_person:
        id: p_fuv1kE3UCBeTFNiA6c9Tuw
        status: active
        display_name: 王安石
        merged_into_person_id: null
    - claim:
        id: c_P3HDQvmRzkqRji2AdA8Jfn
        subject_person_id: p_TCJasuo9M43ytz26ea5oSn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3junVkFJoVRzxzPkHGwJp6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_8bDCb1TPfS36HisRQjC1BY
          claim_id: c_P3HDQvmRzkqRji2AdA8Jfn
          source_id: s_RcEL59cJV9N9h52CGk5rEv
          stance: supports
          locator: 亲属关系：四子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_RcEL59cJV9N9h52CGk5rEv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王益（7082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7082&o=json
            external_identifier: CBDB:7082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:19.208Z
            metadata_json: null
        - id: cs_KNiuVtyNjoPyQKAqmLtZZF
          claim_id: c_P3HDQvmRzkqRji2AdA8Jfn
          source_id: s_c3iRor2ubBu2jQ1UWHJaUS
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_c3iRor2ubBu2jQ1UWHJaUS
            source_type: api_record
            title: 維基數據：王益（Q45365249）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45365249
            external_identifier: Q45365249
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:54.906Z
            metadata_json: null
        - id: cs_zhuvCszHMme7DzBWsWWy3E
          claim_id: c_P3HDQvmRzkqRji2AdA8Jfn
          source_id: s_eLUhkWfYU2avW7ALtX5HuY
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_eLUhkWfYU2avW7ALtX5HuY
            source_type: api_record
            title: 维基数据：王安国（Q16077282）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077282
            external_identifier: Q16077282
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:57.213Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%89%E5%9C%8B_(%E5%8C%97%E5%AE%8B)
        - id: cs_7y23YgWn2db2NeFPvafMb5
          claim_id: c_P3HDQvmRzkqRji2AdA8Jfn
          source_id: s_iMR7HP2uaY3SbJBUifgDL8
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_iMR7HP2uaY3SbJBUifgDL8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王安國（7076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7076&o=json
            external_identifier: CBDB:7076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:48:57.350Z
            metadata_json: null
      object_person:
        id: p_3junVkFJoVRzxzPkHGwJp6
        status: active
        display_name: 王安国
        merged_into_person_id: null
    - claim:
        id: c_azG6McvRJJdvm3E9zDCSoL
        subject_person_id: p_TCJasuo9M43ytz26ea5oSn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KTTATWUQ3F1m45Pemb3S7n
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GhCP2JBUnj7DQMp4emfNdz
          claim_id: c_azG6McvRJJdvm3E9zDCSoL
          source_id: s_c3iRor2ubBu2jQ1UWHJaUS
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_c3iRor2ubBu2jQ1UWHJaUS
            source_type: api_record
            title: 維基數據：王益（Q45365249）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45365249
            external_identifier: Q45365249
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:54.906Z
            metadata_json: null
        - id: cs_VF4YsYPoz3CVeZ8bq4TJoC
          claim_id: c_azG6McvRJJdvm3E9zDCSoL
          source_id: s_RcEL59cJV9N9h52CGk5rEv
          stance: supports
          locator: 亲属关系：六子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_RcEL59cJV9N9h52CGk5rEv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王益（7082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7082&o=json
            external_identifier: CBDB:7082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:19.208Z
            metadata_json: null
        - id: cs_G8qf2K1PRL6h7gYYQwKsHZ
          claim_id: c_azG6McvRJJdvm3E9zDCSoL
          source_id: s_pMq6gCCXJVj3QXhW3E3N1w
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_pMq6gCCXJVj3QXhW3E3N1w
            source_type: api_record
            title: 维基数据：王安礼（Q18905331）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18905331
            external_identifier: Q18905331
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:03.122Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%89%E7%A4%BC
        - id: cs_5hFjKW4m2aNMiHkWGUBhDX
          claim_id: c_azG6McvRJJdvm3E9zDCSoL
          source_id: s_N58ngmLD3tMkd74bJBFFx4
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_N58ngmLD3tMkd74bJBFFx4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王安禮（1760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1760&o=json
            external_identifier: CBDB:1760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:03.257Z
            metadata_json: null
        - id: cs_F6SErLASEPbVopqPHtrUKK
          claim_id: c_azG6McvRJJdvm3E9zDCSoL
          source_id: s_9HjLHNEKabGHijCQBRQ6vi
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王益第六子
          interpretation_note: null
          source:
            id: s_9HjLHNEKabGHijCQBRQ6vi
            source_type: website
            title: 中文维基百科：王安礼
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%89%E7%A4%BC
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:27:03.569Z
            metadata_json: null
        - id: cs_ACbAtc7KV8hnkM86v7Qnu2
          claim_id: c_azG6McvRJJdvm3E9zDCSoL
          source_id: s_yK3L8CbbckP6ALGsCbpgQF
          stance: supports
          locator: 条文：条文识读（父亲）
          quotation: 王益第六子
          interpretation_note: null
          source:
            id: s_yK3L8CbbckP6ALGsCbpgQF
            source_type: website
            title: 中文维基百科：王安礼
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%89%E7%A4%BC
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:19.854Z
            metadata_json: null
      object_person:
        id: p_KTTATWUQ3F1m45Pemb3S7n
        status: active
        display_name: 王安礼
        merged_into_person_id: null
    - claim:
        id: c_D9oUQBj4wwcBALcZL34Tf6
        subject_person_id: p_TCJasuo9M43ytz26ea5oSn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7KQYA5hnGXuoCHKsGtX71z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_A4pcS5YuBBWwneF55Xg44w
          claim_id: c_D9oUQBj4wwcBALcZL34Tf6
          source_id: s_RcEL59cJV9N9h52CGk5rEv
          stance: supports
          locator: 亲属关系：七子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_RcEL59cJV9N9h52CGk5rEv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王益（7082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7082&o=json
            external_identifier: CBDB:7082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:19.208Z
            metadata_json: null
        - id: cs_s85DhXME7P822MGPtYYg2N
          claim_id: c_D9oUQBj4wwcBALcZL34Tf6
          source_id: s_c3iRor2ubBu2jQ1UWHJaUS
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_c3iRor2ubBu2jQ1UWHJaUS
            source_type: api_record
            title: 維基數據：王益（Q45365249）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45365249
            external_identifier: Q45365249
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:54.906Z
            metadata_json: null
        - id: cs_4rZ5m1qb5jvFiB4dZMPJvW
          claim_id: c_D9oUQBj4wwcBALcZL34Tf6
          source_id: s_NxvU4LY531purGCqVMaSQi
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_NxvU4LY531purGCqVMaSQi
            source_type: api_record
            title: 维基数据：王安上（Q45359357）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359357
            external_identifier: Q45359357
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:12.851Z
            metadata_json: null
        - id: cs_Uvk5sd6xC8397tCWTsWAL4
          claim_id: c_D9oUQBj4wwcBALcZL34Tf6
          source_id: s_4wizBpwXC5g6JbXBq94s31
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_4wizBpwXC5g6JbXBq94s31
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王安上（1761）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1761&o=json
            external_identifier: CBDB:1761
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:12.987Z
            metadata_json: null
      object_person:
        id: p_7KQYA5hnGXuoCHKsGtX71z
        status: active
        display_name: 王安上
        merged_into_person_id: null
    - claim:
        id: c_3eT3KBLnH5czMg6fUuo7FW
        subject_person_id: p_TCJasuo9M43ytz26ea5oSn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mxh2i1LUATcWHsMHstGBBk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_dXNq8RrhWCD3G5a9pzXrrJ
          claim_id: c_3eT3KBLnH5czMg6fUuo7FW
          source_id: s_RcEL59cJV9N9h52CGk5rEv
          stance: supports
          locator: 亲属关系：女兒
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_RcEL59cJV9N9h52CGk5rEv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王益（7082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7082&o=json
            external_identifier: CBDB:7082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:19.208Z
            metadata_json: null
        - id: cs_g5a5cwSdC1nDUsGx3wvF4G
          claim_id: c_3eT3KBLnH5czMg6fUuo7FW
          source_id: s_c3iRor2ubBu2jQ1UWHJaUS
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_c3iRor2ubBu2jQ1UWHJaUS
            source_type: api_record
            title: 維基數據：王益（Q45365249）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45365249
            external_identifier: Q45365249
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:54.906Z
            metadata_json: null
        - id: cs_JpexoHuheSSjh3hwTV4KM2
          claim_id: c_3eT3KBLnH5czMg6fUuo7FW
          source_id: s_DefAXwimfmrVyoWhNZxYJu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_DefAXwimfmrVyoWhNZxYJu
            source_type: api_record
            title: 维基数据：王文淑（Q45363736）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363736
            external_identifier: Q45363736
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:14.674Z
            metadata_json: null
        - id: cs_Mv8DzFBhKnYNXrJqUA5Kq4
          claim_id: c_3eT3KBLnH5czMg6fUuo7FW
          source_id: s_MLiNBEUSDAocvAm7nBChTb
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_MLiNBEUSDAocvAm7nBChTb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王文淑（5011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5011&o=json
            external_identifier: CBDB:5011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:14.805Z
            metadata_json: null
      object_person:
        id: p_mxh2i1LUATcWHsMHstGBBk
        status: active
        display_name: 王文淑
        merged_into_person_id: null
    - claim:
        id: c_r87H4D3inHUHUB5kR937d8
        subject_person_id: p_TCJasuo9M43ytz26ea5oSn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YQuMpcr7QfgGKJNaJ7kxDA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_KLsyGoiAcXCCMNBvj9ruW4
          claim_id: c_r87H4D3inHUHUB5kR937d8
          source_id: s_RcEL59cJV9N9h52CGk5rEv
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_RcEL59cJV9N9h52CGk5rEv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王益（7082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7082&o=json
            external_identifier: CBDB:7082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:19.208Z
            metadata_json: null
        - id: cs_UQrXqEReDJGxQHgESc5Pry
          claim_id: c_r87H4D3inHUHUB5kR937d8
          source_id: s_c3iRor2ubBu2jQ1UWHJaUS
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_c3iRor2ubBu2jQ1UWHJaUS
            source_type: api_record
            title: 維基數據：王益（Q45365249）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45365249
            external_identifier: Q45365249
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:54.906Z
            metadata_json: null
        - id: cs_nFMC7jx726TJ96HnzyggDe
          claim_id: c_r87H4D3inHUHUB5kR937d8
          source_id: s_3V1meKdGmrMYaecUmyhjyg
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_3V1meKdGmrMYaecUmyhjyg
            source_type: api_record
            title: 维基数据：王安仁（Q45401557）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401557
            external_identifier: Q45401557
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:19.639Z
            metadata_json: null
        - id: cs_mb7D54WfJFKekz2mNXH3kX
          claim_id: c_r87H4D3inHUHUB5kR937d8
          source_id: s_N8FoVBUuPYvLPdLyNoexDZ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_N8FoVBUuPYvLPdLyNoexDZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王安仁（21944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21944&o=json
            external_identifier: CBDB:21944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:19.779Z
            metadata_json: null
      object_person:
        id: p_YQuMpcr7QfgGKJNaJ7kxDA
        status: active
        display_name: 王安仁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_69k8MnHXNY1JeExPe3abdX
        subject_person_id: p_TCJasuo9M43ytz26ea5oSn
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_pnAwQYPJDQVui1PAGN872g
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Ed4L1yRiJZ5HxVtjaU3QJ5
          claim_id: c_69k8MnHXNY1JeExPe3abdX
          source_id: s_zKwNMGBkJFScDyMUNoLTX6
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_zKwNMGBkJFScDyMUNoLTX6
            source_type: api_record
            title: 維基數據：吴氏（Q45364102）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364102
            external_identifier: Q45364102
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:56.564Z
            metadata_json: null
        - id: cs_RVkE4dJmpRYDHdbfH4gMoE
          claim_id: c_69k8MnHXNY1JeExPe3abdX
          source_id: s_RcEL59cJV9N9h52CGk5rEv
          stance: supports
          locator: 亲属关系：第二任妻
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_RcEL59cJV9N9h52CGk5rEv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王益（7082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7082&o=json
            external_identifier: CBDB:7082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:19.208Z
            metadata_json: null
        - id: cs_ntrbGqxN5nK9UnZdVsRtjL
          claim_id: c_69k8MnHXNY1JeExPe3abdX
          source_id: s_c3iRor2ubBu2jQ1UWHJaUS
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_c3iRor2ubBu2jQ1UWHJaUS
            source_type: api_record
            title: 維基數據：王益（Q45365249）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45365249
            external_identifier: Q45365249
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:54.906Z
            metadata_json: null
        - id: cs_uNLwuH3zCqxyE2vBtXCH7F
          claim_id: c_69k8MnHXNY1JeExPe3abdX
          source_id: s_r5nsHi5ehqynTitrhsvRwN
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_r5nsHi5ehqynTitrhsvRwN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：吳氏（5134）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5134&o=json
            external_identifier: CBDB:5134
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:18.162Z
            metadata_json: null
      object_person:
        id: p_pnAwQYPJDQVui1PAGN872g
        status: active
        display_name: 吴氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王益

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王益（993年—1038年），史料所见人物。本项目依据《維基數據：王益》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 993年 | accepted |
| death.date | 1038年 | accepted |
| name.primary | 王益 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qhr63u6HvGLzGzcHEvaWtZ | 王用之 | accepted |
| children | p_fuv1kE3UCBeTFNiA6c9Tuw | 王安石 | accepted |
| children | p_3junVkFJoVRzxzPkHGwJp6 | 王安国 | accepted |
| children | p_KTTATWUQ3F1m45Pemb3S7n | 王安礼 | accepted |
| children | p_7KQYA5hnGXuoCHKsGtX71z | 王安上 | accepted |
| children | p_mxh2i1LUATcWHsMHstGBBk | 王文淑 | accepted |
| children | p_YQuMpcr7QfgGKJNaJ7kxDA | 王安仁 | accepted |
| spouses | p_pnAwQYPJDQVui1PAGN872g | 吴氏 | accepted |

## 外部来源

- [维基数据：王安国（Q16077282）](https://www.wikidata.org/wiki/Q16077282)
- [维基数据：王安礼（Q18905331）](https://www.wikidata.org/wiki/Q18905331)
- [维基数据：王安仁（Q45401557）](https://www.wikidata.org/wiki/Q45401557)
- [维基数据：王安上（Q45359357）](https://www.wikidata.org/wiki/Q45359357)
- [维基数据：王文淑（Q45363736）](https://www.wikidata.org/wiki/Q45363736)
- [维基数据：王用之（Q45389721）](https://www.wikidata.org/wiki/Q45389721)
- [維基數據：王安石（Q319618）](https://www.wikidata.org/wiki/Q319618)
- [維基數據：王益（Q45365249）](https://www.wikidata.org/wiki/Q45365249)
- [維基數據：吴氏（Q45364102）](https://www.wikidata.org/wiki/Q45364102)
- [中文维基百科：王安礼](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%89%E7%A4%BC)
- [中文维基百科：王安石](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%89%E7%9F%B3)
- [CBDB 中国历代人物传记资料库](https://cbdb.fas.harvard.edu)
- [CBDB 中国历代人物传记资料库：王安國（7076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7076&o=json)
- [CBDB 中国历代人物传记资料库：王安禮（1760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1760&o=json)
- [CBDB 中国历代人物传记资料库：王安仁（21944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21944&o=json)
- [CBDB 中国历代人物传记资料库：王安上（1761）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1761&o=json)
- [CBDB 中国历代人物传记资料库：王文淑（5011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5011&o=json)
- [CBDB 中国历代人物传记资料库：王益（7082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7082&o=json)
- [CBDB 中国历代人物传记资料库：王用之（18553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18553&o=json)
- [CBDB 中国历代人物传记资料库：吳氏（5134）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5134&o=json)
