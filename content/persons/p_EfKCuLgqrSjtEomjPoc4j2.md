---
schema: wang-person/v1
id: p_EfKCuLgqrSjtEomjPoc4j2
status: active
merged_into: null
display_name: 王知蕴
cbdb_id: 145209
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L9P3zvSLZjm7NPWyx6mFbp
        subject_person_id: p_EfKCuLgqrSjtEomjPoc4j2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知蕴（卒于894年），唐人物。曾任王府諮議參軍。（中国历代人物传记资料库 CBDB 145209）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_AfdsQZyLsvsAqNJejtQcKK
          claim_id: c_L9P3zvSLZjm7NPWyx6mFbp
          source_id: s_RiHeTEyTNCmKY6xwnMqwrP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_RiHeTEyTNCmKY6xwnMqwrP
            source_type: api_record
            title: 维基数据：王知蕴（Q45450093）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450093
            external_identifier: Q45450093
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:03.115Z
            metadata_json: null
        - id: cs_RagCvVIk1GczMfR6pbRtgb
          claim_id: c_L9P3zvSLZjm7NPWyx6mFbp
          source_id: s_icShKtqHWZEY2X5u6JmSre
          stance: supports
          locator: CBDB:145209
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_icShKtqHWZEY2X5u6JmSre
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知蘊（145209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145209&o=json
            external_identifier: CBDB:145209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:03.266Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_3oUqzBaao6VRqrY5c29BDu
        subject_person_id: p_EfKCuLgqrSjtEomjPoc4j2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 894年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0894-01-01
            latest: 0894-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RBgs8ANxDMsSDx1hJHL9g6
          claim_id: c_3oUqzBaao6VRqrY5c29BDu
          source_id: s_RiHeTEyTNCmKY6xwnMqwrP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_RiHeTEyTNCmKY6xwnMqwrP
            source_type: api_record
            title: 维基数据：王知蕴（Q45450093）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450093
            external_identifier: Q45450093
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:03.115Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GYbDuwWR3nq6D6H9MYtcXn
        subject_person_id: p_EfKCuLgqrSjtEomjPoc4j2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知蕴
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PPBKQJ681B8VsaoDodEm87
          claim_id: c_GYbDuwWR3nq6D6H9MYtcXn
          source_id: s_RiHeTEyTNCmKY6xwnMqwrP
          stance: supports
          locator: Q45450093
          quotation: null
          interpretation_note: null
          source:
            id: s_RiHeTEyTNCmKY6xwnMqwrP
            source_type: api_record
            title: 维基数据：王知蕴（Q45450093）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450093
            external_identifier: Q45450093
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:03.115Z
            metadata_json: null
        - id: cs_SRECm128iAabd9HqPSSVyF
          claim_id: c_GYbDuwWR3nq6D6H9MYtcXn
          source_id: s_icShKtqHWZEY2X5u6JmSre
          stance: supports
          locator: Q45450093
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1DQCjB5D9idKnxG2v2MPEG
        subject_person_id: p_J3uEtABU9yZpLVpDBsGAq3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EfKCuLgqrSjtEomjPoc4j2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FNYDZLQBXMisBUigaFmFwZ
          claim_id: c_1DQCjB5D9idKnxG2v2MPEG
          source_id: s_1VmAjatw3vy2Jv48pJ6tUR
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_1VmAjatw3vy2Jv48pJ6tUR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王邁（175409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175409&o=json
            external_identifier: CBDB:175409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:57.188Z
            metadata_json: null
        - id: cs_Fird7PaAJngHCwPdZbHRbL
          claim_id: c_1DQCjB5D9idKnxG2v2MPEG
          source_id: s_RD4sw4bpaLA5KUZpiyg3Qg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RD4sw4bpaLA5KUZpiyg3Qg
            source_type: api_record
            title: 维基数据：王迈（Q45657929）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657929
            external_identifier: Q45657929
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:57.051Z
            metadata_json: null
        - id: cs_Tkw2e8Xw6t1CM4mEjaE9fY
          claim_id: c_1DQCjB5D9idKnxG2v2MPEG
          source_id: s_RiHeTEyTNCmKY6xwnMqwrP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_RiHeTEyTNCmKY6xwnMqwrP
            source_type: api_record
            title: 维基数据：王知蕴（Q45450093）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450093
            external_identifier: Q45450093
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:03.115Z
            metadata_json: null
        - id: cs_nLPAy99fuLBYormFRd9Ltu
          claim_id: c_1DQCjB5D9idKnxG2v2MPEG
          source_id: s_icShKtqHWZEY2X5u6JmSre
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_icShKtqHWZEY2X5u6JmSre
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知蘊（145209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145209&o=json
            external_identifier: CBDB:145209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:03.266Z
            metadata_json: null
      object_person:
        id: p_J3uEtABU9yZpLVpDBsGAq3
        status: active
        display_name: 王迈
        merged_into_person_id: null
  children:
    - claim:
        id: c_k7AXuFrQodxaHv5gxDksZd
        subject_person_id: p_EfKCuLgqrSjtEomjPoc4j2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N5kbg3euLXxpkZM8MisDtX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_LSnSfoTGhhavZBcjyt3QMQ
          claim_id: c_k7AXuFrQodxaHv5gxDksZd
          source_id: s_icShKtqHWZEY2X5u6JmSre
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_icShKtqHWZEY2X5u6JmSre
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知蘊（145209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145209&o=json
            external_identifier: CBDB:145209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:03.266Z
            metadata_json: null
        - id: cs_mJQSoqNHrK7n2va6GuA4Cc
          claim_id: c_k7AXuFrQodxaHv5gxDksZd
          source_id: s_RiHeTEyTNCmKY6xwnMqwrP
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RiHeTEyTNCmKY6xwnMqwrP
            source_type: api_record
            title: 维基数据：王知蕴（Q45450093）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450093
            external_identifier: Q45450093
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:03.115Z
            metadata_json: null
        - id: cs_5DTWVxT1YJDMsoC3fR6Fst
          claim_id: c_k7AXuFrQodxaHv5gxDksZd
          source_id: s_PFGE112YyCkC2L3u1Q1Bq9
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_PFGE112YyCkC2L3u1Q1Bq9
            source_type: api_record
            title: 维基数据：王慎（Q45658047）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658047
            external_identifier: Q45658047
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:39.615Z
            metadata_json: null
        - id: cs_zU8a1hceKJKtHpBeLZ1MDe
          claim_id: c_k7AXuFrQodxaHv5gxDksZd
          source_id: s_kVkZ2KjGp9ZKsJj8B2CQqq
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_kVkZ2KjGp9ZKsJj8B2CQqq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王慎（175411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175411&o=json
            external_identifier: CBDB:175411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:39.752Z
            metadata_json: null
      object_person:
        id: p_N5kbg3euLXxpkZM8MisDtX
        status: active
        display_name: 王慎
        merged_into_person_id: null
    - claim:
        id: c_7CyaSo2NL7LmDRKeMoyaNN
        subject_person_id: p_EfKCuLgqrSjtEomjPoc4j2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DHTj2ddRuwji9ZADTAyCpD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3ALqTEK6wUsbhuyf4iu9gu
          claim_id: c_7CyaSo2NL7LmDRKeMoyaNN
          source_id: s_icShKtqHWZEY2X5u6JmSre
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_icShKtqHWZEY2X5u6JmSre
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知蘊（145209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145209&o=json
            external_identifier: CBDB:145209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:03.266Z
            metadata_json: null
        - id: cs_DTnN7ZVdxTt2HR53yHHKL6
          claim_id: c_7CyaSo2NL7LmDRKeMoyaNN
          source_id: s_RiHeTEyTNCmKY6xwnMqwrP
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RiHeTEyTNCmKY6xwnMqwrP
            source_type: api_record
            title: 维基数据：王知蕴（Q45450093）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450093
            external_identifier: Q45450093
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:03.115Z
            metadata_json: null
        - id: cs_1wy3HPdznLZChAR8b952TG
          claim_id: c_7CyaSo2NL7LmDRKeMoyaNN
          source_id: s_tyUcW5ZMyXn6Z67m8qWd7R
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_tyUcW5ZMyXn6Z67m8qWd7R
            source_type: api_record
            title: 维基数据：王璆（Q45658286）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658286
            external_identifier: Q45658286
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:39.616Z
            metadata_json: null
        - id: cs_QZmmHD88nCnoUPZJpJVPQ8
          claim_id: c_7CyaSo2NL7LmDRKeMoyaNN
          source_id: s_hzujyNHdnZCJ4ZVtw6uCY7
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_hzujyNHdnZCJ4ZVtw6uCY7
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王璆（175415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175415&o=json
            external_identifier: CBDB:175415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:39.919Z
            metadata_json: null
      object_person:
        id: p_DHTj2ddRuwji9ZADTAyCpD
        status: active
        display_name: 王璆
        merged_into_person_id: null
    - claim:
        id: c_bHMGBYqjxAVQxwBExm4RDW
        subject_person_id: p_EfKCuLgqrSjtEomjPoc4j2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oBD8mWmKRYBEDsMhuUH2SN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_X8VHwCP8AcdA44FxBDbkgZ
          claim_id: c_bHMGBYqjxAVQxwBExm4RDW
          source_id: s_RiHeTEyTNCmKY6xwnMqwrP
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RiHeTEyTNCmKY6xwnMqwrP
            source_type: api_record
            title: 维基数据：王知蕴（Q45450093）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450093
            external_identifier: Q45450093
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:03.115Z
            metadata_json: null
        - id: cs_z15UA3GxYGER3foJVAU71d
          claim_id: c_bHMGBYqjxAVQxwBExm4RDW
          source_id: s_icShKtqHWZEY2X5u6JmSre
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_icShKtqHWZEY2X5u6JmSre
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知蘊（145209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145209&o=json
            external_identifier: CBDB:145209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:03.266Z
            metadata_json: null
        - id: cs_GWzErqLkSyfbpzRnHm37s8
          claim_id: c_bHMGBYqjxAVQxwBExm4RDW
          source_id: s_u7H7psndRTuRKCJpEd2sYs
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_u7H7psndRTuRKCJpEd2sYs
            source_type: api_record
            title: 维基数据：王昌禹（Q45658345）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658345
            external_identifier: Q45658345
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:39.616Z
            metadata_json: null
        - id: cs_EhPVk5BUKroHFHwP3tEHTD
          claim_id: c_bHMGBYqjxAVQxwBExm4RDW
          source_id: s_w935Kd2xSgqDjWrGgbuQGa
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_w935Kd2xSgqDjWrGgbuQGa
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昌禹（175416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175416&o=json
            external_identifier: CBDB:175416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:39.942Z
            metadata_json: null
      object_person:
        id: p_oBD8mWmKRYBEDsMhuUH2SN
        status: active
        display_name: 王昌禹
        merged_into_person_id: null
    - claim:
        id: c_TZMxQBsPoKCEhNM8dmK4BB
        subject_person_id: p_EfKCuLgqrSjtEomjPoc4j2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_49De46mkDUQGxAbF2teQsC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_55wfFTA85wrp6vjxaPKkpe
          claim_id: c_TZMxQBsPoKCEhNM8dmK4BB
          source_id: s_icShKtqHWZEY2X5u6JmSre
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_icShKtqHWZEY2X5u6JmSre
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知蘊（145209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145209&o=json
            external_identifier: CBDB:145209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:03.266Z
            metadata_json: null
        - id: cs_LLTePQGTPyR34NTntPUs7f
          claim_id: c_TZMxQBsPoKCEhNM8dmK4BB
          source_id: s_RiHeTEyTNCmKY6xwnMqwrP
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RiHeTEyTNCmKY6xwnMqwrP
            source_type: api_record
            title: 维基数据：王知蕴（Q45450093）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450093
            external_identifier: Q45450093
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:03.115Z
            metadata_json: null
        - id: cs_Hdz5MQAbSP5S3WXKrmJ1t1
          claim_id: c_TZMxQBsPoKCEhNM8dmK4BB
          source_id: s_aLnhGcZZtYuaAyZo8v5YY2
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_aLnhGcZZtYuaAyZo8v5YY2
            source_type: api_record
            title: 维基数据：王彦规（Q45658468）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658468
            external_identifier: Q45658468
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:39.616Z
            metadata_json: null
        - id: cs_SW5sMMP4Sw9bGBY9pLNTLd
          claim_id: c_TZMxQBsPoKCEhNM8dmK4BB
          source_id: s_ShTuqqWmWUJHp92wkrMt7a
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ShTuqqWmWUJHp92wkrMt7a
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王彥規（175418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175418&o=json
            external_identifier: CBDB:175418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:39.929Z
            metadata_json: null
      object_person:
        id: p_49De46mkDUQGxAbF2teQsC
        status: active
        display_name: 王彦规
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王知蕴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王知蕴（卒于894年），唐人物。曾任王府諮議參軍。（中国历代人物传记资料库 CBDB 145209） | accepted |
| death.date | 894年 | accepted |
| name.primary | 王知蕴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_J3uEtABU9yZpLVpDBsGAq3 | 王迈 | accepted |
| children | p_N5kbg3euLXxpkZM8MisDtX | 王慎 | accepted |
| children | p_DHTj2ddRuwji9ZADTAyCpD | 王璆 | accepted |
| children | p_oBD8mWmKRYBEDsMhuUH2SN | 王昌禹 | accepted |
| children | p_49De46mkDUQGxAbF2teQsC | 王彦规 | accepted |

## 外部来源

- [维基数据：王昌禹（Q45658345）](https://www.wikidata.org/wiki/Q45658345)
- [维基数据：王迈（Q45657929）](https://www.wikidata.org/wiki/Q45657929)
- [维基数据：王璆（Q45658286）](https://www.wikidata.org/wiki/Q45658286)
- [维基数据：王慎（Q45658047）](https://www.wikidata.org/wiki/Q45658047)
- [维基数据：王彦规（Q45658468）](https://www.wikidata.org/wiki/Q45658468)
- [维基数据：王知蕴（Q45450093）](https://www.wikidata.org/wiki/Q45450093)
- [CBDB 中国历代人物传记资料库：王昌禹（175416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175416&o=json)
- [CBDB 中国历代人物传记资料库：王邁（175409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175409&o=json)
- [CBDB 中国历代人物传记资料库：王璆（175415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175415&o=json)
- [CBDB 中国历代人物传记资料库：王慎（175411）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175411&o=json)
- [CBDB 中国历代人物传记资料库：王彥規（175418）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175418&o=json)
- [CBDB 中国历代人物传记资料库：王知蘊（145209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145209&o=json)
