---
schema: wang-person/v1
id: p_FW5SpdmGRoHago5UvwzQZC
status: active
merged_into: null
display_name: 王柟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qvoP8JVnGBRfKqQHg67BhK
        subject_person_id: p_FW5SpdmGRoHago5UvwzQZC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YNdzdCMM3EpQ5zoHwi88gQ
          claim_id: c_qvoP8JVnGBRfKqQHg67BhK
          source_id: s_2m4xyDjykKh8DwtAtrgpeD
          stance: supports
          locator: CBDB:38417
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38417）
          source: &a1
            id: s_2m4xyDjykKh8DwtAtrgpeD
            source_type: api_record
            title: 中国历代人物传记资料库：王柟（CBDB 38417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38417&o=json
            external_identifier: CBDB:38417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.459Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Q1CF9JSyivM2spv45XKmyx
        subject_person_id: p_FW5SpdmGRoHago5UvwzQZC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1143年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hGLsT58C3stWGwfKHuyCZ7
          claim_id: c_Q1CF9JSyivM2spv45XKmyx
          source_id: s_2m4xyDjykKh8DwtAtrgpeD
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
        id: c_7WqvJfkgNVFMTGAQAw45w9
        subject_person_id: p_FW5SpdmGRoHago5UvwzQZC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1217年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Lb6kLUcjRow69AKrgeKC4
          claim_id: c_7WqvJfkgNVFMTGAQAw45w9
          source_id: s_2m4xyDjykKh8DwtAtrgpeD
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
        id: c_C329p5NHZkBwBGGwPbqPh1
        subject_person_id: p_FW5SpdmGRoHago5UvwzQZC
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
        - id: cs_5bfDVcDroyfZR8ZJdkuC5Z
          claim_id: c_C329p5NHZkBwBGGwPbqPh1
          source_id: s_2m4xyDjykKh8DwtAtrgpeD
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

# 王柟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王柟 | accepted |
| birth.date | 1143年 | accepted |
| death.date | 1217年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王柟（CBDB 38417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38417&o=json)
