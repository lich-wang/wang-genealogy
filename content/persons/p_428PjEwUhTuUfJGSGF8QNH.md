---
schema: wang-person/v1
id: p_428PjEwUhTuUfJGSGF8QNH
status: active
merged_into: null
display_name: 王衛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yy3PmR3cWsNQAKuzWSh2H3
        subject_person_id: p_428PjEwUhTuUfJGSGF8QNH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T6Ez9TMtGfQ63NV3bfjEBJ
          claim_id: c_yy3PmR3cWsNQAKuzWSh2H3
          source_id: s_D7vF6kfVJqY7MkptHdktMi
          stance: supports
          locator: CBDB:37428
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37428）
          source: &a1
            id: s_D7vF6kfVJqY7MkptHdktMi
            source_type: api_record
            title: 中国历代人物传记资料库：王衛（CBDB 37428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37428&o=json
            external_identifier: CBDB:37428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.202Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VzFr5HvtTqBzM53QR4hk9e
        subject_person_id: p_428PjEwUhTuUfJGSGF8QNH
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
        - id: cs_2C6XN6GatsWqbHaUg4X2u1
          claim_id: c_VzFr5HvtTqBzM53QR4hk9e
          source_id: s_D7vF6kfVJqY7MkptHdktMi
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

# 王衛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衛 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王衛（CBDB 37428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37428&o=json)
