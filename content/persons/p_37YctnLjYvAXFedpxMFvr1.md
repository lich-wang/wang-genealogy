---
schema: wang-person/v1
id: p_37YctnLjYvAXFedpxMFvr1
status: active
merged_into: null
display_name: 王儒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i3SZR7azRUE5ferGK8ET9A
        subject_person_id: p_37YctnLjYvAXFedpxMFvr1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uP9JQbNpT1kxisHU6PP2Fy
          claim_id: c_i3SZR7azRUE5ferGK8ET9A
          source_id: s_u4wtyHiqWS4ciqfoQdQtyp
          stance: supports
          locator: CBDB:304727
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304727）
          source: &a1
            id: s_u4wtyHiqWS4ciqfoQdQtyp
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 304727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304727&o=json
            external_identifier: CBDB:304727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.729Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fqGWMC6BENgwRdfqL9PWG1
        subject_person_id: p_37YctnLjYvAXFedpxMFvr1
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
        - id: cs_QyFVQxRQYjfD74DPnZYh8u
          claim_id: c_fqGWMC6BENgwRdfqL9PWG1
          source_id: s_u4wtyHiqWS4ciqfoQdQtyp
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

# 王儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儒 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儒（CBDB 304727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304727&o=json)
