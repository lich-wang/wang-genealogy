---
schema: wang-person/v1
id: p_SbaNfqDD7dv8kTFF8SH9xa
status: active
merged_into: null
display_name: 王運熙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_63U43fg92z2XiYSZx74N6b
        subject_person_id: p_SbaNfqDD7dv8kTFF8SH9xa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8qX9KiaA5Upwa6QgKs38TZ
          claim_id: c_63U43fg92z2XiYSZx74N6b
          source_id: s_RkqM1NzNw1a31PZqrzTNNw
          stance: supports
          locator: CBDB:61040
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61040）
          source: &a1
            id: s_RkqM1NzNw1a31PZqrzTNNw
            source_type: api_record
            title: 中国历代人物传记资料库：王運熙（CBDB 61040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61040&o=json
            external_identifier: CBDB:61040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8XvKcDeriK7hKEUEGBJkKy
        subject_person_id: p_SbaNfqDD7dv8kTFF8SH9xa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1618年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SePXVsyJRPy2XvBQztBTt5
          claim_id: c_8XvKcDeriK7hKEUEGBJkKy
          source_id: s_RkqM1NzNw1a31PZqrzTNNw
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
        id: c_4RMbtmzhy9WcMUZgUsMvkY
        subject_person_id: p_SbaNfqDD7dv8kTFF8SH9xa
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
        - id: cs_1F1WZaNhCrEYM1oN4B56Tm
          claim_id: c_4RMbtmzhy9WcMUZgUsMvkY
          source_id: s_RkqM1NzNw1a31PZqrzTNNw
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

# 王運熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王運熙 | accepted |
| birth.date | 1618年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王運熙（CBDB 61040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61040&o=json)
