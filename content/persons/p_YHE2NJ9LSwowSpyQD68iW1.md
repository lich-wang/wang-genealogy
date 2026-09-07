---
schema: wang-person/v1
id: p_YHE2NJ9LSwowSpyQD68iW1
status: active
merged_into: null
display_name: 王晖
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4MKQWsC19LPV7iJqGKpCVq
        subject_person_id: p_YHE2NJ9LSwowSpyQD68iW1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晖（卒于709年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任郡司馬。中国历代人物传记资料库（CBDB）以人物编号 175634 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_zZTiHxax4GKWVBAfQV5KjG
          claim_id: c_4MKQWsC19LPV7iJqGKpCVq
          source_id: s_k7pnfCmMHnCgceNnh6JLHJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_k7pnfCmMHnCgceNnh6JLHJ
            source_type: api_record
            title: 维基数据：王晖（Q45670207）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670207
            external_identifier: Q45670207
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
        - id: cs_Kd3X2SYEVFURlADqWpyOgO
          claim_id: c_4MKQWsC19LPV7iJqGKpCVq
          source_id: s_v43uG4Av9fcuPA2Dw8jAmB
          stance: supports
          locator: CBDB:175634
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_v43uG4Av9fcuPA2Dw8jAmB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暉（175634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175634&o=json
            external_identifier: CBDB:175634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:39.839Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NGJrq9E8TDNTbfCy2yE4RC
        subject_person_id: p_YHE2NJ9LSwowSpyQD68iW1
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
        - id: cs_gLW9wsdk4m7z5y1MVDYwEr
          claim_id: c_NGJrq9E8TDNTbfCy2yE4RC
          source_id: s_k7pnfCmMHnCgceNnh6JLHJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_k7pnfCmMHnCgceNnh6JLHJ
            source_type: api_record
            title: 维基数据：王晖（Q45670207）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670207
            external_identifier: Q45670207
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KpYw43Gr7QEs5DCCkEXhuN
        subject_person_id: p_YHE2NJ9LSwowSpyQD68iW1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晖
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Zfy1Qpaf6pmK8LJKmZKmxG
          claim_id: c_KpYw43Gr7QEs5DCCkEXhuN
          source_id: s_k7pnfCmMHnCgceNnh6JLHJ
          stance: supports
          locator: Q45670207
          quotation: null
          interpretation_note: null
          source:
            id: s_k7pnfCmMHnCgceNnh6JLHJ
            source_type: api_record
            title: 维基数据：王晖（Q45670207）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670207
            external_identifier: Q45670207
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
        - id: cs_zkX7Eskdah6T86Uz8337tL
          claim_id: c_KpYw43Gr7QEs5DCCkEXhuN
          source_id: s_v43uG4Av9fcuPA2Dw8jAmB
          stance: supports
          locator: Q45670207
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oPMMqRbGBH2X95NNkswK2E
        subject_person_id: p_ZSBMnefxQNX4zwGDPTrYX5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YHE2NJ9LSwowSpyQD68iW1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_V1Vida8Em8rxCw2BKfyAoX
          claim_id: c_oPMMqRbGBH2X95NNkswK2E
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
        - id: cs_rGK6XGFX6EKGKakhovGVYM
          claim_id: c_oPMMqRbGBH2X95NNkswK2E
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
        - id: cs_A6QPcf1vQteaBPpELEeH7F
          claim_id: c_oPMMqRbGBH2X95NNkswK2E
          source_id: s_k7pnfCmMHnCgceNnh6JLHJ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_k7pnfCmMHnCgceNnh6JLHJ
            source_type: api_record
            title: 维基数据：王晖（Q45670207）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670207
            external_identifier: Q45670207
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
        - id: cs_2tEqgKfUccU5HGQr2HZfrs
          claim_id: c_oPMMqRbGBH2X95NNkswK2E
          source_id: s_v43uG4Av9fcuPA2Dw8jAmB
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_v43uG4Av9fcuPA2Dw8jAmB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暉（175634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175634&o=json
            external_identifier: CBDB:175634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:39.839Z
            metadata_json: null
      object_person:
        id: p_ZSBMnefxQNX4zwGDPTrYX5
        status: active
        display_name: 王方庆
        merged_into_person_id: null
  children:
    - claim:
        id: c_HNV9X8P3hFfE3XxETwY2T4
        subject_person_id: p_YHE2NJ9LSwowSpyQD68iW1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LHHGhpHmsHnE87L16zoNNs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2GFZE1nKLyHrxdw7fadChG
          claim_id: c_HNV9X8P3hFfE3XxETwY2T4
          source_id: s_k7pnfCmMHnCgceNnh6JLHJ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_k7pnfCmMHnCgceNnh6JLHJ
            source_type: api_record
            title: 维基数据：王晖（Q45670207）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670207
            external_identifier: Q45670207
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
        - id: cs_TJwaYShcg1gbSKuNqmBXbZ
          claim_id: c_HNV9X8P3hFfE3XxETwY2T4
          source_id: s_v43uG4Av9fcuPA2Dw8jAmB
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_v43uG4Av9fcuPA2Dw8jAmB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暉（175634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175634&o=json
            external_identifier: CBDB:175634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:39.839Z
            metadata_json: null
        - id: cs_owY39L9WJf3Jxiyy4dZrHg
          claim_id: c_HNV9X8P3hFfE3XxETwY2T4
          source_id: s_3ywKxNFkBE92g8VLtcK2kM
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_3ywKxNFkBE92g8VLtcK2kM
            source_type: api_record
            title: 维基数据：王佖（Q45670253）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670253
            external_identifier: Q45670253
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:42.039Z
            metadata_json: null
        - id: cs_2f56ZbHpNfhPvYFGtdxmai
          claim_id: c_HNV9X8P3hFfE3XxETwY2T4
          source_id: s_TyVGNfStm8iguoHDAUFSS6
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_TyVGNfStm8iguoHDAUFSS6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佖（175635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175635&o=json
            external_identifier: CBDB:175635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:42.217Z
            metadata_json: null
      object_person:
        id: p_LHHGhpHmsHnE87L16zoNNs
        status: active
        display_name: 王佖
        merged_into_person_id: null
    - claim:
        id: c_GP2FGYMhQU2cQyTf4rw9RV
        subject_person_id: p_YHE2NJ9LSwowSpyQD68iW1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cE7a8sa9vuH3wia2jCHdC5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_e7PgV1UcazwoLs4c9j4d5P
          claim_id: c_GP2FGYMhQU2cQyTf4rw9RV
          source_id: s_v43uG4Av9fcuPA2Dw8jAmB
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_v43uG4Av9fcuPA2Dw8jAmB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暉（175634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175634&o=json
            external_identifier: CBDB:175634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:39.839Z
            metadata_json: null
        - id: cs_rGTqP4MftXb7chxJx2HEZG
          claim_id: c_GP2FGYMhQU2cQyTf4rw9RV
          source_id: s_k7pnfCmMHnCgceNnh6JLHJ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_k7pnfCmMHnCgceNnh6JLHJ
            source_type: api_record
            title: 维基数据：王晖（Q45670207）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670207
            external_identifier: Q45670207
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
        - id: cs_UBJPqx5Vyrf2JSucrXCE1u
          claim_id: c_GP2FGYMhQU2cQyTf4rw9RV
          source_id: s_Fcj6gUDmhpHZRTSdH8Zx7a
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Fcj6gUDmhpHZRTSdH8Zx7a
            source_type: api_record
            title: 维基数据：王伸（Q45670298）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670298
            external_identifier: Q45670298
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:43.809Z
            metadata_json: null
        - id: cs_3ap9UxGL2CmuhMJLtaEbAQ
          claim_id: c_GP2FGYMhQU2cQyTf4rw9RV
          source_id: s_sD8W3sCPn9WBt3SuJFy3jp
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_sD8W3sCPn9WBt3SuJFy3jp
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王伸（175636）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175636&o=json
            external_identifier: CBDB:175636
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:43.988Z
            metadata_json: null
      object_person:
        id: p_cE7a8sa9vuH3wia2jCHdC5
        status: active
        display_name: 王伸
        merged_into_person_id: null
    - claim:
        id: c_VMQjz9AVYyDNTP7WvUa8gD
        subject_person_id: p_YHE2NJ9LSwowSpyQD68iW1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1x6HsbaXVvAskaJLVUNJ57
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GSFNaGAGdMec6VBsgxnHz9
          claim_id: c_VMQjz9AVYyDNTP7WvUa8gD
          source_id: s_k7pnfCmMHnCgceNnh6JLHJ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_k7pnfCmMHnCgceNnh6JLHJ
            source_type: api_record
            title: 维基数据：王晖（Q45670207）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670207
            external_identifier: Q45670207
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
        - id: cs_xZoMGUVwG7YAytWwoX6ET9
          claim_id: c_VMQjz9AVYyDNTP7WvUa8gD
          source_id: s_v43uG4Av9fcuPA2Dw8jAmB
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_v43uG4Av9fcuPA2Dw8jAmB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暉（175634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175634&o=json
            external_identifier: CBDB:175634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:39.839Z
            metadata_json: null
        - id: cs_gREgpJseJZgGzTDWvXKu8s
          claim_id: c_VMQjz9AVYyDNTP7WvUa8gD
          source_id: s_mpfJS3Dm2iJzhWVdaLndjb
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_mpfJS3Dm2iJzhWVdaLndjb
            source_type: api_record
            title: 维基数据：王佶（Q45670344）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670344
            external_identifier: Q45670344
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:43.809Z
            metadata_json: null
        - id: cs_vkNJYMZJSdkrQqJU6LFoXb
          claim_id: c_VMQjz9AVYyDNTP7WvUa8gD
          source_id: s_BimgtsRM5Qe1AcfHQx8WbA
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_BimgtsRM5Qe1AcfHQx8WbA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佶（175637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175637&o=json
            external_identifier: CBDB:175637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:43.995Z
            metadata_json: null
      object_person:
        id: p_1x6HsbaXVvAskaJLVUNJ57
        status: active
        display_name: 王佶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王晖（卒于709年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任郡司馬。中国历代人物传记资料库（CBDB）以人物编号 175634 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 709年 | accepted |
| name.primary | 王晖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZSBMnefxQNX4zwGDPTrYX5 | 王方庆 | accepted |
| children | p_LHHGhpHmsHnE87L16zoNNs | 王佖 | accepted |
| children | p_cE7a8sa9vuH3wia2jCHdC5 | 王伸 | accepted |
| children | p_1x6HsbaXVvAskaJLVUNJ57 | 王佶 | accepted |

## 外部来源

- [维基数据：王佖（Q45670253）](https://www.wikidata.org/wiki/Q45670253)
- [维基数据：王方庆（Q7478164）](https://www.wikidata.org/wiki/Q7478164)
- [维基数据：王晖（Q45670207）](https://www.wikidata.org/wiki/Q45670207)
- [维基数据：王佶（Q45670344）](https://www.wikidata.org/wiki/Q45670344)
- [维基数据：王伸（Q45670298）](https://www.wikidata.org/wiki/Q45670298)
- [CBDB 中国历代人物传记资料库：王佖（175635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175635&o=json)
- [CBDB 中国历代人物传记资料库：王綝（175451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175451&o=json)
- [CBDB 中国历代人物传记资料库：王暉（175634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175634&o=json)
- [CBDB 中国历代人物传记资料库：王佶（175637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175637&o=json)
- [CBDB 中国历代人物传记资料库：王伸（175636）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175636&o=json)
