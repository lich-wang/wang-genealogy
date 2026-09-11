---
schema: wang-person/v1
id: p_39zPVUJFGaGjmUAni7d82o
status: active
merged_into: null
display_name: 王瑞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kiap42dfzP26qbVZ2fFEKC
        subject_person_id: p_39zPVUJFGaGjmUAni7d82o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hNrp8FgyFdoeLMskd9LgBD
          claim_id: c_Kiap42dfzP26qbVZ2fFEKC
          source_id: s_D7gYnELJ38L8RfGA4SgyDP
          stance: supports
          locator: CBDB:100870
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100870）
          source: &a1
            id: s_D7gYnELJ38L8RfGA4SgyDP
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞（CBDB 100870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100870&o=json
            external_identifier: CBDB:100870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.525Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hKddsi82VniKCgaFwQb85N
        subject_person_id: p_39zPVUJFGaGjmUAni7d82o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞，元人物。曾任路判官。（中国历代人物传记资料库 CBDB 100870）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__Ql_OuMy7g9W6zm7Ok3Xu1
          claim_id: c_hKddsi82VniKCgaFwQb85N
          source_id: s_D7gYnELJ38L8RfGA4SgyDP
          stance: supports
          locator: CBDB:100870
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

# 王瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑞 | accepted |
| bio.summary | 王瑞，元人物。曾任路判官。（中国历代人物传记资料库 CBDB 100870） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑞（CBDB 100870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100870&o=json)
