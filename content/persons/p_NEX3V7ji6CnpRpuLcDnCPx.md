---
schema: wang-person/v1
id: p_NEX3V7ji6CnpRpuLcDnCPx
status: active
merged_into: null
display_name: 王份
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DLYeixmdoZU9PHkhkVAmhT
        subject_person_id: p_NEX3V7ji6CnpRpuLcDnCPx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王份（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任令。中国历代人物传记资料库（CBDB）以人物编号 175579 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_D1r1GKMHYzGuRdfAPxNFEi
          claim_id: c_DLYeixmdoZU9PHkhkVAmhT
          source_id: s_8vFzQGwKDDpx148f99y6kS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_8vFzQGwKDDpx148f99y6kS
            source_type: api_record
            title: 维基数据：王份（Q45667510）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667510
            external_identifier: Q45667510
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.290Z
            metadata_json: null
        - id: cs_uBUHTM8EUH-B8eBQuvwu70
          claim_id: c_DLYeixmdoZU9PHkhkVAmhT
          source_id: s_hT1ik3fzWZsGvMMc989rK3
          stance: supports
          locator: CBDB:175579
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_hT1ik3fzWZsGvMMc989rK3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王份（175579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175579&o=json
            external_identifier: CBDB:175579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:38.466Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_RQpQWNCb3CxefzpJLMJZQu
        subject_person_id: p_NEX3V7ji6CnpRpuLcDnCPx
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
        - id: cs_McG6CrRWHW18yYgh6QLgjN
          claim_id: c_RQpQWNCb3CxefzpJLMJZQu
          source_id: s_8vFzQGwKDDpx148f99y6kS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_8vFzQGwKDDpx148f99y6kS
            source_type: api_record
            title: 维基数据：王份（Q45667510）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667510
            external_identifier: Q45667510
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.290Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_g4SpYXcVZTyhMFA2GCRaGy
        subject_person_id: p_NEX3V7ji6CnpRpuLcDnCPx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王份
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MQRuwzf8RM3kmudbuEvBGu
          claim_id: c_g4SpYXcVZTyhMFA2GCRaGy
          source_id: s_8vFzQGwKDDpx148f99y6kS
          stance: supports
          locator: Q45667510
          quotation: null
          interpretation_note: null
          source:
            id: s_8vFzQGwKDDpx148f99y6kS
            source_type: api_record
            title: 维基数据：王份（Q45667510）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667510
            external_identifier: Q45667510
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.290Z
            metadata_json: null
        - id: cs_fUcTb8hm4WEN1TayxGzvP7
          claim_id: c_g4SpYXcVZTyhMFA2GCRaGy
          source_id: s_hT1ik3fzWZsGvMMc989rK3
          stance: supports
          locator: Q45667510
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8yBaqJSKoSKLASP4K6G7Un
        subject_person_id: p_PyPYdgPJF9TEybjfkDt91f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NEX3V7ji6CnpRpuLcDnCPx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_tkxP25MFLze3UiBKjHbMSd
          claim_id: c_8yBaqJSKoSKLASP4K6G7Un
          source_id: s_ncsTj4zGGPHFgrCZYwyE47
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ncsTj4zGGPHFgrCZYwyE47
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晙（91993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91993&o=json
            external_identifier: CBDB:91993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:31.346Z
            metadata_json: null
        - id: cs_tycnt9jMSUCnHra5q4RnPM
          claim_id: c_8yBaqJSKoSKLASP4K6G7Un
          source_id: s_EXcmMaeYVJwk593LFj6s41
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_EXcmMaeYVJwk593LFj6s41
            source_type: api_record
            title: 维基数据：王晙（Q45439660）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45439660
            external_identifier: Q45439660
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:31.027Z
            metadata_json: null
        - id: cs_gCkyp6rx4vX1U5Ra8W84Yy
          claim_id: c_8yBaqJSKoSKLASP4K6G7Un
          source_id: s_8vFzQGwKDDpx148f99y6kS
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8vFzQGwKDDpx148f99y6kS
            source_type: api_record
            title: 维基数据：王份（Q45667510）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667510
            external_identifier: Q45667510
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.290Z
            metadata_json: null
        - id: cs_y8tMxvmqfcGYzTgnuubfkB
          claim_id: c_8yBaqJSKoSKLASP4K6G7Un
          source_id: s_hT1ik3fzWZsGvMMc989rK3
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_hT1ik3fzWZsGvMMc989rK3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王份（175579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175579&o=json
            external_identifier: CBDB:175579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:38.466Z
            metadata_json: null
      object_person:
        id: p_PyPYdgPJF9TEybjfkDt91f
        status: active
        display_name: 王晙
        merged_into_person_id: null
  children:
    - claim:
        id: c_6K8FyMW3YCxLpgXti1owKc
        subject_person_id: p_NEX3V7ji6CnpRpuLcDnCPx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wQDxmNuUv5BzL8mttEuDiy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_degyUf8MJDyMqEgdnL1QmV
          claim_id: c_6K8FyMW3YCxLpgXti1owKc
          source_id: s_8vFzQGwKDDpx148f99y6kS
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_8vFzQGwKDDpx148f99y6kS
            source_type: api_record
            title: 维基数据：王份（Q45667510）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667510
            external_identifier: Q45667510
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.290Z
            metadata_json: null
        - id: cs_oTUGKJ2Zb9CLg86jUNMmEH
          claim_id: c_6K8FyMW3YCxLpgXti1owKc
          source_id: s_hT1ik3fzWZsGvMMc989rK3
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_hT1ik3fzWZsGvMMc989rK3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王份（175579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175579&o=json
            external_identifier: CBDB:175579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:38.466Z
            metadata_json: null
        - id: cs_ETCcmLWGJ9fYBzhhkt51Z8
          claim_id: c_6K8FyMW3YCxLpgXti1owKc
          source_id: s_zK4CvFoJFcwzEFgeyp1exU
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_zK4CvFoJFcwzEFgeyp1exU
            source_type: api_record
            title: 维基数据：王复（Q45667560）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667560
            external_identifier: Q45667560
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:46.267Z
            metadata_json: null
        - id: cs_qG134mQJ7hfSzQcRXBkkcy
          claim_id: c_6K8FyMW3YCxLpgXti1owKc
          source_id: s_f1AMQ559ZBRHT5bk9Aq7jX
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_f1AMQ559ZBRHT5bk9Aq7jX
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王復（175580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175580&o=json
            external_identifier: CBDB:175580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:46.444Z
            metadata_json: null
      object_person:
        id: p_wQDxmNuUv5BzL8mttEuDiy
        status: active
        display_name: 王复
        merged_into_person_id: null
    - claim:
        id: c_NtjWFV3Me9ryM1PTTQ9vMr
        subject_person_id: p_NEX3V7ji6CnpRpuLcDnCPx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_62HhnvGzNnUM79dMvqEziP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_HeFtT6VfF5TYTN9KWHFFtZ
          claim_id: c_NtjWFV3Me9ryM1PTTQ9vMr
          source_id: s_8vFzQGwKDDpx148f99y6kS
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_8vFzQGwKDDpx148f99y6kS
            source_type: api_record
            title: 维基数据：王份（Q45667510）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667510
            external_identifier: Q45667510
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.290Z
            metadata_json: null
        - id: cs_Ww1g3e1NRqbwwRsVEuXYpQ
          claim_id: c_NtjWFV3Me9ryM1PTTQ9vMr
          source_id: s_hT1ik3fzWZsGvMMc989rK3
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_hT1ik3fzWZsGvMMc989rK3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王份（175579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175579&o=json
            external_identifier: CBDB:175579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:38.466Z
            metadata_json: null
        - id: cs_1tub7gt9JeFsUi8fQ8RDMu
          claim_id: c_NtjWFV3Me9ryM1PTTQ9vMr
          source_id: s_BSHLD1t4y3vmUNRYEqEcyJ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_BSHLD1t4y3vmUNRYEqEcyJ
            source_type: api_record
            title: 维基数据：王河（Q45667711）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667711
            external_identifier: Q45667711
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:46.267Z
            metadata_json: null
        - id: cs_9kqA7ZPwQeA8YuXE9Gtv2H
          claim_id: c_NtjWFV3Me9ryM1PTTQ9vMr
          source_id: s_3gFECzasRqw7aLYy2FRmua
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3gFECzasRqw7aLYy2FRmua
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王河（175583）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175583&o=json
            external_identifier: CBDB:175583
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:46.436Z
            metadata_json: null
      object_person:
        id: p_62HhnvGzNnUM79dMvqEziP
        status: active
        display_name: 王河
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王份

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王份（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任令。中国历代人物传记资料库（CBDB）以人物编号 175579 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 746年 | accepted |
| name.primary | 王份 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PyPYdgPJF9TEybjfkDt91f | 王晙 | accepted |
| children | p_wQDxmNuUv5BzL8mttEuDiy | 王复 | accepted |
| children | p_62HhnvGzNnUM79dMvqEziP | 王河 | accepted |

## 外部来源

- [维基数据：王份（Q45667510）](https://www.wikidata.org/wiki/Q45667510)
- [维基数据：王复（Q45667560）](https://www.wikidata.org/wiki/Q45667560)
- [维基数据：王河（Q45667711）](https://www.wikidata.org/wiki/Q45667711)
- [维基数据：王晙（Q45439660）](https://www.wikidata.org/wiki/Q45439660)
- [CBDB 中国历代人物传记资料库：王份（175579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175579&o=json)
- [CBDB 中国历代人物传记资料库：王復（175580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175580&o=json)
- [CBDB 中国历代人物传记资料库：王河（175583）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175583&o=json)
- [CBDB 中国历代人物传记资料库：王晙（91993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91993&o=json)
