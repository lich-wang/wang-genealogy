---
schema: wang-person/v1
id: p_wrDF9B5yMnxQxurkk5QjB1
status: active
merged_into: null
display_name: 王鼎臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FA137DACCnUVg9Ktbg7BDm
        subject_person_id: p_wrDF9B5yMnxQxurkk5QjB1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QoL19wBkEA9DFNZJNKKAq6
          claim_id: c_FA137DACCnUVg9Ktbg7BDm
          source_id: s_PwpFEKPCwAF3B6DKL3vdzt
          stance: supports
          locator: CBDB:72059
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72059）
          source: &a1
            id: s_PwpFEKPCwAF3B6DKL3vdzt
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎臣（CBDB 72059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72059&o=json
            external_identifier: CBDB:72059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.976Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HEWSPSUCnD3vPJtHVZrVuH
        subject_person_id: p_wrDF9B5yMnxQxurkk5QjB1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1619年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4REPma276p9i1HY8DSYi2D
          claim_id: c_HEWSPSUCnD3vPJtHVZrVuH
          source_id: s_PwpFEKPCwAF3B6DKL3vdzt
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
        id: c_mSjUeSQs9c6xG7j5fXA8tK
        subject_person_id: p_wrDF9B5yMnxQxurkk5QjB1
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
        - id: cs_7cXxNhGGEJqfEXfZK7ykPM
          claim_id: c_mSjUeSQs9c6xG7j5fXA8tK
          source_id: s_PwpFEKPCwAF3B6DKL3vdzt
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

# 王鼎臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎臣 | accepted |
| birth.date | 1619年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼎臣（CBDB 72059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72059&o=json)
