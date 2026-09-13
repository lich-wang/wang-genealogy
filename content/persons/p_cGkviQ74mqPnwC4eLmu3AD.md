---
schema: wang-person/v1
id: p_cGkviQ74mqPnwC4eLmu3AD
status: active
merged_into: null
display_name: 王侁
cbdb_id: 175526
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8WUPT83c7D9Zk4XGHmjgms
        subject_person_id: p_cGkviQ74mqPnwC4eLmu3AD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侁（卒于746年），唐人物。籍贯咸陽，曾任州刺史。（中国历代人物传记资料库 CBDB 175526）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_XM1pzv7R6P5KbsxK2mT7Hh
          claim_id: c_8WUPT83c7D9Zk4XGHmjgms
          source_id: s_S3HDHGLJf9GpmQL5eDFUmW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_S3HDHGLJf9GpmQL5eDFUmW
            source_type: api_record
            title: 维基数据：王侁（Q45664762）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664762
            external_identifier: Q45664762
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:28.974Z
            metadata_json: null
        - id: cs_cnczW2-khEOTWiu6SQ5WHw
          claim_id: c_8WUPT83c7D9Zk4XGHmjgms
          source_id: s_9qDvYDyphuaW4PbCNK4SSY
          stance: supports
          locator: CBDB:175526
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_9qDvYDyphuaW4PbCNK4SSY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王侁（175526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175526&o=json
            external_identifier: CBDB:175526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:29.123Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9UnCkfPoM9jUgvNPo7i1jY
        subject_person_id: p_cGkviQ74mqPnwC4eLmu3AD
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
        - id: cs_26XGy5K7yCT3SqUMMixcjE
          claim_id: c_9UnCkfPoM9jUgvNPo7i1jY
          source_id: s_S3HDHGLJf9GpmQL5eDFUmW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_S3HDHGLJf9GpmQL5eDFUmW
            source_type: api_record
            title: 维基数据：王侁（Q45664762）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664762
            external_identifier: Q45664762
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:28.974Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WJRtDQHSPc1ZNChPiHBAu6
        subject_person_id: p_cGkviQ74mqPnwC4eLmu3AD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侁
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ANPQUAHZAwE6Xi1D3v5dCc
          claim_id: c_WJRtDQHSPc1ZNChPiHBAu6
          source_id: s_S3HDHGLJf9GpmQL5eDFUmW
          stance: supports
          locator: Q45664762
          quotation: null
          interpretation_note: null
          source:
            id: s_S3HDHGLJf9GpmQL5eDFUmW
            source_type: api_record
            title: 维基数据：王侁（Q45664762）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664762
            external_identifier: Q45664762
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:28.974Z
            metadata_json: null
        - id: cs_M4ht2W8jv3BpLCEHR593u2
          claim_id: c_WJRtDQHSPc1ZNChPiHBAu6
          source_id: s_9qDvYDyphuaW4PbCNK4SSY
          stance: supports
          locator: Q45664762
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DAEUj25ZcCQYw55yXRwcEh
        subject_person_id: p_LPg6udkMsMFQajuGotTCsg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cGkviQ74mqPnwC4eLmu3AD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5WKNSEzLwxL5T5DgiREauM
          claim_id: c_DAEUj25ZcCQYw55yXRwcEh
          source_id: s_68qrj2UKfHMo1dv7tEk12B
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_68qrj2UKfHMo1dv7tEk12B
            source_type: api_record
            title: 维基数据：王晞（Q45660489）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660489
            external_identifier: Q45660489
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:36.178Z
            metadata_json: null
        - id: cs_QMAKTJg87oHtJcsCBWE2ik
          claim_id: c_DAEUj25ZcCQYw55yXRwcEh
          source_id: s_4p3WmTHYyRJqL3rTKRwCSJ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_4p3WmTHYyRJqL3rTKRwCSJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晞（175452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175452&o=json
            external_identifier: CBDB:175452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:36.328Z
            metadata_json: null
        - id: cs_P1JfceBJENJEje5j9uEsqB
          claim_id: c_DAEUj25ZcCQYw55yXRwcEh
          source_id: s_S3HDHGLJf9GpmQL5eDFUmW
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_S3HDHGLJf9GpmQL5eDFUmW
            source_type: api_record
            title: 维基数据：王侁（Q45664762）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664762
            external_identifier: Q45664762
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:28.974Z
            metadata_json: null
        - id: cs_xPY1ftWmxDzPxHipbZyCMD
          claim_id: c_DAEUj25ZcCQYw55yXRwcEh
          source_id: s_9qDvYDyphuaW4PbCNK4SSY
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_9qDvYDyphuaW4PbCNK4SSY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王侁（175526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175526&o=json
            external_identifier: CBDB:175526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:29.123Z
            metadata_json: null
      object_person:
        id: p_LPg6udkMsMFQajuGotTCsg
        status: active
        display_name: 王晞
        merged_into_person_id: null
  children:
    - claim:
        id: c_W4p1iX9FJoW8JepM4xowFi
        subject_person_id: p_cGkviQ74mqPnwC4eLmu3AD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FekPAGJTS2MEpfWDkLmhCu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_EX18TV3Bk8LvYBAdFK2Mip
          claim_id: c_W4p1iX9FJoW8JepM4xowFi
          source_id: s_S3HDHGLJf9GpmQL5eDFUmW
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_S3HDHGLJf9GpmQL5eDFUmW
            source_type: api_record
            title: 维基数据：王侁（Q45664762）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664762
            external_identifier: Q45664762
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:28.974Z
            metadata_json: null
        - id: cs_ftCBcMbzMvcCeAgroQxhQ9
          claim_id: c_W4p1iX9FJoW8JepM4xowFi
          source_id: s_9qDvYDyphuaW4PbCNK4SSY
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_9qDvYDyphuaW4PbCNK4SSY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王侁（175526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175526&o=json
            external_identifier: CBDB:175526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:29.123Z
            metadata_json: null
        - id: cs_A6BTurXUJGzknYnv7SCqYd
          claim_id: c_W4p1iX9FJoW8JepM4xowFi
          source_id: s_Ld539iYsmDQVtRTgGCFh9C
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Ld539iYsmDQVtRTgGCFh9C
            source_type: api_record
            title: 维基数据：王漪（Q45664815）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664815
            external_identifier: Q45664815
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.369Z
            metadata_json: null
        - id: cs_pjHABguq44YWs8aky6zS25
          claim_id: c_W4p1iX9FJoW8JepM4xowFi
          source_id: s_wrud6KGDswJN4pXL3gh9Qb
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_wrud6KGDswJN4pXL3gh9Qb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王漪（175527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175527&o=json
            external_identifier: CBDB:175527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.563Z
            metadata_json: null
      object_person:
        id: p_FekPAGJTS2MEpfWDkLmhCu
        status: active
        display_name: 王漪
        merged_into_person_id: null
    - claim:
        id: c_EyoWZ11cYeUqceMqWV41it
        subject_person_id: p_cGkviQ74mqPnwC4eLmu3AD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Se45cXwL9o2WnPoq4pncyB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_AkncSXjW5rXC9v223jDB8e
          claim_id: c_EyoWZ11cYeUqceMqWV41it
          source_id: s_S3HDHGLJf9GpmQL5eDFUmW
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_S3HDHGLJf9GpmQL5eDFUmW
            source_type: api_record
            title: 维基数据：王侁（Q45664762）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664762
            external_identifier: Q45664762
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:28.974Z
            metadata_json: null
        - id: cs_hLB6WVjYQZCtje6dBqYgcF
          claim_id: c_EyoWZ11cYeUqceMqWV41it
          source_id: s_9qDvYDyphuaW4PbCNK4SSY
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_9qDvYDyphuaW4PbCNK4SSY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王侁（175526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175526&o=json
            external_identifier: CBDB:175526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:29.123Z
            metadata_json: null
        - id: cs_HtXJmvieKgwNMpeS6V8UY8
          claim_id: c_EyoWZ11cYeUqceMqWV41it
          source_id: s_UFSvenArZ2uCZbsmnvLQNW
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_UFSvenArZ2uCZbsmnvLQNW
            source_type: api_record
            title: 维基数据：王泛（Q45664870）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664870
            external_identifier: Q45664870
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.370Z
            metadata_json: null
        - id: cs_UxkF8J5ygaXdDcYoxZiKbp
          claim_id: c_EyoWZ11cYeUqceMqWV41it
          source_id: s_YUgdt56kmxHuPGvJKrvLjL
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_YUgdt56kmxHuPGvJKrvLjL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王泛（175528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175528&o=json
            external_identifier: CBDB:175528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.556Z
            metadata_json: null
      object_person:
        id: p_Se45cXwL9o2WnPoq4pncyB
        status: active
        display_name: 王泛
        merged_into_person_id: null
    - claim:
        id: c_A6mBQ48PK2edQnxwsXyvBi
        subject_person_id: p_cGkviQ74mqPnwC4eLmu3AD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MJy5DTuoAKtNQKP91F7YVb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_dmfEbHFusZzBJVc4PDMXW7
          claim_id: c_A6mBQ48PK2edQnxwsXyvBi
          source_id: s_S3HDHGLJf9GpmQL5eDFUmW
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_S3HDHGLJf9GpmQL5eDFUmW
            source_type: api_record
            title: 维基数据：王侁（Q45664762）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664762
            external_identifier: Q45664762
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:28.974Z
            metadata_json: null
        - id: cs_vLi44ysdzVo4pPewxkiB4f
          claim_id: c_A6mBQ48PK2edQnxwsXyvBi
          source_id: s_9qDvYDyphuaW4PbCNK4SSY
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_9qDvYDyphuaW4PbCNK4SSY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王侁（175526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175526&o=json
            external_identifier: CBDB:175526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:29.123Z
            metadata_json: null
        - id: cs_Fghe3g13kB2NS3A4h6HwCn
          claim_id: c_A6mBQ48PK2edQnxwsXyvBi
          source_id: s_rh328ZC6tAoJwkp3kbwDSm
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_rh328ZC6tAoJwkp3kbwDSm
            source_type: api_record
            title: 维基数据：王渶（Q45665030）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665030
            external_identifier: Q45665030
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.370Z
            metadata_json: null
        - id: cs_MWwvPKBfhW4m77oPksKCLA
          claim_id: c_A6mBQ48PK2edQnxwsXyvBi
          source_id: s_M8qLHHSA7hgn2qjhTbVzJA
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_M8qLHHSA7hgn2qjhTbVzJA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王渶（175531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175531&o=json
            external_identifier: CBDB:175531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.521Z
            metadata_json: null
      object_person:
        id: p_MJy5DTuoAKtNQKP91F7YVb
        status: active
        display_name: 王渶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_wMgwu7UFBDLc1317CVKSby
        subject_person_id: p_cGkviQ74mqPnwC4eLmu3AD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_b5LB8i5ZzNqTwph5kCuvrG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6VdmYejvsBLDy9Zj6Tys3k
          claim_id: c_wMgwu7UFBDLc1317CVKSby
          source_id: s_xLEcAGAMcXLkcFMsmidCME
          stance: supports
          locator: 条文：条文识读（曾祖）（3世）
          quotation: 曾祖王侁。祖父王湧。父王夢祥，监生。
          interpretation_note: null
          source:
            id: s_xLEcAGAMcXLkcFMsmidCME
            source_type: website
            title: 中文维基百科：王锡爵
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1%E7%88%B5
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.949Z
            metadata_json: null
      object_person:
        id: p_b5LB8i5ZzNqTwph5kCuvrG
        status: active
        display_name: 王锡爵
        merged_into_person_id: null
  other: []
---

# 王侁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王侁（卒于746年），唐人物。籍贯咸陽，曾任州刺史。（中国历代人物传记资料库 CBDB 175526） | accepted |
| death.date | 746年 | accepted |
| name.primary | 王侁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LPg6udkMsMFQajuGotTCsg | 王晞 | accepted |
| children | p_FekPAGJTS2MEpfWDkLmhCu | 王漪 | accepted |
| children | p_Se45cXwL9o2WnPoq4pncyB | 王泛 | accepted |
| children | p_MJy5DTuoAKtNQKP91F7YVb | 王渶 | accepted |
| descendants | p_b5LB8i5ZzNqTwph5kCuvrG | 王锡爵 | accepted |

## 外部来源

- [维基数据：王泛（Q45664870）](https://www.wikidata.org/wiki/Q45664870)
- [维基数据：王侁（Q45664762）](https://www.wikidata.org/wiki/Q45664762)
- [维基数据：王晞（Q45660489）](https://www.wikidata.org/wiki/Q45660489)
- [维基数据：王漪（Q45664815）](https://www.wikidata.org/wiki/Q45664815)
- [维基数据：王渶（Q45665030）](https://www.wikidata.org/wiki/Q45665030)
- [中文维基百科：王锡爵](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1%E7%88%B5)
- [CBDB 中国历代人物传记资料库：王泛（175528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175528&o=json)
- [CBDB 中国历代人物传记资料库：王侁（175526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175526&o=json)
- [CBDB 中国历代人物传记资料库：王晞（175452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175452&o=json)
- [CBDB 中国历代人物传记资料库：王漪（175527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175527&o=json)
- [CBDB 中国历代人物传记资料库：王渶（175531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175531&o=json)
