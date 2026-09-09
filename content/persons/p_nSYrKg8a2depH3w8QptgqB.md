---
schema: wang-person/v1
id: p_nSYrKg8a2depH3w8QptgqB
status: active
merged_into: null
display_name: 王忻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QxiMEdpEECT74MTm79auYY
        subject_person_id: p_nSYrKg8a2depH3w8QptgqB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6BHFLd2qMZj6k64TPy9PW3
          claim_id: c_QxiMEdpEECT74MTm79auYY
          source_id: s_1Nq7yB13qH25Hiu83zB8kX
          stance: supports
          locator: CBDB:343911
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343911）
          source: &a1
            id: s_1Nq7yB13qH25Hiu83zB8kX
            source_type: api_record
            title: 中国历代人物传记资料库：王忻（CBDB 343911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343911&o=json
            external_identifier: CBDB:343911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.576Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HeiQHcG28YdD2bGRDUH63c
        subject_person_id: p_nSYrKg8a2depH3w8QptgqB
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
        - id: cs_pPjDT9qPiJ9GBLAEJ7KQoG
          claim_id: c_HeiQHcG28YdD2bGRDUH63c
          source_id: s_1Nq7yB13qH25Hiu83zB8kX
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

# 王忻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忻 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王忻（CBDB 343911）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343911&o=json)
