---
schema: wang-person/v1
id: p_1a8wE7BZGLbHdKXEY862T8
status: active
merged_into: null
display_name: 王翥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jSBE9owaL87sSERg4TrMuJ
        subject_person_id: p_1a8wE7BZGLbHdKXEY862T8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_86AR2Mbou691NHQGA9tpB7
          claim_id: c_jSBE9owaL87sSERg4TrMuJ
          source_id: s_LCa6ytN9wPVA1h42X2ghm4
          stance: supports
          locator: CBDB:486016
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（486016）
          source: &a1
            id: s_LCa6ytN9wPVA1h42X2ghm4
            source_type: api_record
            title: 中国历代人物传记资料库：王翥（CBDB 486016）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486016&o=json
            external_identifier: CBDB:486016
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.905Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wHk7dezaZDGahDwiQHD1kB
        subject_person_id: p_1a8wE7BZGLbHdKXEY862T8
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
        - id: cs_XdEfHxLKys2D2LPt9WNB6A
          claim_id: c_wHk7dezaZDGahDwiQHD1kB
          source_id: s_LCa6ytN9wPVA1h42X2ghm4
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

# 王翥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翥 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翥（CBDB 486016）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486016&o=json)
