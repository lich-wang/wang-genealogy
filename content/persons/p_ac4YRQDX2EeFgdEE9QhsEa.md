---
schema: wang-person/v1
id: p_ac4YRQDX2EeFgdEE9QhsEa
status: active
merged_into: null
display_name: 王汝礪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_96jQHZQC7aE9gbdeLhvV6H
        subject_person_id: p_ac4YRQDX2EeFgdEE9QhsEa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝礪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sR5GjfoP7mU26S4oaMkaP4
          claim_id: c_96jQHZQC7aE9gbdeLhvV6H
          source_id: s_cN251t7dFyZLxdMT6XLLGj
          stance: supports
          locator: CBDB:510373
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（510373）
          source: &a1
            id: s_cN251t7dFyZLxdMT6XLLGj
            source_type: api_record
            title: 中国历代人物传记资料库：王汝礪（CBDB 510373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510373&o=json
            external_identifier: CBDB:510373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.234Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_55KDEPjeuh2wLbwBBvYBEJ
        subject_person_id: p_ac4YRQDX2EeFgdEE9QhsEa
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
        - id: cs_UC2FBxBjkV9oX6P48eDs3T
          claim_id: c_55KDEPjeuh2wLbwBBvYBEJ
          source_id: s_cN251t7dFyZLxdMT6XLLGj
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

# 王汝礪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝礪 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝礪（CBDB 510373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510373&o=json)
