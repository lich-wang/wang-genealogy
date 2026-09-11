---
schema: wang-person/v1
id: p_5NtegafLVKA71vybRM6UUU
status: active
merged_into: null
display_name: 王壽榕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pUgGPULmQEwTJQBenCxKvk
        subject_person_id: p_5NtegafLVKA71vybRM6UUU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽榕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zoDNDVVjgQgaCTcfjfwYjE
          claim_id: c_pUgGPULmQEwTJQBenCxKvk
          source_id: s_Nar91dsvvGKgBpQHEPFJeh
          stance: supports
          locator: CBDB:636845
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636845）
          source: &a1
            id: s_Nar91dsvvGKgBpQHEPFJeh
            source_type: api_record
            title: 中国历代人物传记资料库：王壽榕（CBDB 636845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636845&o=json
            external_identifier: CBDB:636845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.121Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1rmh552fo1KZQnWFUvax3N
        subject_person_id: p_5NtegafLVKA71vybRM6UUU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽榕，清人物。籍贯蘄水，入仕附貢生，曾任知州。（中国历代人物传记资料库 CBDB 636845）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rxyu023PD7T6Pc8z5ZbKpJ
          claim_id: c_1rmh552fo1KZQnWFUvax3N
          source_id: s_Nar91dsvvGKgBpQHEPFJeh
          stance: supports
          locator: CBDB:636845
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

# 王壽榕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽榕 | accepted |
| bio.summary | 王壽榕，清人物。籍贯蘄水，入仕附貢生，曾任知州。（中国历代人物传记资料库 CBDB 636845） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壽榕（CBDB 636845）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636845&o=json)
