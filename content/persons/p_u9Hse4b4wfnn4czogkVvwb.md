---
schema: wang-person/v1
id: p_u9Hse4b4wfnn4czogkVvwb
status: active
merged_into: null
display_name: 王长
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PpG_DRuQESP-SeDlE2GhhB
        subject_person_id: p_u9Hse4b4wfnn4czogkVvwb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王长，史料所见人物。本项目依据《王嗣》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_PxeJAGKYMzvIC1FLkn2W7x
          claim_id: c_PpG_DRuQESP-SeDlE2GhhB
          source_id: s_CUyqBVxUiQtfjFTLAt5DEr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_CUyqBVxUiQtfjFTLAt5DEr
            source_type: website
            title: 中文维基百科：王嗣
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%97%A3
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:30.038Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_c4n9JTieBbpZ8MQQ7HRqoe
        subject_person_id: p_u9Hse4b4wfnn4czogkVvwb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王长
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iw2favVgZ7Boix4yW69f7K
          claim_id: c_c4n9JTieBbpZ8MQQ7HRqoe
          source_id: s_CUyqBVxUiQtfjFTLAt5DEr
          stance: supports
          locator: Q30942313
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PRVwhkfZEuw84vRLf2NTfw
        subject_person_id: p_khfpnHyazPC5NrQ3YJisDR
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_u9Hse4b4wfnn4czogkVvwb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sGGdsb2fmFDRdS3A94QoLM
          claim_id: c_PRVwhkfZEuw84vRLf2NTfw
          source_id: s_CUyqBVxUiQtfjFTLAt5DEr
          stance: supports
          locator: 条文：子
          quotation: 二子王长、王终
          interpretation_note: null
          source:
            id: s_CUyqBVxUiQtfjFTLAt5DEr
            source_type: website
            title: 中文维基百科：王嗣
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%97%A3
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:30.038Z
            metadata_json: null
      object_person:
        id: p_khfpnHyazPC5NrQ3YJisDR
        status: active
        display_name: 王嗣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王长

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王长，史料所见人物。本项目依据《王嗣》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王长 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_khfpnHyazPC5NrQ3YJisDR | 王嗣 | accepted |

## 外部来源

- [中文维基百科：王嗣](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%97%A3)
