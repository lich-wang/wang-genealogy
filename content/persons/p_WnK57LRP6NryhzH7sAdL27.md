---
schema: wang-person/v1
id: p_WnK57LRP6NryhzH7sAdL27
status: active
merged_into: null
display_name: 王球琳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DuQaYpM69fHRyiyMP85viK
        subject_person_id: p_WnK57LRP6NryhzH7sAdL27
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王球琳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MR5YXfHy6tU7hGTXfMLT9C
          claim_id: c_DuQaYpM69fHRyiyMP85viK
          source_id: s_FKgLz1m8N9iN99TjRMmERD
          stance: supports
          locator: CBDB:639403
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639403）
          source: &a1
            id: s_FKgLz1m8N9iN99TjRMmERD
            source_type: api_record
            title: 中国历代人物传记资料库：王球琳（CBDB 639403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639403&o=json
            external_identifier: CBDB:639403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.932Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KdFfuYMwif2ukPgVW9qSGJ
        subject_person_id: p_WnK57LRP6NryhzH7sAdL27
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
        - id: cs_89oP4o2QnKRsTP5dfQF4ES
          claim_id: c_KdFfuYMwif2ukPgVW9qSGJ
          source_id: s_FKgLz1m8N9iN99TjRMmERD
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

# 王球琳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王球琳 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王球琳（CBDB 639403）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639403&o=json)
