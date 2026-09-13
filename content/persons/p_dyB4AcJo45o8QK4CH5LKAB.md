---
schema: wang-person/v1
id: p_dyB4AcJo45o8QK4CH5LKAB
status: active
merged_into: null
display_name: 王建子
cbdb_id: 175402
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TkGu6DZf9R8heYrkDpBN7p
        subject_person_id: p_dyB4AcJo45o8QK4CH5LKAB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建子（卒于857年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175402）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_SP6imiFBcD55rUnKXr9qM5
          claim_id: c_TkGu6DZf9R8heYrkDpBN7p
          source_id: s_7U8QcEi8d8HSFNuF5rFPtW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7U8QcEi8d8HSFNuF5rFPtW
            source_type: api_record
            title: 维基数据：王建子（Q45657513）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657513
            external_identifier: Q45657513
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:57.050Z
            metadata_json: null
        - id: cs_A8c-Cz4UmjWGGI7amUcl4B
          claim_id: c_TkGu6DZf9R8heYrkDpBN7p
          source_id: s_deK5HymQLoE99RzxJ9Av2d
          stance: supports
          locator: CBDB:175402
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_deK5HymQLoE99RzxJ9Av2d
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王建子（175402）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175402&o=json
            external_identifier: CBDB:175402
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:57.196Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5dQhPRJJzJvNQuqwQZVKFn
        subject_person_id: p_dyB4AcJo45o8QK4CH5LKAB
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
        - id: cs_uPGFFWmKaw8bymJhquw1TH
          claim_id: c_5dQhPRJJzJvNQuqwQZVKFn
          source_id: s_7U8QcEi8d8HSFNuF5rFPtW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7U8QcEi8d8HSFNuF5rFPtW
            source_type: api_record
            title: 维基数据：王建子（Q45657513）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657513
            external_identifier: Q45657513
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:57.050Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GYKoJ926rLMwJRAmcfZYP1
        subject_person_id: p_dyB4AcJo45o8QK4CH5LKAB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建子
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NcRRT7awRBLHceNji9aPbj
          claim_id: c_GYKoJ926rLMwJRAmcfZYP1
          source_id: s_7U8QcEi8d8HSFNuF5rFPtW
          stance: supports
          locator: Q45657513
          quotation: null
          interpretation_note: null
          source:
            id: s_7U8QcEi8d8HSFNuF5rFPtW
            source_type: api_record
            title: 维基数据：王建子（Q45657513）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657513
            external_identifier: Q45657513
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:57.050Z
            metadata_json: null
        - id: cs_o9UtV8HXY6EoPZRXbFSgLM
          claim_id: c_GYKoJ926rLMwJRAmcfZYP1
          source_id: s_deK5HymQLoE99RzxJ9Av2d
          stance: supports
          locator: Q45657513
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PjgDPXLunmPSDEogV4em1m
        subject_person_id: p_HQnmd4RJFt5d8vk8o8quqE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dyB4AcJo45o8QK4CH5LKAB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Rm6Nz3AsB5BQvhayt6BDmH
          claim_id: c_PjgDPXLunmPSDEogV4em1m
          source_id: s_zSTh8eU5n33uxyVAJyJML5
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_zSTh8eU5n33uxyVAJyJML5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王海（175401）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175401&o=json
            external_identifier: CBDB:175401
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:22.874Z
            metadata_json: null
        - id: cs_cPGKX1ZNcGyJaDtLmzcKag
          claim_id: c_PjgDPXLunmPSDEogV4em1m
          source_id: s_isJBstWqKzB45ufLR5ozHM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_isJBstWqKzB45ufLR5ozHM
            source_type: api_record
            title: 维基数据：王海（Q45657452）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657452
            external_identifier: Q45657452
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:22.596Z
            metadata_json: null
        - id: cs_eYeLKcbrk8dQ4eDvGCJkPt
          claim_id: c_PjgDPXLunmPSDEogV4em1m
          source_id: s_7U8QcEi8d8HSFNuF5rFPtW
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_7U8QcEi8d8HSFNuF5rFPtW
            source_type: api_record
            title: 维基数据：王建子（Q45657513）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657513
            external_identifier: Q45657513
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:57.050Z
            metadata_json: null
        - id: cs_LmFbi8Yy8CZ58nerJe1YGz
          claim_id: c_PjgDPXLunmPSDEogV4em1m
          source_id: s_deK5HymQLoE99RzxJ9Av2d
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_deK5HymQLoE99RzxJ9Av2d
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王建子（175402）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175402&o=json
            external_identifier: CBDB:175402
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:57.196Z
            metadata_json: null
      object_person:
        id: p_HQnmd4RJFt5d8vk8o8quqE
        status: active
        display_name: 王海
        merged_into_person_id: null
  children:
    - claim:
        id: c_VogzP66N3mGo2TNiBETSDY
        subject_person_id: p_dyB4AcJo45o8QK4CH5LKAB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GSDtNSQeMrvbi1rr5JiEic
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6YyC5XKir6Mkp1HdmYqkiz
          claim_id: c_VogzP66N3mGo2TNiBETSDY
          source_id: s_deK5HymQLoE99RzxJ9Av2d
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_deK5HymQLoE99RzxJ9Av2d
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王建子（175402）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175402&o=json
            external_identifier: CBDB:175402
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:57.196Z
            metadata_json: null
        - id: cs_M8yqrN2jbs48jABNYSqwEj
          claim_id: c_VogzP66N3mGo2TNiBETSDY
          source_id: s_7U8QcEi8d8HSFNuF5rFPtW
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7U8QcEi8d8HSFNuF5rFPtW
            source_type: api_record
            title: 维基数据：王建子（Q45657513）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657513
            external_identifier: Q45657513
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:57.050Z
            metadata_json: null
        - id: cs_hk1Xi59z69H1AvGDkLWTTN
          claim_id: c_VogzP66N3mGo2TNiBETSDY
          source_id: s_5MufBdkkvbgiDWNRGUo3hP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_5MufBdkkvbgiDWNRGUo3hP
            source_type: api_record
            title: 维基数据：王台老（Q45657572）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657572
            external_identifier: Q45657572
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:03.116Z
            metadata_json: null
        - id: cs_UvTW5krmqbBHZvZUskKrcR
          claim_id: c_VogzP66N3mGo2TNiBETSDY
          source_id: s_8wrfeNR8FvM2pvLatLd9Tc
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_8wrfeNR8FvM2pvLatLd9Tc
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王台老（175403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175403&o=json
            external_identifier: CBDB:175403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:03.434Z
            metadata_json: null
      object_person:
        id: p_GSDtNSQeMrvbi1rr5JiEic
        status: active
        display_name: 王台老
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王建子

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王建子（卒于857年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175402） | accepted |
| death.date | 857年 | accepted |
| name.primary | 王建子 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HQnmd4RJFt5d8vk8o8quqE | 王海 | accepted |
| children | p_GSDtNSQeMrvbi1rr5JiEic | 王台老 | accepted |

## 外部来源

- [维基数据：王海（Q45657452）](https://www.wikidata.org/wiki/Q45657452)
- [维基数据：王建子（Q45657513）](https://www.wikidata.org/wiki/Q45657513)
- [维基数据：王台老（Q45657572）](https://www.wikidata.org/wiki/Q45657572)
- [CBDB 中国历代人物传记资料库：王海（175401）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175401&o=json)
- [CBDB 中国历代人物传记资料库：王建子（175402）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175402&o=json)
- [CBDB 中国历代人物传记资料库：王台老（175403）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175403&o=json)
