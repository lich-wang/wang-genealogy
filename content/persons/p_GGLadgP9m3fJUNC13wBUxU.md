---
schema: wang-person/v1
id: p_GGLadgP9m3fJUNC13wBUxU
status: active
merged_into: null
display_name: 王元一
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2utB1NBLQ6BiPqYLVn8VGH
        subject_person_id: p_GGLadgP9m3fJUNC13wBUxU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元一
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b7L33x8YLnSNnr9XgB267x
          claim_id: c_2utB1NBLQ6BiPqYLVn8VGH
          source_id: s_4Xz581akuC9D6xZ3f41swK
          stance: supports
          locator: CBDB:22148
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22148）
          source: &a1
            id: s_4Xz581akuC9D6xZ3f41swK
            source_type: api_record
            title: 中国历代人物传记资料库：王元一（CBDB 22148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22148&o=json
            external_identifier: CBDB:22148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.835Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f8A18ZtCQUHF9WoC2nmHCb
        subject_person_id: p_GGLadgP9m3fJUNC13wBUxU
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
        - id: cs_Ceaet5eRZAxaR75oxbztSz
          claim_id: c_f8A18ZtCQUHF9WoC2nmHCb
          source_id: s_4Xz581akuC9D6xZ3f41swK
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

# 王元一

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元一 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元一（CBDB 22148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22148&o=json)
