---
schema: wang-person/v1
id: p_4MQNbYanr85ZD5eECioUpp
status: active
merged_into: null
display_name: 王守廉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gjcmN9TgZmqnLwBFxx97WF
        subject_person_id: p_4MQNbYanr85ZD5eECioUpp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守廉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VxAvM8ohWdSauXr6DS5aSe
          claim_id: c_gjcmN9TgZmqnLwBFxx97WF
          source_id: s_Xt6EFxTaBxQFEMJ1NvSba4
          stance: supports
          locator: CBDB:141446
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141446）
          source: &a1
            id: s_Xt6EFxTaBxQFEMJ1NvSba4
            source_type: api_record
            title: 中国历代人物传记资料库：王守廉（CBDB 141446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141446&o=json
            external_identifier: CBDB:141446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.558Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9yYTsAhqtjaLtXMwneVUs5
        subject_person_id: p_4MQNbYanr85ZD5eECioUpp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 735年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TrkD3xsAgQSfKGGjDKMKQK
          claim_id: c_9yYTsAhqtjaLtXMwneVUs5
          source_id: s_Xt6EFxTaBxQFEMJ1NvSba4
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
        id: c_S4HWC2B96A2wRnL5PqCMTN
        subject_person_id: p_4MQNbYanr85ZD5eECioUpp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 811年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fxaqKQ4BM8moKub1otfuFp
          claim_id: c_S4HWC2B96A2wRnL5PqCMTN
          source_id: s_Xt6EFxTaBxQFEMJ1NvSba4
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
        id: c_sWvcWC1A47UD4HdEgdJd6s
        subject_person_id: p_4MQNbYanr85ZD5eECioUpp
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
        - id: cs_mvpUBp6mwRHHq5k9ZGpCr6
          claim_id: c_sWvcWC1A47UD4HdEgdJd6s
          source_id: s_Xt6EFxTaBxQFEMJ1NvSba4
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

# 王守廉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守廉 | accepted |
| birth.date | 735年 | accepted |
| death.date | 811年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守廉（CBDB 141446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141446&o=json)
