---
schema: wang-person/v1
id: p_U1wAQyV6XErBLKKxKQCBfM
status: active
merged_into: null
display_name: 王钊
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4Ba0-3iAJ09KgynIRcZYXR
        subject_person_id: p_U1wAQyV6XErBLKKxKQCBfM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王钊，史料所见人物。本项目依据《王練》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_1Lmf4i_CcZQE6f0NxkPZcx
          claim_id: c_4Ba0-3iAJ09KgynIRcZYXR
          source_id: s_FVwgYj2eP5mUtAJiXQKynM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_FVwgYj2eP5mUtAJiXQKynM
            source_type: website
            title: 中文维基百科：王練
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B7%B4
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:32.024Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hrn33ABH4uhjYM3CwD2P9y
        subject_person_id: p_U1wAQyV6XErBLKKxKQCBfM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王钊
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_emzwFQRPuPDGdkQzqa2MWz
          claim_id: c_Hrn33ABH4uhjYM3CwD2P9y
          source_id: s_FVwgYj2eP5mUtAJiXQKynM
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
        id: c_XbY67Zt7yuMdHbWqE8bXyF
        subject_person_id: p_hCx9fcxQAYp3dsFzujCq7B
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_U1wAQyV6XErBLKKxKQCBfM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A3zCTWSP21rMN5FJCkJXtq
          claim_id: c_XbY67Zt7yuMdHbWqE8bXyF
          source_id: s_FVwgYj2eP5mUtAJiXQKynM
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 王练有子王钊
          interpretation_note: null
          source:
            id: s_FVwgYj2eP5mUtAJiXQKynM
            source_type: website
            title: 中文维基百科：王練
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B7%B4
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:32.024Z
            metadata_json: null
      object_person:
        id: p_hCx9fcxQAYp3dsFzujCq7B
        status: active
        display_name: 王練
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王钊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王钊，史料所见人物。本项目依据《王練》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王钊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hCx9fcxQAYp3dsFzujCq7B | 王練 | accepted |

## 外部来源

- [中文维基百科：王練](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B7%B4)
