---
schema: wang-person/v1
id: p_5KAV9Dwde61c7J9ib3wHME
status: active
merged_into: null
display_name: 王鏳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3Gn6tDYccER9BMd3xAcVpk
        subject_person_id: p_5KAV9Dwde61c7J9ib3wHME
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wqMPp5chUzNk8B2D4pq8gE
          claim_id: c_3Gn6tDYccER9BMd3xAcVpk
          source_id: s_aESRFQXcw8JSoTftq5BkoD
          stance: supports
          locator: CBDB:71290
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71290）
          source: &a1
            id: s_aESRFQXcw8JSoTftq5BkoD
            source_type: api_record
            title: 中国历代人物传记资料库：王鏳（CBDB 71290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71290&o=json
            external_identifier: CBDB:71290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.141Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7i7rmXAZ3FBP9kU4s8Tk4H
        subject_person_id: p_5KAV9Dwde61c7J9ib3wHME
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1578年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ehBbnMeeunojX2R6E3uL1i
          claim_id: c_7i7rmXAZ3FBP9kU4s8Tk4H
          source_id: s_aESRFQXcw8JSoTftq5BkoD
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
        id: c_f8LenD459JP39Pxb5w4zC8
        subject_person_id: p_5KAV9Dwde61c7J9ib3wHME
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1647年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jU4BASYFNCjXZPnmy4nTLD
          claim_id: c_f8LenD459JP39Pxb5w4zC8
          source_id: s_aESRFQXcw8JSoTftq5BkoD
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
        id: c_WK7mYe7YKjXzfuRhTRXiyw
        subject_person_id: p_5KAV9Dwde61c7J9ib3wHME
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏳（1578年—1647年），清人物。籍贯金壇。（中国历代人物传记资料库 CBDB 71290）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tRACdFvYAx4O5qg-N9rJH-
          claim_id: c_WK7mYe7YKjXzfuRhTRXiyw
          source_id: s_aESRFQXcw8JSoTftq5BkoD
          stance: supports
          locator: CBDB:71290
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

# 王鏳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏳 | accepted |
| birth.date | 1578年 | accepted |
| death.date | 1647年 | accepted |
| bio.summary | 王鏳（1578年—1647年），清人物。籍贯金壇。（中国历代人物传记资料库 CBDB 71290） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鏳（CBDB 71290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71290&o=json)
