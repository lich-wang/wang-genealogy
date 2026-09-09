---
schema: wang-person/v1
id: p_4y5VhvaLnU13oNfAK7R6Sp
status: active
merged_into: null
display_name: 王世楨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HMxJNbiBkN8N2QyXZWtTMs
        subject_person_id: p_4y5VhvaLnU13oNfAK7R6Sp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_22NRzLfS2rcFTtWDw1B5mL
          claim_id: c_HMxJNbiBkN8N2QyXZWtTMs
          source_id: s_7Le5f8PVBJJkJtFJ1RkmYc
          stance: supports
          locator: CBDB:71467
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71467）
          source: &a1
            id: s_7Le5f8PVBJJkJtFJ1RkmYc
            source_type: api_record
            title: 中国历代人物传记资料库：王世楨（CBDB 71467）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71467&o=json
            external_identifier: CBDB:71467
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.697Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sJ9bGv32QFKo2rHM8sN6Ex
        subject_person_id: p_4y5VhvaLnU13oNfAK7R6Sp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1843年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j4zQCDMJowcKwmmo9HyEDG
          claim_id: c_sJ9bGv32QFKo2rHM8sN6Ex
          source_id: s_7Le5f8PVBJJkJtFJ1RkmYc
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
        id: c_UerAMRy5uoc6VrRHTHGHEL
        subject_person_id: p_4y5VhvaLnU13oNfAK7R6Sp
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
        - id: cs_n59uwvay68woC2QJFybkcG
          claim_id: c_UerAMRy5uoc6VrRHTHGHEL
          source_id: s_7Le5f8PVBJJkJtFJ1RkmYc
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

# 王世楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世楨 | accepted |
| birth.date | 1843年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世楨（CBDB 71467）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71467&o=json)
