---
schema: wang-person/v1
id: p_tPAZGVyJAi4fM8Wfhrf5NX
status: active
merged_into: null
display_name: 王綬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_15JzkLUPR9uarNJzA4AN69
        subject_person_id: p_tPAZGVyJAi4fM8Wfhrf5NX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zh28MNLgBPXHJyDJywS2C8
          claim_id: c_15JzkLUPR9uarNJzA4AN69
          source_id: s_GHMJGeoQKgcAh18G8GeTtH
          stance: supports
          locator: CBDB:686471
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（686471）
          source: &a1
            id: s_GHMJGeoQKgcAh18G8GeTtH
            source_type: api_record
            title: 中国历代人物传记资料库：王綬（CBDB 686471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686471&o=json
            external_identifier: CBDB:686471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.380Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8a4MXCMRfLiTSSu3YfsrQJ
        subject_person_id: p_tPAZGVyJAi4fM8Wfhrf5NX
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
        - id: cs_n1sjfgBdfHC8rzyPmboYF2
          claim_id: c_8a4MXCMRfLiTSSu3YfsrQJ
          source_id: s_GHMJGeoQKgcAh18G8GeTtH
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

# 王綬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綬 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綬（CBDB 686471）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686471&o=json)
