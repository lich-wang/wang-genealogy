---
schema: wang-person/v1
id: p_MCAH5GohSRuRz4F3CknZEk
status: active
merged_into: null
display_name: 王绾
cbdb_id: 175356
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rufLUAonpr9wffkVDfDSHk
        subject_person_id: p_MCAH5GohSRuRz4F3CknZEk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王绾（卒于770年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175356 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_SJLVr7jDF8KwAi1gWCb8Qq
          claim_id: c_rufLUAonpr9wffkVDfDSHk
          source_id: s_XjPUPvCFpmSkkaZ4Q5AEYL
          stance: supports
          locator: null
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
        - id: cs_vHwYnIZ-IRc6rtPrJ1MEYA
          claim_id: c_rufLUAonpr9wffkVDfDSHk
          source_id: s_CsLN6HHAeyUr1KL8zKMeg3
          stance: supports
          locator: CBDB:175356
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_LQZ5e8A4Nn3xFPKJSy771E
        subject_person_id: p_MCAH5GohSRuRz4F3CknZEk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 770年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0770-01-01
            latest: 0770-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EuUoVgpBBer5gnau3vavP5
          claim_id: c_LQZ5e8A4Nn3xFPKJSy771E
          source_id: s_XjPUPvCFpmSkkaZ4Q5AEYL
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CParEQ4N7XipeGPzAR9VCz
        subject_person_id: p_MCAH5GohSRuRz4F3CknZEk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王绾
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3SXiqC4LjAGgvWXQPGaojF
          claim_id: c_CParEQ4N7XipeGPzAR9VCz
          source_id: s_XjPUPvCFpmSkkaZ4Q5AEYL
          stance: supports
          locator: Q45654930
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
        - id: cs_rAMVeHBxVmkiLC7FgpQnhW
          claim_id: c_CParEQ4N7XipeGPzAR9VCz
          source_id: s_CsLN6HHAeyUr1KL8zKMeg3
          stance: supports
          locator: Q45654930
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JBp3gbg23FjgdnrMSKGBDA
        subject_person_id: p_x7oJfELhd7NSvt2eNbNHmH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MCAH5GohSRuRz4F3CknZEk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_AYDw75vcGrmz9URptwLzJH
          claim_id: c_JBp3gbg23FjgdnrMSKGBDA
          source_id: s_qZACLc9edrwCBZHy8db65x
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_qZACLc9edrwCBZHy8db65x
            source_type: api_record
            title: 维基数据：王景（Q45654870）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654870
            external_identifier: Q45654870
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.651Z
            metadata_json: null
        - id: cs_hzJuHqi3dK6N5fp7KJ4Q2y
          claim_id: c_JBp3gbg23FjgdnrMSKGBDA
          source_id: s_7E1ug3Kpns8EmbLJFG6nt6
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7E1ug3Kpns8EmbLJFG6nt6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王景（175355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175355&o=json
            external_identifier: CBDB:175355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.816Z
            metadata_json: null
        - id: cs_yGgXrowv1fCDtbWqAxmKLm
          claim_id: c_JBp3gbg23FjgdnrMSKGBDA
          source_id: s_XjPUPvCFpmSkkaZ4Q5AEYL
          stance: supports
          locator: P22（父）
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
        - id: cs_QQnmJod1HbPxadk7PwcM8s
          claim_id: c_JBp3gbg23FjgdnrMSKGBDA
          source_id: s_CsLN6HHAeyUr1KL8zKMeg3
          stance: supports
          locator: 亲属关系：父
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
      object_person:
        id: p_x7oJfELhd7NSvt2eNbNHmH
        status: active
        display_name: 王景
        merged_into_person_id: null
  children:
    - claim:
        id: c_F5T3bNjQX8vXw3pJ2ENP7R
        subject_person_id: p_MCAH5GohSRuRz4F3CknZEk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_As5g6xHQ3NessjrVxYxPge
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4kR9iJ8HE2dYMLL6d7zjnp
          claim_id: c_F5T3bNjQX8vXw3pJ2ENP7R
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
        - id: cs_9H5LptRcovG52D9enU7UsT
          claim_id: c_F5T3bNjQX8vXw3pJ2ENP7R
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
        - id: cs_94m88DGAsMvbbqs5tDFnq2
          claim_id: c_F5T3bNjQX8vXw3pJ2ENP7R
          source_id: s_QNNCpNM2d8hQvuF7GNfNYU
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_QNNCpNM2d8hQvuF7GNfNYU
            source_type: api_record
            title: 维基数据：王混（Q45654989）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654989
            external_identifier: Q45654989
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:42.561Z
            metadata_json: null
        - id: cs_dv9fmiyz87gC5WUmRwDC8R
          claim_id: c_F5T3bNjQX8vXw3pJ2ENP7R
          source_id: s_33E1jx8LpCnHbekeBdjUAm
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_33E1jx8LpCnHbekeBdjUAm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王混（175357）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175357&o=json
            external_identifier: CBDB:175357
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:42.873Z
            metadata_json: null
      object_person:
        id: p_As5g6xHQ3NessjrVxYxPge
        status: active
        display_name: 王混
        merged_into_person_id: null
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
        id: p_o4PADh3txE9cKhi9feW2DH
        status: active
        display_name: 王液
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王绾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王绾（卒于770年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175356 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 770年 | accepted |
| name.primary | 王绾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_x7oJfELhd7NSvt2eNbNHmH | 王景 | accepted |
| children | p_As5g6xHQ3NessjrVxYxPge | 王混 | accepted |
| children | p_o4PADh3txE9cKhi9feW2DH | 王液 | accepted |

## 外部来源

- [维基数据：王混（Q45654989）](https://www.wikidata.org/wiki/Q45654989)
- [维基数据：王景（Q45654870）](https://www.wikidata.org/wiki/Q45654870)
- [维基数据：王绾（Q45654930）](https://www.wikidata.org/wiki/Q45654930)
- [维基数据：王液（Q45655048）](https://www.wikidata.org/wiki/Q45655048)
- [CBDB 中国历代人物传记资料库：王混（175357）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175357&o=json)
- [CBDB 中国历代人物传记资料库：王景（175355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175355&o=json)
- [CBDB 中国历代人物传记资料库：王綰（175356）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175356&o=json)
- [CBDB 中国历代人物传记资料库：王液（175358）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175358&o=json)
