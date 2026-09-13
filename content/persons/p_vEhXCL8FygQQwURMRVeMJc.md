---
schema: wang-person/v1
id: p_vEhXCL8FygQQwURMRVeMJc
status: active
merged_into: null
display_name: 王长文
cbdb_id: 175463
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LBJ2ob3gZ6Usd2bhhJ1V7R
        subject_person_id: p_vEhXCL8FygQQwURMRVeMJc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王长文（卒于819年），唐人物。籍贯咸陽，曾任使。（中国历代人物传记资料库 CBDB 175463）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_2t1sD3bbEW2w4QEsFPTtea
          claim_id: c_LBJ2ob3gZ6Usd2bhhJ1V7R
          source_id: s_XqngANYUVtYQtG6CooyTkB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_XqngANYUVtYQtG6CooyTkB
            source_type: api_record
            title: 维基数据：王长文（Q45661148）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661148
            external_identifier: Q45661148
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_QoHU0KlKxjqhjRzxI3yiOW
          claim_id: c_LBJ2ob3gZ6Usd2bhhJ1V7R
          source_id: s_7GmMcPgx4bg8fGLDs9ngLk
          stance: supports
          locator: CBDB:175463
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7GmMcPgx4bg8fGLDs9ngLk
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王長文（175463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175463&o=json
            external_identifier: CBDB:175463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:26.392Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9DFahLofdWs1zBGrRQUD61
        subject_person_id: p_vEhXCL8FygQQwURMRVeMJc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 819年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0819-01-01
            latest: 0819-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2v3Li8kQYkWNkW7wCCr1v7
          claim_id: c_9DFahLofdWs1zBGrRQUD61
          source_id: s_XqngANYUVtYQtG6CooyTkB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_XqngANYUVtYQtG6CooyTkB
            source_type: api_record
            title: 维基数据：王长文（Q45661148）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661148
            external_identifier: Q45661148
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VRNrFQAJvT1qRZAZtaguHn
        subject_person_id: p_vEhXCL8FygQQwURMRVeMJc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王长文
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HFnjGX7Bq6dDDDaquwmyrg
          claim_id: c_VRNrFQAJvT1qRZAZtaguHn
          source_id: s_7GmMcPgx4bg8fGLDs9ngLk
          stance: supports
          locator: Q45661148
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_vAwLEKS2ouE8LjgUaMAGod
          claim_id: c_VRNrFQAJvT1qRZAZtaguHn
          source_id: s_XqngANYUVtYQtG6CooyTkB
          stance: supports
          locator: Q45661148
          quotation: null
          interpretation_note: null
          source:
            id: s_XqngANYUVtYQtG6CooyTkB
            source_type: api_record
            title: 维基数据：王长文（Q45661148）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661148
            external_identifier: Q45661148
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_D8WA8CCC1nRpDzfPzNPsyK
        subject_person_id: p_Mfx73EGxmx5Kei6PX1Dz5V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vEhXCL8FygQQwURMRVeMJc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_QrdR9kcQvvSydKURC2A4Ha
          claim_id: c_D8WA8CCC1nRpDzfPzNPsyK
          source_id: s_dP8YP9TivMwdEJ8gu57v3K
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_dP8YP9TivMwdEJ8gu57v3K
            source_type: api_record
            title: 维基数据：王濡（Q45660609）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660609
            external_identifier: Q45660609
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.917Z
            metadata_json: null
        - id: cs_dBhjfh3Cx9QkXSr5KcmXPN
          claim_id: c_D8WA8CCC1nRpDzfPzNPsyK
          source_id: s_xEU7qamzNzH2Kqf76LHwey
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_xEU7qamzNzH2Kqf76LHwey
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王濡（175454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175454&o=json
            external_identifier: CBDB:175454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:56.078Z
            metadata_json: null
        - id: cs_zP7EYjPv9YiLnm21Yh2SGW
          claim_id: c_D8WA8CCC1nRpDzfPzNPsyK
          source_id: s_XqngANYUVtYQtG6CooyTkB
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_XqngANYUVtYQtG6CooyTkB
            source_type: api_record
            title: 维基数据：王长文（Q45661148）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661148
            external_identifier: Q45661148
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_NDorKMLmDHXbWSxNDtZX5E
          claim_id: c_D8WA8CCC1nRpDzfPzNPsyK
          source_id: s_7GmMcPgx4bg8fGLDs9ngLk
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7GmMcPgx4bg8fGLDs9ngLk
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王長文（175463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175463&o=json
            external_identifier: CBDB:175463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:26.392Z
            metadata_json: null
      object_person:
        id: p_Mfx73EGxmx5Kei6PX1Dz5V
        status: active
        display_name: 王濡
        merged_into_person_id: null
  children:
    - claim:
        id: c_PUUpzd7jD9DpPtXTuPQioM
        subject_person_id: p_vEhXCL8FygQQwURMRVeMJc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kKrz1QMZM38oh9Cm3WzWm4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_XwjxNisFGFidWYYMzgePgZ
          claim_id: c_PUUpzd7jD9DpPtXTuPQioM
          source_id: s_XqngANYUVtYQtG6CooyTkB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_XqngANYUVtYQtG6CooyTkB
            source_type: api_record
            title: 维基数据：王长文（Q45661148）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661148
            external_identifier: Q45661148
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_xHkc4bZDMG7WQL69Kfat2D
          claim_id: c_PUUpzd7jD9DpPtXTuPQioM
          source_id: s_7GmMcPgx4bg8fGLDs9ngLk
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7GmMcPgx4bg8fGLDs9ngLk
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王長文（175463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175463&o=json
            external_identifier: CBDB:175463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:26.392Z
            metadata_json: null
        - id: cs_GVcMYRbyrC4NtiZQ9PXf9j
          claim_id: c_PUUpzd7jD9DpPtXTuPQioM
          source_id: s_Zj8osAMYEWE8nFRE19KQA3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Zj8osAMYEWE8nFRE19KQA3
            source_type: api_record
            title: 维基数据：王早（Q45661209）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661209
            external_identifier: Q45661209
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:00.456Z
            metadata_json: null
        - id: cs_19HtfCPkEgjzjjkyM6i2Zy
          claim_id: c_PUUpzd7jD9DpPtXTuPQioM
          source_id: s_3LAufnYun895DWL6aDM1XW
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3LAufnYun895DWL6aDM1XW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王早（175464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175464&o=json
            external_identifier: CBDB:175464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:00.624Z
            metadata_json: null
      object_person:
        id: p_kKrz1QMZM38oh9Cm3WzWm4
        status: active
        display_name: 王早
        merged_into_person_id: null
    - claim:
        id: c_R7oFwiv3eEuffCdiopHNDz
        subject_person_id: p_vEhXCL8FygQQwURMRVeMJc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oETmTn9J6N4eKzLNbB1SH3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CwvwiJs56cUmKbgnTnrEHF
          claim_id: c_R7oFwiv3eEuffCdiopHNDz
          source_id: s_7GmMcPgx4bg8fGLDs9ngLk
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7GmMcPgx4bg8fGLDs9ngLk
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王長文（175463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175463&o=json
            external_identifier: CBDB:175463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:26.392Z
            metadata_json: null
        - id: cs_NPofE26oCHuuY51D8EkJ5S
          claim_id: c_R7oFwiv3eEuffCdiopHNDz
          source_id: s_XqngANYUVtYQtG6CooyTkB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_XqngANYUVtYQtG6CooyTkB
            source_type: api_record
            title: 维基数据：王长文（Q45661148）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661148
            external_identifier: Q45661148
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_dkAh8ikUDdmNiKfP3nwPuZ
          claim_id: c_R7oFwiv3eEuffCdiopHNDz
          source_id: s_SQE3JhKbCuqeoNvDfhfK3m
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_SQE3JhKbCuqeoNvDfhfK3m
            source_type: api_record
            title: 维基数据：王昶（Q45661269）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661269
            external_identifier: Q45661269
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:02.226Z
            metadata_json: null
        - id: cs_ALYh81XRMXHxT9oDPL9LvE
          claim_id: c_R7oFwiv3eEuffCdiopHNDz
          source_id: s_3aB21ioLikrnPCUjUqoxPn
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3aB21ioLikrnPCUjUqoxPn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昶（175465）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175465&o=json
            external_identifier: CBDB:175465
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:02.395Z
            metadata_json: null
      object_person:
        id: p_oETmTn9J6N4eKzLNbB1SH3
        status: active
        display_name: 王昶
        merged_into_person_id: null
    - claim:
        id: c_2BJnxXZpFyRtk9KriSwDj7
        subject_person_id: p_vEhXCL8FygQQwURMRVeMJc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZSPADvf9rEA6DsNgy5XteS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Ze4pBNvzKcyFcMwtpBP6Bo
          claim_id: c_2BJnxXZpFyRtk9KriSwDj7
          source_id: s_7GmMcPgx4bg8fGLDs9ngLk
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7GmMcPgx4bg8fGLDs9ngLk
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王長文（175463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175463&o=json
            external_identifier: CBDB:175463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:26.392Z
            metadata_json: null
        - id: cs_yzQ57mUSBJK5frS7e6VyZF
          claim_id: c_2BJnxXZpFyRtk9KriSwDj7
          source_id: s_XqngANYUVtYQtG6CooyTkB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_XqngANYUVtYQtG6CooyTkB
            source_type: api_record
            title: 维基数据：王长文（Q45661148）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661148
            external_identifier: Q45661148
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_4V22QEQx7CDbrPc5AhRGKq
          claim_id: c_2BJnxXZpFyRtk9KriSwDj7
          source_id: s_U4wH7dCaQDtxeLG5JWwMKK
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_U4wH7dCaQDtxeLG5JWwMKK
            source_type: api_record
            title: 维基数据：王暭（Q45661391）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661391
            external_identifier: Q45661391
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:02.226Z
            metadata_json: null
        - id: cs_TM1pBG4Ri8GFRjfW99NMpf
          claim_id: c_2BJnxXZpFyRtk9KriSwDj7
          source_id: s_jZc9sgg9qy5T5PLcw31oJv
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jZc9sgg9qy5T5PLcw31oJv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暭（175467）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175467&o=json
            external_identifier: CBDB:175467
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:02.401Z
            metadata_json: null
      object_person:
        id: p_ZSPADvf9rEA6DsNgy5XteS
        status: active
        display_name: 王暭
        merged_into_person_id: null
    - claim:
        id: c_5GZivudzMmyD3gwC4yGVzD
        subject_person_id: p_vEhXCL8FygQQwURMRVeMJc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EJMiGRB8Xxv7bfsivdmRTR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_u8qU1KqwC2uVDveLKwUQhd
          claim_id: c_5GZivudzMmyD3gwC4yGVzD
          source_id: s_XqngANYUVtYQtG6CooyTkB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_XqngANYUVtYQtG6CooyTkB
            source_type: api_record
            title: 维基数据：王长文（Q45661148）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661148
            external_identifier: Q45661148
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_z7525xgeuDdqKtydAJn4Wu
          claim_id: c_5GZivudzMmyD3gwC4yGVzD
          source_id: s_7GmMcPgx4bg8fGLDs9ngLk
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7GmMcPgx4bg8fGLDs9ngLk
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王長文（175463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175463&o=json
            external_identifier: CBDB:175463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:26.392Z
            metadata_json: null
        - id: cs_7PryUUNqRNzZ1BdQxKuG9n
          claim_id: c_5GZivudzMmyD3gwC4yGVzD
          source_id: s_XGBkKSukNXDX69MD8G369p
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_XGBkKSukNXDX69MD8G369p
            source_type: api_record
            title: 维基数据：王晟（Q45661451）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661451
            external_identifier: Q45661451
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:02.226Z
            metadata_json: null
        - id: cs_39gJJGMYBhJDZrUFi92P2T
          claim_id: c_5GZivudzMmyD3gwC4yGVzD
          source_id: s_oG8Ys5tQcA87EnTNC4G2TN
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_oG8Ys5tQcA87EnTNC4G2TN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晟（175468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175468&o=json
            external_identifier: CBDB:175468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:02.399Z
            metadata_json: null
      object_person:
        id: p_EJMiGRB8Xxv7bfsivdmRTR
        status: active
        display_name: 王晟
        merged_into_person_id: null
    - claim:
        id: c_Nygymsb1NWbWJG85V9kkPN
        subject_person_id: p_vEhXCL8FygQQwURMRVeMJc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VczHkFQYHiLCrjxskrUgAh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6QEuxoUwGA7QQKQjfJZ2US
          claim_id: c_Nygymsb1NWbWJG85V9kkPN
          source_id: s_7GmMcPgx4bg8fGLDs9ngLk
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7GmMcPgx4bg8fGLDs9ngLk
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王長文（175463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175463&o=json
            external_identifier: CBDB:175463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:26.392Z
            metadata_json: null
        - id: cs_NMY6Jn6Wqc7rVXHwQQM4X4
          claim_id: c_Nygymsb1NWbWJG85V9kkPN
          source_id: s_XqngANYUVtYQtG6CooyTkB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_XqngANYUVtYQtG6CooyTkB
            source_type: api_record
            title: 维基数据：王长文（Q45661148）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661148
            external_identifier: Q45661148
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_S2TJep9j7EkHYFfFfQ2prj
          claim_id: c_Nygymsb1NWbWJG85V9kkPN
          source_id: s_GkDw6Zh7nJAm7HG3ASoF5N
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_GkDw6Zh7nJAm7HG3ASoF5N
            source_type: api_record
            title: 维基数据：王升（Q45661509）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661509
            external_identifier: Q45661509
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:02.226Z
            metadata_json: null
        - id: cs_tr94vNrGhf6yW5AEUEgh7e
          claim_id: c_Nygymsb1NWbWJG85V9kkPN
          source_id: s_qHiurHaUcAa1CuwjXWcWq7
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_qHiurHaUcAa1CuwjXWcWq7
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昇（175469）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175469&o=json
            external_identifier: CBDB:175469
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:02.390Z
            metadata_json: null
      object_person:
        id: p_VczHkFQYHiLCrjxskrUgAh
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

# 王长文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王长文（卒于819年），唐人物。籍贯咸陽，曾任使。（中国历代人物传记资料库 CBDB 175463） | accepted |
| death.date | 819年 | accepted |
| name.primary | 王长文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Mfx73EGxmx5Kei6PX1Dz5V | 王濡 | accepted |
| children | p_kKrz1QMZM38oh9Cm3WzWm4 | 王早 | accepted |
| children | p_oETmTn9J6N4eKzLNbB1SH3 | 王昶 | accepted |
| children | p_ZSPADvf9rEA6DsNgy5XteS | 王暭 | accepted |
| children | p_EJMiGRB8Xxv7bfsivdmRTR | 王晟 | accepted |
| children | p_VczHkFQYHiLCrjxskrUgAh | 王升 | accepted |

## 外部来源

- [维基数据：王昶（Q45661269）](https://www.wikidata.org/wiki/Q45661269)
- [维基数据：王晟（Q45661451）](https://www.wikidata.org/wiki/Q45661451)
- [维基数据：王暭（Q45661391）](https://www.wikidata.org/wiki/Q45661391)
- [维基数据：王濡（Q45660609）](https://www.wikidata.org/wiki/Q45660609)
- [维基数据：王升（Q45661509）](https://www.wikidata.org/wiki/Q45661509)
- [维基数据：王早（Q45661209）](https://www.wikidata.org/wiki/Q45661209)
- [维基数据：王长文（Q45661148）](https://www.wikidata.org/wiki/Q45661148)
- [CBDB 中国历代人物传记资料库：王昶（175465）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175465&o=json)
- [CBDB 中国历代人物传记资料库：王晟（175468）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175468&o=json)
- [CBDB 中国历代人物传记资料库：王暭（175467）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175467&o=json)
- [CBDB 中国历代人物传记资料库：王濡（175454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175454&o=json)
- [CBDB 中国历代人物传记资料库：王昇（175469）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175469&o=json)
- [CBDB 中国历代人物传记资料库：王早（175464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175464&o=json)
- [CBDB 中国历代人物传记资料库：王長文（175463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175463&o=json)
