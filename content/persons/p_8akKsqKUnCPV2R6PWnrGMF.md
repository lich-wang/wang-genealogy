---
schema: wang-person/v1
id: p_8akKsqKUnCPV2R6PWnrGMF
status: active
merged_into: null
display_name: 王櫟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nmmzaC3M4R9xD6n7ukWv9N
        subject_person_id: p_8akKsqKUnCPV2R6PWnrGMF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王櫟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sAexCr6of5d3kE3RpTsQby
          claim_id: c_nmmzaC3M4R9xD6n7ukWv9N
          source_id: s_mY8CXp834MAGNKaSU5oKUu
          stance: supports
          locator: CBDB:33997
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（33997）
          source: &a1
            id: s_mY8CXp834MAGNKaSU5oKUu
            source_type: api_record
            title: 中国历代人物传记资料库：王櫟（CBDB 33997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33997&o=json
            external_identifier: CBDB:33997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.075Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qp3K2teifcVeYUoaGYcQL7
        subject_person_id: p_8akKsqKUnCPV2R6PWnrGMF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ask8xm9CfxeGcZeksVCMNa
          claim_id: c_Qp3K2teifcVeYUoaGYcQL7
          source_id: s_mY8CXp834MAGNKaSU5oKUu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王櫟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王櫟 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王櫟（CBDB 33997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33997&o=json)
