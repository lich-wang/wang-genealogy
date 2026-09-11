---
schema: wang-person/v1
id: p_EPt9tCrHWKTApY3ma7X444
status: active
merged_into: null
display_name: 王述恩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QAhPs8vefqUf7ACr7yqFAr
        subject_person_id: p_EPt9tCrHWKTApY3ma7X444
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述恩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CBE5Rw9GNZM9dm5fNgC6Wi
          claim_id: c_QAhPs8vefqUf7ACr7yqFAr
          source_id: s_HAfnyFHkntvNM4jgT46xV4
          stance: supports
          locator: CBDB:640396
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640396）
          source: &a1
            id: s_HAfnyFHkntvNM4jgT46xV4
            source_type: api_record
            title: 中国历代人物传记资料库：王述恩（CBDB 640396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640396&o=json
            external_identifier: CBDB:640396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i6rBMk6As4wBFvCA69ZpVK
        subject_person_id: p_EPt9tCrHWKTApY3ma7X444
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述恩，清人物。籍贯江寧，入仕廩貢生，曾任知州。（中国历代人物传记资料库 CBDB 640396）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6UoRbfMQ6AjuQ-i16s2NcW
          claim_id: c_i6rBMk6As4wBFvCA69ZpVK
          source_id: s_HAfnyFHkntvNM4jgT46xV4
          stance: supports
          locator: CBDB:640396
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

# 王述恩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王述恩 | accepted |
| bio.summary | 王述恩，清人物。籍贯江寧，入仕廩貢生，曾任知州。（中国历代人物传记资料库 CBDB 640396） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王述恩（CBDB 640396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640396&o=json)
