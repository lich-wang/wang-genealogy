---
schema: wang-person/v1
id: p_3dz4wj5scMZ9XiyPtd4KVe
status: active
merged_into: null
display_name: 王九疇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bBQhsBkJVowADQnhqekRYb
        subject_person_id: p_3dz4wj5scMZ9XiyPtd4KVe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九疇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1pMNHWmBRGAhJU8u99YS2a
          claim_id: c_bBQhsBkJVowADQnhqekRYb
          source_id: s_eZhWCFoH3vKp76YRWjmHVM
          stance: supports
          locator: CBDB:45863
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45863）
          source: &a1
            id: s_eZhWCFoH3vKp76YRWjmHVM
            source_type: api_record
            title: 中国历代人物传记资料库：王九疇（CBDB 45863）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45863&o=json
            external_identifier: CBDB:45863
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.701Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yA6kCLcs488WMRqgYKVpTp
        subject_person_id: p_3dz4wj5scMZ9XiyPtd4KVe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1022年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NZ34HBBBjbN3M7sLHz2b1A
          claim_id: c_yA6kCLcs488WMRqgYKVpTp
          source_id: s_eZhWCFoH3vKp76YRWjmHVM
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
        id: c_H246UL6gBHZbzLeoU8WQhx
        subject_person_id: p_3dz4wj5scMZ9XiyPtd4KVe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1096年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6KDhBpBKFLzhgAbXQ2ePX8
          claim_id: c_H246UL6gBHZbzLeoU8WQhx
          source_id: s_eZhWCFoH3vKp76YRWjmHVM
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
        id: c_mmB1dMnj5ySGHTn3tKdDC6
        subject_person_id: p_3dz4wj5scMZ9XiyPtd4KVe
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
        - id: cs_JQNn3J79zYQFdzNEPwzzid
          claim_id: c_mmB1dMnj5ySGHTn3tKdDC6
          source_id: s_eZhWCFoH3vKp76YRWjmHVM
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

# 王九疇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九疇 | accepted |
| birth.date | 1022年 | accepted |
| death.date | 1096年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王九疇（CBDB 45863）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45863&o=json)
