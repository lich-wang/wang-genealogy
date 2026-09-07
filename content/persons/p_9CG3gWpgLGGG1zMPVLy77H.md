---
schema: wang-person/v1
id: p_9CG3gWpgLGGG1zMPVLy77H
status: active
merged_into: null
display_name: 王述
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_-eu0UZLhAKvz2XF-LarPxG
        subject_person_id: p_9CG3gWpgLGGG1zMPVLy77H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述，史料所见人物。本项目依据《中文维基文库：《周书》卷十八》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yciZwpqf979L3Sqyg5Utk2
          claim_id: c_-eu0UZLhAKvz2XF-LarPxG
          source_id: s_ZUdE5PELTXpbHCLF734x47
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_o14trwHaa5YAYPGEBCiBGh
        subject_person_id: p_9CG3gWpgLGGG1zMPVLy77H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rp7QqE59jW9y9NBQThZdAi
          claim_id: c_o14trwHaa5YAYPGEBCiBGh
          source_id: s_ZUdE5PELTXpbHCLF734x47
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
        id: c_q2mZfh5AMYjcRpB14C19Jo
        subject_person_id: p_Md1MCAZk3mnCGp6jR6fcHA
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_9CG3gWpgLGGG1zMPVLy77H
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z28bGN1cXiSoH2SGGSdPHe
          claim_id: c_q2mZfh5AMYjcRpB14C19Jo
          source_id: s_ZUdE5PELTXpbHCLF734x47
          stance: supports
          locator: 卷十八·王羆传
          quotation: 孫述嗣，述字長述……述幼喪父，為羆所鞠養。
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
  children: []
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
| bio.summary | 王述，史料所见人物。本项目依据《中文维基文库：《周书》卷十八》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王述 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Md1MCAZk3mnCGp6jR6fcHA | 王慶遠 | accepted |

## 外部来源

- [中文维基文库：《周书》卷十八](https://zh.wikisource.org/zh-hant/%E5%91%A8%E6%9B%B8_(%E5%9B%9B%E5%BA%AB%E5%85%A8%E6%9B%B8%E6%9C%AC)/%E5%8D%B718)
