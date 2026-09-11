---
schema: wang-person/v1
id: p_gmjFrZwcLhovK4srC4DuGd
status: active
merged_into: null
display_name: 王國泰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mqFfvjqfWcsBhp6NSKjZYL
        subject_person_id: p_gmjFrZwcLhovK4srC4DuGd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_svp8pCG2m3tEmiwqrELVTV
          claim_id: c_mqFfvjqfWcsBhp6NSKjZYL
          source_id: s_nRttDRcSdBionBM8kDh6Y7
          stance: supports
          locator: CBDB:60899
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（60899）
          source: &a1
            id: s_nRttDRcSdBionBM8kDh6Y7
            source_type: api_record
            title: 中国历代人物传记资料库：王國泰（CBDB 60899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60899&o=json
            external_identifier: CBDB:60899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.866Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_baDRd2aduMFwHQNztKA4xx
        subject_person_id: p_gmjFrZwcLhovK4srC4DuGd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國泰，清人物。入仕鄉貢舉人，曾任縣知縣、知縣、知州。（中国历代人物传记资料库 CBDB 60899）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZXVo2qMtqzlcDOzfchz_80
          claim_id: c_baDRd2aduMFwHQNztKA4xx
          source_id: s_nRttDRcSdBionBM8kDh6Y7
          stance: supports
          locator: CBDB:60899
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王國泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國泰 | accepted |
| bio.summary | 王國泰，清人物。入仕鄉貢舉人，曾任縣知縣、知縣、知州。（中国历代人物传记资料库 CBDB 60899） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國泰（CBDB 60899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60899&o=json)
