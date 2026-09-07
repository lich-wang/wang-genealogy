---
schema: wang-person/v1
id: p_WyCKD5sjpnwPoeEX7Portb
status: active
merged_into: null
display_name: 王義剛
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pxS7lRDJG1EECvQdgb3itB
        subject_person_id: p_WyCKD5sjpnwPoeEX7Portb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義剛，史料所见人物。本项目依据《王瓘》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_4Xl12ZCCu5wfaUspUTJqEP
          claim_id: c_pxS7lRDJG1EECvQdgb3itB
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
        id: c_bbJKNbDkRtrnMy1CbPCM89
        subject_person_id: p_WyCKD5sjpnwPoeEX7Portb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義剛
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3KijP6CTATpbA7Yv7xpNfJ
          claim_id: c_bbJKNbDkRtrnMy1CbPCM89
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
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_NAHmUvc2meBkSaabq4yRhs
        subject_person_id: p_WyCKD5sjpnwPoeEX7Portb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LNfZ5qzHVynGTRpmH784JC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_99uKiXCqfCPvL5jv85LY3d
          claim_id: c_NAHmUvc2meBkSaabq4yRhs
          source_id: s_LrXVeZAKgNxTqQ6xTfH7kn
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 祖父王義剛
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
  other: []
---

# 王義剛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王義剛，史料所见人物。本项目依据《王瓘》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王義剛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_LNfZ5qzHVynGTRpmH784JC | 王瓘 | accepted |

## 外部来源

- [中文维基百科：王瓘](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%93%98)
