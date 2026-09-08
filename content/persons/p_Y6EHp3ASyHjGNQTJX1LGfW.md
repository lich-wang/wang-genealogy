---
schema: wang-person/v1
id: p_Y6EHp3ASyHjGNQTJX1LGfW
status: active
merged_into: null
display_name: 王源会
cbdb_id: 175521
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ndwDqgviHC1tpD4RktCuB6
        subject_person_id: p_Y6EHp3ASyHjGNQTJX1LGfW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源会（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任州司馬。中国历代人物传记资料库（CBDB）以人物编号 175521 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fTNJ6ciPkQnJheQq644qY2
          claim_id: c_ndwDqgviHC1tpD4RktCuB6
          source_id: s_hhP5pWtrmDVXGJsgnUp94e
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_hhP5pWtrmDVXGJsgnUp94e
            source_type: api_record
            title: 维基数据：王源会（Q45664488）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664488
            external_identifier: Q45664488
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:34.816Z
            metadata_json: null
        - id: cs_oCf6LVAelOJNhOG7lQd8hr
          claim_id: c_ndwDqgviHC1tpD4RktCuB6
          source_id: s_2ihpRyFkaV1AsVLrQ4p9S3
          stance: supports
          locator: CBDB:175521
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2ihpRyFkaV1AsVLrQ4p9S3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源會（175521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175521&o=json
            external_identifier: CBDB:175521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:34.973Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EynRgDD8rHBZB7QkwmXt2q
        subject_person_id: p_Y6EHp3ASyHjGNQTJX1LGfW
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
        - id: cs_BmV3qUkyXNf8d3ox9qHxLK
          claim_id: c_EynRgDD8rHBZB7QkwmXt2q
          source_id: s_hhP5pWtrmDVXGJsgnUp94e
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_hhP5pWtrmDVXGJsgnUp94e
            source_type: api_record
            title: 维基数据：王源会（Q45664488）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664488
            external_identifier: Q45664488
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:34.816Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_z6Uwo1i5NPce74sgN2SNi9
        subject_person_id: p_Y6EHp3ASyHjGNQTJX1LGfW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源会
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BJKdoFpE8UCCzz2GDsX1Vu
          claim_id: c_z6Uwo1i5NPce74sgN2SNi9
          source_id: s_2ihpRyFkaV1AsVLrQ4p9S3
          stance: supports
          locator: Q45664488
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_DGpkM2EKTToGG9udGM6Cet
          claim_id: c_z6Uwo1i5NPce74sgN2SNi9
          source_id: s_hhP5pWtrmDVXGJsgnUp94e
          stance: supports
          locator: Q45664488
          quotation: null
          interpretation_note: null
          source:
            id: s_hhP5pWtrmDVXGJsgnUp94e
            source_type: api_record
            title: 维基数据：王源会（Q45664488）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664488
            external_identifier: Q45664488
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:34.816Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kdinXPv4Gd4zupYEM1D7CP
        subject_person_id: p_4wbLmXso7CEPndJiovTrS6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Y6EHp3ASyHjGNQTJX1LGfW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_151GY2f4AgrKqYdct6EHJu
          claim_id: c_kdinXPv4Gd4zupYEM1D7CP
          source_id: s_x9jX1CPvi1JzpZGHEakrCh
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_x9jX1CPvi1JzpZGHEakrCh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澗（175512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175512&o=json
            external_identifier: CBDB:175512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.523Z
            metadata_json: null
        - id: cs_2DWpWiJZ5F4pv9x3qx7kmZ
          claim_id: c_kdinXPv4Gd4zupYEM1D7CP
          source_id: s_uCb6D1MQ7rqZFP4WWBbACN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_uCb6D1MQ7rqZFP4WWBbACN
            source_type: api_record
            title: 维基数据：王涧（Q45663995）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663995
            external_identifier: Q45663995
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.369Z
            metadata_json: null
        - id: cs_jLL7cRB2LBUcRedw6YZX6m
          claim_id: c_kdinXPv4Gd4zupYEM1D7CP
          source_id: s_hhP5pWtrmDVXGJsgnUp94e
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_hhP5pWtrmDVXGJsgnUp94e
            source_type: api_record
            title: 维基数据：王源会（Q45664488）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664488
            external_identifier: Q45664488
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:34.816Z
            metadata_json: null
        - id: cs_4WFk7WVS82gbBq1wpS4DBd
          claim_id: c_kdinXPv4Gd4zupYEM1D7CP
          source_id: s_2ihpRyFkaV1AsVLrQ4p9S3
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_2ihpRyFkaV1AsVLrQ4p9S3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源會（175521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175521&o=json
            external_identifier: CBDB:175521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:34.973Z
            metadata_json: null
      object_person:
        id: p_4wbLmXso7CEPndJiovTrS6
        status: active
        display_name: 王涧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王源会

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王源会（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任州司馬。中国历代人物传记资料库（CBDB）以人物编号 175521 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 820年 | accepted |
| name.primary | 王源会 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4wbLmXso7CEPndJiovTrS6 | 王涧 | accepted |

## 外部来源

- [维基数据：王涧（Q45663995）](https://www.wikidata.org/wiki/Q45663995)
- [维基数据：王源会（Q45664488）](https://www.wikidata.org/wiki/Q45664488)
- [CBDB 中国历代人物传记资料库：王澗（175512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175512&o=json)
- [CBDB 中国历代人物传记资料库：王源會（175521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175521&o=json)
