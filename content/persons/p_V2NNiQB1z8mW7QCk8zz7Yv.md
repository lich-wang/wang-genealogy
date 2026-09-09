---
schema: wang-person/v1
id: p_V2NNiQB1z8mW7QCk8zz7Yv
status: active
merged_into: null
display_name: 王傳澤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uJXXWxERFRWURWx5qvgpJq
        subject_person_id: p_V2NNiQB1z8mW7QCk8zz7Yv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傳澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y52AgS4JrdhJQjNjDKz3ka
          claim_id: c_uJXXWxERFRWURWx5qvgpJq
          source_id: s_9ScufMTFrPLuRUoMApLN6p
          stance: supports
          locator: CBDB:636091
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636091）
          source: &a1
            id: s_9ScufMTFrPLuRUoMApLN6p
            source_type: api_record
            title: 中国历代人物传记资料库：王傳澤（CBDB 636091）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636091&o=json
            external_identifier: CBDB:636091
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.884Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XKJVwhg4aCEcnJTyYSZsW2
        subject_person_id: p_V2NNiQB1z8mW7QCk8zz7Yv
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
        - id: cs_uv84tf8mARHXAknmBhutg7
          claim_id: c_XKJVwhg4aCEcnJTyYSZsW2
          source_id: s_9ScufMTFrPLuRUoMApLN6p
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

# 王傳澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傳澤 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王傳澤（CBDB 636091）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636091&o=json)
