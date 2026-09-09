---
schema: wang-person/v1
id: p_MsZDFoSLACR9mqNcQC3KsL
status: active
merged_into: null
display_name: 王畧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mrBX7Sv5nLNBZpNELv5dwQ
        subject_person_id: p_MsZDFoSLACR9mqNcQC3KsL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王畧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ri7DMWV9uTNDFSkqNFcahD
          claim_id: c_mrBX7Sv5nLNBZpNELv5dwQ
          source_id: s_8sK4DSRWQvFZLvCh5iNX4u
          stance: supports
          locator: CBDB:689706
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（689706）
          source: &a1
            id: s_8sK4DSRWQvFZLvCh5iNX4u
            source_type: api_record
            title: 中国历代人物传记资料库：王畧（CBDB 689706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689706&o=json
            external_identifier: CBDB:689706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.478Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nWZqqgY96K783b1Wmvkfuw
        subject_person_id: p_MsZDFoSLACR9mqNcQC3KsL
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
        - id: cs_sQoXfNq6kfoHA16TNVrTcb
          claim_id: c_nWZqqgY96K783b1Wmvkfuw
          source_id: s_8sK4DSRWQvFZLvCh5iNX4u
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

# 王畧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王畧 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王畧（CBDB 689706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689706&o=json)
