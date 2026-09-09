---
schema: wang-person/v1
id: p_7NAziZHv4dqt3eE6qeXd6d
status: active
merged_into: null
display_name: 王家督
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bG5wzeEa9yUMdU2A4q6wvv
        subject_person_id: p_7NAziZHv4dqt3eE6qeXd6d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家督
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rcEyVzabmG2n7GDt1QQqKZ
          claim_id: c_bG5wzeEa9yUMdU2A4q6wvv
          source_id: s_x6jH8yDQ1TevUbei6quyYX
          stance: supports
          locator: CBDB:637209
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637209）
          source: &a1
            id: s_x6jH8yDQ1TevUbei6quyYX
            source_type: api_record
            title: 中国历代人物传记资料库：王家督（CBDB 637209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637209&o=json
            external_identifier: CBDB:637209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fbdn8EdC6GAyoik2GySPs6
        subject_person_id: p_7NAziZHv4dqt3eE6qeXd6d
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
        - id: cs_18QU7aPh6XFQrdgrwAFbRX
          claim_id: c_fbdn8EdC6GAyoik2GySPs6
          source_id: s_x6jH8yDQ1TevUbei6quyYX
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

# 王家督

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家督 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家督（CBDB 637209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637209&o=json)
