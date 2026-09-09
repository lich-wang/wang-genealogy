---
schema: wang-person/v1
id: p_N8KkzPBYZP1o7g6fiUXXY5
status: active
merged_into: null
display_name: 王鎬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s6d2btvgZHVDisHE6bN1Su
        subject_person_id: p_N8KkzPBYZP1o7g6fiUXXY5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BBBp8RUTrwN5qjjLTh5t3n
          claim_id: c_s6d2btvgZHVDisHE6bN1Su
          source_id: s_bu3TayYnW4B95gGyu3jBkW
          stance: supports
          locator: CBDB:282378
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282378）
          source: &a1
            id: s_bu3TayYnW4B95gGyu3jBkW
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 282378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282378&o=json
            external_identifier: CBDB:282378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.080Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LGZ9iV5md4U5jwnDbEd38V
        subject_person_id: p_N8KkzPBYZP1o7g6fiUXXY5
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
        - id: cs_bmYBu3ZynypVT4V59K3FiC
          claim_id: c_LGZ9iV5md4U5jwnDbEd38V
          source_id: s_bu3TayYnW4B95gGyu3jBkW
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

# 王鎬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎬 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎬（CBDB 282378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282378&o=json)
