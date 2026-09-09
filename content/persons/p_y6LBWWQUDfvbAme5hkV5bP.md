---
schema: wang-person/v1
id: p_y6LBWWQUDfvbAme5hkV5bP
status: active
merged_into: null
display_name: 王大韶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iZ2DeA36Aaq326NbCtDhAG
        subject_person_id: p_y6LBWWQUDfvbAme5hkV5bP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大韶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6JCFxgsduJjvLreLKS9R6u
          claim_id: c_iZ2DeA36Aaq326NbCtDhAG
          source_id: s_V7bBK9Z5MA2Mm83Cscu51D
          stance: supports
          locator: CBDB:264656
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264656）
          source: &a1
            id: s_V7bBK9Z5MA2Mm83Cscu51D
            source_type: api_record
            title: 中国历代人物传记资料库：王大韶（CBDB 264656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264656&o=json
            external_identifier: CBDB:264656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.655Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1cbWLnykEFJvV151xVnWXC
        subject_person_id: p_y6LBWWQUDfvbAme5hkV5bP
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
        - id: cs_iqSArQQNoddnEvKFHS1qV1
          claim_id: c_1cbWLnykEFJvV151xVnWXC
          source_id: s_V7bBK9Z5MA2Mm83Cscu51D
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

# 王大韶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大韶 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大韶（CBDB 264656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264656&o=json)
