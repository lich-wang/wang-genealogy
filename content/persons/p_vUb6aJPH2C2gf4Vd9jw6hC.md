---
schema: wang-person/v1
id: p_vUb6aJPH2C2gf4Vd9jw6hC
status: active
merged_into: null
display_name: 王懷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K9mduGFBCniH9tYCV3qC9W
        subject_person_id: p_vUb6aJPH2C2gf4Vd9jw6hC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ESBTsxBdikU4o8YwQxZb8J
          claim_id: c_K9mduGFBCniH9tYCV3qC9W
          source_id: s_7Q2Et19GhSrdRmxZdX4EzT
          stance: supports
          locator: CBDB:139329
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139329）
          source: &a1
            id: s_7Q2Et19GhSrdRmxZdX4EzT
            source_type: api_record
            title: 中国历代人物传记资料库：王懷（CBDB 139329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139329&o=json
            external_identifier: CBDB:139329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.407Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_AP8Zv4qW3fjuTDNDKVasPP
        subject_person_id: p_vUb6aJPH2C2gf4Vd9jw6hC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 686年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lm62gwgyREs7yKwnkojkHE
          claim_id: c_AP8Zv4qW3fjuTDNDKVasPP
          source_id: s_7Q2Et19GhSrdRmxZdX4EzT
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
        id: c_SKYcxBnuE2H2rMALPmdsLA
        subject_person_id: p_vUb6aJPH2C2gf4Vd9jw6hC
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
        - id: cs_EEiCJLbi4BKSTAZz9RSyYe
          claim_id: c_SKYcxBnuE2H2rMALPmdsLA
          source_id: s_7Q2Et19GhSrdRmxZdX4EzT
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

# 王懷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懷 | accepted |
| death.date | 686年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懷（CBDB 139329）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139329&o=json)
