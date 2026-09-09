---
schema: wang-person/v1
id: p_wKvGTskPwF5yoaMhpXH6fM
status: active
merged_into: null
display_name: 王伯大
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZXxDCU6B5XM8wfcptpiLU8
        subject_person_id: p_wKvGTskPwF5yoaMhpXH6fM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯大
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vV33ASJPoJzr2VGHizWqJ7
          claim_id: c_ZXxDCU6B5XM8wfcptpiLU8
          source_id: s_jCBCztVqG8m6WoMv1J6xwk
          stance: supports
          locator: CBDB:20099
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（20099）
          source: &a1
            id: s_jCBCztVqG8m6WoMv1J6xwk
            source_type: api_record
            title: 中国历代人物传记资料库：王伯大（CBDB 20099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20099&o=json
            external_identifier: CBDB:20099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.757Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mh549an3cXq8QYkhsqBCCw
        subject_person_id: p_wKvGTskPwF5yoaMhpXH6fM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1253年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YSY525WgGMmNRffo1o6yeG
          claim_id: c_mh549an3cXq8QYkhsqBCCw
          source_id: s_jCBCztVqG8m6WoMv1J6xwk
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
        id: c_hYKxHSkV1GyqTEBW6dgDaX
        subject_person_id: p_wKvGTskPwF5yoaMhpXH6fM
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
        - id: cs_jvPvQpMwQ95H8mFcEGsuN1
          claim_id: c_hYKxHSkV1GyqTEBW6dgDaX
          source_id: s_jCBCztVqG8m6WoMv1J6xwk
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

# 王伯大

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯大 | accepted |
| death.date | 1253年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伯大（CBDB 20099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20099&o=json)
