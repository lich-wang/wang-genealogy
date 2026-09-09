---
schema: wang-person/v1
id: p_7Xkw56xvnn68dVk4wdQ9QQ
status: active
merged_into: null
display_name: 王保醇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_65n7gHsKY4WhHaGj8xECAi
        subject_person_id: p_7Xkw56xvnn68dVk4wdQ9QQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王保醇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xAAWBWk8VTJS2DHaEWtF5E
          claim_id: c_65n7gHsKY4WhHaGj8xECAi
          source_id: s_s9jV63htKQHjNxmzZwnuJR
          stance: supports
          locator: CBDB:636059
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636059）
          source: &a1
            id: s_s9jV63htKQHjNxmzZwnuJR
            source_type: api_record
            title: 中国历代人物传记资料库：王保醇（CBDB 636059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636059&o=json
            external_identifier: CBDB:636059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.872Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7fEL6bSEp7gsLs8LhNRsTq
        subject_person_id: p_7Xkw56xvnn68dVk4wdQ9QQ
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
        - id: cs_8p5hHEAPMR9t4CL3JuYvVX
          claim_id: c_7fEL6bSEp7gsLs8LhNRsTq
          source_id: s_s9jV63htKQHjNxmzZwnuJR
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

# 王保醇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王保醇 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王保醇（CBDB 636059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636059&o=json)
