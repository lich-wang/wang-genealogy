---
schema: wang-person/v1
id: p_a7PzTB24Dk3ftKpzN5ub1N
status: active
merged_into: null
display_name: 王福濟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2T1DZu6MK8rdGuP7QXka1v
        subject_person_id: p_a7PzTB24Dk3ftKpzN5ub1N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SS9WWeDxXyUaLAJqBmx8LY
          claim_id: c_2T1DZu6MK8rdGuP7QXka1v
          source_id: s_NpKwo1XfZmujc4XjkgHk8v
          stance: supports
          locator: CBDB:491577
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（491577）
          source: &a1
            id: s_NpKwo1XfZmujc4XjkgHk8v
            source_type: api_record
            title: 中国历代人物传记资料库：王福濟（CBDB 491577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491577&o=json
            external_identifier: CBDB:491577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.199Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UeFCGGQa2qGDGpQmY4HJQu
        subject_person_id: p_a7PzTB24Dk3ftKpzN5ub1N
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
        - id: cs_4VjoUw5fb4JHzHoA5MqSQa
          claim_id: c_UeFCGGQa2qGDGpQmY4HJQu
          source_id: s_NpKwo1XfZmujc4XjkgHk8v
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

# 王福濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福濟 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福濟（CBDB 491577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491577&o=json)
