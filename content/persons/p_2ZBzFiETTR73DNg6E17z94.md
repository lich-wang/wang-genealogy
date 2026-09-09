---
schema: wang-person/v1
id: p_2ZBzFiETTR73DNg6E17z94
status: active
merged_into: null
display_name: 王方莒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TGiaNJJG9tButrdGzotPsf
        subject_person_id: p_2ZBzFiETTR73DNg6E17z94
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方莒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_geBFAZwfe94R1ifVfcc2ej
          claim_id: c_TGiaNJJG9tButrdGzotPsf
          source_id: s_FWDPeoqdffvRrZG5FHSP9z
          stance: supports
          locator: CBDB:190477
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190477）
          source: &a1
            id: s_FWDPeoqdffvRrZG5FHSP9z
            source_type: api_record
            title: 中国历代人物传记资料库：王方莒（CBDB 190477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190477&o=json
            external_identifier: CBDB:190477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.328Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DXhv6F8eLLZa556JjYet9h
        subject_person_id: p_2ZBzFiETTR73DNg6E17z94
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 848年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uTpSf18BYQHiwvmsELgkhV
          claim_id: c_DXhv6F8eLLZa556JjYet9h
          source_id: s_FWDPeoqdffvRrZG5FHSP9z
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
        id: c_eKEKJ74GNgbFR6yMMxGFLb
        subject_person_id: p_2ZBzFiETTR73DNg6E17z94
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
        - id: cs_qdaTiZuUQeH81Qj7e4Ponm
          claim_id: c_eKEKJ74GNgbFR6yMMxGFLb
          source_id: s_FWDPeoqdffvRrZG5FHSP9z
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

# 王方莒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王方莒 | accepted |
| death.date | 848年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王方莒（CBDB 190477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190477&o=json)
