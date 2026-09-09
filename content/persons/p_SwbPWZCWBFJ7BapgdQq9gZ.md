---
schema: wang-person/v1
id: p_SwbPWZCWBFJ7BapgdQq9gZ
status: active
merged_into: null
display_name: 王安禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jbPuUdV9TM6SYmiKQ3XmHa
        subject_person_id: p_SwbPWZCWBFJ7BapgdQq9gZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ukXCqvrX75ikcYGriJ9Z2U
          claim_id: c_jbPuUdV9TM6SYmiKQ3XmHa
          source_id: s_t2HLpo6oXpQF9ZgbNS8Jpd
          stance: supports
          locator: CBDB:637083
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637083）
          source: &a1
            id: s_t2HLpo6oXpQF9ZgbNS8Jpd
            source_type: api_record
            title: 中国历代人物传记资料库：王安禮（CBDB 637083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637083&o=json
            external_identifier: CBDB:637083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.334Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_utFxBGZ1HE3QN58N4iTG6H
        subject_person_id: p_SwbPWZCWBFJ7BapgdQq9gZ
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
        - id: cs_JqN6wRgJBCtdzLwcGKLYU4
          claim_id: c_utFxBGZ1HE3QN58N4iTG6H
          source_id: s_t2HLpo6oXpQF9ZgbNS8Jpd
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

# 王安禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安禮 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王安禮（CBDB 637083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637083&o=json)
