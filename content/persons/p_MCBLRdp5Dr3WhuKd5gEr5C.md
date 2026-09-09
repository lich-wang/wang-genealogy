---
schema: wang-person/v1
id: p_MCBLRdp5Dr3WhuKd5gEr5C
status: active
merged_into: null
display_name: 王誠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y9F1o7pafDmdr6orKZsv2z
        subject_person_id: p_MCBLRdp5Dr3WhuKd5gEr5C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nbnWK2Up7KL9cTMkerGoeR
          claim_id: c_Y9F1o7pafDmdr6orKZsv2z
          source_id: s_JDpR8QJZ7QoEiZF7C34vY1
          stance: supports
          locator: CBDB:295262
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295262）
          source: &a1
            id: s_JDpR8QJZ7QoEiZF7C34vY1
            source_type: api_record
            title: 中国历代人物传记资料库：王誠（CBDB 295262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295262&o=json
            external_identifier: CBDB:295262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.487Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u44BQC2C1ErRGcWfEWGq6g
        subject_person_id: p_MCBLRdp5Dr3WhuKd5gEr5C
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
        - id: cs_98Joe5eXBNU11j4RSv681p
          claim_id: c_u44BQC2C1ErRGcWfEWGq6g
          source_id: s_JDpR8QJZ7QoEiZF7C34vY1
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

# 王誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王誠（CBDB 295262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295262&o=json)
