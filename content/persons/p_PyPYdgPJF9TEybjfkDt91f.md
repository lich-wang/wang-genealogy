---
schema: wang-person/v1
id: p_PyPYdgPJF9TEybjfkDt91f
status: active
merged_into: null
display_name: 王晙
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZDi54hiUug6oaf2KY1B2ua
        subject_person_id: p_PyPYdgPJF9TEybjfkDt91f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晙，唐人物。CBDB 记录其籍贯记录为咸陽，身份包括詩人，曾任大使、殿中侍御史。中国历代人物传记资料库（CBDB）以人物编号 91993 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ERAfXEDhsK2hQ2enA8LkWY
          claim_id: c_ZDi54hiUug6oaf2KY1B2ua
          source_id: s_EXcmMaeYVJwk593LFj6s41
          stance: supports
          locator: null
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
        - id: cs_ZwTeoAwmmUHALXR-B7y-Kk
          claim_id: c_ZDi54hiUug6oaf2KY1B2ua
          source_id: s_ncsTj4zGGPHFgrCZYwyE47
          stance: supports
          locator: CBDB:91993
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2SokGWNYVcy3yK7jqBhv3V
        subject_person_id: p_PyPYdgPJF9TEybjfkDt91f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晙
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kPmp8tmELGNtmiJAeHq2Q2
          claim_id: c_2SokGWNYVcy3yK7jqBhv3V
          source_id: s_ncsTj4zGGPHFgrCZYwyE47
          stance: supports
          locator: Q45439660
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_tNNyA9JBr62E6uodpiT4UB
          claim_id: c_2SokGWNYVcy3yK7jqBhv3V
          source_id: s_EXcmMaeYVJwk593LFj6s41
          stance: supports
          locator: Q45439660
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
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_71u6B23sjvkUm8qBqzXTtP
        subject_person_id: p_ZSBMnefxQNX4zwGDPTrYX5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PyPYdgPJF9TEybjfkDt91f
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9WSeAwPP8QpEE8cjHbtiXV
          claim_id: c_71u6B23sjvkUm8qBqzXTtP
          source_id: s_7Npqc2V4HZVXpCQ8BDZJQV
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7Npqc2V4HZVXpCQ8BDZJQV
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綝（175451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175451&o=json
            external_identifier: CBDB:175451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:19.563Z
            metadata_json: null
        - id: cs_PJ9BothTdVd7uUNaP1dMHN
          claim_id: c_71u6B23sjvkUm8qBqzXTtP
          source_id: s_CTC777F2HSKbjF4ZdjzJur
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_CTC777F2HSKbjF4ZdjzJur
            source_type: api_record
            title: 维基数据：王方庆（Q7478164）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7478164
            external_identifier: Q7478164
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:19.421Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%96%B9%E5%BA%86
        - id: cs_tvUEpSWnr6FKzQWEDd4syd
          claim_id: c_71u6B23sjvkUm8qBqzXTtP
          source_id: s_EXcmMaeYVJwk593LFj6s41
          stance: supports
          locator: P22（父）
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
        - id: cs_EuyNnzqQK8cNsTMFTpfnms
          claim_id: c_71u6B23sjvkUm8qBqzXTtP
          source_id: s_ncsTj4zGGPHFgrCZYwyE47
          stance: supports
          locator: 亲属关系：父
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
      object_person:
        id: p_ZSBMnefxQNX4zwGDPTrYX5
        status: active
        display_name: 王方庆
        merged_into_person_id: null
    - claim:
        id: c_SUyG4VCA3o6n5hcn5L5VqY
        subject_person_id: p_oXeM1DhnzL8dBtmUo4Qtqd
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_PyPYdgPJF9TEybjfkDt91f
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MptggR4FcjmMYqXwavN4Eo
          claim_id: c_SUyG4VCA3o6n5hcn5L5VqY
          source_id: s_T1ghCs1VBUTNw5nSgpKgZg
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：Pers DB / 唐代人物知識ベース
          source:
            id: s_T1ghCs1VBUTNw5nSgpKgZg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王琳（91982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91982&o=json
            external_identifier: CBDB:91982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:43.980Z
            metadata_json: null
        - id: cs_h9XZw5somtAPzPXG4XZmjA
          claim_id: c_SUyG4VCA3o6n5hcn5L5VqY
          source_id: s_4GtVCfCGU2oMvNkWfi1429
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_4GtVCfCGU2oMvNkWfi1429
            source_type: api_record
            title: 维基数据：王琳（Q45438985）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45438985
            external_identifier: Q45438985
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:43.809Z
            metadata_json: null
        - id: cs_kjNJNqQCoZC63yM6cBox69
          claim_id: c_SUyG4VCA3o6n5hcn5L5VqY
          source_id: s_EXcmMaeYVJwk593LFj6s41
          stance: supports
          locator: P22（父）
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
      object_person:
        id: p_oXeM1DhnzL8dBtmUo4Qtqd
        status: active
        display_name: 王晙
        merged_into_person_id: null
  children:
    - claim:
        id: c_8yBaqJSKoSKLASP4K6G7Un
        subject_person_id: p_PyPYdgPJF9TEybjfkDt91f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NEX3V7ji6CnpRpuLcDnCPx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_tkxP25MFLze3UiBKjHbMSd
          claim_id: c_8yBaqJSKoSKLASP4K6G7Un
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
        - id: cs_tycnt9jMSUCnHra5q4RnPM
          claim_id: c_8yBaqJSKoSKLASP4K6G7Un
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
        - id: cs_gCkyp6rx4vX1U5Ra8W84Yy
          claim_id: c_8yBaqJSKoSKLASP4K6G7Un
          source_id: s_8vFzQGwKDDpx148f99y6kS
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8vFzQGwKDDpx148f99y6kS
            source_type: api_record
            title: 维基数据：王份（Q45667510）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667510
            external_identifier: Q45667510
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.290Z
            metadata_json: null
        - id: cs_y8tMxvmqfcGYzTgnuubfkB
          claim_id: c_8yBaqJSKoSKLASP4K6G7Un
          source_id: s_hT1ik3fzWZsGvMMc989rK3
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_hT1ik3fzWZsGvMMc989rK3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王份（175579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175579&o=json
            external_identifier: CBDB:175579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:38.466Z
            metadata_json: null
      object_person:
        id: p_NEX3V7ji6CnpRpuLcDnCPx
        status: active
        display_name: 王份
        merged_into_person_id: null
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
        id: p_DbKg6Z6wj4BMKWgbEDKMoY
        status: active
        display_name: 王佾
        merged_into_person_id: null
    - claim:
        id: c_qNGTAjEyFFgKziTDWSRQRY
        subject_person_id: p_PyPYdgPJF9TEybjfkDt91f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4x7eJgoh5LankFk1Sq6um4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CFEnqjdW55ejpm7d3YwovP
          claim_id: c_qNGTAjEyFFgKziTDWSRQRY
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
        - id: cs_QvH99ENJt87aJQyqJco42F
          claim_id: c_qNGTAjEyFFgKziTDWSRQRY
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
        - id: cs_H8YtBKa7eveq3wzK6dwqA3
          claim_id: c_qNGTAjEyFFgKziTDWSRQRY
          source_id: s_8cK6Us3cWJD533GfAR4DYP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8cK6Us3cWJD533GfAR4DYP
            source_type: api_record
            title: 维基数据：王侗（Q45668522）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668522
            external_identifier: Q45668522
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.183Z
            metadata_json: null
        - id: cs_nYzPYLVGShmnEEt5wokgd3
          claim_id: c_qNGTAjEyFFgKziTDWSRQRY
          source_id: s_wn4qsWnKRcEe1cwo1fM5fB
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_wn4qsWnKRcEe1cwo1fM5fB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王侗（175599）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175599&o=json
            external_identifier: CBDB:175599
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:40.328Z
            metadata_json: null
      object_person:
        id: p_4x7eJgoh5LankFk1Sq6um4
        status: active
        display_name: 王侗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王晙，唐人物。CBDB 记录其籍贯记录为咸陽，身份包括詩人，曾任大使、殿中侍御史。中国历代人物传记资料库（CBDB）以人物编号 91993 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王晙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZSBMnefxQNX4zwGDPTrYX5 | 王方庆 | accepted |
| parents | p_oXeM1DhnzL8dBtmUo4Qtqd | 王晙 | accepted |
| children | p_NEX3V7ji6CnpRpuLcDnCPx | 王份 | accepted |
| children | p_DbKg6Z6wj4BMKWgbEDKMoY | 王佾 | accepted |
| children | p_4x7eJgoh5LankFk1Sq6um4 | 王侗 | accepted |

## 外部来源

- [维基数据：王侗（Q45668522）](https://www.wikidata.org/wiki/Q45668522)
- [维基数据：王方庆（Q7478164）](https://www.wikidata.org/wiki/Q7478164)
- [维基数据：王份（Q45667510）](https://www.wikidata.org/wiki/Q45667510)
- [维基数据：王晙（Q45439660）](https://www.wikidata.org/wiki/Q45439660)
- [维基数据：王琳（Q45438985）](https://www.wikidata.org/wiki/Q45438985)
- [维基数据：王佾（Q45667814）](https://www.wikidata.org/wiki/Q45667814)
- [CBDB 中国历代人物传记资料库：王綝（175451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175451&o=json)
- [CBDB 中国历代人物传记资料库：王侗（175599）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175599&o=json)
- [CBDB 中国历代人物传记资料库：王份（175579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175579&o=json)
- [CBDB 中国历代人物传记资料库：王晙（91993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91993&o=json)
- [CBDB 中国历代人物传记资料库：王琳（91982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91982&o=json)
- [CBDB 中国历代人物传记资料库：王佾（175585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175585&o=json)
