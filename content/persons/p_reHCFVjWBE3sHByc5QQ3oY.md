---
schema: wang-person/v1
id: p_reHCFVjWBE3sHByc5QQ3oY
status: active
merged_into: null
display_name: 王綱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NQ6uXrNnFN5kg36QPqt2D2
        subject_person_id: p_reHCFVjWBE3sHByc5QQ3oY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9FFYhJNBJ7sku42oojgL3B
          claim_id: c_NQ6uXrNnFN5kg36QPqt2D2
          source_id: s_3txn6VkE1vHLYptDaEh8c9
          stance: supports
          locator: CBDB:61063
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61063）
          source: &a1
            id: s_3txn6VkE1vHLYptDaEh8c9
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 61063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61063&o=json
            external_identifier: CBDB:61063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.890Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_eoHZ8juKkEuVfU9vdvvMcK
        subject_person_id: p_reHCFVjWBE3sHByc5QQ3oY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1613年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a13mh9GHnuVnJmzvkLn15A
          claim_id: c_eoHZ8juKkEuVfU9vdvvMcK
          source_id: s_3txn6VkE1vHLYptDaEh8c9
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
        id: c_2yUZejW25FQj6UAw5HHxrZ
        subject_person_id: p_reHCFVjWBE3sHByc5QQ3oY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1669年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xnaWBfBdaxZSPg3K7UrNvK
          claim_id: c_2yUZejW25FQj6UAw5HHxrZ
          source_id: s_3txn6VkE1vHLYptDaEh8c9
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
        id: c_2j1nREy2bw1G5aV7PxtLAE
        subject_person_id: p_reHCFVjWBE3sHByc5QQ3oY
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
        - id: cs_pWPTJ2S1YNK5kBwcG69w3N
          claim_id: c_2j1nREy2bw1G5aV7PxtLAE
          source_id: s_3txn6VkE1vHLYptDaEh8c9
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

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| birth.date | 1613年 | accepted |
| death.date | 1669年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 61063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61063&o=json)
