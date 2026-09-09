---
schema: wang-person/v1
id: p_ts6FNV3kAVnq8HPaAYJW8d
status: active
merged_into: null
display_name: 王抃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C6J7uWCBr384is1KkmoTwo
        subject_person_id: p_ts6FNV3kAVnq8HPaAYJW8d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王抃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pbLRsR3G8KfZyx7vmAH46Q
          claim_id: c_C6J7uWCBr384is1KkmoTwo
          source_id: s_oVQC1VqwJ8RdZ2vRN6FFey
          stance: supports
          locator: CBDB:71077
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71077）
          source: &a1
            id: s_oVQC1VqwJ8RdZ2vRN6FFey
            source_type: api_record
            title: 中国历代人物传记资料库：王抃（CBDB 71077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71077&o=json
            external_identifier: CBDB:71077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.345Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WPZnbwd9n1MFxHJ7pB6QcN
        subject_person_id: p_ts6FNV3kAVnq8HPaAYJW8d
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1628年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_opV4ScXW9XDkACFA5yApVN
          claim_id: c_WPZnbwd9n1MFxHJ7pB6QcN
          source_id: s_oVQC1VqwJ8RdZ2vRN6FFey
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
        id: c_83Gq3fvJfWzzQkaFMWBQuF
        subject_person_id: p_ts6FNV3kAVnq8HPaAYJW8d
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1702年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GJQk2cvZpii9sWV3xiom3e
          claim_id: c_83Gq3fvJfWzzQkaFMWBQuF
          source_id: s_oVQC1VqwJ8RdZ2vRN6FFey
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
        id: c_yvQq7RD2PSo35GX9XRvCGu
        subject_person_id: p_ts6FNV3kAVnq8HPaAYJW8d
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
        - id: cs_UBrzkPqHtoLdzLqzbPBL8B
          claim_id: c_yvQq7RD2PSo35GX9XRvCGu
          source_id: s_oVQC1VqwJ8RdZ2vRN6FFey
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

# 王抃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王抃 | accepted |
| birth.date | 1628年 | accepted |
| death.date | 1702年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王抃（CBDB 71077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71077&o=json)
