---
schema: wang-person/v1
id: p_7fK7YQ9TDq9eVTx8PWUTmm
status: active
merged_into: null
display_name: 王正臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bEGDbVnjXdFfZNwFwtGM4o
        subject_person_id: p_7fK7YQ9TDq9eVTx8PWUTmm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JHLxf6Cqm8d5GV9FpS5Fau
          claim_id: c_bEGDbVnjXdFfZNwFwtGM4o
          source_id: s_HVXZApYtfBRyWhJdX6kGK2
          stance: supports
          locator: CBDB:461676
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（461676）
          source: &a1
            id: s_HVXZApYtfBRyWhJdX6kGK2
            source_type: api_record
            title: 中国历代人物传记资料库：王正臣（CBDB 461676）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=461676&o=json
            external_identifier: CBDB:461676
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.820Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9zPxC9ucHuP633GseNUAMm
        subject_person_id: p_7fK7YQ9TDq9eVTx8PWUTmm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正臣，明人物。曾任縣主簿。（中国历代人物传记资料库 CBDB 461676）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q3XSBGZTXrpIsP3F2PDhF6
          claim_id: c_9zPxC9ucHuP633GseNUAMm
          source_id: s_HVXZApYtfBRyWhJdX6kGK2
          stance: supports
          locator: CBDB:461676
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王正臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正臣 | accepted |
| bio.summary | 王正臣，明人物。曾任縣主簿。（中国历代人物传记资料库 CBDB 461676） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正臣（CBDB 461676）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=461676&o=json)
