---
schema: wang-person/v1
id: p_H4dBVSCNVi3M7ea2M7Gpty
status: active
merged_into: null
display_name: 王商
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FNIW1VLMPWQiSiHVamgEap
        subject_person_id: p_H4dBVSCNVi3M7ea2M7Gpty
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王商，史料所见人物。本项目依据《王迺始》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_md9gUOUUYqlS0TzAONcDN-
          claim_id: c_FNIW1VLMPWQiSiHVamgEap
          source_id: s_VBxZZVPo5SwVei1WsfZcSP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_VBxZZVPo5SwVei1WsfZcSP
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:59.175Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_39iTVLQGG7HZs3DqFKVZSB
        subject_person_id: p_H4dBVSCNVi3M7ea2M7Gpty
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王商
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_p6B3e4iEm5VBR557mtSgbB
          claim_id: c_39iTVLQGG7HZs3DqFKVZSB
          source_id: s_VBxZZVPo5SwVei1WsfZcSP
          stance: supports
          locator: 条文：条文识读（child）
          quotation: 王武子王商官至丞相
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bXkFeKoz1NKTKz61gNUNVF
        subject_person_id: p_76gr6oGxYKhGFKezCL69QV
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_H4dBVSCNVi3M7ea2M7Gpty
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eW9YTg4QXdJtTg9FaYS9CY
          claim_id: c_bXkFeKoz1NKTKz61gNUNVF
          source_id: s_VBxZZVPo5SwVei1WsfZcSP
          stance: supports
          locator: 条文：条文识读（child）
          quotation: 王武子王商官至丞相
          interpretation_note: null
          source:
            id: s_VBxZZVPo5SwVei1WsfZcSP
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:59.175Z
            metadata_json: null
      object_person:
        id: p_76gr6oGxYKhGFKezCL69QV
        status: active
        display_name: 王武
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王商

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王商，史料所见人物。本项目依据《王迺始》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王商 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_76gr6oGxYKhGFKezCL69QV | 王武 | accepted |

## 外部来源

- [中文维基百科：王迺始](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B)
