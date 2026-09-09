---
schema: wang-person/v1
id: p_zvYqWNMJKCVa18yDYFc9di
status: active
merged_into: null
display_name: 王武陵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T3WaG4EwQiURxYZr6gN6FN
        subject_person_id: p_zvYqWNMJKCVa18yDYFc9di
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王武陵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pwvMQxaS8dNDZy5BxmKGmc
          claim_id: c_T3WaG4EwQiURxYZr6gN6FN
          source_id: s_uymUBWkVJrAcyYBy9HJ4TH
          stance: supports
          locator: CBDB:445461
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445461）
          source: &a1
            id: s_uymUBWkVJrAcyYBy9HJ4TH
            source_type: api_record
            title: 中国历代人物传记资料库：王武陵（CBDB 445461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445461&o=json
            external_identifier: CBDB:445461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.137Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8p33ynbxXceSKoq6AeD7qp
        subject_person_id: p_zvYqWNMJKCVa18yDYFc9di
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
        - id: cs_71fgfQdy3MQW1rsYj4R4gE
          claim_id: c_8p33ynbxXceSKoq6AeD7qp
          source_id: s_uymUBWkVJrAcyYBy9HJ4TH
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

# 王武陵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王武陵 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王武陵（CBDB 445461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445461&o=json)
