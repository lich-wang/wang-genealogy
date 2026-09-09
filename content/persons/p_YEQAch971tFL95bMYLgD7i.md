---
schema: wang-person/v1
id: p_YEQAch971tFL95bMYLgD7i
status: active
merged_into: null
display_name: 王松年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RMhkXo635KJ6gN9M4b714g
        subject_person_id: p_YEQAch971tFL95bMYLgD7i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xy2EEHhrcXG3pATrdLDoi8
          claim_id: c_RMhkXo635KJ6gN9M4b714g
          source_id: s_SohVX6xJxKz6kSK6tENSSc
          stance: supports
          locator: CBDB:61506
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61506）
          source: &a1
            id: s_SohVX6xJxKz6kSK6tENSSc
            source_type: api_record
            title: 中国历代人物传记资料库：王松年（CBDB 61506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61506&o=json
            external_identifier: CBDB:61506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.906Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yocyw6H4jRBWh9Hu6zjMMd
        subject_person_id: p_YEQAch971tFL95bMYLgD7i
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1768年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3BUaAyy4ZBwRtes9465eXY
          claim_id: c_yocyw6H4jRBWh9Hu6zjMMd
          source_id: s_SohVX6xJxKz6kSK6tENSSc
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
        id: c_EEZ3sWH2KH1ZQ7XJ1AfwGg
        subject_person_id: p_YEQAch971tFL95bMYLgD7i
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1827年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L9V3Xi8392BSGf5i5yAFAB
          claim_id: c_EEZ3sWH2KH1ZQ7XJ1AfwGg
          source_id: s_SohVX6xJxKz6kSK6tENSSc
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
        id: c_y9vFGZQ7jL7EWqjCK8DEwd
        subject_person_id: p_YEQAch971tFL95bMYLgD7i
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
        - id: cs_NvMP8bKSDpy9PvKQCRyHj2
          claim_id: c_y9vFGZQ7jL7EWqjCK8DEwd
          source_id: s_SohVX6xJxKz6kSK6tENSSc
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

# 王松年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王松年 | accepted |
| birth.date | 1768年 | accepted |
| death.date | 1827年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王松年（CBDB 61506）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61506&o=json)
