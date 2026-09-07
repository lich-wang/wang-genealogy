---
schema: wang-person/v1
id: p_iyEfgfMduiPMH61WeiBkbD
status: active
merged_into: null
display_name: 永嘉公主
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wlkFmDuMwuKBeMTgn5PvBE
        subject_person_id: p_iyEfgfMduiPMH61WeiBkbD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 永嘉公主，史料所见人物。本项目依据《王銓 (南梁)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_nq5m550tct4CD0amP2k-qn
          claim_id: c_wlkFmDuMwuKBeMTgn5PvBE
          source_id: s_9zkzUnCmUWmoaFHeWosVPt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_9zkzUnCmUWmoaFHeWosVPt
            source_type: website
            title: 中文维基百科：王銓 (南梁)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%8A%93_(%E5%8D%97%E6%A2%81)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:10.137Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_m4QeuS7Fq12XsoWE922mdB
        subject_person_id: p_iyEfgfMduiPMH61WeiBkbD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 永嘉公主
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xAcJVRxJUd2K5H5ZTsskZ3
          claim_id: c_m4QeuS7Fq12XsoWE922mdB
          source_id: s_9zkzUnCmUWmoaFHeWosVPt
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
        id: c_aTrm1EFBUv3vJgzgGQEFSx
        subject_person_id: p_6P1fo1PnFdXvCWVqBBsEtM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_iyEfgfMduiPMH61WeiBkbD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8zeCKaMhwmh9DZBnBwK4Re
          claim_id: c_aTrm1EFBUv3vJgzgGQEFSx
          source_id: s_9zkzUnCmUWmoaFHeWosVPt
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 娶梁武帝之女永嘉公主为妻
          interpretation_note: null
          source:
            id: s_9zkzUnCmUWmoaFHeWosVPt
            source_type: website
            title: 中文维基百科：王銓 (南梁)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%8A%93_(%E5%8D%97%E6%A2%81)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:10.137Z
            metadata_json: null
      object_person:
        id: p_6P1fo1PnFdXvCWVqBBsEtM
        status: active
        display_name: 王铨
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 永嘉公主

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 永嘉公主，史料所见人物。本项目依据《王銓 (南梁)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 永嘉公主 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_6P1fo1PnFdXvCWVqBBsEtM | 王铨 | accepted |

## 外部来源

- [中文维基百科：王銓 (南梁)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%8A%93_(%E5%8D%97%E6%A2%81))
