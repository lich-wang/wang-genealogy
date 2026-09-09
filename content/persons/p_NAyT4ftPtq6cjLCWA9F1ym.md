---
schema: wang-person/v1
id: p_NAyT4ftPtq6cjLCWA9F1ym
status: active
merged_into: null
display_name: 王鈞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fnhLkXHzPaoijE1EJD1thd
        subject_person_id: p_NAyT4ftPtq6cjLCWA9F1ym
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L4DxYcPU8yVx36AZC7Xve6
          claim_id: c_fnhLkXHzPaoijE1EJD1thd
          source_id: s_v21oUQP9vXEFzH87DcZqP5
          stance: supports
          locator: CBDB:175805
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175805）
          source: &a1
            id: s_v21oUQP9vXEFzH87DcZqP5
            source_type: api_record
            title: 中国历代人物传记资料库：王鈞（CBDB 175805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175805&o=json
            external_identifier: CBDB:175805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.134Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_m4C8cYy3gSi5iXJ2Hj5rTM
        subject_person_id: p_NAyT4ftPtq6cjLCWA9F1ym
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 748年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E2AEoZnGz66PYFrxyEmdX6
          claim_id: c_m4C8cYy3gSi5iXJ2Hj5rTM
          source_id: s_v21oUQP9vXEFzH87DcZqP5
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
        id: c_WbrUPJE5izaDjAFA3VpRHo
        subject_person_id: p_NAyT4ftPtq6cjLCWA9F1ym
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
        - id: cs_DmbaCqJn7vV1BrKTv6XUnX
          claim_id: c_WbrUPJE5izaDjAFA3VpRHo
          source_id: s_v21oUQP9vXEFzH87DcZqP5
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

# 王鈞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鈞 | accepted |
| death.date | 748年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鈞（CBDB 175805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175805&o=json)
