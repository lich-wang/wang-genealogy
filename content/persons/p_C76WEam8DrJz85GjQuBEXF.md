---
schema: wang-person/v1
id: p_C76WEam8DrJz85GjQuBEXF
status: active
merged_into: null
display_name: 王頌蔚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gsH1ZaYCZ9ZE7tCnJVRn2z
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頌蔚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bkrabDHkMKEmsb2BMVZGge
          claim_id: c_gsH1ZaYCZ9ZE7tCnJVRn2z
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
          stance: supports
          locator: CBDB:69381
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69381）
          source: &a1
            id: s_g2v8cqJ5RPSCgN3VLzp6tD
            source_type: api_record
            title: 中国历代人物传记资料库：王頌蔚（CBDB 69381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69381&o=json
            external_identifier: CBDB:69381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_T5eUHKfJZMYeBHF6qAWyDG
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1849年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iCkyh6BJ6LkU3a6MpyTrAL
          claim_id: c_T5eUHKfJZMYeBHF6qAWyDG
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
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
        id: c_QS3mawzbGreZa373D5Lsmw
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1896年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yZxqHokKiKE6BuXo9jVU7m
          claim_id: c_QS3mawzbGreZa373D5Lsmw
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
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
        id: c_KjmNT7N1quLDUTKes8AX8L
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
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
        - id: cs_qKUR1TR4ZLJNUv1yEwi9PA
          claim_id: c_KjmNT7N1quLDUTKes8AX8L
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
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

# 王頌蔚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王頌蔚 | accepted |
| birth.date | 1849年 | accepted |
| death.date | 1896年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王頌蔚（CBDB 69381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69381&o=json)
