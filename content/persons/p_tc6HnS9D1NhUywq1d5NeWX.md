---
schema: wang-person/v1
id: p_tc6HnS9D1NhUywq1d5NeWX
status: active
merged_into: null
display_name: 王修月
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t2KQtCuQLjBgD9tbCS2uRz
        subject_person_id: p_tc6HnS9D1NhUywq1d5NeWX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修月
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Fppb17CGYB4wGB752EHzuA
          claim_id: c_t2KQtCuQLjBgD9tbCS2uRz
          source_id: s_UPm8m8wpjpGv78QKnoEMuc
          stance: supports
          locator: CBDB:120875
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（120875）
          source: &a1
            id: s_UPm8m8wpjpGv78QKnoEMuc
            source_type: api_record
            title: 中国历代人物传记资料库：王修月（CBDB 120875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120875&o=json
            external_identifier: CBDB:120875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.906Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ipUuYB7Bz8YQRdbhCh3UUM
        subject_person_id: p_tc6HnS9D1NhUywq1d5NeWX
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
        - id: cs_f8Cf9gkym7LAZC2fK3D8xe
          claim_id: c_ipUuYB7Bz8YQRdbhCh3UUM
          source_id: s_UPm8m8wpjpGv78QKnoEMuc
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

# 王修月

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王修月 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王修月（CBDB 120875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120875&o=json)
