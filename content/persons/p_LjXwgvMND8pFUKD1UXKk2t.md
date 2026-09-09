---
schema: wang-person/v1
id: p_LjXwgvMND8pFUKD1UXKk2t
status: active
merged_into: null
display_name: 王蕊珠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ta8PQgzXDnfgMLYMs4jQHj
        subject_person_id: p_LjXwgvMND8pFUKD1UXKk2t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蕊珠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4RVj4hYRaWXdERzpkAGVw5
          claim_id: c_ta8PQgzXDnfgMLYMs4jQHj
          source_id: s_Dr8nTCQFRUk2xDkVrURFpg
          stance: supports
          locator: CBDB:566445
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（566445）
          source: &a1
            id: s_Dr8nTCQFRUk2xDkVrURFpg
            source_type: api_record
            title: 中国历代人物传记资料库：王蕊珠（CBDB 566445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=566445&o=json
            external_identifier: CBDB:566445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.587Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9Z7d352rzR6B66KHFDwY6k
        subject_person_id: p_LjXwgvMND8pFUKD1UXKk2t
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
        - id: cs_AaBK7zo4E9dGbaQ3eD3mC1
          claim_id: c_9Z7d352rzR6B66KHFDwY6k
          source_id: s_Dr8nTCQFRUk2xDkVrURFpg
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

# 王蕊珠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蕊珠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蕊珠（CBDB 566445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=566445&o=json)
