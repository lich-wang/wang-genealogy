---
schema: wang-person/v1
id: p_buHPPD7o3Zg7opBbsnKMQ6
status: active
merged_into: null
display_name: 王公素
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BU9KyNJ5z95uNFQCkbCsL6
        subject_person_id: p_buHPPD7o3Zg7opBbsnKMQ6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公素
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cAb8xBxAfMGK1wypAF6UWK
          claim_id: c_BU9KyNJ5z95uNFQCkbCsL6
          source_id: s_996GfbKAQ5DEPwFZuhv8rv
          stance: supports
          locator: CBDB:141742
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141742）
          source: &a1
            id: s_996GfbKAQ5DEPwFZuhv8rv
            source_type: api_record
            title: 中国历代人物传记资料库：王公素（CBDB 141742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141742&o=json
            external_identifier: CBDB:141742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_bwQJfi3y5pb1ShFs5X4bJD
        subject_person_id: p_buHPPD7o3Zg7opBbsnKMQ6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 787年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P3q4keR71bbNFZEyKQ3NTE
          claim_id: c_bwQJfi3y5pb1ShFs5X4bJD
          source_id: s_996GfbKAQ5DEPwFZuhv8rv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ktCgWDLvrue4DoJ6G4Qjh2
        subject_person_id: p_buHPPD7o3Zg7opBbsnKMQ6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 857年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1VgnLLgpa9q9htkyAYpdLS
          claim_id: c_ktCgWDLvrue4DoJ6G4Qjh2
          source_id: s_996GfbKAQ5DEPwFZuhv8rv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FM5HJWXhBdDYkXKcuNNDD1
        subject_person_id: p_buHPPD7o3Zg7opBbsnKMQ6
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
        - id: cs_RNqrGXanqvAbD1vomZ7KhM
          claim_id: c_FM5HJWXhBdDYkXKcuNNDD1
          source_id: s_996GfbKAQ5DEPwFZuhv8rv
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

# 王公素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公素 | accepted |
| birth.date | 787年 | accepted |
| death.date | 857年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公素（CBDB 141742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141742&o=json)
