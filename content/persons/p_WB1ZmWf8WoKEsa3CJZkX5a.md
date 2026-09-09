---
schema: wang-person/v1
id: p_WB1ZmWf8WoKEsa3CJZkX5a
status: active
merged_into: null
display_name: 王家嶼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gDz4NqY3obnGg73KmrUZfc
        subject_person_id: p_WB1ZmWf8WoKEsa3CJZkX5a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家嶼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_htJ23VrKytsCcjqdMjj4qL
          claim_id: c_gDz4NqY3obnGg73KmrUZfc
          source_id: s_EyQgg5TmyEZ9ZroAvZKu72
          stance: supports
          locator: CBDB:637172
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637172）
          source: &a1
            id: s_EyQgg5TmyEZ9ZroAvZKu72
            source_type: api_record
            title: 中国历代人物传记资料库：王家嶼（CBDB 637172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637172&o=json
            external_identifier: CBDB:637172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.224Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_szL8vKbZFiMfUUj17qqGeg
        subject_person_id: p_WB1ZmWf8WoKEsa3CJZkX5a
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
        - id: cs_9bQHy3ChpsK5WKDDo3bBSP
          claim_id: c_szL8vKbZFiMfUUj17qqGeg
          source_id: s_EyQgg5TmyEZ9ZroAvZKu72
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

# 王家嶼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家嶼 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家嶼（CBDB 637172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637172&o=json)
