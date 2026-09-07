---
schema: wang-person/v1
id: p_Ye9C6kssM3a8ECSaxfDuxz
status: active
merged_into: null
display_name: 王诠
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_0EI5SHhdz3428L1QIZ9jP-
        subject_person_id: p_Ye9C6kssM3a8ECSaxfDuxz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王诠，史料所见人物。本项目依据《王繇》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Y64Iw9JA6Soc2fWHxV_z88
          claim_id: c_0EI5SHhdz3428L1QIZ9jP-
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
        id: c_yPu1a4AnYJ9xdvMJGmq23D
        subject_person_id: p_Ye9C6kssM3a8ECSaxfDuxz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王诠
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xsUDhGHsEbBPDeHpWmHN8J
          claim_id: c_yPu1a4AnYJ9xdvMJGmq23D
          source_id: s_uQxBP7trwtkiRpga2cu9eC
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
        id: c_CrttoEWzC5i2MECaPdnoRy
        subject_person_id: p_PcarY3s2HbN5X2amcQ3Lxq
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Ye9C6kssM3a8ECSaxfDuxz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4EzFKAkQsAZ2u3SFAKZTnv
          claim_id: c_CrttoEWzC5i2MECaPdnoRy
          source_id: s_uQxBP7trwtkiRpga2cu9eC
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 王诠，银青光禄大夫、鸿胪寺卿、驸马都尉、上柱国、新太县开国公，娶肃宗第六女永和公主，追赠仆射。
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
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王诠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王诠，史料所见人物。本项目依据《王繇》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王诠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PcarY3s2HbN5X2amcQ3Lxq | 王繇 | accepted |

## 外部来源

- [中文维基百科：王繇](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B9%87)
