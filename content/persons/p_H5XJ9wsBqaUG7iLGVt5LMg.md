---
schema: wang-person/v1
id: p_H5XJ9wsBqaUG7iLGVt5LMg
status: active
merged_into: null
display_name: 王崇禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j288g9Hz7MVcKK7AEL6j2o
        subject_person_id: p_H5XJ9wsBqaUG7iLGVt5LMg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rNaWLmzqZi5nSuFxSYVW9f
          claim_id: c_j288g9Hz7MVcKK7AEL6j2o
          source_id: s_HcviPY7mVXpgS4JqnPVLWr
          stance: supports
          locator: CBDB:140514
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140514）
          source: &a1
            id: s_HcviPY7mVXpgS4JqnPVLWr
            source_type: api_record
            title: 中国历代人物传记资料库：王崇禮（CBDB 140514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140514&o=json
            external_identifier: CBDB:140514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.507Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_H7rBrNyLutgh87NiT1h91d
        subject_person_id: p_H5XJ9wsBqaUG7iLGVt5LMg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 673年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UX2CSCTt1nWjD1npBbYen1
          claim_id: c_H7rBrNyLutgh87NiT1h91d
          source_id: s_HcviPY7mVXpgS4JqnPVLWr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_FMkCQyy1WmUUTzmJKAJQkK
        subject_person_id: p_H5XJ9wsBqaUG7iLGVt5LMg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 731年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E7nyZzQLirZN2PGHjWCZQ3
          claim_id: c_FMkCQyy1WmUUTzmJKAJQkK
          source_id: s_HcviPY7mVXpgS4JqnPVLWr
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
        id: c_1MDFdytw4881koPHf3PFUt
        subject_person_id: p_H5XJ9wsBqaUG7iLGVt5LMg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m3K2HXw44vRxEmU9EuVekG
          claim_id: c_1MDFdytw4881koPHf3PFUt
          source_id: s_HcviPY7mVXpgS4JqnPVLWr
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

# 王崇禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇禮 | accepted |
| birth.date | 673年 | accepted |
| death.date | 731年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崇禮（CBDB 140514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140514&o=json)
