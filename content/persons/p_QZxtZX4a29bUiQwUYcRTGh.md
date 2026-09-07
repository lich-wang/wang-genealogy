---
schema: wang-person/v1
id: p_QZxtZX4a29bUiQwUYcRTGh
status: active
merged_into: null
display_name: 王士骏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zuw02odEjQHBufi-gUl3au
        subject_person_id: p_QZxtZX4a29bUiQwUYcRTGh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士骏，史料所见人物。本项目依据《王世贞》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eK6UPHFnIOV_Sk0qPOgrAh
          claim_id: c_zuw02odEjQHBufi-gUl3au
          source_id: s_E6h9jdxebBKJtgq5x8chCs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_E6h9jdxebBKJtgq5x8chCs
            source_type: website
            title: 中文维基百科：王世贞
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E8%B4%9E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:13.415Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7n5RFxhF77sEHLX5Zd9yLQ
        subject_person_id: p_QZxtZX4a29bUiQwUYcRTGh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士骏
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ogV2JFEQ8PyeCDhCJq86c3
          claim_id: c_7n5RFxhF77sEHLX5Zd9yLQ
          source_id: s_E6h9jdxebBKJtgq5x8chCs
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
        id: c_hYT94WJVGkh4k7P6v5QqEX
        subject_person_id: p_g5KSSBRpZ9iAzVfbXmLaWQ
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_QZxtZX4a29bUiQwUYcRTGh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Uhhh529twiVnaKa3nhAZhD
          claim_id: c_hYT94WJVGkh4k7P6v5QqEX
          source_id: s_E6h9jdxebBKJtgq5x8chCs
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 子王士騏；王士骕；王士骏。
          interpretation_note: null
          source:
            id: s_E6h9jdxebBKJtgq5x8chCs
            source_type: website
            title: 中文维基百科：王世贞
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E8%B4%9E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:13.415Z
            metadata_json: null
      object_person:
        id: p_g5KSSBRpZ9iAzVfbXmLaWQ
        status: active
        display_name: 王世贞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士骏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士骏，史料所见人物。本项目依据《王世贞》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王士骏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g5KSSBRpZ9iAzVfbXmLaWQ | 王世贞 | accepted |

## 外部来源

- [中文维基百科：王世贞](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E8%B4%9E)
