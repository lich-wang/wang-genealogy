---
schema: wang-person/v1
id: p_qspZiRjvFT5Ef8QfMELVTN
status: active
merged_into: null
display_name: 王教
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eqzDQdAPkUZKSynVdkguXP
        subject_person_id: p_qspZiRjvFT5Ef8QfMELVTN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王教
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j5RNWvDxXryBB1EY2BN5i7
          claim_id: c_eqzDQdAPkUZKSynVdkguXP
          source_id: s_w1MdJuf9Q1PHQPmHJ3Gq1R
          stance: supports
          locator: CBDB:343316
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343316）
          source: &a1
            id: s_w1MdJuf9Q1PHQPmHJ3Gq1R
            source_type: api_record
            title: 中国历代人物传记资料库：王教（CBDB 343316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343316&o=json
            external_identifier: CBDB:343316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.289Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xdrcvr1sbtjT5MH8MK23A2
        subject_person_id: p_qspZiRjvFT5Ef8QfMELVTN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王教，清人物。明清進士進士，籍贯德清，入仕進士。（中国历代人物传记资料库 CBDB 343316）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ihdwQP2uoxvv7tQUeoiWoG
          claim_id: c_xdrcvr1sbtjT5MH8MK23A2
          source_id: s_w1MdJuf9Q1PHQPmHJ3Gq1R
          stance: supports
          locator: CBDB:343316
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

# 王教

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王教 | accepted |
| bio.summary | 王教，清人物。明清進士進士，籍贯德清，入仕進士。（中国历代人物传记资料库 CBDB 343316） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王教（CBDB 343316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343316&o=json)
