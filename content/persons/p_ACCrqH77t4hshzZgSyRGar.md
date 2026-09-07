---
schema: wang-person/v1
id: p_ACCrqH77t4hshzZgSyRGar
status: active
merged_into: null
display_name: 韦濯
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dZylin6yoF1hMbCAq2e2BO
        subject_person_id: p_ACCrqH77t4hshzZgSyRGar
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 韦濯，史料所见人物。本项目依据《王繇》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_TG8sTLUvasIF_eG3Xvs3mo
          claim_id: c_dZylin6yoF1hMbCAq2e2BO
          source_id: s_uQxBP7trwtkiRpga2cu9eC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_uQxBP7trwtkiRpga2cu9eC
            source_type: website
            title: 中文维基百科：王繇
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B9%87
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:50.181Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8xM9qZVyDduY3YPDosh4Zi
        subject_person_id: p_ACCrqH77t4hshzZgSyRGar
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 韦濯
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gpaYQPyXWeJ3ibMm82JuRf
          claim_id: c_8xM9qZVyDduY3YPDosh4Zi
          source_id: s_uQxBP7trwtkiRpga2cu9eC
          stance: supports
          locator: Q26209548
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
        id: c_VJHJi36tU4DoSEh8Wn1TGr
        subject_person_id: p_ACCrqH77t4hshzZgSyRGar
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_PcarY3s2HbN5X2amcQ3Lxq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z1YfaQCCg2ipn62QW6HWvi
          claim_id: c_VJHJi36tU4DoSEh8Wn1TGr
          source_id: s_uQxBP7trwtkiRpga2cu9eC
          stance: supports
          locator: 条文：妻/娶
          quotation: 定安公主再嫁韦濯、崔铣，开元二十一年（733年）二月，定安公主去世
          interpretation_note: null
          source:
            id: s_uQxBP7trwtkiRpga2cu9eC
            source_type: website
            title: 中文维基百科：王繇
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B9%87
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:50.181Z
            metadata_json: null
      object_person:
        id: p_PcarY3s2HbN5X2amcQ3Lxq
        status: active
        display_name: 王繇
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 韦濯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 韦濯，史料所见人物。本项目依据《王繇》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 韦濯 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_PcarY3s2HbN5X2amcQ3Lxq | 王繇 | accepted |

## 外部来源

- [中文维基百科：王繇](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B9%87)
