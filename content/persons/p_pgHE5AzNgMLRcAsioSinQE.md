---
schema: wang-person/v1
id: p_pgHE5AzNgMLRcAsioSinQE
status: merged
merged_into: p_Ev9rPKJUrkBKAQXV6D6QqB
display_name: 王丹
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BcDeA0hFD2y4z6Jeigzrto
        subject_person_id: p_pgHE5AzNgMLRcAsioSinQE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丹，史料所见人物。本项目依据《王丹》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4f6FZAQe4PHMn3FC8shtX9
          claim_id: c_BcDeA0hFD2y4z6Jeigzrto
          source_id: s_vbnpi7UzDnDYzPizAgGFx8
          stance: supports
          locator: Q16077401
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_vbnpi7UzDnDYzPizAgGFx8
            source_type: api_record
            title: 维基数据：王丹（Q16077401）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077401
            external_identifier: Q16077401
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:09.879Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_j1rpB3pHHy4Qn9iL45nCDC
        subject_person_id: p_pgHE5AzNgMLRcAsioSinQE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丹
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fVqDAamyufvQpSwbP9HkcM
          claim_id: c_j1rpB3pHHy4Qn9iL45nCDC
          source_id: s_vbnpi7UzDnDYzPizAgGFx8
          stance: supports
          locator: Q16077401
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王丹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王丹，史料所见人物。本项目依据《王丹》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王丹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王丹（Q16077401）](https://www.wikidata.org/wiki/Q16077401)
