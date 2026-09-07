---
schema: wang-person/v1
id: p_cstL9BTvsD4SQ3GTDYx54b
status: active
merged_into: null
display_name: 王睦
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zUjVzRfdUsoSOB2F2RZO1X
        subject_person_id: p_cstL9BTvsD4SQ3GTDYx54b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睦，史料所见人物。本项目依据《王睦》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zdmHNpHBh3VGbCx6_aUMt_
          claim_id: c_zUjVzRfdUsoSOB2F2RZO1X
          source_id: s_os7NEGEbzPFw7v1QkN7NyQ
          stance: supports
          locator: Q26209973
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_os7NEGEbzPFw7v1QkN7NyQ
            source_type: api_record
            title: 维基数据：王睦（Q26209973）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209973
            external_identifier: Q26209973
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:49.386Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AQpUNvL9MmATH3baGRNz1W
        subject_person_id: p_cstL9BTvsD4SQ3GTDYx54b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睦
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YFgpE1vRLj7oF5KsPMw8pn
          claim_id: c_AQpUNvL9MmATH3baGRNz1W
          source_id: s_os7NEGEbzPFw7v1QkN7NyQ
          stance: supports
          locator: Q26209973
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zox6HFWAYMPu4H23Y7EJkP
        subject_person_id: p_L84jn2bobEqW6DPu32c5vg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cstL9BTvsD4SQ3GTDYx54b
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9TbAZgR4gbW3EiN7touZWi
          claim_id: c_zox6HFWAYMPu4H23Y7EJkP
          source_id: s_e3TcvhZK4GEeRDZ93ML51A
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_e3TcvhZK4GEeRDZ93ML51A
            source_type: api_record
            title: 维基数据：王邑（Q11573232）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573232
            external_identifier: Q11573232
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:19.655Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%82%91_(%E6%96%B0%E6%9C%9D)
        - id: cs_Ab1v7jRRf1oR24NE4J9qXW
          claim_id: c_zox6HFWAYMPu4H23Y7EJkP
          source_id: s_os7NEGEbzPFw7v1QkN7NyQ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_os7NEGEbzPFw7v1QkN7NyQ
            source_type: api_record
            title: 维基数据：王睦（Q26209973）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209973
            external_identifier: Q26209973
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:49.386Z
            metadata_json: null
      object_person:
        id: p_L84jn2bobEqW6DPu32c5vg
        status: active
        display_name: 王邑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王睦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王睦，史料所见人物。本项目依据《王睦》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王睦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_L84jn2bobEqW6DPu32c5vg | 王邑 | accepted |

## 外部来源

- [维基数据：王睦（Q26209973）](https://www.wikidata.org/wiki/Q26209973)
- [维基数据：王邑（Q11573232）](https://www.wikidata.org/wiki/Q11573232)
