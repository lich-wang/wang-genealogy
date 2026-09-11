---
schema: wang-person/v1
id: p_fn3kGQdDWyKDVYEwheco9R
status: active
merged_into: null
display_name: 王延麟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vi6aD4nsRkAbS4f7T5fJp4
        subject_person_id: p_fn3kGQdDWyKDVYEwheco9R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zG3bD4yYUdNQ3GGgLdJXNq
          claim_id: c_Vi6aD4nsRkAbS4f7T5fJp4
          source_id: s_CkjoqaMsZRR5hE5NCJMSNg
          stance: supports
          locator: CBDB:637474
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637474）
          source: &a1
            id: s_CkjoqaMsZRR5hE5NCJMSNg
            source_type: api_record
            title: 中国历代人物传记资料库：王延麟（CBDB 637474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637474&o=json
            external_identifier: CBDB:637474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cQvMWeJgmDZQXcXv74quGj
        subject_person_id: p_fn3kGQdDWyKDVYEwheco9R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延麟，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637474）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QkA-CwzZEZsGJM2GKCKkrt
          claim_id: c_cQvMWeJgmDZQXcXv74quGj
          source_id: s_CkjoqaMsZRR5hE5NCJMSNg
          stance: supports
          locator: CBDB:637474
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

# 王延麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延麟 | accepted |
| bio.summary | 王延麟，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637474） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王延麟（CBDB 637474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637474&o=json)
