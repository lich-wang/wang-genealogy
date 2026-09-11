---
schema: wang-person/v1
id: p_XgcjEAVxcmjA9ZpjEv18ip
status: active
merged_into: null
display_name: 王審禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KjE3FJhkoonwvpsKV1z7di
        subject_person_id: p_XgcjEAVxcmjA9ZpjEv18ip
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王審禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_arnqn5aGUq1CRXa8c1GikU
          claim_id: c_KjE3FJhkoonwvpsKV1z7di
          source_id: s_enK8yM2gY94aRvrNHmMJQ6
          stance: supports
          locator: CBDB:381566
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（381566）
          source: &a1
            id: s_enK8yM2gY94aRvrNHmMJQ6
            source_type: api_record
            title: 中国历代人物传记资料库：王審禮（CBDB 381566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=381566&o=json
            external_identifier: CBDB:381566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.777Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iUT17pGsC9oWjCmRiG6VYt
        subject_person_id: p_XgcjEAVxcmjA9ZpjEv18ip
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王審禮，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 381566）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bD1-0uvepMrbc5BsXlN_Qx
          claim_id: c_iUT17pGsC9oWjCmRiG6VYt
          source_id: s_enK8yM2gY94aRvrNHmMJQ6
          stance: supports
          locator: CBDB:381566
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

# 王審禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王審禮 | accepted |
| bio.summary | 王審禮，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 381566） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王審禮（CBDB 381566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=381566&o=json)
