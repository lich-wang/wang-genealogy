---
schema: wang-person/v1
id: p_bZKd1CKrcP1yMeU33Bezfa
status: active
merged_into: null
display_name: 王景旦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AQKtwfK72F1o8gspbA1tHh
        subject_person_id: p_bZKd1CKrcP1yMeU33Bezfa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景旦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t7CVKUTWX8N2KukqojKf8S
          claim_id: c_AQKtwfK72F1o8gspbA1tHh
          source_id: s_WdNNKZLzDdBDAxK9ug8Rvr
          stance: supports
          locator: CBDB:550844
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（550844）
          source: &a1
            id: s_WdNNKZLzDdBDAxK9ug8Rvr
            source_type: api_record
            title: 中国历代人物传记资料库：王景旦（CBDB 550844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550844&o=json
            external_identifier: CBDB:550844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.502Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W4Hiy4waRMQqYbyPP8ZLBy
        subject_person_id: p_bZKd1CKrcP1yMeU33Bezfa
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
        - id: cs_ot4HZX6zpG8KQj2Vnmjjwf
          claim_id: c_W4Hiy4waRMQqYbyPP8ZLBy
          source_id: s_WdNNKZLzDdBDAxK9ug8Rvr
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

# 王景旦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景旦 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景旦（CBDB 550844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550844&o=json)
