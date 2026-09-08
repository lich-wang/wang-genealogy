---
schema: wang-person/v1
id: p_gWJemB5XduGNkLqdFcrivv
status: active
merged_into: null
display_name: 王鐬
cbdb_id: 175544
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LhZ91eTL97j1X5EVAZW4FJ
        subject_person_id: p_gWJemB5XduGNkLqdFcrivv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐬（卒于842年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任右諫議大夫。中国历代人物传记资料库（CBDB）以人物编号 175544 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3b6a9nd2268wLR8TRUgcB6
          claim_id: c_LhZ91eTL97j1X5EVAZW4FJ
          source_id: s_RWTsEqw5xx6766DiY6L6C6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_RWTsEqw5xx6766DiY6L6C6
            source_type: api_record
            title: 维基数据：王鐬（Q45665676）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665676
            external_identifier: Q45665676
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:43.327Z
            metadata_json: null
        - id: cs_qD-dJF13bGnSAOdpjQ1z9d
          claim_id: c_LhZ91eTL97j1X5EVAZW4FJ
          source_id: s_J1jD7P5iGBwY2Y3Rq69tSJ
          stance: supports
          locator: CBDB:175544
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_J1jD7P5iGBwY2Y3Rq69tSJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鐬（175544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175544&o=json
            external_identifier: CBDB:175544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:43.463Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_eAp65zFoLPHxuNBfFiukQS
        subject_person_id: p_gWJemB5XduGNkLqdFcrivv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 842年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0842-01-01
            latest: 0842-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SHBoV7AT6kpQ9fQN9wL13n
          claim_id: c_eAp65zFoLPHxuNBfFiukQS
          source_id: s_RWTsEqw5xx6766DiY6L6C6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_RWTsEqw5xx6766DiY6L6C6
            source_type: api_record
            title: 维基数据：王鐬（Q45665676）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665676
            external_identifier: Q45665676
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:43.327Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uHJNkWvktwVR3DZxHnhFoQ
        subject_person_id: p_gWJemB5XduGNkLqdFcrivv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐬
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KqAoekQDdMqCzDR8xVzP2D
          claim_id: c_uHJNkWvktwVR3DZxHnhFoQ
          source_id: s_J1jD7P5iGBwY2Y3Rq69tSJ
          stance: supports
          locator: Q45665676
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_kw3nJLLv1i81z2PFnEkoeM
          claim_id: c_uHJNkWvktwVR3DZxHnhFoQ
          source_id: s_RWTsEqw5xx6766DiY6L6C6
          stance: supports
          locator: Q45665676
          quotation: null
          interpretation_note: null
          source:
            id: s_RWTsEqw5xx6766DiY6L6C6
            source_type: api_record
            title: 维基数据：王鐬（Q45665676）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665676
            external_identifier: Q45665676
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:43.327Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xTKV2QsXk6otG2G3BGYF1C
        subject_person_id: p_VFY7pa85s4J6zQ3CEWQetD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gWJemB5XduGNkLqdFcrivv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_KTE6vz55UQFbLBonKevvse
          claim_id: c_xTKV2QsXk6otG2G3BGYF1C
          source_id: s_FHnrH5NQLrDst3z6jtiM9A
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_FHnrH5NQLrDst3z6jtiM9A
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王及（175543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175543&o=json
            external_identifier: CBDB:175543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:12.180Z
            metadata_json: null
        - id: cs_aQ2o8pqzFQiZGTY8mTNZou
          claim_id: c_xTKV2QsXk6otG2G3BGYF1C
          source_id: s_R2ERVGUSTFdaLQcas86RM7
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_R2ERVGUSTFdaLQcas86RM7
            source_type: api_record
            title: 维基数据：王及（Q45665623）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665623
            external_identifier: Q45665623
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:12.028Z
            metadata_json: null
        - id: cs_hFs9peojLWe89RY7AhAkCa
          claim_id: c_xTKV2QsXk6otG2G3BGYF1C
          source_id: s_RWTsEqw5xx6766DiY6L6C6
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_RWTsEqw5xx6766DiY6L6C6
            source_type: api_record
            title: 维基数据：王鐬（Q45665676）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665676
            external_identifier: Q45665676
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:43.327Z
            metadata_json: null
        - id: cs_xEfWUGXeFCEv4JeQaMuGsp
          claim_id: c_xTKV2QsXk6otG2G3BGYF1C
          source_id: s_J1jD7P5iGBwY2Y3Rq69tSJ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_J1jD7P5iGBwY2Y3Rq69tSJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鐬（175544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175544&o=json
            external_identifier: CBDB:175544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:43.463Z
            metadata_json: null
      object_person:
        id: p_VFY7pa85s4J6zQ3CEWQetD
        status: active
        display_name: 王及
        merged_into_person_id: null
  children:
    - claim:
        id: c_y7TauhNfATmVSZebDCjgup
        subject_person_id: p_gWJemB5XduGNkLqdFcrivv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DgA93iH24ZodpFmFWyHcNR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_E3AcE2E3bu44Fzsrgq9V3o
          claim_id: c_y7TauhNfATmVSZebDCjgup
          source_id: s_J1jD7P5iGBwY2Y3Rq69tSJ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_J1jD7P5iGBwY2Y3Rq69tSJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鐬（175544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175544&o=json
            external_identifier: CBDB:175544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:43.463Z
            metadata_json: null
        - id: cs_ffTxi6vewLZzfGUeZkgE53
          claim_id: c_y7TauhNfATmVSZebDCjgup
          source_id: s_RWTsEqw5xx6766DiY6L6C6
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RWTsEqw5xx6766DiY6L6C6
            source_type: api_record
            title: 维基数据：王鐬（Q45665676）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665676
            external_identifier: Q45665676
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:43.327Z
            metadata_json: null
        - id: cs_qkTgvk65vdTHFZc1N6MjMT
          claim_id: c_y7TauhNfATmVSZebDCjgup
          source_id: s_Luponw9m711YWZVTA2bFZp
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Luponw9m711YWZVTA2bFZp
            source_type: api_record
            title: 维基数据：王搏（Q45665731）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665731
            external_identifier: Q45665731
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:02.529Z
            metadata_json: null
        - id: cs_LLoVVDAC7sfau77nd2Lyic
          claim_id: c_y7TauhNfATmVSZebDCjgup
          source_id: s_ZsaLJJ1y7ju46UGxvbk2kS
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ZsaLJJ1y7ju46UGxvbk2kS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王搏（175545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175545&o=json
            external_identifier: CBDB:175545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:02.677Z
            metadata_json: null
      object_person:
        id: p_DgA93iH24ZodpFmFWyHcNR
        status: active
        display_name: 王搏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鐬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鐬（卒于842年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任右諫議大夫。中国历代人物传记资料库（CBDB）以人物编号 175544 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 842年 | accepted |
| name.primary | 王鐬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VFY7pa85s4J6zQ3CEWQetD | 王及 | accepted |
| children | p_DgA93iH24ZodpFmFWyHcNR | 王搏 | accepted |

## 外部来源

- [维基数据：王搏（Q45665731）](https://www.wikidata.org/wiki/Q45665731)
- [维基数据：王鐬（Q45665676）](https://www.wikidata.org/wiki/Q45665676)
- [维基数据：王及（Q45665623）](https://www.wikidata.org/wiki/Q45665623)
- [CBDB 中国历代人物传记资料库：王搏（175545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175545&o=json)
- [CBDB 中国历代人物传记资料库：王鐬（175544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175544&o=json)
- [CBDB 中国历代人物传记资料库：王及（175543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175543&o=json)
