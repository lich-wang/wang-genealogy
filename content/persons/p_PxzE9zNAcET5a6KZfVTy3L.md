---
schema: wang-person/v1
id: p_PxzE9zNAcET5a6KZfVTy3L
status: active
merged_into: null
display_name: 王陞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k18wL3mmc9VgLdXF2xgKgk
        subject_person_id: p_PxzE9zNAcET5a6KZfVTy3L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8mP2T31NF67xjHsR2AEJR8
          claim_id: c_k18wL3mmc9VgLdXF2xgKgk
          source_id: s_DC9BFv1PaHMP4JKm7QiV2j
          stance: supports
          locator: CBDB:331804
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331804）
          source: &a1
            id: s_DC9BFv1PaHMP4JKm7QiV2j
            source_type: api_record
            title: 中国历代人物传记资料库：王陞（CBDB 331804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331804&o=json
            external_identifier: CBDB:331804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.376Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nAkzfu9j5xhuVRgBpJSyBB
        subject_person_id: p_PxzE9zNAcET5a6KZfVTy3L
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
        - id: cs_p2MdUt9v7E9dyEXU4FaFPj
          claim_id: c_nAkzfu9j5xhuVRgBpJSyBB
          source_id: s_DC9BFv1PaHMP4JKm7QiV2j
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

# 王陞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王陞 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王陞（CBDB 331804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331804&o=json)
