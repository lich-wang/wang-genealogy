---
schema: wang-person/v1
id: p_VVSbu7qjGrihc2dntLWJdH
status: active
merged_into: null
display_name: 王聚星
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bYQGDGNGz3Yasv71AYmWm6
        subject_person_id: p_VVSbu7qjGrihc2dntLWJdH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聚星
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JGDy3Z9NHy1ENS3r4v1TsN
          claim_id: c_bYQGDGNGz3Yasv71AYmWm6
          source_id: s_8hUjiyms33vxvGRPxnp61F
          stance: supports
          locator: CBDB:639948
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639948）
          source: &a1
            id: s_8hUjiyms33vxvGRPxnp61F
            source_type: api_record
            title: 中国历代人物传记资料库：王聚星（CBDB 639948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639948&o=json
            external_identifier: CBDB:639948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.095Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u9KRh1iS4enap4Mf52TJEy
        subject_person_id: p_VVSbu7qjGrihc2dntLWJdH
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
        - id: cs_M8MVw1eD2frDWHf91VXGJv
          claim_id: c_u9KRh1iS4enap4Mf52TJEy
          source_id: s_8hUjiyms33vxvGRPxnp61F
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

# 王聚星

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聚星 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聚星（CBDB 639948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639948&o=json)
