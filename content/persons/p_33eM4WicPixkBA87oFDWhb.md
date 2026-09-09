---
schema: wang-person/v1
id: p_33eM4WicPixkBA87oFDWhb
status: active
merged_into: null
display_name: 王定保
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iuK7qwLC5VwYbbcCG5huRm
        subject_person_id: p_33eM4WicPixkBA87oFDWhb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定保
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GxEtTqJ2d9DYWtFyXjKG9g
          claim_id: c_iuK7qwLC5VwYbbcCG5huRm
          source_id: s_5NXELYigqv6yXg8pjU25Hy
          stance: supports
          locator: CBDB:35070
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35070）
          source: &a1
            id: s_5NXELYigqv6yXg8pjU25Hy
            source_type: api_record
            title: 中国历代人物传记资料库：王定保（CBDB 35070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35070&o=json
            external_identifier: CBDB:35070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.116Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tfJG61sCk7F84P5GgUhV6p
        subject_person_id: p_33eM4WicPixkBA87oFDWhb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 870年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yPAsSnj6QyrtrSUv7111G4
          claim_id: c_tfJG61sCk7F84P5GgUhV6p
          source_id: s_5NXELYigqv6yXg8pjU25Hy
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
        id: c_nXiug1PMuk1ES57DQxTeVo
        subject_person_id: p_33eM4WicPixkBA87oFDWhb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 941年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m2xye4HdL7eYejkQK3KLiz
          claim_id: c_nXiug1PMuk1ES57DQxTeVo
          source_id: s_5NXELYigqv6yXg8pjU25Hy
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
        id: c_whErXJ6N1pL3NKwEYEjU2G
        subject_person_id: p_33eM4WicPixkBA87oFDWhb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为後漢人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7M7rNWiacp3VaAp2N457co
          claim_id: c_whErXJ6N1pL3NKwEYEjU2G
          source_id: s_5NXELYigqv6yXg8pjU25Hy
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

# 王定保

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定保 | accepted |
| birth.date | 870年 | accepted |
| death.date | 941年 | accepted |
| bio.summary | CBDB 记载为後漢人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王定保（CBDB 35070）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35070&o=json)
