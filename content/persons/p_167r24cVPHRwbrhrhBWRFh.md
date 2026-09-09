---
schema: wang-person/v1
id: p_167r24cVPHRwbrhrhBWRFh
status: active
merged_into: null
display_name: 王佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YarRpZzmzYuN13YD1x6zX5
        subject_person_id: p_167r24cVPHRwbrhrhBWRFh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ev8HC7sT9MDyQBUEmJkGZJ
          claim_id: c_YarRpZzmzYuN13YD1x6zX5
          source_id: s_GZG3G6uVrJM3gsQVCeAzZd
          stance: supports
          locator: CBDB:67283
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67283）
          source: &a1
            id: s_GZG3G6uVrJM3gsQVCeAzZd
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 67283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67283&o=json
            external_identifier: CBDB:67283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_d3tx6JZXXEuLBAhmAgG94g
        subject_person_id: p_167r24cVPHRwbrhrhBWRFh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1538年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sm3djX4WgwFvi1vews28Bo
          claim_id: c_d3tx6JZXXEuLBAhmAgG94g
          source_id: s_GZG3G6uVrJM3gsQVCeAzZd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dDvNyTdpTmw8Xgpzh8LLnR
        subject_person_id: p_167r24cVPHRwbrhrhBWRFh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CuZ5JVtVJ42DNWQbmCEWEH
          claim_id: c_dDvNyTdpTmw8Xgpzh8LLnR
          source_id: s_GZG3G6uVrJM3gsQVCeAzZd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| death.date | 1538年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 67283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67283&o=json)
