---
schema: wang-person/v1
id: p_o4PADh3txE9cKhi9feW2DH
status: active
merged_into: null
display_name: 王液
cbdb_id: 175358
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y356GRGqu98KMNAcEtpPNu
        subject_person_id: p_o4PADh3txE9cKhi9feW2DH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王液（卒于807年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175358）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_PigyY3jse2jXVC5n8DaYxC
          claim_id: c_y356GRGqu98KMNAcEtpPNu
          source_id: s_gQg7kYUfs5oALc4vEnWU4L
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_gQg7kYUfs5oALc4vEnWU4L
            source_type: api_record
            title: 维基数据：王液（Q45655048）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655048
            external_identifier: Q45655048
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:42.561Z
            metadata_json: null
        - id: cs_JvCkHbC2hyTDpIK4d-gzNV
          claim_id: c_y356GRGqu98KMNAcEtpPNu
          source_id: s_cEEXCsxV1LdJF9nNpJsi8c
          stance: supports
          locator: CBDB:175358
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_cEEXCsxV1LdJF9nNpJsi8c
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王液（175358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175358&o=json
            external_identifier: CBDB:175358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:42.878Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_cwH4nuAdDBP5HpamL9mAnX
        subject_person_id: p_o4PADh3txE9cKhi9feW2DH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 807年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0807-01-01
            latest: 0807-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NMJZSq1D2FK59PdfnGjew4
          claim_id: c_cwH4nuAdDBP5HpamL9mAnX
          source_id: s_gQg7kYUfs5oALc4vEnWU4L
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_gQg7kYUfs5oALc4vEnWU4L
            source_type: api_record
            title: 维基数据：王液（Q45655048）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655048
            external_identifier: Q45655048
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:42.561Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AwuUwhtCV6bFYmbQH3CFQb
        subject_person_id: p_o4PADh3txE9cKhi9feW2DH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王液
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_faeUXWanNFK5mDfQwFEGH5
          claim_id: c_AwuUwhtCV6bFYmbQH3CFQb
          source_id: s_cEEXCsxV1LdJF9nNpJsi8c
          stance: supports
          locator: Q45655048
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_hZSfJ1798E2NeJh8w5QvQ7
          claim_id: c_AwuUwhtCV6bFYmbQH3CFQb
          source_id: s_gQg7kYUfs5oALc4vEnWU4L
          stance: supports
          locator: Q45655048
          quotation: null
          interpretation_note: null
          source:
            id: s_gQg7kYUfs5oALc4vEnWU4L
            source_type: api_record
            title: 维基数据：王液（Q45655048）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655048
            external_identifier: Q45655048
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:42.561Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2Hp3tGHxyGFMQ6STuJF4Yn
        subject_person_id: p_MCAH5GohSRuRz4F3CknZEk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o4PADh3txE9cKhi9feW2DH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_QxwVc5G2RXBB2LyjyeKEg3
          claim_id: c_2Hp3tGHxyGFMQ6STuJF4Yn
          source_id: s_XjPUPvCFpmSkkaZ4Q5AEYL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_XjPUPvCFpmSkkaZ4Q5AEYL
            source_type: api_record
            title: 维基数据：王绾（Q45654930）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654930
            external_identifier: Q45654930
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:46.888Z
            metadata_json: null
        - id: cs_tmk4F5V8Mmchgqp22EyeKe
          claim_id: c_2Hp3tGHxyGFMQ6STuJF4Yn
          source_id: s_CsLN6HHAeyUr1KL8zKMeg3
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_CsLN6HHAeyUr1KL8zKMeg3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綰（175356）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175356&o=json
            external_identifier: CBDB:175356
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:47.050Z
            metadata_json: null
        - id: cs_x5FisuNrrFmzeH7MdvwsFM
          claim_id: c_2Hp3tGHxyGFMQ6STuJF4Yn
          source_id: s_gQg7kYUfs5oALc4vEnWU4L
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_gQg7kYUfs5oALc4vEnWU4L
            source_type: api_record
            title: 维基数据：王液（Q45655048）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655048
            external_identifier: Q45655048
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:42.561Z
            metadata_json: null
        - id: cs_khsGjqbQoYJ1tpPhTVTUHF
          claim_id: c_2Hp3tGHxyGFMQ6STuJF4Yn
          source_id: s_cEEXCsxV1LdJF9nNpJsi8c
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_cEEXCsxV1LdJF9nNpJsi8c
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王液（175358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175358&o=json
            external_identifier: CBDB:175358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:42.878Z
            metadata_json: null
      object_person:
        id: p_MCAH5GohSRuRz4F3CknZEk
        status: active
        display_name: 王绾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王液

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王液（卒于807年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175358） | accepted |
| death.date | 807年 | accepted |
| name.primary | 王液 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MCAH5GohSRuRz4F3CknZEk | 王绾 | accepted |

## 外部来源

- [维基数据：王绾（Q45654930）](https://www.wikidata.org/wiki/Q45654930)
- [维基数据：王液（Q45655048）](https://www.wikidata.org/wiki/Q45655048)
- [CBDB 中国历代人物传记资料库：王綰（175356）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175356&o=json)
- [CBDB 中国历代人物传记资料库：王液（175358）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175358&o=json)
