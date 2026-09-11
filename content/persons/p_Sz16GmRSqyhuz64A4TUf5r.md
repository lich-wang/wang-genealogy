---
schema: wang-person/v1
id: p_Sz16GmRSqyhuz64A4TUf5r
status: active
merged_into: null
display_name: 王璠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Lmz8qaxzkiCY2QeZ6Snnhs
        subject_person_id: p_Sz16GmRSqyhuz64A4TUf5r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JJwaoEnEEwUSNUBQhaJCus
          claim_id: c_Lmz8qaxzkiCY2QeZ6Snnhs
          source_id: s_1zzhUd9QyDqgJyG5s4w5XW
          stance: supports
          locator: CBDB:504555
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（504555）
          source: &a1
            id: s_1zzhUd9QyDqgJyG5s4w5XW
            source_type: api_record
            title: 中国历代人物传记资料库：王璠（CBDB 504555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=504555&o=json
            external_identifier: CBDB:504555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q5k47ggJkofEauZ7j4BZ5V
        subject_person_id: p_Sz16GmRSqyhuz64A4TUf5r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璠，明人物。曾任訓術。（中国历代人物传记资料库 CBDB 504555）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Eea0NGvx1fUOMlCUQn0QxW
          claim_id: c_Q5k47ggJkofEauZ7j4BZ5V
          source_id: s_1zzhUd9QyDqgJyG5s4w5XW
          stance: supports
          locator: CBDB:504555
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

# 王璠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璠 | accepted |
| bio.summary | 王璠，明人物。曾任訓術。（中国历代人物传记资料库 CBDB 504555） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璠（CBDB 504555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=504555&o=json)
