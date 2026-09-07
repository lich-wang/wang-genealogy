---
schema: wang-person/v1
id: p_NyySAC1JutD9dRDF2UY8YF
status: active
merged_into: null
display_name: 王閒憂
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_IkeebHER-pgOzSINJaUHPw
        subject_person_id: p_NyySAC1JutD9dRDF2UY8YF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閒憂，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DKzW0Qk8K0iz0DssaLcYFx
          claim_id: c_IkeebHER-pgOzSINJaUHPw
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
        id: c_Co2ogoqFxHZ7XB8kc7H7aa
        subject_person_id: p_NyySAC1JutD9dRDF2UY8YF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閒憂
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eVTt43K2dBBJVc7DxdEu6G
          claim_id: c_Co2ogoqFxHZ7XB8kc7H7aa
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
        id: c_8C5Ef37wQo9pQFUEv2ZR89
        subject_person_id: p_DSLeLxiyHR56QJi5NNZD8Q
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_NyySAC1JutD9dRDF2UY8YF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2vptKKwZsBeFWxkkxF3zLd
          claim_id: c_8C5Ef37wQo9pQFUEv2ZR89
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 無忌生閒憂，襲信陵君
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
        id: p_DSLeLxiyHR56QJi5NNZD8Q
        status: active
        display_name: 王無忌
        merged_into_person_id: null
  children:
    - claim:
        id: c_SdRPSH9ojfo2tWwbzQQm9J
        subject_person_id: p_NyySAC1JutD9dRDF2UY8YF
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_WfNHhh5W4FCfE41QPDKcHt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7sgC7iZE8oBFGBAgq9VRCY
          claim_id: c_SdRPSH9ojfo2tWwbzQQm9J
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 閒憂子卑子逃難于太山
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王閒憂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王閒憂，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王閒憂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DSLeLxiyHR56QJi5NNZD8Q | 王無忌 | accepted |
| children | p_WfNHhh5W4FCfE41QPDKcHt | 王卑子 | accepted |

## 外部来源

- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
