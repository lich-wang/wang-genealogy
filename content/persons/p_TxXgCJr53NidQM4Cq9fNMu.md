---
schema: wang-person/v1
id: p_TxXgCJr53NidQM4Cq9fNMu
status: active
merged_into: null
display_name: 王穆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5TkNFkd4nB6fDHkfNu7R2Q
        subject_person_id: p_TxXgCJr53NidQM4Cq9fNMu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DDkNxnKVAVF3B32L71twKK
          claim_id: c_5TkNFkd4nB6fDHkfNu7R2Q
          source_id: s_DK4K531e4pzBbAmE4gRD6M
          stance: supports
          locator: CBDB:475495
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（475495）
          source: &a1
            id: s_DK4K531e4pzBbAmE4gRD6M
            source_type: api_record
            title: 中国历代人物传记资料库：王穆（CBDB 475495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475495&o=json
            external_identifier: CBDB:475495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.408Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HCmikqTDasLQErMM3Rt9X9
        subject_person_id: p_TxXgCJr53NidQM4Cq9fNMu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穆，宋人物。曾任縣令。（中国历代人物传记资料库 CBDB 475495）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_15-mDe-BhM1wfcn9oqKY3r
          claim_id: c_HCmikqTDasLQErMM3Rt9X9
          source_id: s_DK4K531e4pzBbAmE4gRD6M
          stance: supports
          locator: CBDB:475495
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

# 王穆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王穆 | accepted |
| bio.summary | 王穆，宋人物。曾任縣令。（中国历代人物传记资料库 CBDB 475495） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王穆（CBDB 475495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475495&o=json)
