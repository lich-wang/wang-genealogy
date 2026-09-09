---
schema: wang-person/v1
id: p_1wWHhQNZgJfD93CSbaMxHB
status: active
merged_into: null
display_name: 王峻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kQ2Cu92ywfeTE4vTzAGxWN
        subject_person_id: p_1wWHhQNZgJfD93CSbaMxHB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王峻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FkTpxjoJEVgy7JHi9hZ65r
          claim_id: c_kQ2Cu92ywfeTE4vTzAGxWN
          source_id: s_pA7sXebaPic8P156EP379D
          stance: supports
          locator: CBDB:331573
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331573）
          source: &a1
            id: s_pA7sXebaPic8P156EP379D
            source_type: api_record
            title: 中国历代人物传记资料库：王峻（CBDB 331573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331573&o=json
            external_identifier: CBDB:331573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.367Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UdffgF6bwYXju1uCrMTHRR
        subject_person_id: p_1wWHhQNZgJfD93CSbaMxHB
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
        - id: cs_hFz7CzbPYYjn9sBjFVCTtS
          claim_id: c_UdffgF6bwYXju1uCrMTHRR
          source_id: s_pA7sXebaPic8P156EP379D
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

# 王峻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王峻 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王峻（CBDB 331573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331573&o=json)
