---
schema: wang-person/v1
id: p_wQEEtjQb3xAD5rmcMRbZkM
status: active
merged_into: null
display_name: 王恆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qoppTLPbU6k5vAn16hqs4Y
        subject_person_id: p_wQEEtjQb3xAD5rmcMRbZkM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QcJDEKeFVuJ6j7M6z3R7uA
          claim_id: c_qoppTLPbU6k5vAn16hqs4Y
          source_id: s_2ybJp1wBemFLupQaxCCQQR
          stance: supports
          locator: CBDB:124340
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（124340）
          source: &a1
            id: s_2ybJp1wBemFLupQaxCCQQR
            source_type: api_record
            title: 中国历代人物传记资料库：王恆（CBDB 124340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124340&o=json
            external_identifier: CBDB:124340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TECEqY2D6VHFZ4q5QMUPNs
        subject_person_id: p_wQEEtjQb3xAD5rmcMRbZkM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆，清人物。明清進士進士，籍贯郯城，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 124340）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tpO3Y207vQKDg4i2Nw9J56
          claim_id: c_TECEqY2D6VHFZ4q5QMUPNs
          source_id: s_2ybJp1wBemFLupQaxCCQQR
          stance: supports
          locator: CBDB:124340
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

# 王恆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恆 | accepted |
| bio.summary | 王恆，清人物。明清進士進士，籍贯郯城，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 124340） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恆（CBDB 124340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124340&o=json)
