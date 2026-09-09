---
schema: wang-person/v1
id: p_sqPi8V4BGPbYo24jmrKPsg
status: active
merged_into: null
display_name: 王庚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ma31HaaywKzp2b7nBf7N3A
        subject_person_id: p_sqPi8V4BGPbYo24jmrKPsg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xVqvfVyMKKdE114vxdzvtm
          claim_id: c_ma31HaaywKzp2b7nBf7N3A
          source_id: s_LwLNn1pa3xBJsNRXBBcNgw
          stance: supports
          locator: CBDB:71108
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71108）
          source: &a1
            id: s_LwLNn1pa3xBJsNRXBBcNgw
            source_type: api_record
            title: 中国历代人物传记资料库：王庚（CBDB 71108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71108&o=json
            external_identifier: CBDB:71108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.378Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LKYD58wg6syU9J3aFGszfK
        subject_person_id: p_sqPi8V4BGPbYo24jmrKPsg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1763年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8zCtgD3ym6FnCNMTwSPxWY
          claim_id: c_LKYD58wg6syU9J3aFGszfK
          source_id: s_LwLNn1pa3xBJsNRXBBcNgw
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
        id: c_YUhHJSjnLgQKQMV3qD4CjR
        subject_person_id: p_sqPi8V4BGPbYo24jmrKPsg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1840年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UNqpas7vAhXVArnDkExaod
          claim_id: c_YUhHJSjnLgQKQMV3qD4CjR
          source_id: s_LwLNn1pa3xBJsNRXBBcNgw
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
        id: c_1o8L7zqHwoQNJ6eLL6rfbW
        subject_person_id: p_sqPi8V4BGPbYo24jmrKPsg
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
        - id: cs_9hWxHSVzHNuqXDu6zKoKeB
          claim_id: c_1o8L7zqHwoQNJ6eLL6rfbW
          source_id: s_LwLNn1pa3xBJsNRXBBcNgw
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

# 王庚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庚 | accepted |
| birth.date | 1763年 | accepted |
| death.date | 1840年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庚（CBDB 71108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71108&o=json)
