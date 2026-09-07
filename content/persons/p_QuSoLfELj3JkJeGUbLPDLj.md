---
schema: wang-person/v1
id: p_QuSoLfELj3JkJeGUbLPDLj
status: active
merged_into: null
display_name: 王敞
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mJNGq9PrlGvosvhEmvshYb
        subject_person_id: p_QuSoLfELj3JkJeGUbLPDLj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敞，史料所见人物。本项目依据《王奉光》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-txttq3SKQHhvrHXdqdTjY
          claim_id: c_mJNGq9PrlGvosvhEmvshYb
          source_id: s_PSAkS28212d4sC7aBUKbnd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_PSAkS28212d4sC7aBUKbnd
            source_type: website
            title: 中文维基百科：王奉光
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%89%E5%85%89
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:24.577Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WJgrfpYDujoDZzeKc4fKF2
        subject_person_id: p_QuSoLfELj3JkJeGUbLPDLj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敞
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KqTNEgMiUbtZ6sg5W6ZC2m
          claim_id: c_WJgrfpYDujoDZzeKc4fKF2
          source_id: s_PSAkS28212d4sC7aBUKbnd
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
        id: c_5JDjNW8prH3aTuHYKoZ926
        subject_person_id: p_48wsFe4LYNQDpaxaA2d7C9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_QuSoLfELj3JkJeGUbLPDLj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6W3K44fYZrFJYntid1RiRx
          claim_id: c_5JDjNW8prH3aTuHYKoZ926
          source_id: s_PVCe79dmv55BFf1JoLUQDo
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 子王敞袭封邛成侯
          interpretation_note: null
          source:
            id: s_PVCe79dmv55BFf1JoLUQDo
            source_type: website
            title: 中文维基百科：王奉光
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%89%E5%85%89
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:53.517Z
            metadata_json: null
        - id: cs_yGQBLWQ8Sf9YH9Fyk8ZmfN
          claim_id: c_5JDjNW8prH3aTuHYKoZ926
          source_id: s_LoutrY7y4q2cPhnfqBrtjF
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 子王敞袭封邛成侯
          interpretation_note: null
          source:
            id: s_LoutrY7y4q2cPhnfqBrtjF
            source_type: website
            title: 中文维基百科：王奉光
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%89%E5%85%89
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:54.898Z
            metadata_json: null
        - id: cs_zVQwaBtWntW8N3dnXjnFST
          claim_id: c_5JDjNW8prH3aTuHYKoZ926
          source_id: s_nZMPPA8T9g1Lsds6YH3Lht
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 子王敞袭封邛成侯
          interpretation_note: null
          source:
            id: s_nZMPPA8T9g1Lsds6YH3Lht
            source_type: website
            title: 中文维基百科：王奉光
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%89%E5%85%89
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:27:19.840Z
            metadata_json: null
        - id: cs_kJyM9R4N8P8MxrWepTTYPP
          claim_id: c_5JDjNW8prH3aTuHYKoZ926
          source_id: s_z8CFA9H8zSTg1A6Lq279nB
          stance: supports
          locator: 条文：条文识读（child）
          quotation: 子王敞袭封邛成侯，王舜另封安平侯
          interpretation_note: null
          source:
            id: s_z8CFA9H8zSTg1A6Lq279nB
            source_type: website
            title: 中文维基百科：王奉光
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%89%E5%85%89
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:38.669Z
            metadata_json: null
      object_person:
        id: p_48wsFe4LYNQDpaxaA2d7C9
        status: active
        display_name: 王奉光
        merged_into_person_id: null
  children:
    - claim:
        id: c_8rhCeMUipF94w1DttaHzEG
        subject_person_id: p_QuSoLfELj3JkJeGUbLPDLj
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_SZLEBEECPX66Uy9Mxbg6cv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m4SFyxPPiYGjJ2fGVwMwB8
          claim_id: c_8rhCeMUipF94w1DttaHzEG
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王敞 → 王宏
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
      object_person:
        id: p_SZLEBEECPX66Uy9Mxbg6cv
        status: active
        display_name: 王宏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王敞，史料所见人物。本项目依据《王奉光》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王敞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_48wsFe4LYNQDpaxaA2d7C9 | 王奉光 | accepted |
| children | p_SZLEBEECPX66Uy9Mxbg6cv | 王宏 | accepted |

## 外部来源

- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王奉光](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%89%E5%85%89)
