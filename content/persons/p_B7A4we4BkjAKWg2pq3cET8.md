---
schema: wang-person/v1
id: p_B7A4we4BkjAKWg2pq3cET8
status: active
merged_into: null
display_name: 王鎮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9adoCaLHqJwcXcmr8AHTCE
        subject_person_id: p_B7A4we4BkjAKWg2pq3cET8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ScnFaABiqkJM7ubh5idUUz
          claim_id: c_9adoCaLHqJwcXcmr8AHTCE
          source_id: s_415CBBqm8Qs2MTWD2G4YR4
          stance: supports
          locator: CBDB:61557
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61557）
          source: &a1
            id: s_415CBBqm8Qs2MTWD2G4YR4
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 61557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61557&o=json
            external_identifier: CBDB:61557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.910Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qc6L343kLrZ2ZZ4PBGNZBS
        subject_person_id: p_B7A4we4BkjAKWg2pq3cET8
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
        - id: cs_s64K2UmwNcHzVG3hV3PJqe
          claim_id: c_qc6L343kLrZ2ZZ4PBGNZBS
          source_id: s_415CBBqm8Qs2MTWD2G4YR4
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

# 王鎮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎮 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎮（CBDB 61557）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61557&o=json)
