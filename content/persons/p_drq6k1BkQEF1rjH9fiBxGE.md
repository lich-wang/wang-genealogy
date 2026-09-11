---
schema: wang-person/v1
id: p_drq6k1BkQEF1rjH9fiBxGE
status: active
merged_into: null
display_name: 王佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kK4W25chnFB5NFtBTfEqib
        subject_person_id: p_drq6k1BkQEF1rjH9fiBxGE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VdqqRx1QFPSrJfzU2baHVk
          claim_id: c_kK4W25chnFB5NFtBTfEqib
          source_id: s_dyiBAsKSsg7Ey5yqBJg7XW
          stance: supports
          locator: CBDB:67293
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67293）
          source: &a1
            id: s_dyiBAsKSsg7Ey5yqBJg7XW
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 67293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67293&o=json
            external_identifier: CBDB:67293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D1rnL1Lw2tFpwDiYvwpSGj
        subject_person_id: p_drq6k1BkQEF1rjH9fiBxGE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐，明人物。籍贯福州中衛，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 67293）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k73AiwYDfLx5S63alhozY3
          claim_id: c_D1rnL1Lw2tFpwDiYvwpSGj
          source_id: s_dyiBAsKSsg7Ey5yqBJg7XW
          stance: supports
          locator: CBDB:67293
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

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | 王佐，明人物。籍贯福州中衛，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 67293） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 67293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67293&o=json)
