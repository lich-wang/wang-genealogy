---
schema: wang-person/v1
id: p_LPg6udkMsMFQajuGotTCsg
status: active
merged_into: null
display_name: 王晞
cbdb_id: 175452
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QMA3sN32mec8RL45FbZbhc
        subject_person_id: p_LPg6udkMsMFQajuGotTCsg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晞（卒于709年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任州刺史。中国历代人物传记资料库（CBDB）以人物编号 175452 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_V1XpWws78esFXoM5zmxW6n
          claim_id: c_QMA3sN32mec8RL45FbZbhc
          source_id: s_68qrj2UKfHMo1dv7tEk12B
          stance: supports
          locator: null
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
        - id: cs_P7aqow0w3DgoZa8V1UJKYV
          claim_id: c_QMA3sN32mec8RL45FbZbhc
          source_id: s_4p3WmTHYyRJqL3rTKRwCSJ
          stance: supports
          locator: CBDB:175452
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_jAETYNDqH3uFkJa7xHgdw1
        subject_person_id: p_LPg6udkMsMFQajuGotTCsg
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
        - id: cs_1NwZCFyZEJvEaEPZTPTR42
          claim_id: c_jAETYNDqH3uFkJa7xHgdw1
          source_id: s_68qrj2UKfHMo1dv7tEk12B
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iGLCQsoetPZ5UaLF6VhjFP
        subject_person_id: p_LPg6udkMsMFQajuGotTCsg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晞
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WaHqLFdDAAwqnZ5MKmc86p
          claim_id: c_iGLCQsoetPZ5UaLF6VhjFP
          source_id: s_4p3WmTHYyRJqL3rTKRwCSJ
          stance: supports
          locator: Q45660489
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_kaAKJAFVGGhdr1gihEZwSA
          claim_id: c_iGLCQsoetPZ5UaLF6VhjFP
          source_id: s_68qrj2UKfHMo1dv7tEk12B
          stance: supports
          locator: Q45660489
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
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KC2KuMbDKFjhBt3z5qSzaX
        subject_person_id: p_ZSBMnefxQNX4zwGDPTrYX5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LPg6udkMsMFQajuGotTCsg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_DTNNQ5iqBbttzba7HxqZXt
          claim_id: c_KC2KuMbDKFjhBt3z5qSzaX
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
        - id: cs_nbExpALABWD9Ry7bzTWg1e
          claim_id: c_KC2KuMbDKFjhBt3z5qSzaX
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
        - id: cs_3wCW8TbpWJYBH77DokgQib
          claim_id: c_KC2KuMbDKFjhBt3z5qSzaX
          source_id: s_68qrj2UKfHMo1dv7tEk12B
          stance: supports
          locator: P22（父）
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
        - id: cs_ULN2R2k7ebEzYpjWL99xy1
          claim_id: c_KC2KuMbDKFjhBt3z5qSzaX
          source_id: s_4p3WmTHYyRJqL3rTKRwCSJ
          stance: supports
          locator: 亲属关系：父
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
      object_person:
        id: p_ZSBMnefxQNX4zwGDPTrYX5
        status: active
        display_name: 王方庆
        merged_into_person_id: null
  children:
    - claim:
        id: c_TusVWU9mRNwpY4NCxx133H
        subject_person_id: p_LPg6udkMsMFQajuGotTCsg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Kc9Jf7R9CePnQgCjQWHCUx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Dohd13Cnkvx3AgBC4WpiKa
          claim_id: c_TusVWU9mRNwpY4NCxx133H
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
        - id: cs_WfybY3A2tEP1eUPWFmZKdN
          claim_id: c_TusVWU9mRNwpY4NCxx133H
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
        - id: cs_F7DuMfMm4Cex1V8kqmhhXq
          claim_id: c_TusVWU9mRNwpY4NCxx133H
          source_id: s_vyWmh7JBAZcLjsXumeRUjc
          stance: supports
          locator: P22（父）
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
        - id: cs_2SkW9QkT9C7xPb5pz7PWBm
          claim_id: c_TusVWU9mRNwpY4NCxx133H
          source_id: s_nB16U2nhz9j6YJvQSAZzMC
          stance: supports
          locator: 亲属关系：父
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
      object_person:
        id: p_Kc9Jf7R9CePnQgCjQWHCUx
        status: active
        display_name: 王俌
        merged_into_person_id: null
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
        id: p_cGkviQ74mqPnwC4eLmu3AD
        status: active
        display_name: 王侁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王晞（卒于709年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任州刺史。中国历代人物传记资料库（CBDB）以人物编号 175452 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 709年 | accepted |
| name.primary | 王晞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZSBMnefxQNX4zwGDPTrYX5 | 王方庆 | accepted |
| children | p_Kc9Jf7R9CePnQgCjQWHCUx | 王俌 | accepted |
| children | p_cGkviQ74mqPnwC4eLmu3AD | 王侁 | accepted |

## 外部来源

- [维基数据：王方庆（Q7478164）](https://www.wikidata.org/wiki/Q7478164)
- [维基数据：王俌（Q45660547）](https://www.wikidata.org/wiki/Q45660547)
- [维基数据：王侁（Q45664762）](https://www.wikidata.org/wiki/Q45664762)
- [维基数据：王晞（Q45660489）](https://www.wikidata.org/wiki/Q45660489)
- [CBDB 中国历代人物传记资料库：王綝（175451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175451&o=json)
- [CBDB 中国历代人物传记资料库：王俌（175453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175453&o=json)
- [CBDB 中国历代人物传记资料库：王侁（175526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175526&o=json)
- [CBDB 中国历代人物传记资料库：王晞（175452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175452&o=json)
