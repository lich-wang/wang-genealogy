---
schema: wang-person/v1
id: p_c56AFjxMtGMgAcvMVnAG3L
status: active
merged_into: null
display_name: 王懋祺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JP3YAMdYzAde3zx7NbXK5G
        subject_person_id: p_c56AFjxMtGMgAcvMVnAG3L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋祺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NqZsK8pL21boj6QkEBdEcz
          claim_id: c_JP3YAMdYzAde3zx7NbXK5G
          source_id: s_CAd4spqfXXN793xE9eGcpp
          stance: supports
          locator: CBDB:638017
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638017）
          source: &a1
            id: s_CAd4spqfXXN793xE9eGcpp
            source_type: api_record
            title: 中国历代人物传记资料库：王懋祺（CBDB 638017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638017&o=json
            external_identifier: CBDB:638017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.486Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SkJmNQ4x9zvtULvXqNvjeq
        subject_person_id: p_c56AFjxMtGMgAcvMVnAG3L
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
        - id: cs_AP7syt2v9pCQnpRoCDTLL2
          claim_id: c_SkJmNQ4x9zvtULvXqNvjeq
          source_id: s_CAd4spqfXXN793xE9eGcpp
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

# 王懋祺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋祺 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懋祺（CBDB 638017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638017&o=json)
