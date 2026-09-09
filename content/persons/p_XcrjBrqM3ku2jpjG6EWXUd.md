---
schema: wang-person/v1
id: p_XcrjBrqM3ku2jpjG6EWXUd
status: active
merged_into: null
display_name: 王盈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a4TjGW8WopPqHt81WRaHWz
        subject_person_id: p_XcrjBrqM3ku2jpjG6EWXUd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王盈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uHCZ1Nfd22bBtcVVy683hA
          claim_id: c_a4TjGW8WopPqHt81WRaHWz
          source_id: s_s1LBXji5R8yCybzRkFX9pZ
          stance: supports
          locator: CBDB:160793
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（160793）
          source: &a1
            id: s_s1LBXji5R8yCybzRkFX9pZ
            source_type: api_record
            title: 中国历代人物传记资料库：王盈（CBDB 160793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160793&o=json
            external_identifier: CBDB:160793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.943Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EKHAKC9Ff9tD3rjVQvePYV
        subject_person_id: p_XcrjBrqM3ku2jpjG6EWXUd
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
        - id: cs_ZkyKkPc8waaZqCJ3iSunV6
          claim_id: c_EKHAKC9Ff9tD3rjVQvePYV
          source_id: s_s1LBXji5R8yCybzRkFX9pZ
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

# 王盈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王盈 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王盈（CBDB 160793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160793&o=json)
