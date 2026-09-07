---
schema: wang-person/v1
id: p_cFYT9cQ2mUiYVDSuNqMz81
status: active
merged_into: null
display_name: 王丽
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VB55uqDTCtHuBMWGom6hBG
        subject_person_id: p_cFYT9cQ2mUiYVDSuNqMz81
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丽（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175582 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_rbWsxkqs28ycJLN9DrZTpz
          claim_id: c_VB55uqDTCtHuBMWGom6hBG
          source_id: s_8ND8kSw76My7cuWroLvMJw
          stance: supports
          locator: null
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
        - id: cs_djqylVcHXMV8dmw_aZ2Q5c
          claim_id: c_VB55uqDTCtHuBMWGom6hBG
          source_id: s_Zv5g7AWciXR85KPMf6x5z1
          stance: supports
          locator: CBDB:175582
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_z6BcB2mz7kpJsX24kh95Uq
        subject_person_id: p_cFYT9cQ2mUiYVDSuNqMz81
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 857年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0857-01-01
            latest: 0857-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8c1YrYc3B1zvHJn33PvnLB
          claim_id: c_z6BcB2mz7kpJsX24kh95Uq
          source_id: s_8ND8kSw76My7cuWroLvMJw
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_22bkFvP5kWZYR4RFHeaTRQ
        subject_person_id: p_cFYT9cQ2mUiYVDSuNqMz81
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丽
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1Fut1AqJK5fm82Z6uos262
          claim_id: c_22bkFvP5kWZYR4RFHeaTRQ
          source_id: s_8ND8kSw76My7cuWroLvMJw
          stance: supports
          locator: Q45667661
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
        - id: cs_U57r8r2G9eMLZKYbg7BnyB
          claim_id: c_22bkFvP5kWZYR4RFHeaTRQ
          source_id: s_Zv5g7AWciXR85KPMf6x5z1
          stance: supports
          locator: Q45667661
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_DxjskV5QQbWK43XQQTjaRU
        status: active
        display_name: 王宗卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王丽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王丽（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175582 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 857年 | accepted |
| name.primary | 王丽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DxjskV5QQbWK43XQQTjaRU | 王宗卿 | accepted |

## 外部来源

- [维基数据：王丽（Q45667661）](https://www.wikidata.org/wiki/Q45667661)
- [维基数据：王宗卿（Q45667611）](https://www.wikidata.org/wiki/Q45667611)
- [CBDB 中国历代人物传记资料库：王麗（175582）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175582&o=json)
- [CBDB 中国历代人物传记资料库：王宗卿（175581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175581&o=json)
