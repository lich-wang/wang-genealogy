---
schema: wang-person/v1
id: p_igVFetcsD35N9WwgT4pLmG
status: active
merged_into: null
display_name: 王紳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y8cEU6Se7iHp4unC3HeBqs
        subject_person_id: p_igVFetcsD35N9WwgT4pLmG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nGAYbxZeAWS1wVU1WrnwA7
          claim_id: c_y8cEU6Se7iHp4unC3HeBqs
          source_id: s_wh3ePp54c1hM1u9haYiJxg
          stance: supports
          locator: CBDB:3975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3975）
          source: &a1
            id: s_wh3ePp54c1hM1u9haYiJxg
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 3975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3975&o=json
            external_identifier: CBDB:3975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.439Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BfDMdsqkf6peBPxJMbfoV4
        subject_person_id: p_igVFetcsD35N9WwgT4pLmG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1024年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hbKBy166bZZKFv893gxBrF
          claim_id: c_BfDMdsqkf6peBPxJMbfoV4
          source_id: s_wh3ePp54c1hM1u9haYiJxg
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
        id: c_yUvtTJ4hqJb2azCqc7tJRk
        subject_person_id: p_igVFetcsD35N9WwgT4pLmG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1064年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vSfFPnF4xfq4ypm4X7H6JK
          claim_id: c_yUvtTJ4hqJb2azCqc7tJRk
          source_id: s_wh3ePp54c1hM1u9haYiJxg
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
        id: c_PJp7WKpvHnYLiqSbFFH48J
        subject_person_id: p_igVFetcsD35N9WwgT4pLmG
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
        - id: cs_C85TXxkfrJcT8wg8kcn6Mx
          claim_id: c_PJp7WKpvHnYLiqSbFFH48J
          source_id: s_wh3ePp54c1hM1u9haYiJxg
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

# 王紳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紳 | accepted |
| birth.date | 1024年 | accepted |
| death.date | 1064年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紳（CBDB 3975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3975&o=json)
