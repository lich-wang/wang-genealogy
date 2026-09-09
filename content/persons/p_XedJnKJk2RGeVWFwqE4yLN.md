---
schema: wang-person/v1
id: p_XedJnKJk2RGeVWFwqE4yLN
status: active
merged_into: null
display_name: 王鍾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LM8gKijF4J4oPknYVbhA6x
        subject_person_id: p_XedJnKJk2RGeVWFwqE4yLN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HwxmLshGN7aaNt1DzxvWbr
          claim_id: c_LM8gKijF4J4oPknYVbhA6x
          source_id: s_9Em9wAbQbTvJFgbcCHvF2q
          stance: supports
          locator: CBDB:317108
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317108）
          source: &a1
            id: s_9Em9wAbQbTvJFgbcCHvF2q
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾（CBDB 317108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317108&o=json
            external_identifier: CBDB:317108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jDEZoWBDycWv95qh957fZm
        subject_person_id: p_XedJnKJk2RGeVWFwqE4yLN
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
        - id: cs_kwnap4G58JCNj42F2JDApY
          claim_id: c_jDEZoWBDycWv95qh957fZm
          source_id: s_9Em9wAbQbTvJFgbcCHvF2q
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

# 王鍾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍾 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍾（CBDB 317108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317108&o=json)
