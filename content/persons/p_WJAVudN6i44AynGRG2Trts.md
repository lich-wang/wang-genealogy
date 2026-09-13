---
schema: wang-person/v1
id: p_WJAVudN6i44AynGRG2Trts
status: active
merged_into: null
display_name: 王操之
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v8q4s2QCHIOPOzMyHREJ6B
        subject_person_id: p_WJAVudN6i44AynGRG2Trts
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王操之，史料所见人物。本项目依据《郗璿》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_I3BtPaQgyLAmOV1LB_PSYc
          claim_id: c_v8q4s2QCHIOPOzMyHREJ6B
          source_id: s_ZsTJaM2TuXEioWT91BQiEp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_ZsTJaM2TuXEioWT91BQiEp
            source_type: website
            title: 中文维基百科：郗璿
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E9%83%97%E7%92%BF
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:21.051Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2DxUxQnc8nkwHFfUu1XRwT
        subject_person_id: p_WJAVudN6i44AynGRG2Trts
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王操之
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j3STN3K6KLeQe4eug9pbKA
          claim_id: c_2DxUxQnc8nkwHFfUu1XRwT
          source_id: s_ZsTJaM2TuXEioWT91BQiEp
          stance: supports
          locator: Q110109538
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
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王操之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王操之，史料所见人物。本项目依据《郗璿》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王操之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中文维基百科：郗璿](https://zh.wikipedia.org/wiki/%E9%83%97%E7%92%BF)
