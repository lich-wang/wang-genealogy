---
schema: wang-person/v1
id: p_73cH3V8WZ3fJyLwnyPAiTh
status: active
merged_into: null
display_name: 王聞禮
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ipR_QFx1A3lJHryKzFOuwJ
        subject_person_id: p_73cH3V8WZ3fJyLwnyPAiTh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聞禮，史料所见人物。本项目依据《王十朋》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_lpfcYiOJB9sfueP7u9l0Bj
          claim_id: c_ipR_QFx1A3lJHryKzFOuwJ
          source_id: s_ai3gzGHMUM5dsA9hB3FMin
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_ai3gzGHMUM5dsA9hB3FMin
            source_type: website
            title: 中文维基百科：王十朋
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%81%E6%9C%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:11.611Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_A7fdD5QsKHQK17RzbdwBoH
        subject_person_id: p_73cH3V8WZ3fJyLwnyPAiTh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聞禮
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2PUSQgHGbWPATgy9pxHgEX
          claim_id: c_A7fdD5QsKHQK17RzbdwBoH
          source_id: s_ai3gzGHMUM5dsA9hB3FMin
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
        id: c_15YLh3mGPJuGkH5Gyfm5uV
        subject_person_id: p_K67b54WhuwxiFBPKMMJrG1
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_73cH3V8WZ3fJyLwnyPAiTh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tp1hPiA7VH2nnZsCE7oLWr
          claim_id: c_15YLh3mGPJuGkH5Gyfm5uV
          source_id: s_ai3gzGHMUM5dsA9hB3FMin
          stance: supports
          locator: 条文：条文识读（次子）
          quotation: 有二子，长子王聞詩，次子王聞禮。
          interpretation_note: null
          source:
            id: s_ai3gzGHMUM5dsA9hB3FMin
            source_type: website
            title: 中文维基百科：王十朋
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%81%E6%9C%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:11.611Z
            metadata_json: null
      object_person:
        id: p_K67b54WhuwxiFBPKMMJrG1
        status: active
        display_name: 王十朋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王聞禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王聞禮，史料所见人物。本项目依据《王十朋》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王聞禮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_K67b54WhuwxiFBPKMMJrG1 | 王十朋 | accepted |

## 外部来源

- [中文维基百科：王十朋](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%81%E6%9C%8B)
