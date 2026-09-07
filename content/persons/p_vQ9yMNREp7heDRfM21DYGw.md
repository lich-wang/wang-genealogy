---
schema: wang-person/v1
id: p_vQ9yMNREp7heDRfM21DYGw
status: active
merged_into: null
display_name: 王述
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A_T_ysNGqOVnTbn-n0R3gG
        subject_person_id: p_vQ9yMNREp7heDRfM21DYGw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述，史料所见人物。本项目依据《太原王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_VP1OEbCmpyqDAcLN6GlDk9
          claim_id: c_A_T_ysNGqOVnTbn-n0R3gG
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_8v3HEWJMg8p43rd4zxNR9r
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:15.556Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nNhsh3HK1Q2rUSFX8ECWaY
        subject_person_id: p_vQ9yMNREp7heDRfM21DYGw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mkAVQC7MA3kaiitMjQ2s5m
          claim_id: c_nNhsh3HK1Q2rUSFX8ECWaY
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: Q11573220
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kVfC1Rt6qBKqGoJwFLxdn7
        subject_person_id: p_EZc8eia6jBCUiA6dx8URB6
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_vQ9yMNREp7heDRfM21DYGw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Zxof4f33RGPoR1jRaLq9fp
          claim_id: c_kVfC1Rt6qBKqGoJwFLxdn7
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 承，字安期，鎮東府從事中郎、藍田縣侯。生述，字懷祖，尚書令、藍田簡侯。
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
        id: p_EZc8eia6jBCUiA6dx8URB6
        status: active
        display_name: 王承
        merged_into_person_id: null
  children:
    - claim:
        id: c_RR9JnkX6VTTWYM6FwDdJkt
        subject_person_id: p_vQ9yMNREp7heDRfM21DYGw
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_5kkzDYeEhQBGa4ykA43hYy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5grXjf7Z7Mer2Q9vXZn3Js
          claim_id: c_RR9JnkX6VTTWYM6FwDdJkt
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 述，字懷祖，尚書令、藍田簡侯。生坦之，字文度，左衞將軍、藍田獻侯。
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
        id: p_5kkzDYeEhQBGa4ykA43hYy
        status: active
        display_name: 王坦之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王述

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王述，史料所见人物。本项目依据《太原王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王述 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EZc8eia6jBCUiA6dx8URB6 | 王承 | accepted |
| children | p_5kkzDYeEhQBGa4ykA43hYy | 王坦之 | accepted |

## 外部来源

- [中文维基百科：太原王氏](https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
