---
schema: wang-person/v1
id: p_3YKBL6QdYUSrkYMomw6J8u
status: active
merged_into: null
display_name: 王士则
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ujf8m7dc42yZTTpu7uWG4E
        subject_person_id: p_3YKBL6QdYUSrkYMomw6J8u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士则（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任挽郎。中国历代人物传记资料库（CBDB）以人物编号 175561 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_nmR8YEuEL7YhHbjsP1AZXQ
          claim_id: c_ujf8m7dc42yZTTpu7uWG4E
          source_id: s_ed9MeQB2u1WkTfqBVhwkMW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ed9MeQB2u1WkTfqBVhwkMW
            source_type: api_record
            title: 维基数据：王士则（Q45666613）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666613
            external_identifier: Q45666613
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:02.869Z
            metadata_json: null
        - id: cs_K45qOiiFsHKKsRRdXVibOF
          claim_id: c_ujf8m7dc42yZTTpu7uWG4E
          source_id: s_PNBxUXiC1KnGAZ3UCKxk3L
          stance: supports
          locator: CBDB:175561
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_PNBxUXiC1KnGAZ3UCKxk3L
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士則（175561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175561&o=json
            external_identifier: CBDB:175561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:03.049Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_gcqmQK5DCMjqG9DqAHSFW5
        subject_person_id: p_3YKBL6QdYUSrkYMomw6J8u
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
        - id: cs_iHBcDTj4XzAzrmGA84wX9L
          claim_id: c_gcqmQK5DCMjqG9DqAHSFW5
          source_id: s_ed9MeQB2u1WkTfqBVhwkMW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ed9MeQB2u1WkTfqBVhwkMW
            source_type: api_record
            title: 维基数据：王士则（Q45666613）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666613
            external_identifier: Q45666613
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:02.869Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YX2SQwArCCcxgmMDqec8pj
        subject_person_id: p_3YKBL6QdYUSrkYMomw6J8u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士则
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CaZFvLKmi4VrS9A8Z3xnpV
          claim_id: c_YX2SQwArCCcxgmMDqec8pj
          source_id: s_PNBxUXiC1KnGAZ3UCKxk3L
          stance: supports
          locator: Q45666613
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_nD78gBQn15XvngdLoTGKw7
          claim_id: c_YX2SQwArCCcxgmMDqec8pj
          source_id: s_ed9MeQB2u1WkTfqBVhwkMW
          stance: supports
          locator: Q45666613
          quotation: null
          interpretation_note: null
          source:
            id: s_ed9MeQB2u1WkTfqBVhwkMW
            source_type: api_record
            title: 维基数据：王士则（Q45666613）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666613
            external_identifier: Q45666613
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:02.869Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3KajwHCcSoYAQCUkMt2nhj
        subject_person_id: p_FPisTavdR1h9GP2xzczNXG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3YKBL6QdYUSrkYMomw6J8u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_SWX3ZQRS22tphqP1XAPh7S
          claim_id: c_3KajwHCcSoYAQCUkMt2nhj
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
        - id: cs_keLWGsmGSaBYk1jYMN2KoR
          claim_id: c_3KajwHCcSoYAQCUkMt2nhj
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
        - id: cs_V5Lo3pkcsK6QxxG53VnFyz
          claim_id: c_3KajwHCcSoYAQCUkMt2nhj
          source_id: s_ed9MeQB2u1WkTfqBVhwkMW
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ed9MeQB2u1WkTfqBVhwkMW
            source_type: api_record
            title: 维基数据：王士则（Q45666613）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666613
            external_identifier: Q45666613
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:02.869Z
            metadata_json: null
        - id: cs_cQDA5t88XyL9BspzNH2E2h
          claim_id: c_3KajwHCcSoYAQCUkMt2nhj
          source_id: s_PNBxUXiC1KnGAZ3UCKxk3L
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_PNBxUXiC1KnGAZ3UCKxk3L
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士則（175561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175561&o=json
            external_identifier: CBDB:175561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:03.049Z
            metadata_json: null
      object_person:
        id: p_FPisTavdR1h9GP2xzczNXG
        status: active
        display_name: 王宰
        merged_into_person_id: null
  children:
    - claim:
        id: c_SoGS5ED9cCtieeaoTG24KY
        subject_person_id: p_3YKBL6QdYUSrkYMomw6J8u
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_3c3JwzAMzd2wVLbTFSNU1G
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fQ1BcAkLFVuW9LSG6MUtfv
          claim_id: c_SoGS5ED9cCtieeaoTG24KY
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（三子）
          quotation: 三子：廙、曠、彬
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
      object_person:
        id: p_3c3JwzAMzd2wVLbTFSNU1G
        status: active
        display_name: 王廙
        merged_into_person_id: null
    - claim:
        id: c_PP6LCdsZQ182G2tk7umPXf
        subject_person_id: p_3YKBL6QdYUSrkYMomw6J8u
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_KLqBFHMT4zRN9bhUnotXNR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1L9iHzLMTpgiWy7s9H5cB4
          claim_id: c_PP6LCdsZQ182G2tk7umPXf
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（三子）
          quotation: 三子：廙、曠、彬
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
      object_person:
        id: p_KLqBFHMT4zRN9bhUnotXNR
        status: active
        display_name: 王曠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士则

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士则（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任挽郎。中国历代人物传记资料库（CBDB）以人物编号 175561 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 783年 | accepted |
| name.primary | 王士则 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FPisTavdR1h9GP2xzczNXG | 王宰 | accepted |
| children | p_3c3JwzAMzd2wVLbTFSNU1G | 王廙 | accepted |
| children | p_KLqBFHMT4zRN9bhUnotXNR | 王曠 | accepted |

## 外部来源

- [维基数据：王士则（Q45666613）](https://www.wikidata.org/wiki/Q45666613)
- [维基数据：王宰（Q45666287）](https://www.wikidata.org/wiki/Q45666287)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
- [CBDB 中国历代人物传记资料库：王士則（175561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175561&o=json)
- [CBDB 中国历代人物传记资料库：王宰（175555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json)
