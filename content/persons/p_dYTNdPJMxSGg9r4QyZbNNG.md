---
schema: wang-person/v1
id: p_dYTNdPJMxSGg9r4QyZbNNG
status: active
merged_into: null
display_name: 王嗣源
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NKBKCN3xP1g82RLXWWKTFj
        subject_person_id: p_dYTNdPJMxSGg9r4QyZbNNG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣源（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任參軍。中国历代人物传记资料库（CBDB）以人物编号 175562 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6GRLa8GqEK24UQJAMhKVRr
          claim_id: c_NKBKCN3xP1g82RLXWWKTFj
          source_id: s_39g5gu3A7qF5kWbR6WVCbA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_39g5gu3A7qF5kWbR6WVCbA
            source_type: api_record
            title: 维基数据：王嗣源（Q45666666）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666666
            external_identifier: Q45666666
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:02.869Z
            metadata_json: null
        - id: cs_zRwYbHcjSP4eDPP_IGuY-I
          claim_id: c_NKBKCN3xP1g82RLXWWKTFj
          source_id: s_uQi5nNanzZ46EA5M7KTHLM
          stance: supports
          locator: CBDB:175562
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_uQi5nNanzZ46EA5M7KTHLM
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王嗣源（175562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175562&o=json
            external_identifier: CBDB:175562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:03.042Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Ag2eQS6LaAXXVjQSe8tzRU
        subject_person_id: p_dYTNdPJMxSGg9r4QyZbNNG
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
        - id: cs_hoW9fQErQJehzvbj96BevG
          claim_id: c_Ag2eQS6LaAXXVjQSe8tzRU
          source_id: s_39g5gu3A7qF5kWbR6WVCbA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_39g5gu3A7qF5kWbR6WVCbA
            source_type: api_record
            title: 维基数据：王嗣源（Q45666666）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666666
            external_identifier: Q45666666
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:02.869Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1xb3r5NFG9qDGGkZ6sK4T1
        subject_person_id: p_dYTNdPJMxSGg9r4QyZbNNG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣源
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4S76ydQMcR6RsnEFywyxFS
          claim_id: c_1xb3r5NFG9qDGGkZ6sK4T1
          source_id: s_39g5gu3A7qF5kWbR6WVCbA
          stance: supports
          locator: Q45666666
          quotation: null
          interpretation_note: null
          source:
            id: s_39g5gu3A7qF5kWbR6WVCbA
            source_type: api_record
            title: 维基数据：王嗣源（Q45666666）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666666
            external_identifier: Q45666666
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:02.869Z
            metadata_json: null
        - id: cs_Zk2L113kSg2B7iXPDkgWxJ
          claim_id: c_1xb3r5NFG9qDGGkZ6sK4T1
          source_id: s_uQi5nNanzZ46EA5M7KTHLM
          stance: supports
          locator: Q45666666
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UhfhoEzuXxXZZS92bS13js
        subject_person_id: p_FPisTavdR1h9GP2xzczNXG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dYTNdPJMxSGg9r4QyZbNNG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3tbyEMgSn1Lo1Jz7PSvvoS
          claim_id: c_UhfhoEzuXxXZZS92bS13js
          source_id: s_voSJPovZEpdxhCGcBmtgv9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_voSJPovZEpdxhCGcBmtgv9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宰（175555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json
            external_identifier: CBDB:175555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:35.807Z
            metadata_json: null
        - id: cs_FvN5NTQxj1LDkqy57SUJXF
          claim_id: c_UhfhoEzuXxXZZS92bS13js
          source_id: s_Z6xkyBZUAF7wA6GtshtnYB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z6xkyBZUAF7wA6GtshtnYB
            source_type: api_record
            title: 维基数据：王宰（Q45666287）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666287
            external_identifier: Q45666287
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.625Z
            metadata_json: null
        - id: cs_Ej8Y8ZEXjbWP3YkYYndfMb
          claim_id: c_UhfhoEzuXxXZZS92bS13js
          source_id: s_39g5gu3A7qF5kWbR6WVCbA
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_39g5gu3A7qF5kWbR6WVCbA
            source_type: api_record
            title: 维基数据：王嗣源（Q45666666）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666666
            external_identifier: Q45666666
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:02.869Z
            metadata_json: null
        - id: cs_J6xfQL7hwjGJkBQt8pzhqP
          claim_id: c_UhfhoEzuXxXZZS92bS13js
          source_id: s_uQi5nNanzZ46EA5M7KTHLM
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_uQi5nNanzZ46EA5M7KTHLM
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王嗣源（175562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175562&o=json
            external_identifier: CBDB:175562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:03.042Z
            metadata_json: null
      object_person:
        id: p_FPisTavdR1h9GP2xzczNXG
        status: active
        display_name: 王宰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嗣源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王嗣源（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任參軍。中国历代人物传记资料库（CBDB）以人物编号 175562 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 783年 | accepted |
| name.primary | 王嗣源 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FPisTavdR1h9GP2xzczNXG | 王宰 | accepted |

## 外部来源

- [维基数据：王嗣源（Q45666666）](https://www.wikidata.org/wiki/Q45666666)
- [维基数据：王宰（Q45666287）](https://www.wikidata.org/wiki/Q45666287)
- [CBDB 中国历代人物传记资料库：王嗣源（175562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175562&o=json)
- [CBDB 中国历代人物传记资料库：王宰（175555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json)
