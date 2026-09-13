---
schema: wang-person/v1
id: p_NBdhUqNsqzJWXe6PGnmj5J
status: active
merged_into: null
display_name: 王一能
cbdb_id: 210797
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8DBwX2WyHFZEweCMYmpQZC
        subject_person_id: p_NBdhUqNsqzJWXe6PGnmj5J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一能，明人物。隆慶五年進士，籍贯泰和。（中国历代人物传记资料库 CBDB 210797）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_QXgzGvD-vUhar1Q2BqYYgq
          claim_id: c_8DBwX2WyHFZEweCMYmpQZC
          source_id: s_x4XHiCsNFf8vFVq2uPEEL8
          stance: supports
          locator: CBDB:210797
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_x4XHiCsNFf8vFVq2uPEEL8
            source_type: api_record
            title: 中国历代人物传记资料库：王一能（CBDB 210797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210797&o=json
            external_identifier: CBDB:210797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Uu7HqGHb6NBuyquQEuiQMG
        subject_person_id: p_NBdhUqNsqzJWXe6PGnmj5J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一能
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MaUZYmNfvU9LqAjUGZ74mN
          claim_id: c_Uu7HqGHb6NBuyquQEuiQMG
          source_id: s_x4XHiCsNFf8vFVq2uPEEL8
          stance: supports
          locator: CBDB:210797
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
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

# 王一能

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王一能，明人物。隆慶五年進士，籍贯泰和。（中国历代人物传记资料库 CBDB 210797） | accepted |
| name.primary | 王一能 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一能（CBDB 210797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210797&o=json)
