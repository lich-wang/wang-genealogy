---
schema: wang-person/v1
id: p_pgHE5AzNgMLRcAsioSinQE
status: active
merged_into: null
display_name: 王丹
revision: 1
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
  parents:
    - claim:
        id: c_FF95sCrYW9o3F6pZM9aQPT
        subject_person_id: p_BS59WtwbAaqRXm83dBaHiL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pgHE5AzNgMLRcAsioSinQE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_7oQ5iBj7frMDToQ6GdDxqo
          claim_id: c_FF95sCrYW9o3F6pZM9aQPT
          source_id: s_tUBJ6CGFTo89Ahc3RGMuv1
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_tUBJ6CGFTo89Ahc3RGMuv1
            source_type: api_record
            title: 维基数据：王立（Q672221）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q672221
            external_identifier: Q672221
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:36.543Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%AB%8B_(%E8%A5%BF%E6%B1%89)
        - id: cs_tcu1iBRPYkcNaw3GSAWBvA
          claim_id: c_FF95sCrYW9o3F6pZM9aQPT
          source_id: s_vbnpi7UzDnDYzPizAgGFx8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
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
      object_person:
        id: p_BS59WtwbAaqRXm83dBaHiL
        status: active
        display_name: 王立
        merged_into_person_id: null
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
| parents | p_BS59WtwbAaqRXm83dBaHiL | 王立 | accepted |

## 外部来源

- [维基数据：王丹（Q16077401）](https://www.wikidata.org/wiki/Q16077401)
- [维基数据：王立（Q672221）](https://www.wikidata.org/wiki/Q672221)
