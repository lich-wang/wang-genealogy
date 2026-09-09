---
schema: wang-person/v1
id: p_tcJVsq1e51gNjVTnyUwNnU
status: active
merged_into: null
display_name: 王用中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XdSTKQAWugF37m3E7hS7ci
        subject_person_id: p_tcJVsq1e51gNjVTnyUwNnU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mGtZ3yU5D8WFLz6P5cvHRi
          claim_id: c_XdSTKQAWugF37m3E7hS7ci
          source_id: s_jzXnzKpVjBR83NnLve5d71
          stance: supports
          locator: CBDB:546739
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（546739）
          source: &a1
            id: s_jzXnzKpVjBR83NnLve5d71
            source_type: api_record
            title: 中国历代人物传记资料库：王用中（CBDB 546739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=546739&o=json
            external_identifier: CBDB:546739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.528Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WE6VcAWAAmCgNh8T49Ukzg
        subject_person_id: p_tcJVsq1e51gNjVTnyUwNnU
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
        - id: cs_cXSAehyJKP4NNLL59ojKEc
          claim_id: c_WE6VcAWAAmCgNh8T49Ukzg
          source_id: s_jzXnzKpVjBR83NnLve5d71
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

# 王用中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用中 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用中（CBDB 546739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=546739&o=json)
