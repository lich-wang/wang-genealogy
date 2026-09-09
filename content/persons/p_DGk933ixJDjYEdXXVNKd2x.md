---
schema: wang-person/v1
id: p_DGk933ixJDjYEdXXVNKd2x
status: active
merged_into: null
display_name: 王佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J2gQG1DTeUEwthP61i8qhg
        subject_person_id: p_DGk933ixJDjYEdXXVNKd2x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8A13ddmbGNGgL32houfBqh
          claim_id: c_J2gQG1DTeUEwthP61i8qhg
          source_id: s_z2Ho4GQZzKQrPdsALFWSk8
          stance: supports
          locator: CBDB:67278
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67278）
          source: &a1
            id: s_z2Ho4GQZzKQrPdsALFWSk8
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 67278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67278&o=json
            external_identifier: CBDB:67278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FkVD6fgEVAPCH3L1jPLaYX
        subject_person_id: p_DGk933ixJDjYEdXXVNKd2x
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
        - id: cs_zoNEEoa6H7P2TStfBCQG5q
          claim_id: c_FkVD6fgEVAPCH3L1jPLaYX
          source_id: s_z2Ho4GQZzKQrPdsALFWSk8
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

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 67278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67278&o=json)
