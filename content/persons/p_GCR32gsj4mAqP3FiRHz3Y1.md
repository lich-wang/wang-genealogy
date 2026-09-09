---
schema: wang-person/v1
id: p_GCR32gsj4mAqP3FiRHz3Y1
status: active
merged_into: null
display_name: 王景曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KkJqKjJv8ViF3iYLNiiN7T
        subject_person_id: p_GCR32gsj4mAqP3FiRHz3Y1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dt4ps8nmGXk4XHH7hwLBkj
          claim_id: c_KkJqKjJv8ViF3iYLNiiN7T
          source_id: s_pBppac199ti8wN4b6aDvvK
          stance: supports
          locator: CBDB:72074
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72074）
          source: &a1
            id: s_pBppac199ti8wN4b6aDvvK
            source_type: api_record
            title: 中国历代人物传记资料库：王景曾（CBDB 72074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72074&o=json
            external_identifier: CBDB:72074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.983Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZBdfa7fDppf8hoo4fy88oN
        subject_person_id: p_GCR32gsj4mAqP3FiRHz3Y1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1841年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jvp7C7w5SY7JbpyRaPoF3c
          claim_id: c_ZBdfa7fDppf8hoo4fy88oN
          source_id: s_pBppac199ti8wN4b6aDvvK
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
        id: c_g4Z6rWuYnchhPAwBLesBUN
        subject_person_id: p_GCR32gsj4mAqP3FiRHz3Y1
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
        - id: cs_fuSkHoNaKg4cxir6J8J2cZ
          claim_id: c_g4Z6rWuYnchhPAwBLesBUN
          source_id: s_pBppac199ti8wN4b6aDvvK
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

# 王景曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景曾 | accepted |
| birth.date | 1841年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景曾（CBDB 72074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72074&o=json)
