---
schema: wang-person/v1
id: p_S89vKPvai9yEMN4NRS1jZV
status: active
merged_into: null
display_name: 王愔
cbdb_id: 175443
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wquq7DjKPYK7xeqi7hR1hQ
        subject_person_id: p_S89vKPvai9yEMN4NRS1jZV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愔（卒于709年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175443）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Q2efs7HFDLkP4iAcJMn1Yf
          claim_id: c_wquq7DjKPYK7xeqi7hR1hQ
          source_id: s_bq2C6a9K2XNsgtNLhEKd2B
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_bq2C6a9K2XNsgtNLhEKd2B
            source_type: api_record
            title: 维基数据：王愔（Q45659952）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659952
            external_identifier: Q45659952
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_WQwliPgeRqhnhUcvN7M4iL
          claim_id: c_wquq7DjKPYK7xeqi7hR1hQ
          source_id: s_7U3EttuGHHZxeZjRyAGw86
          stance: supports
          locator: CBDB:175443
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7U3EttuGHHZxeZjRyAGw86
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王愔（175443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175443&o=json
            external_identifier: CBDB:175443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.514Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_gHHk6Ac459RkJ3a9DhfPg6
        subject_person_id: p_S89vKPvai9yEMN4NRS1jZV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 709年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0709-01-01
            latest: 0709-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3rS4631CRtZiSsm3YXWLEy
          claim_id: c_gHHk6Ac459RkJ3a9DhfPg6
          source_id: s_bq2C6a9K2XNsgtNLhEKd2B
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_bq2C6a9K2XNsgtNLhEKd2B
            source_type: api_record
            title: 维基数据：王愔（Q45659952）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659952
            external_identifier: Q45659952
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_t2yd9hqp6ZKojnwPs3CU9p
        subject_person_id: p_S89vKPvai9yEMN4NRS1jZV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愔
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3myQDLfqoyFKAh1Br33u2j
          claim_id: c_t2yd9hqp6ZKojnwPs3CU9p
          source_id: s_bq2C6a9K2XNsgtNLhEKd2B
          stance: supports
          locator: Q45659952
          quotation: null
          interpretation_note: null
          source:
            id: s_bq2C6a9K2XNsgtNLhEKd2B
            source_type: api_record
            title: 维基数据：王愔（Q45659952）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659952
            external_identifier: Q45659952
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_mb9QJ6WPsqF5vJpJbf2Shh
          claim_id: c_t2yd9hqp6ZKojnwPs3CU9p
          source_id: s_7U3EttuGHHZxeZjRyAGw86
          stance: supports
          locator: Q45659952
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5YqrsDx14ynBU6V5D7XoDT
        subject_person_id: p_nw31LhVGAKwzZvJNawAuin
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S89vKPvai9yEMN4NRS1jZV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4Ehra7JKAHtq9Hs3B88LEQ
          claim_id: c_5YqrsDx14ynBU6V5D7XoDT
          source_id: s_3BvwN6qmnvGmoMKpTtxD29
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_3BvwN6qmnvGmoMKpTtxD29
            source_type: api_record
            title: 维基数据：王续（Q45659893）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659893
            external_identifier: Q45659893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:23.430Z
            metadata_json: null
        - id: cs_KdJwmBK294t9pArg8BDopE
          claim_id: c_5YqrsDx14ynBU6V5D7XoDT
          source_id: s_b5wKNwCa3xyN423a66jL7z
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_b5wKNwCa3xyN423a66jL7z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王續（175442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175442&o=json
            external_identifier: CBDB:175442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:23.596Z
            metadata_json: null
        - id: cs_1qFcycYG3bJmMm8Sw1Kecy
          claim_id: c_5YqrsDx14ynBU6V5D7XoDT
          source_id: s_bq2C6a9K2XNsgtNLhEKd2B
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_bq2C6a9K2XNsgtNLhEKd2B
            source_type: api_record
            title: 维基数据：王愔（Q45659952）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659952
            external_identifier: Q45659952
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_LV8FbnEizd8FCD29W2jwNi
          claim_id: c_5YqrsDx14ynBU6V5D7XoDT
          source_id: s_7U3EttuGHHZxeZjRyAGw86
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7U3EttuGHHZxeZjRyAGw86
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王愔（175443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175443&o=json
            external_identifier: CBDB:175443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.514Z
            metadata_json: null
      object_person:
        id: p_nw31LhVGAKwzZvJNawAuin
        status: active
        display_name: 王续
        merged_into_person_id: null
  children:
    - claim:
        id: c_M1m6GBrk94xRi3P4mG29po
        subject_person_id: p_S89vKPvai9yEMN4NRS1jZV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NxL5nmHo9NUmngAbWShntk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_MHExvgjbi8mBTrYm9sjQPR
          claim_id: c_M1m6GBrk94xRi3P4mG29po
          source_id: s_7U3EttuGHHZxeZjRyAGw86
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7U3EttuGHHZxeZjRyAGw86
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王愔（175443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175443&o=json
            external_identifier: CBDB:175443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.514Z
            metadata_json: null
        - id: cs_qN62CCGdnGQnpwJm2aUhZZ
          claim_id: c_M1m6GBrk94xRi3P4mG29po
          source_id: s_bq2C6a9K2XNsgtNLhEKd2B
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bq2C6a9K2XNsgtNLhEKd2B
            source_type: api_record
            title: 维基数据：王愔（Q45659952）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659952
            external_identifier: Q45659952
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_MKsBtLQaVvY32bdDxaBesS
          claim_id: c_M1m6GBrk94xRi3P4mG29po
          source_id: s_GC65NEi1va7kUxBQCDcsih
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_GC65NEi1va7kUxBQCDcsih
            source_type: api_record
            title: 维基数据：王延璋（Q45660010）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660010
            external_identifier: Q45660010
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:27.014Z
            metadata_json: null
        - id: cs_CA4YaGTJjMmYhHH1axNG9x
          claim_id: c_M1m6GBrk94xRi3P4mG29po
          source_id: s_sx67dk3w173DCdUmaKMCgW
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_sx67dk3w173DCdUmaKMCgW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王延璋（175444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175444&o=json
            external_identifier: CBDB:175444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:27.334Z
            metadata_json: null
      object_person:
        id: p_NxL5nmHo9NUmngAbWShntk
        status: active
        display_name: 王延璋
        merged_into_person_id: null
    - claim:
        id: c_3GKjzYpPfNfNr3Qe3QPMvZ
        subject_person_id: p_S89vKPvai9yEMN4NRS1jZV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_17ABsBWdLEwRMMmFNhKvUs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_xz6sEr4sENYT5icUDWDsqZ
          claim_id: c_3GKjzYpPfNfNr3Qe3QPMvZ
          source_id: s_bq2C6a9K2XNsgtNLhEKd2B
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bq2C6a9K2XNsgtNLhEKd2B
            source_type: api_record
            title: 维基数据：王愔（Q45659952）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659952
            external_identifier: Q45659952
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_y1CicbeMxkwD91TThswQyB
          claim_id: c_3GKjzYpPfNfNr3Qe3QPMvZ
          source_id: s_7U3EttuGHHZxeZjRyAGw86
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7U3EttuGHHZxeZjRyAGw86
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王愔（175443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175443&o=json
            external_identifier: CBDB:175443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.514Z
            metadata_json: null
        - id: cs_fTnK7bbUjpjVWFgT3TqhVx
          claim_id: c_3GKjzYpPfNfNr3Qe3QPMvZ
          source_id: s_9h5oiJNaRjz9i5uF5RzFye
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_9h5oiJNaRjz9i5uF5RzFye
            source_type: api_record
            title: 维基数据：王延祚（Q45660068）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660068
            external_identifier: Q45660068
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:27.014Z
            metadata_json: null
        - id: cs_K8DFV9UC3BZ2qaepT2G6SE
          claim_id: c_3GKjzYpPfNfNr3Qe3QPMvZ
          source_id: s_VTsvcXuiKYRYJ7BGu5DHDb
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_VTsvcXuiKYRYJ7BGu5DHDb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王延祚（175445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175445&o=json
            external_identifier: CBDB:175445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:27.303Z
            metadata_json: null
      object_person:
        id: p_17ABsBWdLEwRMMmFNhKvUs
        status: active
        display_name: 王延祚
        merged_into_person_id: null
    - claim:
        id: c_ufENYgzctuPFDUzNuppjHA
        subject_person_id: p_S89vKPvai9yEMN4NRS1jZV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NVoACn7cLLvPqpu5A7oM6u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4fMcbrAYuZ7tE8wCN5eTdX
          claim_id: c_ufENYgzctuPFDUzNuppjHA
          source_id: s_bq2C6a9K2XNsgtNLhEKd2B
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bq2C6a9K2XNsgtNLhEKd2B
            source_type: api_record
            title: 维基数据：王愔（Q45659952）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659952
            external_identifier: Q45659952
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_q8634oUn1vLd745toTxzwa
          claim_id: c_ufENYgzctuPFDUzNuppjHA
          source_id: s_7U3EttuGHHZxeZjRyAGw86
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7U3EttuGHHZxeZjRyAGw86
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王愔（175443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175443&o=json
            external_identifier: CBDB:175443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.514Z
            metadata_json: null
        - id: cs_5xRSAY8BfDRBZFFLJDReWp
          claim_id: c_ufENYgzctuPFDUzNuppjHA
          source_id: s_dupCYonYtf2UbE6zWA53ZX
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_dupCYonYtf2UbE6zWA53ZX
            source_type: api_record
            title: 维基数据：王延肃（Q45660129）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660129
            external_identifier: Q45660129
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:28.974Z
            metadata_json: null
        - id: cs_Qe3PfY7DbuW49Pii7e6xyU
          claim_id: c_ufENYgzctuPFDUzNuppjHA
          source_id: s_z8Kc4qtGrQWzm5GUjX2GgB
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_z8Kc4qtGrQWzm5GUjX2GgB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王延肅（175446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175446&o=json
            external_identifier: CBDB:175446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:29.123Z
            metadata_json: null
      object_person:
        id: p_NVoACn7cLLvPqpu5A7oM6u
        status: active
        display_name: 王延肃
        merged_into_person_id: null
    - claim:
        id: c_yiCUYtZxbNvZBmkmjN66Ye
        subject_person_id: p_S89vKPvai9yEMN4NRS1jZV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TWpmF4vu7EQRcamByreerP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_TxR3GPVBFWwHUu62bcZzkc
          claim_id: c_yiCUYtZxbNvZBmkmjN66Ye
          source_id: s_7U3EttuGHHZxeZjRyAGw86
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7U3EttuGHHZxeZjRyAGw86
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王愔（175443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175443&o=json
            external_identifier: CBDB:175443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.514Z
            metadata_json: null
        - id: cs_vrMREtX8pWC8ayvXdFTWW7
          claim_id: c_yiCUYtZxbNvZBmkmjN66Ye
          source_id: s_bq2C6a9K2XNsgtNLhEKd2B
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bq2C6a9K2XNsgtNLhEKd2B
            source_type: api_record
            title: 维基数据：王愔（Q45659952）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659952
            external_identifier: Q45659952
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_aGyyd5dVJTJQk4fMudaHmx
          claim_id: c_yiCUYtZxbNvZBmkmjN66Ye
          source_id: s_vuaN3J1AYNonLkYd41btoG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vuaN3J1AYNonLkYd41btoG
            source_type: api_record
            title: 维基数据：王延之（Q45660186）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660186
            external_identifier: Q45660186
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:28.974Z
            metadata_json: null
        - id: cs_H6MWHePT5puXTVzbZ8sVHK
          claim_id: c_yiCUYtZxbNvZBmkmjN66Ye
          source_id: s_jsTsdGgHvYkvw4yrHK6vr4
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jsTsdGgHvYkvw4yrHK6vr4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王延之（175447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175447&o=json
            external_identifier: CBDB:175447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:29.134Z
            metadata_json: null
      object_person:
        id: p_TWpmF4vu7EQRcamByreerP
        status: active
        display_name: 王延之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王愔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王愔（卒于709年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175443） | accepted |
| death.date | 709年 | accepted |
| name.primary | 王愔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nw31LhVGAKwzZvJNawAuin | 王续 | accepted |
| children | p_NxL5nmHo9NUmngAbWShntk | 王延璋 | accepted |
| children | p_17ABsBWdLEwRMMmFNhKvUs | 王延祚 | accepted |
| children | p_NVoACn7cLLvPqpu5A7oM6u | 王延肃 | accepted |
| children | p_TWpmF4vu7EQRcamByreerP | 王延之 | accepted |

## 外部来源

- [维基数据：王续（Q45659893）](https://www.wikidata.org/wiki/Q45659893)
- [维基数据：王延肃（Q45660129）](https://www.wikidata.org/wiki/Q45660129)
- [维基数据：王延璋（Q45660010）](https://www.wikidata.org/wiki/Q45660010)
- [维基数据：王延之（Q45660186）](https://www.wikidata.org/wiki/Q45660186)
- [维基数据：王延祚（Q45660068）](https://www.wikidata.org/wiki/Q45660068)
- [维基数据：王愔（Q45659952）](https://www.wikidata.org/wiki/Q45659952)
- [CBDB 中国历代人物传记资料库：王續（175442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175442&o=json)
- [CBDB 中国历代人物传记资料库：王延肅（175446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175446&o=json)
- [CBDB 中国历代人物传记资料库：王延璋（175444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175444&o=json)
- [CBDB 中国历代人物传记资料库：王延之（175447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175447&o=json)
- [CBDB 中国历代人物传记资料库：王延祚（175445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175445&o=json)
- [CBDB 中国历代人物传记资料库：王愔（175443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175443&o=json)
