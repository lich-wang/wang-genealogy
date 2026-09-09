---
schema: wang-person/v1
id: p_4cM5KEoV8pA4wy4Qw3x667
status: active
merged_into: null
display_name: 王乘鸞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1qKMsUoH9MRY5DuKXPx6hA
        subject_person_id: p_4cM5KEoV8pA4wy4Qw3x667
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乘鸞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GfvizrXgLsNtm26WgsiB3C
          claim_id: c_1qKMsUoH9MRY5DuKXPx6hA
          source_id: s_1jJZGhttaTmKnMB9gaYKZF
          stance: supports
          locator: CBDB:635829
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635829）
          source: &a1
            id: s_1jJZGhttaTmKnMB9gaYKZF
            source_type: api_record
            title: 中国历代人物传记资料库：王乘鸞（CBDB 635829）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635829&o=json
            external_identifier: CBDB:635829
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.805Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZmeVwo5h79q8RDU4PGCbyK
        subject_person_id: p_4cM5KEoV8pA4wy4Qw3x667
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
        - id: cs_x23K5zBhXiscpr5yaMHX5P
          claim_id: c_ZmeVwo5h79q8RDU4PGCbyK
          source_id: s_1jJZGhttaTmKnMB9gaYKZF
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

# 王乘鸞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王乘鸞 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王乘鸞（CBDB 635829）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635829&o=json)
