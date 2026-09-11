---
schema: wang-person/v1
id: p_HGpijd776rr6CPqfRcyxYo
status: active
merged_into: null
display_name: 王瓚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wBDLbt34QGsK2R2AHUsNwo
        subject_person_id: p_HGpijd776rr6CPqfRcyxYo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9buTuoyeP8RA6s6F8uuWQL
          claim_id: c_wBDLbt34QGsK2R2AHUsNwo
          source_id: s_4udGyte8MZZSKr7ZN3W3hj
          stance: supports
          locator: CBDB:574136
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574136）
          source: &a1
            id: s_4udGyte8MZZSKr7ZN3W3hj
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 574136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574136&o=json
            external_identifier: CBDB:574136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.912Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Su8bXkB7VDdweytmYPfW5L
        subject_person_id: p_HGpijd776rr6CPqfRcyxYo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚，清人物。籍贯孝感。（中国历代人物传记资料库 CBDB 574136）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5tXZzwGbRVzMnfPrrlxNG7
          claim_id: c_Su8bXkB7VDdweytmYPfW5L
          source_id: s_4udGyte8MZZSKr7ZN3W3hj
          stance: supports
          locator: CBDB:574136
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

# 王瓚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓚 | accepted |
| bio.summary | 王瓚，清人物。籍贯孝感。（中国历代人物传记资料库 CBDB 574136） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓚（CBDB 574136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574136&o=json)
