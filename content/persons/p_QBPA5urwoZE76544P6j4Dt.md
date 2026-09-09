---
schema: wang-person/v1
id: p_QBPA5urwoZE76544P6j4Dt
status: active
merged_into: null
display_name: 王允中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Yo1uXxnhaUiasBDcnGLtcf
        subject_person_id: p_QBPA5urwoZE76544P6j4Dt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ojM2zjpo2Kf216Mkt2hv3P
          claim_id: c_Yo1uXxnhaUiasBDcnGLtcf
          source_id: s_W4SyHK5KeSQXUtno86R6EF
          stance: supports
          locator: CBDB:342256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342256）
          source: &a1
            id: s_W4SyHK5KeSQXUtno86R6EF
            source_type: api_record
            title: 中国历代人物传记资料库：王允中（CBDB 342256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342256&o=json
            external_identifier: CBDB:342256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.877Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NkXEt77JCPtc78mn3d4N8S
        subject_person_id: p_QBPA5urwoZE76544P6j4Dt
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
        - id: cs_91vqiz3UijoXmEaJYfHGii
          claim_id: c_NkXEt77JCPtc78mn3d4N8S
          source_id: s_W4SyHK5KeSQXUtno86R6EF
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

# 王允中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允中 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允中（CBDB 342256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342256&o=json)
