---
schema: wang-person/v1
id: p_UVm7aEPFNUDGjVpFL93fHH
status: active
merged_into: null
display_name: 王益謨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Dj8S4Nq4w7FQEoudGgSU86
        subject_person_id: p_UVm7aEPFNUDGjVpFL93fHH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kknZR7fypKgVs7we8jhh3N
          claim_id: c_Dj8S4Nq4w7FQEoudGgSU86
          source_id: s_NG8PxDHxCejfQGp3Fa9Dxr
          stance: supports
          locator: CBDB:639529
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639529）
          source: &a1
            id: s_NG8PxDHxCejfQGp3Fa9Dxr
            source_type: api_record
            title: 中国历代人物传记资料库：王益謨（CBDB 639529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639529&o=json
            external_identifier: CBDB:639529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8Ehog9mtFXRBhvsZaKpZyQ
        subject_person_id: p_UVm7aEPFNUDGjVpFL93fHH
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
        - id: cs_L2CA2FSQvJtnmyYH4WtgiU
          claim_id: c_8Ehog9mtFXRBhvsZaKpZyQ
          source_id: s_NG8PxDHxCejfQGp3Fa9Dxr
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

# 王益謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王益謨 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王益謨（CBDB 639529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639529&o=json)
