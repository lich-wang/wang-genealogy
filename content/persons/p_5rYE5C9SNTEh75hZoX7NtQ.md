---
schema: wang-person/v1
id: p_5rYE5C9SNTEh75hZoX7NtQ
status: active
merged_into: null
display_name: 王賢佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZbUchgKJDm7dGEt3E8jYrg
        subject_person_id: p_5rYE5C9SNTEh75hZoX7NtQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fy7762HDuzYsNqR4BrGgPb
          claim_id: c_ZbUchgKJDm7dGEt3E8jYrg
          source_id: s_oHbS6NTESHxL7VDvNDyJDB
          stance: supports
          locator: CBDB:542979
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（542979）
          source: &a1
            id: s_oHbS6NTESHxL7VDvNDyJDB
            source_type: api_record
            title: 中国历代人物传记资料库：王賢佐（CBDB 542979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=542979&o=json
            external_identifier: CBDB:542979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.470Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NVVpDxSPYs1vYAd6LQtetH
        subject_person_id: p_5rYE5C9SNTEh75hZoX7NtQ
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
        - id: cs_b6B893j8qDZKmCVyDjqVjU
          claim_id: c_NVVpDxSPYs1vYAd6LQtetH
          source_id: s_oHbS6NTESHxL7VDvNDyJDB
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

# 王賢佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賢佐 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賢佐（CBDB 542979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=542979&o=json)
