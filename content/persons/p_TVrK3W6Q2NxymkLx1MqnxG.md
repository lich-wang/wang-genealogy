---
schema: wang-person/v1
id: p_TVrK3W6Q2NxymkLx1MqnxG
status: active
merged_into: null
display_name: 王桂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8HVHzy5eaamz5qRrwB7Jab
        subject_person_id: p_TVrK3W6Q2NxymkLx1MqnxG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JJoS1c7EHXDPDbREr5WRNQ
          claim_id: c_8HVHzy5eaamz5qRrwB7Jab
          source_id: s_2f8RogDo32hsQjHwT5hJGQ
          stance: supports
          locator: CBDB:71156
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71156）
          source: &a1
            id: s_2f8RogDo32hsQjHwT5hJGQ
            source_type: api_record
            title: 中国历代人物传记资料库：王桂（CBDB 71156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71156&o=json
            external_identifier: CBDB:71156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.438Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_q2zt1tcbvSxbJpBBgrBsz8
        subject_person_id: p_TVrK3W6Q2NxymkLx1MqnxG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1794年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kCTfdTww3kkuDBorQ5zF16
          claim_id: c_q2zt1tcbvSxbJpBBgrBsz8
          source_id: s_2f8RogDo32hsQjHwT5hJGQ
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
        id: c_Z6T3b4sMQuy8YgGZ1eki5X
        subject_person_id: p_TVrK3W6Q2NxymkLx1MqnxG
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
        - id: cs_FVH2UVdN2duy7RwAbwyCWb
          claim_id: c_Z6T3b4sMQuy8YgGZ1eki5X
          source_id: s_2f8RogDo32hsQjHwT5hJGQ
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

# 王桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桂 | accepted |
| birth.date | 1794年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王桂（CBDB 71156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71156&o=json)
