---
schema: wang-person/v1
id: p_ZCt6bUuLT9SKkHV4MuNrMQ
status: active
merged_into: null
display_name: 王有信
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ca2W9u9rQUcMwJW2wG9ZC7
        subject_person_id: p_ZCt6bUuLT9SKkHV4MuNrMQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EqLSYtBPZMGMrH98U7MnEB
          claim_id: c_ca2W9u9rQUcMwJW2wG9ZC7
          source_id: s_iSz64rVM9EYEKMafLukERo
          stance: supports
          locator: CBDB:638581
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638581）
          source: &a1
            id: s_iSz64rVM9EYEKMafLukERo
            source_type: api_record
            title: 中国历代人物传记资料库：王有信（CBDB 638581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638581&o=json
            external_identifier: CBDB:638581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.683Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q7W96Pqw2cdgp1QTHD2K9f
        subject_person_id: p_ZCt6bUuLT9SKkHV4MuNrMQ
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
        - id: cs_DgE29drQYTVUvBdaJkYA6q
          claim_id: c_q7W96Pqw2cdgp1QTHD2K9f
          source_id: s_iSz64rVM9EYEKMafLukERo
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

# 王有信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有信 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有信（CBDB 638581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638581&o=json)
