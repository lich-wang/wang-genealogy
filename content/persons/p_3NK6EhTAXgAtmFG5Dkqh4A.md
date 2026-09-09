---
schema: wang-person/v1
id: p_3NK6EhTAXgAtmFG5Dkqh4A
status: active
merged_into: null
display_name: 王詔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RHcnRMorFbWCxJujJXS8Y3
        subject_person_id: p_3NK6EhTAXgAtmFG5Dkqh4A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xt6wbLJRjLTzUxAtUQGRLo
          claim_id: c_RHcnRMorFbWCxJujJXS8Y3
          source_id: s_pFJEtZMtXSRxJbNHTJPiqT
          stance: supports
          locator: CBDB:67938
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67938）
          source: &a1
            id: s_pFJEtZMtXSRxJbNHTJPiqT
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 67938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67938&o=json
            external_identifier: CBDB:67938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.033Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zo1Vj3FDAQn99HNXx7nRb4
        subject_person_id: p_3NK6EhTAXgAtmFG5Dkqh4A
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1428年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SutKPVRWRECJtqmc2wykgz
          claim_id: c_zo1Vj3FDAQn99HNXx7nRb4
          source_id: s_pFJEtZMtXSRxJbNHTJPiqT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_bQkSPA7t6k1HAHHB2K3U3K
        subject_person_id: p_3NK6EhTAXgAtmFG5Dkqh4A
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1491年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8WT7ZNGnVpaQZACyon4cU8
          claim_id: c_bQkSPA7t6k1HAHHB2K3U3K
          source_id: s_pFJEtZMtXSRxJbNHTJPiqT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KEwqnh7P4Gn6WZxCGW8Sur
        subject_person_id: p_3NK6EhTAXgAtmFG5Dkqh4A
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
        - id: cs_2G3aSLGPbFq8XNCX2vvnHg
          claim_id: c_KEwqnh7P4Gn6WZxCGW8Sur
          source_id: s_pFJEtZMtXSRxJbNHTJPiqT
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

# 王詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詔 | accepted |
| birth.date | 1428年 | accepted |
| death.date | 1491年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王詔（CBDB 67938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67938&o=json)
