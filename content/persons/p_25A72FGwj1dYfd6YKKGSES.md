---
schema: wang-person/v1
id: p_25A72FGwj1dYfd6YKKGSES
status: active
merged_into: null
display_name: 王思作
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9MVJEt8W5RaC2bhXs6sKe3
        subject_person_id: p_25A72FGwj1dYfd6YKKGSES
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思作
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xzNpr2VwWwVt79LKBUuUsX
          claim_id: c_9MVJEt8W5RaC2bhXs6sKe3
          source_id: s_2ARfYeXoeCpFPYk6U53Eiw
          stance: supports
          locator: CBDB:637793
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637793）
          source: &a1
            id: s_2ARfYeXoeCpFPYk6U53Eiw
            source_type: api_record
            title: 中国历代人物传记资料库：王思作（CBDB 637793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637793&o=json
            external_identifier: CBDB:637793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.423Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xhyBvLamH8NQGLmmQYP9FM
        subject_person_id: p_25A72FGwj1dYfd6YKKGSES
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
        - id: cs_CP6kVx8LCLmyoUgP6eyo8K
          claim_id: c_xhyBvLamH8NQGLmmQYP9FM
          source_id: s_2ARfYeXoeCpFPYk6U53Eiw
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

# 王思作

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思作 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思作（CBDB 637793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637793&o=json)
