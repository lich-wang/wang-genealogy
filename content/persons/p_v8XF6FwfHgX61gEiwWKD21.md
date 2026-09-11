---
schema: wang-person/v1
id: p_v8XF6FwfHgX61gEiwWKD21
status: active
merged_into: null
display_name: 王大本
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q85sX8k889kmTo9eM6RHn2
        subject_person_id: p_v8XF6FwfHgX61gEiwWKD21
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大本
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_smfQLCHgEFgjZD241juxEJ
          claim_id: c_q85sX8k889kmTo9eM6RHn2
          source_id: s_e3wJeDaPAQQJidodsDMULU
          stance: supports
          locator: CBDB:101039
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101039）
          source: &a1
            id: s_e3wJeDaPAQQJidodsDMULU
            source_type: api_record
            title: 中国历代人物传记资料库：王大本（CBDB 101039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101039&o=json
            external_identifier: CBDB:101039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.659Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2W8w7ASkkH5zWEvG2CzsGU
        subject_person_id: p_v8XF6FwfHgX61gEiwWKD21
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大本，元人物。曾任國子學博士、祕書監監丞、諸路總管府儒學教授。（中国历代人物传记资料库 CBDB 101039）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qb8ohx9_mHqV8R9J1Cn0Pd
          claim_id: c_2W8w7ASkkH5zWEvG2CzsGU
          source_id: s_e3wJeDaPAQQJidodsDMULU
          stance: supports
          locator: CBDB:101039
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

# 王大本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大本 | accepted |
| bio.summary | 王大本，元人物。曾任國子學博士、祕書監監丞、諸路總管府儒學教授。（中国历代人物传记资料库 CBDB 101039） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大本（CBDB 101039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101039&o=json)
