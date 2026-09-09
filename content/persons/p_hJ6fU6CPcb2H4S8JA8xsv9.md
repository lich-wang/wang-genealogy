---
schema: wang-person/v1
id: p_hJ6fU6CPcb2H4S8JA8xsv9
status: active
merged_into: null
display_name: 王廷詔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VhnLxPsxDWNb9bLXyHb1tN
        subject_person_id: p_hJ6fU6CPcb2H4S8JA8xsv9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z6Uzt4KiNsJfni5smfKKs8
          claim_id: c_VhnLxPsxDWNb9bLXyHb1tN
          source_id: s_CgBdGCpcR6rexMVBAEhvZa
          stance: supports
          locator: CBDB:462004
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（462004）
          source: &a1
            id: s_CgBdGCpcR6rexMVBAEhvZa
            source_type: api_record
            title: 中国历代人物传记资料库：王廷詔（CBDB 462004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462004&o=json
            external_identifier: CBDB:462004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.829Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AnvU9rMYDu1xPLefuHe3AM
        subject_person_id: p_hJ6fU6CPcb2H4S8JA8xsv9
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
        - id: cs_NKougNquj778DBuoew3QJ8
          claim_id: c_AnvU9rMYDu1xPLefuHe3AM
          source_id: s_CgBdGCpcR6rexMVBAEhvZa
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

# 王廷詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷詔 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷詔（CBDB 462004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462004&o=json)
