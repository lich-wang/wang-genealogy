---
schema: wang-person/v1
id: p_kkcDjFWAdTrMcKDVDJEh6n
status: active
merged_into: null
display_name: 王廷相
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qjHiRxpQnQ79CwkkzYsVLn
        subject_person_id: p_kkcDjFWAdTrMcKDVDJEh6n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CVsK6Nnhaiqk5WVtJZhcLG
          claim_id: c_qjHiRxpQnQ79CwkkzYsVLn
          source_id: s_9UH4Nm4qMNJW9eDWi3fwN9
          stance: supports
          locator: CBDB:571935
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（571935）
          source: &a1
            id: s_9UH4Nm4qMNJW9eDWi3fwN9
            source_type: api_record
            title: 中国历代人物传记资料库：王廷相（CBDB 571935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571935&o=json
            external_identifier: CBDB:571935
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.883Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZNs7yo1K6CMq71Mq1Qp3Q9
        subject_person_id: p_kkcDjFWAdTrMcKDVDJEh6n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rkSvPEprFF99n8tN8YE3pP
          claim_id: c_ZNs7yo1K6CMq71Mq1Qp3Q9
          source_id: s_9UH4Nm4qMNJW9eDWi3fwN9
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

# 王廷相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷相 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷相（CBDB 571935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571935&o=json)
