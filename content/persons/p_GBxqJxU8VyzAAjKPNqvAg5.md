---
schema: wang-person/v1
id: p_GBxqJxU8VyzAAjKPNqvAg5
status: active
merged_into: null
display_name: 王寂
revision: 2
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
          text: 王寂，字子玄，南朝齊琅邪臨沂人，司空王僧虔之子，性迅動，好文章（《南齊書·卷三十三·王僧虔傳》：子寂，字子玄，性迅動，好文章）。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tlZPtHVWqRabCxZzuxYqS3
          claim_id: c_bMweAGel1EHNfqOlwUu38y
          source_id: s_UmUHWI14bLVWPl0IBMw9ZU
          stance: supports
          locator: 南齊書/卷33·王寂
          quotation: null
          interpretation_note: 依正史传主列传中点名的亲属记载补写简介。
          source:
            id: s_UmUHWI14bLVWPl0IBMw9ZU
            source_type: website
            title: 维基文库：南齊書/卷33·王寂
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/南齊書/卷33
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T02:19:12.294Z
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
| bio.summary | 王寂，字子玄，南朝齊琅邪臨沂人，司空王僧虔之子，性迅動，好文章（《南齊書·卷三十三·王僧虔傳》：子寂，字子玄，性迅動，好文章）。 | accepted |
| name.primary | 王寂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ApPtvCCNtKJL2K4yt7EBWn | 王僧虔 | accepted |

## 外部来源

- [维基文库：南齊書/卷33·王寂](https://zh.wikisource.org/wiki/南齊書/卷33)
- [中文维基文库：《南齐书》卷三十三](https://zh.wikisource.org/zh/%E5%8D%97%E9%BD%8A%E6%9B%B8/%E5%8D%B733)
