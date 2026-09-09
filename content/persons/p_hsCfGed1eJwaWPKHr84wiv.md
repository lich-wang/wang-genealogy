---
schema: wang-person/v1
id: p_hsCfGed1eJwaWPKHr84wiv
status: active
merged_into: null
display_name: 王守信
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ee121G1r4UHMhFq1DCuUDX
        subject_person_id: p_hsCfGed1eJwaWPKHr84wiv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TXrxVa2BHxETN5Su7B2eyo
          claim_id: c_ee121G1r4UHMhFq1DCuUDX
          source_id: s_hjsThpWX2ewVPmTQK5w69a
          stance: supports
          locator: CBDB:119745
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（119745）
          source: &a1
            id: s_hjsThpWX2ewVPmTQK5w69a
            source_type: api_record
            title: 中国历代人物传记资料库：王守信（CBDB 119745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119745&o=json
            external_identifier: CBDB:119745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yf8888cW6GPUm6EES45MeX
        subject_person_id: p_hsCfGed1eJwaWPKHr84wiv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kdtLM4b2eb5zJMHKgsVicN
          claim_id: c_yf8888cW6GPUm6EES45MeX
          source_id: s_hjsThpWX2ewVPmTQK5w69a
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

# 王守信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守信 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守信（CBDB 119745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119745&o=json)
