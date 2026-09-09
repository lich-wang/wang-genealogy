---
schema: wang-person/v1
id: p_oc1WQDJvbHGEv89N4D3ZGS
status: active
merged_into: null
display_name: 王元壽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R4rLWFjeinvpCqTz3gnA3L
        subject_person_id: p_oc1WQDJvbHGEv89N4D3ZGS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8jHsHNZKsFv2LyLRU3qRjM
          claim_id: c_R4rLWFjeinvpCqTz3gnA3L
          source_id: s_sQjBFh87rZofitM5LDLhas
          stance: supports
          locator: CBDB:691022
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（691022）
          source: &a1
            id: s_sQjBFh87rZofitM5LDLhas
            source_type: api_record
            title: 中国历代人物传记资料库：王元壽（CBDB 691022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691022&o=json
            external_identifier: CBDB:691022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.596Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_wWzdLkBxFFpvWpTuANS4FK
        subject_person_id: p_oc1WQDJvbHGEv89N4D3ZGS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1640年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gKuetYT4TeSZn8TTwR3uXT
          claim_id: c_wWzdLkBxFFpvWpTuANS4FK
          source_id: s_sQjBFh87rZofitM5LDLhas
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
        id: c_LhVNJwjkA6aYL5AspZPA1K
        subject_person_id: p_oc1WQDJvbHGEv89N4D3ZGS
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
        - id: cs_HDjmaED7kc6KT68X3cAapY
          claim_id: c_LhVNJwjkA6aYL5AspZPA1K
          source_id: s_sQjBFh87rZofitM5LDLhas
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

# 王元壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元壽 | accepted |
| death.date | 1640年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元壽（CBDB 691022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691022&o=json)
