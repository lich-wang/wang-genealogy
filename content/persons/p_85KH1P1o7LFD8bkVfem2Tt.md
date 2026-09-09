---
schema: wang-person/v1
id: p_85KH1P1o7LFD8bkVfem2Tt
status: active
merged_into: null
display_name: 王康㐅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QqMd5Bx1sxwWK1qs5766q5
        subject_person_id: p_85KH1P1o7LFD8bkVfem2Tt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王康㐅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LEvWU6JT7EKyCHZ6xUqr64
          claim_id: c_QqMd5Bx1sxwWK1qs5766q5
          source_id: s_ioc8Pgt3upT97cn8iU5yXK
          stance: supports
          locator: CBDB:637434
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637434）
          source: &a1
            id: s_ioc8Pgt3upT97cn8iU5yXK
            source_type: api_record
            title: 中国历代人物传记资料库：王康㐅（CBDB 637434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637434&o=json
            external_identifier: CBDB:637434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.319Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iZXapuCxk2vAoaBfkDGVRM
        subject_person_id: p_85KH1P1o7LFD8bkVfem2Tt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iGCzQbBKc3MYMusCgnQFq7
          claim_id: c_iZXapuCxk2vAoaBfkDGVRM
          source_id: s_ioc8Pgt3upT97cn8iU5yXK
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

# 王康㐅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王康㐅 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王康㐅（CBDB 637434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637434&o=json)
