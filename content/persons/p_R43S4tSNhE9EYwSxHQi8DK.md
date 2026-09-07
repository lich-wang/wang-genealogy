---
schema: wang-person/v1
id: p_R43S4tSNhE9EYwSxHQi8DK
status: active
merged_into: null
display_name: 王迺
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6YjZYbNx9ZPj7aMznkCBGo
        subject_person_id: p_R43S4tSNhE9EYwSxHQi8DK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迺（卒于857年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175425 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_kQxkEmjEAAtt25G3cD6pQR
          claim_id: c_6YjZYbNx9ZPj7aMznkCBGo
          source_id: s_q2HM3LSwn2hCoD23EH61RQ
          stance: supports
          locator: null
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
        - id: cs_ni8jwMTZbM3p9sLoom6qns
          claim_id: c_6YjZYbNx9ZPj7aMznkCBGo
          source_id: s_6HC9Tz6usZG9tpzmYrAfiQ
          stance: supports
          locator: CBDB:175425
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_W9py6EvE43CAZyxiMb6GFG
        subject_person_id: p_R43S4tSNhE9EYwSxHQi8DK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 857年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0857-01-01
            latest: 0857-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SHViDp5YfEd6P2eWRxk4Yq
          claim_id: c_W9py6EvE43CAZyxiMb6GFG
          source_id: s_q2HM3LSwn2hCoD23EH61RQ
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pHPHmdTvc2Gu2xn92R64Ky
        subject_person_id: p_R43S4tSNhE9EYwSxHQi8DK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迺
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1hDyjP2Tp9pFeCMcJLqfgE
          claim_id: c_pHPHmdTvc2Gu2xn92R64Ky
          source_id: s_q2HM3LSwn2hCoD23EH61RQ
          stance: supports
          locator: Q45658880
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
        - id: cs_7Z8NK31yD6D3RjfLKaTtSX
          claim_id: c_pHPHmdTvc2Gu2xn92R64Ky
          source_id: s_6HC9Tz6usZG9tpzmYrAfiQ
          stance: supports
          locator: Q45658880
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_zkLScucBk4JK57QATK1P5y
        status: active
        display_name: 王添
        merged_into_person_id: null
  children:
    - claim:
        id: c_NxGnAHyJHzDqJ5NtkAX3Ju
        subject_person_id: p_R43S4tSNhE9EYwSxHQi8DK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xsnR2nso5Ewzd4xpZw67wk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_M9DFmQFRws4TQ2og8RuYPa
          claim_id: c_NxGnAHyJHzDqJ5NtkAX3Ju
          source_id: s_6HC9Tz6usZG9tpzmYrAfiQ
          stance: supports
          locator: 亲属关系：子
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
        - id: cs_aunKQxempqGSMhYGxQUpwM
          claim_id: c_NxGnAHyJHzDqJ5NtkAX3Ju
          source_id: s_q2HM3LSwn2hCoD23EH61RQ
          stance: supports
          locator: P40（子女）
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
        - id: cs_WjYVaw9NWCdwyYKdcd5kr9
          claim_id: c_NxGnAHyJHzDqJ5NtkAX3Ju
          source_id: s_Da5DUKEZAyMJPrUD3ELUSP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Da5DUKEZAyMJPrUD3ELUSP
            source_type: api_record
            title: 维基数据：王师迥（Q45658939）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658939
            external_identifier: Q45658939
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:06.955Z
            metadata_json: null
        - id: cs_GGDWZRUJbgn9rfn7prFp8K
          claim_id: c_NxGnAHyJHzDqJ5NtkAX3Ju
          source_id: s_g4XdD45X1fLb3gj5kKjD3z
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_g4XdD45X1fLb3gj5kKjD3z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師迥（175426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175426&o=json
            external_identifier: CBDB:175426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:07.101Z
            metadata_json: null
      object_person:
        id: p_xsnR2nso5Ewzd4xpZw67wk
        status: active
        display_name: 王师迥
        merged_into_person_id: null
    - claim:
        id: c_Gj8QTJ9g1se3JDLvxc8KgJ
        subject_person_id: p_R43S4tSNhE9EYwSxHQi8DK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S3ed5sGuwGvN5fRZ5r9uCh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9Z3MGs9nCDaFyuzT4NDbQo
          claim_id: c_Gj8QTJ9g1se3JDLvxc8KgJ
          source_id: s_6HC9Tz6usZG9tpzmYrAfiQ
          stance: supports
          locator: 亲属关系：子
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
        - id: cs_ruJjTBM8R3jMC75TqpMjAg
          claim_id: c_Gj8QTJ9g1se3JDLvxc8KgJ
          source_id: s_q2HM3LSwn2hCoD23EH61RQ
          stance: supports
          locator: P40（子女）
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
        - id: cs_462Cbw8LeBZ2EM5FWQwdMK
          claim_id: c_Gj8QTJ9g1se3JDLvxc8KgJ
          source_id: s_N9TnFxMBsADCba6eRjPkgH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_N9TnFxMBsADCba6eRjPkgH
            source_type: api_record
            title: 维基数据：王师达（Q45658998）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658998
            external_identifier: Q45658998
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:06.955Z
            metadata_json: null
        - id: cs_GexL7v5SN8Q5tDoDmAj6T3
          claim_id: c_Gj8QTJ9g1se3JDLvxc8KgJ
          source_id: s_t9qfkoJzk5P1NhbarNjG3c
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_t9qfkoJzk5P1NhbarNjG3c
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師達（175427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175427&o=json
            external_identifier: CBDB:175427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:07.090Z
            metadata_json: null
      object_person:
        id: p_S3ed5sGuwGvN5fRZ5r9uCh
        status: active
        display_name: 王师达
        merged_into_person_id: null
    - claim:
        id: c_G3wempiGA5i5XPq6uCxcpz
        subject_person_id: p_R43S4tSNhE9EYwSxHQi8DK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A881rM9t1ZsBXULN5A4SBH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_La2ExQML9PXwdNx1bfBHXC
          claim_id: c_G3wempiGA5i5XPq6uCxcpz
          source_id: s_q2HM3LSwn2hCoD23EH61RQ
          stance: supports
          locator: P40（子女）
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
        - id: cs_yAr9wm4r7r7nxTANGgJtKZ
          claim_id: c_G3wempiGA5i5XPq6uCxcpz
          source_id: s_6HC9Tz6usZG9tpzmYrAfiQ
          stance: supports
          locator: 亲属关系：子
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
        - id: cs_2yBuiPn1C7WpSp63h2XjBC
          claim_id: c_G3wempiGA5i5XPq6uCxcpz
          source_id: s_8qbHfSoNuuqzCez2CdZfsa
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8qbHfSoNuuqzCez2CdZfsa
            source_type: api_record
            title: 维基数据：王师逸（Q45659057）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659057
            external_identifier: Q45659057
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:08.601Z
            metadata_json: null
        - id: cs_9cydfjKGCnaydMWB6nr5iP
          claim_id: c_G3wempiGA5i5XPq6uCxcpz
          source_id: s_aJdvfQH46DjDpFzuFPhr9d
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_aJdvfQH46DjDpFzuFPhr9d
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師逸（175428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175428&o=json
            external_identifier: CBDB:175428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:08.746Z
            metadata_json: null
      object_person:
        id: p_A881rM9t1ZsBXULN5A4SBH
        status: active
        display_name: 王师逸
        merged_into_person_id: null
    - claim:
        id: c_8LeDjg7MPx67g3LUVB2FSw
        subject_person_id: p_R43S4tSNhE9EYwSxHQi8DK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xLQZoUeZEM5RKGerYpvD6T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_89uc6wwWDjjtPDXriuHRqL
          claim_id: c_8LeDjg7MPx67g3LUVB2FSw
          source_id: s_6HC9Tz6usZG9tpzmYrAfiQ
          stance: supports
          locator: 亲属关系：子
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
        - id: cs_m95BHHToUx2hAy8cKZ2d1d
          claim_id: c_8LeDjg7MPx67g3LUVB2FSw
          source_id: s_q2HM3LSwn2hCoD23EH61RQ
          stance: supports
          locator: P40（子女）
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
        - id: cs_oc5QC2J2VaTMP34HqDPpFT
          claim_id: c_8LeDjg7MPx67g3LUVB2FSw
          source_id: s_VnTEQmgZMJcQut4D1oDZhc
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_VnTEQmgZMJcQut4D1oDZhc
            source_type: api_record
            title: 维基数据：王师遂（Q45659117）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659117
            external_identifier: Q45659117
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:08.601Z
            metadata_json: null
        - id: cs_xaLGpe7iqmToPR7JgK4xn6
          claim_id: c_8LeDjg7MPx67g3LUVB2FSw
          source_id: s_2Q3LGuut6emaxJLKvR4naq
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_2Q3LGuut6emaxJLKvR4naq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師遂（175429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175429&o=json
            external_identifier: CBDB:175429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:08.774Z
            metadata_json: null
      object_person:
        id: p_xLQZoUeZEM5RKGerYpvD6T
        status: active
        display_name: 王师遂
        merged_into_person_id: null
    - claim:
        id: c_d1b6M4BFsQKyfoMrF9zBjh
        subject_person_id: p_R43S4tSNhE9EYwSxHQi8DK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qaPq4Sj3Ee1Mhf9K92RLju
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BDCAAQgCAN1WKGPRq3uvRV
          claim_id: c_d1b6M4BFsQKyfoMrF9zBjh
          source_id: s_q2HM3LSwn2hCoD23EH61RQ
          stance: supports
          locator: P40（子女）
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
        - id: cs_NtfudGnpEPemq3XsN4rLdE
          claim_id: c_d1b6M4BFsQKyfoMrF9zBjh
          source_id: s_6HC9Tz6usZG9tpzmYrAfiQ
          stance: supports
          locator: 亲属关系：子
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
        - id: cs_wzEMKpvoTznRtBS2uy4V4n
          claim_id: c_d1b6M4BFsQKyfoMrF9zBjh
          source_id: s_kFUZFoPEJbcbqCFqx5QZgg
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_kFUZFoPEJbcbqCFqx5QZgg
            source_type: api_record
            title: 维基数据：王师述（Q45659176）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659176
            external_identifier: Q45659176
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:08.601Z
            metadata_json: null
        - id: cs_hQ2MgQiPC7uzcu9nqnaDv8
          claim_id: c_d1b6M4BFsQKyfoMrF9zBjh
          source_id: s_KHTAUKuBgVBt2jhn9khtnu
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_KHTAUKuBgVBt2jhn9khtnu
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師述（175430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175430&o=json
            external_identifier: CBDB:175430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:08.751Z
            metadata_json: null
      object_person:
        id: p_qaPq4Sj3Ee1Mhf9K92RLju
        status: active
        display_name: 王师述
        merged_into_person_id: null
    - claim:
        id: c_FqiD3vkiUJTA6vjSdbBGhR
        subject_person_id: p_R43S4tSNhE9EYwSxHQi8DK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KkPdv4FrqXbU3FV2TXVGNh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_161CCVTXJbGLY8k1Z1FvWk
          claim_id: c_FqiD3vkiUJTA6vjSdbBGhR
          source_id: s_6HC9Tz6usZG9tpzmYrAfiQ
          stance: supports
          locator: 亲属关系：子
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
        - id: cs_4EvAwwFT3WbKe6fKU2r3uY
          claim_id: c_FqiD3vkiUJTA6vjSdbBGhR
          source_id: s_q2HM3LSwn2hCoD23EH61RQ
          stance: supports
          locator: P40（子女）
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
        - id: cs_tCP5GL8kqThKLwW8tBpk7q
          claim_id: c_FqiD3vkiUJTA6vjSdbBGhR
          source_id: s_ybcBSS2kLUGGxKQPd7Gvhb
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ybcBSS2kLUGGxKQPd7Gvhb
            source_type: api_record
            title: 维基数据：王师逞（Q45659235）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659235
            external_identifier: Q45659235
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:08.601Z
            metadata_json: null
        - id: cs_2CeTXQwzkxxPq1TUHgdLiv
          claim_id: c_FqiD3vkiUJTA6vjSdbBGhR
          source_id: s_FXDbCZDXMfSudBxZ3hhZQZ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_FXDbCZDXMfSudBxZ3hhZQZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師逞（175431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175431&o=json
            external_identifier: CBDB:175431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:08.737Z
            metadata_json: null
      object_person:
        id: p_KkPdv4FrqXbU3FV2TXVGNh
        status: active
        display_name: 王师逞
        merged_into_person_id: null
    - claim:
        id: c_tWAQ8vVfFtarpWxx1MuNwj
        subject_person_id: p_R43S4tSNhE9EYwSxHQi8DK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ExkrkgzK5wD4MaUdCAerWo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CFfF8tkMQY9N1PBeTPQXE8
          claim_id: c_tWAQ8vVfFtarpWxx1MuNwj
          source_id: s_6HC9Tz6usZG9tpzmYrAfiQ
          stance: supports
          locator: 亲属关系：子
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
        - id: cs_JDxpm2kPp7xkwQuGk1ENUS
          claim_id: c_tWAQ8vVfFtarpWxx1MuNwj
          source_id: s_q2HM3LSwn2hCoD23EH61RQ
          stance: supports
          locator: P40（子女）
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
        - id: cs_prFR7pDXFB11girHW3JGGq
          claim_id: c_tWAQ8vVfFtarpWxx1MuNwj
          source_id: s_4TeHKanyNSxQghiXPjQjeH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_4TeHKanyNSxQghiXPjQjeH
            source_type: api_record
            title: 维基数据：王师造（Q45659296）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659296
            external_identifier: Q45659296
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:10.336Z
            metadata_json: null
        - id: cs_7xgvafsnJ1JwCjEGcQd9nE
          claim_id: c_tWAQ8vVfFtarpWxx1MuNwj
          source_id: s_AWgaa59P49c6jEyPeXtHSb
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_AWgaa59P49c6jEyPeXtHSb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師造（175432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175432&o=json
            external_identifier: CBDB:175432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:10.485Z
            metadata_json: null
      object_person:
        id: p_ExkrkgzK5wD4MaUdCAerWo
        status: active
        display_name: 王师造
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王迺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王迺（卒于857年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175425 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 857年 | accepted |
| name.primary | 王迺 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zkLScucBk4JK57QATK1P5y | 王添 | accepted |
| children | p_xsnR2nso5Ewzd4xpZw67wk | 王师迥 | accepted |
| children | p_S3ed5sGuwGvN5fRZ5r9uCh | 王师达 | accepted |
| children | p_A881rM9t1ZsBXULN5A4SBH | 王师逸 | accepted |
| children | p_xLQZoUeZEM5RKGerYpvD6T | 王师遂 | accepted |
| children | p_qaPq4Sj3Ee1Mhf9K92RLju | 王师述 | accepted |
| children | p_KkPdv4FrqXbU3FV2TXVGNh | 王师逞 | accepted |
| children | p_ExkrkgzK5wD4MaUdCAerWo | 王师造 | accepted |

## 外部来源

- [维基数据：王迺（Q45658880）](https://www.wikidata.org/wiki/Q45658880)
- [维基数据：王师逞（Q45659235）](https://www.wikidata.org/wiki/Q45659235)
- [维基数据：王师达（Q45658998）](https://www.wikidata.org/wiki/Q45658998)
- [维基数据：王师迥（Q45658939）](https://www.wikidata.org/wiki/Q45658939)
- [维基数据：王师述（Q45659176）](https://www.wikidata.org/wiki/Q45659176)
- [维基数据：王师遂（Q45659117）](https://www.wikidata.org/wiki/Q45659117)
- [维基数据：王师逸（Q45659057）](https://www.wikidata.org/wiki/Q45659057)
- [维基数据：王师造（Q45659296）](https://www.wikidata.org/wiki/Q45659296)
- [维基数据：王添（Q45657810）](https://www.wikidata.org/wiki/Q45657810)
- [CBDB 中国历代人物传记资料库：王迺（175425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175425&o=json)
- [CBDB 中国历代人物传记资料库：王師逞（175431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175431&o=json)
- [CBDB 中国历代人物传记资料库：王師達（175427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175427&o=json)
- [CBDB 中国历代人物传记资料库：王師迥（175426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175426&o=json)
- [CBDB 中国历代人物传记资料库：王師述（175430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175430&o=json)
- [CBDB 中国历代人物传记资料库：王師遂（175429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175429&o=json)
- [CBDB 中国历代人物传记资料库：王師逸（175428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175428&o=json)
- [CBDB 中国历代人物传记资料库：王師造（175432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175432&o=json)
- [CBDB 中国历代人物传记资料库：王添（175407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175407&o=json)
