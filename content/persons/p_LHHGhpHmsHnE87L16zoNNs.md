---
schema: wang-person/v1
id: p_LHHGhpHmsHnE87L16zoNNs
status: active
merged_into: null
display_name: 王佖
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FCmPz4FckUAK8nMoNaqQDs
        subject_person_id: p_LHHGhpHmsHnE87L16zoNNs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佖（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任節度使。中国历代人物传记资料库（CBDB）以人物编号 175635 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_UxTSZBNC82sDwYdXFjJcrS
          claim_id: c_FCmPz4FckUAK8nMoNaqQDs
          source_id: s_3ywKxNFkBE92g8VLtcK2kM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_3ywKxNFkBE92g8VLtcK2kM
            source_type: api_record
            title: 维基数据：王佖（Q45670253）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670253
            external_identifier: Q45670253
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:42.039Z
            metadata_json: null
        - id: cs_nC8Qj13ASfc-UH_83ifHNU
          claim_id: c_FCmPz4FckUAK8nMoNaqQDs
          source_id: s_TyVGNfStm8iguoHDAUFSS6
          stance: supports
          locator: CBDB:175635
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_TyVGNfStm8iguoHDAUFSS6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佖（175635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175635&o=json
            external_identifier: CBDB:175635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:42.217Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_eUTFF6GQaCwLGNKQJimyy5
        subject_person_id: p_LHHGhpHmsHnE87L16zoNNs
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 746年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0746-01-01
            latest: 0746-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1F4qWt8Voy74eyMXK1W9NE
          claim_id: c_eUTFF6GQaCwLGNKQJimyy5
          source_id: s_3ywKxNFkBE92g8VLtcK2kM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_3ywKxNFkBE92g8VLtcK2kM
            source_type: api_record
            title: 维基数据：王佖（Q45670253）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670253
            external_identifier: Q45670253
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:42.039Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mP3gxvu8kwm99LW47QBP3X
        subject_person_id: p_LHHGhpHmsHnE87L16zoNNs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佖
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_862GP7Zr3SBDJLVrdYAAQS
          claim_id: c_mP3gxvu8kwm99LW47QBP3X
          source_id: s_3ywKxNFkBE92g8VLtcK2kM
          stance: supports
          locator: Q45670253
          quotation: null
          interpretation_note: null
          source:
            id: s_3ywKxNFkBE92g8VLtcK2kM
            source_type: api_record
            title: 维基数据：王佖（Q45670253）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670253
            external_identifier: Q45670253
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:42.039Z
            metadata_json: null
        - id: cs_YHfU5VPkpWogXJcSC5HySa
          claim_id: c_mP3gxvu8kwm99LW47QBP3X
          source_id: s_TyVGNfStm8iguoHDAUFSS6
          stance: supports
          locator: Q45670253
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HNV9X8P3hFfE3XxETwY2T4
        subject_person_id: p_YHE2NJ9LSwowSpyQD68iW1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LHHGhpHmsHnE87L16zoNNs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2GFZE1nKLyHrxdw7fadChG
          claim_id: c_HNV9X8P3hFfE3XxETwY2T4
          source_id: s_k7pnfCmMHnCgceNnh6JLHJ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_k7pnfCmMHnCgceNnh6JLHJ
            source_type: api_record
            title: 维基数据：王晖（Q45670207）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670207
            external_identifier: Q45670207
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
        - id: cs_TJwaYShcg1gbSKuNqmBXbZ
          claim_id: c_HNV9X8P3hFfE3XxETwY2T4
          source_id: s_v43uG4Av9fcuPA2Dw8jAmB
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_v43uG4Av9fcuPA2Dw8jAmB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暉（175634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175634&o=json
            external_identifier: CBDB:175634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:39.839Z
            metadata_json: null
        - id: cs_owY39L9WJf3Jxiyy4dZrHg
          claim_id: c_HNV9X8P3hFfE3XxETwY2T4
          source_id: s_3ywKxNFkBE92g8VLtcK2kM
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_3ywKxNFkBE92g8VLtcK2kM
            source_type: api_record
            title: 维基数据：王佖（Q45670253）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670253
            external_identifier: Q45670253
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:42.039Z
            metadata_json: null
        - id: cs_2f56ZbHpNfhPvYFGtdxmai
          claim_id: c_HNV9X8P3hFfE3XxETwY2T4
          source_id: s_TyVGNfStm8iguoHDAUFSS6
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_TyVGNfStm8iguoHDAUFSS6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佖（175635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175635&o=json
            external_identifier: CBDB:175635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:42.217Z
            metadata_json: null
      object_person:
        id: p_YHE2NJ9LSwowSpyQD68iW1
        status: active
        display_name: 王晖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王佖（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任節度使。中国历代人物传记资料库（CBDB）以人物编号 175635 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 746年 | accepted |
| name.primary | 王佖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YHE2NJ9LSwowSpyQD68iW1 | 王晖 | accepted |

## 外部来源

- [维基数据：王佖（Q45670253）](https://www.wikidata.org/wiki/Q45670253)
- [维基数据：王晖（Q45670207）](https://www.wikidata.org/wiki/Q45670207)
- [CBDB 中国历代人物传记资料库：王佖（175635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175635&o=json)
- [CBDB 中国历代人物传记资料库：王暉（175634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175634&o=json)
