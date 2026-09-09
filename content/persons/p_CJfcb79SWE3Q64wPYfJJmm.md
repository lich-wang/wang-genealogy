---
schema: wang-person/v1
id: p_CJfcb79SWE3Q64wPYfJJmm
status: active
merged_into: null
display_name: 王鈺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NdE9L4aEeqWnQRQGMDvqPt
        subject_person_id: p_CJfcb79SWE3Q64wPYfJJmm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DjjmAUExRDEhbeWWEYH6bp
          claim_id: c_NdE9L4aEeqWnQRQGMDvqPt
          source_id: s_vy2yKLMj4NA3zt32rYtxvX
          stance: supports
          locator: CBDB:221658
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221658）
          source: &a1
            id: s_vy2yKLMj4NA3zt32rYtxvX
            source_type: api_record
            title: 中国历代人物传记资料库：王鈺（CBDB 221658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221658&o=json
            external_identifier: CBDB:221658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.324Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K6To5mF6NGdVxECEBZqQnL
        subject_person_id: p_CJfcb79SWE3Q64wPYfJJmm
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
        - id: cs_6xxnZXCGWD9j1g4EkJDJa4
          claim_id: c_K6To5mF6NGdVxECEBZqQnL
          source_id: s_vy2yKLMj4NA3zt32rYtxvX
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

# 王鈺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鈺 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鈺（CBDB 221658）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221658&o=json)
