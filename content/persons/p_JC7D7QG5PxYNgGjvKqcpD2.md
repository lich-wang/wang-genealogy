---
schema: wang-person/v1
id: p_JC7D7QG5PxYNgGjvKqcpD2
status: active
merged_into: null
display_name: 王應椔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hG2vLkQoJGdyRH91hePRM4
        subject_person_id: p_JC7D7QG5PxYNgGjvKqcpD2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應椔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KnN6ZXNC2gkHp3wjHXwk5m
          claim_id: c_hG2vLkQoJGdyRH91hePRM4
          source_id: s_wY2AJFb67Qa4uaf6Pfu9PW
          stance: supports
          locator: CBDB:637988
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637988）
          source: &a1
            id: s_wY2AJFb67Qa4uaf6Pfu9PW
            source_type: api_record
            title: 中国历代人物传记资料库：王應椔（CBDB 637988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637988&o=json
            external_identifier: CBDB:637988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.477Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r14Fv6mbyGSPkXJVhMGvu6
        subject_person_id: p_JC7D7QG5PxYNgGjvKqcpD2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王應椔，清人物。籍贯常州府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 637988）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SEMB5pecNwr-gLYLnXphBm
          claim_id: c_r14Fv6mbyGSPkXJVhMGvu6
          source_id: s_wY2AJFb67Qa4uaf6Pfu9PW
          stance: supports
          locator: CBDB:637988
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

# 王應椔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應椔 | accepted |
| bio.summary | 王應椔，清人物。籍贯常州府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 637988） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應椔（CBDB 637988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637988&o=json)
