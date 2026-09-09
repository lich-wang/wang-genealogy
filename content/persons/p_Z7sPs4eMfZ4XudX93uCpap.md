---
schema: wang-person/v1
id: p_Z7sPs4eMfZ4XudX93uCpap
status: active
merged_into: null
display_name: 王其洤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kj9fMKV7Kbd3SPe2mBZStN
        subject_person_id: p_Z7sPs4eMfZ4XudX93uCpap
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其洤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jPxaAaN5NNKbW4p253L1Qh
          claim_id: c_Kj9fMKV7Kbd3SPe2mBZStN
          source_id: s_8MvUa9F5pZJ1D8663dLPrv
          stance: supports
          locator: CBDB:636332
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636332）
          source: &a1
            id: s_8MvUa9F5pZJ1D8663dLPrv
            source_type: api_record
            title: 中国历代人物传记资料库：王其洤（CBDB 636332）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636332&o=json
            external_identifier: CBDB:636332
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XU6DUcfi5qdecjKg5G1NPm
        subject_person_id: p_Z7sPs4eMfZ4XudX93uCpap
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
        - id: cs_sCyM3RneBLRDTkrfN1mx1W
          claim_id: c_XU6DUcfi5qdecjKg5G1NPm
          source_id: s_8MvUa9F5pZJ1D8663dLPrv
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

# 王其洤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王其洤 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王其洤（CBDB 636332）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636332&o=json)
