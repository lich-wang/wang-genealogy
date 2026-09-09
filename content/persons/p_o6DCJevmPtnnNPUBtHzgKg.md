---
schema: wang-person/v1
id: p_o6DCJevmPtnnNPUBtHzgKg
status: active
merged_into: null
display_name: 王釋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_joudxRxRu2J4wnxErR2zVz
        subject_person_id: p_o6DCJevmPtnnNPUBtHzgKg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9MNH68UudSaF5SaHW2nK1G
          claim_id: c_joudxRxRu2J4wnxErR2zVz
          source_id: s_G1fuP1ZwLzxB747PqAKgEM
          stance: supports
          locator: CBDB:573537
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573537）
          source: &a1
            id: s_G1fuP1ZwLzxB747PqAKgEM
            source_type: api_record
            title: 中国历代人物传记资料库：王釋（CBDB 573537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573537&o=json
            external_identifier: CBDB:573537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QEK4vdAL12QLyAf1AcAVad
        subject_person_id: p_o6DCJevmPtnnNPUBtHzgKg
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
        - id: cs_FxL74Rm6hbt17Josz1MqJ2
          claim_id: c_QEK4vdAL12QLyAf1AcAVad
          source_id: s_G1fuP1ZwLzxB747PqAKgEM
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

# 王釋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王釋 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王釋（CBDB 573537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573537&o=json)
