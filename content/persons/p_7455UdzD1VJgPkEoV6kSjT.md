---
schema: wang-person/v1
id: p_7455UdzD1VJgPkEoV6kSjT
status: active
merged_into: null
display_name: 王維寶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vx4WK1daBnaWP3HBxXGUW8
        subject_person_id: p_7455UdzD1VJgPkEoV6kSjT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維寶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8mCyjD65qz4U2qot5zcyLo
          claim_id: c_Vx4WK1daBnaWP3HBxXGUW8
          source_id: s_yf4iEyKpmRR9BeiGVVMfwp
          stance: supports
          locator: CBDB:639814
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639814）
          source: &a1
            id: s_yf4iEyKpmRR9BeiGVVMfwp
            source_type: api_record
            title: 中国历代人物传记资料库：王維寶（CBDB 639814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639814&o=json
            external_identifier: CBDB:639814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.052Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HSGXK1jKfhKDnqwMmgNLSK
        subject_person_id: p_7455UdzD1VJgPkEoV6kSjT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維寶，清人物。籍贯奉天府，曾任兵部七品筆帖式、郎中、七品筆帖式。（中国历代人物传记资料库 CBDB 639814）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Nmen9vIC4xCDYVVSx67fA3
          claim_id: c_HSGXK1jKfhKDnqwMmgNLSK
          source_id: s_yf4iEyKpmRR9BeiGVVMfwp
          stance: supports
          locator: CBDB:639814
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

# 王維寶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維寶 | accepted |
| bio.summary | 王維寶，清人物。籍贯奉天府，曾任兵部七品筆帖式、郎中、七品筆帖式。（中国历代人物传记资料库 CBDB 639814） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維寶（CBDB 639814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639814&o=json)
