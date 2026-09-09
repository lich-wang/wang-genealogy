---
schema: wang-person/v1
id: p_bRSQdFeMvgbZLHXPGE5xqG
status: active
merged_into: null
display_name: 王榘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LHv2rJCB4jJQ9XXJCdfNJy
        subject_person_id: p_bRSQdFeMvgbZLHXPGE5xqG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6ZZwL5dfuD8L6ACDognosh
          claim_id: c_LHv2rJCB4jJQ9XXJCdfNJy
          source_id: s_szo4A3W7ApKMCoFcXjguZ3
          stance: supports
          locator: CBDB:638785
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638785）
          source: &a1
            id: s_szo4A3W7ApKMCoFcXjguZ3
            source_type: api_record
            title: 中国历代人物传记资料库：王榘（CBDB 638785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638785&o=json
            external_identifier: CBDB:638785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.768Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7HNs8eDr1qPjFzbX2QaCTV
        subject_person_id: p_bRSQdFeMvgbZLHXPGE5xqG
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
        - id: cs_jFCohe4BxvBX5AQ5DRECwA
          claim_id: c_7HNs8eDr1qPjFzbX2QaCTV
          source_id: s_szo4A3W7ApKMCoFcXjguZ3
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

# 王榘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榘 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王榘（CBDB 638785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638785&o=json)
