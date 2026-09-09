---
schema: wang-person/v1
id: p_V9QKcTYsGLGHAFrr3NSPCM
status: active
merged_into: null
display_name: 王維垣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iLUpq5aXR4woQPBa2E86fX
        subject_person_id: p_V9QKcTYsGLGHAFrr3NSPCM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維垣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z9mHjQH46R1bZvrFEkJmMF
          claim_id: c_iLUpq5aXR4woQPBa2E86fX
          source_id: s_bqw72Vmj3S5FpbYTK2TZJZ
          stance: supports
          locator: CBDB:455328
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（455328）
          source: &a1
            id: s_bqw72Vmj3S5FpbYTK2TZJZ
            source_type: api_record
            title: 中国历代人物传记资料库：王維垣（CBDB 455328）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=455328&o=json
            external_identifier: CBDB:455328
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.514Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BWb7mMp9MquWUR7Dh3Kc5N
        subject_person_id: p_V9QKcTYsGLGHAFrr3NSPCM
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
        - id: cs_p3s2GVQBEt49Rz4Y1Duk2P
          claim_id: c_BWb7mMp9MquWUR7Dh3Kc5N
          source_id: s_bqw72Vmj3S5FpbYTK2TZJZ
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

# 王維垣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維垣 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維垣（CBDB 455328）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=455328&o=json)
