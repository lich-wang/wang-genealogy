---
schema: wang-person/v1
id: p_fJbtRZx7s1XqSoTR8tLmBu
status: active
merged_into: null
display_name: 王珉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_czgt5saHHraKZvLPCHydEB
        subject_person_id: p_fJbtRZx7s1XqSoTR8tLmBu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DCBpTP9LgsBmth62bgB94c
          claim_id: c_czgt5saHHraKZvLPCHydEB
          source_id: s_9t6MfGDZdGonHJQxFCm4qT
          stance: supports
          locator: CBDB:202834
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202834）
          source: &a1
            id: s_9t6MfGDZdGonHJQxFCm4qT
            source_type: api_record
            title: 中国历代人物传记资料库：王珉（CBDB 202834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202834&o=json
            external_identifier: CBDB:202834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.759Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_x664Fh4XMTDGJbzEXG9QHr
        subject_person_id: p_fJbtRZx7s1XqSoTR8tLmBu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1509年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K7FmAHLq59U2R4gvwh8Hkd
          claim_id: c_x664Fh4XMTDGJbzEXG9QHr
          source_id: s_9t6MfGDZdGonHJQxFCm4qT
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
        id: c_Kj4ysYiwHAGw9dcAf6rEpJ
        subject_person_id: p_fJbtRZx7s1XqSoTR8tLmBu
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
        - id: cs_ehkqCmY5sND8TuDAJsYfoX
          claim_id: c_Kj4ysYiwHAGw9dcAf6rEpJ
          source_id: s_9t6MfGDZdGonHJQxFCm4qT
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

# 王珉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珉 | accepted |
| birth.date | 1509年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珉（CBDB 202834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202834&o=json)
