---
schema: wang-person/v1
id: p_JcCfcKbBLUXV71EwgKS3sP
status: active
merged_into: null
display_name: 王冏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cmhkjr6uSoZtc0eAXcVPqV
        subject_person_id: p_JcCfcKbBLUXV71EwgKS3sP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冏，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-etB9kx5sJQCvaJoSfm4zn
          claim_id: c_cmhkjr6uSoZtc0eAXcVPqV
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
        id: c_b3zBp2vCDobkbvuoX3Pett
        subject_person_id: p_JcCfcKbBLUXV71EwgKS3sP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冏
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZvYkkoHasaoEiHUd5rN66N
          claim_id: c_b3zBp2vCDobkbvuoX3Pett
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
        id: c_p5cmtQSxd9mNCu9jmPG9TT
        subject_person_id: p_qQBKqxPLCKmZ1zh7Gr5SRe
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_JcCfcKbBLUXV71EwgKS3sP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gzL61oFZ7N9SKorn4yF84F
          claim_id: c_p5cmtQSxd9mNCu9jmPG9TT
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 光，後魏幷州刺史。生冏，度支尚書、護烏丸校尉、廣陽侯
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
        id: p_qQBKqxPLCKmZ1zh7Gr5SRe
        status: active
        display_name: 王光
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_LNeFfLPzgpWw7z3zF8GBcy
        subject_person_id: p_JcCfcKbBLUXV71EwgKS3sP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LLGSb3xnG329ZH25RFQ7DH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UbpzPBvKKwRi8b8eGCQxjr
          claim_id: c_LNeFfLPzgpWw7z3zF8GBcy
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（五世孫）（5世）
          quotation: 冏五世孫元政
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
        id: p_LLGSb3xnG329ZH25RFQ7DH
        status: active
        display_name: 王元政
        merged_into_person_id: null
  other: []
---

# 王冏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王冏，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王冏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qQBKqxPLCKmZ1zh7Gr5SRe | 王光 | accepted |
| descendants | p_LLGSb3xnG329ZH25RFQ7DH | 王元政 | accepted |

## 外部来源

- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
