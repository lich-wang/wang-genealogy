---
schema: wang-person/v1
id: p_WfNHhh5W4FCfE41QPDKcHt
status: active
merged_into: null
display_name: 王卑子
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aFIvz5RGPw85zHZj2p-JQc
        subject_person_id: p_WfNHhh5W4FCfE41QPDKcHt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卑子，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zg5agX0o3mXurcrnDdd_H-
          claim_id: c_aFIvz5RGPw85zHZj2p-JQc
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
        id: c_BocHhLwUW48wiJk1F4JRp1
        subject_person_id: p_WfNHhh5W4FCfE41QPDKcHt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卑子
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YDny7k9RZpsECfKpCs2aWF
          claim_id: c_BocHhLwUW48wiJk1F4JRp1
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
        id: p_NyySAC1JutD9dRDF2UY8YF
        status: active
        display_name: 王閒憂
        merged_into_person_id: null
  children:
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
        id: p_5qX9Bik5pHskNpZRag8suA
        status: active
        display_name: 王悼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_Gxe4aGijpQTKPnLMmdWUQ3
        subject_person_id: p_WfNHhh5W4FCfE41QPDKcHt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1FJdZ15XyXMCC5RwrJYVuD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u9MScPAYFjNc2R17LLSmuY
          claim_id: c_Gxe4aGijpQTKPnLMmdWUQ3
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（九世孫）（9世）
          quotation: 卑子九世孫遵，字子春，後漢河南尹
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
        id: p_1FJdZ15XyXMCC5RwrJYVuD
        status: active
        display_name: 王遵
        merged_into_person_id: null
  other: []
---

# 王卑子

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王卑子，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王卑子 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NyySAC1JutD9dRDF2UY8YF | 王閒憂 | accepted |
| children | p_5qX9Bik5pHskNpZRag8suA | 王悼 | accepted |
| descendants | p_1FJdZ15XyXMCC5RwrJYVuD | 王遵 | accepted |

## 外部来源

- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
