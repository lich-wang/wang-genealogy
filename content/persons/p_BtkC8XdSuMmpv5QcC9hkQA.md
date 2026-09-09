---
schema: wang-person/v1
id: p_BtkC8XdSuMmpv5QcC9hkQA
status: active
merged_into: null
display_name: 王鼎新
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hFnVv2VAkJtD4g4AsgM8dN
        subject_person_id: p_BtkC8XdSuMmpv5QcC9hkQA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qm5EUngpjqwhZn3weNDQ5b
          claim_id: c_hFnVv2VAkJtD4g4AsgM8dN
          source_id: s_Eb5z9efkBd8fGaW6uK2u3Y
          stance: supports
          locator: CBDB:499149
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（499149）
          source: &a1
            id: s_Eb5z9efkBd8fGaW6uK2u3Y
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎新（CBDB 499149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499149&o=json
            external_identifier: CBDB:499149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.742Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1VKVc4UoF5xdXVn3Mswb6d
        subject_person_id: p_BtkC8XdSuMmpv5QcC9hkQA
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
        - id: cs_NndE89hAkaABtm51TMNG9d
          claim_id: c_1VKVc4UoF5xdXVn3Mswb6d
          source_id: s_Eb5z9efkBd8fGaW6uK2u3Y
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

# 王鼎新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎新 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼎新（CBDB 499149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499149&o=json)
