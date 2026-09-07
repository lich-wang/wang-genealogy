---
schema: wang-person/v1
id: p_RtF59FE7pJYv9Y4pRvMqLB
status: active
merged_into: null
display_name: 王锐
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z55yr8AfhYVMEzSuuNmToK
        subject_person_id: p_RtF59FE7pJYv9Y4pRvMqLB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王锐（卒于857年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175408 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_yfdMrdPZvQ3q1vb2BhnkxS
          claim_id: c_z55yr8AfhYVMEzSuuNmToK
          source_id: s_H4nEyRrHq7tZ5VQiPjD81t
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_H4nEyRrHq7tZ5VQiPjD81t
            source_type: api_record
            title: 维基数据：王锐（Q45657869）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657869
            external_identifier: Q45657869
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:57.050Z
            metadata_json: null
        - id: cs_4brONqEcgvzPfMWvnpBxji
          claim_id: c_z55yr8AfhYVMEzSuuNmToK
          source_id: s_yKHSnw61a35LnUKFR2r6Wh
          stance: supports
          locator: CBDB:175408
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_yKHSnw61a35LnUKFR2r6Wh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王銳（175408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175408&o=json
            external_identifier: CBDB:175408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:57.197Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mXd213MT2PVSSzcZF1w55S
        subject_person_id: p_RtF59FE7pJYv9Y4pRvMqLB
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
        - id: cs_gkNHhRoUjFH26tbym7sSty
          claim_id: c_mXd213MT2PVSSzcZF1w55S
          source_id: s_H4nEyRrHq7tZ5VQiPjD81t
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_H4nEyRrHq7tZ5VQiPjD81t
            source_type: api_record
            title: 维基数据：王锐（Q45657869）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657869
            external_identifier: Q45657869
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:57.050Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4ybzqVXKQ2y2s7FezeJZiN
        subject_person_id: p_RtF59FE7pJYv9Y4pRvMqLB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王锐
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9pTbEw6zKbhYUuC1ptBR1E
          claim_id: c_4ybzqVXKQ2y2s7FezeJZiN
          source_id: s_yKHSnw61a35LnUKFR2r6Wh
          stance: supports
          locator: Q45657869
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_EQ2MPaKtLCooJXYGArPKie
          claim_id: c_4ybzqVXKQ2y2s7FezeJZiN
          source_id: s_H4nEyRrHq7tZ5VQiPjD81t
          stance: supports
          locator: Q45657869
          quotation: null
          interpretation_note: null
          source:
            id: s_H4nEyRrHq7tZ5VQiPjD81t
            source_type: api_record
            title: 维基数据：王锐（Q45657869）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657869
            external_identifier: Q45657869
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:57.050Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ezF8nGNEwDFV4jLSwaYnhx
        subject_person_id: p_zkLScucBk4JK57QATK1P5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RtF59FE7pJYv9Y4pRvMqLB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GH9nM8V9QUEHMdkAi4JXBR
          claim_id: c_ezF8nGNEwDFV4jLSwaYnhx
          source_id: s_z74bZ49AQL7hc4CKyB5mGw
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_z74bZ49AQL7hc4CKyB5mGw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王添（175407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175407&o=json
            external_identifier: CBDB:175407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:24.586Z
            metadata_json: null
        - id: cs_hE9VeDb8MZDRYpL2Y9aVn8
          claim_id: c_ezF8nGNEwDFV4jLSwaYnhx
          source_id: s_fmTBFRP6UZ4fK1GZjEfVZU
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fmTBFRP6UZ4fK1GZjEfVZU
            source_type: api_record
            title: 维基数据：王添（Q45657810）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657810
            external_identifier: Q45657810
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.425Z
            metadata_json: null
        - id: cs_DKTFrHoeNg6C1fNbU87AQs
          claim_id: c_ezF8nGNEwDFV4jLSwaYnhx
          source_id: s_H4nEyRrHq7tZ5VQiPjD81t
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_H4nEyRrHq7tZ5VQiPjD81t
            source_type: api_record
            title: 维基数据：王锐（Q45657869）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657869
            external_identifier: Q45657869
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:57.050Z
            metadata_json: null
        - id: cs_NWoZyGQN3X5U4RQvYX5SEL
          claim_id: c_ezF8nGNEwDFV4jLSwaYnhx
          source_id: s_yKHSnw61a35LnUKFR2r6Wh
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_yKHSnw61a35LnUKFR2r6Wh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王銳（175408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175408&o=json
            external_identifier: CBDB:175408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:57.197Z
            metadata_json: null
      object_person:
        id: p_zkLScucBk4JK57QATK1P5y
        status: active
        display_name: 王添
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王锐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王锐（卒于857年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175408 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 857年 | accepted |
| name.primary | 王锐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zkLScucBk4JK57QATK1P5y | 王添 | accepted |

## 外部来源

- [维基数据：王锐（Q45657869）](https://www.wikidata.org/wiki/Q45657869)
- [维基数据：王添（Q45657810）](https://www.wikidata.org/wiki/Q45657810)
- [CBDB 中国历代人物传记资料库：王銳（175408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175408&o=json)
- [CBDB 中国历代人物传记资料库：王添（175407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175407&o=json)
