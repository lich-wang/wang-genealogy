---
schema: wang-person/v1
id: p_e5MQ5CBhn9uF5QffiX1yWB
status: active
merged_into: null
display_name: 王國寶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_996gzncksyuV2wnZUMx9aH
        subject_person_id: p_e5MQ5CBhn9uF5QffiX1yWB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國寶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_udfizX3oNnXmiHBpExn6Vv
          claim_id: c_996gzncksyuV2wnZUMx9aH
          source_id: s_6NypAPbj8TwVLk9dvDM3UK
          stance: supports
          locator: CBDB:191568
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191568）
          source: &a1
            id: s_6NypAPbj8TwVLk9dvDM3UK
            source_type: api_record
            title: 中国历代人物传记资料库：王國寶（CBDB 191568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191568&o=json
            external_identifier: CBDB:191568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.366Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_WZ9R9UVHgMLWrvgPk6Bo7b
        subject_person_id: p_e5MQ5CBhn9uF5QffiX1yWB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 834年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jVAC57PyqoqJ87xCDqxAxK
          claim_id: c_WZ9R9UVHgMLWrvgPk6Bo7b
          source_id: s_6NypAPbj8TwVLk9dvDM3UK
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
        id: c_D77vemKeaiyiGT1su3xDD4
        subject_person_id: p_e5MQ5CBhn9uF5QffiX1yWB
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
        - id: cs_5Fby9N6r1Ujv9cXm2YPaWq
          claim_id: c_D77vemKeaiyiGT1su3xDD4
          source_id: s_6NypAPbj8TwVLk9dvDM3UK
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

# 王國寶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國寶 | accepted |
| death.date | 834年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國寶（CBDB 191568）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191568&o=json)
