---
schema: wang-person/v1
id: p_x7oJfELhd7NSvt2eNbNHmH
status: active
merged_into: null
display_name: 王景
cbdb_id: 175355
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WfDCQEnP6PYoBYaELcNDP5
        subject_person_id: p_x7oJfELhd7NSvt2eNbNHmH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景（卒于733年），唐人物。CBDB 记录其籍贯记录为京兆府，身份包括詩人，曾任州刺史。中国历代人物传记资料库（CBDB）以人物编号 175355 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CSeC6r4YTb6mwno7v2dCJx
          claim_id: c_WfDCQEnP6PYoBYaELcNDP5
          source_id: s_qZACLc9edrwCBZHy8db65x
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_qZACLc9edrwCBZHy8db65x
            source_type: api_record
            title: 维基数据：王景（Q45654870）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654870
            external_identifier: Q45654870
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.651Z
            metadata_json: null
        - id: cs_1dYX5CPBLHPODDrC21wh4e
          claim_id: c_WfDCQEnP6PYoBYaELcNDP5
          source_id: s_7E1ug3Kpns8EmbLJFG6nt6
          stance: supports
          locator: CBDB:175355
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7E1ug3Kpns8EmbLJFG6nt6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王景（175355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175355&o=json
            external_identifier: CBDB:175355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.816Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_TjFcG35v5U4rxyq4ykPRv7
        subject_person_id: p_x7oJfELhd7NSvt2eNbNHmH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 733年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0733-01-01
            latest: 0733-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nCGRYwcFt9BFqtf2eAL79h
          claim_id: c_TjFcG35v5U4rxyq4ykPRv7
          source_id: s_qZACLc9edrwCBZHy8db65x
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_qZACLc9edrwCBZHy8db65x
            source_type: api_record
            title: 维基数据：王景（Q45654870）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654870
            external_identifier: Q45654870
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.651Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_b9KzWsJLAbxAPzcN7TBpiJ
        subject_person_id: p_x7oJfELhd7NSvt2eNbNHmH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZkRyTSbG8b9apSd7c8MydP
          claim_id: c_b9KzWsJLAbxAPzcN7TBpiJ
          source_id: s_qZACLc9edrwCBZHy8db65x
          stance: supports
          locator: Q45654870
          quotation: null
          interpretation_note: null
          source:
            id: s_qZACLc9edrwCBZHy8db65x
            source_type: api_record
            title: 维基数据：王景（Q45654870）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654870
            external_identifier: Q45654870
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.651Z
            metadata_json: null
        - id: cs_jd6bvG4gnDv2WqY5ZWkvJa
          claim_id: c_b9KzWsJLAbxAPzcN7TBpiJ
          source_id: s_7E1ug3Kpns8EmbLJFG6nt6
          stance: supports
          locator: Q45654870
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6AgNGkzJ4oe86NZ7m7cBZT
        subject_person_id: p_QAy8esGqXh4jpJu14jC2nj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x7oJfELhd7NSvt2eNbNHmH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_7LA3X1tTUk6ai44ntCXjUT
          claim_id: c_6AgNGkzJ4oe86NZ7m7cBZT
          source_id: s_h2mefce4DJDBc45VEYT8g6
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_h2mefce4DJDBc45VEYT8g6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王方則（175354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175354&o=json
            external_identifier: CBDB:175354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:21.773Z
            metadata_json: null
        - id: cs_mMi2jfGWn7Aj8qyxMpEwmx
          claim_id: c_6AgNGkzJ4oe86NZ7m7cBZT
          source_id: s_PEi5PX3u187bT4kpf14tBk
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_PEi5PX3u187bT4kpf14tBk
            source_type: api_record
            title: 维基数据：王方则（Q45654812）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654812
            external_identifier: Q45654812
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:21.609Z
            metadata_json: null
        - id: cs_RbaVEQAzYiww1obfbpYVr7
          claim_id: c_6AgNGkzJ4oe86NZ7m7cBZT
          source_id: s_qZACLc9edrwCBZHy8db65x
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_qZACLc9edrwCBZHy8db65x
            source_type: api_record
            title: 维基数据：王景（Q45654870）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654870
            external_identifier: Q45654870
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.651Z
            metadata_json: null
        - id: cs_cTX6GgqBai4KVNGMYECAd6
          claim_id: c_6AgNGkzJ4oe86NZ7m7cBZT
          source_id: s_7E1ug3Kpns8EmbLJFG6nt6
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7E1ug3Kpns8EmbLJFG6nt6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王景（175355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175355&o=json
            external_identifier: CBDB:175355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.816Z
            metadata_json: null
      object_person:
        id: p_QAy8esGqXh4jpJu14jC2nj
        status: active
        display_name: 王方则
        merged_into_person_id: null
  children:
    - claim:
        id: c_JBp3gbg23FjgdnrMSKGBDA
        subject_person_id: p_x7oJfELhd7NSvt2eNbNHmH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MCAH5GohSRuRz4F3CknZEk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_AYDw75vcGrmz9URptwLzJH
          claim_id: c_JBp3gbg23FjgdnrMSKGBDA
          source_id: s_qZACLc9edrwCBZHy8db65x
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_qZACLc9edrwCBZHy8db65x
            source_type: api_record
            title: 维基数据：王景（Q45654870）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654870
            external_identifier: Q45654870
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.651Z
            metadata_json: null
        - id: cs_hzJuHqi3dK6N5fp7KJ4Q2y
          claim_id: c_JBp3gbg23FjgdnrMSKGBDA
          source_id: s_7E1ug3Kpns8EmbLJFG6nt6
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7E1ug3Kpns8EmbLJFG6nt6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王景（175355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175355&o=json
            external_identifier: CBDB:175355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.816Z
            metadata_json: null
        - id: cs_yGgXrowv1fCDtbWqAxmKLm
          claim_id: c_JBp3gbg23FjgdnrMSKGBDA
          source_id: s_XjPUPvCFpmSkkaZ4Q5AEYL
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_XjPUPvCFpmSkkaZ4Q5AEYL
            source_type: api_record
            title: 维基数据：王绾（Q45654930）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654930
            external_identifier: Q45654930
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:46.888Z
            metadata_json: null
        - id: cs_QQnmJod1HbPxadk7PwcM8s
          claim_id: c_JBp3gbg23FjgdnrMSKGBDA
          source_id: s_CsLN6HHAeyUr1KL8zKMeg3
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_CsLN6HHAeyUr1KL8zKMeg3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綰（175356）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175356&o=json
            external_identifier: CBDB:175356
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:47.050Z
            metadata_json: null
      object_person:
        id: p_MCAH5GohSRuRz4F3CknZEk
        status: active
        display_name: 王绾
        merged_into_person_id: null
    - claim:
        id: c_ssJvJvZ3EDomEM1rT2sCmo
        subject_person_id: p_x7oJfELhd7NSvt2eNbNHmH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MTnHxih66t5Q2EU2gmw6Yp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_7DsEfN9qGor3NERzwbQmFi
          claim_id: c_ssJvJvZ3EDomEM1rT2sCmo
          source_id: s_7E1ug3Kpns8EmbLJFG6nt6
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7E1ug3Kpns8EmbLJFG6nt6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王景（175355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175355&o=json
            external_identifier: CBDB:175355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.816Z
            metadata_json: null
        - id: cs_Sq7PFJSYEScLABcD54AYQi
          claim_id: c_ssJvJvZ3EDomEM1rT2sCmo
          source_id: s_qZACLc9edrwCBZHy8db65x
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_qZACLc9edrwCBZHy8db65x
            source_type: api_record
            title: 维基数据：王景（Q45654870）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654870
            external_identifier: Q45654870
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.651Z
            metadata_json: null
        - id: cs_e9hZZDfJKkAbi4offsRKYm
          claim_id: c_ssJvJvZ3EDomEM1rT2sCmo
          source_id: s_uko3BmFDUM2ZfvumVYRJJx
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_uko3BmFDUM2ZfvumVYRJJx
            source_type: api_record
            title: 维基数据：王绮（Q45655107）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655107
            external_identifier: Q45655107
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:46.888Z
            metadata_json: null
        - id: cs_Lr8E8vCbFMrw7rjxx13A11
          claim_id: c_ssJvJvZ3EDomEM1rT2sCmo
          source_id: s_4GW5k2HUiZQ22sUMCsXvaD
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_4GW5k2HUiZQ22sUMCsXvaD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綺（175359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175359&o=json
            external_identifier: CBDB:175359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:47.043Z
            metadata_json: null
      object_person:
        id: p_MTnHxih66t5Q2EU2gmw6Yp
        status: active
        display_name: 王绮
        merged_into_person_id: null
    - claim:
        id: c_E7VLWa8ShPiGhHCNJcoZ52
        subject_person_id: p_x7oJfELhd7NSvt2eNbNHmH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B6Qa1QA1yXEX5CeG3LFhNd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_LH1c41XCZh9TpeNxhyo2fp
          claim_id: c_E7VLWa8ShPiGhHCNJcoZ52
          source_id: s_qZACLc9edrwCBZHy8db65x
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_qZACLc9edrwCBZHy8db65x
            source_type: api_record
            title: 维基数据：王景（Q45654870）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654870
            external_identifier: Q45654870
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.651Z
            metadata_json: null
        - id: cs_x8DhSfdbm6kiwMn47j9qgn
          claim_id: c_E7VLWa8ShPiGhHCNJcoZ52
          source_id: s_7E1ug3Kpns8EmbLJFG6nt6
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7E1ug3Kpns8EmbLJFG6nt6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王景（175355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175355&o=json
            external_identifier: CBDB:175355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.816Z
            metadata_json: null
        - id: cs_54ByR5b7Dd2bZkBE4TEL16
          claim_id: c_E7VLWa8ShPiGhHCNJcoZ52
          source_id: s_PJFu4EjsuoKoC2HNaKEbB7
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_PJFu4EjsuoKoC2HNaKEbB7
            source_type: api_record
            title: 维基数据：王纯（Q45655286）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655286
            external_identifier: Q45655286
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:48.584Z
            metadata_json: null
        - id: cs_VSHYHCyJoCeBpoPuAV3S37
          claim_id: c_E7VLWa8ShPiGhHCNJcoZ52
          source_id: s_CBiCsWpLMkRQaabaYLQHgN
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_CBiCsWpLMkRQaabaYLQHgN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王純（175362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175362&o=json
            external_identifier: CBDB:175362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:48.739Z
            metadata_json: null
      object_person:
        id: p_B6Qa1QA1yXEX5CeG3LFhNd
        status: active
        display_name: 王纯
        merged_into_person_id: null
    - claim:
        id: c_EXU4bCT7ghnoGasEYh2M7w
        subject_person_id: p_x7oJfELhd7NSvt2eNbNHmH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GBBpSDJRZ2o5sLt8iDjMAK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_SRstfVuc39UkNC6Meys2V5
          claim_id: c_EXU4bCT7ghnoGasEYh2M7w
          source_id: s_qZACLc9edrwCBZHy8db65x
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_qZACLc9edrwCBZHy8db65x
            source_type: api_record
            title: 维基数据：王景（Q45654870）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654870
            external_identifier: Q45654870
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.651Z
            metadata_json: null
        - id: cs_unSggrBJs2QUM7e4RFTWQx
          claim_id: c_EXU4bCT7ghnoGasEYh2M7w
          source_id: s_7E1ug3Kpns8EmbLJFG6nt6
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7E1ug3Kpns8EmbLJFG6nt6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王景（175355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175355&o=json
            external_identifier: CBDB:175355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.816Z
            metadata_json: null
        - id: cs_9GG542wrNDyXHPAxPQF9Ss
          claim_id: c_EXU4bCT7ghnoGasEYh2M7w
          source_id: s_qH333uLySYa6KQbZBj9j2g
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_qH333uLySYa6KQbZBj9j2g
            source_type: api_record
            title: 维基数据：王绪（Q45655469）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655469
            external_identifier: Q45655469
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:48.584Z
            metadata_json: null
        - id: cs_osac8gAgDN4wkNLGimtvW5
          claim_id: c_EXU4bCT7ghnoGasEYh2M7w
          source_id: s_x8W9a8Aas8KB2KfiQ1DFoK
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_x8W9a8Aas8KB2KfiQ1DFoK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王緒（175365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175365&o=json
            external_identifier: CBDB:175365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:48.746Z
            metadata_json: null
      object_person:
        id: p_GBBpSDJRZ2o5sLt8iDjMAK
        status: active
        display_name: 王绪
        merged_into_person_id: null
    - claim:
        id: c_aT7dEBfk2mZU2TkP9wP5Ao
        subject_person_id: p_x7oJfELhd7NSvt2eNbNHmH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yyQ7ZP52RoTtC1FN61MxCM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4LVk7WwWEYSJLr2WUdKmjG
          claim_id: c_aT7dEBfk2mZU2TkP9wP5Ao
          source_id: s_qZACLc9edrwCBZHy8db65x
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_qZACLc9edrwCBZHy8db65x
            source_type: api_record
            title: 维基数据：王景（Q45654870）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654870
            external_identifier: Q45654870
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.651Z
            metadata_json: null
        - id: cs_MSHgLoph6JGAu9siKnKBaj
          claim_id: c_aT7dEBfk2mZU2TkP9wP5Ao
          source_id: s_7E1ug3Kpns8EmbLJFG6nt6
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7E1ug3Kpns8EmbLJFG6nt6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王景（175355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175355&o=json
            external_identifier: CBDB:175355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.816Z
            metadata_json: null
        - id: cs_gnKpgGzDtpUxqtuknv15RJ
          claim_id: c_aT7dEBfk2mZU2TkP9wP5Ao
          source_id: s_ACcDyTeLyUAmUz489fFseN
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ACcDyTeLyUAmUz489fFseN
            source_type: api_record
            title: 维基数据：王练（Q45655768）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655768
            external_identifier: Q45655768
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:48.584Z
            metadata_json: null
        - id: cs_S9cNhbeQM8TjzVfPv1mo6Y
          claim_id: c_aT7dEBfk2mZU2TkP9wP5Ao
          source_id: s_hrKMXW9RBdRKgXM8XWEY4h
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_hrKMXW9RBdRKgXM8XWEY4h
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王練（175370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175370&o=json
            external_identifier: CBDB:175370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:48.744Z
            metadata_json: null
      object_person:
        id: p_yyQ7ZP52RoTtC1FN61MxCM
        status: active
        display_name: 王练
        merged_into_person_id: null
    - claim:
        id: c_K7zjUDqLx2guuqMi3nfwNC
        subject_person_id: p_x7oJfELhd7NSvt2eNbNHmH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yZzmiyWFSkPUeKd2ptBucj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3AxNZDfQF6Z3Ch36ZqwKk5
          claim_id: c_K7zjUDqLx2guuqMi3nfwNC
          source_id: s_7E1ug3Kpns8EmbLJFG6nt6
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7E1ug3Kpns8EmbLJFG6nt6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王景（175355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175355&o=json
            external_identifier: CBDB:175355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.816Z
            metadata_json: null
        - id: cs_DHyLXuVQxA2X8QgRFoBYoK
          claim_id: c_K7zjUDqLx2guuqMi3nfwNC
          source_id: s_qZACLc9edrwCBZHy8db65x
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_qZACLc9edrwCBZHy8db65x
            source_type: api_record
            title: 维基数据：王景（Q45654870）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654870
            external_identifier: Q45654870
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.651Z
            metadata_json: null
        - id: cs_CU7iKPuHCK181QHLFPCwHg
          claim_id: c_K7zjUDqLx2guuqMi3nfwNC
          source_id: s_CQUsTAJ4bpmr1A7HPu1W2M
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CQUsTAJ4bpmr1A7HPu1W2M
            source_type: api_record
            title: 维基数据：王纾（Q45655827）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655827
            external_identifier: Q45655827
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:48.584Z
            metadata_json: null
        - id: cs_KFKfDKnYo5zQ5BAUWFnges
          claim_id: c_K7zjUDqLx2guuqMi3nfwNC
          source_id: s_JLX6SpaZGquoEit7yFjuVC
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_JLX6SpaZGquoEit7yFjuVC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王紓（175371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175371&o=json
            external_identifier: CBDB:175371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:48.740Z
            metadata_json: null
      object_person:
        id: p_yZzmiyWFSkPUeKd2ptBucj
        status: active
        display_name: 王纾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景（卒于733年），唐人物。CBDB 记录其籍贯记录为京兆府，身份包括詩人，曾任州刺史。中国历代人物传记资料库（CBDB）以人物编号 175355 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 733年 | accepted |
| name.primary | 王景 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QAy8esGqXh4jpJu14jC2nj | 王方则 | accepted |
| children | p_MCAH5GohSRuRz4F3CknZEk | 王绾 | accepted |
| children | p_MTnHxih66t5Q2EU2gmw6Yp | 王绮 | accepted |
| children | p_B6Qa1QA1yXEX5CeG3LFhNd | 王纯 | accepted |
| children | p_GBBpSDJRZ2o5sLt8iDjMAK | 王绪 | accepted |
| children | p_yyQ7ZP52RoTtC1FN61MxCM | 王练 | accepted |
| children | p_yZzmiyWFSkPUeKd2ptBucj | 王纾 | accepted |

## 外部来源

- [维基数据：王纯（Q45655286）](https://www.wikidata.org/wiki/Q45655286)
- [维基数据：王方则（Q45654812）](https://www.wikidata.org/wiki/Q45654812)
- [维基数据：王景（Q45654870）](https://www.wikidata.org/wiki/Q45654870)
- [维基数据：王练（Q45655768）](https://www.wikidata.org/wiki/Q45655768)
- [维基数据：王绮（Q45655107）](https://www.wikidata.org/wiki/Q45655107)
- [维基数据：王纾（Q45655827）](https://www.wikidata.org/wiki/Q45655827)
- [维基数据：王绾（Q45654930）](https://www.wikidata.org/wiki/Q45654930)
- [维基数据：王绪（Q45655469）](https://www.wikidata.org/wiki/Q45655469)
- [CBDB 中国历代人物传记资料库：王純（175362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175362&o=json)
- [CBDB 中国历代人物传记资料库：王方則（175354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175354&o=json)
- [CBDB 中国历代人物传记资料库：王景（175355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175355&o=json)
- [CBDB 中国历代人物传记资料库：王練（175370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175370&o=json)
- [CBDB 中国历代人物传记资料库：王綺（175359）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175359&o=json)
- [CBDB 中国历代人物传记资料库：王紓（175371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175371&o=json)
- [CBDB 中国历代人物传记资料库：王綰（175356）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175356&o=json)
- [CBDB 中国历代人物传记资料库：王緒（175365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175365&o=json)
