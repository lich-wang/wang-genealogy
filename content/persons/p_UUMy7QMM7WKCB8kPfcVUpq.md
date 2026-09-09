---
schema: wang-person/v1
id: p_UUMy7QMM7WKCB8kPfcVUpq
status: active
merged_into: null
display_name: 王魯庭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JQyUtNvJf4A9fDvbL1vv6o
        subject_person_id: p_UUMy7QMM7WKCB8kPfcVUpq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王魯庭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sqJvGSdAumP8Ra29tVm4jh
          claim_id: c_JQyUtNvJf4A9fDvbL1vv6o
          source_id: s_2wasKPYwMJYP4F1gE4u73A
          stance: supports
          locator: CBDB:640915
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640915）
          source: &a1
            id: s_2wasKPYwMJYP4F1gE4u73A
            source_type: api_record
            title: 中国历代人物传记资料库：王魯庭（CBDB 640915）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640915&o=json
            external_identifier: CBDB:640915
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.411Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CnhLE7WGkVvV9FkqyTsEGV
        subject_person_id: p_UUMy7QMM7WKCB8kPfcVUpq
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
        - id: cs_UQA7LsocruCkLHwQnP524H
          claim_id: c_CnhLE7WGkVvV9FkqyTsEGV
          source_id: s_2wasKPYwMJYP4F1gE4u73A
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

# 王魯庭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王魯庭 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王魯庭（CBDB 640915）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640915&o=json)
