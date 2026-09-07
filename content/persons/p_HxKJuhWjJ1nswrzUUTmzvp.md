---
schema: wang-person/v1
id: p_HxKJuhWjJ1nswrzUUTmzvp
status: active
merged_into: null
display_name: 王悌
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xQGYn6OBt1VprrwmBcb_S8
        subject_person_id: p_HxKJuhWjJ1nswrzUUTmzvp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王悌，史料所见人物。本项目依据《王僑 (成化進士)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r1Hfhx_PLhFI63hSRx2TnU
          claim_id: c_xQGYn6OBt1VprrwmBcb_S8
          source_id: s_43NcmX3fqpgyecqBk9Mp3P
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_43NcmX3fqpgyecqBk9Mp3P
            source_type: website
            title: 中文维基百科：王僑 (成化進士)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%91_(%E6%88%90%E5%8C%96%E9%80%B2%E5%A3%AB)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:09.293Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vwCzyyG57bBXxvuEG4Z2Nh
        subject_person_id: p_HxKJuhWjJ1nswrzUUTmzvp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王悌
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n3q5AnB4nkbSppMaV7zQmF
          claim_id: c_vwCzyyG57bBXxvuEG4Z2Nh
          source_id: s_43NcmX3fqpgyecqBk9Mp3P
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 子王悌
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yC5hc6wuCrUuRhvLNXF2N6
        subject_person_id: p_U2Fggori7BCBLtrGmDkhHG
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_HxKJuhWjJ1nswrzUUTmzvp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y3vdEvkTwgu2PKHp7N5V4x
          claim_id: c_yC5hc6wuCrUuRhvLNXF2N6
          source_id: s_43NcmX3fqpgyecqBk9Mp3P
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 子王悌
          interpretation_note: null
          source:
            id: s_43NcmX3fqpgyecqBk9Mp3P
            source_type: website
            title: 中文维基百科：王僑 (成化進士)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%91_(%E6%88%90%E5%8C%96%E9%80%B2%E5%A3%AB)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:09.293Z
            metadata_json: null
      object_person:
        id: p_U2Fggori7BCBLtrGmDkhHG
        status: active
        display_name: 王侨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王悌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王悌，史料所见人物。本项目依据《王僑 (成化進士)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王悌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_U2Fggori7BCBLtrGmDkhHG | 王侨 | accepted |

## 外部来源

- [中文维基百科：王僑 (成化進士)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%91_(%E6%88%90%E5%8C%96%E9%80%B2%E5%A3%AB))
