---
schema: wang-person/v1
id: p_TDYQMzGzLXMQrbmunu6RNT
status: active
merged_into: null
display_name: 王冕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_caAc97rioedPbj8h6L86oB
        subject_person_id: p_TDYQMzGzLXMQrbmunu6RNT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PxGR9nE9ibYmt9R6tt8mSR
          claim_id: c_caAc97rioedPbj8h6L86oB
          source_id: s_Ct13sVyhTQfPSGC5H4JdFm
          stance: supports
          locator: CBDB:28798
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28798）
          source: &a1
            id: s_Ct13sVyhTQfPSGC5H4JdFm
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 28798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28798&o=json
            external_identifier: CBDB:28798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_wmC6uFxuC5n4MnXZWzXgF8
        subject_person_id: p_TDYQMzGzLXMQrbmunu6RNT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1359年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RiuNJVW2rnBWZLbmbmeV6F
          claim_id: c_wmC6uFxuC5n4MnXZWzXgF8
          source_id: s_Ct13sVyhTQfPSGC5H4JdFm
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
        id: c_3AvgdEfF1MJoPxWn9pTPSM
        subject_person_id: p_TDYQMzGzLXMQrbmunu6RNT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6XPua5mp244h7YzGDc74an
          claim_id: c_3AvgdEfF1MJoPxWn9pTPSM
          source_id: s_Ct13sVyhTQfPSGC5H4JdFm
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

# 王冕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冕 | accepted |
| death.date | 1359年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王冕（CBDB 28798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28798&o=json)
