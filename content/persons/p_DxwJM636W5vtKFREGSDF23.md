---
schema: wang-person/v1
id: p_DxwJM636W5vtKFREGSDF23
status: active
merged_into: null
display_name: 王夢祥
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pR01oJbrjrI-4vBlCdkI7n
        subject_person_id: p_DxwJM636W5vtKFREGSDF23
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢祥，史料所见人物。本项目依据《王锡爵》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_DbYu4dmn68tbaRFbmRSIJn
          claim_id: c_pR01oJbrjrI-4vBlCdkI7n
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
        id: c_XWLoeLbKBKnU4uQKzzc547
        subject_person_id: p_DxwJM636W5vtKFREGSDF23
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢祥
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KTm6HVSeExbhorQMP9fn8i
          claim_id: c_XWLoeLbKBKnU4uQKzzc547
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
  children:
    - claim:
        id: c_1KDC4BcQxGtuxscKEMpSP2
        subject_person_id: p_DxwJM636W5vtKFREGSDF23
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b5LB8i5ZzNqTwph5kCuvrG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6MdoufrVascwq2P1Bv1QfD
          claim_id: c_1KDC4BcQxGtuxscKEMpSP2
          source_id: s_xLEcAGAMcXLkcFMsmidCME
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 曾祖王侁。祖父王湧。父王夢祥，监生。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王夢祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王夢祥，史料所见人物。本项目依据《王锡爵》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王夢祥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_b5LB8i5ZzNqTwph5kCuvrG | 王锡爵 | accepted |

## 外部来源

- [中文维基百科：王锡爵](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1%E7%88%B5)
