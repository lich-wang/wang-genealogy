---
schema: wang-person/v1
id: p_6yrq6jFG6J4n2UoBg6vi4D
status: active
merged_into: null
display_name: 王政
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dQyjwAXrFzJjDQmjQGbSsu
        subject_person_id: p_6yrq6jFG6J4n2UoBg6vi4D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QsWvFUy57NtLEQUxUcBKaw
          claim_id: c_dQyjwAXrFzJjDQmjQGbSsu
          source_id: s_133xNi4rHTqjWJjqNMQJTY
          stance: supports
          locator: CBDB:117587
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（117587）
          source: &a1
            id: s_133xNi4rHTqjWJjqNMQJTY
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 117587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117587&o=json
            external_identifier: CBDB:117587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.865Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uCA8c9LSDfkn9nfA1HC7xY
        subject_person_id: p_6yrq6jFG6J4n2UoBg6vi4D
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1200年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fh331bJK7pj9Jrv8TtNujV
          claim_id: c_uCA8c9LSDfkn9nfA1HC7xY
          source_id: s_133xNi4rHTqjWJjqNMQJTY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_h6d5jj9nbXDm665FFZ29jL
        subject_person_id: p_6yrq6jFG6J4n2UoBg6vi4D
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1270年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A5Gon2EcmRitzkhxvv1fBY
          claim_id: c_h6d5jj9nbXDm665FFZ29jL
          source_id: s_133xNi4rHTqjWJjqNMQJTY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8wnLag8D2KVySdyXUMWSy1
        subject_person_id: p_6yrq6jFG6J4n2UoBg6vi4D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ribqMBnDiALaRBx96XFkvq
          claim_id: c_8wnLag8D2KVySdyXUMWSy1
          source_id: s_133xNi4rHTqjWJjqNMQJTY
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

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| birth.date | 1200年 | accepted |
| death.date | 1270年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王政（CBDB 117587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117587&o=json)
