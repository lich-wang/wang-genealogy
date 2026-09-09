---
schema: wang-person/v1
id: p_WSxqscNRKPRdaJc2ZEcAPF
status: active
merged_into: null
display_name: 王宗文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NazLGn98qdLW7s2cia23XX
        subject_person_id: p_WSxqscNRKPRdaJc2ZEcAPF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W86PNGmQY1gFA9n3Gtj1oF
          claim_id: c_NazLGn98qdLW7s2cia23XX
          source_id: s_B5tup8wjBKVd4KP3pYeALo
          stance: supports
          locator: CBDB:317699
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317699）
          source: &a1
            id: s_B5tup8wjBKVd4KP3pYeALo
            source_type: api_record
            title: 中国历代人物传记资料库：王宗文（CBDB 317699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317699&o=json
            external_identifier: CBDB:317699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.980Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7hyqPQJHdfo4VQkDfzaHKa
        subject_person_id: p_WSxqscNRKPRdaJc2ZEcAPF
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
        - id: cs_xLky36hNDuC8nR5ErE6cMQ
          claim_id: c_7hyqPQJHdfo4VQkDfzaHKa
          source_id: s_B5tup8wjBKVd4KP3pYeALo
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

# 王宗文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗文 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗文（CBDB 317699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317699&o=json)
