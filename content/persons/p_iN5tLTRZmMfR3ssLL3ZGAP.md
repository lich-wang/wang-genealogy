---
schema: wang-person/v1
id: p_iN5tLTRZmMfR3ssLL3ZGAP
status: active
merged_into: null
display_name: 王汝槐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f9EnZDn8zc9xmcSQNAzH5s
        subject_person_id: p_iN5tLTRZmMfR3ssLL3ZGAP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uUmvu7cY97cKg5K2fPn27r
          claim_id: c_f9EnZDn8zc9xmcSQNAzH5s
          source_id: s_T1kQq7y7EZYwMj6hSfGqko
          stance: supports
          locator: CBDB:639019
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639019）
          source: &a1
            id: s_T1kQq7y7EZYwMj6hSfGqko
            source_type: api_record
            title: 中国历代人物传记资料库：王汝槐（CBDB 639019）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639019&o=json
            external_identifier: CBDB:639019
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.813Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tX6PLrADy5wDvgskHwo4Yw
        subject_person_id: p_iN5tLTRZmMfR3ssLL3ZGAP
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
        - id: cs_FbT5NEHV1N9FpJcSkcaLJG
          claim_id: c_tX6PLrADy5wDvgskHwo4Yw
          source_id: s_T1kQq7y7EZYwMj6hSfGqko
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

# 王汝槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝槐 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝槐（CBDB 639019）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639019&o=json)
