---
schema: wang-person/v1
id: p_4HKPieD6fbNJ6PWBDrdsH7
status: active
merged_into: null
display_name: 王曒
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5ef9Ke8EfdYUfvCckHwnc4
        subject_person_id: p_4HKPieD6fbNJ6PWBDrdsH7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曒（卒于709年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175538 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_pPPL3qeFPEAdgjChFmxRFj
          claim_id: c_5ef9Ke8EfdYUfvCckHwnc4
          source_id: s_aqT62HmHd1Zy5QuErHLovj
          stance: supports
          locator: null
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
        - id: cs_jDXkUO4wkRbYWRCXodzW4O
          claim_id: c_5ef9Ke8EfdYUfvCckHwnc4
          source_id: s_uGDohKi8JoWi4niPPUjK5Q
          stance: supports
          locator: CBDB:175538
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_YMo8gyW3CQD9CJx6egVRhN
        subject_person_id: p_4HKPieD6fbNJ6PWBDrdsH7
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
        - id: cs_3A5kVubTLifA68tSMgLHdY
          claim_id: c_YMo8gyW3CQD9CJx6egVRhN
          source_id: s_aqT62HmHd1Zy5QuErHLovj
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eNze3sA9D6Wap5e8ytZn23
        subject_person_id: p_4HKPieD6fbNJ6PWBDrdsH7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曒
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4sj8mx2C4C6t6r5GAeLKF5
          claim_id: c_eNze3sA9D6Wap5e8ytZn23
          source_id: s_uGDohKi8JoWi4niPPUjK5Q
          stance: supports
          locator: Q45665407
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_QJhxz8oQVjFLh9F8G4pAQX
          claim_id: c_eNze3sA9D6Wap5e8ytZn23
          source_id: s_aqT62HmHd1Zy5QuErHLovj
          stance: supports
          locator: Q45665407
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
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8ZJpQcPV8E3HARfWvzacuM
        subject_person_id: p_ZSBMnefxQNX4zwGDPTrYX5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4HKPieD6fbNJ6PWBDrdsH7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_87z1Lu7RcpobyXCZJWBCjP
          claim_id: c_8ZJpQcPV8E3HARfWvzacuM
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
        - id: cs_ssh7tdcujZvZGxZAQv55SK
          claim_id: c_8ZJpQcPV8E3HARfWvzacuM
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
        - id: cs_X1Vuu9u2zTEU6FABwJELgc
          claim_id: c_8ZJpQcPV8E3HARfWvzacuM
          source_id: s_aqT62HmHd1Zy5QuErHLovj
          stance: supports
          locator: P22（父）
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
        - id: cs_6DZ7UTMY46YbyYtHfrUF6w
          claim_id: c_8ZJpQcPV8E3HARfWvzacuM
          source_id: s_uGDohKi8JoWi4niPPUjK5Q
          stance: supports
          locator: 亲属关系：父
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
      object_person:
        id: p_ZSBMnefxQNX4zwGDPTrYX5
        status: active
        display_name: 王方庆
        merged_into_person_id: null
  children:
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
        id: p_FPisTavdR1h9GP2xzczNXG
        status: active
        display_name: 王宰
        merged_into_person_id: null
    - claim:
        id: c_a7t92Q8iTq82rHpFBsvz8s
        subject_person_id: p_4HKPieD6fbNJ6PWBDrdsH7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vt9u4K3V19Gr4t4KHNh8JT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5nqwvq88qx8z4Q1oxDbNnU
          claim_id: c_a7t92Q8iTq82rHpFBsvz8s
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
        - id: cs_Cfto2ehKuz83v1GFu3DcND
          claim_id: c_a7t92Q8iTq82rHpFBsvz8s
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
        - id: cs_jEdKaAkYRYqf7z4ALUaFEB
          claim_id: c_a7t92Q8iTq82rHpFBsvz8s
          source_id: s_TWik6uokuq4VC9KHUKP5h7
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_TWik6uokuq4VC9KHUKP5h7
            source_type: api_record
            title: 维基数据：王宠（Q45442967）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45442967
            external_identifier: Q45442967
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_EMZs6DxhAzQPKVAoUduXAF
          claim_id: c_a7t92Q8iTq82rHpFBsvz8s
          source_id: s_HQykX6s4hZd7PDx465NMUH
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HQykX6s4hZd7PDx465NMUH
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寵（92046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92046&o=json
            external_identifier: CBDB:92046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:45.640Z
            metadata_json: null
      object_person:
        id: p_vt9u4K3V19Gr4t4KHNh8JT
        status: active
        display_name: 王宠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王曒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王曒（卒于709年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175538 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 709年 | accepted |
| name.primary | 王曒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZSBMnefxQNX4zwGDPTrYX5 | 王方庆 | accepted |
| children | p_FPisTavdR1h9GP2xzczNXG | 王宰 | accepted |
| children | p_vt9u4K3V19Gr4t4KHNh8JT | 王宠 | accepted |

## 外部来源

- [维基数据：王宠（Q45442967）](https://www.wikidata.org/wiki/Q45442967)
- [维基数据：王方庆（Q7478164）](https://www.wikidata.org/wiki/Q7478164)
- [维基数据：王曒（Q45665407）](https://www.wikidata.org/wiki/Q45665407)
- [维基数据：王宰（Q45666287）](https://www.wikidata.org/wiki/Q45666287)
- [CBDB 中国历代人物传记资料库：王綝（175451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175451&o=json)
- [CBDB 中国历代人物传记资料库：王寵（92046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92046&o=json)
- [CBDB 中国历代人物传记资料库：王曒（175538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175538&o=json)
- [CBDB 中国历代人物传记资料库：王宰（175555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json)
