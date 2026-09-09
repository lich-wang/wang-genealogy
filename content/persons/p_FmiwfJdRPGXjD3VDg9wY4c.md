---
schema: wang-person/v1
id: p_FmiwfJdRPGXjD3VDg9wY4c
status: active
merged_into: null
display_name: 王永春
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TBkKcFcKQz7Rs8W2KT3nw7
        subject_person_id: p_FmiwfJdRPGXjD3VDg9wY4c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3hzAeYf9LbzAnzCyBNVB7S
          claim_id: c_TBkKcFcKQz7Rs8W2KT3nw7
          source_id: s_XpoocEtsbHWxSmPBTmUaqF
          stance: supports
          locator: CBDB:71506
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71506）
          source: &a1
            id: s_XpoocEtsbHWxSmPBTmUaqF
            source_type: api_record
            title: 中国历代人物传记资料库：王永春（CBDB 71506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71506&o=json
            external_identifier: CBDB:71506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_u1ivHGcauJfNcBRcHL67eV
        subject_person_id: p_FmiwfJdRPGXjD3VDg9wY4c
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1610年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9puvQDiDkPTXZTAzKpin8B
          claim_id: c_u1ivHGcauJfNcBRcHL67eV
          source_id: s_XpoocEtsbHWxSmPBTmUaqF
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
        id: c_GjCWvvv8vMESCGLCQUrEjo
        subject_person_id: p_FmiwfJdRPGXjD3VDg9wY4c
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1668年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HL9skDAY5nGL3HjtA5RZEH
          claim_id: c_GjCWvvv8vMESCGLCQUrEjo
          source_id: s_XpoocEtsbHWxSmPBTmUaqF
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
        id: c_7ES76EFtcKbKqDuNKxGBMF
        subject_person_id: p_FmiwfJdRPGXjD3VDg9wY4c
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
        - id: cs_pypEW5hxn9PFdGHWac4RDU
          claim_id: c_7ES76EFtcKbKqDuNKxGBMF
          source_id: s_XpoocEtsbHWxSmPBTmUaqF
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

# 王永春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永春 | accepted |
| birth.date | 1610年 | accepted |
| death.date | 1668年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永春（CBDB 71506）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71506&o=json)
