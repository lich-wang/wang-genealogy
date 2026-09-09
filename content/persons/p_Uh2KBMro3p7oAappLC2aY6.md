---
schema: wang-person/v1
id: p_Uh2KBMro3p7oAappLC2aY6
status: active
merged_into: null
display_name: 王壽鵬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kMxJWc4NjbJuzzxW2ZpEsZ
        subject_person_id: p_Uh2KBMro3p7oAappLC2aY6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽鵬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BCLBx34BDiw8zBGRPCSLKt
          claim_id: c_kMxJWc4NjbJuzzxW2ZpEsZ
          source_id: s_q9qRAb2hzuFtE1TggGrPdU
          stance: supports
          locator: CBDB:636851
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636851）
          source: &a1
            id: s_q9qRAb2hzuFtE1TggGrPdU
            source_type: api_record
            title: 中国历代人物传记资料库：王壽鵬（CBDB 636851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636851&o=json
            external_identifier: CBDB:636851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.125Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DiVBbX6QxSYy1GBy6Sec5c
        subject_person_id: p_Uh2KBMro3p7oAappLC2aY6
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
        - id: cs_EMGBU2TxLfBBZUBkTh6kV2
          claim_id: c_DiVBbX6QxSYy1GBy6Sec5c
          source_id: s_q9qRAb2hzuFtE1TggGrPdU
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

# 王壽鵬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽鵬 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壽鵬（CBDB 636851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636851&o=json)
