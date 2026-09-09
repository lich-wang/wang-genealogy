---
schema: wang-person/v1
id: p_m66UBzetBCZtqkYDG1nKgD
status: active
merged_into: null
display_name: 王華祖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7WaUD2pYAV14CCKic4kPUi
        subject_person_id: p_m66UBzetBCZtqkYDG1nKgD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王華祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yvV2XCHdCMbR9L9BHws8bA
          claim_id: c_7WaUD2pYAV14CCKic4kPUi
          source_id: s_3aFXbdb4HbEg2x4yAqGzgv
          stance: supports
          locator: CBDB:101368
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101368）
          source: &a1
            id: s_3aFXbdb4HbEg2x4yAqGzgv
            source_type: api_record
            title: 中国历代人物传记资料库：王華祖（CBDB 101368）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101368&o=json
            external_identifier: CBDB:101368
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HQ4E51yC1FYtj9r4UYa81U
        subject_person_id: p_m66UBzetBCZtqkYDG1nKgD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3kgbzgcB2NFEsH4tHTWWtF
          claim_id: c_HQ4E51yC1FYtj9r4UYa81U
          source_id: s_3aFXbdb4HbEg2x4yAqGzgv
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

# 王華祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王華祖 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王華祖（CBDB 101368）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101368&o=json)
