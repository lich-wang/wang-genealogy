---
schema: wang-person/v1
id: p_ismKfpF1mFhf9nz3waGUNU
status: active
merged_into: null
display_name: 莫氏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c__NKHameJeqCAb3ELvkIdtR
        subject_person_id: p_ismKfpF1mFhf9nz3waGUNU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 莫氏，史料所见人物。本项目依据《王国维》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_ShOYM1soxePIKxDmytbook
          claim_id: c__NKHameJeqCAb3ELvkIdtR
          source_id: s_jdk8ev2sE9kNUT1en7UxxV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_jdk8ev2sE9kNUT1en7UxxV
            source_type: website
            title: 中文维基百科：王国维
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%9B%BD%E7%BB%B4
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:16.704Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_69rLSH4CkqzKHQF12zJdUW
        subject_person_id: p_ismKfpF1mFhf9nz3waGUNU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 莫氏
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y73g35BaNk43ACNHXbAk5V
          claim_id: c_69rLSH4CkqzKHQF12zJdUW
          source_id: s_jdk8ev2sE9kNUT1en7UxxV
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
        id: c_vQLCtn9SwbiH8bo6dF4AB9
        subject_person_id: p_CRTiUFbJJTt5FqJL9A5xNr
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ismKfpF1mFhf9nz3waGUNU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7JSBXf1MDZoKjAA5wCFyB3
          claim_id: c_vQLCtn9SwbiH8bo6dF4AB9
          source_id: s_jdk8ev2sE9kNUT1en7UxxV
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 妻子莫氏
          interpretation_note: null
          source:
            id: s_jdk8ev2sE9kNUT1en7UxxV
            source_type: website
            title: 中文维基百科：王国维
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%9B%BD%E7%BB%B4
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:16.704Z
            metadata_json: null
      object_person:
        id: p_CRTiUFbJJTt5FqJL9A5xNr
        status: active
        display_name: 王國維
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 莫氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 莫氏，史料所见人物。本项目依据《王国维》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 莫氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_CRTiUFbJJTt5FqJL9A5xNr | 王國維 | accepted |

## 外部来源

- [中文维基百科：王国维](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%9B%BD%E7%BB%B4)
