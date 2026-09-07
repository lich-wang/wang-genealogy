---
schema: wang-person/v1
id: p_BVxtn8sqY7KpZnCL3GT5E5
status: active
merged_into: null
display_name: 朱氏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_I-poCs5vFouChfvW588x7v
        subject_person_id: p_BVxtn8sqY7KpZnCL3GT5E5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 朱氏，史料所见人物。本项目依据《王锡爵》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_78B1Ir7jTF7i-1Ans5AKsc
          claim_id: c_I-poCs5vFouChfvW588x7v
          source_id: s_xLEcAGAMcXLkcFMsmidCME
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_xLEcAGAMcXLkcFMsmidCME
            source_type: website
            title: 中文维基百科：王锡爵
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1%E7%88%B5
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.949Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qnWNKhXmbYdZptnwezMSPo
        subject_person_id: p_BVxtn8sqY7KpZnCL3GT5E5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 朱氏
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_99hH5MYS7RfycoMGWv9JUp
          claim_id: c_qnWNKhXmbYdZptnwezMSPo
          source_id: s_xLEcAGAMcXLkcFMsmidCME
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
        id: c_Dzo4atsDFhb2xQNFhAfyqH
        subject_person_id: p_BVxtn8sqY7KpZnCL3GT5E5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_b5LB8i5ZzNqTwph5kCuvrG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_McrkhQDKovvqB8NKRB3W3t
          claim_id: c_Dzo4atsDFhb2xQNFhAfyqH
          source_id: s_xLEcAGAMcXLkcFMsmidCME
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 娶朱氏。有子王衡，王錫爵為避浮議。
          interpretation_note: null
          source:
            id: s_xLEcAGAMcXLkcFMsmidCME
            source_type: website
            title: 中文维基百科：王锡爵
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1%E7%88%B5
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.949Z
            metadata_json: null
      object_person:
        id: p_b5LB8i5ZzNqTwph5kCuvrG
        status: active
        display_name: 王锡爵
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 朱氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 朱氏，史料所见人物。本项目依据《王锡爵》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 朱氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_b5LB8i5ZzNqTwph5kCuvrG | 王锡爵 | accepted |

## 外部来源

- [中文维基百科：王锡爵](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1%E7%88%B5)
