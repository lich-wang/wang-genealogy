---
schema: wang-person/v1
id: p_M19oFx28z6UHMwn5fL36T6
status: active
merged_into: null
display_name: 王庭璋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WQYzSz9DH6QfgivUtbronk
        subject_person_id: p_M19oFx28z6UHMwn5fL36T6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭璋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vBNEYTj84TtRH19HLBu8X6
          claim_id: c_WQYzSz9DH6QfgivUtbronk
          source_id: s_U2qJ5PrKVy2czEsxm3MK6N
          stance: supports
          locator: CBDB:12167
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12167）
          source: &a1
            id: s_U2qJ5PrKVy2czEsxm3MK6N
            source_type: api_record
            title: 中国历代人物传记资料库：王庭璋（CBDB 12167）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12167&o=json
            external_identifier: CBDB:12167
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.590Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zwqgn9UeLJf16DBZ7qx2UB
        subject_person_id: p_M19oFx28z6UHMwn5fL36T6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1086年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ncrVy4FSkbtcdRFXDFhYp4
          claim_id: c_zwqgn9UeLJf16DBZ7qx2UB
          source_id: s_U2qJ5PrKVy2czEsxm3MK6N
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
        id: c_YrySDk2kLph4Ltid8LGwK7
        subject_person_id: p_M19oFx28z6UHMwn5fL36T6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1141年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WxAx3jXE3AMNf2Df1bxs5J
          claim_id: c_YrySDk2kLph4Ltid8LGwK7
          source_id: s_U2qJ5PrKVy2czEsxm3MK6N
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
        id: c_6J6RFM3jH9wfzYQ1jzAMxU
        subject_person_id: p_M19oFx28z6UHMwn5fL36T6
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
        - id: cs_FKY6ZCHJKQ4DNpEz8Bc1LK
          claim_id: c_6J6RFM3jH9wfzYQ1jzAMxU
          source_id: s_U2qJ5PrKVy2czEsxm3MK6N
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

# 王庭璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭璋 | accepted |
| birth.date | 1086年 | accepted |
| death.date | 1141年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庭璋（CBDB 12167）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12167&o=json)
