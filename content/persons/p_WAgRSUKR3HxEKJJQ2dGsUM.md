---
schema: wang-person/v1
id: p_WAgRSUKR3HxEKJJQ2dGsUM
status: active
merged_into: null
display_name: 王世熙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oFUo4R5Fjj9nL99X6wNbkd
        subject_person_id: p_WAgRSUKR3HxEKJJQ2dGsUM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4bm374BALM1gsAKUQXFf6Z
          claim_id: c_oFUo4R5Fjj9nL99X6wNbkd
          source_id: s_a4Xk7Gs3xXN65FanyRHSGP
          stance: supports
          locator: CBDB:287989
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287989）
          source: &a1
            id: s_a4Xk7Gs3xXN65FanyRHSGP
            source_type: api_record
            title: 中国历代人物传记资料库：王世熙（CBDB 287989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287989&o=json
            external_identifier: CBDB:287989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.283Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M1E6FpgZzhGj65YbPDaMt2
        subject_person_id: p_WAgRSUKR3HxEKJJQ2dGsUM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世熙，明人物。嘉靖八年進士，籍贯東莞。（中国历代人物传记资料库 CBDB 287989）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XYG7xVCcKsvjwaVuQwxB6m
          claim_id: c_M1E6FpgZzhGj65YbPDaMt2
          source_id: s_a4Xk7Gs3xXN65FanyRHSGP
          stance: supports
          locator: CBDB:287989
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

# 王世熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世熙 | accepted |
| bio.summary | 王世熙，明人物。嘉靖八年進士，籍贯東莞。（中国历代人物传记资料库 CBDB 287989） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世熙（CBDB 287989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287989&o=json)
