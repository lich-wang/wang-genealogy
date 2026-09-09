---
schema: wang-person/v1
id: p_H3rs3de5YfYQ5NjYLKi221
status: active
merged_into: null
display_name: 王世琪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xEHAVeHHTvPejvz13puEmz
        subject_person_id: p_H3rs3de5YfYQ5NjYLKi221
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世琪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uWJ3fud47Bmw9eiUyCYpih
          claim_id: c_xEHAVeHHTvPejvz13puEmz
          source_id: s_24h843EeYo62PsDh4FBosC
          stance: supports
          locator: CBDB:71470
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71470）
          source: &a1
            id: s_24h843EeYo62PsDh4FBosC
            source_type: api_record
            title: 中国历代人物传记资料库：王世琪（CBDB 71470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71470&o=json
            external_identifier: CBDB:71470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.699Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YcU9XGvCmoqTfXYnBT7Hwh
        subject_person_id: p_H3rs3de5YfYQ5NjYLKi221
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1856年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LDPft2eMWAwz1PEYzTDibz
          claim_id: c_YcU9XGvCmoqTfXYnBT7Hwh
          source_id: s_24h843EeYo62PsDh4FBosC
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
        id: c_Mn9xo18sNFQdHk1af2Wk1m
        subject_person_id: p_H3rs3de5YfYQ5NjYLKi221
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1917年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zQgP3iNKP7aqY8C3vWQcpp
          claim_id: c_Mn9xo18sNFQdHk1af2Wk1m
          source_id: s_24h843EeYo62PsDh4FBosC
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
        id: c_VFK8nPDhYPwKwRd334AawG
        subject_person_id: p_H3rs3de5YfYQ5NjYLKi221
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HDZ34HQASp5HqNUWHVYNM5
          claim_id: c_VFK8nPDhYPwKwRd334AawG
          source_id: s_24h843EeYo62PsDh4FBosC
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

# 王世琪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世琪 | accepted |
| birth.date | 1856年 | accepted |
| death.date | 1917年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世琪（CBDB 71470）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71470&o=json)
