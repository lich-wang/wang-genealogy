---
schema: wang-person/v1
id: p_bb4uNBnkCDpyeNa35JCd9T
status: active
merged_into: null
display_name: 王譚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8EFT6GY6tFR1iTgYXQUri6
        subject_person_id: p_bb4uNBnkCDpyeNa35JCd9T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王譚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NvnJy6sk5HP4u6yd8AcXQr
          claim_id: c_8EFT6GY6tFR1iTgYXQUri6
          source_id: s_qoTa2nNznviLxzB6AzpSw8
          stance: supports
          locator: CBDB:144955
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（144955）
          source: &a1
            id: s_qoTa2nNznviLxzB6AzpSw8
            source_type: api_record
            title: 中国历代人物传记资料库：王譚（CBDB 144955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144955&o=json
            external_identifier: CBDB:144955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.642Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JT3oSCtaAy46rLseTsXfN9
        subject_person_id: p_bb4uNBnkCDpyeNa35JCd9T
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 813年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_89T72ifwjF4HA81yQ6p9jG
          claim_id: c_JT3oSCtaAy46rLseTsXfN9
          source_id: s_qoTa2nNznviLxzB6AzpSw8
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
        id: c_1ckFvy3Bas3QrfLJ1Sbtob
        subject_person_id: p_bb4uNBnkCDpyeNa35JCd9T
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 864年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CFZryGnENFSjdNtrJQAxUN
          claim_id: c_1ckFvy3Bas3QrfLJ1Sbtob
          source_id: s_qoTa2nNznviLxzB6AzpSw8
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
        id: c_KXhqF1uJB7sA6Q21JSUoBQ
        subject_person_id: p_bb4uNBnkCDpyeNa35JCd9T
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
        - id: cs_Uac9dFZ5qCZiVqqA6J47eG
          claim_id: c_KXhqF1uJB7sA6Q21JSUoBQ
          source_id: s_qoTa2nNznviLxzB6AzpSw8
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

# 王譚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王譚 | accepted |
| birth.date | 813年 | accepted |
| death.date | 864年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王譚（CBDB 144955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144955&o=json)
