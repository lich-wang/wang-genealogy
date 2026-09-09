---
schema: wang-person/v1
id: p_15Nh8Xnsw6Q2WxxXdtixbY
status: active
merged_into: null
display_name: 王宥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5WqNnF3Zf3WByKPjDgxb9F
        subject_person_id: p_15Nh8Xnsw6Q2WxxXdtixbY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kfdckzkCVw6fJGge2xoHnB
          claim_id: c_5WqNnF3Zf3WByKPjDgxb9F
          source_id: s_qEvCQcQFP2htwCq8xnWiJs
          stance: supports
          locator: CBDB:200225
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200225）
          source: &a1
            id: s_qEvCQcQFP2htwCq8xnWiJs
            source_type: api_record
            title: 中国历代人物传记资料库：王宥（CBDB 200225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200225&o=json
            external_identifier: CBDB:200225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.596Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UReP9KKgoUG2JUZpcEjPkM
        subject_person_id: p_15Nh8Xnsw6Q2WxxXdtixbY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1451年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4qdEBUJkNF31bKDhBviB3p
          claim_id: c_UReP9KKgoUG2JUZpcEjPkM
          source_id: s_qEvCQcQFP2htwCq8xnWiJs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uURwbeE9pnVQw5UzuMkNip
        subject_person_id: p_15Nh8Xnsw6Q2WxxXdtixbY
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
        - id: cs_DAcJBdKoyhYZhVnELjVAEJ
          claim_id: c_uURwbeE9pnVQw5UzuMkNip
          source_id: s_qEvCQcQFP2htwCq8xnWiJs
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

# 王宥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宥 | accepted |
| birth.date | 1451年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宥（CBDB 200225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200225&o=json)
