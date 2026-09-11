---
schema: wang-person/v1
id: p_NYU9LHMxjG9jStisHmxAV9
status: active
merged_into: null
display_name: 王申
revision: 2
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
          text: 王申（卒于806年），唐人物。籍贯北芒山。（中国历代人物传记资料库 CBDB 175737）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q6LOJXDpwdhoLecdqSplyA
          claim_id: c_oeDKB5uLb4N8WbybjwZCMf
          source_id: s_NBTNX8U969TFYPgHwaMJKo
          stance: supports
          locator: CBDB:175737
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e5tIX2auS7SXS798y86gvi
        subject_person_id: p_637jeGSPEF7GY1ZoDzn4rK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NYU9LHMxjG9jStisHmxAV9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uuyeaFWBgDDVLSyfcDqS2c
          claim_id: c_e5tIX2auS7SXS798y86gvi
          source_id: s_PscNhNpQtsMQwhBYs8xYDi
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PscNhNpQtsMQwhBYs8xYDi
            source_type: api_record
            title: 中国历代人物传记资料库：王令元（CBDB 175734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175734&o=json
            external_identifier: CBDB:175734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.252Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_637jeGSPEF7GY1ZoDzn4rK
        status: active
        display_name: 王令元
        merged_into_person_id: null
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
| bio.summary | 王申（卒于806年），唐人物。籍贯北芒山。（中国历代人物传记资料库 CBDB 175737） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_637jeGSPEF7GY1ZoDzn4rK | 王令元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王令元（CBDB 175734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175734&o=json)
- [中国历代人物传记资料库：王申（CBDB 175737）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175737&o=json)
