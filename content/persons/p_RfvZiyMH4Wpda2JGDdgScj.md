---
schema: wang-person/v1
id: p_RfvZiyMH4Wpda2JGDdgScj
status: active
merged_into: null
display_name: 王休明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N7EkHA5fqrsQHdv7kSWexj
        subject_person_id: p_RfvZiyMH4Wpda2JGDdgScj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王休明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4EjpDrEn7hcCnAaAxLwb5H
          claim_id: c_N7EkHA5fqrsQHdv7kSWexj
          source_id: s_gY5WcXJkA4cY5BiXnmJXJc
          stance: supports
          locator: CBDB:175670
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175670）
          source: &a1
            id: s_gY5WcXJkA4cY5BiXnmJXJc
            source_type: api_record
            title: 中国历代人物传记资料库：王休明（CBDB 175670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175670&o=json
            external_identifier: CBDB:175670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.243Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_r2o7FCrRCwYYA8MnuH5XHy
        subject_person_id: p_RfvZiyMH4Wpda2JGDdgScj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 700年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aaaXyCG5z8JTYabM5Ri7xU
          claim_id: c_r2o7FCrRCwYYA8MnuH5XHy
          source_id: s_gY5WcXJkA4cY5BiXnmJXJc
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
        id: c_chee2CTBRCesKJDzKPKWPP
        subject_person_id: p_RfvZiyMH4Wpda2JGDdgScj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tDqkGhUfe2knLfUcLVhCB9
          claim_id: c_chee2CTBRCesKJDzKPKWPP
          source_id: s_gY5WcXJkA4cY5BiXnmJXJc
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

# 王休明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王休明 | accepted |
| death.date | 700年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王休明（CBDB 175670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175670&o=json)
