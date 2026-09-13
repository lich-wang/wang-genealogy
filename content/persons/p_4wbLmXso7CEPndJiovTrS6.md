---
schema: wang-person/v1
id: p_4wbLmXso7CEPndJiovTrS6
status: active
merged_into: null
display_name: 王涧
cbdb_id: 175512
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qY8JN11hRsJGKQuUXmrGzA
        subject_person_id: p_4wbLmXso7CEPndJiovTrS6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王涧（卒于783年），唐人物。籍贯咸陽，曾任州長史。（中国历代人物传记资料库 CBDB 175512）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_mJsNZwEsbAkb9ywMX9jbY2
          claim_id: c_qY8JN11hRsJGKQuUXmrGzA
          source_id: s_uCb6D1MQ7rqZFP4WWBbACN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_uCb6D1MQ7rqZFP4WWBbACN
            source_type: api_record
            title: 维基数据：王涧（Q45663995）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663995
            external_identifier: Q45663995
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.369Z
            metadata_json: null
        - id: cs_vllutfmXmy_OxOcVe1RQpr
          claim_id: c_qY8JN11hRsJGKQuUXmrGzA
          source_id: s_x9jX1CPvi1JzpZGHEakrCh
          stance: supports
          locator: CBDB:175512
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_x9jX1CPvi1JzpZGHEakrCh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澗（175512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175512&o=json
            external_identifier: CBDB:175512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.523Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_v6pXu9By8B3HYagRWnsJQp
        subject_person_id: p_4wbLmXso7CEPndJiovTrS6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 783年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0783-01-01
            latest: 0783-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BtSqERRaQZDuGdiSDobq3n
          claim_id: c_v6pXu9By8B3HYagRWnsJQp
          source_id: s_uCb6D1MQ7rqZFP4WWBbACN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_uCb6D1MQ7rqZFP4WWBbACN
            source_type: api_record
            title: 维基数据：王涧（Q45663995）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663995
            external_identifier: Q45663995
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.369Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MeRdSUDLJLzuKL5cWPdQUe
        subject_person_id: p_4wbLmXso7CEPndJiovTrS6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王涧
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ArX7C2Mw7LUHqKJ91FBET9
          claim_id: c_MeRdSUDLJLzuKL5cWPdQUe
          source_id: s_uCb6D1MQ7rqZFP4WWBbACN
          stance: supports
          locator: Q45663995
          quotation: null
          interpretation_note: null
          source:
            id: s_uCb6D1MQ7rqZFP4WWBbACN
            source_type: api_record
            title: 维基数据：王涧（Q45663995）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663995
            external_identifier: Q45663995
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.369Z
            metadata_json: null
        - id: cs_pL843pxHiV7BeETfEaFyAG
          claim_id: c_MeRdSUDLJLzuKL5cWPdQUe
          source_id: s_x9jX1CPvi1JzpZGHEakrCh
          stance: supports
          locator: Q45663995
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nLk6YTh4u3u1C33vuk3P58
        subject_person_id: p_Kc9Jf7R9CePnQgCjQWHCUx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4wbLmXso7CEPndJiovTrS6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_E4eq495eS5uE9sPNyFYZbv
          claim_id: c_nLk6YTh4u3u1C33vuk3P58
          source_id: s_nB16U2nhz9j6YJvQSAZzMC
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_nB16U2nhz9j6YJvQSAZzMC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王俌（175453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175453&o=json
            external_identifier: CBDB:175453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:27.181Z
            metadata_json: null
        - id: cs_JDC8Tn5Yf3FEacMm6sqsSZ
          claim_id: c_nLk6YTh4u3u1C33vuk3P58
          source_id: s_vyWmh7JBAZcLjsXumeRUjc
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_vyWmh7JBAZcLjsXumeRUjc
            source_type: api_record
            title: 维基数据：王俌（Q45660547）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660547
            external_identifier: Q45660547
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:27.013Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BF%8C_(%E5%94%90%E6%9C%9D)
        - id: cs_XCy4e7zB52GKNzysZEVKNg
          claim_id: c_nLk6YTh4u3u1C33vuk3P58
          source_id: s_uCb6D1MQ7rqZFP4WWBbACN
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_uCb6D1MQ7rqZFP4WWBbACN
            source_type: api_record
            title: 维基数据：王涧（Q45663995）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663995
            external_identifier: Q45663995
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.369Z
            metadata_json: null
        - id: cs_XXz8odFg7pAAo6rF18ZdnM
          claim_id: c_nLk6YTh4u3u1C33vuk3P58
          source_id: s_x9jX1CPvi1JzpZGHEakrCh
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_x9jX1CPvi1JzpZGHEakrCh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澗（175512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175512&o=json
            external_identifier: CBDB:175512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.523Z
            metadata_json: null
      object_person:
        id: p_Kc9Jf7R9CePnQgCjQWHCUx
        status: active
        display_name: 王俌
        merged_into_person_id: null
  children:
    - claim:
        id: c_AoHmPHaxSmc9yRsjWwcu87
        subject_person_id: p_4wbLmXso7CEPndJiovTrS6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ang9eiGuniGWoebR7bHwTe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Ga7ZjMufGk5LRLUgJmFPX2
          claim_id: c_AoHmPHaxSmc9yRsjWwcu87
          source_id: s_uCb6D1MQ7rqZFP4WWBbACN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_uCb6D1MQ7rqZFP4WWBbACN
            source_type: api_record
            title: 维基数据：王涧（Q45663995）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663995
            external_identifier: Q45663995
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.369Z
            metadata_json: null
        - id: cs_ZkadLtS1sAMN8WLtbPF4VF
          claim_id: c_AoHmPHaxSmc9yRsjWwcu87
          source_id: s_x9jX1CPvi1JzpZGHEakrCh
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_x9jX1CPvi1JzpZGHEakrCh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澗（175512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175512&o=json
            external_identifier: CBDB:175512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.523Z
            metadata_json: null
        - id: cs_YCQh3PxAwSoUeBrCvy9egM
          claim_id: c_AoHmPHaxSmc9yRsjWwcu87
          source_id: s_QpGCg8A8WLovPFGsSEKdz8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_QpGCg8A8WLovPFGsSEKdz8
            source_type: api_record
            title: 维基数据：王源植（Q45664050）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664050
            external_identifier: Q45664050
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
        - id: cs_5azWgRJ5b9AzcCxFdoTJdM
          claim_id: c_AoHmPHaxSmc9yRsjWwcu87
          source_id: s_VCd9i2L3UPKSt61BT7yQco
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_VCd9i2L3UPKSt61BT7yQco
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源植（175513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175513&o=json
            external_identifier: CBDB:175513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:33.275Z
            metadata_json: null
      object_person:
        id: p_Ang9eiGuniGWoebR7bHwTe
        status: active
        display_name: 王源植
        merged_into_person_id: null
    - claim:
        id: c_kdinXPv4Gd4zupYEM1D7CP
        subject_person_id: p_4wbLmXso7CEPndJiovTrS6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Y6EHp3ASyHjGNQTJX1LGfW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_151GY2f4AgrKqYdct6EHJu
          claim_id: c_kdinXPv4Gd4zupYEM1D7CP
          source_id: s_x9jX1CPvi1JzpZGHEakrCh
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_x9jX1CPvi1JzpZGHEakrCh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澗（175512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175512&o=json
            external_identifier: CBDB:175512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.523Z
            metadata_json: null
        - id: cs_2DWpWiJZ5F4pv9x3qx7kmZ
          claim_id: c_kdinXPv4Gd4zupYEM1D7CP
          source_id: s_uCb6D1MQ7rqZFP4WWBbACN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_uCb6D1MQ7rqZFP4WWBbACN
            source_type: api_record
            title: 维基数据：王涧（Q45663995）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663995
            external_identifier: Q45663995
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.369Z
            metadata_json: null
        - id: cs_jLL7cRB2LBUcRedw6YZX6m
          claim_id: c_kdinXPv4Gd4zupYEM1D7CP
          source_id: s_hhP5pWtrmDVXGJsgnUp94e
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_hhP5pWtrmDVXGJsgnUp94e
            source_type: api_record
            title: 维基数据：王源会（Q45664488）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664488
            external_identifier: Q45664488
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:34.816Z
            metadata_json: null
        - id: cs_4WFk7WVS82gbBq1wpS4DBd
          claim_id: c_kdinXPv4Gd4zupYEM1D7CP
          source_id: s_2ihpRyFkaV1AsVLrQ4p9S3
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_2ihpRyFkaV1AsVLrQ4p9S3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源會（175521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175521&o=json
            external_identifier: CBDB:175521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:34.973Z
            metadata_json: null
      object_person:
        id: p_Y6EHp3ASyHjGNQTJX1LGfW
        status: active
        display_name: 王源会
        merged_into_person_id: null
    - claim:
        id: c_M3BhAD6B7H6FiTmTBuUyuq
        subject_person_id: p_4wbLmXso7CEPndJiovTrS6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D6hhALHQZy1JP2VSFANMPh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_SvHhbeRCXFYXpfmHGdhCj7
          claim_id: c_M3BhAD6B7H6FiTmTBuUyuq
          source_id: s_x9jX1CPvi1JzpZGHEakrCh
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_x9jX1CPvi1JzpZGHEakrCh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澗（175512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175512&o=json
            external_identifier: CBDB:175512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.523Z
            metadata_json: null
        - id: cs_zysD2av5rF5DikC3LwijK3
          claim_id: c_M3BhAD6B7H6FiTmTBuUyuq
          source_id: s_uCb6D1MQ7rqZFP4WWBbACN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_uCb6D1MQ7rqZFP4WWBbACN
            source_type: api_record
            title: 维基数据：王涧（Q45663995）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663995
            external_identifier: Q45663995
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.369Z
            metadata_json: null
        - id: cs_xsm8aYS2HrSo3kXpgkk9N9
          claim_id: c_M3BhAD6B7H6FiTmTBuUyuq
          source_id: s_JJqoPbSbRFU4YwS9WEUpmJ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_JJqoPbSbRFU4YwS9WEUpmJ
            source_type: api_record
            title: 维基数据：王源端（Q45664542）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664542
            external_identifier: Q45664542
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:34.817Z
            metadata_json: null
        - id: cs_NaCHG1jSDFYPgFKnTbshos
          claim_id: c_M3BhAD6B7H6FiTmTBuUyuq
          source_id: s_3oMyBEHySC3D6bb2aQcy9P
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3oMyBEHySC3D6bb2aQcy9P
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源端（175522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175522&o=json
            external_identifier: CBDB:175522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:34.969Z
            metadata_json: null
      object_person:
        id: p_D6hhALHQZy1JP2VSFANMPh
        status: active
        display_name: 王源端
        merged_into_person_id: null
    - claim:
        id: c_yJphTMVnNGXQnb9E1Yjdqy
        subject_person_id: p_4wbLmXso7CEPndJiovTrS6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qRax7g155L6AAygQ9gTzxd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_7NHPWHiqUiah11QVJ4G4Ym
          claim_id: c_yJphTMVnNGXQnb9E1Yjdqy
          source_id: s_uCb6D1MQ7rqZFP4WWBbACN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_uCb6D1MQ7rqZFP4WWBbACN
            source_type: api_record
            title: 维基数据：王涧（Q45663995）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663995
            external_identifier: Q45663995
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.369Z
            metadata_json: null
        - id: cs_mTPWa7eBGC2BsGuXxhcR6v
          claim_id: c_yJphTMVnNGXQnb9E1Yjdqy
          source_id: s_x9jX1CPvi1JzpZGHEakrCh
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_x9jX1CPvi1JzpZGHEakrCh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澗（175512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175512&o=json
            external_identifier: CBDB:175512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.523Z
            metadata_json: null
        - id: cs_rpHJVHNhNUEd7UBZisTQMr
          claim_id: c_yJphTMVnNGXQnb9E1Yjdqy
          source_id: s_d2jLjxNXGSV4t92fKFgsab
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_d2jLjxNXGSV4t92fKFgsab
            source_type: api_record
            title: 维基数据：王源蒙（Q45664652）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664652
            external_identifier: Q45664652
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:34.817Z
            metadata_json: null
        - id: cs_C4XuS4iM7m9dPsMrT2DKRr
          claim_id: c_yJphTMVnNGXQnb9E1Yjdqy
          source_id: s_7cEHvL2vrq8GSPQ7rojFnS
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7cEHvL2vrq8GSPQ7rojFnS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源蒙（175524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175524&o=json
            external_identifier: CBDB:175524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:34.975Z
            metadata_json: null
      object_person:
        id: p_qRax7g155L6AAygQ9gTzxd
        status: active
        display_name: 王源蒙
        merged_into_person_id: null
    - claim:
        id: c_9tSRDBiYsSYFfBqB38nhuz
        subject_person_id: p_4wbLmXso7CEPndJiovTrS6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wZrAHpBrWk4NUaM75h8tNC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Cx9xScDA3wsFYHckWximx3
          claim_id: c_9tSRDBiYsSYFfBqB38nhuz
          source_id: s_x9jX1CPvi1JzpZGHEakrCh
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_x9jX1CPvi1JzpZGHEakrCh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澗（175512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175512&o=json
            external_identifier: CBDB:175512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.523Z
            metadata_json: null
        - id: cs_d2N8ng76271DonZ2KHsL6Z
          claim_id: c_9tSRDBiYsSYFfBqB38nhuz
          source_id: s_uCb6D1MQ7rqZFP4WWBbACN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_uCb6D1MQ7rqZFP4WWBbACN
            source_type: api_record
            title: 维基数据：王涧（Q45663995）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663995
            external_identifier: Q45663995
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.369Z
            metadata_json: null
        - id: cs_PXkb1yjhxZ9SvsSKpwC2UP
          claim_id: c_9tSRDBiYsSYFfBqB38nhuz
          source_id: s_zPiXWU7CVFs285ZbPSBwKr
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_zPiXWU7CVFs285ZbPSBwKr
            source_type: api_record
            title: 维基数据：王退思（Q45664707）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664707
            external_identifier: Q45664707
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:34.817Z
            metadata_json: null
        - id: cs_po4dR9FXy5NxF5rjepJzZS
          claim_id: c_9tSRDBiYsSYFfBqB38nhuz
          source_id: s_rRtgF9TFTSc4CUuxMQG81A
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_rRtgF9TFTSc4CUuxMQG81A
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王退思（175525）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175525&o=json
            external_identifier: CBDB:175525
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:34.971Z
            metadata_json: null
      object_person:
        id: p_wZrAHpBrWk4NUaM75h8tNC
        status: active
        display_name: 王退思
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王涧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王涧（卒于783年），唐人物。籍贯咸陽，曾任州長史。（中国历代人物传记资料库 CBDB 175512） | accepted |
| death.date | 783年 | accepted |
| name.primary | 王涧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Kc9Jf7R9CePnQgCjQWHCUx | 王俌 | accepted |
| children | p_Ang9eiGuniGWoebR7bHwTe | 王源植 | accepted |
| children | p_Y6EHp3ASyHjGNQTJX1LGfW | 王源会 | accepted |
| children | p_D6hhALHQZy1JP2VSFANMPh | 王源端 | accepted |
| children | p_qRax7g155L6AAygQ9gTzxd | 王源蒙 | accepted |
| children | p_wZrAHpBrWk4NUaM75h8tNC | 王退思 | accepted |

## 外部来源

- [维基数据：王俌（Q45660547）](https://www.wikidata.org/wiki/Q45660547)
- [维基数据：王涧（Q45663995）](https://www.wikidata.org/wiki/Q45663995)
- [维基数据：王退思（Q45664707）](https://www.wikidata.org/wiki/Q45664707)
- [维基数据：王源端（Q45664542）](https://www.wikidata.org/wiki/Q45664542)
- [维基数据：王源会（Q45664488）](https://www.wikidata.org/wiki/Q45664488)
- [维基数据：王源蒙（Q45664652）](https://www.wikidata.org/wiki/Q45664652)
- [维基数据：王源植（Q45664050）](https://www.wikidata.org/wiki/Q45664050)
- [CBDB 中国历代人物传记资料库：王俌（175453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175453&o=json)
- [CBDB 中国历代人物传记资料库：王澗（175512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175512&o=json)
- [CBDB 中国历代人物传记资料库：王退思（175525）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175525&o=json)
- [CBDB 中国历代人物传记资料库：王源端（175522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175522&o=json)
- [CBDB 中国历代人物传记资料库：王源會（175521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175521&o=json)
- [CBDB 中国历代人物传记资料库：王源蒙（175524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175524&o=json)
- [CBDB 中国历代人物传记资料库：王源植（175513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175513&o=json)
