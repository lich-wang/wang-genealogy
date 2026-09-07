---
schema: wang-person/v1
id: p_6k1m3bPxAPa9Ds41d6MHSe
status: active
merged_into: null
display_name: 吴县公主
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WpiKjHQqYJwGTWw3luqC_v
        subject_person_id: p_6k1m3bPxAPa9Ds41d6MHSe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吴县公主，史料所见人物。本项目依据《王观 (南齐)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NJPp0E8-LjksZQglb41H_L
          claim_id: c_WpiKjHQqYJwGTWw3luqC_v
          source_id: s_7DpmFvgEKc9Q3oXBMVb7hF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_7DpmFvgEKc9Q3oXBMVb7hF
            source_type: website
            title: 中文维基百科：王观 (南齐)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A7%82_(%E5%8D%97%E9%BD%90)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:32.902Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KRSvTjDtZ5xrDSAdzYt3p5
        subject_person_id: p_6k1m3bPxAPa9Ds41d6MHSe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吴县公主
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q3Gf539tfnVMUQdqifavNa
          claim_id: c_KRSvTjDtZ5xrDSAdzYt3p5
          source_id: s_7DpmFvgEKc9Q3oXBMVb7hF
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_UBAMtSwyCPG9LBjdn32dDU
        subject_person_id: p_63XUayA3k8V61aLudm2BhJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_6k1m3bPxAPa9Ds41d6MHSe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UVvBgDbDykzVADC39T9LuA
          claim_id: c_UBAMtSwyCPG9LBjdn32dDU
          source_id: s_7DpmFvgEKc9Q3oXBMVb7hF
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 齐武帝萧赜之女吴县公主嫁给了王观
          interpretation_note: null
          source:
            id: s_7DpmFvgEKc9Q3oXBMVb7hF
            source_type: website
            title: 中文维基百科：王观 (南齐)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A7%82_(%E5%8D%97%E9%BD%90)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:32.902Z
            metadata_json: null
      object_person:
        id: p_63XUayA3k8V61aLudm2BhJ
        status: active
        display_name: 王观
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 吴县公主

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 吴县公主，史料所见人物。本项目依据《王观 (南齐)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 吴县公主 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_63XUayA3k8V61aLudm2BhJ | 王观 | accepted |

## 外部来源

- [中文维基百科：王观 (南齐)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A7%82_(%E5%8D%97%E9%BD%90))
