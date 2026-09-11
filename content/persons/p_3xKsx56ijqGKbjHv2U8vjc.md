---
schema: wang-person/v1
id: p_3xKsx56ijqGKbjHv2U8vjc
status: active
merged_into: null
display_name: 王元琮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DuCvXK8AzEFtv7CUMH9z3q
        subject_person_id: p_3xKsx56ijqGKbjHv2U8vjc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A2R1Cwww9WZiKXn8NvnGC8
          claim_id: c_DuCvXK8AzEFtv7CUMH9z3q
          source_id: s_VKmQ5zcLGNaMFaNVxg5csz
          stance: supports
          locator: CBDB:636167
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636167）
          source: &a1
            id: s_VKmQ5zcLGNaMFaNVxg5csz
            source_type: api_record
            title: 中国历代人物传记资料库：王元琮（CBDB 636167）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636167&o=json
            external_identifier: CBDB:636167
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.903Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qeojpEC3PYr31NATQ9GKpJ
        subject_person_id: p_3xKsx56ijqGKbjHv2U8vjc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元琮，清人物。籍贯興化，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 636167）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ePHPlj8BmqwWXi0EL0vxHr
          claim_id: c_qeojpEC3PYr31NATQ9GKpJ
          source_id: s_VKmQ5zcLGNaMFaNVxg5csz
          stance: supports
          locator: CBDB:636167
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

# 王元琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元琮 | accepted |
| bio.summary | 王元琮，清人物。籍贯興化，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 636167） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元琮（CBDB 636167）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636167&o=json)
