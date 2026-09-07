---
schema: wang-person/v1
id: p_DdBVMCJjBs6QFtXUf2AenG
status: active
merged_into: null
display_name: 王羆
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DHrIY7NKoj-lWDVoMJiTyF
        subject_person_id: p_DdBVMCJjBs6QFtXUf2AenG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羆，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vHF81N5U8gZI5l4_RT_8sg
          claim_id: c_DHrIY7NKoj-lWDVoMJiTyF
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
        id: c_mj93da7STGc14PtoTPcyUc
        subject_person_id: p_DdBVMCJjBs6QFtXUf2AenG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羆
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_un5iWAQKSVKEtMLKJKUKs8
          claim_id: c_mj93da7STGc14PtoTPcyUc
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
        id: c_ZHXyFFwHkCVm69HfZ9FASs
        subject_person_id: p_DdBVMCJjBs6QFtXUf2AenG
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Md1MCAZk3mnCGp6jR6fcHA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RbgYhc8sE4wan8KwRKy1DV
          claim_id: c_ZHXyFFwHkCVm69HfZ9FASs
          source_id: s_ZUdE5PELTXpbHCLF734x47
          stance: supports
          locator: 卷十八·王羆传
          quotation: 子慶遠弱冠以功臣子拜直閤將軍，先羆卒。
          interpretation_note: null
          source:
            id: s_ZUdE5PELTXpbHCLF734x47
            source_type: book
            title: 中文维基文库：《周书》卷十八
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/zh-hant/%E5%91%A8%E6%9B%B8_(%E5%9B%9B%E5%BA%AB%E5%85%A8%E6%9B%B8%E6%9C%AC)/%E5%8D%B718
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T02:14:48.433Z
            metadata_json: null
      object_person:
        id: p_Md1MCAZk3mnCGp6jR6fcHA
        status: active
        display_name: 王慶遠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_BNNNRuFn5f79Qi14pWSeky
        subject_person_id: p_DdBVMCJjBs6QFtXUf2AenG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VSbGHm6uHnN6KZrgqna8S6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qJN4A4UfJJBNPgb9C1UeMJ
          claim_id: c_BNNNRuFn5f79Qi14pWSeky
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（八世孫）（8世）
          quotation: 均八世孫羆，至易從徙居汲郡
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
        id: p_VSbGHm6uHnN6KZrgqna8S6
        status: active
        display_name: 王均
        merged_into_person_id: null
  other: []
---

# 王羆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王羆，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王羆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Md1MCAZk3mnCGp6jR6fcHA | 王慶遠 | accepted |
| descendants | p_VSbGHm6uHnN6KZrgqna8S6 | 王均 | accepted |

## 外部来源

- [中文维基文库：《周书》卷十八](https://zh.wikisource.org/zh-hant/%E5%91%A8%E6%9B%B8_(%E5%9B%9B%E5%BA%AB%E5%85%A8%E6%9B%B8%E6%9C%AC)/%E5%8D%B718)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
