---
schema: wang-person/v1
id: p_AM279y1FBWLXDup9iNRGPt
status: active
merged_into: null
display_name: 王子尚
cbdb_id: 175488
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KN42i3MveEFbHMd7eawBF5
        subject_person_id: p_AM279y1FBWLXDup9iNRGPt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子尚（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任令。中国历代人物传记资料库（CBDB）以人物编号 175488 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_LJ13bxfnG88rDPRKQeh4e9
          claim_id: c_KN42i3MveEFbHMd7eawBF5
          source_id: s_xbXkKm3xYoCRN7njq4TJie
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_xbXkKm3xYoCRN7njq4TJie
            source_type: api_record
            title: 维基数据：王子尚（Q45662635）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662635
            external_identifier: Q45662635
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:29.641Z
            metadata_json: null
        - id: cs_leiQnUqs7icB4zXKV-BB1p
          claim_id: c_KN42i3MveEFbHMd7eawBF5
          source_id: s_ne8pUP8ifjvRpT4X2jvPqt
          stance: supports
          locator: CBDB:175488
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ne8pUP8ifjvRpT4X2jvPqt
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王子尚（175488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175488&o=json
            external_identifier: CBDB:175488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:29.799Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_LT2ctbUbKezB8oD3HPBRLx
        subject_person_id: p_AM279y1FBWLXDup9iNRGPt
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
        - id: cs_ZDPJk53J2di6FMKX7CLbnt
          claim_id: c_LT2ctbUbKezB8oD3HPBRLx
          source_id: s_xbXkKm3xYoCRN7njq4TJie
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_xbXkKm3xYoCRN7njq4TJie
            source_type: api_record
            title: 维基数据：王子尚（Q45662635）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662635
            external_identifier: Q45662635
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:29.641Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8RK7YwMCwD4firvuFyB2ZM
        subject_person_id: p_AM279y1FBWLXDup9iNRGPt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子尚
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JJdC6KEYGoR1Y9uRtSVxY6
          claim_id: c_8RK7YwMCwD4firvuFyB2ZM
          source_id: s_ne8pUP8ifjvRpT4X2jvPqt
          stance: supports
          locator: Q45662635
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_ND88iNEZFwM8YoRECNhMmk
          claim_id: c_8RK7YwMCwD4firvuFyB2ZM
          source_id: s_xbXkKm3xYoCRN7njq4TJie
          stance: supports
          locator: Q45662635
          quotation: null
          interpretation_note: null
          source:
            id: s_xbXkKm3xYoCRN7njq4TJie
            source_type: api_record
            title: 维基数据：王子尚（Q45662635）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662635
            external_identifier: Q45662635
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:29.641Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1K9GwH57n4oNGMFpWF94SZ
        subject_person_id: p_Temqm8d7G2BX5AMhsUSsKe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AM279y1FBWLXDup9iNRGPt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3McthoYCu7zeHPBDW1397Q
          claim_id: c_1K9GwH57n4oNGMFpWF94SZ
          source_id: s_g91cQTxn2A1Y9WJ81nRhWQ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_g91cQTxn2A1Y9WJ81nRhWQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王淮（175485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175485&o=json
            external_identifier: CBDB:175485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.829Z
            metadata_json: null
        - id: cs_8v4yh2Mxzb9zkVVyFTt9QP
          claim_id: c_1K9GwH57n4oNGMFpWF94SZ
          source_id: s_oP3nDo3PJy5MiFhowymRjU
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_oP3nDo3PJy5MiFhowymRjU
            source_type: api_record
            title: 维基数据：王淮（Q45662457）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662457
            external_identifier: Q45662457
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.665Z
            metadata_json: null
        - id: cs_hUGPD1aJtmtJsbnFHUf8ze
          claim_id: c_1K9GwH57n4oNGMFpWF94SZ
          source_id: s_xbXkKm3xYoCRN7njq4TJie
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_xbXkKm3xYoCRN7njq4TJie
            source_type: api_record
            title: 维基数据：王子尚（Q45662635）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662635
            external_identifier: Q45662635
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:29.641Z
            metadata_json: null
        - id: cs_x8fxXbf5W5n8BMNjhWYBwq
          claim_id: c_1K9GwH57n4oNGMFpWF94SZ
          source_id: s_ne8pUP8ifjvRpT4X2jvPqt
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ne8pUP8ifjvRpT4X2jvPqt
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王子尚（175488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175488&o=json
            external_identifier: CBDB:175488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:29.799Z
            metadata_json: null
      object_person:
        id: p_Temqm8d7G2BX5AMhsUSsKe
        status: active
        display_name: 王淮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子尚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子尚（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任令。中国历代人物传记资料库（CBDB）以人物编号 175488 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 820年 | accepted |
| name.primary | 王子尚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Temqm8d7G2BX5AMhsUSsKe | 王淮 | accepted |

## 外部来源

- [维基数据：王淮（Q45662457）](https://www.wikidata.org/wiki/Q45662457)
- [维基数据：王子尚（Q45662635）](https://www.wikidata.org/wiki/Q45662635)
- [CBDB 中国历代人物传记资料库：王淮（175485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175485&o=json)
- [CBDB 中国历代人物传记资料库：王子尚（175488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175488&o=json)
