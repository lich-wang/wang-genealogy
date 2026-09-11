---
schema: wang-person/v1
id: p_EZW8KrCP2DruZLoWNFPHDD
status: active
merged_into: null
display_name: 王賔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_taAv5uY7QvXq3utRtwtGbp
        subject_person_id: p_EZW8KrCP2DruZLoWNFPHDD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_woM9VofWroxmrQC3q85U7a
          claim_id: c_taAv5uY7QvXq3utRtwtGbp
          source_id: s_6L6LKauRKg8DEsEpLEKvQ5
          stance: supports
          locator: CBDB:464396
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（464396）
          source: &a1
            id: s_6L6LKauRKg8DEsEpLEKvQ5
            source_type: api_record
            title: 中国历代人物传记资料库：王賔（CBDB 464396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=464396&o=json
            external_identifier: CBDB:464396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.896Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zA3bvqRH1Kfkrp57uHMGAW
        subject_person_id: p_EZW8KrCP2DruZLoWNFPHDD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賔，明人物。曾任推官。（中国历代人物传记资料库 CBDB 464396）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bQztY5pu0VpMdG3LUuc_6P
          claim_id: c_zA3bvqRH1Kfkrp57uHMGAW
          source_id: s_6L6LKauRKg8DEsEpLEKvQ5
          stance: supports
          locator: CBDB:464396
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

# 王賔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賔 | accepted |
| bio.summary | 王賔，明人物。曾任推官。（中国历代人物传记资料库 CBDB 464396） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賔（CBDB 464396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=464396&o=json)
