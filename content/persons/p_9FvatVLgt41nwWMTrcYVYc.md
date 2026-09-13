---
schema: wang-person/v1
id: p_9FvatVLgt41nwWMTrcYVYc
status: active
merged_into: null
display_name: 王和
cbdb_id: 175586
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YPJWYQQNL1b2dRqofJyYHm
        subject_person_id: p_9FvatVLgt41nwWMTrcYVYc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和（卒于783年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175586）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_8BbpgyXt39vFVW4finGgNn
          claim_id: c_YPJWYQQNL1b2dRqofJyYHm
          source_id: s_jjQyCgHBXVriQqwXZSeiBT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_jjQyCgHBXVriQqwXZSeiBT
            source_type: api_record
            title: 维基数据：王和（Q45667864）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667864
            external_identifier: Q45667864
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.699Z
            metadata_json: null
        - id: cs_VIjFDDq0CRlCSUJ3slFlpD
          claim_id: c_YPJWYQQNL1b2dRqofJyYHm
          source_id: s_pJ1rQVsocoAz4k1nuoWz5g
          stance: supports
          locator: CBDB:175586
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_pJ1rQVsocoAz4k1nuoWz5g
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王和（175586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175586&o=json
            external_identifier: CBDB:175586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:48.899Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GR5Dn5KYcPm36s5VpoxyUk
        subject_person_id: p_9FvatVLgt41nwWMTrcYVYc
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
        - id: cs_LrbbGpFF91HJrSw5fcLKGz
          claim_id: c_GR5Dn5KYcPm36s5VpoxyUk
          source_id: s_jjQyCgHBXVriQqwXZSeiBT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_jjQyCgHBXVriQqwXZSeiBT
            source_type: api_record
            title: 维基数据：王和（Q45667864）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667864
            external_identifier: Q45667864
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.699Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jkuyQu9aszMmvMVaPZR45n
        subject_person_id: p_9FvatVLgt41nwWMTrcYVYc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1VeVVZjGjGvkcEuVxFjMQg
          claim_id: c_jkuyQu9aszMmvMVaPZR45n
          source_id: s_pJ1rQVsocoAz4k1nuoWz5g
          stance: supports
          locator: Q45667864
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_eRvG3rXJPtj7vytA1bDjZy
          claim_id: c_jkuyQu9aszMmvMVaPZR45n
          source_id: s_jjQyCgHBXVriQqwXZSeiBT
          stance: supports
          locator: Q45667864
          quotation: null
          interpretation_note: null
          source:
            id: s_jjQyCgHBXVriQqwXZSeiBT
            source_type: api_record
            title: 维基数据：王和（Q45667864）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667864
            external_identifier: Q45667864
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.699Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VqeaHNwYbP85yUb7ncocLj
        subject_person_id: p_DbKg6Z6wj4BMKWgbEDKMoY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9FvatVLgt41nwWMTrcYVYc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3JANeCd6usvh6ruG2H7BM8
          claim_id: c_VqeaHNwYbP85yUb7ncocLj
          source_id: s_recuu9Amqp1U8r1h1hCCMC
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_recuu9Amqp1U8r1h1hCCMC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佾（175585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175585&o=json
            external_identifier: CBDB:175585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:38.458Z
            metadata_json: null
        - id: cs_YL2Vcxo614LHhLetX2ZVMg
          claim_id: c_VqeaHNwYbP85yUb7ncocLj
          source_id: s_7N34zb2284KFZYJKH7nrDo
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7N34zb2284KFZYJKH7nrDo
            source_type: api_record
            title: 维基数据：王佾（Q45667814）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667814
            external_identifier: Q45667814
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.291Z
            metadata_json: null
        - id: cs_JTxPZ9rwW3s2ZTr3yXj18H
          claim_id: c_VqeaHNwYbP85yUb7ncocLj
          source_id: s_jjQyCgHBXVriQqwXZSeiBT
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_jjQyCgHBXVriQqwXZSeiBT
            source_type: api_record
            title: 维基数据：王和（Q45667864）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667864
            external_identifier: Q45667864
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.699Z
            metadata_json: null
        - id: cs_3UAzot16u8RwNNZ6fCZxqf
          claim_id: c_VqeaHNwYbP85yUb7ncocLj
          source_id: s_pJ1rQVsocoAz4k1nuoWz5g
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_pJ1rQVsocoAz4k1nuoWz5g
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王和（175586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175586&o=json
            external_identifier: CBDB:175586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:48.899Z
            metadata_json: null
      object_person:
        id: p_DbKg6Z6wj4BMKWgbEDKMoY
        status: active
        display_name: 王佾
        merged_into_person_id: null
  children:
    - claim:
        id: c_jeD9ozKkCECoYpkvwUpu7y
        subject_person_id: p_9FvatVLgt41nwWMTrcYVYc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2FrexZ4sVipsA8gJwzZqnR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Ggv3j8DufeM7fqLJW8dJLc
          claim_id: c_jeD9ozKkCECoYpkvwUpu7y
          source_id: s_jjQyCgHBXVriQqwXZSeiBT
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_jjQyCgHBXVriQqwXZSeiBT
            source_type: api_record
            title: 维基数据：王和（Q45667864）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667864
            external_identifier: Q45667864
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.699Z
            metadata_json: null
        - id: cs_x9KZ6uA8w174oWX72iD2Ud
          claim_id: c_jeD9ozKkCECoYpkvwUpu7y
          source_id: s_pJ1rQVsocoAz4k1nuoWz5g
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_pJ1rQVsocoAz4k1nuoWz5g
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王和（175586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175586&o=json
            external_identifier: CBDB:175586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:48.899Z
            metadata_json: null
        - id: cs_9Jr1Q1kh44FbcDpu2PH3tH
          claim_id: c_jeD9ozKkCECoYpkvwUpu7y
          source_id: s_81v1e7UZqyV64FbE1GjJQK
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_81v1e7UZqyV64FbE1GjJQK
            source_type: api_record
            title: 维基数据：王道固（Q45667917）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667917
            external_identifier: Q45667917
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:38.179Z
            metadata_json: null
        - id: cs_NZ4w9wDJ6MdyPeF15RANHp
          claim_id: c_jeD9ozKkCECoYpkvwUpu7y
          source_id: s_HbyKrvdY51hKeLkmhmWmJW
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HbyKrvdY51hKeLkmhmWmJW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王道固（175587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175587&o=json
            external_identifier: CBDB:175587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:38.330Z
            metadata_json: null
      object_person:
        id: p_2FrexZ4sVipsA8gJwzZqnR
        status: active
        display_name: 王道固
        merged_into_person_id: null
    - claim:
        id: c_87iCZFhNdLnDJHHUFogm8o
        subject_person_id: p_9FvatVLgt41nwWMTrcYVYc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ir28M4eoa7EWTaR2r94g8r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_EzDEJ7oG6q7Tvew9GEuK9d
          claim_id: c_87iCZFhNdLnDJHHUFogm8o
          source_id: s_jjQyCgHBXVriQqwXZSeiBT
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_jjQyCgHBXVriQqwXZSeiBT
            source_type: api_record
            title: 维基数据：王和（Q45667864）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667864
            external_identifier: Q45667864
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.699Z
            metadata_json: null
        - id: cs_RAa2F8DShoUhQuE2kFpSZY
          claim_id: c_87iCZFhNdLnDJHHUFogm8o
          source_id: s_pJ1rQVsocoAz4k1nuoWz5g
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_pJ1rQVsocoAz4k1nuoWz5g
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王和（175586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175586&o=json
            external_identifier: CBDB:175586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:48.899Z
            metadata_json: null
        - id: cs_uTtm6VujbKBAHz4NvK7CVr
          claim_id: c_87iCZFhNdLnDJHHUFogm8o
          source_id: s_jP9CEE1GP7U1cvhi41YMPu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_jP9CEE1GP7U1cvhi41YMPu
            source_type: api_record
            title: 维基数据：王元贞（Q45667969）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667969
            external_identifier: Q45667969
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:39.823Z
            metadata_json: null
        - id: cs_5v8693cehPUsmhr2A4zLXF
          claim_id: c_87iCZFhNdLnDJHHUFogm8o
          source_id: s_JwJCv3k136fGJsmA2THuTt
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_JwJCv3k136fGJsmA2THuTt
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王元貞（175588）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175588&o=json
            external_identifier: CBDB:175588
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:39.989Z
            metadata_json: null
      object_person:
        id: p_ir28M4eoa7EWTaR2r94g8r
        status: active
        display_name: 王元贞
        merged_into_person_id: null
    - claim:
        id: c_EX8UhPQcXmriJxf9345nbA
        subject_person_id: p_9FvatVLgt41nwWMTrcYVYc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9n28LfCYzwUvQ8GUon9qz7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GjjPseEPx7aksp8oj316fc
          claim_id: c_EX8UhPQcXmriJxf9345nbA
          source_id: s_pJ1rQVsocoAz4k1nuoWz5g
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_pJ1rQVsocoAz4k1nuoWz5g
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王和（175586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175586&o=json
            external_identifier: CBDB:175586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:48.899Z
            metadata_json: null
        - id: cs_rTus7FR5ZLb2Fgn5L3xJzX
          claim_id: c_EX8UhPQcXmriJxf9345nbA
          source_id: s_jjQyCgHBXVriQqwXZSeiBT
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_jjQyCgHBXVriQqwXZSeiBT
            source_type: api_record
            title: 维基数据：王和（Q45667864）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667864
            external_identifier: Q45667864
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.699Z
            metadata_json: null
        - id: cs_RzA8Y1MMGaP8wALMWnZirs
          claim_id: c_EX8UhPQcXmriJxf9345nbA
          source_id: s_DkybaLomHZWwY7oacoZpcQ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_DkybaLomHZWwY7oacoZpcQ
            source_type: api_record
            title: 维基数据：王孝源（Q45668019）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668019
            external_identifier: Q45668019
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:39.824Z
            metadata_json: null
        - id: cs_LTQPhKnV3cGFhHNWCQMG6y
          claim_id: c_EX8UhPQcXmriJxf9345nbA
          source_id: s_AfyWReALuNJvrEs8j6sBjW
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_AfyWReALuNJvrEs8j6sBjW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王孝源（175589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175589&o=json
            external_identifier: CBDB:175589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:39.986Z
            metadata_json: null
      object_person:
        id: p_9n28LfCYzwUvQ8GUon9qz7
        status: active
        display_name: 王孝源
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王和（卒于783年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175586） | accepted |
| death.date | 783年 | accepted |
| name.primary | 王和 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DbKg6Z6wj4BMKWgbEDKMoY | 王佾 | accepted |
| children | p_2FrexZ4sVipsA8gJwzZqnR | 王道固 | accepted |
| children | p_ir28M4eoa7EWTaR2r94g8r | 王元贞 | accepted |
| children | p_9n28LfCYzwUvQ8GUon9qz7 | 王孝源 | accepted |

## 外部来源

- [维基数据：王道固（Q45667917）](https://www.wikidata.org/wiki/Q45667917)
- [维基数据：王和（Q45667864）](https://www.wikidata.org/wiki/Q45667864)
- [维基数据：王孝源（Q45668019）](https://www.wikidata.org/wiki/Q45668019)
- [维基数据：王佾（Q45667814）](https://www.wikidata.org/wiki/Q45667814)
- [维基数据：王元贞（Q45667969）](https://www.wikidata.org/wiki/Q45667969)
- [CBDB 中国历代人物传记资料库：王道固（175587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175587&o=json)
- [CBDB 中国历代人物传记资料库：王和（175586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175586&o=json)
- [CBDB 中国历代人物传记资料库：王孝源（175589）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175589&o=json)
- [CBDB 中国历代人物传记资料库：王佾（175585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175585&o=json)
- [CBDB 中国历代人物传记资料库：王元貞（175588）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175588&o=json)
