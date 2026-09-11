---
schema: wang-person/v1
id: p_a9SNqr3SBQVNjCQg6mS85x
status: active
merged_into: null
display_name: 王價修
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8ML7xb7G25Rpo2F6cRHJ8a
        subject_person_id: p_a9SNqr3SBQVNjCQg6mS85x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王價修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oDQEysQ3p2NAKp6DeWDQXp
          claim_id: c_8ML7xb7G25Rpo2F6cRHJ8a
          source_id: s_RHC3ikNWcLhEnsmg2CTckC
          stance: supports
          locator: CBDB:574825
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574825）
          source: &a1
            id: s_RHC3ikNWcLhEnsmg2CTckC
            source_type: api_record
            title: 中国历代人物传记资料库：王價修（CBDB 574825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574825&o=json
            external_identifier: CBDB:574825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.687Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Wj25c39gtkKsT6z3rGeYPc
        subject_person_id: p_a9SNqr3SBQVNjCQg6mS85x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王價修，清人物。籍贯天門。（中国历代人物传记资料库 CBDB 574825）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r7YDoMbAEVkGsd3U9de0GF
          claim_id: c_Wj25c39gtkKsT6z3rGeYPc
          source_id: s_RHC3ikNWcLhEnsmg2CTckC
          stance: supports
          locator: CBDB:574825
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

# 王價修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王價修 | accepted |
| bio.summary | 王價修，清人物。籍贯天門。（中国历代人物传记资料库 CBDB 574825） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王價修（CBDB 574825）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574825&o=json)
