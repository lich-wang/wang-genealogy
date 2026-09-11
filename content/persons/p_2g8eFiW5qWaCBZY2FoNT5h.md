---
schema: wang-person/v1
id: p_2g8eFiW5qWaCBZY2FoNT5h
status: active
merged_into: null
display_name: 王用中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f73BFM8uEwFn2Lk28eMDUA
        subject_person_id: p_2g8eFiW5qWaCBZY2FoNT5h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9wFJhQGMrVuB1qnvskV65v
          claim_id: c_f73BFM8uEwFn2Lk28eMDUA
          source_id: s_NwrPSFaUEx1d1aJJpyw6nQ
          stance: supports
          locator: CBDB:555052
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555052）
          source: &a1
            id: s_NwrPSFaUEx1d1aJJpyw6nQ
            source_type: api_record
            title: 中国历代人物传记资料库：王用中（CBDB 555052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555052&o=json
            external_identifier: CBDB:555052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.622Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_g76CHHDX7XxivP5P2J4RFQ
        subject_person_id: p_2g8eFiW5qWaCBZY2FoNT5h
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1641年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jytVQC3pLT9PHy1kNsRKMs
          claim_id: c_g76CHHDX7XxivP5P2J4RFQ
          source_id: s_NwrPSFaUEx1d1aJJpyw6nQ
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
        id: c_fTG9pWQRcYYTxKVqw2MJ6Z
        subject_person_id: p_2g8eFiW5qWaCBZY2FoNT5h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用中（卒于1641年），明人物。籍贯南召。（中国历代人物传记资料库 CBDB 555052）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TY9EC6O-zXy7ogJpgM7_rG
          claim_id: c_fTG9pWQRcYYTxKVqw2MJ6Z
          source_id: s_NwrPSFaUEx1d1aJJpyw6nQ
          stance: supports
          locator: CBDB:555052
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

# 王用中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用中 | accepted |
| death.date | 1641年 | accepted |
| bio.summary | 王用中（卒于1641年），明人物。籍贯南召。（中国历代人物传记资料库 CBDB 555052） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用中（CBDB 555052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555052&o=json)
