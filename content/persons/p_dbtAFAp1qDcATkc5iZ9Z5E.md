---
schema: wang-person/v1
id: p_dbtAFAp1qDcATkc5iZ9Z5E
status: active
merged_into: null
display_name: 王師課
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TiwW5yu4mYscu9y5GdUGW2
        subject_person_id: p_dbtAFAp1qDcATkc5iZ9Z5E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師課
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E3yYDpqvVYiCrXLRW5Gtmz
          claim_id: c_TiwW5yu4mYscu9y5GdUGW2
          source_id: s_F5RzLY1QCVEa9dNVQK4y3X
          stance: supports
          locator: CBDB:570832
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（570832）
          source: &a1
            id: s_F5RzLY1QCVEa9dNVQK4y3X
            source_type: api_record
            title: 中国历代人物传记资料库：王師課（CBDB 570832）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570832&o=json
            external_identifier: CBDB:570832
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.645Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Trw9JW71UeL3zEpvsHxKXe
        subject_person_id: p_dbtAFAp1qDcATkc5iZ9Z5E
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
        - id: cs_gdtV9GMGYHKP2DpSUi9DJQ
          claim_id: c_Trw9JW71UeL3zEpvsHxKXe
          source_id: s_F5RzLY1QCVEa9dNVQK4y3X
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

# 王師課

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師課 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師課（CBDB 570832）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570832&o=json)
