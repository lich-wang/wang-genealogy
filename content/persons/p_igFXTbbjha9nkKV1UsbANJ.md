---
schema: wang-person/v1
id: p_igFXTbbjha9nkKV1UsbANJ
status: active
merged_into: null
display_name: 王凡
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gHGd4Q4Eujy9lcVm63CZF4
        subject_person_id: p_igFXTbbjha9nkKV1UsbANJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凡，史料所见人物。本项目依据《王充》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_KCJczKYt16ATaiEkVi84MQ
          claim_id: c_gHGd4Q4Eujy9lcVm63CZF4
          source_id: s_j3waA3qhscx8wdBSdYpWjL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_j3waA3qhscx8wdBSdYpWjL
            source_type: website
            title: 中文维基百科：王充
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%85%85
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:20.224Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UZZRdAgHjMH67Ye74a3VZo
        subject_person_id: p_igFXTbbjha9nkKV1UsbANJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凡
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YaiPHrNBqyZU34N3chwDeG
          claim_id: c_UZZRdAgHjMH67Ye74a3VZo
          source_id: s_j3waA3qhscx8wdBSdYpWjL
          stance: supports
          locator: Q106986442
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
  descendants:
    - claim:
        id: c_6QvbLxwSYLh6FZ8Ccky9Wk
        subject_person_id: p_igFXTbbjha9nkKV1UsbANJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QZkat9wCSKR6E7A6uzPGsW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tKrJagCz3BEXBZm86tYWJm
          claim_id: c_6QvbLxwSYLh6FZ8Ccky9Wk
          source_id: s_MxGQVyh6BesvegW37DFrQG
          stance: supports
          locator: 条文：信息框 relatives（祖父）（2世）
          quotation: 王凡（祖父）
          interpretation_note: null
          source:
            id: s_MxGQVyh6BesvegW37DFrQG
            source_type: website
            title: 中文维基百科：王充
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%85%85
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:11.890Z
            metadata_json: null
        - id: cs_PwV75Zu593LiRULZMNM9mL
          claim_id: c_6QvbLxwSYLh6FZ8Ccky9Wk
          source_id: s_NuXKwAgG6V2fSUHhUK76Pf
          stance: supports
          locator: 条文：信息框 relatives（祖父）（2世）
          quotation: 王凡（祖父）
          interpretation_note: null
          source:
            id: s_NuXKwAgG6V2fSUHhUK76Pf
            source_type: website
            title: 中文维基百科：王充
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%85%85
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:58.440Z
            metadata_json: null
      object_person:
        id: p_QZkat9wCSKR6E7A6uzPGsW
        status: active
        display_name: 王充
        merged_into_person_id: null
  other: []
---

# 王凡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王凡，史料所见人物。本项目依据《王充》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王凡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_QZkat9wCSKR6E7A6uzPGsW | 王充 | accepted |

## 外部来源

- [中文维基百科：王充](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%85%85)
