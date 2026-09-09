---
schema: wang-person/v1
id: p_FtC1XQCji1YiVwcStMfdYg
status: active
merged_into: null
display_name: 王林
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CDN6w7u76kW5vuc6tRqWtS
        subject_person_id: p_FtC1XQCji1YiVwcStMfdYg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9Z5r9g1V7AaymQ5sUKDGQ9
          claim_id: c_CDN6w7u76kW5vuc6tRqWtS
          source_id: s_8ERgNm49x4TyzSy7uMwWst
          stance: supports
          locator: CBDB:213405
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213405）
          source: &a1
            id: s_8ERgNm49x4TyzSy7uMwWst
            source_type: api_record
            title: 中国历代人物传记资料库：王林（CBDB 213405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213405&o=json
            external_identifier: CBDB:213405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.113Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZQ1aecLaZQBCkeH8px6DqP
        subject_person_id: p_FtC1XQCji1YiVwcStMfdYg
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
        - id: cs_7N8u5RR4dMjndXZPPuELNz
          claim_id: c_ZQ1aecLaZQBCkeH8px6DqP
          source_id: s_8ERgNm49x4TyzSy7uMwWst
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

# 王林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王林 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王林（CBDB 213405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213405&o=json)
