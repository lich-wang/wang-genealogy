---
schema: wang-person/v1
id: p_DxjskV5QQbWK43XQQTjaRU
status: active
merged_into: null
display_name: 王宗卿
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZfR3xVGcJH2rcdNpJfMK8F
        subject_person_id: p_DxjskV5QQbWK43XQQTjaRU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗卿（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任丞。中国历代人物传记资料库（CBDB）以人物编号 175581 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_pi8SHQbEAFBr8vUhSbvBUZ
          claim_id: c_ZfR3xVGcJH2rcdNpJfMK8F
          source_id: s_VpdBV6QZDhMwUaasUPfayi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_VpdBV6QZDhMwUaasUPfayi
            source_type: api_record
            title: 维基数据：王宗卿（Q45667611）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667611
            external_identifier: Q45667611
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:38.178Z
            metadata_json: null
        - id: cs_zjhSfgLjGuLvLDe6__uCDr
          claim_id: c_ZfR3xVGcJH2rcdNpJfMK8F
          source_id: s_jx9HvVkoYWDRb8fQYEb1Nz
          stance: supports
          locator: CBDB:175581
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jx9HvVkoYWDRb8fQYEb1Nz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宗卿（175581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175581&o=json
            external_identifier: CBDB:175581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:38.332Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8LXfQos6hXYYDZPzASCkb4
        subject_person_id: p_DxjskV5QQbWK43XQQTjaRU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 820年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0820-01-01
            latest: 0820-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P4Ph3hL1jYRthq9gvz1s33
          claim_id: c_8LXfQos6hXYYDZPzASCkb4
          source_id: s_VpdBV6QZDhMwUaasUPfayi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_VpdBV6QZDhMwUaasUPfayi
            source_type: api_record
            title: 维基数据：王宗卿（Q45667611）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667611
            external_identifier: Q45667611
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:38.178Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pdAvzG4JCnnNZ1FFW76N5n
        subject_person_id: p_DxjskV5QQbWK43XQQTjaRU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗卿
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DRCKAtSNDTs2hehwsSb46w
          claim_id: c_pdAvzG4JCnnNZ1FFW76N5n
          source_id: s_VpdBV6QZDhMwUaasUPfayi
          stance: supports
          locator: Q45667611
          quotation: null
          interpretation_note: null
          source:
            id: s_VpdBV6QZDhMwUaasUPfayi
            source_type: api_record
            title: 维基数据：王宗卿（Q45667611）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667611
            external_identifier: Q45667611
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:38.178Z
            metadata_json: null
        - id: cs_GtvdzhyMHzfxRowvEf2Ef3
          claim_id: c_pdAvzG4JCnnNZ1FFW76N5n
          source_id: s_jx9HvVkoYWDRb8fQYEb1Nz
          stance: supports
          locator: Q45667611
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9QApVX2HAk6MGuKBpopee9
        subject_person_id: p_wQDxmNuUv5BzL8mttEuDiy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DxjskV5QQbWK43XQQTjaRU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3auSa62HVfKfEr2QBsD3HB
          claim_id: c_9QApVX2HAk6MGuKBpopee9
          source_id: s_zK4CvFoJFcwzEFgeyp1exU
          stance: supports
          locator: P40（子女）
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
        - id: cs_Qhm9XGyG2DQuQqL4yDvqqE
          claim_id: c_9QApVX2HAk6MGuKBpopee9
          source_id: s_f1AMQ559ZBRHT5bk9Aq7jX
          stance: supports
          locator: 亲属关系：子
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
        - id: cs_Za7Pq7BpMkpA9XBSgmeM5j
          claim_id: c_9QApVX2HAk6MGuKBpopee9
          source_id: s_VpdBV6QZDhMwUaasUPfayi
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_VpdBV6QZDhMwUaasUPfayi
            source_type: api_record
            title: 维基数据：王宗卿（Q45667611）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667611
            external_identifier: Q45667611
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:38.178Z
            metadata_json: null
        - id: cs_YWmgJG6SrwpYj4TWZouvto
          claim_id: c_9QApVX2HAk6MGuKBpopee9
          source_id: s_jx9HvVkoYWDRb8fQYEb1Nz
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jx9HvVkoYWDRb8fQYEb1Nz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宗卿（175581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175581&o=json
            external_identifier: CBDB:175581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:38.332Z
            metadata_json: null
      object_person:
        id: p_wQDxmNuUv5BzL8mttEuDiy
        status: active
        display_name: 王复
        merged_into_person_id: null
  children:
    - claim:
        id: c_W8AbF59P9kwVMm9gMLf1x3
        subject_person_id: p_DxjskV5QQbWK43XQQTjaRU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cFYT9cQ2mUiYVDSuNqMz81
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_M56BP5QB264hEwV7foUoJC
          claim_id: c_W8AbF59P9kwVMm9gMLf1x3
          source_id: s_jx9HvVkoYWDRb8fQYEb1Nz
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jx9HvVkoYWDRb8fQYEb1Nz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宗卿（175581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175581&o=json
            external_identifier: CBDB:175581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:38.332Z
            metadata_json: null
        - id: cs_yGb7ucrujadjFJ8BevNK68
          claim_id: c_W8AbF59P9kwVMm9gMLf1x3
          source_id: s_VpdBV6QZDhMwUaasUPfayi
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_VpdBV6QZDhMwUaasUPfayi
            source_type: api_record
            title: 维基数据：王宗卿（Q45667611）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667611
            external_identifier: Q45667611
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:38.178Z
            metadata_json: null
        - id: cs_3SkVxZ2428sTpYMDFUroUB
          claim_id: c_W8AbF59P9kwVMm9gMLf1x3
          source_id: s_8ND8kSw76My7cuWroLvMJw
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8ND8kSw76My7cuWroLvMJw
            source_type: api_record
            title: 维基数据：王丽（Q45667661）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667661
            external_identifier: Q45667661
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:55.369Z
            metadata_json: null
        - id: cs_gwGnc1nbL5CGb82UHbSHH1
          claim_id: c_W8AbF59P9kwVMm9gMLf1x3
          source_id: s_Zv5g7AWciXR85KPMf6x5z1
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_Zv5g7AWciXR85KPMf6x5z1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王麗（175582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175582&o=json
            external_identifier: CBDB:175582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:55.520Z
            metadata_json: null
      object_person:
        id: p_cFYT9cQ2mUiYVDSuNqMz81
        status: active
        display_name: 王丽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗卿（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任丞。中国历代人物传记资料库（CBDB）以人物编号 175581 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 820年 | accepted |
| name.primary | 王宗卿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wQDxmNuUv5BzL8mttEuDiy | 王复 | accepted |
| children | p_cFYT9cQ2mUiYVDSuNqMz81 | 王丽 | accepted |

## 外部来源

- [维基数据：王复（Q45667560）](https://www.wikidata.org/wiki/Q45667560)
- [维基数据：王丽（Q45667661）](https://www.wikidata.org/wiki/Q45667661)
- [维基数据：王宗卿（Q45667611）](https://www.wikidata.org/wiki/Q45667611)
- [CBDB 中国历代人物传记资料库：王復（175580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175580&o=json)
- [CBDB 中国历代人物传记资料库：王麗（175582）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175582&o=json)
- [CBDB 中国历代人物传记资料库：王宗卿（175581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175581&o=json)
