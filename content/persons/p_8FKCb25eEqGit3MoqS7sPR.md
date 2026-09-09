---
schema: wang-person/v1
id: p_8FKCb25eEqGit3MoqS7sPR
status: active
merged_into: null
display_name: 王輪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rdftgJ9E8vQJAe9eq6nAR9
        subject_person_id: p_8FKCb25eEqGit3MoqS7sPR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uBLVWQGhj4Ha7qk4xmWfAD
          claim_id: c_rdftgJ9E8vQJAe9eq6nAR9
          source_id: s_Vs3rL5D1pEDF5cbMwWJ4UV
          stance: supports
          locator: CBDB:467595
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（467595）
          source: &a1
            id: s_Vs3rL5D1pEDF5cbMwWJ4UV
            source_type: api_record
            title: 中国历代人物传记资料库：王輪（CBDB 467595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467595&o=json
            external_identifier: CBDB:467595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.041Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1aGwcByKdwiMAuFXs5PtL8
        subject_person_id: p_8FKCb25eEqGit3MoqS7sPR
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
        - id: cs_2uszBehXbGL7FfacyPu7Pc
          claim_id: c_1aGwcByKdwiMAuFXs5PtL8
          source_id: s_Vs3rL5D1pEDF5cbMwWJ4UV
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

# 王輪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輪 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輪（CBDB 467595）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467595&o=json)
