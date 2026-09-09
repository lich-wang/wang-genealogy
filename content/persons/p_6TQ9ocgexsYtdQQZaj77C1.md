---
schema: wang-person/v1
id: p_6TQ9ocgexsYtdQQZaj77C1
status: active
merged_into: null
display_name: 王鐵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GCkMDQEGKWTFH7qkepDpxG
        subject_person_id: p_6TQ9ocgexsYtdQQZaj77C1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cUj9u4HRTqCysY8twVL65z
          claim_id: c_GCkMDQEGKWTFH7qkepDpxG
          source_id: s_ihN12o4xBzD1QDvPQYDD5v
          stance: supports
          locator: CBDB:267898
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267898）
          source: &a1
            id: s_ihN12o4xBzD1QDvPQYDD5v
            source_type: api_record
            title: 中国历代人物传记资料库：王鐵（CBDB 267898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267898&o=json
            external_identifier: CBDB:267898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.792Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_78sQU4cCaE42xLiexghPa7
        subject_person_id: p_6TQ9ocgexsYtdQQZaj77C1
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
        - id: cs_gBKDnPHyoX7zhQeMF3GXnX
          claim_id: c_78sQU4cCaE42xLiexghPa7
          source_id: s_ihN12o4xBzD1QDvPQYDD5v
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

# 王鐵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐵 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鐵（CBDB 267898）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267898&o=json)
