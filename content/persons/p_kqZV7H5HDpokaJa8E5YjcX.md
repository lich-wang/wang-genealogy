---
schema: wang-person/v1
id: p_kqZV7H5HDpokaJa8E5YjcX
status: active
merged_into: null
display_name: 王炎澤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MND16XPH9NgrAU5BWQWkJR
        subject_person_id: p_kqZV7H5HDpokaJa8E5YjcX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炎澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_juzgx1beN2QXNbLDtE7eS8
          claim_id: c_MND16XPH9NgrAU5BWQWkJR
          source_id: s_R5774TNoB2GRj7hw3EJSKq
          stance: supports
          locator: CBDB:525482
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（525482）
          source: &a1
            id: s_R5774TNoB2GRj7hw3EJSKq
            source_type: api_record
            title: 中国历代人物传记资料库：王炎澤（CBDB 525482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525482&o=json
            external_identifier: CBDB:525482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.327Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9KB4fQdMGsrWdKd84uEmKC
        subject_person_id: p_kqZV7H5HDpokaJa8E5YjcX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LmDDfxWpsiFG4fjMCMSpng
          claim_id: c_9KB4fQdMGsrWdKd84uEmKC
          source_id: s_R5774TNoB2GRj7hw3EJSKq
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

# 王炎澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炎澤 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炎澤（CBDB 525482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525482&o=json)
