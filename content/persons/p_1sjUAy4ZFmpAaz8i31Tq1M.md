---
schema: wang-person/v1
id: p_1sjUAy4ZFmpAaz8i31Tq1M
status: active
merged_into: null
display_name: 王經
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NVDk74qjEEPkHXuicG9PQc
        subject_person_id: p_1sjUAy4ZFmpAaz8i31Tq1M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S9axD4i6b7u62GXJJvNS2Z
          claim_id: c_NVDk74qjEEPkHXuicG9PQc
          source_id: s_MvFzD382ZYQYtWLRnSS8Qo
          stance: supports
          locator: CBDB:492699
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（492699）
          source: &a1
            id: s_MvFzD382ZYQYtWLRnSS8Qo
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 492699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492699&o=json
            external_identifier: CBDB:492699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.321Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N9veesbJczQHfLKs8KV65U
        subject_person_id: p_1sjUAy4ZFmpAaz8i31Tq1M
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
        - id: cs_PRuXXveMowASh5MYKAM2Ft
          claim_id: c_N9veesbJczQHfLKs8KV65U
          source_id: s_MvFzD382ZYQYtWLRnSS8Qo
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

# 王經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王經 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王經（CBDB 492699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492699&o=json)
