---
schema: wang-person/v1
id: p_BKHxop61Y517GT7qX81mjW
status: active
merged_into: null
display_name: 杨兆良
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vDKWmr712X-nYM-gUnMJPW
        subject_person_id: p_BKHxop61Y517GT7qX81mjW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 杨兆良，史料所见人物。本项目依据《王寵惠》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_ZPkUkAHnQb7PfrVcgX1XlS
          claim_id: c_vDKWmr712X-nYM-gUnMJPW
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
        id: c_HHQmyBtz9vzyTQEvJbtwSJ
        subject_person_id: p_BKHxop61Y517GT7qX81mjW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 杨兆良
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d3Bc3SD4AogGKXCj8dnuCP
          claim_id: c_HHQmyBtz9vzyTQEvJbtwSJ
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
        id: c_25Z4fL45km8XXUBTEydr9N
        subject_person_id: p_BKHxop61Y517GT7qX81mjW
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
        - id: cs_3Bz76gbH7Mgf1A6d3PZoiX
          claim_id: c_25Z4fL45km8XXUBTEydr9N
          source_id: s_PsJf2my4WM4CeXcQju7yMx
          stance: supports
          locator: 条文：条文识读（妻子）
          quotation: 王寵惠1913年與元配妻子杨兆良結婚
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

# 杨兆良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 杨兆良，史料所见人物。本项目依据《王寵惠》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 杨兆良 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_S19Wsq1aN5wyApGxSWWoLb | 王寵惠 | accepted |

## 外部来源

- [中文维基百科：王寵惠](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B5%E6%83%A0)
