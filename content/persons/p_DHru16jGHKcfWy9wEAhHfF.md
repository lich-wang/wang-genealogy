---
schema: wang-person/v1
id: p_DHru16jGHKcfWy9wEAhHfF
status: active
merged_into: null
display_name: 王之麟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z5RRgfosBp4EgNFcDz4wid
        subject_person_id: p_DHru16jGHKcfWy9wEAhHfF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QpoQFdNiap89Hteen2V1L6
          claim_id: c_z5RRgfosBp4EgNFcDz4wid
          source_id: s_UKkQUb7Zizm8CYjP9c7DgL
          stance: supports
          locator: CBDB:338129
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（338129）
          source: &a1
            id: s_UKkQUb7Zizm8CYjP9c7DgL
            source_type: api_record
            title: 中国历代人物传记资料库：王之麟（CBDB 338129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338129&o=json
            external_identifier: CBDB:338129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.535Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Gv44CW8KSNU1x4RLLZVr91
        subject_person_id: p_DHru16jGHKcfWy9wEAhHfF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1680年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wMEssAJmMi278sgscyEpDm
          claim_id: c_Gv44CW8KSNU1x4RLLZVr91
          source_id: s_UKkQUb7Zizm8CYjP9c7DgL
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
        id: c_aGG6P4t3GqNyQVUU9b4BkB
        subject_person_id: p_DHru16jGHKcfWy9wEAhHfF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1737年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZtZDb7bxaXLmpvPi8JdWid
          claim_id: c_aGG6P4t3GqNyQVUU9b4BkB
          source_id: s_UKkQUb7Zizm8CYjP9c7DgL
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
        id: c_1DFkLUWBToQNkJTFWa5DYG
        subject_person_id: p_DHru16jGHKcfWy9wEAhHfF
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
        - id: cs_8J21WE2F4y884oChefwaxs
          claim_id: c_1DFkLUWBToQNkJTFWa5DYG
          source_id: s_UKkQUb7Zizm8CYjP9c7DgL
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

# 王之麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之麟 | accepted |
| birth.date | 1680年 | accepted |
| death.date | 1737年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之麟（CBDB 338129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338129&o=json)
