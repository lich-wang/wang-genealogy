---
schema: wang-person/v1
id: p_mk49GArLSZ1jQBkjFayawv
status: active
merged_into: null
display_name: 王勲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TiYDgNJGNSYvxEoHckWeKC
        subject_person_id: p_mk49GArLSZ1jQBkjFayawv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ity5dmt34dSS88EA8K6WVj
          claim_id: c_TiYDgNJGNSYvxEoHckWeKC
          source_id: s_qniuV9MbaLyBk6n42fXn8C
          stance: supports
          locator: CBDB:508294
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（508294）
          source: &a1
            id: s_qniuV9MbaLyBk6n42fXn8C
            source_type: api_record
            title: 中国历代人物传记资料库：王勲（CBDB 508294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508294&o=json
            external_identifier: CBDB:508294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.081Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pNyPC1VGUcCbPkP97x226N
        subject_person_id: p_mk49GArLSZ1jQBkjFayawv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勲，明人物。入仕世襲(替)，曾任同知。（中国历代人物传记资料库 CBDB 508294）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_loc7T95F-SWUbN68sq9Rnp
          claim_id: c_pNyPC1VGUcCbPkP97x226N
          source_id: s_qniuV9MbaLyBk6n42fXn8C
          stance: supports
          locator: CBDB:508294
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

# 王勲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勲 | accepted |
| bio.summary | 王勲，明人物。入仕世襲(替)，曾任同知。（中国历代人物传记资料库 CBDB 508294） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勲（CBDB 508294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508294&o=json)
