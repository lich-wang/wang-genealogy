---
schema: wang-person/v1
id: p_VUpUP7oSKLF3xkqMu796PC
status: active
merged_into: null
display_name: 韓氏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E_ionDWGT6tBehFkSWk65e
        subject_person_id: p_VUpUP7oSKLF3xkqMu796PC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 韓氏，史料所见人物。本项目依据《王瓘》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Gvldxr9oa9d7V_XH4rhwtR
          claim_id: c_E_ionDWGT6tBehFkSWk65e
          source_id: s_LrXVeZAKgNxTqQ6xTfH7kn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_LrXVeZAKgNxTqQ6xTfH7kn
            source_type: website
            title: 中文维基百科：王瓘
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%93%98
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:51.888Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HAaa77gkmERm5h26ZPiDeZ
        subject_person_id: p_VUpUP7oSKLF3xkqMu796PC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 韓氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_taQm8sKDs3hX6BoPhyva5A
          claim_id: c_HAaa77gkmERm5h26ZPiDeZ
          source_id: s_LrXVeZAKgNxTqQ6xTfH7kn
          stance: supports
          locator: CBDB:null
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
        id: c_BhngePQwq824Ano5qAp3TR
        subject_person_id: p_LNfZ5qzHVynGTRpmH784JC
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_VUpUP7oSKLF3xkqMu796PC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zZmDX6sJfGTe5K3NMPXtrp
          claim_id: c_BhngePQwq824Ano5qAp3TR
          source_id: s_LrXVeZAKgNxTqQ6xTfH7kn
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 娶韓氏
          interpretation_note: null
          source:
            id: s_LrXVeZAKgNxTqQ6xTfH7kn
            source_type: website
            title: 中文维基百科：王瓘
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%93%98
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:51.888Z
            metadata_json: null
      object_person:
        id: p_LNfZ5qzHVynGTRpmH784JC
        status: active
        display_name: 王瓘
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 韓氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 韓氏，史料所见人物。本项目依据《王瓘》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 韓氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_LNfZ5qzHVynGTRpmH784JC | 王瓘 | accepted |

## 外部来源

- [中文维基百科：王瓘](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%93%98)
