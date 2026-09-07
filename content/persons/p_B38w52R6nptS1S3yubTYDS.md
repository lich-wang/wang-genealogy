---
schema: wang-person/v1
id: p_B38w52R6nptS1S3yubTYDS
status: active
merged_into: null
display_name: 王光斌
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_-8o0dl1TDSGlk8l8aStqiv
        subject_person_id: p_B38w52R6nptS1S3yubTYDS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光斌，史料所见人物。本项目依据《王雲五》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_gaOCR2L-rf9YkUCOvho9NL
          claim_id: c_-8o0dl1TDSGlk8l8aStqiv
          source_id: s_WK5vGRAcP8MGjx1yUkPR6L
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_WK5vGRAcP8MGjx1yUkPR6L
            source_type: website
            title: 中文维基百科：王雲五
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9B%B2%E4%BA%94
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:18.105Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_s6LXH9GCUXdwQrJMFFJ34b
        subject_person_id: p_B38w52R6nptS1S3yubTYDS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光斌
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_S4PQMpAfoB9EpHNT3DJgD9
          claim_id: c_s6LXH9GCUXdwQrJMFFJ34b
          source_id: s_WK5vGRAcP8MGjx1yUkPR6L
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_79vjXEDEoMLDQsjznCSY67
        subject_person_id: p_B38w52R6nptS1S3yubTYDS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_a2X6NVkQYh1edapBqQFz25
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ih3VS9EUohLmoPC94tqB6P
          claim_id: c_79vjXEDEoMLDQsjznCSY67
          source_id: s_WK5vGRAcP8MGjx1yUkPR6L
          stance: supports
          locator: 条文：条文识读（父親）
          quotation: 王雲五生於上海，家中世代務農，父親王光斌破例到上海學商
          interpretation_note: null
          source:
            id: s_WK5vGRAcP8MGjx1yUkPR6L
            source_type: website
            title: 中文维基百科：王雲五
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9B%B2%E4%BA%94
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:18.105Z
            metadata_json: null
      object_person:
        id: p_a2X6NVkQYh1edapBqQFz25
        status: active
        display_name: 王雲五
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王光斌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王光斌，史料所见人物。本项目依据《王雲五》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王光斌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_a2X6NVkQYh1edapBqQFz25 | 王雲五 | accepted |

## 外部来源

- [中文维基百科：王雲五](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9B%B2%E4%BA%94)
