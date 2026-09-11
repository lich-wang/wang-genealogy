---
schema: wang-person/v1
id: p_Ph1jYxS2WRUrtKhRM9eq1e
status: active
merged_into: null
display_name: 王憲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PERx2Yudry836oHGzWLVHQ
        subject_person_id: p_Ph1jYxS2WRUrtKhRM9eq1e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T58D3fKsbHpBfkdhBgnNck
          claim_id: c_PERx2Yudry836oHGzWLVHQ
          source_id: s_X8VgTQfttJbH7AenYWYmrM
          stance: supports
          locator: CBDB:61545
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61545）
          source: &a1
            id: s_X8VgTQfttJbH7AenYWYmrM
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 61545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61545&o=json
            external_identifier: CBDB:61545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k3HBVppte8LsXUhQpH6GuQ
        subject_person_id: p_Ph1jYxS2WRUrtKhRM9eq1e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲，清人物。籍贯江都，曾任布政使、按察使。（中国历代人物传记资料库 CBDB 61545）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VLgCTnoLIWYrXTPTaBUkth
          claim_id: c_k3HBVppte8LsXUhQpH6GuQ
          source_id: s_X8VgTQfttJbH7AenYWYmrM
          stance: supports
          locator: CBDB:61545
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

# 王憲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王憲 | accepted |
| bio.summary | 王憲，清人物。籍贯江都，曾任布政使、按察使。（中国历代人物传记资料库 CBDB 61545） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王憲（CBDB 61545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61545&o=json)
