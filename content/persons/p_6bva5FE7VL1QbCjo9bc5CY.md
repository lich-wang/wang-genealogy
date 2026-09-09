---
schema: wang-person/v1
id: p_6bva5FE7VL1QbCjo9bc5CY
status: active
merged_into: null
display_name: 王浵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9fC7NiVus1tMTZgNrF8Pe7
        subject_person_id: p_6bva5FE7VL1QbCjo9bc5CY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K2uPx8dgttcXTq9Kgy9Hm6
          claim_id: c_9fC7NiVus1tMTZgNrF8Pe7
          source_id: s_tNe8H5bxxa3Jf29CD7JPy8
          stance: supports
          locator: CBDB:71173
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71173）
          source: &a1
            id: s_tNe8H5bxxa3Jf29CD7JPy8
            source_type: api_record
            title: 中国历代人物传记资料库：王浵（CBDB 71173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71173&o=json
            external_identifier: CBDB:71173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.452Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HA2C7TE2Mdg7uAYA7Ek56q
        subject_person_id: p_6bva5FE7VL1QbCjo9bc5CY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1836年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_suS5GGErJy4jScidRXnFCc
          claim_id: c_HA2C7TE2Mdg7uAYA7Ek56q
          source_id: s_tNe8H5bxxa3Jf29CD7JPy8
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
        id: c_FcCPJCoV57AShGRfiZ9uip
        subject_person_id: p_6bva5FE7VL1QbCjo9bc5CY
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
        - id: cs_VLHUQXkBA9pqyoBzPbNwxz
          claim_id: c_FcCPJCoV57AShGRfiZ9uip
          source_id: s_tNe8H5bxxa3Jf29CD7JPy8
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

# 王浵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浵 | accepted |
| birth.date | 1836年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王浵（CBDB 71173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71173&o=json)
