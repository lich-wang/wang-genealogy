---
schema: wang-person/v1
id: p_kPb2A3Ga4FJp12kfUcydDS
status: active
merged_into: null
display_name: 王陞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XT2njjC81pFJHwhNne94Dg
        subject_person_id: p_kPb2A3Ga4FJp12kfUcydDS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8FG1poQPAr67zSBMXGS2Cd
          claim_id: c_XT2njjC81pFJHwhNne94Dg
          source_id: s_8EKBcpRHJ2Jnj6UEh3f22K
          stance: supports
          locator: CBDB:485095
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（485095）
          source: &a1
            id: s_8EKBcpRHJ2Jnj6UEh3f22K
            source_type: api_record
            title: 中国历代人物传记资料库：王陞（CBDB 485095）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=485095&o=json
            external_identifier: CBDB:485095
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.879Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XMBpr2LfPV8toJKwEUbK2L
        subject_person_id: p_kPb2A3Ga4FJp12kfUcydDS
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
        - id: cs_2PsDn1NQxTxwHNeNxhqs6W
          claim_id: c_XMBpr2LfPV8toJKwEUbK2L
          source_id: s_8EKBcpRHJ2Jnj6UEh3f22K
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

# 王陞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王陞 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王陞（CBDB 485095）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=485095&o=json)
