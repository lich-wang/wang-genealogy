---
schema: wang-person/v1
id: p_6tmcP3d7xjyPvK4wYN3PKk
status: active
merged_into: null
display_name: 王家相
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tUztuz1kf23HJWUYNXLv8i
        subject_person_id: p_6tmcP3d7xjyPvK4wYN3PKk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_26NCaeJnnKyaBDZsXQ2aYn
          claim_id: c_tUztuz1kf23HJWUYNXLv8i
          source_id: s_XXaDBNQ9RkdKNMcDxDPV5b
          stance: supports
          locator: CBDB:342534
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342534）
          source: &a1
            id: s_XXaDBNQ9RkdKNMcDxDPV5b
            source_type: api_record
            title: 中国历代人物传记资料库：王家相（CBDB 342534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342534&o=json
            external_identifier: CBDB:342534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rH6aQ2Gb4NJfx789pxAc5c
        subject_person_id: p_6tmcP3d7xjyPvK4wYN3PKk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家相，明人物。明清進士進士，籍贯獲鹿，入仕進士。（中国历代人物传记资料库 CBDB 342534）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TfzjyC8ysL7GLOjG-1lGLv
          claim_id: c_rH6aQ2Gb4NJfx789pxAc5c
          source_id: s_XXaDBNQ9RkdKNMcDxDPV5b
          stance: supports
          locator: CBDB:342534
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

# 王家相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家相 | accepted |
| bio.summary | 王家相，明人物。明清進士進士，籍贯獲鹿，入仕進士。（中国历代人物传记资料库 CBDB 342534） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家相（CBDB 342534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342534&o=json)
