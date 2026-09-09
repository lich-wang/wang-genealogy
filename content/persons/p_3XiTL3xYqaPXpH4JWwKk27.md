---
schema: wang-person/v1
id: p_3XiTL3xYqaPXpH4JWwKk27
status: active
merged_into: null
display_name: 王益
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jJke7pGNtxZ9uQt91JjyRW
        subject_person_id: p_3XiTL3xYqaPXpH4JWwKk27
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_az7GTNm25wjVEuG8bqMHvZ
          claim_id: c_jJke7pGNtxZ9uQt91JjyRW
          source_id: s_2AyFNdhRfrJXCf5JTRjTfa
          stance: supports
          locator: CBDB:92067
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92067）
          source: &a1
            id: s_2AyFNdhRfrJXCf5JTRjTfa
            source_type: api_record
            title: 中国历代人物传记资料库：王益（CBDB 92067）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92067&o=json
            external_identifier: CBDB:92067
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.113Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W6PWiM3dde7Npm45AnN45Z
        subject_person_id: p_3XiTL3xYqaPXpH4JWwKk27
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7vgzCTNKsp3a9m8KwdFfhA
          claim_id: c_W6PWiM3dde7Npm45AnN45Z
          source_id: s_2AyFNdhRfrJXCf5JTRjTfa
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

# 王益

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王益 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王益（CBDB 92067）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92067&o=json)
