---
schema: wang-person/v1
id: p_rwavp69Mak2LGhxiZKqm55
status: active
merged_into: null
display_name: 王继恭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2x37FuFjevwd1mH2EGrkuK
        subject_person_id: p_rwavp69Mak2LGhxiZKqm55
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王继恭
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MRx7PxCCfdkNyG3pnqeVTU
          claim_id: c_2x37FuFjevwd1mH2EGrkuK
          source_id: s_EmhXihF5VcFp9Gmx34kMJ8
          stance: supports
          locator: Q16260251
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_EmhXihF5VcFp9Gmx34kMJ8
            source_type: api_record
            title: 维基数据：王继恭（Q16260251）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260251
            external_identifier: Q16260251
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BB%A7%E6%81%AD
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zxXKPrnBb3FUYAu2a7QkjV
        subject_person_id: p_rwavp69Mak2LGhxiZKqm55
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王继恭，史料所见人物。本项目依据《王继恭》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vmoRAxPp2zL81UhbL0Ygbt
          claim_id: c_zxXKPrnBb3FUYAu2a7QkjV
          source_id: s_EmhXihF5VcFp9Gmx34kMJ8
          stance: supports
          locator: Q16260251
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eP5U5EGEcVgmmajHGmcaDQ
        subject_person_id: p_BXK4dNohPJQTYjtEjv756p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rwavp69Mak2LGhxiZKqm55
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XKfP5DbYrvGUj6qVQv72Hn
          claim_id: c_eP5U5EGEcVgmmajHGmcaDQ
          source_id: s_jXmk1TLmajvZF3VibGyjd5
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_jXmk1TLmajvZF3VibGyjd5
            source_type: api_record
            title: 维基数据：王延钧（Q2109927）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2109927
            external_identifier: Q2109927
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:00.764Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E9%88%9E
        - id: cs_ijjEz547UgJRT2eQdCGQ7c
          claim_id: c_eP5U5EGEcVgmmajHGmcaDQ
          source_id: s_EmhXihF5VcFp9Gmx34kMJ8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_BXK4dNohPJQTYjtEjv756p
        status: active
        display_name: 王延钧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王继恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王继恭 | accepted |
| bio.summary | 王继恭，史料所见人物。本项目依据《王继恭》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BXK4dNohPJQTYjtEjv756p | 王延钧 | accepted |

## 外部来源

- [维基数据：王继恭（Q16260251）](https://www.wikidata.org/wiki/Q16260251)
- [维基数据：王延钧（Q2109927）](https://www.wikidata.org/wiki/Q2109927)
