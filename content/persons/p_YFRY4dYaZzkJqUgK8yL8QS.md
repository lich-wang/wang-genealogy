---
schema: wang-person/v1
id: p_YFRY4dYaZzkJqUgK8yL8QS
status: active
merged_into: null
display_name: 王棋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dKKqHAJNtD6ywN37FMxJMR
        subject_person_id: p_YFRY4dYaZzkJqUgK8yL8QS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7NjstHpqNihuKEzS8n5P1A
          claim_id: c_dKKqHAJNtD6ywN37FMxJMR
          source_id: s_YBJLGwJVE1pRZty9NLgLbm
          stance: supports
          locator: CBDB:638724
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638724）
          source: &a1
            id: s_YBJLGwJVE1pRZty9NLgLbm
            source_type: api_record
            title: 中国历代人物传记资料库：王棋（CBDB 638724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638724&o=json
            external_identifier: CBDB:638724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.746Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HS3XWJtS3g4DQMYFnmBjbL
        subject_person_id: p_YFRY4dYaZzkJqUgK8yL8QS
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
        - id: cs_LmY3VoPoH4v1KfTf44birK
          claim_id: c_HS3XWJtS3g4DQMYFnmBjbL
          source_id: s_YBJLGwJVE1pRZty9NLgLbm
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

# 王棋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棋 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王棋（CBDB 638724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638724&o=json)
