---
schema: wang-person/v1
id: p_S5UpBTTpmsnpJjDxmfGU2m
status: active
merged_into: null
display_name: 王大經
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9zCRFnqSHusmKKcanJcJFB
        subject_person_id: p_S5UpBTTpmsnpJjDxmfGU2m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wu3e9uQG6huganDLgEr7zw
          claim_id: c_9zCRFnqSHusmKKcanJcJFB
          source_id: s_DW9depSWX5rQBq2PacVycN
          stance: supports
          locator: CBDB:491534
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（491534）
          source: &a1
            id: s_DW9depSWX5rQBq2PacVycN
            source_type: api_record
            title: 中国历代人物传记资料库：王大經（CBDB 491534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491534&o=json
            external_identifier: CBDB:491534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.195Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kofF583Wgn2gxCpXQ7dUwC
        subject_person_id: p_S5UpBTTpmsnpJjDxmfGU2m
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
        - id: cs_r7KLGC7M41gyA6EEALrmqS
          claim_id: c_kofF583Wgn2gxCpXQ7dUwC
          source_id: s_DW9depSWX5rQBq2PacVycN
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

# 王大經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大經 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大經（CBDB 491534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491534&o=json)
