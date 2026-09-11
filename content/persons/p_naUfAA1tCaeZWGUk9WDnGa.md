---
schema: wang-person/v1
id: p_naUfAA1tCaeZWGUk9WDnGa
status: active
merged_into: null
display_name: 王廷衡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iDuqj9KZX9uDcztMvzM22W
        subject_person_id: p_naUfAA1tCaeZWGUk9WDnGa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷衡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kVZVjdKvsY8xP7b5nTsKZA
          claim_id: c_iDuqj9KZX9uDcztMvzM22W
          source_id: s_SsztTbHSVjA8AB24Bx4VeZ
          stance: supports
          locator: CBDB:455710
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（455710）
          source: &a1
            id: s_SsztTbHSVjA8AB24Bx4VeZ
            source_type: api_record
            title: 中国历代人物传记资料库：王廷衡（CBDB 455710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=455710&o=json
            external_identifier: CBDB:455710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q1RqryC244ttYRZTNRFnYP
        subject_person_id: p_naUfAA1tCaeZWGUk9WDnGa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷衡，清人物。曾任典史、州吏目。（中国历代人物传记资料库 CBDB 455710）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K-oQOmeB1A-7tCjz8opxQS
          claim_id: c_q1RqryC244ttYRZTNRFnYP
          source_id: s_SsztTbHSVjA8AB24Bx4VeZ
          stance: supports
          locator: CBDB:455710
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

# 王廷衡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷衡 | accepted |
| bio.summary | 王廷衡，清人物。曾任典史、州吏目。（中国历代人物传记资料库 CBDB 455710） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷衡（CBDB 455710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=455710&o=json)
