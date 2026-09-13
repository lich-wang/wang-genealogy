---
schema: wang-person/v1
id: p_c5yx7vtPLkVktYf26igPcz
status: active
merged_into: null
display_name: 王國彥
cbdb_id: 343425
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YcRg2rx4P65NJ36pJniLUN
        subject_person_id: p_c5yx7vtPLkVktYf26igPcz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國彥，清人物。明清進士進士，籍贯涇縣，入仕進士。（中国历代人物传记资料库 CBDB 343425）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_8Zv2QeS7FZin_leRRw9Hqt
          claim_id: c_YcRg2rx4P65NJ36pJniLUN
          source_id: s_k65b9MnrvXfTyRwoRixpzq
          stance: supports
          locator: CBDB:343425
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_k65b9MnrvXfTyRwoRixpzq
            source_type: api_record
            title: 中国历代人物传记资料库：王國彥（CBDB 343425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343425&o=json
            external_identifier: CBDB:343425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:17.973Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rfaSb4pQ5VPGWQMfCNwzB7
        subject_person_id: p_c5yx7vtPLkVktYf26igPcz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_J5jYMHCCnK2hhiKL4uoVxD
          claim_id: c_rfaSb4pQ5VPGWQMfCNwzB7
          source_id: s_k65b9MnrvXfTyRwoRixpzq
          stance: supports
          locator: CBDB:343425
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4601-4700）｜历史性依据：CBDB 朝代 = 清
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

# 王國彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王國彥，清人物。明清進士進士，籍贯涇縣，入仕進士。（中国历代人物传记资料库 CBDB 343425） | accepted |
| name.primary | 王國彥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國彥（CBDB 343425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343425&o=json)
