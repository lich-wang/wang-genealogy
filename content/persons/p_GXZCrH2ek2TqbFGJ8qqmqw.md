---
schema: wang-person/v1
id: p_GXZCrH2ek2TqbFGJ8qqmqw
status: active
merged_into: null
display_name: 王宇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AzAHJBrQ7G9FwUyK6sa8SY
        subject_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q2MydjMTRcHd5arze11J22
          claim_id: c_AzAHJBrQ7G9FwUyK6sa8SY
          source_id: s_Q26QGsE1tDWf8c5tgB1Cix
          stance: supports
          locator: CBDB:204187
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204187）
          source: &a1
            id: s_Q26QGsE1tDWf8c5tgB1Cix
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 204187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204187&o=json
            external_identifier: CBDB:204187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.819Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_at3QfA8QBXM2Dmz8hx2Kkw
        subject_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1518年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A2VG13n3HmdYit16DEG2EL
          claim_id: c_at3QfA8QBXM2Dmz8hx2Kkw
          source_id: s_Q26QGsE1tDWf8c5tgB1Cix
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6jYs97JCFkzxNLxKfoP8BQ
        subject_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
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
        - id: cs_gUD5XX8se6VWajbRgfF9Kg
          claim_id: c_6jYs97JCFkzxNLxKfoP8BQ
          source_id: s_Q26QGsE1tDWf8c5tgB1Cix
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

# 王宇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宇 | accepted |
| birth.date | 1518年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宇（CBDB 204187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204187&o=json)
