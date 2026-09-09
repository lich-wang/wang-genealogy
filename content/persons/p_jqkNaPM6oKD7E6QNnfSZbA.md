---
schema: wang-person/v1
id: p_jqkNaPM6oKD7E6QNnfSZbA
status: active
merged_into: null
display_name: 王翊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8AzYQLwWWf7UmF4J7KGN8G
        subject_person_id: p_jqkNaPM6oKD7E6QNnfSZbA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UoUdfPtD77w1dg4ZzUjP75
          claim_id: c_8AzYQLwWWf7UmF4J7KGN8G
          source_id: s_LBUH4Lj1Unj1MTZ6JBiSyk
          stance: supports
          locator: CBDB:175705
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175705）
          source: &a1
            id: s_LBUH4Lj1Unj1MTZ6JBiSyk
            source_type: api_record
            title: 中国历代人物传记资料库：王翊（CBDB 175705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175705&o=json
            external_identifier: CBDB:175705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.066Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_TgFRabsnXr4Nr4DTpSHKVE
        subject_person_id: p_jqkNaPM6oKD7E6QNnfSZbA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 767年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mvqm3marDNwR7dguaena7D
          claim_id: c_TgFRabsnXr4Nr4DTpSHKVE
          source_id: s_LBUH4Lj1Unj1MTZ6JBiSyk
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
        id: c_7uKJKY2LSNPvZYGx3XqxTs
        subject_person_id: p_jqkNaPM6oKD7E6QNnfSZbA
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
        - id: cs_KWC6Q74ce5uQmoRNrHwzeB
          claim_id: c_7uKJKY2LSNPvZYGx3XqxTs
          source_id: s_LBUH4Lj1Unj1MTZ6JBiSyk
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

# 王翊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翊 | accepted |
| death.date | 767年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翊（CBDB 175705）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175705&o=json)
