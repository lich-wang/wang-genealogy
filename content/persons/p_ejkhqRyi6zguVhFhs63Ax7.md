---
schema: wang-person/v1
id: p_ejkhqRyi6zguVhFhs63Ax7
status: active
merged_into: null
display_name: 王鏜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Urto3xvEXkSgbiGq83VhDb
        subject_person_id: p_ejkhqRyi6zguVhFhs63Ax7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uKGR16bfeT6jAQJJKGPBTq
          claim_id: c_Urto3xvEXkSgbiGq83VhDb
          source_id: s_WgvdJdiCbuQ4qcTNm7WYyj
          stance: supports
          locator: CBDB:202946
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202946）
          source: &a1
            id: s_WgvdJdiCbuQ4qcTNm7WYyj
            source_type: api_record
            title: 中国历代人物传记资料库：王鏜（CBDB 202946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202946&o=json
            external_identifier: CBDB:202946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.766Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FRuDb3bpZJHXTfnB7v33VR
        subject_person_id: p_ejkhqRyi6zguVhFhs63Ax7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1505年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EJgwXdbVWgeYQukXjVdttw
          claim_id: c_FRuDb3bpZJHXTfnB7v33VR
          source_id: s_WgvdJdiCbuQ4qcTNm7WYyj
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
        id: c_Y8CyXduNEZjYjgiMQApCuF
        subject_person_id: p_ejkhqRyi6zguVhFhs63Ax7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xgE3DAdHp9cQcLms42YQsb
          claim_id: c_Y8CyXduNEZjYjgiMQApCuF
          source_id: s_WgvdJdiCbuQ4qcTNm7WYyj
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

# 王鏜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏜 | accepted |
| birth.date | 1505年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鏜（CBDB 202946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202946&o=json)
