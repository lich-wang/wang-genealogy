---
schema: wang-person/v1
id: p_4XvEffiKBLHcAB3UhE6GM2
status: active
merged_into: null
display_name: 王三娘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iNNfhsM651QYXVzy6Jd8V6
        subject_person_id: p_4XvEffiKBLHcAB3UhE6GM2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三娘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F6ihQX5EYNnqUxLh2Mj4KG
          claim_id: c_iNNfhsM651QYXVzy6Jd8V6
          source_id: s_GXPPpgK7jFJA31dBQD7Nnn
          stance: supports
          locator: CBDB:140200
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140200）
          source: &a1
            id: s_GXPPpgK7jFJA31dBQD7Nnn
            source_type: api_record
            title: 中国历代人物传记资料库：王三娘（CBDB 140200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140200&o=json
            external_identifier: CBDB:140200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.480Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NG5Vwz9fDwLAXPAyizDPp6
        subject_person_id: p_4XvEffiKBLHcAB3UhE6GM2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 640年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y2YdGbJqQi5dUniUBHRKFt
          claim_id: c_NG5Vwz9fDwLAXPAyizDPp6
          source_id: s_GXPPpgK7jFJA31dBQD7Nnn
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
        id: c_cf7FUJZtXXLPiFD8E9kCGB
        subject_person_id: p_4XvEffiKBLHcAB3UhE6GM2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 677年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7RxiYDJ1pANzkrFvtoX9jW
          claim_id: c_cf7FUJZtXXLPiFD8E9kCGB
          source_id: s_GXPPpgK7jFJA31dBQD7Nnn
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
        id: c_Hwm3gfpWjuSYfPbMfTbevr
        subject_person_id: p_4XvEffiKBLHcAB3UhE6GM2
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
        - id: cs_ZDizNJFd7dZHHwm7gzbCUh
          claim_id: c_Hwm3gfpWjuSYfPbMfTbevr
          source_id: s_GXPPpgK7jFJA31dBQD7Nnn
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

# 王三娘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三娘 | accepted |
| birth.date | 640年 | accepted |
| death.date | 677年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三娘（CBDB 140200）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140200&o=json)
