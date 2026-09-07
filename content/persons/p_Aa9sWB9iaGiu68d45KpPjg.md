---
schema: wang-person/v1
id: p_Aa9sWB9iaGiu68d45KpPjg
status: active
merged_into: null
display_name: 王襄
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ibMbo3IbI3Zi6Fj5dcztq5
        subject_person_id: p_Aa9sWB9iaGiu68d45KpPjg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王襄，史料所见人物。本项目依据《中文维基文库：《汉书》卷九十八》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LP_Qges6DHD6MUeaYJ7OG-
          claim_id: c_ibMbo3IbI3Zi6Fj5dcztq5
          source_id: s_rQzJN9JbtepbR6PYXUfYuD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_rQzJN9JbtepbR6PYXUfYuD
            source_type: book
            title: 中文维基文库：《汉书》卷九十八
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/zh-hant/%E6%BC%A2%E6%9B%B8/%E5%8D%B7098
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T02:14:52.385Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QQeKwHCzGcZ9J1jUcegGUJ
        subject_person_id: p_Aa9sWB9iaGiu68d45KpPjg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王襄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Gzt8Nnc5MtLV2Hfgsuqcar
          claim_id: c_QQeKwHCzGcZ9J1jUcegGUJ
          source_id: s_rQzJN9JbtepbR6PYXUfYuD
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uRWLDKQGXcgXUH8ij7GJAs
        subject_person_id: p_g1G7CMpe8j9KM1MarWKQLw
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Aa9sWB9iaGiu68d45KpPjg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aK1q6u1Qi3fGYG8CL2K6As
          claim_id: c_uRWLDKQGXcgXUH8ij7GJAs
          source_id: s_rQzJN9JbtepbR6PYXUfYuD
          stance: supports
          locator: 王凤传末
          quotation: 鳳薨……謚曰敬成侯。子襄嗣侯，為衛尉。
          interpretation_note: null
          source:
            id: s_rQzJN9JbtepbR6PYXUfYuD
            source_type: book
            title: 中文维基文库：《汉书》卷九十八
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/zh-hant/%E6%BC%A2%E6%9B%B8/%E5%8D%B7098
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T02:14:52.385Z
            metadata_json: null
      object_person:
        id: p_g1G7CMpe8j9KM1MarWKQLw
        status: active
        display_name: 王凤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王襄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王襄，史料所见人物。本项目依据《中文维基文库：《汉书》卷九十八》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王襄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g1G7CMpe8j9KM1MarWKQLw | 王凤 | accepted |

## 外部来源

- [中文维基文库：《汉书》卷九十八](https://zh.wikisource.org/zh-hant/%E6%BC%A2%E6%9B%B8/%E5%8D%B7098)
