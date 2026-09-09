---
schema: wang-person/v1
id: p_XBdYGhhY6KYRHheCG3YBMX
status: active
merged_into: null
display_name: 王平
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pCg3vmaN4eTSe5mQjyfxXr
        subject_person_id: p_XBdYGhhY6KYRHheCG3YBMX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王平
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3chXWjzaHDYR75ewAPM9cu
          claim_id: c_pCg3vmaN4eTSe5mQjyfxXr
          source_id: s_HMnFVhA1C6c4ZEW5uWq3At
          stance: supports
          locator: CBDB:578608
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（578608）
          source: &a1
            id: s_HMnFVhA1C6c4ZEW5uWq3At
            source_type: api_record
            title: 中国历代人物传记资料库：王平（CBDB 578608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578608&o=json
            external_identifier: CBDB:578608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_XyQfgUckhh3JwN7SpSkJq5
        subject_person_id: p_XBdYGhhY6KYRHheCG3YBMX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1670年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PZd3KP8gT2hGGUKDLEYQNS
          claim_id: c_XyQfgUckhh3JwN7SpSkJq5
          source_id: s_HMnFVhA1C6c4ZEW5uWq3At
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
        id: c_8fHPb3AQiU6ZPeZWaKiL21
        subject_person_id: p_XBdYGhhY6KYRHheCG3YBMX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FeZ7SCvDx7KusThhFoJQuj
          claim_id: c_8fHPb3AQiU6ZPeZWaKiL21
          source_id: s_HMnFVhA1C6c4ZEW5uWq3At
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

# 王平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王平 | accepted |
| death.date | 1670年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王平（CBDB 578608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578608&o=json)
