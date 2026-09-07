---
schema: wang-person/v1
id: p_GBxqJxU8VyzAAjKPNqvAg5
status: active
merged_into: null
display_name: 王寂
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bMweAGel1EHNfqOlwUu38y
        subject_person_id: p_GBxqJxU8VyzAAjKPNqvAg5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寂，史料所见人物。本项目依据《中文维基文库：《南齐书》卷三十三》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_shXjGsRRfmzXPTV27SjHwD
          claim_id: c_bMweAGel1EHNfqOlwUu38y
          source_id: s_Yc4Brf3FPtoDH2p7rwr13h
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Yc4Brf3FPtoDH2p7rwr13h
            source_type: book
            title: 中文维基文库：《南齐书》卷三十三
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/zh/%E5%8D%97%E9%BD%8A%E6%9B%B8/%E5%8D%B733
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T02:14:51.112Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UvbkiWnJsiF6TxLL2s16y9
        subject_person_id: p_GBxqJxU8VyzAAjKPNqvAg5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6a9MVsfAuenQj1CESM111R
          claim_id: c_UvbkiWnJsiF6TxLL2s16y9
          source_id: s_Yc4Brf3FPtoDH2p7rwr13h
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
        id: c_uFybA6ZCEEBqLYh5AcctTZ
        subject_person_id: p_ApPtvCCNtKJL2K4yt7EBWn
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_GBxqJxU8VyzAAjKPNqvAg5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WqV47NCsgCmrtpa44Dpjia
          claim_id: c_uFybA6ZCEEBqLYh5AcctTZ
          source_id: s_Yc4Brf3FPtoDH2p7rwr13h
          stance: supports
          locator: 卷末·王僧虔诸子
          quotation: 第九子寂字子玄……初為秘書郎，卒年二十一。
          interpretation_note: null
          source:
            id: s_Yc4Brf3FPtoDH2p7rwr13h
            source_type: book
            title: 中文维基文库：《南齐书》卷三十三
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/zh/%E5%8D%97%E9%BD%8A%E6%9B%B8/%E5%8D%B733
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T02:14:51.112Z
            metadata_json: null
      object_person:
        id: p_ApPtvCCNtKJL2K4yt7EBWn
        status: active
        display_name: 王僧虔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王寂，史料所见人物。本项目依据《中文维基文库：《南齐书》卷三十三》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王寂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ApPtvCCNtKJL2K4yt7EBWn | 王僧虔 | accepted |

## 外部来源

- [中文维基文库：《南齐书》卷三十三](https://zh.wikisource.org/zh/%E5%8D%97%E9%BD%8A%E6%9B%B8/%E5%8D%B733)
