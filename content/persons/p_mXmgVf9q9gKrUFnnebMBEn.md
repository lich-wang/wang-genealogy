---
schema: wang-person/v1
id: p_mXmgVf9q9gKrUFnnebMBEn
status: active
merged_into: null
display_name: 王大志
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r2E9RXNgkgvD4B8pvELKqv
        subject_person_id: p_mXmgVf9q9gKrUFnnebMBEn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1B3yFrAwvujSfzBoMP7T1n
          claim_id: c_r2E9RXNgkgvD4B8pvELKqv
          source_id: s_uXKX8NEYDMqLsj9qFQ4jfP
          stance: supports
          locator: CBDB:147135
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（147135）
          source: &a1
            id: s_uXKX8NEYDMqLsj9qFQ4jfP
            source_type: api_record
            title: 中国历代人物传记资料库：王大志（CBDB 147135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147135&o=json
            external_identifier: CBDB:147135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.726Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_39MSD2wmzQa7pxDpqTPtyb
        subject_person_id: p_mXmgVf9q9gKrUFnnebMBEn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5j5Q5mwZnzS6DQ9G8aJDgR
          claim_id: c_39MSD2wmzQa7pxDpqTPtyb
          source_id: s_uXKX8NEYDMqLsj9qFQ4jfP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FK9LmGZgZyaafQ2rGQ4zSS
        subject_person_id: p_jQ9drKpLJN9ER2YmPaPe9P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mXmgVf9q9gKrUFnnebMBEn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ym20wkA_v0Gitg_mKSwnRc
          claim_id: c_FK9LmGZgZyaafQ2rGQ4zSS
          source_id: s_HFBFNsstxE9bgZF5fBGASc
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yonghui 100：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HFBFNsstxE9bgZF5fBGASc
            source_type: api_record
            title: 中国历代人物传记资料库：王素（CBDB 139018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139018&o=json
            external_identifier: CBDB:139018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.375Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jQ9drKpLJN9ER2YmPaPe9P
        status: active
        display_name: 王素
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大志 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jQ9drKpLJN9ER2YmPaPe9P | 王素 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大志（CBDB 147135）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147135&o=json)
- [中国历代人物传记资料库：王素（CBDB 139018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139018&o=json)
