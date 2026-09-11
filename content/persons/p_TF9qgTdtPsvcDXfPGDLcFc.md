---
schema: wang-person/v1
id: p_TF9qgTdtPsvcDXfPGDLcFc
status: active
merged_into: null
display_name: 王果
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZivB7iqMQ5QvFQDyefedLk
        subject_person_id: p_TF9qgTdtPsvcDXfPGDLcFc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王果
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AGs7vTRFiq9VUiQn9Lm2Eq
          claim_id: c_ZivB7iqMQ5QvFQDyefedLk
          source_id: s_9tFUPj2vVfrhhQFp1Jv5qW
          stance: supports
          locator: CBDB:508682
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（508682）
          source: &a1
            id: s_9tFUPj2vVfrhhQFp1Jv5qW
            source_type: api_record
            title: 中国历代人物传记资料库：王果（CBDB 508682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508682&o=json
            external_identifier: CBDB:508682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.108Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fHzLeNs293PGiir5K5qgv8
        subject_person_id: p_TF9qgTdtPsvcDXfPGDLcFc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王果，明人物。入仕考上會試/貢士，曾任訓導。（中国历代人物传记资料库 CBDB 508682）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DM3-Q8UNerMTzU3qY5zpIn
          claim_id: c_fHzLeNs293PGiir5K5qgv8
          source_id: s_9tFUPj2vVfrhhQFp1Jv5qW
          stance: supports
          locator: CBDB:508682
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

# 王果

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王果 | accepted |
| bio.summary | 王果，明人物。入仕考上會試/貢士，曾任訓導。（中国历代人物传记资料库 CBDB 508682） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王果（CBDB 508682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508682&o=json)
