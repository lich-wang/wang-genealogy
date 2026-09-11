---
schema: wang-person/v1
id: p_637jeGSPEF7GY1ZoDzn4rK
status: active
merged_into: null
display_name: 王令元
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EQVyLBEW8A5UG7M7j16ZvF
        subject_person_id: p_637jeGSPEF7GY1ZoDzn4rK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王令元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JNuB6heoX4AxanFRJP7kzy
          claim_id: c_EQVyLBEW8A5UG7M7j16ZvF
          source_id: s_PscNhNpQtsMQwhBYs8xYDi
          stance: supports
          locator: CBDB:175734
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175734）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9qq7EichS4XRt1nkni3oKC
        subject_person_id: p_637jeGSPEF7GY1ZoDzn4rK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 769年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rvXsKGoHVVEjXnjg2ZiKjw
          claim_id: c_9qq7EichS4XRt1nkni3oKC
          source_id: s_PscNhNpQtsMQwhBYs8xYDi
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
        id: c_UvDYp9to2pgZgJ1HFnHzXe
        subject_person_id: p_637jeGSPEF7GY1ZoDzn4rK
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
        - id: cs_i6hEp6HzGJoTP6cd3pHCKC
          claim_id: c_UvDYp9to2pgZgJ1HFnHzXe
          source_id: s_PscNhNpQtsMQwhBYs8xYDi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_1Y8XcrcqwHJS7gE37uz-ru
        subject_person_id: p_637jeGSPEF7GY1ZoDzn4rK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wZLsyUPWJEtvvYr3vt2i9j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I9n1D2bpAdEIGt7XfDPr8C
          claim_id: c_1Y8XcrcqwHJS7gE37uz-ru
          source_id: s_PscNhNpQtsMQwhBYs8xYDi
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wZLsyUPWJEtvvYr3vt2i9j
        status: active
        display_name: 王華
        merged_into_person_id: null
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
          source: *a1
      object_person:
        id: p_NYU9LHMxjG9jStisHmxAV9
        status: active
        display_name: 王申
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王令元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王令元 | accepted |
| death.date | 769年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wZLsyUPWJEtvvYr3vt2i9j | 王華 | accepted |
| children | p_NYU9LHMxjG9jStisHmxAV9 | 王申 | accepted |

## 外部来源

- [中国历代人物传记资料库：王令元（CBDB 175734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175734&o=json)
