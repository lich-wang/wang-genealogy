---
schema: wang-person/v1
id: p_qNRopovK6RizngadNjxAN4
status: active
merged_into: null
display_name: 王允武
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q4ZfCdBjkn37tqkPZ7hVUS
        subject_person_id: p_qNRopovK6RizngadNjxAN4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jefU6JP821yC859nhAd28j
          claim_id: c_q4ZfCdBjkn37tqkPZ7hVUS
          source_id: s_pTPV7WLVcv1gUK7kMczf11
          stance: supports
          locator: CBDB:126477
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126477）
          source: &a1
            id: s_pTPV7WLVcv1gUK7kMczf11
            source_type: api_record
            title: 中国历代人物传记资料库：王允武（CBDB 126477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126477&o=json
            external_identifier: CBDB:126477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.979Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_16sqXbuNwE4kWZEFtYDsLq
        subject_person_id: p_qNRopovK6RizngadNjxAN4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1504年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_66G7KmA2rMYioo41ZFJeHm
          claim_id: c_16sqXbuNwE4kWZEFtYDsLq
          source_id: s_pTPV7WLVcv1gUK7kMczf11
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
        id: c_nQwTddcxDLPtfociyPzJ3d
        subject_person_id: p_qNRopovK6RizngadNjxAN4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1562年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XyZ9DHXhFzj66tuGVbAWr4
          claim_id: c_nQwTddcxDLPtfociyPzJ3d
          source_id: s_pTPV7WLVcv1gUK7kMczf11
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
        id: c_1gUwZe31r9zidBsHHU1Jge
        subject_person_id: p_qNRopovK6RizngadNjxAN4
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
        - id: cs_FyhL33J1HEkpJeonrLuBEN
          claim_id: c_1gUwZe31r9zidBsHHU1Jge
          source_id: s_pTPV7WLVcv1gUK7kMczf11
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

# 王允武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允武 | accepted |
| birth.date | 1504年 | accepted |
| death.date | 1562年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允武（CBDB 126477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126477&o=json)
