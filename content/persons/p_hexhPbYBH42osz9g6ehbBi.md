---
schema: wang-person/v1
id: p_hexhPbYBH42osz9g6ehbBi
status: active
merged_into: null
display_name: 王寬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5pcACEJDn9KYJpmmrJWx2b
        subject_person_id: p_hexhPbYBH42osz9g6ehbBi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J4NfVvaCupR84j9eHcFVwK
          claim_id: c_5pcACEJDn9KYJpmmrJWx2b
          source_id: s_NgyX5qSB9qMzKChECkfL6H
          stance: supports
          locator: CBDB:139039
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139039）
          source: &a1
            id: s_NgyX5qSB9qMzKChECkfL6H
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 139039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139039&o=json
            external_identifier: CBDB:139039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.377Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_srEtcf6oqnV7x8cD4b7PY5
        subject_person_id: p_hexhPbYBH42osz9g6ehbBi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 582年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FoPndU2x67Y22e2yKWCSDs
          claim_id: c_srEtcf6oqnV7x8cD4b7PY5
          source_id: s_NgyX5qSB9qMzKChECkfL6H
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
        id: c_NhR7hFWmQ51CEWHYdGgp3M
        subject_person_id: p_hexhPbYBH42osz9g6ehbBi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 654年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vPqBZXUKgUKh378GhgSKcN
          claim_id: c_NhR7hFWmQ51CEWHYdGgp3M
          source_id: s_NgyX5qSB9qMzKChECkfL6H
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
        id: c_FEAAnEebvgMpyn58J4ex5P
        subject_person_id: p_hexhPbYBH42osz9g6ehbBi
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
        - id: cs_uxWzFZCGsTAFNRjfgfzrCx
          claim_id: c_FEAAnEebvgMpyn58J4ex5P
          source_id: s_NgyX5qSB9qMzKChECkfL6H
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

# 王寬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寬 | accepted |
| birth.date | 582年 | accepted |
| death.date | 654年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寬（CBDB 139039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139039&o=json)
