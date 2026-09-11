---
schema: wang-person/v1
id: p_6Y6DXidPNeAeefbcijZkuB
status: active
merged_into: null
display_name: 王統
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ozZgAZBFCAh8LWtPZKL8gZ
        subject_person_id: p_6Y6DXidPNeAeefbcijZkuB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王統
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3AJhz5X48JNtHgeK2nSsnZ
          claim_id: c_ozZgAZBFCAh8LWtPZKL8gZ
          source_id: s_9VEdi5nu22rtkgtFdU7BWR
          stance: supports
          locator: CBDB:639783
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639783）
          source: &a1
            id: s_9VEdi5nu22rtkgtFdU7BWR
            source_type: api_record
            title: 中国历代人物传记资料库：王統（CBDB 639783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639783&o=json
            external_identifier: CBDB:639783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.975Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_95LJVQNwz6w5zBnb9cZeVh
        subject_person_id: p_6Y6DXidPNeAeefbcijZkuB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王統，清人物。籍贯金谿，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 639783）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AcScapdp-uD-II2OeFOkWg
          claim_id: c_95LJVQNwz6w5zBnb9cZeVh
          source_id: s_9VEdi5nu22rtkgtFdU7BWR
          stance: supports
          locator: CBDB:639783
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

# 王統

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王統 | accepted |
| bio.summary | 王統，清人物。籍贯金谿，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 639783） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王統（CBDB 639783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639783&o=json)
