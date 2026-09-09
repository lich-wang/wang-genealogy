---
schema: wang-person/v1
id: p_pQ4PZA9J5NRAuUmE4su9fC
status: active
merged_into: null
display_name: 王用
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AMKq82NgBJma5KJht7gRfJ
        subject_person_id: p_pQ4PZA9J5NRAuUmE4su9fC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NHTx3MnhSZf7pH3djFGyKD
          claim_id: c_AMKq82NgBJma5KJht7gRfJ
          source_id: s_EppHqd6VFC8wR8GQtewrzh
          stance: supports
          locator: CBDB:690926
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690926）
          source: &a1
            id: s_EppHqd6VFC8wR8GQtewrzh
            source_type: api_record
            title: 中国历代人物传记资料库：王用（CBDB 690926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690926&o=json
            external_identifier: CBDB:690926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.594Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qWRVmPYbjtUa2oGkf3Xk54
        subject_person_id: p_pQ4PZA9J5NRAuUmE4su9fC
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
        - id: cs_Fh31DctgGaX7w5qDAbj7Rv
          claim_id: c_qWRVmPYbjtUa2oGkf3Xk54
          source_id: s_EppHqd6VFC8wR8GQtewrzh
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

# 王用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用（CBDB 690926）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690926&o=json)
