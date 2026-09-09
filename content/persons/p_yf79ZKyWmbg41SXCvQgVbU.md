---
schema: wang-person/v1
id: p_yf79ZKyWmbg41SXCvQgVbU
status: active
merged_into: null
display_name: 王邁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_huoDG7KssLkb6DQsmVDeRo
        subject_person_id: p_yf79ZKyWmbg41SXCvQgVbU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H6ymMcQqVB4mM21FrxiDaK
          claim_id: c_huoDG7KssLkb6DQsmVDeRo
          source_id: s_q9YTFumwJAhGhepCdHicTq
          stance: supports
          locator: CBDB:384954
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（384954）
          source: &a1
            id: s_q9YTFumwJAhGhepCdHicTq
            source_type: api_record
            title: 中国历代人物传记资料库：王邁（CBDB 384954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384954&o=json
            external_identifier: CBDB:384954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_efDuhMy7ZgLgAMvY2tFLbx
        subject_person_id: p_yf79ZKyWmbg41SXCvQgVbU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1184年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qaW2RuzKwZEHfLVg77i3bm
          claim_id: c_efDuhMy7ZgLgAMvY2tFLbx
          source_id: s_q9YTFumwJAhGhepCdHicTq
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
        id: c_qmdAAfurX2yUHFohhm8SbQ
        subject_person_id: p_yf79ZKyWmbg41SXCvQgVbU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1248年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EDJL4AQH5XSi8AXXdYgobX
          claim_id: c_qmdAAfurX2yUHFohhm8SbQ
          source_id: s_q9YTFumwJAhGhepCdHicTq
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
        id: c_XHN37Zea777JZYqF967Lg1
        subject_person_id: p_yf79ZKyWmbg41SXCvQgVbU
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
        - id: cs_SPAQMjYmuokmnvr6fa8poE
          claim_id: c_XHN37Zea777JZYqF967Lg1
          source_id: s_q9YTFumwJAhGhepCdHicTq
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

# 王邁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邁 | accepted |
| birth.date | 1184年 | accepted |
| death.date | 1248年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王邁（CBDB 384954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384954&o=json)
