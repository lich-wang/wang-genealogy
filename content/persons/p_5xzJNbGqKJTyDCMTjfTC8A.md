---
schema: wang-person/v1
id: p_5xzJNbGqKJTyDCMTjfTC8A
status: active
merged_into: null
display_name: 王發祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KrxgtCWVyaMUYrG6669ms4
        subject_person_id: p_5xzJNbGqKJTyDCMTjfTC8A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王發祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rPM6dKPidv8ap75NQdR56N
          claim_id: c_KrxgtCWVyaMUYrG6669ms4
          source_id: s_ScTXK3idPbcQP5TbF4gG6M
          stance: supports
          locator: CBDB:341897
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341897）
          source: &a1
            id: s_ScTXK3idPbcQP5TbF4gG6M
            source_type: api_record
            title: 中国历代人物传记资料库：王發祥（CBDB 341897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341897&o=json
            external_identifier: CBDB:341897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.756Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jwm1SQKLQPj5ah8rBcQcDh
        subject_person_id: p_5xzJNbGqKJTyDCMTjfTC8A
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
        - id: cs_u9CEKFavp8d5YbkN5PJH75
          claim_id: c_Jwm1SQKLQPj5ah8rBcQcDh
          source_id: s_ScTXK3idPbcQP5TbF4gG6M
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

# 王發祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王發祥 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王發祥（CBDB 341897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341897&o=json)
