---
schema: wang-person/v1
id: p_A8tWqKDU4Jkzi47icA6qv6
status: active
merged_into: null
display_name: 王世
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WdLN1DTVPouoIezvMRuSHE
        subject_person_id: p_A8tWqKDU4Jkzi47icA6qv6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世，史料所见人物。本项目依据《王宗 (新朝)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_ObZfehZrGr1FPbk_izTzHC
          claim_id: c_WdLN1DTVPouoIezvMRuSHE
          source_id: s_Wdk7jF7TeHXo83RGNUTSq8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Wdk7jF7TeHXo83RGNUTSq8
            source_type: website
            title: 中文维基百科：王宗 (新朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%97_(%E6%96%B0%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-05T01:14:54.860Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5W2qf5Qk3EZMWAasQKJzhW
        subject_person_id: p_A8tWqKDU4Jkzi47icA6qv6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j66c8yMVH4DqF3NTAe6p2L
          claim_id: c_5W2qf5Qk3EZMWAasQKJzhW
          source_id: s_Wdk7jF7TeHXo83RGNUTSq8
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
        id: c_ivTYfE1qGJENQPEiHXV5KE
        subject_person_id: p_txEz4hCDRU7QsamZGm536K
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_A8tWqKDU4Jkzi47icA6qv6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nVU1AGP8MsL2rf7oFuW2pX
          claim_id: c_ivTYfE1qGJENQPEiHXV5KE
          source_id: s_Wdk7jF7TeHXo83RGNUTSq8
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 始建国元年（公元9年），王莽建立新朝，封王宇子六人：王千为功隆公，王寿为功明公，王吉为功成公，王宗为功崇公，王世为功昭公，王利为功著公。
          interpretation_note: null
          source:
            id: s_Wdk7jF7TeHXo83RGNUTSq8
            source_type: website
            title: 中文维基百科：王宗 (新朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%97_(%E6%96%B0%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-05T01:14:54.860Z
            metadata_json: null
      object_person:
        id: p_txEz4hCDRU7QsamZGm536K
        status: active
        display_name: 王宇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世，史料所见人物。本项目依据《王宗 (新朝)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王世 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_txEz4hCDRU7QsamZGm536K | 王宇 | accepted |

## 外部来源

- [中文维基百科：王宗 (新朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%97_(%E6%96%B0%E6%9C%9D))
