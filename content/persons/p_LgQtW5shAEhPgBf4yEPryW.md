---
schema: wang-person/v1
id: p_LgQtW5shAEhPgBf4yEPryW
status: active
merged_into: null
display_name: 王隼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b567sHpoBd58tdXBaj9SdU
        subject_person_id: p_LgQtW5shAEhPgBf4yEPryW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qf5VKFAKz6tBCKJyKA5dTx
          claim_id: c_b567sHpoBd58tdXBaj9SdU
          source_id: s_wbRGjA4DXKDScsH67wZtex
          stance: supports
          locator: CBDB:69329
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69329）
          source: &a1
            id: s_wbRGjA4DXKDScsH67wZtex
            source_type: api_record
            title: 中国历代人物传记资料库：王隼（CBDB 69329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69329&o=json
            external_identifier: CBDB:69329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.209Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hf91dTyFSzt4iEWMfLZJ8w
        subject_person_id: p_LgQtW5shAEhPgBf4yEPryW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1644年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rK3gCknBGM6YGC2RzuqG3P
          claim_id: c_hf91dTyFSzt4iEWMfLZJ8w
          source_id: s_wbRGjA4DXKDScsH67wZtex
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
        id: c_QvWAv7TG2dnTMSjB1Nsun6
        subject_person_id: p_LgQtW5shAEhPgBf4yEPryW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1700年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KPpKLYUJYgyiBVsUzadUqk
          claim_id: c_QvWAv7TG2dnTMSjB1Nsun6
          source_id: s_wbRGjA4DXKDScsH67wZtex
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
        id: c_GdquxJjZ4L5fQEQPdvr1u5
        subject_person_id: p_LgQtW5shAEhPgBf4yEPryW
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
        - id: cs_cqiixCStX1p5USqSiV6VRQ
          claim_id: c_GdquxJjZ4L5fQEQPdvr1u5
          source_id: s_wbRGjA4DXKDScsH67wZtex
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

# 王隼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王隼 | accepted |
| birth.date | 1644年 | accepted |
| death.date | 1700年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王隼（CBDB 69329）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69329&o=json)
