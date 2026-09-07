---
schema: wang-person/v1
id: p_MvjnQ8zRv6SbE2KLZKNY8r
status: active
merged_into: null
display_name: 王平
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3NbvMyVJRczgDnhqLTmmLX
        subject_person_id: p_MvjnQ8zRv6SbE2KLZKNY8r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王平（985年—1047年），史料所见人物。本项目依据《王平》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pQb5v0SrzC7p-0HIj4F8ej
          claim_id: c_3NbvMyVJRczgDnhqLTmmLX
          source_id: s_fs8s9F1M1SGWjNz9LLaw95
          stance: supports
          locator: Q45359600
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_fs8s9F1M1SGWjNz9LLaw95
            source_type: api_record
            title: 维基数据：王平（Q45359600）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359600
            external_identifier: Q45359600
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:51.006Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RLvG45MU2PyQiM52u27xuK
        subject_person_id: p_MvjnQ8zRv6SbE2KLZKNY8r
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 985年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0985-01-01
            latest: 0985-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_uyW5A2E6h7pdr7QxezZDVf
          claim_id: c_RLvG45MU2PyQiM52u27xuK
          source_id: s_fs8s9F1M1SGWjNz9LLaw95
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_fs8s9F1M1SGWjNz9LLaw95
            source_type: api_record
            title: 维基数据：王平（Q45359600）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359600
            external_identifier: Q45359600
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:51.006Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_d9PgvHVGXo2GPUANfDmQcU
        subject_person_id: p_MvjnQ8zRv6SbE2KLZKNY8r
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1047年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1047-01-01
            latest: 1047-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7u6fuUKZjHLnzj683e8LqB
          claim_id: c_d9PgvHVGXo2GPUANfDmQcU
          source_id: s_fs8s9F1M1SGWjNz9LLaw95
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_fs8s9F1M1SGWjNz9LLaw95
            source_type: api_record
            title: 维基数据：王平（Q45359600）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359600
            external_identifier: Q45359600
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:51.006Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DsQXFnWSnp7SoB95QMJVzJ
        subject_person_id: p_MvjnQ8zRv6SbE2KLZKNY8r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王平
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hdTkQmU5qK44HrFHLQ12rg
          claim_id: c_DsQXFnWSnp7SoB95QMJVzJ
          source_id: s_fs8s9F1M1SGWjNz9LLaw95
          stance: supports
          locator: Q45359600
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_K7DNybU8aNJPDTxnnczd5t
        subject_person_id: p_MvjnQ8zRv6SbE2KLZKNY8r
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_X3BfD7TLgwwBFHjcUqFh8k
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AqWdSj32v3dfawqdBnQVDK
          claim_id: c_K7DNybU8aNJPDTxnnczd5t
          source_id: s_dNJAtS5qf6iwMByBtgKTGB
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_dNJAtS5qf6iwMByBtgKTGB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王平（1856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1856&o=json
            external_identifier: CBDB:1856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:02:16.192Z
            metadata_json: null
        - id: cs_SZAw4BdB6a9XoCbgsG6cJa
          claim_id: c_K7DNybU8aNJPDTxnnczd5t
          source_id: s_8K2LBkLZEUSw3ouKon4w58
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8K2LBkLZEUSw3ouKon4w58
            source_type: api_record
            title: 维基数据：王回（Q45362969）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45362969
            external_identifier: Q45362969
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:00.551Z
            metadata_json: null
        - id: cs_b225UEXaWppCQ8h8jHiFk8
          claim_id: c_K7DNybU8aNJPDTxnnczd5t
          source_id: s_fs8s9F1M1SGWjNz9LLaw95
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fs8s9F1M1SGWjNz9LLaw95
            source_type: api_record
            title: 维基数据：王平（Q45359600）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359600
            external_identifier: Q45359600
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:51.006Z
            metadata_json: null
      object_person:
        id: p_X3BfD7TLgwwBFHjcUqFh8k
        status: active
        display_name: 王回
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王平（985年—1047年），史料所见人物。本项目依据《王平》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 985年 | accepted |
| death.date | 1047年 | accepted |
| name.primary | 王平 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_X3BfD7TLgwwBFHjcUqFh8k | 王回 | accepted |

## 外部来源

- [维基数据：王回（Q45362969）](https://www.wikidata.org/wiki/Q45362969)
- [维基数据：王平（Q45359600）](https://www.wikidata.org/wiki/Q45359600)
- [CBDB 中国历代人物传记资料库：王平（1856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1856&o=json)
