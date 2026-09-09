---
schema: wang-person/v1
id: p_BzK6A2uXvZyrjjgruuh1Qh
status: active
merged_into: null
display_name: 王用汲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b4Pw18Dz9oNuDxRHGZPnQc
        subject_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用汲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M3sBmgHkMwDQQi94ME6mSA
          claim_id: c_b4Pw18Dz9oNuDxRHGZPnQc
          source_id: s_G5Q12QpxwABQ4p3YD5nNDm
          stance: supports
          locator: CBDB:126494
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126494）
          source: &a1
            id: s_G5Q12QpxwABQ4p3YD5nNDm
            source_type: api_record
            title: 中国历代人物传记资料库：王用汲（CBDB 126494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126494&o=json
            external_identifier: CBDB:126494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8KDid7o4CF2AkhL2YV2wQa
        subject_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1528年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vka2YQMRRovYKX5Pf6x76N
          claim_id: c_8KDid7o4CF2AkhL2YV2wQa
          source_id: s_G5Q12QpxwABQ4p3YD5nNDm
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
        id: c_ABQJbShAaoHtFjeNDKA7JF
        subject_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1593年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JCHMuuzY9rvyGQSgh6M8Mg
          claim_id: c_ABQJbShAaoHtFjeNDKA7JF
          source_id: s_G5Q12QpxwABQ4p3YD5nNDm
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
        id: c_QE6wPHpqNuEmsy1tFhPAA9
        subject_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
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
        - id: cs_43Ssh3xi92Zrkfk61vkE1D
          claim_id: c_QE6wPHpqNuEmsy1tFhPAA9
          source_id: s_G5Q12QpxwABQ4p3YD5nNDm
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

# 王用汲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用汲 | accepted |
| birth.date | 1528年 | accepted |
| death.date | 1593年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用汲（CBDB 126494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126494&o=json)
