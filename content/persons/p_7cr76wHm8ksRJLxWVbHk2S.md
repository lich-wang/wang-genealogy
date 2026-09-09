---
schema: wang-person/v1
id: p_7cr76wHm8ksRJLxWVbHk2S
status: active
merged_into: null
display_name: 王昶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4E63oB3ZTnVjUS9wuv9HJ9
        subject_person_id: p_7cr76wHm8ksRJLxWVbHk2S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5ADHt2APYwBowAvGAy3G9P
          claim_id: c_4E63oB3ZTnVjUS9wuv9HJ9
          source_id: s_MrePoiEfK9RXt3zdLFVwLo
          stance: supports
          locator: CBDB:322129
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（322129）
          source: &a1
            id: s_MrePoiEfK9RXt3zdLFVwLo
            source_type: api_record
            title: 中国历代人物传记资料库：王昶（CBDB 322129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322129&o=json
            external_identifier: CBDB:322129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.106Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3n7vKdNkXfUeD6JWe66d9m
        subject_person_id: p_7cr76wHm8ksRJLxWVbHk2S
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
        - id: cs_gUmLPuMy14tHej4hAHG4Zz
          claim_id: c_3n7vKdNkXfUeD6JWe66d9m
          source_id: s_MrePoiEfK9RXt3zdLFVwLo
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

# 王昶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昶 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昶（CBDB 322129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322129&o=json)
