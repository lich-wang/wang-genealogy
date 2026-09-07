---
schema: wang-person/v1
id: p_qx8Hi1yZA1bax1CreQX26Z
status: active
merged_into: null
display_name: 王誦
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8jah1coTyzXJIxx2JB45FV
        subject_person_id: p_qx8Hi1yZA1bax1CreQX26Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誦，史料所见人物。本项目依据《王充》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_X3H_gbmHoeXmOjJG31RuZn
          claim_id: c_8jah1coTyzXJIxx2JB45FV
          source_id: s_MxGQVyh6BesvegW37DFrQG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_MxGQVyh6BesvegW37DFrQG
            source_type: website
            title: 中文维基百科：王充
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%85%85
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:11.890Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ck245ywkY81vVTw18SXuZd
        subject_person_id: p_qx8Hi1yZA1bax1CreQX26Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誦
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yyv9NPS7dmXXvquS2yAnP1
          claim_id: c_Ck245ywkY81vVTw18SXuZd
          source_id: s_MxGQVyh6BesvegW37DFrQG
          stance: supports
          locator: 条文：信息框 parents（父）
          quotation: 王誦（父）
          interpretation_note: 东汉王充之父被误挂到北魏同名人物。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_cvnBhTdrwFLFBEyKjeHo1Q
        subject_person_id: p_qx8Hi1yZA1bax1CreQX26Z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QZkat9wCSKR6E7A6uzPGsW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3m4mKNLZaMCeb3SxGmr3UN
          claim_id: c_cvnBhTdrwFLFBEyKjeHo1Q
          source_id: s_NuXKwAgG6V2fSUHhUK76Pf
          stance: supports
          locator: 条文：信息框 parents（父）
          quotation: 王誦（父）
          interpretation_note: null
          source:
            id: s_NuXKwAgG6V2fSUHhUK76Pf
            source_type: website
            title: 中文维基百科：王充
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%85%85
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:58.440Z
            metadata_json: null
        - id: cs_wb8HW4g5CDtEG9iXHzoKJW
          claim_id: c_cvnBhTdrwFLFBEyKjeHo1Q
          source_id: s_MxGQVyh6BesvegW37DFrQG
          stance: supports
          locator: 条文：信息框 parents（父）
          quotation: 王誦（父）
          interpretation_note: null
          source:
            id: s_MxGQVyh6BesvegW37DFrQG
            source_type: website
            title: 中文维基百科：王充
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%85%85
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:11.890Z
            metadata_json: null
      object_person:
        id: p_QZkat9wCSKR6E7A6uzPGsW
        status: active
        display_name: 王充
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王誦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王誦，史料所见人物。本项目依据《王充》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王誦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_QZkat9wCSKR6E7A6uzPGsW | 王充 | accepted |

## 外部来源

- [中文维基百科：王充](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%85%85)
