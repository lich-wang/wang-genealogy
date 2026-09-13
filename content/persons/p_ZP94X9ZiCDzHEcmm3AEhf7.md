---
schema: wang-person/v1
id: p_ZP94X9ZiCDzHEcmm3AEhf7
status: merged
merged_into: p_ZRPHhvQCC2prhC64nEgE7Z
display_name: 王谭
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mAUFf2NGVoy7oBVYAhzw18
        subject_person_id: p_ZP94X9ZiCDzHEcmm3AEhf7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王谭，史料所见人物。本项目依据《王訢》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_ez2yEiMVj2ypOYkVgVQB__
          claim_id: c_mAUFf2NGVoy7oBVYAhzw18
          source_id: s_Q97wqhXZHN9TMRegXK9zif
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Q97wqhXZHN9TMRegXK9zif
            source_type: website
            title: 中文维基百科：王訢
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A8%A2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:22.684Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3be9SVzF7SyYSDQANQQJt4
        subject_person_id: p_ZP94X9ZiCDzHEcmm3AEhf7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王谭
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bhUuBFe9q8UBy1xSksUqam
          claim_id: c_3be9SVzF7SyYSDQANQQJt4
          source_id: s_Q97wqhXZHN9TMRegXK9zif
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 爵位傳給了他的兒子王谭
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

# 王谭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王谭，史料所见人物。本项目依据《王訢》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王谭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中文维基百科：王訢](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A8%A2)
