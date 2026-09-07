---
schema: wang-person/v1
id: p_5qX9Bik5pHskNpZRag8suA
status: active
merged_into: null
display_name: 王悼
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mi4V-jdbd-k-FyHczChynF
        subject_person_id: p_5qX9Bik5pHskNpZRag8suA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王悼，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3CYO92viULZD8exgAkzDMK
          claim_id: c_mi4V-jdbd-k-FyHczChynF
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
        id: c_AtUe3cKFm5gk9dY4x4EnN6
        subject_person_id: p_5qX9Bik5pHskNpZRag8suA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王悼
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9352UakNfpScEvc5A2zjgG
          claim_id: c_AtUe3cKFm5gk9dY4x4EnN6
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
        id: c_vB7B7ECbBcPX36gG2KxQBi
        subject_person_id: p_WfNHhh5W4FCfE41QPDKcHt
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_5qX9Bik5pHskNpZRag8suA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kN5yHqECaJD7193Dh141gP
          claim_id: c_vB7B7ECbBcPX36gG2KxQBi
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 卑子生悼，悼生賢
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
        id: p_WfNHhh5W4FCfE41QPDKcHt
        status: active
        display_name: 王卑子
        merged_into_person_id: null
  children:
    - claim:
        id: c_HNzt3s5xE2i9HCHkzQeQGB
        subject_person_id: p_5qX9Bik5pHskNpZRag8suA
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_wantYPtUu4XChUifPdH5N2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ev1X9ttV8pxtG92mkUEx43
          claim_id: c_HNzt3s5xE2i9HCHkzQeQGB
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 卑子生悼，悼生賢
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
        id: p_wantYPtUu4XChUifPdH5N2
        status: active
        display_name: 王賢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王悼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王悼，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王悼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WfNHhh5W4FCfE41QPDKcHt | 王卑子 | accepted |
| children | p_wantYPtUu4XChUifPdH5N2 | 王賢 | accepted |

## 外部来源

- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
