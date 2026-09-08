---
schema: wang-person/v1
id: p_E93Xr5HkL9KnAz6hCQ6fmR
status: active
merged_into: null
display_name: 王安珍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mtkHJ17D3DfaLRZwz6DpA3
        subject_person_id: p_E93Xr5HkL9KnAz6hCQ6fmR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安珍
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Cr3T4CgJRX6pDCnD7G5asM
          claim_id: c_mtkHJ17D3DfaLRZwz6DpA3
          source_id: s_FLfAzbY9i7KjNrh8BEvDN8
          stance: supports
          locator: Q112697023
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_FLfAzbY9i7KjNrh8BEvDN8
            source_type: api_record
            title: 维基数据：王安珍（Q112697023）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q112697023
            external_identifier: Q112697023
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_X48ZpDsh7xkKTRAhFeetst
        subject_person_id: p_E93Xr5HkL9KnAz6hCQ6fmR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1923年11月27日
            calendar_note: 维基数据 P569 结构化日期，精度：日
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PUGFGDDNMP7UdY6V12LrVJ
          claim_id: c_X48ZpDsh7xkKTRAhFeetst
          source_id: s_FLfAzbY9i7KjNrh8BEvDN8
          stance: supports
          locator: P569（出生日期）
          quotation: null
          interpretation_note: 维基数据 P569
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_spHLBkofGh9A8vhmXeFsGk
        subject_person_id: p_E93Xr5HkL9KnAz6hCQ6fmR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 2016年4月9日
            calendar_note: 维基数据 P570 结构化日期，精度：日
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y3xHM64MbDWqHYTFPoi2bP
          claim_id: c_spHLBkofGh9A8vhmXeFsGk
          source_id: s_FLfAzbY9i7KjNrh8BEvDN8
          stance: supports
          locator: P570（死亡日期）
          quotation: null
          interpretation_note: 维基数据 P570
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oQzBMrYvTjQGshPhkBpMEE
        subject_person_id: p_zyHxsVZox5Dbnu11LPXNR6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E93Xr5HkL9KnAz6hCQ6fmR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yg1Sxz9NKShT2hrsCZuZUz
          claim_id: c_oQzBMrYvTjQGshPhkBpMEE
          source_id: s_m4spp5B0p3qB3lQLKodo83
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_m4spp5B0p3qB3lQLKodo83
            source_type: website
            title: 中文维基百科：王正黼
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E9%BB%BC
            external_identifier: Q15908672
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
        - id: cs_QJXiihAd7W37GnC9REVey8
          claim_id: c_oQzBMrYvTjQGshPhkBpMEE
          source_id: s_FLfAzbY9i7KjNrh8BEvDN8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_zyHxsVZox5Dbnu11LPXNR6
        status: active
        display_name: 王正黼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王安珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安珍 | accepted |
| birth.date | 1923年11月27日 | accepted |
| death.date | 2016年4月9日 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zyHxsVZox5Dbnu11LPXNR6 | 王正黼 | accepted |

## 外部来源

- [维基数据：王安珍（Q112697023）](https://www.wikidata.org/wiki/Q112697023)
- [中文维基百科：王正黼](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E9%BB%BC)
