---
schema: wang-person/v1
id: p_W4wKgTC3HYvLCbDT8w5Mnk
status: active
merged_into: null
display_name: 王禎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fK96La2mY4PvsroGeAWWAL
        subject_person_id: p_W4wKgTC3HYvLCbDT8w5Mnk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iQzreGZCpZphTQfL3bUtvh
          claim_id: c_fK96La2mY4PvsroGeAWWAL
          source_id: s_fcseYVGBFL2EywdztLWEyd
          stance: supports
          locator: CBDB:100911
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100911）
          source: &a1
            id: s_fcseYVGBFL2EywdztLWEyd
            source_type: api_record
            title: 中国历代人物传记资料库：王禎（CBDB 100911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100911&o=json
            external_identifier: CBDB:100911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.562Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ji7QanNx3atmMxzGeUGoRb
        subject_person_id: p_W4wKgTC3HYvLCbDT8w5Mnk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1240年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qJP1D4gWeZsBuiCeYX8ken
          claim_id: c_ji7QanNx3atmMxzGeUGoRb
          source_id: s_fcseYVGBFL2EywdztLWEyd
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
        id: c_hVngK2qqmvjnx6xfE1jcTP
        subject_person_id: p_W4wKgTC3HYvLCbDT8w5Mnk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1277年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_efwazoa2deFMV67xLB6Ppq
          claim_id: c_hVngK2qqmvjnx6xfE1jcTP
          source_id: s_fcseYVGBFL2EywdztLWEyd
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
        id: c_Ryr7NrThU9nc9istZbAt3k
        subject_person_id: p_W4wKgTC3HYvLCbDT8w5Mnk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禎（1240年—1277年），元人物。籍贯濟南路。（中国历代人物传记资料库 CBDB 100911）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5oW9mq6NBdKUIj80A6pUpz
          claim_id: c_Ryr7NrThU9nc9istZbAt3k
          source_id: s_fcseYVGBFL2EywdztLWEyd
          stance: supports
          locator: CBDB:100911
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

# 王禎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禎 | accepted |
| birth.date | 1240年 | accepted |
| death.date | 1277年 | accepted |
| bio.summary | 王禎（1240年—1277年），元人物。籍贯濟南路。（中国历代人物传记资料库 CBDB 100911） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禎（CBDB 100911）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100911&o=json)
