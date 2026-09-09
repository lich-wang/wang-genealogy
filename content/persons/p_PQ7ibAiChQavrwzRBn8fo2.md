---
schema: wang-person/v1
id: p_PQ7ibAiChQavrwzRBn8fo2
status: active
merged_into: null
display_name: 王鴻誥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KQw8qC26P3E24nygL6qYvp
        subject_person_id: p_PQ7ibAiChQavrwzRBn8fo2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻誥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uB3GzbeoifkKDRUkBa9T5A
          claim_id: c_KQw8qC26P3E24nygL6qYvp
          source_id: s_zCjG5MN9PR6ASVjA869pam
          stance: supports
          locator: CBDB:342784
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342784）
          source: &a1
            id: s_zCjG5MN9PR6ASVjA869pam
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻誥（CBDB 342784）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342784&o=json
            external_identifier: CBDB:342784
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.060Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QWyN89uZEsVXJsEiVh8mq7
        subject_person_id: p_PQ7ibAiChQavrwzRBn8fo2
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
        - id: cs_j6qc6i8xgZn8Ank5F9bMVo
          claim_id: c_QWyN89uZEsVXJsEiVh8mq7
          source_id: s_zCjG5MN9PR6ASVjA869pam
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

# 王鴻誥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鴻誥 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鴻誥（CBDB 342784）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342784&o=json)
