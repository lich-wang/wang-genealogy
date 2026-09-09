---
schema: wang-person/v1
id: p_EPre6RwkxTdv7w3sC85r9v
status: active
merged_into: null
display_name: 王忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rNmDZGpXDYB2hwGZXQfA85
        subject_person_id: p_EPre6RwkxTdv7w3sC85r9v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4TMGfvmdPGv2pWoBeunGWo
          claim_id: c_rNmDZGpXDYB2hwGZXQfA85
          source_id: s_B8vpCw4ykxK6wjzgzee7Vt
          stance: supports
          locator: CBDB:255593
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255593）
          source: &a1
            id: s_B8vpCw4ykxK6wjzgzee7Vt
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 255593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255593&o=json
            external_identifier: CBDB:255593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.348Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iYMAJLr5TkWGe3A8EffpaZ
        subject_person_id: p_EPre6RwkxTdv7w3sC85r9v
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
        - id: cs_HEL1J8KznVKEmrk5YUpNGy
          claim_id: c_iYMAJLr5TkWGe3A8EffpaZ
          source_id: s_B8vpCw4ykxK6wjzgzee7Vt
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

# 王忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王忠（CBDB 255593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255593&o=json)
