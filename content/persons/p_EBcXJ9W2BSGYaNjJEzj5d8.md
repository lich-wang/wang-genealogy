---
schema: wang-person/v1
id: p_EBcXJ9W2BSGYaNjJEzj5d8
status: active
merged_into: null
display_name: 王翊運
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PHufQFUUQd9nPQzGsHt98k
        subject_person_id: p_EBcXJ9W2BSGYaNjJEzj5d8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翊運
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3MLJ6z5HRzK676YdLJLXvg
          claim_id: c_PHufQFUUQd9nPQzGsHt98k
          source_id: s_b6YBTBfgPpApd67CzkFW45
          stance: supports
          locator: CBDB:639894
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639894）
          source: &a1
            id: s_b6YBTBfgPpApd67CzkFW45
            source_type: api_record
            title: 中国历代人物传记资料库：王翊運（CBDB 639894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639894&o=json
            external_identifier: CBDB:639894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.075Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oNjQNFgNye6QivqRP8bp1F
        subject_person_id: p_EBcXJ9W2BSGYaNjJEzj5d8
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
        - id: cs_AifTKEfwpF9uHXKHX3Ud9a
          claim_id: c_oNjQNFgNye6QivqRP8bp1F
          source_id: s_b6YBTBfgPpApd67CzkFW45
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

# 王翊運

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翊運 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翊運（CBDB 639894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639894&o=json)
