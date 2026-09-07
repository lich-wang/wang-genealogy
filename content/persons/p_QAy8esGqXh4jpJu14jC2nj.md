---
schema: wang-person/v1
id: p_QAy8esGqXh4jpJu14jC2nj
status: active
merged_into: null
display_name: 王方则
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1Apz8mEEYm7CP7D8xHpK9E
        subject_person_id: p_QAy8esGqXh4jpJu14jC2nj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方则（卒于696年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任光祿卿。中国历代人物传记资料库（CBDB）以人物编号 175354 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_y4cbyM8EtF1vnkSdZFgrdz
          claim_id: c_1Apz8mEEYm7CP7D8xHpK9E
          source_id: s_PEi5PX3u187bT4kpf14tBk
          stance: supports
          locator: null
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
        - id: cs_NYPt11-em4R6o_iYCWr1qG
          claim_id: c_1Apz8mEEYm7CP7D8xHpK9E
          source_id: s_h2mefce4DJDBc45VEYT8g6
          stance: supports
          locator: CBDB:175354
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6PgSjZN6L8HYrVv7mZjkAY
        subject_person_id: p_QAy8esGqXh4jpJu14jC2nj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 696年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0696-01-01
            latest: 0696-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BNp2nR2CrJ6eYGnd7MYPVy
          claim_id: c_6PgSjZN6L8HYrVv7mZjkAY
          source_id: s_PEi5PX3u187bT4kpf14tBk
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JcF8CuqT2Sa53tMq45rrYh
        subject_person_id: p_QAy8esGqXh4jpJu14jC2nj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方则
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_toE7NqNNZyP5qzRJ4f38Y7
          claim_id: c_JcF8CuqT2Sa53tMq45rrYh
          source_id: s_h2mefce4DJDBc45VEYT8g6
          stance: supports
          locator: Q45654812
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_u9YXkFY4vY56b8Bw2DJ8wz
          claim_id: c_JcF8CuqT2Sa53tMq45rrYh
          source_id: s_PEi5PX3u187bT4kpf14tBk
          stance: supports
          locator: Q45654812
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
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KRHQg6EU4yNvwLnxXEdjq4
        subject_person_id: p_Ghms3xa2yCWnMb7o2tgKE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QAy8esGqXh4jpJu14jC2nj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ivE2aCQaF1HNcb8wQ1z4a7
          claim_id: c_KRHQg6EU4yNvwLnxXEdjq4
          source_id: s_HKQLtTg4KcjMFuMBCVru2Q
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HKQLtTg4KcjMFuMBCVru2Q
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王弘讓（154136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154136&o=json
            external_identifier: CBDB:154136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:03:06.507Z
            metadata_json: null
        - id: cs_srLcXJUz285sJ2fZ6BJDRD
          claim_id: c_KRHQg6EU4yNvwLnxXEdjq4
          source_id: s_j6jdwhiGJQo39kTF1QVLj8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_j6jdwhiGJQo39kTF1QVLj8
            source_type: api_record
            title: 维基数据：王弘让（Q45623145）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623145
            external_identifier: Q45623145
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:03:06.357Z
            metadata_json: null
        - id: cs_WT96nJkU76WUxtHKab4nCj
          claim_id: c_KRHQg6EU4yNvwLnxXEdjq4
          source_id: s_PEi5PX3u187bT4kpf14tBk
          stance: supports
          locator: P22（父）
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
        - id: cs_tpugU3PbXyrnw6BTMjSkDx
          claim_id: c_KRHQg6EU4yNvwLnxXEdjq4
          source_id: s_h2mefce4DJDBc45VEYT8g6
          stance: supports
          locator: 亲属关系：父
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
      object_person:
        id: p_Ghms3xa2yCWnMb7o2tgKE4
        status: active
        display_name: 王弘让
        merged_into_person_id: null
  children:
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
        id: p_x7oJfELhd7NSvt2eNbNHmH
        status: active
        display_name: 王景
        merged_into_person_id: null
    - claim:
        id: c_ZPHJuau838tHjpHkKv96HP
        subject_person_id: p_QAy8esGqXh4jpJu14jC2nj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NQbvRb1nM7Q9W6mBE1QPGm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_N3aZebsAc7N64PhaW7KQzK
          claim_id: c_ZPHJuau838tHjpHkKv96HP
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
        - id: cs_f3s9H4b479pp5g8tbVAJdM
          claim_id: c_ZPHJuau838tHjpHkKv96HP
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
        - id: cs_gHR9NWFy9PeuAVQHFdLYFr
          claim_id: c_ZPHJuau838tHjpHkKv96HP
          source_id: s_NsDg765wETB2ibwwY2Lj5e
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_NsDg765wETB2ibwwY2Lj5e
            source_type: api_record
            title: 维基数据：王晏（Q45655886）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655886
            external_identifier: Q45655886
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.652Z
            metadata_json: null
        - id: cs_f7DftW6Gqg61vDSpJegdHQ
          claim_id: c_ZPHJuau838tHjpHkKv96HP
          source_id: s_1GvDnEMNFL7bVjG46Cxc2S
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_1GvDnEMNFL7bVjG46Cxc2S
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晏（175372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175372&o=json
            external_identifier: CBDB:175372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.794Z
            metadata_json: null
      object_person:
        id: p_NQbvRb1nM7Q9W6mBE1QPGm
        status: active
        display_name: 王晏
        merged_into_person_id: null
    - claim:
        id: c_f4GbQCLZd38kWTmbLB2i2z
        subject_person_id: p_QAy8esGqXh4jpJu14jC2nj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8Gs2T4C5jw8oPYS3DAfCUG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5aAYiP2cbGtfQuYk6kXBPv
          claim_id: c_f4GbQCLZd38kWTmbLB2i2z
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
        - id: cs_91MmmT1r36iFu9NGgW8Yn3
          claim_id: c_f4GbQCLZd38kWTmbLB2i2z
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
        - id: cs_N3hiKpdJDffRPVoJq7iem5
          claim_id: c_f4GbQCLZd38kWTmbLB2i2z
          source_id: s_a52jCCKNJxjWcq4UawS6B5
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_a52jCCKNJxjWcq4UawS6B5
            source_type: api_record
            title: 维基数据：王昱（Q45656128）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656128
            external_identifier: Q45656128
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.652Z
            metadata_json: null
        - id: cs_7xxkJVx49SLdtPrF5QqiZ6
          claim_id: c_f4GbQCLZd38kWTmbLB2i2z
          source_id: s_mUjqkukQ9LG2Zn69Qye22Z
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_mUjqkukQ9LG2Zn69Qye22Z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昱（175376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175376&o=json
            external_identifier: CBDB:175376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.828Z
            metadata_json: null
      object_person:
        id: p_8Gs2T4C5jw8oPYS3DAfCUG
        status: active
        display_name: 王昱
        merged_into_person_id: null
    - claim:
        id: c_Z9wD6SWSAfHacvBUtqoYLJ
        subject_person_id: p_QAy8esGqXh4jpJu14jC2nj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gNNKGh9cA8mj3unQMkURSh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_PJ5GW22CZCGYQHhhBU5gjS
          claim_id: c_Z9wD6SWSAfHacvBUtqoYLJ
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
        - id: cs_SDFwEzmK9S2xwm3gALinAa
          claim_id: c_Z9wD6SWSAfHacvBUtqoYLJ
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
        - id: cs_ak9YJ2sWf7KnUmwN831ein
          claim_id: c_Z9wD6SWSAfHacvBUtqoYLJ
          source_id: s_QQrkFEYA4rGqsNhmtcv3Fp
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_QQrkFEYA4rGqsNhmtcv3Fp
            source_type: api_record
            title: 维基数据：王升（Q45656308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656308
            external_identifier: Q45656308
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_RNTBQJzqY6gB7P95AUTNEG
          claim_id: c_Z9wD6SWSAfHacvBUtqoYLJ
          source_id: s_6PJvQF2kNSdTSx2XaQ7NC3
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_6PJvQF2kNSdTSx2XaQ7NC3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昇（175379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175379&o=json
            external_identifier: CBDB:175379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.513Z
            metadata_json: null
      object_person:
        id: p_gNNKGh9cA8mj3unQMkURSh
        status: active
        display_name: 王升
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王方则

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王方则（卒于696年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任光祿卿。中国历代人物传记资料库（CBDB）以人物编号 175354 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 696年 | accepted |
| name.primary | 王方则 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ghms3xa2yCWnMb7o2tgKE4 | 王弘让 | accepted |
| children | p_x7oJfELhd7NSvt2eNbNHmH | 王景 | accepted |
| children | p_NQbvRb1nM7Q9W6mBE1QPGm | 王晏 | accepted |
| children | p_8Gs2T4C5jw8oPYS3DAfCUG | 王昱 | accepted |
| children | p_gNNKGh9cA8mj3unQMkURSh | 王升 | accepted |

## 外部来源

- [维基数据：王方则（Q45654812）](https://www.wikidata.org/wiki/Q45654812)
- [维基数据：王弘让（Q45623145）](https://www.wikidata.org/wiki/Q45623145)
- [维基数据：王景（Q45654870）](https://www.wikidata.org/wiki/Q45654870)
- [维基数据：王升（Q45656308）](https://www.wikidata.org/wiki/Q45656308)
- [维基数据：王晏（Q45655886）](https://www.wikidata.org/wiki/Q45655886)
- [维基数据：王昱（Q45656128）](https://www.wikidata.org/wiki/Q45656128)
- [CBDB 中国历代人物传记资料库：王方則（175354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175354&o=json)
- [CBDB 中国历代人物传记资料库：王弘讓（154136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154136&o=json)
- [CBDB 中国历代人物传记资料库：王景（175355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175355&o=json)
- [CBDB 中国历代人物传记资料库：王昇（175379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175379&o=json)
- [CBDB 中国历代人物传记资料库：王晏（175372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175372&o=json)
- [CBDB 中国历代人物传记资料库：王昱（175376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175376&o=json)
