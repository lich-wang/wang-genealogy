---
schema: wang-person/v1
id: p_x6JTyX7qDKG5C4hpwhpzxp
status: merged
merged_into: p_2XaF6KrMwGSDeaU76DAGrz
display_name: 王重光
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vpFromBhb4qm9HsrGEjaPH
        subject_person_id: p_x6JTyX7qDKG5C4hpwhpzxp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A6WacPYRhEWuHz434Q7Q9b
          claim_id: c_vpFromBhb4qm9HsrGEjaPH
          source_id: s_FD8PVwbNnLwfYhK5NKbWPj
          stance: supports
          locator: CBDB:217732
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（217732）
          source: &a1
            id: s_FD8PVwbNnLwfYhK5NKbWPj
            source_type: api_record
            title: 中国历代人物传记资料库：王重光（CBDB 217732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217732&o=json
            external_identifier: CBDB:217732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.255Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jJPRh31PdecHJ91fHmbKpk
        subject_person_id: p_x6JTyX7qDKG5C4hpwhpzxp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重光，明人物。萬曆五年進士，籍贯新城，曾任布政使司左參議、鴻臚寺卿。（中国历代人物传记资料库 CBDB 217732）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LhPz5pd4-rYfg5Wl7CnXOk
          claim_id: c_jJPRh31PdecHJ91fHmbKpk
          source_id: s_FD8PVwbNnLwfYhK5NKbWPj
          stance: supports
          locator: CBDB:217732
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

# 王重光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王重光 | accepted |
| bio.summary | 王重光，明人物。萬曆五年進士，籍贯新城，曾任布政使司左參議、鴻臚寺卿。（中国历代人物传记资料库 CBDB 217732） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王重光（CBDB 217732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217732&o=json)
