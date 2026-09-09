---
schema: wang-person/v1
id: p_MotUCV7LWbDxbppZF6LmgZ
status: active
merged_into: null
display_name: 王有壬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5VTU6BTHGfcPDiYt7oGETT
        subject_person_id: p_MotUCV7LWbDxbppZF6LmgZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有壬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7PLe3HsAbtn4xfEakQP4UT
          claim_id: c_5VTU6BTHGfcPDiYt7oGETT
          source_id: s_DVovwMSu5uHb8nqB4fsLnG
          stance: supports
          locator: CBDB:126512
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126512）
          source: &a1
            id: s_DVovwMSu5uHb8nqB4fsLnG
            source_type: api_record
            title: 中国历代人物传记资料库：王有壬（CBDB 126512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126512&o=json
            external_identifier: CBDB:126512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.991Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7E4NkUziQNdwUq6xwMjoNz
        subject_person_id: p_MotUCV7LWbDxbppZF6LmgZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1518年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZMAQLVX4N2xnXoUQbuTV86
          claim_id: c_7E4NkUziQNdwUq6xwMjoNz
          source_id: s_DVovwMSu5uHb8nqB4fsLnG
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
        id: c_H1fWo3DAG7NTEsZjtZuvS7
        subject_person_id: p_MotUCV7LWbDxbppZF6LmgZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1583年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WUjnEfifQ71cuzHv9QKqdF
          claim_id: c_H1fWo3DAG7NTEsZjtZuvS7
          source_id: s_DVovwMSu5uHb8nqB4fsLnG
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
        id: c_kLu2nSQk53Za79QevfUDGJ
        subject_person_id: p_MotUCV7LWbDxbppZF6LmgZ
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
        - id: cs_sGs7Te57ybfeTZNmwVfiqN
          claim_id: c_kLu2nSQk53Za79QevfUDGJ
          source_id: s_DVovwMSu5uHb8nqB4fsLnG
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

# 王有壬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有壬 | accepted |
| birth.date | 1518年 | accepted |
| death.date | 1583年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有壬（CBDB 126512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126512&o=json)
