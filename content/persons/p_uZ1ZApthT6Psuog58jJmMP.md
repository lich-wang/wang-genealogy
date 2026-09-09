---
schema: wang-person/v1
id: p_uZ1ZApthT6Psuog58jJmMP
status: active
merged_into: null
display_name: 王傑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_78ohH434AigXuBoXzbGyb5
        subject_person_id: p_uZ1ZApthT6Psuog58jJmMP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cSywZzVFgQ4T9imzXc2Qz3
          claim_id: c_78ohH434AigXuBoXzbGyb5
          source_id: s_HSNV81PRrTYTPW6pZQAoMd
          stance: supports
          locator: CBDB:253499
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253499）
          source: &a1
            id: s_HSNV81PRrTYTPW6pZQAoMd
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 253499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253499&o=json
            external_identifier: CBDB:253499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LrK7v3MWRHKNyDYk7wDUwm
        subject_person_id: p_uZ1ZApthT6Psuog58jJmMP
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
        - id: cs_BhNsRAAUFhVpfV8YsLnE4t
          claim_id: c_LrK7v3MWRHKNyDYk7wDUwm
          source_id: s_HSNV81PRrTYTPW6pZQAoMd
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

# 王傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傑 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 253499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253499&o=json)
