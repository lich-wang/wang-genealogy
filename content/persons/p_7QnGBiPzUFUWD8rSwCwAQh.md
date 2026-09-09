---
schema: wang-person/v1
id: p_7QnGBiPzUFUWD8rSwCwAQh
status: active
merged_into: null
display_name: 王鈞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yjQEgqZDaL5zXWSCqCfcWe
        subject_person_id: p_7QnGBiPzUFUWD8rSwCwAQh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XAQShR5bFxDogXLNav7NNR
          claim_id: c_yjQEgqZDaL5zXWSCqCfcWe
          source_id: s_y7B65XeE2bvCsAck3T9oCY
          stance: supports
          locator: CBDB:143108
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（143108）
          source: &a1
            id: s_y7B65XeE2bvCsAck3T9oCY
            source_type: api_record
            title: 中国历代人物传记资料库：王鈞（CBDB 143108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143108&o=json
            external_identifier: CBDB:143108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.616Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LEz7RC1Zqjs1NkkJXJK9zf
        subject_person_id: p_7QnGBiPzUFUWD8rSwCwAQh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 696年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VeZz4wNPvsqnEeAEidT8Xn
          claim_id: c_LEz7RC1Zqjs1NkkJXJK9zf
          source_id: s_y7B65XeE2bvCsAck3T9oCY
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
        id: c_FbeLnyvPFQj5NiWsWhWoWM
        subject_person_id: p_7QnGBiPzUFUWD8rSwCwAQh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 776年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5B6EV6jHHBEEuT66tqVK3J
          claim_id: c_FbeLnyvPFQj5NiWsWhWoWM
          source_id: s_y7B65XeE2bvCsAck3T9oCY
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
        id: c_3WAAuyfwLRqWvQQZ8eAk6M
        subject_person_id: p_7QnGBiPzUFUWD8rSwCwAQh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bKBUUd4wNvZ9jL6n2ViXJ5
          claim_id: c_3WAAuyfwLRqWvQQZ8eAk6M
          source_id: s_y7B65XeE2bvCsAck3T9oCY
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

# 王鈞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鈞 | accepted |
| birth.date | 696年 | accepted |
| death.date | 776年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鈞（CBDB 143108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143108&o=json)
