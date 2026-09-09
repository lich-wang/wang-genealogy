---
schema: wang-person/v1
id: p_JYwkckNqST9V69E1YRNA17
status: active
merged_into: null
display_name: 王鋗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MH6P9uE1T8BBvkSEoPLvYr
        subject_person_id: p_JYwkckNqST9V69E1YRNA17
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鋗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_16sCtAEiXV2rkAdkt6gpzZ
          claim_id: c_MH6P9uE1T8BBvkSEoPLvYr
          source_id: s_sF4tYM82U4oVX4e7B2k3js
          stance: supports
          locator: CBDB:640569
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640569）
          source: &a1
            id: s_sF4tYM82U4oVX4e7B2k3js
            source_type: api_record
            title: 中国历代人物传记资料库：王鋗（CBDB 640569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640569&o=json
            external_identifier: CBDB:640569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.137Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aF1UpKwZrK2aDn7gKBBDTU
        subject_person_id: p_JYwkckNqST9V69E1YRNA17
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
        - id: cs_YWBMk7LgdWJnLsHBp4sU7E
          claim_id: c_aF1UpKwZrK2aDn7gKBBDTU
          source_id: s_sF4tYM82U4oVX4e7B2k3js
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

# 王鋗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鋗 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鋗（CBDB 640569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640569&o=json)
