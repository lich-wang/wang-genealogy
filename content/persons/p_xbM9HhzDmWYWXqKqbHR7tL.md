---
schema: wang-person/v1
id: p_xbM9HhzDmWYWXqKqbHR7tL
status: active
merged_into: null
display_name: 王鼎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dtH8u1uhx6QvFuwPyLcKrz
        subject_person_id: p_xbM9HhzDmWYWXqKqbHR7tL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XyeKoRPH8gAk3icijVqL59
          claim_id: c_dtH8u1uhx6QvFuwPyLcKrz
          source_id: s_a9odrGc15dLEnVSkfJxM51
          stance: supports
          locator: CBDB:67762
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67762）
          source: &a1
            id: s_a9odrGc15dLEnVSkfJxM51
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 67762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67762&o=json
            external_identifier: CBDB:67762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.013Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8LRDBuqveN1eReTCsrUmLY
        subject_person_id: p_xbM9HhzDmWYWXqKqbHR7tL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1517年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DQJCgh3K4Es1wy4ApPKtyP
          claim_id: c_8LRDBuqveN1eReTCsrUmLY
          source_id: s_a9odrGc15dLEnVSkfJxM51
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
        id: c_5yVK2atwaeonQaGCsNi9sQ
        subject_person_id: p_xbM9HhzDmWYWXqKqbHR7tL
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
        - id: cs_QxR71SKTwy9KQondPkWcdR
          claim_id: c_5yVK2atwaeonQaGCsNi9sQ
          source_id: s_a9odrGc15dLEnVSkfJxM51
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

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| death.date | 1517年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 67762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67762&o=json)
