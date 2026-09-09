---
schema: wang-person/v1
id: p_XhGMDyM3NB8LhiiDXk8CiL
status: active
merged_into: null
display_name: 王廷瑞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2bDKLTFU1Z3mA9PVsvnHq7
        subject_person_id: p_XhGMDyM3NB8LhiiDXk8CiL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sJAQRLy9g8RicLGTYKKkr5
          claim_id: c_2bDKLTFU1Z3mA9PVsvnHq7
          source_id: s_u2aHFvFkD7rCQkLPTN8xmH
          stance: supports
          locator: CBDB:461659
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（461659）
          source: &a1
            id: s_u2aHFvFkD7rCQkLPTN8xmH
            source_type: api_record
            title: 中国历代人物传记资料库：王廷瑞（CBDB 461659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=461659&o=json
            external_identifier: CBDB:461659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tKStW4xXDqzy7Gu1rm6sDX
        subject_person_id: p_XhGMDyM3NB8LhiiDXk8CiL
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
        - id: cs_12y45C9Ds1qbvvyfxkjKZ8
          claim_id: c_tKStW4xXDqzy7Gu1rm6sDX
          source_id: s_u2aHFvFkD7rCQkLPTN8xmH
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

# 王廷瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷瑞 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷瑞（CBDB 461659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=461659&o=json)
