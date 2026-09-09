---
schema: wang-person/v1
id: p_dia6jfCmQ7gRQgh1Ry7yHd
status: active
merged_into: null
display_name: 王蔡初
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g3EXDhHs2umAtADDnQyyTF
        subject_person_id: p_dia6jfCmQ7gRQgh1Ry7yHd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蔡初
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1KPA3KMSXCmHGDgUM7F9FE
          claim_id: c_g3EXDhHs2umAtADDnQyyTF
          source_id: s_6yPw7JN3wdkPaSapgEyiEw
          stance: supports
          locator: CBDB:640151
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640151）
          source: &a1
            id: s_6yPw7JN3wdkPaSapgEyiEw
            source_type: api_record
            title: 中国历代人物传记资料库：王蔡初（CBDB 640151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640151&o=json
            external_identifier: CBDB:640151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.165Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EqT3J7n4QCbyvrD4pg3WEX
        subject_person_id: p_dia6jfCmQ7gRQgh1Ry7yHd
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
        - id: cs_wN3fcw3tSXbWk56arAJK3t
          claim_id: c_EqT3J7n4QCbyvrD4pg3WEX
          source_id: s_6yPw7JN3wdkPaSapgEyiEw
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

# 王蔡初

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蔡初 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蔡初（CBDB 640151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640151&o=json)
