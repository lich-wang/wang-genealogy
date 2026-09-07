---
schema: wang-person/v1
id: p_As5g6xHQ3NessjrVxYxPge
status: active
merged_into: null
display_name: 王混
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_74dFbBCiR4pXzTHfrF8EBY
        subject_person_id: p_As5g6xHQ3NessjrVxYxPge
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王混（卒于807年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175357 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_UoHCTg3T6hyFUL9Qb2Yhti
          claim_id: c_74dFbBCiR4pXzTHfrF8EBY
          source_id: s_QNNCpNM2d8hQvuF7GNfNYU
          stance: supports
          locator: null
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
        - id: cs_MO3nG7IdwzPBEbEP3lfB0R
          claim_id: c_74dFbBCiR4pXzTHfrF8EBY
          source_id: s_33E1jx8LpCnHbekeBdjUAm
          stance: supports
          locator: CBDB:175357
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_B7D7K7QsAUqHCMechs2iFk
        subject_person_id: p_As5g6xHQ3NessjrVxYxPge
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
        - id: cs_xq9eix3vw52wv6328SDbH4
          claim_id: c_B7D7K7QsAUqHCMechs2iFk
          source_id: s_QNNCpNM2d8hQvuF7GNfNYU
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_g1JPCPH465HHaRF3LbRXaC
        subject_person_id: p_As5g6xHQ3NessjrVxYxPge
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王混
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6RGCo45afD6wMafo4AMGQa
          claim_id: c_g1JPCPH465HHaRF3LbRXaC
          source_id: s_33E1jx8LpCnHbekeBdjUAm
          stance: supports
          locator: Q45654989
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_nHNqaeY8P1y9YicvvpQr2R
          claim_id: c_g1JPCPH465HHaRF3LbRXaC
          source_id: s_QNNCpNM2d8hQvuF7GNfNYU
          stance: supports
          locator: Q45654989
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
      object_person: null
    alternatives: []
relationships:
  parents:
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

# 王混

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王混（卒于807年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175357 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 807年 | accepted |
| name.primary | 王混 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MCAH5GohSRuRz4F3CknZEk | 王绾 | accepted |

## 外部来源

- [维基数据：王混（Q45654989）](https://www.wikidata.org/wiki/Q45654989)
- [维基数据：王绾（Q45654930）](https://www.wikidata.org/wiki/Q45654930)
- [CBDB 中国历代人物传记资料库：王混（175357）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175357&o=json)
- [CBDB 中国历代人物传记资料库：王綰（175356）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175356&o=json)
