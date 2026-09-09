---
schema: wang-person/v1
id: p_g9HMyAPsksbGD34wdpnuX5
status: active
merged_into: null
display_name: 王克灼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b49XJZobTy8QfkSysWU1RM
        subject_person_id: p_g9HMyAPsksbGD34wdpnuX5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克灼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_91G18qSeSQXjH8oCMW61Yk
          claim_id: c_b49XJZobTy8QfkSysWU1RM
          source_id: s_gHh4hH6X6KpYLtB148kZbK
          stance: supports
          locator: CBDB:636302
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636302）
          source: &a1
            id: s_gHh4hH6X6KpYLtB148kZbK
            source_type: api_record
            title: 中国历代人物传记资料库：王克灼（CBDB 636302）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636302&o=json
            external_identifier: CBDB:636302
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.945Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8CjCcc2ziz4MFVSrDhWGR8
        subject_person_id: p_g9HMyAPsksbGD34wdpnuX5
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
        - id: cs_CUgeDP7nMEAzYQGJMhK8Hz
          claim_id: c_8CjCcc2ziz4MFVSrDhWGR8
          source_id: s_gHh4hH6X6KpYLtB148kZbK
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

# 王克灼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克灼 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克灼（CBDB 636302）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636302&o=json)
