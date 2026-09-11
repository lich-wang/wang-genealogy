---
schema: wang-person/v1
id: p_FFyN9NhPUK8BqG78txcYYQ
status: active
merged_into: null
display_name: 王天相
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ifLibnZyPzM29Gq9CSK4Un
        subject_person_id: p_FFyN9NhPUK8BqG78txcYYQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cxLbzDziWkQSzy6p1q4iUX
          claim_id: c_ifLibnZyPzM29Gq9CSK4Un
          source_id: s_PiADZH3XKEK528899F6Lrs
          stance: supports
          locator: CBDB:636936
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636936）
          source: &a1
            id: s_PiADZH3XKEK528899F6Lrs
            source_type: api_record
            title: 中国历代人物传记资料库：王天相（CBDB 636936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636936&o=json
            external_identifier: CBDB:636936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.298Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aW3C3r7F1JQn6eicwAKJ9n
        subject_person_id: p_FFyN9NhPUK8BqG78txcYYQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天相，清人物。籍贯華陰，曾任復設訓導。（中国历代人物传记资料库 CBDB 636936）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qj8Wtso09sEyqImi0UThqh
          claim_id: c_aW3C3r7F1JQn6eicwAKJ9n
          source_id: s_PiADZH3XKEK528899F6Lrs
          stance: supports
          locator: CBDB:636936
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

# 王天相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天相 | accepted |
| bio.summary | 王天相，清人物。籍贯華陰，曾任復設訓導。（中国历代人物传记资料库 CBDB 636936） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天相（CBDB 636936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636936&o=json)
