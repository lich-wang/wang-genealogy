---
schema: wang-person/v1
id: p_b7a1sPpBUfrMAaMs4Pr9XJ
status: active
merged_into: null
display_name: 王恩溎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4YsGhBzoWRPA9juJFE8Yoz
        subject_person_id: p_b7a1sPpBUfrMAaMs4Pr9XJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩溎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZW1wWHvxwMSHo4XEk4EdyM
          claim_id: c_4YsGhBzoWRPA9juJFE8Yoz
          source_id: s_BLzcLsGiqtmcq3YKiJrKVq
          stance: supports
          locator: CBDB:71955
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71955）
          source: &a1
            id: s_BLzcLsGiqtmcq3YKiJrKVq
            source_type: api_record
            title: 中国历代人物传记资料库：王恩溎（CBDB 71955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71955&o=json
            external_identifier: CBDB:71955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AKL7MhVJRuZdBPNLhQoYoA
        subject_person_id: p_b7a1sPpBUfrMAaMs4Pr9XJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1851年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X7CYyf7Q4Vef8bk4TMcFwj
          claim_id: c_AKL7MhVJRuZdBPNLhQoYoA
          source_id: s_BLzcLsGiqtmcq3YKiJrKVq
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
        id: c_bWTeQrKq5Y9vqDu6mPCpF4
        subject_person_id: p_b7a1sPpBUfrMAaMs4Pr9XJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩溎（生于1851年），清人物。籍贯天津。（中国历代人物传记资料库 CBDB 71955）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EUhybxUu7peOitA-F1unoZ
          claim_id: c_bWTeQrKq5Y9vqDu6mPCpF4
          source_id: s_BLzcLsGiqtmcq3YKiJrKVq
          stance: supports
          locator: CBDB:71955
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

# 王恩溎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恩溎 | accepted |
| birth.date | 1851年 | accepted |
| bio.summary | 王恩溎（生于1851年），清人物。籍贯天津。（中国历代人物传记资料库 CBDB 71955） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恩溎（CBDB 71955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71955&o=json)
