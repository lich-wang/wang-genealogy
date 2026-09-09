---
schema: wang-person/v1
id: p_NYU9LHMxjG9jStisHmxAV9
status: active
merged_into: null
display_name: 王申
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8tuGisd88VkKw2Yi3676ea
        subject_person_id: p_NYU9LHMxjG9jStisHmxAV9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王申
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XMm1Wnwqi8eu6Bm691R4bF
          claim_id: c_8tuGisd88VkKw2Yi3676ea
          source_id: s_NBTNX8U969TFYPgHwaMJKo
          stance: supports
          locator: CBDB:175737
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175737）
          source: &a1
            id: s_NBTNX8U969TFYPgHwaMJKo
            source_type: api_record
            title: 中国历代人物传记资料库：王申（CBDB 175737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175737&o=json
            external_identifier: CBDB:175737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.090Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_feAagyNTTuzFubQ56Uq2uo
        subject_person_id: p_NYU9LHMxjG9jStisHmxAV9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 806年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8KhXeV1Ed56TRXBzT6JPoT
          claim_id: c_feAagyNTTuzFubQ56Uq2uo
          source_id: s_NBTNX8U969TFYPgHwaMJKo
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
        id: c_oeDKB5uLb4N8WbybjwZCMf
        subject_person_id: p_NYU9LHMxjG9jStisHmxAV9
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
        - id: cs_CM7KRSqKj8DAxw79Vo2HQK
          claim_id: c_oeDKB5uLb4N8WbybjwZCMf
          source_id: s_NBTNX8U969TFYPgHwaMJKo
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

# 王申

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王申 | accepted |
| death.date | 806年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王申（CBDB 175737）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175737&o=json)
