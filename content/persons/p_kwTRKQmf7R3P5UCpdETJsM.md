---
schema: wang-person/v1
id: p_kwTRKQmf7R3P5UCpdETJsM
status: active
merged_into: null
display_name: 王霸
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MsbxXoL_eD6rAJJLge3vzV
        subject_person_id: p_kwTRKQmf7R3P5UCpdETJsM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霸，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SvlTNr-U2DxY7n6xc52lFm
          claim_id: c_MsbxXoL_eD6rAJJLge3vzV
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
        id: c_HMekkCxKViFT3f2nfZYUbk
        subject_person_id: p_kwTRKQmf7R3P5UCpdETJsM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霸
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xiUNgxZNjfy9UPHL12srgd
          claim_id: c_HMekkCxKViFT3f2nfZYUbk
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
        id: p_k3APVLUjrNqoTCMDqVzvPr
        status: active
        display_name: 王殷
        merged_into_person_id: null
    - claim:
        id: c_k8b31qEtbWcGpTFckpxjKs
        subject_person_id: p_kwTRKQmf7R3P5UCpdETJsM
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_VBpfLFPc28js8oKYMXE5n5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TwR6qWYoueE3LCbKa82tP8
          claim_id: c_k8b31qEtbWcGpTFckpxjKs
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 霸生咸
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
        id: p_VBpfLFPc28js8oKYMXE5n5
        status: active
        display_name: 王咸
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王霸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王霸，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王霸 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_k3APVLUjrNqoTCMDqVzvPr | 王殷 | accepted |
| children | p_VBpfLFPc28js8oKYMXE5n5 | 王咸 | accepted |

## 外部来源

- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
