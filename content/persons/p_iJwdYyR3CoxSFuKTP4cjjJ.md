---
schema: wang-person/v1
id: p_iJwdYyR3CoxSFuKTP4cjjJ
status: active
merged_into: null
display_name: 王三命
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6Shh5UX5w5mYXXT1pJNVRu
        subject_person_id: p_iJwdYyR3CoxSFuKTP4cjjJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三命
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9teqdmyCz1bj8ERZQUTkqR
          claim_id: c_6Shh5UX5w5mYXXT1pJNVRu
          source_id: s_o9GTZefB474rsFpx8pq4nr
          stance: supports
          locator: CBDB:635627
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635627）
          source: &a1
            id: s_o9GTZefB474rsFpx8pq4nr
            source_type: api_record
            title: 中国历代人物传记资料库：王三命（CBDB 635627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635627&o=json
            external_identifier: CBDB:635627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.988Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cFHULmFAYpAN4ovoUyQxbp
        subject_person_id: p_iJwdYyR3CoxSFuKTP4cjjJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三命，清人物。籍贯饒平，曾任二等侍衛、三等侍衛。（中国历代人物传记资料库 CBDB 635627）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x_FVfO9gpV1ETkDFDfFJSG
          claim_id: c_cFHULmFAYpAN4ovoUyQxbp
          source_id: s_o9GTZefB474rsFpx8pq4nr
          stance: supports
          locator: CBDB:635627
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

# 王三命

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三命 | accepted |
| bio.summary | 王三命，清人物。籍贯饒平，曾任二等侍衛、三等侍衛。（中国历代人物传记资料库 CBDB 635627） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三命（CBDB 635627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635627&o=json)
