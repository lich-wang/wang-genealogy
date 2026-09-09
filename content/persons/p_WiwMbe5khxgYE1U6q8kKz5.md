---
schema: wang-person/v1
id: p_WiwMbe5khxgYE1U6q8kKz5
status: active
merged_into: null
display_name: 王璟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_91iPwDvRz6X2HqaJ4zZXsn
        subject_person_id: p_WiwMbe5khxgYE1U6q8kKz5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7AgXJvNfhBcfga6z3tksz4
          claim_id: c_91iPwDvRz6X2HqaJ4zZXsn
          source_id: s_oxkEut5FU2hAHFFTMPmi4W
          stance: supports
          locator: CBDB:67987
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67987）
          source: &a1
            id: s_oxkEut5FU2hAHFFTMPmi4W
            source_type: api_record
            title: 中国历代人物传记资料库：王璟（CBDB 67987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67987&o=json
            external_identifier: CBDB:67987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gFBj1A3hy1qkHDHxT12FRo
        subject_person_id: p_WiwMbe5khxgYE1U6q8kKz5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1447年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2sYg9d4RYZm9REaaKy6U1j
          claim_id: c_gFBj1A3hy1qkHDHxT12FRo
          source_id: s_oxkEut5FU2hAHFFTMPmi4W
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
        id: c_kAMzpMV1CKM6i3GYE1FAhw
        subject_person_id: p_WiwMbe5khxgYE1U6q8kKz5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1533年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q9m2G51EBMUfuyZSw3q1n6
          claim_id: c_kAMzpMV1CKM6i3GYE1FAhw
          source_id: s_oxkEut5FU2hAHFFTMPmi4W
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
        id: c_icV7bjdT4o4MV6kzW6g46W
        subject_person_id: p_WiwMbe5khxgYE1U6q8kKz5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LrkFHLb8PJ6X7RR3e6GNji
          claim_id: c_icV7bjdT4o4MV6kzW6g46W
          source_id: s_oxkEut5FU2hAHFFTMPmi4W
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

# 王璟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璟 | accepted |
| birth.date | 1447年 | accepted |
| death.date | 1533年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璟（CBDB 67987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67987&o=json)
