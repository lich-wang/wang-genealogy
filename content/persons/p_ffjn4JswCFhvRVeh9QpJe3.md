---
schema: wang-person/v1
id: p_ffjn4JswCFhvRVeh9QpJe3
status: active
merged_into: null
display_name: 王方諝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kvfQpCzmgbbXVf2dWTjGWC
        subject_person_id: p_ffjn4JswCFhvRVeh9QpJe3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方諝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_om6hZVAwu9sws5cy1N52c9
          claim_id: c_kvfQpCzmgbbXVf2dWTjGWC
          source_id: s_ZUH6G1cASQEfx5kKwPC7NR
          stance: supports
          locator: CBDB:175647
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175647）
          source: &a1
            id: s_ZUH6G1cASQEfx5kKwPC7NR
            source_type: api_record
            title: 中国历代人物传记资料库：王方諝（CBDB 175647）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175647&o=json
            external_identifier: CBDB:175647
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NSFKe9WMAnks8D3725b2qY
        subject_person_id: p_ffjn4JswCFhvRVeh9QpJe3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 625年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hagLWgZKGF8REoBmDgZHHR
          claim_id: c_NSFKe9WMAnks8D3725b2qY
          source_id: s_ZUH6G1cASQEfx5kKwPC7NR
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
        id: c_4QNDznqN13rB8iMn9Q8m47
        subject_person_id: p_ffjn4JswCFhvRVeh9QpJe3
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
        - id: cs_GzvNaNh8sqfeNvUfvvGds2
          claim_id: c_4QNDznqN13rB8iMn9Q8m47
          source_id: s_ZUH6G1cASQEfx5kKwPC7NR
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

# 王方諝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王方諝 | accepted |
| death.date | 625年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王方諝（CBDB 175647）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175647&o=json)
