---
schema: wang-person/v1
id: p_DbKg6Z6wj4BMKWgbEDKMoY
status: active
merged_into: null
display_name: 王佾
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mYRM2GGwCZu1kc8iU1BbqT
        subject_person_id: p_DbKg6Z6wj4BMKWgbEDKMoY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佾（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175585 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ccwf4MA9sK4E9mieQmXrHz
          claim_id: c_mYRM2GGwCZu1kc8iU1BbqT
          source_id: s_7N34zb2284KFZYJKH7nrDo
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7N34zb2284KFZYJKH7nrDo
            source_type: api_record
            title: 维基数据：王佾（Q45667814）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667814
            external_identifier: Q45667814
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.291Z
            metadata_json: null
        - id: cs_IZsijaJilDBCIIdyvsOsMe
          claim_id: c_mYRM2GGwCZu1kc8iU1BbqT
          source_id: s_recuu9Amqp1U8r1h1hCCMC
          stance: supports
          locator: CBDB:175585
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_recuu9Amqp1U8r1h1hCCMC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佾（175585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175585&o=json
            external_identifier: CBDB:175585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:38.458Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_h1EGRGUckSnAWRjCf7rfmT
        subject_person_id: p_DbKg6Z6wj4BMKWgbEDKMoY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 746年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0746-01-01
            latest: 0746-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GHqkrCjZMgLneNad3phUbJ
          claim_id: c_h1EGRGUckSnAWRjCf7rfmT
          source_id: s_7N34zb2284KFZYJKH7nrDo
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7N34zb2284KFZYJKH7nrDo
            source_type: api_record
            title: 维基数据：王佾（Q45667814）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667814
            external_identifier: Q45667814
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.291Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nWYS4Tkqq2Kw3BnezNqzQo
        subject_person_id: p_DbKg6Z6wj4BMKWgbEDKMoY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佾
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ECsNJ1dS3LhKFk3K1fRMpi
          claim_id: c_nWYS4Tkqq2Kw3BnezNqzQo
          source_id: s_recuu9Amqp1U8r1h1hCCMC
          stance: supports
          locator: Q45667814
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_SF7VjjEg6LDWuay1AQ1epJ
          claim_id: c_nWYS4Tkqq2Kw3BnezNqzQo
          source_id: s_7N34zb2284KFZYJKH7nrDo
          stance: supports
          locator: Q45667814
          quotation: null
          interpretation_note: null
          source:
            id: s_7N34zb2284KFZYJKH7nrDo
            source_type: api_record
            title: 维基数据：王佾（Q45667814）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667814
            external_identifier: Q45667814
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.291Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QUxMbr9FoNXBPW4b7ua46H
        subject_person_id: p_PyPYdgPJF9TEybjfkDt91f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DbKg6Z6wj4BMKWgbEDKMoY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_MgmFroWD5cma9TRdPv68hu
          claim_id: c_QUxMbr9FoNXBPW4b7ua46H
          source_id: s_ncsTj4zGGPHFgrCZYwyE47
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ncsTj4zGGPHFgrCZYwyE47
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晙（91993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91993&o=json
            external_identifier: CBDB:91993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:31.346Z
            metadata_json: null
        - id: cs_YBD6NZETHuuLYVzNwfGNCz
          claim_id: c_QUxMbr9FoNXBPW4b7ua46H
          source_id: s_EXcmMaeYVJwk593LFj6s41
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_EXcmMaeYVJwk593LFj6s41
            source_type: api_record
            title: 维基数据：王晙（Q45439660）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45439660
            external_identifier: Q45439660
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:31.027Z
            metadata_json: null
        - id: cs_1FUovQKY7VBHsdCtxJh9Xp
          claim_id: c_QUxMbr9FoNXBPW4b7ua46H
          source_id: s_7N34zb2284KFZYJKH7nrDo
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_7N34zb2284KFZYJKH7nrDo
            source_type: api_record
            title: 维基数据：王佾（Q45667814）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667814
            external_identifier: Q45667814
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.291Z
            metadata_json: null
        - id: cs_o7V15WW2bU967JTsMEYx5J
          claim_id: c_QUxMbr9FoNXBPW4b7ua46H
          source_id: s_recuu9Amqp1U8r1h1hCCMC
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_recuu9Amqp1U8r1h1hCCMC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佾（175585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175585&o=json
            external_identifier: CBDB:175585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:38.458Z
            metadata_json: null
      object_person:
        id: p_PyPYdgPJF9TEybjfkDt91f
        status: active
        display_name: 王晙
        merged_into_person_id: null
  children:
    - claim:
        id: c_VqeaHNwYbP85yUb7ncocLj
        subject_person_id: p_DbKg6Z6wj4BMKWgbEDKMoY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9FvatVLgt41nwWMTrcYVYc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3JANeCd6usvh6ruG2H7BM8
          claim_id: c_VqeaHNwYbP85yUb7ncocLj
          source_id: s_recuu9Amqp1U8r1h1hCCMC
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_recuu9Amqp1U8r1h1hCCMC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佾（175585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175585&o=json
            external_identifier: CBDB:175585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:38.458Z
            metadata_json: null
        - id: cs_YL2Vcxo614LHhLetX2ZVMg
          claim_id: c_VqeaHNwYbP85yUb7ncocLj
          source_id: s_7N34zb2284KFZYJKH7nrDo
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7N34zb2284KFZYJKH7nrDo
            source_type: api_record
            title: 维基数据：王佾（Q45667814）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667814
            external_identifier: Q45667814
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.291Z
            metadata_json: null
        - id: cs_JTxPZ9rwW3s2ZTr3yXj18H
          claim_id: c_VqeaHNwYbP85yUb7ncocLj
          source_id: s_jjQyCgHBXVriQqwXZSeiBT
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_jjQyCgHBXVriQqwXZSeiBT
            source_type: api_record
            title: 维基数据：王和（Q45667864）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667864
            external_identifier: Q45667864
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.699Z
            metadata_json: null
        - id: cs_3UAzot16u8RwNNZ6fCZxqf
          claim_id: c_VqeaHNwYbP85yUb7ncocLj
          source_id: s_pJ1rQVsocoAz4k1nuoWz5g
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_pJ1rQVsocoAz4k1nuoWz5g
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王和（175586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175586&o=json
            external_identifier: CBDB:175586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:48.899Z
            metadata_json: null
      object_person:
        id: p_9FvatVLgt41nwWMTrcYVYc
        status: active
        display_name: 王和
        merged_into_person_id: null
    - claim:
        id: c_hMeKnkEApNAKXj8r26Rs8R
        subject_person_id: p_DbKg6Z6wj4BMKWgbEDKMoY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zf7oFPjrmgHFZY3CMeGN4N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1E9n1D2nBG8AoM4cMg1MUw
          claim_id: c_hMeKnkEApNAKXj8r26Rs8R
          source_id: s_recuu9Amqp1U8r1h1hCCMC
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_recuu9Amqp1U8r1h1hCCMC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佾（175585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175585&o=json
            external_identifier: CBDB:175585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:38.458Z
            metadata_json: null
        - id: cs_AKB5RzTa8GZAJj4B7wLvgM
          claim_id: c_hMeKnkEApNAKXj8r26Rs8R
          source_id: s_7N34zb2284KFZYJKH7nrDo
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7N34zb2284KFZYJKH7nrDo
            source_type: api_record
            title: 维基数据：王佾（Q45667814）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667814
            external_identifier: Q45667814
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.291Z
            metadata_json: null
        - id: cs_Z7TdkZcFHKCVwrEsyCADZS
          claim_id: c_hMeKnkEApNAKXj8r26Rs8R
          source_id: s_px1NUSsYaEBQuTAERBMMR2
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_px1NUSsYaEBQuTAERBMMR2
            source_type: api_record
            title: 维基数据：王雄（Q45668070）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668070
            external_identifier: Q45668070
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.700Z
            metadata_json: null
        - id: cs_oQ4ubBZ3qACZEiQAuhuFtS
          claim_id: c_hMeKnkEApNAKXj8r26Rs8R
          source_id: s_7J6bC9Jw738AyDyjEjmr12
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7J6bC9Jw738AyDyjEjmr12
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王雄（175590）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175590&o=json
            external_identifier: CBDB:175590
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:48.911Z
            metadata_json: null
      object_person:
        id: p_zf7oFPjrmgHFZY3CMeGN4N
        status: active
        display_name: 王雄
        merged_into_person_id: null
    - claim:
        id: c_KyMoJAoctxmijGy8u732Vr
        subject_person_id: p_DbKg6Z6wj4BMKWgbEDKMoY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G13YPoCU5cj4XERmwK9pm6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3qDyjx2E2TG4GNSFuWQDzf
          claim_id: c_KyMoJAoctxmijGy8u732Vr
          source_id: s_recuu9Amqp1U8r1h1hCCMC
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_recuu9Amqp1U8r1h1hCCMC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佾（175585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175585&o=json
            external_identifier: CBDB:175585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:38.458Z
            metadata_json: null
        - id: cs_wJrYqwM5LPV8wLL86PXwSa
          claim_id: c_KyMoJAoctxmijGy8u732Vr
          source_id: s_7N34zb2284KFZYJKH7nrDo
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7N34zb2284KFZYJKH7nrDo
            source_type: api_record
            title: 维基数据：王佾（Q45667814）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667814
            external_identifier: Q45667814
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.291Z
            metadata_json: null
        - id: cs_fD446CuEcH1hQgaXgL4BUp
          claim_id: c_KyMoJAoctxmijGy8u732Vr
          source_id: s_AAYt4Ds2HhAes8BnEpCqNr
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_AAYt4Ds2HhAes8BnEpCqNr
            source_type: api_record
            title: 维基数据：王溥（Q45668121）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668121
            external_identifier: Q45668121
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.700Z
            metadata_json: null
        - id: cs_Xn28UaJsrCmQ26eXAdv8QB
          claim_id: c_KyMoJAoctxmijGy8u732Vr
          source_id: s_n87MvNpCcfqwZ5keZ5Cwf1
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_n87MvNpCcfqwZ5keZ5Cwf1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王溥（175591）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175591&o=json
            external_identifier: CBDB:175591
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:48.912Z
            metadata_json: null
      object_person:
        id: p_G13YPoCU5cj4XERmwK9pm6
        status: active
        display_name: 王溥
        merged_into_person_id: null
    - claim:
        id: c_pctQsHWJ7AnbvZVGEHgexV
        subject_person_id: p_DbKg6Z6wj4BMKWgbEDKMoY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iDjU7xfWF1u1bfDbSWDe7b
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BpW6qrPD9bzS6yHMJCrDD8
          claim_id: c_pctQsHWJ7AnbvZVGEHgexV
          source_id: s_recuu9Amqp1U8r1h1hCCMC
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_recuu9Amqp1U8r1h1hCCMC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佾（175585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175585&o=json
            external_identifier: CBDB:175585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:38.458Z
            metadata_json: null
        - id: cs_fPzmTzCJD4c8M4TryD5ANw
          claim_id: c_pctQsHWJ7AnbvZVGEHgexV
          source_id: s_7N34zb2284KFZYJKH7nrDo
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7N34zb2284KFZYJKH7nrDo
            source_type: api_record
            title: 维基数据：王佾（Q45667814）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667814
            external_identifier: Q45667814
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.291Z
            metadata_json: null
        - id: cs_HtDAo8QMX77fv1fjkGhtJA
          claim_id: c_pctQsHWJ7AnbvZVGEHgexV
          source_id: s_oCtsBQHAxfAi2HUf2GR7z8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_oCtsBQHAxfAi2HUf2GR7z8
            source_type: api_record
            title: 维基数据：王涛（Q45668270）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668270
            external_identifier: Q45668270
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.700Z
            metadata_json: null
        - id: cs_exRp4pxir1ax27tBdLJN44
          claim_id: c_pctQsHWJ7AnbvZVGEHgexV
          source_id: s_19dKF6FW2uFWmfB9JTQYBZ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_19dKF6FW2uFWmfB9JTQYBZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王濤（175594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175594&o=json
            external_identifier: CBDB:175594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:48.866Z
            metadata_json: null
      object_person:
        id: p_iDjU7xfWF1u1bfDbSWDe7b
        status: active
        display_name: 王涛
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王佾（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175585 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 746年 | accepted |
| name.primary | 王佾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PyPYdgPJF9TEybjfkDt91f | 王晙 | accepted |
| children | p_9FvatVLgt41nwWMTrcYVYc | 王和 | accepted |
| children | p_zf7oFPjrmgHFZY3CMeGN4N | 王雄 | accepted |
| children | p_G13YPoCU5cj4XERmwK9pm6 | 王溥 | accepted |
| children | p_iDjU7xfWF1u1bfDbSWDe7b | 王涛 | accepted |

## 外部来源

- [维基数据：王和（Q45667864）](https://www.wikidata.org/wiki/Q45667864)
- [维基数据：王晙（Q45439660）](https://www.wikidata.org/wiki/Q45439660)
- [维基数据：王溥（Q45668121）](https://www.wikidata.org/wiki/Q45668121)
- [维基数据：王涛（Q45668270）](https://www.wikidata.org/wiki/Q45668270)
- [维基数据：王雄（Q45668070）](https://www.wikidata.org/wiki/Q45668070)
- [维基数据：王佾（Q45667814）](https://www.wikidata.org/wiki/Q45667814)
- [CBDB 中国历代人物传记资料库：王和（175586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175586&o=json)
- [CBDB 中国历代人物传记资料库：王晙（91993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91993&o=json)
- [CBDB 中国历代人物传记资料库：王溥（175591）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175591&o=json)
- [CBDB 中国历代人物传记资料库：王濤（175594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175594&o=json)
- [CBDB 中国历代人物传记资料库：王雄（175590）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175590&o=json)
- [CBDB 中国历代人物传记资料库：王佾（175585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175585&o=json)
