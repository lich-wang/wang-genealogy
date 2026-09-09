---
schema: wang-person/v1
id: p_d7R3q8ehACY3umzF8wb5E2
status: active
merged_into: null
display_name: 王蕙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kmEHdC9qqU7JBqe6yexEJ8
        subject_person_id: p_d7R3q8ehACY3umzF8wb5E2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蕙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zPa4u8k6B8J6WB1Q1ZG6eL
          claim_id: c_kmEHdC9qqU7JBqe6yexEJ8
          source_id: s_uRMQ5WKaLmqPdZnnvcUSFB
          stance: supports
          locator: CBDB:490535
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（490535）
          source: &a1
            id: s_uRMQ5WKaLmqPdZnnvcUSFB
            source_type: api_record
            title: 中国历代人物传记资料库：王蕙（CBDB 490535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490535&o=json
            external_identifier: CBDB:490535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.119Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1d1q7uJArJ2Sv5nQxviYBF
        subject_person_id: p_d7R3q8ehACY3umzF8wb5E2
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
        - id: cs_4kZjJLw89c17sCGyCCok4V
          claim_id: c_1d1q7uJArJ2Sv5nQxviYBF
          source_id: s_uRMQ5WKaLmqPdZnnvcUSFB
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

# 王蕙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蕙 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蕙（CBDB 490535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490535&o=json)
