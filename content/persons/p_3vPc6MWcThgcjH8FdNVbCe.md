---
schema: wang-person/v1
id: p_3vPc6MWcThgcjH8FdNVbCe
status: active
merged_into: null
display_name: 王師禹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rG4NUz2dR4t7WbHatMEcCY
        subject_person_id: p_3vPc6MWcThgcjH8FdNVbCe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師禹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MXmnjzLc7n6vV77VS7MQKC
          claim_id: c_rG4NUz2dR4t7WbHatMEcCY
          source_id: s_5Hf7CZAfdzRrar9cw8jwsZ
          stance: supports
          locator: CBDB:473977
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（473977）
          source: &a1
            id: s_5Hf7CZAfdzRrar9cw8jwsZ
            source_type: api_record
            title: 中国历代人物传记资料库：王師禹（CBDB 473977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473977&o=json
            external_identifier: CBDB:473977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.337Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w2Uh8ERuifZ3cBzML4a6gk
        subject_person_id: p_3vPc6MWcThgcjH8FdNVbCe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C7HnjXc2zA72Sg1hWdvSrg
          claim_id: c_w2Uh8ERuifZ3cBzML4a6gk
          source_id: s_5Hf7CZAfdzRrar9cw8jwsZ
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

# 王師禹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師禹 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師禹（CBDB 473977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473977&o=json)
