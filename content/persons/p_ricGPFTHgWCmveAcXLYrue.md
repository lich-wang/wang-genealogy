---
schema: wang-person/v1
id: p_ricGPFTHgWCmveAcXLYrue
status: active
merged_into: null
display_name: 王游
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7T2OUxgqZMMCQqkeHMx0tt
        subject_person_id: p_ricGPFTHgWCmveAcXLYrue
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王游，史料所见人物。本项目依据《王骏 (御史大夫)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_vBIDRw059JZEU1PTXCrIcG
          claim_id: c_7T2OUxgqZMMCQqkeHMx0tt
          source_id: s_9vBGx2cnBUUDqPkJBeA9DA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_9vBGx2cnBUUDqPkJBeA9DA
            source_type: website
            title: 中文维基百科：王骏 (御史大夫)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%AA%8F_(%E5%BE%A1%E5%8F%B2%E5%A4%A7%E5%A4%AB)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:12.339Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9K2ESbJ2RGM3SdAnNZCnC3
        subject_person_id: p_ricGPFTHgWCmveAcXLYrue
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王游
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7Z2ktdk4DZckNfH5VY77bQ
          claim_id: c_9K2ESbJ2RGM3SdAnNZCnC3
          source_id: s_9vBGx2cnBUUDqPkJBeA9DA
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
        id: c_RQhupNuvZxd4NsLdM5KcC8
        subject_person_id: p_LZZJjNMDiadFbtbdNFzzKG
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_ricGPFTHgWCmveAcXLYrue
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tKMUi3QrtVgwtCqS2PofJz
          claim_id: c_RQhupNuvZxd4NsLdM5KcC8
          source_id: s_9vBGx2cnBUUDqPkJBeA9DA
          stance: supports
          locator: 条文：条文识读（次子）
          quotation: 次子：王游，儿媳：□氏
          interpretation_note: null
          source:
            id: s_9vBGx2cnBUUDqPkJBeA9DA
            source_type: website
            title: 中文维基百科：王骏 (御史大夫)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%AA%8F_(%E5%BE%A1%E5%8F%B2%E5%A4%A7%E5%A4%AB)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:12.339Z
            metadata_json: null
        - id: cs_J13ofquShhhumax6mRmo4f
          claim_id: c_RQhupNuvZxd4NsLdM5KcC8
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 二子：崇、游。
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
        id: p_LZZJjNMDiadFbtbdNFzzKG
        status: active
        display_name: 王骏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王游

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王游，史料所见人物。本项目依据《王骏 (御史大夫)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王游 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LZZJjNMDiadFbtbdNFzzKG | 王骏 | accepted |

## 外部来源

- [中文维基百科：王骏 (御史大夫)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%AA%8F_(%E5%BE%A1%E5%8F%B2%E5%A4%A7%E5%A4%AB))
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
