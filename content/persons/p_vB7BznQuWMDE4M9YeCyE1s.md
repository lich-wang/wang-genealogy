---
schema: wang-person/v1
id: p_vB7BznQuWMDE4M9YeCyE1s
status: active
merged_into: null
display_name: 王鉷
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bANUOABhfzDIHiLnViwt9_
        subject_person_id: p_vB7BznQuWMDE4M9YeCyE1s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉷，史料所见人物。本项目依据《王繇》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_dglEvgRoenoVJJMJjRvoND
          claim_id: c_bANUOABhfzDIHiLnViwt9_
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
        id: c_UkmhB7TFumPLQT9yK2P21x
        subject_person_id: p_vB7BznQuWMDE4M9YeCyE1s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉷
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yJxCLiW3i27wxDBTQrMZqf
          claim_id: c_UkmhB7TFumPLQT9yK2P21x
          source_id: s_uQxBP7trwtkiRpga2cu9eC
          stance: supports
          locator: Q11572879
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

# 王鉷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鉷，史料所见人物。本项目依据《王繇》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王鉷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中文维基百科：王繇](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B9%87)
