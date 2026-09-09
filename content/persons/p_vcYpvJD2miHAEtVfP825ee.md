---
schema: wang-person/v1
id: p_vcYpvJD2miHAEtVfP825ee
status: active
merged_into: null
display_name: 王賜履
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8NVsYgPd8zB1oJgWPGhyJ3
        subject_person_id: p_vcYpvJD2miHAEtVfP825ee
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賜履
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v3T4Ak2L9W3JFp9DjUjpG9
          claim_id: c_8NVsYgPd8zB1oJgWPGhyJ3
          source_id: s_ZygqL3tGcDtvEtKWxMQ4cC
          stance: supports
          locator: CBDB:640325
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640325）
          source: &a1
            id: s_ZygqL3tGcDtvEtKWxMQ4cC
            source_type: api_record
            title: 中国历代人物传记资料库：王賜履（CBDB 640325）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640325&o=json
            external_identifier: CBDB:640325
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.220Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gpkgtiyRTvDp5bVCVPpQxN
        subject_person_id: p_vcYpvJD2miHAEtVfP825ee
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
        - id: cs_5Z69DbwVL5V8v9B4NZKdH2
          claim_id: c_gpkgtiyRTvDp5bVCVPpQxN
          source_id: s_ZygqL3tGcDtvEtKWxMQ4cC
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

# 王賜履

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賜履 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賜履（CBDB 640325）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640325&o=json)
