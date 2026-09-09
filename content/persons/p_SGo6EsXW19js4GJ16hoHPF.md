---
schema: wang-person/v1
id: p_SGo6EsXW19js4GJ16hoHPF
status: active
merged_into: null
display_name: 王仲寶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NuqQK5cX2xKECmV3UGMF2a
        subject_person_id: p_SGo6EsXW19js4GJ16hoHPF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲寶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LKtG2NwvWGmEZWK9Nw8QfQ
          claim_id: c_NuqQK5cX2xKECmV3UGMF2a
          source_id: s_8TBbmpHeZWVVfJzREQSqef
          stance: supports
          locator: CBDB:97786
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97786）
          source: &a1
            id: s_8TBbmpHeZWVVfJzREQSqef
            source_type: api_record
            title: 中国历代人物传记资料库：王仲寶（CBDB 97786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97786&o=json
            external_identifier: CBDB:97786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.164Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c1VoPXZJA3B74dsa7HdJM5
        subject_person_id: p_SGo6EsXW19js4GJ16hoHPF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6mu7xSFEcy4Z1Q1wdX2nrB
          claim_id: c_c1VoPXZJA3B74dsa7HdJM5
          source_id: s_8TBbmpHeZWVVfJzREQSqef
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

# 王仲寶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲寶 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲寶（CBDB 97786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97786&o=json)
