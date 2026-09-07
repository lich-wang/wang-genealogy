---
schema: wang-person/v1
id: p_k3APVLUjrNqoTCMDqVzvPr
status: active
merged_into: null
display_name: 王殷
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7R-4WyNa5P5gZ7Fzepldkf
        subject_person_id: p_k3APVLUjrNqoTCMDqVzvPr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殷，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QViQLXiJFqNxb_HrgtE2r8
          claim_id: c_7R-4WyNa5P5gZ7Fzepldkf
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dusK8cJ3zQMLWbujjRgHuu
        subject_person_id: p_k3APVLUjrNqoTCMDqVzvPr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殷
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D5f91CTznRKbzpqPFfJq9m
          claim_id: c_dusK8cJ3zQMLWbujjRgHuu
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
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
        id: c_39WsLf2wSDSK7HvU6Vx5xk
        subject_person_id: p_kwTRKQmf7R3P5UCpdETJsM
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_k3APVLUjrNqoTCMDqVzvPr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GZeQaiCB4zs9V152Fg8Ujq
          claim_id: c_39WsLf2wSDSK7HvU6Vx5xk
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（長子）
          quotation: 霸長子殷，後漢中山太守
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
        id: p_kwTRKQmf7R3P5UCpdETJsM
        status: active
        display_name: 王霸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王殷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王殷，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王殷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kwTRKQmf7R3P5UCpdETJsM | 王霸 | accepted |

## 外部来源

- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
