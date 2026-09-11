---
schema: wang-person/v1
id: p_PMBNDDKRBje6zpMYMzorSA
status: active
merged_into: null
display_name: 王毓麟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q2gBJG88DudNDGXQ2ajokp
        subject_person_id: p_PMBNDDKRBje6zpMYMzorSA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3xrd2XBLtg3s73HmM9puoE
          claim_id: c_q2gBJG88DudNDGXQ2ajokp
          source_id: s_t7GAdh5et849BGXWhvVojz
          stance: supports
          locator: CBDB:72168
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72168）
          source: &a1
            id: s_t7GAdh5et849BGXWhvVojz
            source_type: api_record
            title: 中国历代人物传记资料库：王毓麟（CBDB 72168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72168&o=json
            external_identifier: CBDB:72168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.035Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Ewqqr6HbiKn4cgPzNYGNnc
        subject_person_id: p_PMBNDDKRBje6zpMYMzorSA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1780年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rt9fKoc6av3KCFbb32yBJ1
          claim_id: c_Ewqqr6HbiKn4cgPzNYGNnc
          source_id: s_t7GAdh5et849BGXWhvVojz
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
        id: c_6rpbZBngA1We25nw8srg7B
        subject_person_id: p_PMBNDDKRBje6zpMYMzorSA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1826年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HMG2um88csSaNRY3enk6Mm
          claim_id: c_6rpbZBngA1We25nw8srg7B
          source_id: s_t7GAdh5et849BGXWhvVojz
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
        id: c_oZAGDV1P4kv173CgcNTSqQ
        subject_person_id: p_PMBNDDKRBje6zpMYMzorSA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓麟（1780年—1826年），清人物。籍贯昆明。（中国历代人物传记资料库 CBDB 72168）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B68FqbqcGb33oA430AFcgT
          claim_id: c_oZAGDV1P4kv173CgcNTSqQ
          source_id: s_t7GAdh5et849BGXWhvVojz
          stance: supports
          locator: CBDB:72168
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王毓麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王毓麟 | accepted |
| birth.date | 1780年 | accepted |
| death.date | 1826年 | accepted |
| bio.summary | 王毓麟（1780年—1826年），清人物。籍贯昆明。（中国历代人物传记资料库 CBDB 72168） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王毓麟（CBDB 72168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72168&o=json)
