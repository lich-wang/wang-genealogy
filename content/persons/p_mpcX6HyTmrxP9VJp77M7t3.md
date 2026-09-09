---
schema: wang-person/v1
id: p_mpcX6HyTmrxP9VJp77M7t3
status: active
merged_into: null
display_name: 王錫彤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WSMZkHhm92rh3Q93hfh1Kt
        subject_person_id: p_mpcX6HyTmrxP9VJp77M7t3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫彤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EE8DjF7Nyhty5RWBNmW2tE
          claim_id: c_WSMZkHhm92rh3Q93hfh1Kt
          source_id: s_qSRtNJxiytFFDRuV4ULPD7
          stance: supports
          locator: CBDB:72116
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72116）
          source: &a1
            id: s_qSRtNJxiytFFDRuV4ULPD7
            source_type: api_record
            title: 中国历代人物传记资料库：王錫彤（CBDB 72116）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72116&o=json
            external_identifier: CBDB:72116
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.001Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qQCBx3UiKXo6WfAqDLrG2q
        subject_person_id: p_mpcX6HyTmrxP9VJp77M7t3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1866年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m1q5E93PHWdhK3L8smTPnA
          claim_id: c_qQCBx3UiKXo6WfAqDLrG2q
          source_id: s_qSRtNJxiytFFDRuV4ULPD7
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
        id: c_EVQiVzaya2i8phg7HQN5M5
        subject_person_id: p_mpcX6HyTmrxP9VJp77M7t3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1938年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CMYZr11w9KZ9BwcvEuCD2h
          claim_id: c_EVQiVzaya2i8phg7HQN5M5
          source_id: s_qSRtNJxiytFFDRuV4ULPD7
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
        id: c_7K637ZcJUP3P9Kf5q6muej
        subject_person_id: p_mpcX6HyTmrxP9VJp77M7t3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6VBjuHsZM3pPMECTxh9ivY
          claim_id: c_7K637ZcJUP3P9Kf5q6muej
          source_id: s_qSRtNJxiytFFDRuV4ULPD7
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

# 王錫彤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫彤 | accepted |
| birth.date | 1866年 | accepted |
| death.date | 1938年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫彤（CBDB 72116）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72116&o=json)
