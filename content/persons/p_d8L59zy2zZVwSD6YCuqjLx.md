---
schema: wang-person/v1
id: p_d8L59zy2zZVwSD6YCuqjLx
status: active
merged_into: null
display_name: 王弘仁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_riwMqobgZJ9xkXPmisB541
        subject_person_id: p_d8L59zy2zZVwSD6YCuqjLx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GvM9apyEGHZmmykuHsy8bp
          claim_id: c_riwMqobgZJ9xkXPmisB541
          source_id: s_bM7JM4o4DuJX466VYuwPpY
          stance: supports
          locator: CBDB:175643
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175643）
          source: &a1
            id: s_bM7JM4o4DuJX466VYuwPpY
            source_type: api_record
            title: 中国历代人物传记资料库：王弘仁（CBDB 175643）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175643&o=json
            external_identifier: CBDB:175643
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.042Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_FKzJncaykr4sJ8qT96EPe6
        subject_person_id: p_d8L59zy2zZVwSD6YCuqjLx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 595年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1NdE1NYL7zPnVbv9EFa5Sf
          claim_id: c_FKzJncaykr4sJ8qT96EPe6
          source_id: s_bM7JM4o4DuJX466VYuwPpY
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
        id: c_TDkarzkeC3KqCkersP9zj2
        subject_person_id: p_d8L59zy2zZVwSD6YCuqjLx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南北朝人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x1iHLMJg2meJgKhTBKrQ9U
          claim_id: c_TDkarzkeC3KqCkersP9zj2
          source_id: s_bM7JM4o4DuJX466VYuwPpY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_iM6n-jUgQSXFcKaRr9MWN9
        subject_person_id: p_d8L59zy2zZVwSD6YCuqjLx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Se1QH4S9v7s992yvC8Vhx3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OdI7QbBl1k7dZqs7cR0AGe
          claim_id: c_iM6n-jUgQSXFcKaRr9MWN9
          source_id: s_bM7JM4o4DuJX466VYuwPpY
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Se1QH4S9v7s992yvC8Vhx3
        status: active
        display_name: 王方誕
        merged_into_person_id: null
    - claim:
        id: c_Dp6CQhOiX7CJGcRS1umfM0
        subject_person_id: p_d8L59zy2zZVwSD6YCuqjLx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xH9NUgGy7R8bN547iD5Ed9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EEufaf-2ORujB3sswNTPs-
          claim_id: c_Dp6CQhOiX7CJGcRS1umfM0
          source_id: s_bM7JM4o4DuJX466VYuwPpY
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xH9NUgGy7R8bN547iD5Ed9
        status: active
        display_name: 王方寔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弘仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘仁 | accepted |
| death.date | 595年 | accepted |
| bio.summary | CBDB 记载为南北朝人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Se1QH4S9v7s992yvC8Vhx3 | 王方誕 | accepted |
| children | p_xH9NUgGy7R8bN547iD5Ed9 | 王方寔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弘仁（CBDB 175643）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175643&o=json)
