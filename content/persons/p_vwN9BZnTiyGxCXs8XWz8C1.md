---
schema: wang-person/v1
id: p_vwN9BZnTiyGxCXs8XWz8C1
status: active
merged_into: null
display_name: 王澍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9L5289WqSwHiAjpNGEN3N3
        subject_person_id: p_vwN9BZnTiyGxCXs8XWz8C1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vP4HyQPHvrKrYdzh4zH3sY
          claim_id: c_9L5289WqSwHiAjpNGEN3N3
          source_id: s_bAnmtTB4E4T9My53SQMcWr
          stance: supports
          locator: CBDB:320904
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320904）
          source: &a1
            id: s_bAnmtTB4E4T9My53SQMcWr
            source_type: api_record
            title: 中国历代人物传记资料库：王澍（CBDB 320904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320904&o=json
            external_identifier: CBDB:320904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.079Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uozhKGLftxemQigePEd7Mh
        subject_person_id: p_vwN9BZnTiyGxCXs8XWz8C1
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
        - id: cs_cRHzD1Ypbw4KBNJV6GYVVA
          claim_id: c_uozhKGLftxemQigePEd7Mh
          source_id: s_bAnmtTB4E4T9My53SQMcWr
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

# 王澍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澍 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澍（CBDB 320904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320904&o=json)
