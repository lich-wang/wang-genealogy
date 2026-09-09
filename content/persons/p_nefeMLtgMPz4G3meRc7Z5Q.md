---
schema: wang-person/v1
id: p_nefeMLtgMPz4G3meRc7Z5Q
status: active
merged_into: null
display_name: 王瓛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jbx8KoHQSabpdAzz7T7LNz
        subject_person_id: p_nefeMLtgMPz4G3meRc7Z5Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uK7xpVXxYZQx6JFZ3M7EFL
          claim_id: c_jbx8KoHQSabpdAzz7T7LNz
          source_id: s_qwSc6bmPqL899TaQSVBL38
          stance: supports
          locator: CBDB:239747
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（239747）
          source: &a1
            id: s_qwSc6bmPqL899TaQSVBL38
            source_type: api_record
            title: 中国历代人物传记资料库：王瓛（CBDB 239747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239747&o=json
            external_identifier: CBDB:239747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c5cNYrzNvR3WaDWg3Pn3Jo
        subject_person_id: p_nefeMLtgMPz4G3meRc7Z5Q
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
        - id: cs_Uoq5VrLujegynB5NAszKi6
          claim_id: c_c5cNYrzNvR3WaDWg3Pn3Jo
          source_id: s_qwSc6bmPqL899TaQSVBL38
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

# 王瓛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓛 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓛（CBDB 239747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239747&o=json)
