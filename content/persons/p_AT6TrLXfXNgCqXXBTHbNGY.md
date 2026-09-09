---
schema: wang-person/v1
id: p_AT6TrLXfXNgCqXXBTHbNGY
status: active
merged_into: null
display_name: 王佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fLBDA3YvGYC7H57khrKCe1
        subject_person_id: p_AT6TrLXfXNgCqXXBTHbNGY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aNWh2zvu4vJ8AU2ft3b55j
          claim_id: c_fLBDA3YvGYC7H57khrKCe1
          source_id: s_oofGmvA18cfJd9u5N8KNEo
          stance: supports
          locator: CBDB:13477
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（13477）
          source: &a1
            id: s_oofGmvA18cfJd9u5N8KNEo
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 13477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13477&o=json
            external_identifier: CBDB:13477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.620Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FTcz2RwAvZWTeKCT3b37CP
        subject_person_id: p_AT6TrLXfXNgCqXXBTHbNGY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1129年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G7VnmSN1Eykmwjay1PqVMp
          claim_id: c_FTcz2RwAvZWTeKCT3b37CP
          source_id: s_oofGmvA18cfJd9u5N8KNEo
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
        id: c_sMAWN6NHFpWzb9C5dxH5xu
        subject_person_id: p_AT6TrLXfXNgCqXXBTHbNGY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1191年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gbWfMs9VYfrQnkjTB8J4mj
          claim_id: c_sMAWN6NHFpWzb9C5dxH5xu
          source_id: s_oofGmvA18cfJd9u5N8KNEo
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
        id: c_9DxzxVf1skbGpuFvTUjZA7
        subject_person_id: p_AT6TrLXfXNgCqXXBTHbNGY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zrJftXDveXMf9f1rw2DnRN
          claim_id: c_9DxzxVf1skbGpuFvTUjZA7
          source_id: s_oofGmvA18cfJd9u5N8KNEo
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

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| birth.date | 1129年 | accepted |
| death.date | 1191年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 13477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13477&o=json)
