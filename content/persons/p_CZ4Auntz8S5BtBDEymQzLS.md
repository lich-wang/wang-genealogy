---
schema: wang-person/v1
id: p_CZ4Auntz8S5BtBDEymQzLS
status: active
merged_into: null
display_name: 王清和
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r36YGbtXEL4cPuMqSwtuca
        subject_person_id: p_CZ4Auntz8S5BtBDEymQzLS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3bXU3a9RePZQn7n3yr8BTf
          claim_id: c_r36YGbtXEL4cPuMqSwtuca
          source_id: s_tbqonC9yJUVbGBvC7PbAMx
          stance: supports
          locator: CBDB:639136
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639136）
          source: &a1
            id: s_tbqonC9yJUVbGBvC7PbAMx
            source_type: api_record
            title: 中国历代人物传记资料库：王清和（CBDB 639136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639136&o=json
            external_identifier: CBDB:639136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.853Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hn1tcZR8TKG2NQkhLGwGNH
        subject_person_id: p_CZ4Auntz8S5BtBDEymQzLS
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
        - id: cs_sgh3x5v8e9MzedD6becvA5
          claim_id: c_hn1tcZR8TKG2NQkhLGwGNH
          source_id: s_tbqonC9yJUVbGBvC7PbAMx
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

# 王清和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清和 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王清和（CBDB 639136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639136&o=json)
