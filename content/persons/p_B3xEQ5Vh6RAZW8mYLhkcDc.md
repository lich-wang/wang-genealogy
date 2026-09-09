---
schema: wang-person/v1
id: p_B3xEQ5Vh6RAZW8mYLhkcDc
status: active
merged_into: null
display_name: 王震舉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J4isMJTeJRZGQ4F6TGisDC
        subject_person_id: p_B3xEQ5Vh6RAZW8mYLhkcDc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_USGw95KFY8w5BwayfvrAfh
          claim_id: c_J4isMJTeJRZGQ4F6TGisDC
          source_id: s_zXDfXYQcgWaP9sJsQmGJJx
          stance: supports
          locator: CBDB:534668
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（534668）
          source: &a1
            id: s_zXDfXYQcgWaP9sJsQmGJJx
            source_type: api_record
            title: 中国历代人物传记资料库：王震舉（CBDB 534668）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=534668&o=json
            external_identifier: CBDB:534668
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.385Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uEKV5ToVuPKm6eNqka9VJB
        subject_person_id: p_B3xEQ5Vh6RAZW8mYLhkcDc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aANrwRzAQE8kntxvFhMCCN
          claim_id: c_uEKV5ToVuPKm6eNqka9VJB
          source_id: s_zXDfXYQcgWaP9sJsQmGJJx
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

# 王震舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王震舉 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王震舉（CBDB 534668）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=534668&o=json)
