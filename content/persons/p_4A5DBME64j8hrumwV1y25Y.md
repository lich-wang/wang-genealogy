---
schema: wang-person/v1
id: p_4A5DBME64j8hrumwV1y25Y
status: active
merged_into: null
display_name: 王錫命
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SHjn9QJDZw4camwswvqiz1
        subject_person_id: p_4A5DBME64j8hrumwV1y25Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫命
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WXST6jmkZPcu7sXKGGmC25
          claim_id: c_SHjn9QJDZw4camwswvqiz1
          source_id: s_aHRF3Xb81XeBz8B8Aq2qW2
          stance: supports
          locator: CBDB:204975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204975）
          source: &a1
            id: s_aHRF3Xb81XeBz8B8Aq2qW2
            source_type: api_record
            title: 中国历代人物传记资料库：王錫命（CBDB 204975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204975&o=json
            external_identifier: CBDB:204975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.845Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RkGFB3KXQjPTzKDWXoirvE
        subject_person_id: p_4A5DBME64j8hrumwV1y25Y
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1537年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2cWHARungYjqPbnChsbCgS
          claim_id: c_RkGFB3KXQjPTzKDWXoirvE
          source_id: s_aHRF3Xb81XeBz8B8Aq2qW2
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
        id: c_MExuyJidtKzskNG2bcMEPy
        subject_person_id: p_4A5DBME64j8hrumwV1y25Y
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
        - id: cs_H7UGBB6ukkWQYECyKdvy3B
          claim_id: c_MExuyJidtKzskNG2bcMEPy
          source_id: s_aHRF3Xb81XeBz8B8Aq2qW2
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

# 王錫命

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫命 | accepted |
| birth.date | 1537年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫命（CBDB 204975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204975&o=json)
