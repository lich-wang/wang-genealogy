---
schema: wang-person/v1
id: p_KdqrTMitqVQMTgLE7wG71S
status: active
merged_into: null
display_name: 朱學勤
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TjBBtynbqhcAkYTmDiBrDN
        subject_person_id: p_KdqrTMitqVQMTgLE7wG71S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 朱學勤，史料所见人物。本项目依据《王寵惠》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_nn-KNwUiRtzWGaqgR096IW
          claim_id: c_TjBBtynbqhcAkYTmDiBrDN
          source_id: s_PsJf2my4WM4CeXcQju7yMx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_PsJf2my4WM4CeXcQju7yMx
            source_type: website
            title: 中文维基百科：王寵惠
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B5%E6%83%A0
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:03.948Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xwgLvLshAVxZrdxuACKamX
        subject_person_id: p_KdqrTMitqVQMTgLE7wG71S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 朱學勤
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YMjtpCCmnX5Fgp27TXLkCY
          claim_id: c_xwgLvLshAVxZrdxuACKamX
          source_id: s_PsJf2my4WM4CeXcQju7yMx
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
        id: c_1H4X6LroEjFwJrV52Y4mvP
        subject_person_id: p_KdqrTMitqVQMTgLE7wG71S
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_S19Wsq1aN5wyApGxSWWoLb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Quzdd3dsvaRAAR9c28oF7u
          claim_id: c_1H4X6LroEjFwJrV52Y4mvP
          source_id: s_PsJf2my4WM4CeXcQju7yMx
          stance: supports
          locator: 条文：条文识读（妻子）
          quotation: 結識天津籍的續弦妻子朱學勤
          interpretation_note: null
          source:
            id: s_PsJf2my4WM4CeXcQju7yMx
            source_type: website
            title: 中文维基百科：王寵惠
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B5%E6%83%A0
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:03.948Z
            metadata_json: null
      object_person:
        id: p_S19Wsq1aN5wyApGxSWWoLb
        status: active
        display_name: 王寵惠
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 朱學勤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 朱學勤，史料所见人物。本项目依据《王寵惠》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 朱學勤 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_S19Wsq1aN5wyApGxSWWoLb | 王寵惠 | accepted |

## 外部来源

- [中文维基百科：王寵惠](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B5%E6%83%A0)
