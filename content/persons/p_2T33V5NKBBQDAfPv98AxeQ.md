---
schema: wang-person/v1
id: p_2T33V5NKBBQDAfPv98AxeQ
status: active
merged_into: null
display_name: 王鎧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vb5YQ77zZ5DKKxJvQYDj7P
        subject_person_id: p_2T33V5NKBBQDAfPv98AxeQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ncfbmazd8B4FGHanTi7rG6
          claim_id: c_Vb5YQ77zZ5DKKxJvQYDj7P
          source_id: s_VR32XdVhjHZzd4917Heetg
          stance: supports
          locator: CBDB:474161
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（474161）
          source: &a1
            id: s_VR32XdVhjHZzd4917Heetg
            source_type: api_record
            title: 中国历代人物传记资料库：王鎧（CBDB 474161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474161&o=json
            external_identifier: CBDB:474161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.352Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HC8x6Xs8L7Gm6ZUDD2C3Ub
        subject_person_id: p_2T33V5NKBBQDAfPv98AxeQ
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
        - id: cs_Df1rPBraHxun6s4o1z6KtH
          claim_id: c_HC8x6Xs8L7Gm6ZUDD2C3Ub
          source_id: s_VR32XdVhjHZzd4917Heetg
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

# 王鎧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎧 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎧（CBDB 474161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474161&o=json)
