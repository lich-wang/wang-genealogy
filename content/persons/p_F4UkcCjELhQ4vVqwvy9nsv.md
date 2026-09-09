---
schema: wang-person/v1
id: p_F4UkcCjELhQ4vVqwvy9nsv
status: active
merged_into: null
display_name: 王奇光
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zumrNDMDbLRHbg3aDyGDmY
        subject_person_id: p_F4UkcCjELhQ4vVqwvy9nsv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奇光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_98xWTjjMh5rSuVFJ7EaTJC
          claim_id: c_zumrNDMDbLRHbg3aDyGDmY
          source_id: s_aMFDupufhBP42nM3WB63FL
          stance: supports
          locator: CBDB:445593
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445593）
          source: &a1
            id: s_aMFDupufhBP42nM3WB63FL
            source_type: api_record
            title: 中国历代人物传记资料库：王奇光（CBDB 445593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445593&o=json
            external_identifier: CBDB:445593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.197Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m1wKCw27SdZ5STRL4QzFPX
        subject_person_id: p_F4UkcCjELhQ4vVqwvy9nsv
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
        - id: cs_4N6EitQ2DzdLbHh5qRYM5r
          claim_id: c_m1wKCw27SdZ5STRL4QzFPX
          source_id: s_aMFDupufhBP42nM3WB63FL
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

# 王奇光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奇光 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王奇光（CBDB 445593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445593&o=json)
