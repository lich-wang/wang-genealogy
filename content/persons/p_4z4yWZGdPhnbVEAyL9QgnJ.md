---
schema: wang-person/v1
id: p_4z4yWZGdPhnbVEAyL9QgnJ
status: active
merged_into: null
display_name: 王爌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HYS8c7S4SwDyNXpJrz9dby
        subject_person_id: p_4z4yWZGdPhnbVEAyL9QgnJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4bEALtqnKz8zUy7KNc1tFQ
          claim_id: c_HYS8c7S4SwDyNXpJrz9dby
          source_id: s_pEHa4FnT3Kov9E6g1pbwEs
          stance: supports
          locator: CBDB:68280
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68280）
          source: &a1
            id: s_pEHa4FnT3Kov9E6g1pbwEs
            source_type: api_record
            title: 中国历代人物传记资料库：王爌（CBDB 68280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68280&o=json
            external_identifier: CBDB:68280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.064Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4SNHttEUAbtk4L5tvgDMM4
        subject_person_id: p_4z4yWZGdPhnbVEAyL9QgnJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1554年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oRyood8jLN6QZNJhoy2tM5
          claim_id: c_4SNHttEUAbtk4L5tvgDMM4
          source_id: s_pEHa4FnT3Kov9E6g1pbwEs
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
        id: c_g4uic6t2sjfDqn9E6z1F2K
        subject_person_id: p_4z4yWZGdPhnbVEAyL9QgnJ
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
        - id: cs_X1zCKJEbYiPQ1fHzn4xxdo
          claim_id: c_g4uic6t2sjfDqn9E6z1F2K
          source_id: s_pEHa4FnT3Kov9E6g1pbwEs
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

# 王爌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爌 | accepted |
| death.date | 1554年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王爌（CBDB 68280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68280&o=json)
