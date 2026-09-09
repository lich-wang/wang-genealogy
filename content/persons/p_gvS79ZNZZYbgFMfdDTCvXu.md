---
schema: wang-person/v1
id: p_gvS79ZNZZYbgFMfdDTCvXu
status: active
merged_into: null
display_name: 王夑合
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T5qATkN431E9F5bsA8Uh3D
        subject_person_id: p_gvS79ZNZZYbgFMfdDTCvXu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夑合
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y7DTLss6RJJvScCb2AtNA3
          claim_id: c_T5qATkN431E9F5bsA8Uh3D
          source_id: s_Evgf8XEaiLtJd5JaaUXNEr
          stance: supports
          locator: CBDB:636857
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636857）
          source: &a1
            id: s_Evgf8XEaiLtJd5JaaUXNEr
            source_type: api_record
            title: 中国历代人物传记资料库：王夑合（CBDB 636857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636857&o=json
            external_identifier: CBDB:636857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.128Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_37Q2WN2dewT68RG4HQQVbp
        subject_person_id: p_gvS79ZNZZYbgFMfdDTCvXu
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
        - id: cs_EaC7smwhhCbBTwS1BzEtjN
          claim_id: c_37Q2WN2dewT68RG4HQQVbp
          source_id: s_Evgf8XEaiLtJd5JaaUXNEr
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

# 王夑合

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夑合 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夑合（CBDB 636857）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636857&o=json)
