---
schema: wang-person/v1
id: p_GBfHvW9j1wmH7AtQd6s7JQ
status: active
merged_into: null
display_name: 王化
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AiTHVJvbnV7ZenGGkFQ1vb
        subject_person_id: p_GBfHvW9j1wmH7AtQd6s7JQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vZ2qUMjpZoRHPuyVTAi4Lm
          claim_id: c_AiTHVJvbnV7ZenGGkFQ1vb
          source_id: s_9YKRu97xF4S9qXwoCZA3WP
          stance: supports
          locator: CBDB:202136
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202136）
          source: &a1
            id: s_9YKRu97xF4S9qXwoCZA3WP
            source_type: api_record
            title: 中国历代人物传记资料库：王化（CBDB 202136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202136&o=json
            external_identifier: CBDB:202136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.723Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_H3JNG9fWtXpYEhpW23Q6XQ
        subject_person_id: p_GBfHvW9j1wmH7AtQd6s7JQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1485年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kPD3HixNZJH4rEqGrEa6ub
          claim_id: c_H3JNG9fWtXpYEhpW23Q6XQ
          source_id: s_9YKRu97xF4S9qXwoCZA3WP
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
        id: c_1MQCD1VtrPQEBHaBLMAvX9
        subject_person_id: p_GBfHvW9j1wmH7AtQd6s7JQ
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
        - id: cs_xZM2xNFYtoB8axrdx2hNaK
          claim_id: c_1MQCD1VtrPQEBHaBLMAvX9
          source_id: s_9YKRu97xF4S9qXwoCZA3WP
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

# 王化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化 | accepted |
| birth.date | 1485年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王化（CBDB 202136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202136&o=json)
