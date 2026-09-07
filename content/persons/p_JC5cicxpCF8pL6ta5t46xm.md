---
schema: wang-person/v1
id: p_JC5cicxpCF8pL6ta5t46xm
status: active
merged_into: null
display_name: 潘麗正
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d9pAkvHYhoKXdogWzZTiAo
        subject_person_id: p_JC5cicxpCF8pL6ta5t46xm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 潘麗正，史料所见人物。本项目依据《王国维》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_DslUOC7JDXoIdlAE6PHTj7
          claim_id: c_d9pAkvHYhoKXdogWzZTiAo
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
        id: c_TTc49t74dqPnCFkQn8eFfi
        subject_person_id: p_JC5cicxpCF8pL6ta5t46xm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 潘麗正
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_No1T3BXKTUkEdv1RHLSxs3
          claim_id: c_TTc49t74dqPnCFkQn8eFfi
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
        id: c_4rET8fDshAmPeN5eCCq8mp
        subject_person_id: p_CRTiUFbJJTt5FqJL9A5xNr
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_JC5cicxpCF8pL6ta5t46xm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8WTxMGCKAyG8waLi19sZTH
          claim_id: c_4rET8fDshAmPeN5eCCq8mp
          source_id: s_jdk8ev2sE9kNUT1en7UxxV
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 妻子潘麗正
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

# 潘麗正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 潘麗正，史料所见人物。本项目依据《王国维》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 潘麗正 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_CRTiUFbJJTt5FqJL9A5xNr | 王國維 | accepted |

## 外部来源

- [中文维基百科：王国维](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%9B%BD%E7%BB%B4)
