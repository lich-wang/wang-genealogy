---
schema: wang-person/v1
id: p_zkLScucBk4JK57QATK1P5y
status: active
merged_into: null
display_name: 王添
cbdb_id: 175407
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eHMxAw2eVhLYv4K2X4F1Jb
        subject_person_id: p_zkLScucBk4JK57QATK1P5y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王添（卒于820年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任司農卿。中国历代人物传记资料库（CBDB）以人物编号 175407 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_dJWrCM25TDfD6Cgv8La9gH
          claim_id: c_eHMxAw2eVhLYv4K2X4F1Jb
          source_id: s_fmTBFRP6UZ4fK1GZjEfVZU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_fmTBFRP6UZ4fK1GZjEfVZU
            source_type: api_record
            title: 维基数据：王添（Q45657810）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657810
            external_identifier: Q45657810
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.425Z
            metadata_json: null
        - id: cs_yLZY9N6gc5wQ3CJkbCaJKA
          claim_id: c_eHMxAw2eVhLYv4K2X4F1Jb
          source_id: s_z74bZ49AQL7hc4CKyB5mGw
          stance: supports
          locator: CBDB:175407
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_z74bZ49AQL7hc4CKyB5mGw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王添（175407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175407&o=json
            external_identifier: CBDB:175407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:24.586Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_VDMkVQegiQ13NxN1ByPsnx
        subject_person_id: p_zkLScucBk4JK57QATK1P5y
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 820年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0820-01-01
            latest: 0820-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EdtNtoX8a5LNZdT951DpV4
          claim_id: c_VDMkVQegiQ13NxN1ByPsnx
          source_id: s_fmTBFRP6UZ4fK1GZjEfVZU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_fmTBFRP6UZ4fK1GZjEfVZU
            source_type: api_record
            title: 维基数据：王添（Q45657810）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657810
            external_identifier: Q45657810
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.425Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_K7C6HzjwjfmodtKyhCYFFh
        subject_person_id: p_zkLScucBk4JK57QATK1P5y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王添
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Usqj7EHeZ3LeAqmGQsGJ3G
          claim_id: c_K7C6HzjwjfmodtKyhCYFFh
          source_id: s_z74bZ49AQL7hc4CKyB5mGw
          stance: supports
          locator: Q45657810
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_j2MdfbuA3YDP3Z6iATKFHD
          claim_id: c_K7C6HzjwjfmodtKyhCYFFh
          source_id: s_fmTBFRP6UZ4fK1GZjEfVZU
          stance: supports
          locator: Q45657810
          quotation: null
          interpretation_note: null
          source:
            id: s_fmTBFRP6UZ4fK1GZjEfVZU
            source_type: api_record
            title: 维基数据：王添（Q45657810）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657810
            external_identifier: Q45657810
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.425Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5EQaLu8JvL3i9tfbtBGaJ1
        subject_person_id: p_HBYpSKCLuQzJprEM9fFEYP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zkLScucBk4JK57QATK1P5y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_PtF1EuBFeuf2tzJ2L5DNtU
          claim_id: c_5EQaLu8JvL3i9tfbtBGaJ1
          source_id: s_rHFx8TixMdN4H4AWzKa9GQ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_rHFx8TixMdN4H4AWzKa9GQ
            source_type: api_record
            title: 维基数据：王珪（Q45657394）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657394
            external_identifier: Q45657394
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:46.267Z
            metadata_json: null
        - id: cs_ZRoJFQsFCzo6iek2ogKWkZ
          claim_id: c_5EQaLu8JvL3i9tfbtBGaJ1
          source_id: s_ooRW3hYfLg1RmMZTefBpof
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ooRW3hYfLg1RmMZTefBpof
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王珪（175400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175400&o=json
            external_identifier: CBDB:175400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:46.443Z
            metadata_json: null
        - id: cs_qr2EH9FkU17cMaRQAnYzNg
          claim_id: c_5EQaLu8JvL3i9tfbtBGaJ1
          source_id: s_fmTBFRP6UZ4fK1GZjEfVZU
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_fmTBFRP6UZ4fK1GZjEfVZU
            source_type: api_record
            title: 维基数据：王添（Q45657810）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657810
            external_identifier: Q45657810
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.425Z
            metadata_json: null
        - id: cs_8nbzfE4y7ZAbyYg3dDmZSM
          claim_id: c_5EQaLu8JvL3i9tfbtBGaJ1
          source_id: s_z74bZ49AQL7hc4CKyB5mGw
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_z74bZ49AQL7hc4CKyB5mGw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王添（175407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175407&o=json
            external_identifier: CBDB:175407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:24.586Z
            metadata_json: null
      object_person:
        id: p_HBYpSKCLuQzJprEM9fFEYP
        status: active
        display_name: 王珪
        merged_into_person_id: null
  children:
    - claim:
        id: c_ezF8nGNEwDFV4jLSwaYnhx
        subject_person_id: p_zkLScucBk4JK57QATK1P5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RtF59FE7pJYv9Y4pRvMqLB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GH9nM8V9QUEHMdkAi4JXBR
          claim_id: c_ezF8nGNEwDFV4jLSwaYnhx
          source_id: s_z74bZ49AQL7hc4CKyB5mGw
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_z74bZ49AQL7hc4CKyB5mGw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王添（175407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175407&o=json
            external_identifier: CBDB:175407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:24.586Z
            metadata_json: null
        - id: cs_hE9VeDb8MZDRYpL2Y9aVn8
          claim_id: c_ezF8nGNEwDFV4jLSwaYnhx
          source_id: s_fmTBFRP6UZ4fK1GZjEfVZU
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fmTBFRP6UZ4fK1GZjEfVZU
            source_type: api_record
            title: 维基数据：王添（Q45657810）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657810
            external_identifier: Q45657810
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.425Z
            metadata_json: null
        - id: cs_DKTFrHoeNg6C1fNbU87AQs
          claim_id: c_ezF8nGNEwDFV4jLSwaYnhx
          source_id: s_H4nEyRrHq7tZ5VQiPjD81t
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_H4nEyRrHq7tZ5VQiPjD81t
            source_type: api_record
            title: 维基数据：王锐（Q45657869）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657869
            external_identifier: Q45657869
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:57.050Z
            metadata_json: null
        - id: cs_NWoZyGQN3X5U4RQvYX5SEL
          claim_id: c_ezF8nGNEwDFV4jLSwaYnhx
          source_id: s_yKHSnw61a35LnUKFR2r6Wh
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_yKHSnw61a35LnUKFR2r6Wh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王銳（175408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175408&o=json
            external_identifier: CBDB:175408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:57.197Z
            metadata_json: null
      object_person:
        id: p_RtF59FE7pJYv9Y4pRvMqLB
        status: active
        display_name: 王锐
        merged_into_person_id: null
    - claim:
        id: c_JjtFokt2CvNpCqowBy1jRw
        subject_person_id: p_zkLScucBk4JK57QATK1P5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J3uEtABU9yZpLVpDBsGAq3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9XJMTMFxGJHD6pxDAtEiZs
          claim_id: c_JjtFokt2CvNpCqowBy1jRw
          source_id: s_fmTBFRP6UZ4fK1GZjEfVZU
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fmTBFRP6UZ4fK1GZjEfVZU
            source_type: api_record
            title: 维基数据：王添（Q45657810）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657810
            external_identifier: Q45657810
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.425Z
            metadata_json: null
        - id: cs_je1Uof5iPn3w1QDhZScsSc
          claim_id: c_JjtFokt2CvNpCqowBy1jRw
          source_id: s_z74bZ49AQL7hc4CKyB5mGw
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_z74bZ49AQL7hc4CKyB5mGw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王添（175407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175407&o=json
            external_identifier: CBDB:175407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:24.586Z
            metadata_json: null
        - id: cs_rAkRNw4tKC6HL7N1REdFMB
          claim_id: c_JjtFokt2CvNpCqowBy1jRw
          source_id: s_RD4sw4bpaLA5KUZpiyg3Qg
          stance: supports
          locator: P22（父）
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
        - id: cs_h29BJAyajJgC51KcT5ymuN
          claim_id: c_JjtFokt2CvNpCqowBy1jRw
          source_id: s_1VmAjatw3vy2Jv48pJ6tUR
          stance: supports
          locator: 亲属关系：父
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
      object_person:
        id: p_J3uEtABU9yZpLVpDBsGAq3
        status: active
        display_name: 王迈
        merged_into_person_id: null
    - claim:
        id: c_WAm3kN3WLHDaxFcFLMKF9o
        subject_person_id: p_zkLScucBk4JK57QATK1P5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ABttrGR9ETMfaUWfuE5Xsi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CVKgGXKbk19honGgqpApPt
          claim_id: c_WAm3kN3WLHDaxFcFLMKF9o
          source_id: s_z74bZ49AQL7hc4CKyB5mGw
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_z74bZ49AQL7hc4CKyB5mGw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王添（175407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175407&o=json
            external_identifier: CBDB:175407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:24.586Z
            metadata_json: null
        - id: cs_W3N9ZQMTQLs3zzTRDcN3hz
          claim_id: c_WAm3kN3WLHDaxFcFLMKF9o
          source_id: s_fmTBFRP6UZ4fK1GZjEfVZU
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fmTBFRP6UZ4fK1GZjEfVZU
            source_type: api_record
            title: 维基数据：王添（Q45657810）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657810
            external_identifier: Q45657810
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.425Z
            metadata_json: null
        - id: cs_cApTwABnyj834fTx4QpXHL
          claim_id: c_WAm3kN3WLHDaxFcFLMKF9o
          source_id: s_CdjpQpB9o7sfhYkeEHMHCN
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CdjpQpB9o7sfhYkeEHMHCN
            source_type: api_record
            title: 维基数据：王逸（Q45658647）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658647
            external_identifier: Q45658647
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_Qv4TfY5G4epL5vs6SnzwAe
          claim_id: c_WAm3kN3WLHDaxFcFLMKF9o
          source_id: s_jmGu5vS3p9GvQHE422FM7J
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jmGu5vS3p9GvQHE422FM7J
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逸（175421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175421&o=json
            external_identifier: CBDB:175421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.863Z
            metadata_json: null
      object_person:
        id: p_ABttrGR9ETMfaUWfuE5Xsi
        status: active
        display_name: 王逸
        merged_into_person_id: null
    - claim:
        id: c_YNKmyrgz63MWnuMEzUHCgL
        subject_person_id: p_zkLScucBk4JK57QATK1P5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R43S4tSNhE9EYwSxHQi8DK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Q9Hmk1QWfDK42GQCKHpiB3
          claim_id: c_YNKmyrgz63MWnuMEzUHCgL
          source_id: s_fmTBFRP6UZ4fK1GZjEfVZU
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fmTBFRP6UZ4fK1GZjEfVZU
            source_type: api_record
            title: 维基数据：王添（Q45657810）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657810
            external_identifier: Q45657810
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.425Z
            metadata_json: null
        - id: cs_R5S5oKg5zWtFT6yGp5S86M
          claim_id: c_YNKmyrgz63MWnuMEzUHCgL
          source_id: s_z74bZ49AQL7hc4CKyB5mGw
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_z74bZ49AQL7hc4CKyB5mGw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王添（175407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175407&o=json
            external_identifier: CBDB:175407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:24.586Z
            metadata_json: null
        - id: cs_Pz4L6kSysfhWh22nhVstL4
          claim_id: c_YNKmyrgz63MWnuMEzUHCgL
          source_id: s_q2HM3LSwn2hCoD23EH61RQ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_q2HM3LSwn2hCoD23EH61RQ
            source_type: api_record
            title: 维基数据：王迺（Q45658880）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658880
            external_identifier: Q45658880
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_6ZaFkbWMZU5HUKsrKqavuq
          claim_id: c_YNKmyrgz63MWnuMEzUHCgL
          source_id: s_6HC9Tz6usZG9tpzmYrAfiQ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_6HC9Tz6usZG9tpzmYrAfiQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王迺（175425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175425&o=json
            external_identifier: CBDB:175425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.862Z
            metadata_json: null
      object_person:
        id: p_R43S4tSNhE9EYwSxHQi8DK
        status: active
        display_name: 王迺
        merged_into_person_id: null
    - claim:
        id: c_m3wz1oJxYwLtKgmjnD7afG
        subject_person_id: p_zkLScucBk4JK57QATK1P5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KrQPoCtGgBA1JmWKQJxS4S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Mn6RZM5Hz3ZE7vHcAWFSKm
          claim_id: c_m3wz1oJxYwLtKgmjnD7afG
          source_id: s_z74bZ49AQL7hc4CKyB5mGw
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_z74bZ49AQL7hc4CKyB5mGw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王添（175407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175407&o=json
            external_identifier: CBDB:175407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:24.586Z
            metadata_json: null
        - id: cs_zfPrjguFLrkbHao7t9cJoQ
          claim_id: c_m3wz1oJxYwLtKgmjnD7afG
          source_id: s_fmTBFRP6UZ4fK1GZjEfVZU
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fmTBFRP6UZ4fK1GZjEfVZU
            source_type: api_record
            title: 维基数据：王添（Q45657810）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657810
            external_identifier: Q45657810
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.425Z
            metadata_json: null
        - id: cs_wysM9FbfxC1HNQG19ZkZKE
          claim_id: c_m3wz1oJxYwLtKgmjnD7afG
          source_id: s_Sw97HPd7Fe46sQh4RLCNGi
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Sw97HPd7Fe46sQh4RLCNGi
            source_type: api_record
            title: 维基数据：王检（Q45659357）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659357
            external_identifier: Q45659357
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_nEPrMKLf8CSKCJekFaQdaf
          claim_id: c_m3wz1oJxYwLtKgmjnD7afG
          source_id: s_hELwR14JcJR4bXoJDih8yb
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_hELwR14JcJR4bXoJDih8yb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王檢（175433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175433&o=json
            external_identifier: CBDB:175433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.861Z
            metadata_json: null
      object_person:
        id: p_KrQPoCtGgBA1JmWKQJxS4S
        status: active
        display_name: 王检
        merged_into_person_id: null
    - claim:
        id: c_1oyLGFHixG1ftCTHRsLc1Z
        subject_person_id: p_zkLScucBk4JK57QATK1P5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WraTkBN5C4QZUftfcAFUgW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_gLwGA5BY3XAeX55qzMYPpP
          claim_id: c_1oyLGFHixG1ftCTHRsLc1Z
          source_id: s_fmTBFRP6UZ4fK1GZjEfVZU
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fmTBFRP6UZ4fK1GZjEfVZU
            source_type: api_record
            title: 维基数据：王添（Q45657810）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657810
            external_identifier: Q45657810
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.425Z
            metadata_json: null
        - id: cs_gM79W95GAvuL6qVWY5aEh1
          claim_id: c_1oyLGFHixG1ftCTHRsLc1Z
          source_id: s_z74bZ49AQL7hc4CKyB5mGw
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_z74bZ49AQL7hc4CKyB5mGw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王添（175407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175407&o=json
            external_identifier: CBDB:175407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:24.586Z
            metadata_json: null
        - id: cs_e9dk6rVYjt9G2k2AWaB5t2
          claim_id: c_1oyLGFHixG1ftCTHRsLc1Z
          source_id: s_52KNN14n2Xx8Po1X696bwZ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_52KNN14n2Xx8Po1X696bwZ
            source_type: api_record
            title: 维基数据：王逷（Q45659831）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659831
            external_identifier: Q45659831
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.711Z
            metadata_json: null
        - id: cs_K5Fhcigy1X5A1eiuxtUf5F
          claim_id: c_1oyLGFHixG1ftCTHRsLc1Z
          source_id: s_8j4ztgmttyK1yniG3WtRWN
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_8j4ztgmttyK1yniG3WtRWN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逷（175441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175441&o=json
            external_identifier: CBDB:175441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.855Z
            metadata_json: null
      object_person:
        id: p_WraTkBN5C4QZUftfcAFUgW
        status: active
        display_name: 王逷
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王添

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王添（卒于820年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任司農卿。中国历代人物传记资料库（CBDB）以人物编号 175407 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 820年 | accepted |
| name.primary | 王添 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HBYpSKCLuQzJprEM9fFEYP | 王珪 | accepted |
| children | p_RtF59FE7pJYv9Y4pRvMqLB | 王锐 | accepted |
| children | p_J3uEtABU9yZpLVpDBsGAq3 | 王迈 | accepted |
| children | p_ABttrGR9ETMfaUWfuE5Xsi | 王逸 | accepted |
| children | p_R43S4tSNhE9EYwSxHQi8DK | 王迺 | accepted |
| children | p_KrQPoCtGgBA1JmWKQJxS4S | 王检 | accepted |
| children | p_WraTkBN5C4QZUftfcAFUgW | 王逷 | accepted |

## 外部来源

- [维基数据：王珪（Q45657394）](https://www.wikidata.org/wiki/Q45657394)
- [维基数据：王检（Q45659357）](https://www.wikidata.org/wiki/Q45659357)
- [维基数据：王迈（Q45657929）](https://www.wikidata.org/wiki/Q45657929)
- [维基数据：王迺（Q45658880）](https://www.wikidata.org/wiki/Q45658880)
- [维基数据：王锐（Q45657869）](https://www.wikidata.org/wiki/Q45657869)
- [维基数据：王逷（Q45659831）](https://www.wikidata.org/wiki/Q45659831)
- [维基数据：王添（Q45657810）](https://www.wikidata.org/wiki/Q45657810)
- [维基数据：王逸（Q45658647）](https://www.wikidata.org/wiki/Q45658647)
- [CBDB 中国历代人物传记资料库：王珪（175400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175400&o=json)
- [CBDB 中国历代人物传记资料库：王檢（175433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175433&o=json)
- [CBDB 中国历代人物传记资料库：王邁（175409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175409&o=json)
- [CBDB 中国历代人物传记资料库：王迺（175425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175425&o=json)
- [CBDB 中国历代人物传记资料库：王銳（175408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175408&o=json)
- [CBDB 中国历代人物传记资料库：王逷（175441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175441&o=json)
- [CBDB 中国历代人物传记资料库：王添（175407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175407&o=json)
- [CBDB 中国历代人物传记资料库：王逸（175421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175421&o=json)
