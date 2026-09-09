---
schema: wang-person/v1
id: p_1MQh6eCChsYgydq9xLD6sN
status: active
merged_into: null
display_name: 王凍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R46EPYWdwXZ6X3dmJZv8rQ
        subject_person_id: p_1MQh6eCChsYgydq9xLD6sN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7PB4Xim2Nc9iZvQGvPTKS9
          claim_id: c_R46EPYWdwXZ6X3dmJZv8rQ
          source_id: s_jdGHVaD5YJAiuadRrQzuKf
          stance: supports
          locator: CBDB:538063
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（538063）
          source: &a1
            id: s_jdGHVaD5YJAiuadRrQzuKf
            source_type: api_record
            title: 中国历代人物传记资料库：王凍（CBDB 538063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538063&o=json
            external_identifier: CBDB:538063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.423Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n6VWeyF5qqGur2CEtzKFGT
        subject_person_id: p_1MQh6eCChsYgydq9xLD6sN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Do1bVAbMzzxJTNtx9tioHq
          claim_id: c_n6VWeyF5qqGur2CEtzKFGT
          source_id: s_jdGHVaD5YJAiuadRrQzuKf
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

# 王凍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王凍 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王凍（CBDB 538063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538063&o=json)
