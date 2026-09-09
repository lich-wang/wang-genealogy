---
schema: wang-person/v1
id: p_Rtn4knLShMzCHnFn2QERef
status: active
merged_into: null
display_name: 王振聲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QacH5GVQqfLLS5irXo5fjH
        subject_person_id: p_Rtn4knLShMzCHnFn2QERef
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振聲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_toFW76GFBjLa2yfkT2TatA
          claim_id: c_QacH5GVQqfLLS5irXo5fjH
          source_id: s_gSWQHL1V8E1x7hLAPMLZPn
          stance: supports
          locator: CBDB:30048
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30048）
          source: &a1
            id: s_gSWQHL1V8E1x7hLAPMLZPn
            source_type: api_record
            title: 中国历代人物传记资料库：王振聲（CBDB 30048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30048&o=json
            external_identifier: CBDB:30048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.018Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_w15DUBf2FNyYm3EdhJt2ZV
        subject_person_id: p_Rtn4knLShMzCHnFn2QERef
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1852年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Av8LPzhXzmTzAHKcx3gY5U
          claim_id: c_w15DUBf2FNyYm3EdhJt2ZV
          source_id: s_gSWQHL1V8E1x7hLAPMLZPn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fwqDKBH8bJKF2T8Q67ZFx3
        subject_person_id: p_Rtn4knLShMzCHnFn2QERef
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
        - id: cs_EaLpS4WSM7dWy4E3WakJa5
          claim_id: c_fwqDKBH8bJKF2T8Q67ZFx3
          source_id: s_gSWQHL1V8E1x7hLAPMLZPn
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

# 王振聲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振聲 | accepted |
| birth.date | 1852年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王振聲（CBDB 30048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30048&o=json)
