---
schema: wang-person/v1
id: p_KTRiamNPLMBWfkADuEUwNk
status: active
merged_into: null
display_name: 王鎧之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1GHsd9BgPzDkXZh9PMnixX
        subject_person_id: p_KTRiamNPLMBWfkADuEUwNk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎧之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kNiy7xEsQJSnWoaVW1N5aJ
          claim_id: c_1GHsd9BgPzDkXZh9PMnixX
          source_id: s_pdvPVhgx3w18qdPNCDXwJP
          stance: supports
          locator: CBDB:640686
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640686）
          source: &a1
            id: s_pdvPVhgx3w18qdPNCDXwJP
            source_type: api_record
            title: 中国历代人物传记资料库：王鎧之（CBDB 640686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640686&o=json
            external_identifier: CBDB:640686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.177Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kpN5B3w3tNL9UtNj6PiqJB
        subject_person_id: p_KTRiamNPLMBWfkADuEUwNk
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
        - id: cs_DdB8zdTS2TkPtDRWY3d6wS
          claim_id: c_kpN5B3w3tNL9UtNj6PiqJB
          source_id: s_pdvPVhgx3w18qdPNCDXwJP
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

# 王鎧之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎧之 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎧之（CBDB 640686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640686&o=json)
