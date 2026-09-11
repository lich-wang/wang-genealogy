---
schema: wang-person/v1
id: p_wFsxRPC4HsykYkaEHBkxU8
status: active
merged_into: null
display_name: 王若拙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Uf5Aih7MdFxjfstxz7UrGU
        subject_person_id: p_wFsxRPC4HsykYkaEHBkxU8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若拙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_32MHqEiA965845LduPcofy
          claim_id: c_Uf5Aih7MdFxjfstxz7UrGU
          source_id: s_vmWh2BnqLuSyFnp4AQZR43
          stance: supports
          locator: CBDB:101292
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101292）
          source: &a1
            id: s_vmWh2BnqLuSyFnp4AQZR43
            source_type: api_record
            title: 中国历代人物传记资料库：王若拙（CBDB 101292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101292&o=json
            external_identifier: CBDB:101292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s4mPJQ2SCtVbej77EDaWQm
        subject_person_id: p_wFsxRPC4HsykYkaEHBkxU8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若拙，元人物。籍贯金壇，曾任巡檢。（中国历代人物传记资料库 CBDB 101292）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m0zteRfpqA_JmWsAJeAS2L
          claim_id: c_s4mPJQ2SCtVbej77EDaWQm
          source_id: s_vmWh2BnqLuSyFnp4AQZR43
          stance: supports
          locator: CBDB:101292
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

# 王若拙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王若拙 | accepted |
| bio.summary | 王若拙，元人物。籍贯金壇，曾任巡檢。（中国历代人物传记资料库 CBDB 101292） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王若拙（CBDB 101292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101292&o=json)
