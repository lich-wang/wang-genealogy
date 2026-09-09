---
schema: wang-person/v1
id: p_7UViTyfJaAy98YBCCs1DT6
status: active
merged_into: null
display_name: 王家彥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Yn1KuK4kXjpzUy6iDAhPPM
        subject_person_id: p_7UViTyfJaAy98YBCCs1DT6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x3N8RP5ug22Ub6PB9dM1V7
          claim_id: c_Yn1KuK4kXjpzUy6iDAhPPM
          source_id: s_YtU3q7mN4DayANZwh5o7FZ
          stance: supports
          locator: CBDB:494501
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（494501）
          source: &a1
            id: s_YtU3q7mN4DayANZwh5o7FZ
            source_type: api_record
            title: 中国历代人物传记资料库：王家彥（CBDB 494501）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494501&o=json
            external_identifier: CBDB:494501
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.452Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W1NAE1Gwm4AxeFJb9Eg22f
        subject_person_id: p_7UViTyfJaAy98YBCCs1DT6
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
        - id: cs_BH5KEKYd8SuQEhySG6VZsp
          claim_id: c_W1NAE1Gwm4AxeFJb9Eg22f
          source_id: s_YtU3q7mN4DayANZwh5o7FZ
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

# 王家彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家彥 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家彥（CBDB 494501）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494501&o=json)
