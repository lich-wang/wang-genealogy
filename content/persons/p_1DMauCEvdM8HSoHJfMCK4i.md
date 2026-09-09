---
schema: wang-person/v1
id: p_1DMauCEvdM8HSoHJfMCK4i
status: active
merged_into: null
display_name: 王中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9KWm3bBPoKzFLN84sWjDyp
        subject_person_id: p_1DMauCEvdM8HSoHJfMCK4i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z6s63r4LrQZMZVeMXJUDcY
          claim_id: c_9KWm3bBPoKzFLN84sWjDyp
          source_id: s_KtktCFNhgADxrmhQvTdQ34
          stance: supports
          locator: CBDB:100623
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100623）
          source: &a1
            id: s_KtktCFNhgADxrmhQvTdQ34
            source_type: api_record
            title: 中国历代人物传记资料库：王中（CBDB 100623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100623&o=json
            external_identifier: CBDB:100623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.317Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rsGD7RonSCQcT4t7H3eM7k
        subject_person_id: p_1DMauCEvdM8HSoHJfMCK4i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2ttLd5WMj3H1cA79TkYgxf
          claim_id: c_rsGD7RonSCQcT4t7H3eM7k
          source_id: s_KtktCFNhgADxrmhQvTdQ34
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

# 王中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王中 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王中（CBDB 100623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100623&o=json)
