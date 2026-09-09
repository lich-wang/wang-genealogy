---
schema: wang-person/v1
id: p_MRG5qR8o6DVA9syQy7dXnT
status: active
merged_into: null
display_name: 王若羲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JUZws9ezHiHau2AZNfdSkQ
        subject_person_id: p_MRG5qR8o6DVA9syQy7dXnT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若羲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qGWHXP9DHVt5byrEXLhdL1
          claim_id: c_JUZws9ezHiHau2AZNfdSkQ
          source_id: s_aRqCeoPMdtQ77E3oSKB8zF
          stance: supports
          locator: CBDB:343162
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343162）
          source: &a1
            id: s_aRqCeoPMdtQ77E3oSKB8zF
            source_type: api_record
            title: 中国历代人物传记资料库：王若羲（CBDB 343162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343162&o=json
            external_identifier: CBDB:343162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.227Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aH3nhECeuc3BVJ2iKf5Mxp
        subject_person_id: p_MRG5qR8o6DVA9syQy7dXnT
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
        - id: cs_PH6LEB5JggQwHbf6QXTNXc
          claim_id: c_aH3nhECeuc3BVJ2iKf5Mxp
          source_id: s_aRqCeoPMdtQ77E3oSKB8zF
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

# 王若羲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王若羲 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王若羲（CBDB 343162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343162&o=json)
