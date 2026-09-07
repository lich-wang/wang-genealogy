---
schema: wang-person/v1
id: p_TJMDtmQ3zVBFeEj86TGFjs
status: active
merged_into: null
display_name: 王逢时
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g7ux71J9VoVufz-bvUwJ4s
        subject_person_id: p_TJMDtmQ3zVBFeEj86TGFjs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢时（生于前1世纪），史料所见人物。本项目依据《王逢时》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_hAZg_lZerfgWZTnyINz_hj
          claim_id: c_g7ux71J9VoVufz-bvUwJ4s
          source_id: s_8cMmMzVZ8ZoLquxvkFM1KF
          stance: supports
          locator: Q2586812
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_8cMmMzVZ8ZoLquxvkFM1KF
            source_type: api_record
            title: 维基数据：王逢时（Q2586812）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2586812
            external_identifier: Q2586812
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:42.997Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%80%A2%E6%97%B6
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4drGXBYtd5mn5M9gGnGBy5
        subject_person_id: p_TJMDtmQ3zVBFeEj86TGFjs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 前1世纪
            calendar_note: 维基数据 P569 结构化日期，精度：世纪
            earliest: -0100-01-01
            latest: -0001-12-31
            precision: century
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7jKTyvs19yNgrxdrUq5GK6
          claim_id: c_4drGXBYtd5mn5M9gGnGBy5
          source_id: s_8cMmMzVZ8ZoLquxvkFM1KF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_8cMmMzVZ8ZoLquxvkFM1KF
            source_type: api_record
            title: 维基数据：王逢时（Q2586812）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2586812
            external_identifier: Q2586812
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:42.997Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%80%A2%E6%97%B6
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3kcPX8QeSWHfbvsaAxri9C
        subject_person_id: p_TJMDtmQ3zVBFeEj86TGFjs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢时
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wH6SXF1fFJgCFG2pmhS74U
          claim_id: c_3kcPX8QeSWHfbvsaAxri9C
          source_id: s_8cMmMzVZ8ZoLquxvkFM1KF
          stance: supports
          locator: Q2586812
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LX1cgkVnNetHW9Jwe11eHj
        subject_person_id: p_xN7tAHKk6W68mdWgNxHCZz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TJMDtmQ3zVBFeEj86TGFjs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_JJqDAUMJWg1Q4XeuqSesJ1
          claim_id: c_LX1cgkVnNetHW9Jwe11eHj
          source_id: s_6FVNxhGNZGZenpLdtfzxFq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_6FVNxhGNZGZenpLdtfzxFq
            source_type: api_record
            title: 維基數據：王禁（Q2979420）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2979420
            external_identifier: Q2979420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:27.787Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A6%81
        - id: cs_873o8TksNfK9F9vDy5BQpy
          claim_id: c_LX1cgkVnNetHW9Jwe11eHj
          source_id: s_8cMmMzVZ8ZoLquxvkFM1KF
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8cMmMzVZ8ZoLquxvkFM1KF
            source_type: api_record
            title: 维基数据：王逢时（Q2586812）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2586812
            external_identifier: Q2586812
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:42.997Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%80%A2%E6%97%B6
        - id: cs_qtb4DaRJJc5Dq1bDLHQL3R
          claim_id: c_LX1cgkVnNetHW9Jwe11eHj
          source_id: s_kFy5uYKEd3Qt4CRSMb5DGK
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王禁第八子。
          interpretation_note: null
          source:
            id: s_kFy5uYKEd3Qt4CRSMb5DGK
            source_type: website
            title: 中文维基百科：王逢时
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%80%A2%E6%97%B6
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:27:10.396Z
            metadata_json: null
      object_person:
        id: p_xN7tAHKk6W68mdWgNxHCZz
        status: active
        display_name: 王禁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王逢时

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王逢时（生于前1世纪），史料所见人物。本项目依据《王逢时》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 前1世纪 | accepted |
| name.primary | 王逢时 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xN7tAHKk6W68mdWgNxHCZz | 王禁 | accepted |

## 外部来源

- [维基数据：王逢时（Q2586812）](https://www.wikidata.org/wiki/Q2586812)
- [維基數據：王禁（Q2979420）](https://www.wikidata.org/wiki/Q2979420)
- [中文维基百科：王逢时](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%80%A2%E6%97%B6)
