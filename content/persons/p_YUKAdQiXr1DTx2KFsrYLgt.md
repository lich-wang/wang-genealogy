---
schema: wang-person/v1
id: p_YUKAdQiXr1DTx2KFsrYLgt
status: active
merged_into: null
display_name: 王琛
cbdb_id: 264938
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JKHfwhFP2zvgPGwZvBGBdF
        subject_person_id: p_YUKAdQiXr1DTx2KFsrYLgt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琛，明人物。中国历代人物传记资料库（CBDB）以人物编号 264938 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_yR7xr9wdYk8cuMo4t5428q
          claim_id: c_JKHfwhFP2zvgPGwZvBGBdF
          source_id: s_B552dSZzBGwMMCA9WPbwQi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_B552dSZzBGwMMCA9WPbwQi
            source_type: api_record
            title: 维基数据：王琛（Q45583436）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45583436
            external_identifier: Q45583436
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:19.152Z
            metadata_json: null
        - id: cs_GBx4X2H-DJiqIVjmJpaVrM
          claim_id: c_JKHfwhFP2zvgPGwZvBGBdF
          source_id: s_rf2WhX4xieEswvbpew1CRt
          stance: supports
          locator: CBDB:264938
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_rf2WhX4xieEswvbpew1CRt
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王琛（264938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264938&o=json
            external_identifier: CBDB:264938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:19.309Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dD3nMuBf92v3LQ7yJGZawq
        subject_person_id: p_YUKAdQiXr1DTx2KFsrYLgt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琛
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7DfQYVqt8u9EwUzCVxEtCb
          claim_id: c_dD3nMuBf92v3LQ7yJGZawq
          source_id: s_B552dSZzBGwMMCA9WPbwQi
          stance: supports
          locator: Q45583436
          quotation: null
          interpretation_note: null
          source:
            id: s_B552dSZzBGwMMCA9WPbwQi
            source_type: api_record
            title: 维基数据：王琛（Q45583436）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45583436
            external_identifier: Q45583436
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:19.152Z
            metadata_json: null
        - id: cs_Nf72Jwi41C5sz3UQ5pUFe1
          claim_id: c_dD3nMuBf92v3LQ7yJGZawq
          source_id: s_rf2WhX4xieEswvbpew1CRt
          stance: supports
          locator: Q45583436
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_61FtbjnoAYgrAukFJaQrkF
        subject_person_id: p_WWiatCTUQBMimYAeHSJjDW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YUKAdQiXr1DTx2KFsrYLgt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_11dNA1X79nByMTyHeicYsq
          claim_id: c_61FtbjnoAYgrAukFJaQrkF
          source_id: s_eVYVZpC9SpRQ4QkjAsCUsV
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_eVYVZpC9SpRQ4QkjAsCUsV
            source_type: api_record
            title: 维基数据：王纯礼（Q45583309）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45583309
            external_identifier: Q45583309
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_X7qVLU1gJNePnTdS7vK2Gv
          claim_id: c_61FtbjnoAYgrAukFJaQrkF
          source_id: s_B552dSZzBGwMMCA9WPbwQi
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_WWiatCTUQBMimYAeHSJjDW
        status: active
        display_name: 王纯礼
        merged_into_person_id: null
  children:
    - claim:
        id: c_3hiyBQZLwBsW8TR2h5mq1M
        subject_person_id: p_YUKAdQiXr1DTx2KFsrYLgt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zQAyFcVTh8uEFRKFQtkku9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hoUotdm3wyN2YcpVRrbf9T
          claim_id: c_3hiyBQZLwBsW8TR2h5mq1M
          source_id: s_eu2QmMuoGyj9A1rH6i5Uf3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_eu2QmMuoGyj9A1rH6i5Uf3
            source_type: api_record
            title: 维基数据：王恪（Q45583500）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45583500
            external_identifier: Q45583500
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
        - id: cs_3kb66C7yu75ywzU2HAeeFZ
          claim_id: c_3hiyBQZLwBsW8TR2h5mq1M
          source_id: s_B552dSZzBGwMMCA9WPbwQi
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_zQAyFcVTh8uEFRKFQtkku9
        status: active
        display_name: 王恪
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王琛，明人物。中国历代人物传记资料库（CBDB）以人物编号 264938 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王琛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WWiatCTUQBMimYAeHSJjDW | 王纯礼 | accepted |
| children | p_zQAyFcVTh8uEFRKFQtkku9 | 王恪 | accepted |

## 外部来源

- [维基数据：王琛（Q45583436）](https://www.wikidata.org/wiki/Q45583436)
- [维基数据：王纯礼（Q45583309）](https://www.wikidata.org/wiki/Q45583309)
- [维基数据：王恪（Q45583500）](https://www.wikidata.org/wiki/Q45583500)
- [CBDB 中国历代人物传记资料库：王琛（264938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264938&o=json)
