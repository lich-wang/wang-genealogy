---
schema: wang-person/v1
id: p_ExwyMEM2CBz3CqvBgK9Qdb
status: active
merged_into: null
display_name: 王淳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wV2hLJPK5CpJVHANSM7stk
        subject_person_id: p_ExwyMEM2CBz3CqvBgK9Qdb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8QHnpMKH8yb59L2stdSWcC
          claim_id: c_wV2hLJPK5CpJVHANSM7stk
          source_id: s_w7NYPhbtVTZjsf5QuPCK4E
          stance: supports
          locator: CBDB:544961
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（544961）
          source: &a1
            id: s_w7NYPhbtVTZjsf5QuPCK4E
            source_type: api_record
            title: 中国历代人物传记资料库：王淳（CBDB 544961）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544961&o=json
            external_identifier: CBDB:544961
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.513Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bSvMdiWni3KxagG9H9Nq2X
        subject_person_id: p_ExwyMEM2CBz3CqvBgK9Qdb
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
        - id: cs_5YUFx1Bu6KJj2wRQM8CXwi
          claim_id: c_bSvMdiWni3KxagG9H9Nq2X
          source_id: s_w7NYPhbtVTZjsf5QuPCK4E
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

# 王淳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淳 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淳（CBDB 544961）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544961&o=json)
