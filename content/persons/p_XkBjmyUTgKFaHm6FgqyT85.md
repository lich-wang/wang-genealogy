---
schema: wang-person/v1
id: p_XkBjmyUTgKFaHm6FgqyT85
status: active
merged_into: null
display_name: 王瓆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LGC3LNMtszeNG79q1znShW
        subject_person_id: p_XkBjmyUTgKFaHm6FgqyT85
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1vSDcnj4p9kAiHhXEXTqv2
          claim_id: c_LGC3LNMtszeNG79q1znShW
          source_id: s_n7g9NHYsGRmK1qTitB18eN
          stance: supports
          locator: CBDB:341892
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341892）
          source: &a1
            id: s_n7g9NHYsGRmK1qTitB18eN
            source_type: api_record
            title: 中国历代人物传记资料库：王瓆（CBDB 341892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341892&o=json
            external_identifier: CBDB:341892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.754Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6iiLcAsLGCkhTUKF3wCQDj
        subject_person_id: p_XkBjmyUTgKFaHm6FgqyT85
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
        - id: cs_NyF2d9GL5iZNLdGGAT6jNL
          claim_id: c_6iiLcAsLGCkhTUKF3wCQDj
          source_id: s_n7g9NHYsGRmK1qTitB18eN
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

# 王瓆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓆 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓆（CBDB 341892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341892&o=json)
