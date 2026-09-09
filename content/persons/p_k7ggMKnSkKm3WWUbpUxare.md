---
schema: wang-person/v1
id: p_k7ggMKnSkKm3WWUbpUxare
status: active
merged_into: null
display_name: 王景萼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EjtzP1Y2o8Laji4T1gNhMi
        subject_person_id: p_k7ggMKnSkKm3WWUbpUxare
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景萼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7eDESQJQVJT4UoThJXE6kP
          claim_id: c_EjtzP1Y2o8Laji4T1gNhMi
          source_id: s_H2iCb9FSaBgXBuudXqXy3r
          stance: supports
          locator: CBDB:184954
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（184954）
          source: &a1
            id: s_H2iCb9FSaBgXBuudXqXy3r
            source_type: api_record
            title: 中国历代人物传记资料库：王景萼（CBDB 184954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184954&o=json
            external_identifier: CBDB:184954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_KYYZD2rCNqcdAk4ZsuT2TS
        subject_person_id: p_k7ggMKnSkKm3WWUbpUxare
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 894年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yX6UHiR5KXK7aosMzZu1x6
          claim_id: c_KYYZD2rCNqcdAk4ZsuT2TS
          source_id: s_H2iCb9FSaBgXBuudXqXy3r
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
        id: c_BU6GPHAncnxpc4GYrdt2Ns
        subject_person_id: p_k7ggMKnSkKm3WWUbpUxare
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
        - id: cs_z7THEyxmGCJF8RGhiCsbcJ
          claim_id: c_BU6GPHAncnxpc4GYrdt2Ns
          source_id: s_H2iCb9FSaBgXBuudXqXy3r
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

# 王景萼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景萼 | accepted |
| death.date | 894年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景萼（CBDB 184954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184954&o=json)
