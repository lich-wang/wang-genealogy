---
schema: wang-person/v1
id: p_spYpogBorf4HmU9rCheCWD
status: active
merged_into: null
display_name: 王定禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_APdYuxCFxS5PuvEPgPBoqm
        subject_person_id: p_spYpogBorf4HmU9rCheCWD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AAHRhnT3mXac4WP5NeiKPK
          claim_id: c_APdYuxCFxS5PuvEPgPBoqm
          source_id: s_Jy5NaXb2vqv62L9my4yoUZ
          stance: supports
          locator: CBDB:186153
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186153）
          source: &a1
            id: s_Jy5NaXb2vqv62L9my4yoUZ
            source_type: api_record
            title: 中国历代人物传记资料库：王定禮（CBDB 186153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186153&o=json
            external_identifier: CBDB:186153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.270Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GHWJ4qmFPkbL12QVqcED8L
        subject_person_id: p_spYpogBorf4HmU9rCheCWD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 909年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5C3cW6HqC6ZadN8YTnoZ29
          claim_id: c_GHWJ4qmFPkbL12QVqcED8L
          source_id: s_Jy5NaXb2vqv62L9my4yoUZ
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
        id: c_KXhzBLxnamLnuvtSjJQNxf
        subject_person_id: p_spYpogBorf4HmU9rCheCWD
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
        - id: cs_XY2t41NjcvjjMYvFp29sop
          claim_id: c_KXhzBLxnamLnuvtSjJQNxf
          source_id: s_Jy5NaXb2vqv62L9my4yoUZ
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

# 王定禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定禮 | accepted |
| death.date | 909年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王定禮（CBDB 186153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186153&o=json)
