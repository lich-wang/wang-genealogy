---
schema: wang-person/v1
id: p_x8mQMeJnHp1fPict2xPV7L
status: active
merged_into: null
display_name: 王中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uxgdaexiPEEdurZmjkUE7A
        subject_person_id: p_x8mQMeJnHp1fPict2xPV7L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4sjR7vv6g3AJ9nzSHTxHUj
          claim_id: c_uxgdaexiPEEdurZmjkUE7A
          source_id: s_8QTQSnfdxP8A23vs42VSsj
          stance: supports
          locator: CBDB:200448
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200448）
          source: &a1
            id: s_8QTQSnfdxP8A23vs42VSsj
            source_type: api_record
            title: 中国历代人物传记资料库：王中（CBDB 200448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200448&o=json
            external_identifier: CBDB:200448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.614Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4TDYKsz9Ht6U5fH8wHTLwQ
        subject_person_id: p_x8mQMeJnHp1fPict2xPV7L
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1443年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1i5WCztiXPwA9GKgpwabei
          claim_id: c_4TDYKsz9Ht6U5fH8wHTLwQ
          source_id: s_8QTQSnfdxP8A23vs42VSsj
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
        id: c_MLDT3zwGXRqCfHb588JUWr
        subject_person_id: p_x8mQMeJnHp1fPict2xPV7L
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
        - id: cs_4QZdcs5PLuMWKRDQP7VGWK
          claim_id: c_MLDT3zwGXRqCfHb588JUWr
          source_id: s_8QTQSnfdxP8A23vs42VSsj
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

# 王中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王中 | accepted |
| birth.date | 1443年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王中（CBDB 200448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200448&o=json)
