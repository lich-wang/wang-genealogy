---
schema: wang-person/v1
id: p_1BjfWTQ3bxaePX6m9r2vdD
status: active
merged_into: null
display_name: 王源芳
cbdb_id: 175597
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PwUk7KbHbMxv9npLPYwwKm
        subject_person_id: p_1BjfWTQ3bxaePX6m9r2vdD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源芳（卒于820年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175597）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Mb8nKioYJA4SFCZzizDPZ1
          claim_id: c_PwUk7KbHbMxv9npLPYwwKm
          source_id: s_3G1fWK7mDYLJrAK92Euy8n
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_3G1fWK7mDYLJrAK92Euy8n
            source_type: api_record
            title: 维基数据：王源芳（Q45668420）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668420
            external_identifier: Q45668420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:41.578Z
            metadata_json: null
        - id: cs_MMl_wYh2yt7fkR0D-ic0WS
          claim_id: c_PwUk7KbHbMxv9npLPYwwKm
          source_id: s_h3Bf8MJ7aYsXqUtFS7MsG9
          stance: supports
          locator: CBDB:175597
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_h3Bf8MJ7aYsXqUtFS7MsG9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源芳（175597）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175597&o=json
            external_identifier: CBDB:175597
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:41.725Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Dy6hhcKBMYVxs2Qc7y8qra
        subject_person_id: p_1BjfWTQ3bxaePX6m9r2vdD
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
        - id: cs_P3jJhGUgH7xtmhYc91t9BD
          claim_id: c_Dy6hhcKBMYVxs2Qc7y8qra
          source_id: s_3G1fWK7mDYLJrAK92Euy8n
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_3G1fWK7mDYLJrAK92Euy8n
            source_type: api_record
            title: 维基数据：王源芳（Q45668420）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668420
            external_identifier: Q45668420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:41.578Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5CY1UPvYtz4iaVHhAJ8csD
        subject_person_id: p_1BjfWTQ3bxaePX6m9r2vdD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源芳
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KzGDLhroVUvZUJbPdSHMMk
          claim_id: c_5CY1UPvYtz4iaVHhAJ8csD
          source_id: s_3G1fWK7mDYLJrAK92Euy8n
          stance: supports
          locator: Q45668420
          quotation: null
          interpretation_note: null
          source:
            id: s_3G1fWK7mDYLJrAK92Euy8n
            source_type: api_record
            title: 维基数据：王源芳（Q45668420）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668420
            external_identifier: Q45668420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:41.578Z
            metadata_json: null
        - id: cs_zGZ4WbUQN73kL7zFe7f8ni
          claim_id: c_5CY1UPvYtz4iaVHhAJ8csD
          source_id: s_h3Bf8MJ7aYsXqUtFS7MsG9
          stance: supports
          locator: Q45668420
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LPfitWPwiDLVbQCKhwN8bR
        subject_person_id: p_iDjU7xfWF1u1bfDbSWDe7b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1BjfWTQ3bxaePX6m9r2vdD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_869ETBFRbCd1mZTb5FYHAT
          claim_id: c_LPfitWPwiDLVbQCKhwN8bR
          source_id: s_19dKF6FW2uFWmfB9JTQYBZ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_19dKF6FW2uFWmfB9JTQYBZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王濤（175594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175594&o=json
            external_identifier: CBDB:175594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:48.866Z
            metadata_json: null
        - id: cs_gy4mEDxJ8EEQsAn3KUS9xG
          claim_id: c_LPfitWPwiDLVbQCKhwN8bR
          source_id: s_oCtsBQHAxfAi2HUf2GR7z8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_oCtsBQHAxfAi2HUf2GR7z8
            source_type: api_record
            title: 维基数据：王涛（Q45668270）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668270
            external_identifier: Q45668270
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.700Z
            metadata_json: null
        - id: cs_26L7uUKt4kQxcMwtEhQnAW
          claim_id: c_LPfitWPwiDLVbQCKhwN8bR
          source_id: s_3G1fWK7mDYLJrAK92Euy8n
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_3G1fWK7mDYLJrAK92Euy8n
            source_type: api_record
            title: 维基数据：王源芳（Q45668420）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668420
            external_identifier: Q45668420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:41.578Z
            metadata_json: null
        - id: cs_1TokK2evNBTLKZ9tvPkNDN
          claim_id: c_LPfitWPwiDLVbQCKhwN8bR
          source_id: s_h3Bf8MJ7aYsXqUtFS7MsG9
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_h3Bf8MJ7aYsXqUtFS7MsG9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源芳（175597）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175597&o=json
            external_identifier: CBDB:175597
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:41.725Z
            metadata_json: null
      object_person:
        id: p_iDjU7xfWF1u1bfDbSWDe7b
        status: active
        display_name: 王涛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王源芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王源芳（卒于820年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175597） | accepted |
| death.date | 820年 | accepted |
| name.primary | 王源芳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iDjU7xfWF1u1bfDbSWDe7b | 王涛 | accepted |

## 外部来源

- [维基数据：王涛（Q45668270）](https://www.wikidata.org/wiki/Q45668270)
- [维基数据：王源芳（Q45668420）](https://www.wikidata.org/wiki/Q45668420)
- [CBDB 中国历代人物传记资料库：王濤（175594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175594&o=json)
- [CBDB 中国历代人物传记资料库：王源芳（175597）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175597&o=json)
