---
schema: wang-person/v1
id: p_esnkJduB5GpM6eiD8Nh16h
status: active
merged_into: null
display_name: 王之垣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xdqMD7xN7Qinp852q9tW4e
        subject_person_id: p_esnkJduB5GpM6eiD8Nh16h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之垣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JFG9uWWDgRhBHi5w7qmRy3
          claim_id: c_xdqMD7xN7Qinp852q9tW4e
          source_id: s_J5h1ziQ5NRt7PNTDno5XKU
          stance: supports
          locator: CBDB:126464
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126464）
          source: &a1
            id: s_J5h1ziQ5NRt7PNTDno5XKU
            source_type: api_record
            title: 中国历代人物传记资料库：王之垣（CBDB 126464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126464&o=json
            external_identifier: CBDB:126464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.974Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qMeKFfiJNPhsEeX7Zi7p7p
        subject_person_id: p_esnkJduB5GpM6eiD8Nh16h
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1527年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7LaMCfVRFEvm1J6tBuu3Jx
          claim_id: c_qMeKFfiJNPhsEeX7Zi7p7p
          source_id: s_J5h1ziQ5NRt7PNTDno5XKU
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
        id: c_XAhjY17zXRqvLxNWHCbhUG
        subject_person_id: p_esnkJduB5GpM6eiD8Nh16h
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1604年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HtqcCiqy8A7XHrfVL16X2Z
          claim_id: c_XAhjY17zXRqvLxNWHCbhUG
          source_id: s_J5h1ziQ5NRt7PNTDno5XKU
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
        id: c_9vefvqq1GGJ5NiE2A5CEW6
        subject_person_id: p_esnkJduB5GpM6eiD8Nh16h
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
        - id: cs_75RAjB1hpY5GrLULtmv5GN
          claim_id: c_9vefvqq1GGJ5NiE2A5CEW6
          source_id: s_J5h1ziQ5NRt7PNTDno5XKU
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

# 王之垣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之垣 | accepted |
| birth.date | 1527年 | accepted |
| death.date | 1604年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之垣（CBDB 126464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126464&o=json)
