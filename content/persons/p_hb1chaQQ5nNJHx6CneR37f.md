---
schema: wang-person/v1
id: p_hb1chaQQ5nNJHx6CneR37f
status: active
merged_into: null
display_name: 王世伦
cbdb_id: 22201
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mACCgr1ApMBYDD3xTfh1Ft
        subject_person_id: p_hb1chaQQ5nNJHx6CneR37f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世伦（卒于1036年），宋人物。CBDB 记录其籍贯记录为江都。中国历代人物传记资料库（CBDB）以人物编号 22201 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_jS1ZxGkd7hcuQiiHJCz6CE
          claim_id: c_mACCgr1ApMBYDD3xTfh1Ft
          source_id: s_RWUcMwDfJPWLNRTZEHqpJC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_RWUcMwDfJPWLNRTZEHqpJC
            source_type: api_record
            title: 维基数据：王世伦（Q45402028）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402028
            external_identifier: Q45402028
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:40:14.226Z
            metadata_json: null
        - id: cs_Jyx-hiKGKiqdlRYSvm4fmI
          claim_id: c_mACCgr1ApMBYDD3xTfh1Ft
          source_id: s_cEKmM4xL1FPpk4omq9j1FQ
          stance: supports
          locator: CBDB:22201
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_cEKmM4xL1FPpk4omq9j1FQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王世倫（22201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22201&o=json
            external_identifier: CBDB:22201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:40:14.384Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DMtWGXF5UBM16RQDRPmPKt
        subject_person_id: p_hb1chaQQ5nNJHx6CneR37f
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1036年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1036-01-01
            latest: 1036-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5JcdN5xMDTk6gdSXQABkRD
          claim_id: c_DMtWGXF5UBM16RQDRPmPKt
          source_id: s_RWUcMwDfJPWLNRTZEHqpJC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_RWUcMwDfJPWLNRTZEHqpJC
            source_type: api_record
            title: 维基数据：王世伦（Q45402028）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402028
            external_identifier: Q45402028
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:40:14.226Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9HNh6FPTBkTPyezk6o8mHZ
        subject_person_id: p_hb1chaQQ5nNJHx6CneR37f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世伦
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NYJMQAkDMJEgNTiJ5ApHxX
          claim_id: c_9HNh6FPTBkTPyezk6o8mHZ
          source_id: s_cEKmM4xL1FPpk4omq9j1FQ
          stance: supports
          locator: Q45402028
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_x45EN8rkRLtiad3nsj74Cq
          claim_id: c_9HNh6FPTBkTPyezk6o8mHZ
          source_id: s_RWUcMwDfJPWLNRTZEHqpJC
          stance: supports
          locator: Q45402028
          quotation: null
          interpretation_note: null
          source:
            id: s_RWUcMwDfJPWLNRTZEHqpJC
            source_type: api_record
            title: 维基数据：王世伦（Q45402028）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402028
            external_identifier: Q45402028
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:40:14.226Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KQYeh5GUPHJyHVyH2aqrwc
        subject_person_id: p_KGRi1kNs9wSQNE2Say4FzP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hb1chaQQ5nNJHx6CneR37f
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_26QQbPYramEuKSoQ9WRu44
          claim_id: c_KQYeh5GUPHJyHVyH2aqrwc
          source_id: s_cEKmM4xL1FPpk4omq9j1FQ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_cEKmM4xL1FPpk4omq9j1FQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王世倫（22201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22201&o=json
            external_identifier: CBDB:22201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:40:14.384Z
            metadata_json: null
        - id: cs_LQNvv7TG5u5pmAj1HWKPWL
          claim_id: c_KQYeh5GUPHJyHVyH2aqrwc
          source_id: s_RWUcMwDfJPWLNRTZEHqpJC
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_RWUcMwDfJPWLNRTZEHqpJC
            source_type: api_record
            title: 维基数据：王世伦（Q45402028）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402028
            external_identifier: Q45402028
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:40:14.226Z
            metadata_json: null
        - id: cs_6rJjJESdhBrbDPqD14AJqc
          claim_id: c_KQYeh5GUPHJyHVyH2aqrwc
          source_id: s_4zqxM1jC7WNSS5HTnHd2Z2
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_4zqxM1jC7WNSS5HTnHd2Z2
            source_type: api_record
            title: 维基数据：王珙（Q45402027）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402027
            external_identifier: Q45402027
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:56.262Z
            metadata_json: null
        - id: cs_EQvC9y2QUwxCM6obR1dqFP
          claim_id: c_KQYeh5GUPHJyHVyH2aqrwc
          source_id: s_rGPB9At8CwEqMh17TwRhNm
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_rGPB9At8CwEqMh17TwRhNm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王珙（22200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22200&o=json
            external_identifier: CBDB:22200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:59:56.411Z
            metadata_json: null
      object_person:
        id: p_KGRi1kNs9wSQNE2Say4FzP
        status: active
        display_name: 王珙
        merged_into_person_id: null
  children:
    - claim:
        id: c_jeHPgTnzJMC1jJQ3TLvA9A
        subject_person_id: p_hb1chaQQ5nNJHx6CneR37f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4g3xdD6NPZ5iQggyuwkBGV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_7rcP4BuV7M8FUL2zT5fNpN
          claim_id: c_jeHPgTnzJMC1jJQ3TLvA9A
          source_id: s_UujRkoKDckHvRd6QNdW5e2
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_UujRkoKDckHvRd6QNdW5e2
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王令（3967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3967&o=json
            external_identifier: CBDB:3967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:31:47.707Z
            metadata_json: null
        - id: cs_f9wqWkx6YDAMrL2Ziok9ZE
          claim_id: c_jeHPgTnzJMC1jJQ3TLvA9A
          source_id: s_GLcyDDdar5Kc7itiDLtcrm
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_GLcyDDdar5Kc7itiDLtcrm
            source_type: api_record
            title: 维基数据：王令（Q2898768）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2898768
            external_identifier: Q2898768
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:47.540Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%A4
        - id: cs_C7kkpPMJAEiFpiGtmBf7z1
          claim_id: c_jeHPgTnzJMC1jJQ3TLvA9A
          source_id: s_RWUcMwDfJPWLNRTZEHqpJC
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RWUcMwDfJPWLNRTZEHqpJC
            source_type: api_record
            title: 维基数据：王世伦（Q45402028）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402028
            external_identifier: Q45402028
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:40:14.226Z
            metadata_json: null
        - id: cs_zQHb5omDZVxRbwaG6LP9gi
          claim_id: c_jeHPgTnzJMC1jJQ3TLvA9A
          source_id: s_cEKmM4xL1FPpk4omq9j1FQ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_cEKmM4xL1FPpk4omq9j1FQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王世倫（22201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22201&o=json
            external_identifier: CBDB:22201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:40:14.384Z
            metadata_json: null
      object_person:
        id: p_4g3xdD6NPZ5iQggyuwkBGV
        status: active
        display_name: 王令
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世伦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世伦（卒于1036年），宋人物。CBDB 记录其籍贯记录为江都。中国历代人物传记资料库（CBDB）以人物编号 22201 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 1036年 | accepted |
| name.primary | 王世伦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KGRi1kNs9wSQNE2Say4FzP | 王珙 | accepted |
| children | p_4g3xdD6NPZ5iQggyuwkBGV | 王令 | accepted |

## 外部来源

- [维基数据：王珙（Q45402027）](https://www.wikidata.org/wiki/Q45402027)
- [维基数据：王令（Q2898768）](https://www.wikidata.org/wiki/Q2898768)
- [维基数据：王世伦（Q45402028）](https://www.wikidata.org/wiki/Q45402028)
- [CBDB 中国历代人物传记资料库：王珙（22200）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22200&o=json)
- [CBDB 中国历代人物传记资料库：王令（3967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3967&o=json)
- [CBDB 中国历代人物传记资料库：王世倫（22201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22201&o=json)
