---
schema: wang-person/v1
id: p_A92V9MUJF3wFH18e6PUzm3
status: active
merged_into: null
display_name: 王更憐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eTjxR3LQL79VgFEbLsRdLA
        subject_person_id: p_A92V9MUJF3wFH18e6PUzm3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王更憐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nFC4v2B9KTBSFARC8nVbJR
          claim_id: c_eTjxR3LQL79VgFEbLsRdLA
          source_id: s_9nPHFyCeDRvXN3viBAuM64
          stance: supports
          locator: CBDB:573448
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573448）
          source: &a1
            id: s_9nPHFyCeDRvXN3viBAuM64
            source_type: api_record
            title: 中国历代人物传记资料库：王更憐（CBDB 573448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573448&o=json
            external_identifier: CBDB:573448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.658Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cXDv7sC8gH2R8PTjV3oKXr
        subject_person_id: p_A92V9MUJF3wFH18e6PUzm3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D9UjVQafcfPggLfHwE57eE
          claim_id: c_cXDv7sC8gH2R8PTjV3oKXr
          source_id: s_9nPHFyCeDRvXN3viBAuM64
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

# 王更憐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王更憐 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王更憐（CBDB 573448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573448&o=json)
