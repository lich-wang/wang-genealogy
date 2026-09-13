---
schema: wang-person/v1
id: p_FPisTavdR1h9GP2xzczNXG
status: active
merged_into: null
display_name: 王宰
cbdb_id: 175555
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zDPcvVxkAfPQRGUgbcvguY
        subject_person_id: p_FPisTavdR1h9GP2xzczNXG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宰（卒于746年），唐人物。籍贯咸陽，身份为畫家，曾任子。（中国历代人物传记资料库 CBDB 175555）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_TsjyrfJryjmBj2492ihnhD
          claim_id: c_zDPcvVxkAfPQRGUgbcvguY
          source_id: s_Z6xkyBZUAF7wA6GtshtnYB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Z6xkyBZUAF7wA6GtshtnYB
            source_type: api_record
            title: 维基数据：王宰（Q45666287）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666287
            external_identifier: Q45666287
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.625Z
            metadata_json: null
        - id: cs_S9YA6lm-PT390BHpPnGJBJ
          claim_id: c_zDPcvVxkAfPQRGUgbcvguY
          source_id: s_voSJPovZEpdxhCGcBmtgv9
          stance: supports
          locator: CBDB:175555
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_voSJPovZEpdxhCGcBmtgv9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宰（175555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json
            external_identifier: CBDB:175555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:35.807Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1qzezwhVuBys7jQCh4U7BA
        subject_person_id: p_FPisTavdR1h9GP2xzczNXG
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
        - id: cs_2eHETcAa1yaUMWEmFsrAYP
          claim_id: c_1qzezwhVuBys7jQCh4U7BA
          source_id: s_Z6xkyBZUAF7wA6GtshtnYB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Z6xkyBZUAF7wA6GtshtnYB
            source_type: api_record
            title: 维基数据：王宰（Q45666287）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666287
            external_identifier: Q45666287
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.625Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_g8jhT9oC2tZaYK9DqzhSmq
        subject_person_id: p_FPisTavdR1h9GP2xzczNXG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宰
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_T7nckwqeiZ7W92Xqm4pjQG
          claim_id: c_g8jhT9oC2tZaYK9DqzhSmq
          source_id: s_voSJPovZEpdxhCGcBmtgv9
          stance: supports
          locator: Q45666287
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_sKdRKx82EqJHZY5PiNHhvJ
          claim_id: c_g8jhT9oC2tZaYK9DqzhSmq
          source_id: s_Z6xkyBZUAF7wA6GtshtnYB
          stance: supports
          locator: Q45666287
          quotation: null
          interpretation_note: null
          source:
            id: s_Z6xkyBZUAF7wA6GtshtnYB
            source_type: api_record
            title: 维基数据：王宰（Q45666287）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666287
            external_identifier: Q45666287
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.625Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NBRYVUttok2n4xSz5pv3CG
        subject_person_id: p_4HKPieD6fbNJ6PWBDrdsH7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FPisTavdR1h9GP2xzczNXG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9sZvwFnTYhHCy1Lh6rvapW
          claim_id: c_NBRYVUttok2n4xSz5pv3CG
          source_id: s_uGDohKi8JoWi4niPPUjK5Q
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_uGDohKi8JoWi4niPPUjK5Q
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王曒（175538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175538&o=json
            external_identifier: CBDB:175538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:36.335Z
            metadata_json: null
        - id: cs_fs2bLwWDanJbrj2L5z4nDH
          claim_id: c_NBRYVUttok2n4xSz5pv3CG
          source_id: s_aqT62HmHd1Zy5QuErHLovj
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_aqT62HmHd1Zy5QuErHLovj
            source_type: api_record
            title: 维基数据：王曒（Q45665407）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665407
            external_identifier: Q45665407
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:36.179Z
            metadata_json: null
        - id: cs_L81YLbkHW1tktZ7GAK4z9h
          claim_id: c_NBRYVUttok2n4xSz5pv3CG
          source_id: s_Z6xkyBZUAF7wA6GtshtnYB
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z6xkyBZUAF7wA6GtshtnYB
            source_type: api_record
            title: 维基数据：王宰（Q45666287）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666287
            external_identifier: Q45666287
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.625Z
            metadata_json: null
        - id: cs_wQ1UA4Aq387BhzgJ4knfGr
          claim_id: c_NBRYVUttok2n4xSz5pv3CG
          source_id: s_voSJPovZEpdxhCGcBmtgv9
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_voSJPovZEpdxhCGcBmtgv9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宰（175555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json
            external_identifier: CBDB:175555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:35.807Z
            metadata_json: null
      object_person:
        id: p_4HKPieD6fbNJ6PWBDrdsH7
        status: active
        display_name: 王曒
        merged_into_person_id: null
  children:
    - claim:
        id: c_XgvhGJ5RsqKog8x3mHZAqm
        subject_person_id: p_FPisTavdR1h9GP2xzczNXG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6UznTbFd51zJR5ybbxCeRB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_VNHscbPZtphS9AkX6cxdFT
          claim_id: c_XgvhGJ5RsqKog8x3mHZAqm
          source_id: s_voSJPovZEpdxhCGcBmtgv9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_voSJPovZEpdxhCGcBmtgv9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宰（175555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json
            external_identifier: CBDB:175555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:35.807Z
            metadata_json: null
        - id: cs_b3BUKe9qGFk1C8AKxDmTUg
          claim_id: c_XgvhGJ5RsqKog8x3mHZAqm
          source_id: s_Z6xkyBZUAF7wA6GtshtnYB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z6xkyBZUAF7wA6GtshtnYB
            source_type: api_record
            title: 维基数据：王宰（Q45666287）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666287
            external_identifier: Q45666287
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.625Z
            metadata_json: null
        - id: cs_KtpG9JJaH1rNrcJ56cEKPf
          claim_id: c_XgvhGJ5RsqKog8x3mHZAqm
          source_id: s_3odpPbnaTGaASYYgeAYCRZ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_3odpPbnaTGaASYYgeAYCRZ
            source_type: api_record
            title: 维基数据：王嗣宗（Q45666343）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666343
            external_identifier: Q45666343
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:01.011Z
            metadata_json: null
        - id: cs_QS14AiXZVEJPNHnEVbEKAe
          claim_id: c_XgvhGJ5RsqKog8x3mHZAqm
          source_id: s_8gZR1Rx3KXWGfAdaZJGgs4
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_8gZR1Rx3KXWGfAdaZJGgs4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王嗣宗（175556）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175556&o=json
            external_identifier: CBDB:175556
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:01.174Z
            metadata_json: null
      object_person:
        id: p_6UznTbFd51zJR5ybbxCeRB
        status: active
        display_name: 王嗣宗
        merged_into_person_id: null
    - claim:
        id: c_Tbuyvqu12kkKprn8iRy6jo
        subject_person_id: p_FPisTavdR1h9GP2xzczNXG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BSdKViSr47Ca2QyKQUdQhv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9rzb4LEJvccAZ2Supkob5M
          claim_id: c_Tbuyvqu12kkKprn8iRy6jo
          source_id: s_voSJPovZEpdxhCGcBmtgv9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_voSJPovZEpdxhCGcBmtgv9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宰（175555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json
            external_identifier: CBDB:175555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:35.807Z
            metadata_json: null
        - id: cs_fKjHTi6BMADkjqNLxJBEU8
          claim_id: c_Tbuyvqu12kkKprn8iRy6jo
          source_id: s_Z6xkyBZUAF7wA6GtshtnYB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z6xkyBZUAF7wA6GtshtnYB
            source_type: api_record
            title: 维基数据：王宰（Q45666287）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666287
            external_identifier: Q45666287
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.625Z
            metadata_json: null
        - id: cs_Lwpwr7kM2Z4zn9knfbAzXm
          claim_id: c_Tbuyvqu12kkKprn8iRy6jo
          source_id: s_6ZdqX9e5ZfeMLL9Lf1YJx8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_6ZdqX9e5ZfeMLL9Lf1YJx8
            source_type: api_record
            title: 维基数据：王汶（Q45666400）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666400
            external_identifier: Q45666400
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:01.011Z
            metadata_json: null
        - id: cs_RBAKYPD3REoBDHtJqQ6wUk
          claim_id: c_Tbuyvqu12kkKprn8iRy6jo
          source_id: s_2AHLRY77AJBaCiBWxXD1KV
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_2AHLRY77AJBaCiBWxXD1KV
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王汶（175557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175557&o=json
            external_identifier: CBDB:175557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:01.167Z
            metadata_json: null
      object_person:
        id: p_BSdKViSr47Ca2QyKQUdQhv
        status: active
        display_name: 王汶
        merged_into_person_id: null
    - claim:
        id: c_wq3GPBDhGFa7VVtAF8Amz8
        subject_person_id: p_FPisTavdR1h9GP2xzczNXG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y8b91QH3e4A46voNYGBZMe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_YLJ9UXQDBZshKgz3BVAxx3
          claim_id: c_wq3GPBDhGFa7VVtAF8Amz8
          source_id: s_Z6xkyBZUAF7wA6GtshtnYB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z6xkyBZUAF7wA6GtshtnYB
            source_type: api_record
            title: 维基数据：王宰（Q45666287）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666287
            external_identifier: Q45666287
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.625Z
            metadata_json: null
        - id: cs_cSQN58UHdWXq5Qp4FC9XMG
          claim_id: c_wq3GPBDhGFa7VVtAF8Amz8
          source_id: s_voSJPovZEpdxhCGcBmtgv9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_voSJPovZEpdxhCGcBmtgv9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宰（175555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json
            external_identifier: CBDB:175555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:35.807Z
            metadata_json: null
        - id: cs_7g1NTYMMwtt2aH1314d3AT
          claim_id: c_wq3GPBDhGFa7VVtAF8Amz8
          source_id: s_Go4DmtqKjSm8V2fAfHDRco
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Go4DmtqKjSm8V2fAfHDRco
            source_type: api_record
            title: 维基数据：王嗣昌（Q45666506）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666506
            external_identifier: Q45666506
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:01.011Z
            metadata_json: null
        - id: cs_VVBoeCyBbT3sXybXh2C4RS
          claim_id: c_wq3GPBDhGFa7VVtAF8Amz8
          source_id: s_V6UQq479KuF5YNmsKrtTQt
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_V6UQq479KuF5YNmsKrtTQt
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王嗣昌（175559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175559&o=json
            external_identifier: CBDB:175559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:01.151Z
            metadata_json: null
      object_person:
        id: p_y8b91QH3e4A46voNYGBZMe
        status: active
        display_name: 王嗣昌
        merged_into_person_id: null
    - claim:
        id: c_Vp8BNULNAp5AHwyzmFQMdk
        subject_person_id: p_FPisTavdR1h9GP2xzczNXG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LuyEt4CbxwBJqxa1hXgBKX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_dUiUBMG7G1n6B229V29a7x
          claim_id: c_Vp8BNULNAp5AHwyzmFQMdk
          source_id: s_Z6xkyBZUAF7wA6GtshtnYB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z6xkyBZUAF7wA6GtshtnYB
            source_type: api_record
            title: 维基数据：王宰（Q45666287）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666287
            external_identifier: Q45666287
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.625Z
            metadata_json: null
        - id: cs_v4ZWN4cUQwAYeaZbEQ1JDH
          claim_id: c_Vp8BNULNAp5AHwyzmFQMdk
          source_id: s_voSJPovZEpdxhCGcBmtgv9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_voSJPovZEpdxhCGcBmtgv9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宰（175555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json
            external_identifier: CBDB:175555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:35.807Z
            metadata_json: null
        - id: cs_pzDghhrEy82JepPx2CAbJ7
          claim_id: c_Vp8BNULNAp5AHwyzmFQMdk
          source_id: s_BE7m67uj3purna4ohLtbcS
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_BE7m67uj3purna4ohLtbcS
            source_type: api_record
            title: 维基数据：王嗣端（Q45666558）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666558
            external_identifier: Q45666558
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:02.869Z
            metadata_json: null
        - id: cs_8UZCrjDnbaPjDNBVsBFe76
          claim_id: c_Vp8BNULNAp5AHwyzmFQMdk
          source_id: s_7kqBoHUogLV1bszmr5fkwV
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7kqBoHUogLV1bszmr5fkwV
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王嗣端（175560）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175560&o=json
            external_identifier: CBDB:175560
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:03.043Z
            metadata_json: null
      object_person:
        id: p_LuyEt4CbxwBJqxa1hXgBKX
        status: active
        display_name: 王嗣端
        merged_into_person_id: null
    - claim:
        id: c_3KajwHCcSoYAQCUkMt2nhj
        subject_person_id: p_FPisTavdR1h9GP2xzczNXG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3YKBL6QdYUSrkYMomw6J8u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_SWX3ZQRS22tphqP1XAPh7S
          claim_id: c_3KajwHCcSoYAQCUkMt2nhj
          source_id: s_Z6xkyBZUAF7wA6GtshtnYB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z6xkyBZUAF7wA6GtshtnYB
            source_type: api_record
            title: 维基数据：王宰（Q45666287）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666287
            external_identifier: Q45666287
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.625Z
            metadata_json: null
        - id: cs_keLWGsmGSaBYk1jYMN2KoR
          claim_id: c_3KajwHCcSoYAQCUkMt2nhj
          source_id: s_voSJPovZEpdxhCGcBmtgv9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_voSJPovZEpdxhCGcBmtgv9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宰（175555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json
            external_identifier: CBDB:175555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:35.807Z
            metadata_json: null
        - id: cs_V5Lo3pkcsK6QxxG53VnFyz
          claim_id: c_3KajwHCcSoYAQCUkMt2nhj
          source_id: s_ed9MeQB2u1WkTfqBVhwkMW
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ed9MeQB2u1WkTfqBVhwkMW
            source_type: api_record
            title: 维基数据：王士则（Q45666613）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666613
            external_identifier: Q45666613
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:02.869Z
            metadata_json: null
        - id: cs_cQDA5t88XyL9BspzNH2E2h
          claim_id: c_3KajwHCcSoYAQCUkMt2nhj
          source_id: s_PNBxUXiC1KnGAZ3UCKxk3L
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_PNBxUXiC1KnGAZ3UCKxk3L
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士則（175561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175561&o=json
            external_identifier: CBDB:175561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:03.049Z
            metadata_json: null
      object_person:
        id: p_3YKBL6QdYUSrkYMomw6J8u
        status: active
        display_name: 王士则
        merged_into_person_id: null
    - claim:
        id: c_UhfhoEzuXxXZZS92bS13js
        subject_person_id: p_FPisTavdR1h9GP2xzczNXG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dYTNdPJMxSGg9r4QyZbNNG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3tbyEMgSn1Lo1Jz7PSvvoS
          claim_id: c_UhfhoEzuXxXZZS92bS13js
          source_id: s_voSJPovZEpdxhCGcBmtgv9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_voSJPovZEpdxhCGcBmtgv9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宰（175555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json
            external_identifier: CBDB:175555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:35.807Z
            metadata_json: null
        - id: cs_FvN5NTQxj1LDkqy57SUJXF
          claim_id: c_UhfhoEzuXxXZZS92bS13js
          source_id: s_Z6xkyBZUAF7wA6GtshtnYB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z6xkyBZUAF7wA6GtshtnYB
            source_type: api_record
            title: 维基数据：王宰（Q45666287）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666287
            external_identifier: Q45666287
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.625Z
            metadata_json: null
        - id: cs_Ej8Y8ZEXjbWP3YkYYndfMb
          claim_id: c_UhfhoEzuXxXZZS92bS13js
          source_id: s_39g5gu3A7qF5kWbR6WVCbA
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_39g5gu3A7qF5kWbR6WVCbA
            source_type: api_record
            title: 维基数据：王嗣源（Q45666666）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666666
            external_identifier: Q45666666
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:02.869Z
            metadata_json: null
        - id: cs_J6xfQL7hwjGJkBQt8pzhqP
          claim_id: c_UhfhoEzuXxXZZS92bS13js
          source_id: s_uQi5nNanzZ46EA5M7KTHLM
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_uQi5nNanzZ46EA5M7KTHLM
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王嗣源（175562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175562&o=json
            external_identifier: CBDB:175562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:03.042Z
            metadata_json: null
      object_person:
        id: p_dYTNdPJMxSGg9r4QyZbNNG
        status: active
        display_name: 王嗣源
        merged_into_person_id: null
    - claim:
        id: c_C4oSayrkCrEGEa8qsdc3uG
        subject_person_id: p_FPisTavdR1h9GP2xzczNXG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Bj4npy2dwWzLgZ5Xv5E7QD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_TBjQU8264ZzVtywPYxnV9u
          claim_id: c_C4oSayrkCrEGEa8qsdc3uG
          source_id: s_Z6xkyBZUAF7wA6GtshtnYB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z6xkyBZUAF7wA6GtshtnYB
            source_type: api_record
            title: 维基数据：王宰（Q45666287）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666287
            external_identifier: Q45666287
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.625Z
            metadata_json: null
        - id: cs_mRtdnkBy4gUAKL2pRhSZvo
          claim_id: c_C4oSayrkCrEGEa8qsdc3uG
          source_id: s_voSJPovZEpdxhCGcBmtgv9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_voSJPovZEpdxhCGcBmtgv9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宰（175555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json
            external_identifier: CBDB:175555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:35.807Z
            metadata_json: null
        - id: cs_di4WGrPYL4cgZSqFVd9drD
          claim_id: c_C4oSayrkCrEGEa8qsdc3uG
          source_id: s_xiWRTgYrqNJmVo4GQWkpue
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_xiWRTgYrqNJmVo4GQWkpue
            source_type: api_record
            title: 维基数据：王嗣恭（Q45666720）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666720
            external_identifier: Q45666720
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:02.869Z
            metadata_json: null
        - id: cs_TGduYGFbvz2DJi5qD6Xaq4
          claim_id: c_C4oSayrkCrEGEa8qsdc3uG
          source_id: s_ftpjDbKJaPHz3P3mLC444F
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ftpjDbKJaPHz3P3mLC444F
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王嗣恭（175563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175563&o=json
            external_identifier: CBDB:175563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:03.009Z
            metadata_json: null
      object_person:
        id: p_Bj4npy2dwWzLgZ5Xv5E7QD
        status: active
        display_name: 王嗣恭
        merged_into_person_id: null
    - claim:
        id: c_J4ej3NGYaBE5SXzgKJwn52
        subject_person_id: p_FPisTavdR1h9GP2xzczNXG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VdnCJaa6qrkWD87YxEMfQX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_RQxgW5BG9CGS6JZ6F9oyMV
          claim_id: c_J4ej3NGYaBE5SXzgKJwn52
          source_id: s_Z6xkyBZUAF7wA6GtshtnYB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z6xkyBZUAF7wA6GtshtnYB
            source_type: api_record
            title: 维基数据：王宰（Q45666287）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666287
            external_identifier: Q45666287
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.625Z
            metadata_json: null
        - id: cs_dDLFrjPza984vECDtHXQny
          claim_id: c_J4ej3NGYaBE5SXzgKJwn52
          source_id: s_voSJPovZEpdxhCGcBmtgv9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_voSJPovZEpdxhCGcBmtgv9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宰（175555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json
            external_identifier: CBDB:175555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:35.807Z
            metadata_json: null
        - id: cs_1WRFvCnxp8KNPF4fKp8FKN
          claim_id: c_J4ej3NGYaBE5SXzgKJwn52
          source_id: s_ghrA83DWHW8bfCSSx4qqEg
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ghrA83DWHW8bfCSSx4qqEg
            source_type: api_record
            title: 维基数据：王师宝（Q45666773）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666773
            external_identifier: Q45666773
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:04.683Z
            metadata_json: null
        - id: cs_wXrnkqZ9bLCAo1QQG2V39X
          claim_id: c_J4ej3NGYaBE5SXzgKJwn52
          source_id: s_RcP2vcBE2kBLJu2fDMULJ2
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_RcP2vcBE2kBLJu2fDMULJ2
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師寶（175564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175564&o=json
            external_identifier: CBDB:175564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:04.846Z
            metadata_json: null
      object_person:
        id: p_VdnCJaa6qrkWD87YxEMfQX
        status: active
        display_name: 王师宝
        merged_into_person_id: null
    - claim:
        id: c_NBJDUCdesgTh3snLuqEhMg
        subject_person_id: p_FPisTavdR1h9GP2xzczNXG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PTuiF9CbfDx8Sy93ZpKxhp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1a4n423ZADwLQHQfpGCGFv
          claim_id: c_NBJDUCdesgTh3snLuqEhMg
          source_id: s_Z6xkyBZUAF7wA6GtshtnYB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z6xkyBZUAF7wA6GtshtnYB
            source_type: api_record
            title: 维基数据：王宰（Q45666287）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666287
            external_identifier: Q45666287
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.625Z
            metadata_json: null
        - id: cs_VFV3fnAzmnuWtmsAGwXCBs
          claim_id: c_NBJDUCdesgTh3snLuqEhMg
          source_id: s_voSJPovZEpdxhCGcBmtgv9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_voSJPovZEpdxhCGcBmtgv9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宰（175555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json
            external_identifier: CBDB:175555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:35.807Z
            metadata_json: null
        - id: cs_PKGeadqhsF2n4is5f8vpBr
          claim_id: c_NBJDUCdesgTh3snLuqEhMg
          source_id: s_M3zLD9v5fPH116rtGVGygH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_M3zLD9v5fPH116rtGVGygH
            source_type: api_record
            title: 维基数据：王平子（Q45666827）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666827
            external_identifier: Q45666827
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:04.683Z
            metadata_json: null
        - id: cs_7wL7CA8coNf71oPhGkcDtJ
          claim_id: c_NBJDUCdesgTh3snLuqEhMg
          source_id: s_Jeqrq7vdPTaj5i2QnfhDFw
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_Jeqrq7vdPTaj5i2QnfhDFw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王平子（175565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175565&o=json
            external_identifier: CBDB:175565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:04.850Z
            metadata_json: null
      object_person:
        id: p_PTuiF9CbfDx8Sy93ZpKxhp
        status: active
        display_name: 王平子
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宰（卒于746年），唐人物。籍贯咸陽，身份为畫家，曾任子。（中国历代人物传记资料库 CBDB 175555） | accepted |
| death.date | 746年 | accepted |
| name.primary | 王宰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4HKPieD6fbNJ6PWBDrdsH7 | 王曒 | accepted |
| children | p_6UznTbFd51zJR5ybbxCeRB | 王嗣宗 | accepted |
| children | p_BSdKViSr47Ca2QyKQUdQhv | 王汶 | accepted |
| children | p_y8b91QH3e4A46voNYGBZMe | 王嗣昌 | accepted |
| children | p_LuyEt4CbxwBJqxa1hXgBKX | 王嗣端 | accepted |
| children | p_3YKBL6QdYUSrkYMomw6J8u | 王士则 | accepted |
| children | p_dYTNdPJMxSGg9r4QyZbNNG | 王嗣源 | accepted |
| children | p_Bj4npy2dwWzLgZ5Xv5E7QD | 王嗣恭 | accepted |
| children | p_VdnCJaa6qrkWD87YxEMfQX | 王师宝 | accepted |
| children | p_PTuiF9CbfDx8Sy93ZpKxhp | 王平子 | accepted |

## 外部来源

- [维基数据：王曒（Q45665407）](https://www.wikidata.org/wiki/Q45665407)
- [维基数据：王平子（Q45666827）](https://www.wikidata.org/wiki/Q45666827)
- [维基数据：王师宝（Q45666773）](https://www.wikidata.org/wiki/Q45666773)
- [维基数据：王士则（Q45666613）](https://www.wikidata.org/wiki/Q45666613)
- [维基数据：王嗣昌（Q45666506）](https://www.wikidata.org/wiki/Q45666506)
- [维基数据：王嗣端（Q45666558）](https://www.wikidata.org/wiki/Q45666558)
- [维基数据：王嗣恭（Q45666720）](https://www.wikidata.org/wiki/Q45666720)
- [维基数据：王嗣源（Q45666666）](https://www.wikidata.org/wiki/Q45666666)
- [维基数据：王嗣宗（Q45666343）](https://www.wikidata.org/wiki/Q45666343)
- [维基数据：王汶（Q45666400）](https://www.wikidata.org/wiki/Q45666400)
- [维基数据：王宰（Q45666287）](https://www.wikidata.org/wiki/Q45666287)
- [CBDB 中国历代人物传记资料库：王曒（175538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175538&o=json)
- [CBDB 中国历代人物传记资料库：王平子（175565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175565&o=json)
- [CBDB 中国历代人物传记资料库：王師寶（175564）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175564&o=json)
- [CBDB 中国历代人物传记资料库：王士則（175561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175561&o=json)
- [CBDB 中国历代人物传记资料库：王嗣昌（175559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175559&o=json)
- [CBDB 中国历代人物传记资料库：王嗣端（175560）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175560&o=json)
- [CBDB 中国历代人物传记资料库：王嗣恭（175563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175563&o=json)
- [CBDB 中国历代人物传记资料库：王嗣源（175562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175562&o=json)
- [CBDB 中国历代人物传记资料库：王嗣宗（175556）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175556&o=json)
- [CBDB 中国历代人物传记资料库：王汶（175557）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175557&o=json)
- [CBDB 中国历代人物传记资料库：王宰（175555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json)
