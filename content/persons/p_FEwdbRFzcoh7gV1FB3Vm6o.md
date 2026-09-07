---
schema: wang-person/v1
id: p_FEwdbRFzcoh7gV1FB3Vm6o
status: active
merged_into: null
display_name: 王道素
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_O1U1Fpyq02EFQEfOhabl_I
        subject_person_id: p_FEwdbRFzcoh7gV1FB3Vm6o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道素，史料所见人物。本项目依据《太原王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_-LoBUQtgTyuPeeZb9Ce9I3
          claim_id: c_O1U1Fpyq02EFQEfOhabl_I
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_8v3HEWJMg8p43rd4zxNR9r
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:15.556Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XHvj5xxbK1Pziw33Hpn7w2
        subject_person_id: p_FEwdbRFzcoh7gV1FB3Vm6o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道素
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mGwYEH9WkphyAfEZB9GFNE
          claim_id: c_XHvj5xxbK1Pziw33Hpn7w2
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
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
  ancestors:
    - claim:
        id: c_iMd3mYK7552EnJ4nfxETyj
        subject_person_id: p_37UsZUR2e25vv1gQTCqpjG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FEwdbRFzcoh7gV1FB3Vm6o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X2ubWittRJ6SQSWDVWG5wf
          claim_id: c_iMd3mYK7552EnJ4nfxETyj
          source_id: s_aw8xd6LrHMNCx64JpGaxGe
          stance: supports
          locator: 条文：条文识读（從孫）（2世）
          quotation: 王道素，王沈從孫
          interpretation_note: null
          source:
            id: s_aw8xd6LrHMNCx64JpGaxGe
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:03.601Z
            metadata_json: null
      object_person:
        id: p_37UsZUR2e25vv1gQTCqpjG
        status: active
        display_name: 王沈
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王道素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王道素，史料所见人物。本项目依据《太原王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王道素 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_37UsZUR2e25vv1gQTCqpjG | 王沈 | accepted |

## 外部来源

- [中文维基百科：太原王氏](https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F)
