---
schema: wang-person/v1
id: p_LwEYPM669nGqoyn4xt7Acu
status: active
merged_into: null
display_name: 王鎰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tdmZENjKLPthTLM7Mj65KV
        subject_person_id: p_LwEYPM669nGqoyn4xt7Acu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ptD743ffT54nn3SNXHSkV1
          claim_id: c_tdmZENjKLPthTLM7Mj65KV
          source_id: s_V6kVffB4hUz4KX5Q36UNdj
          stance: supports
          locator: CBDB:175817
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175817）
          source: &a1
            id: s_V6kVffB4hUz4KX5Q36UNdj
            source_type: api_record
            title: 中国历代人物传记资料库：王鎰（CBDB 175817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175817&o=json
            external_identifier: CBDB:175817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.138Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_uS2xauhQUYMU1q3Pv6pBKq
        subject_person_id: p_LwEYPM669nGqoyn4xt7Acu
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 818年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UgZLCvcEaQzmzKk4UDtUpf
          claim_id: c_uS2xauhQUYMU1q3Pv6pBKq
          source_id: s_V6kVffB4hUz4KX5Q36UNdj
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
        id: c_t1KZV1hsJVn1mGPuCoHvAa
        subject_person_id: p_LwEYPM669nGqoyn4xt7Acu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎰（卒于818年），唐人物。籍贯晉陽。（中国历代人物传记资料库 CBDB 175817）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__szSBFS2tu61YXE5MnIJWd
          claim_id: c_t1KZV1hsJVn1mGPuCoHvAa
          source_id: s_V6kVffB4hUz4KX5Q36UNdj
          stance: supports
          locator: CBDB:175817
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王鎰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎰 | accepted |
| death.date | 818年 | accepted |
| bio.summary | 王鎰（卒于818年），唐人物。籍贯晉陽。（中国历代人物传记资料库 CBDB 175817） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎰（CBDB 175817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175817&o=json)
