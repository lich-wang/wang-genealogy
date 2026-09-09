---
schema: wang-person/v1
id: p_y5uxeU9kh4BEyktBFa526N
status: active
merged_into: null
display_name: 王棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8BrDbyRAD4ZnnSyrVQDxhe
        subject_person_id: p_y5uxeU9kh4BEyktBFa526N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EzmRKSL9sSi1gpQjZBo8ey
          claim_id: c_8BrDbyRAD4ZnnSyrVQDxhe
          source_id: s_zFwbWqE4cbsBLvcSJer5yg
          stance: supports
          locator: CBDB:500987
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（500987）
          source: &a1
            id: s_zFwbWqE4cbsBLvcSJer5yg
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 500987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500987&o=json
            external_identifier: CBDB:500987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CtnM8UAi5vL76iHt8UxF25
        subject_person_id: p_y5uxeU9kh4BEyktBFa526N
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
        - id: cs_wKz4Yynnu1AiBK4zQXutmd
          claim_id: c_CtnM8UAi5vL76iHt8UxF25
          source_id: s_zFwbWqE4cbsBLvcSJer5yg
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

# 王棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棟 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王棟（CBDB 500987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500987&o=json)
