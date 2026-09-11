---
schema: wang-person/v1
id: p_WZV13r9zw11iDkz57R97fe
status: active
merged_into: null
display_name: 王禧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4nk8Jg7rfih1EAD3uxPP2X
        subject_person_id: p_WZV13r9zw11iDkz57R97fe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RDEY838fEz2rBdrcvYcvZC
          claim_id: c_4nk8Jg7rfih1EAD3uxPP2X
          source_id: s_DfDVtTUcmMFWk5JUhXYh23
          stance: supports
          locator: CBDB:508481
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（508481）
          source: &a1
            id: s_DfDVtTUcmMFWk5JUhXYh23
            source_type: api_record
            title: 中国历代人物传记资料库：王禧（CBDB 508481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508481&o=json
            external_identifier: CBDB:508481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.088Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iCtCHLTduvSNtb9Evs4C97
        subject_person_id: p_WZV13r9zw11iDkz57R97fe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禧，明人物。入仕世襲(替)，曾任百戶。（中国历代人物传记资料库 CBDB 508481）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2pGAGMDlWVEdSKZxroH5Xu
          claim_id: c_iCtCHLTduvSNtb9Evs4C97
          source_id: s_DfDVtTUcmMFWk5JUhXYh23
          stance: supports
          locator: CBDB:508481
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

# 王禧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禧 | accepted |
| bio.summary | 王禧，明人物。入仕世襲(替)，曾任百戶。（中国历代人物传记资料库 CBDB 508481） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禧（CBDB 508481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508481&o=json)
