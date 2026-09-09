---
schema: wang-person/v1
id: p_4jMB4wSNYdd6Z9yYzK3VNM
status: active
merged_into: null
display_name: 王鄖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DLSmMhtg9FeH8gzrSNEAXa
        subject_person_id: p_4jMB4wSNYdd6Z9yYzK3VNM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鄖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8L3yhoDhSW1JuYNdHxrXMm
          claim_id: c_DLSmMhtg9FeH8gzrSNEAXa
          source_id: s_N6DoFYEuxcxYEi1L49RgD4
          stance: supports
          locator: CBDB:71131
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71131）
          source: &a1
            id: s_N6DoFYEuxcxYEi1L49RgD4
            source_type: api_record
            title: 中国历代人物传记资料库：王鄖（CBDB 71131）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71131&o=json
            external_identifier: CBDB:71131
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.405Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_op7m8aDzK3tw8wZJAf8WHc
        subject_person_id: p_4jMB4wSNYdd6Z9yYzK3VNM
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
        - id: cs_SQS4StSBoFajC7PTKkgE44
          claim_id: c_op7m8aDzK3tw8wZJAf8WHc
          source_id: s_N6DoFYEuxcxYEi1L49RgD4
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
        id: c_LtgrCw7zdnEWUzXM3exNYD
        subject_person_id: p_4jMB4wSNYdd6Z9yYzK3VNM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1703年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_av7FjqzwtWAVKevAQNGT3s
          claim_id: c_LtgrCw7zdnEWUzXM3exNYD
          source_id: s_N6DoFYEuxcxYEi1L49RgD4
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
        id: c_GpNDCaAEJUMyUW7PHbkDD6
        subject_person_id: p_4jMB4wSNYdd6Z9yYzK3VNM
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
        - id: cs_GpX4M7BFZ4Pkn4GmNz4MSQ
          claim_id: c_GpNDCaAEJUMyUW7PHbkDD6
          source_id: s_N6DoFYEuxcxYEi1L49RgD4
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

# 王鄖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鄖 | accepted |
| birth.date | 1644年 | accepted |
| death.date | 1703年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鄖（CBDB 71131）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71131&o=json)
