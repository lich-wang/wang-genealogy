---
schema: wang-person/v1
id: p_gKPZVgFwpxb6FGas28LFLz
status: active
merged_into: null
display_name: 王仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dU3C6L68ahmYiXgYXKtMTM
        subject_person_id: p_gKPZVgFwpxb6FGas28LFLz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cb3Pr2TG9FeJxj4oCBKJ2E
          claim_id: c_dU3C6L68ahmYiXgYXKtMTM
          source_id: s_pmy9UHMKXHB631R4LLSQbN
          stance: supports
          locator: CBDB:38550
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38550）
          source: &a1
            id: s_pmy9UHMKXHB631R4LLSQbN
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 38550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38550&o=json
            external_identifier: CBDB:38550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.510Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3B5yD4tEB7475cDdFCoFGn
        subject_person_id: p_gKPZVgFwpxb6FGas28LFLz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁，宋人物。籍贯福建路，入仕進士，曾任迪功郎。（中国历代人物传记资料库 CBDB 38550）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_clLlq4ZS3FD32bfhM55iP8
          claim_id: c_3B5yD4tEB7475cDdFCoFGn
          source_id: s_pmy9UHMKXHB631R4LLSQbN
          stance: supports
          locator: CBDB:38550
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

# 王仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁 | accepted |
| bio.summary | 王仁，宋人物。籍贯福建路，入仕進士，曾任迪功郎。（中国历代人物传记资料库 CBDB 38550） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁（CBDB 38550）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38550&o=json)
