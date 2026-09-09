---
schema: wang-person/v1
id: p_b44GyPLdQLYMEEkYRKhqEw
status: active
merged_into: null
display_name: 王長善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mCqXm3YP8EDJg73SiD7hcG
        subject_person_id: p_b44GyPLdQLYMEEkYRKhqEw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8hL24pKmcus2BHaYbQz8eA
          claim_id: c_mCqXm3YP8EDJg73SiD7hcG
          source_id: s_GYKFUQhs2Nw58J7H6Z9gtR
          stance: supports
          locator: CBDB:195425
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（195425）
          source: &a1
            id: s_GYKFUQhs2Nw58J7H6Z9gtR
            source_type: api_record
            title: 中国历代人物传记资料库：王長善（CBDB 195425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=195425&o=json
            external_identifier: CBDB:195425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.299Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_TPXuCRdHANuuhg7mR49iXA
        subject_person_id: p_b44GyPLdQLYMEEkYRKhqEw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 840年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8L75f3QN12xJGKbFgVuAAC
          claim_id: c_TPXuCRdHANuuhg7mR49iXA
          source_id: s_GYKFUQhs2Nw58J7H6Z9gtR
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
        id: c_xHsedkTNzoAL87kN9VChZV
        subject_person_id: p_b44GyPLdQLYMEEkYRKhqEw
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
        - id: cs_w1BCqBq1tMVbEgjqp2eY5Z
          claim_id: c_xHsedkTNzoAL87kN9VChZV
          source_id: s_GYKFUQhs2Nw58J7H6Z9gtR
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

# 王長善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王長善 | accepted |
| death.date | 840年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王長善（CBDB 195425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=195425&o=json)
