---
schema: wang-person/v1
id: p_23AbppZ1Xf9KzBrsyJhKNj
status: active
merged_into: null
display_name: 王春
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WLJvBwxxxJHGP7DGQJAmhK
        subject_person_id: p_23AbppZ1Xf9KzBrsyJhKNj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xsmew6j5X6NJM9wMtgA9bj
          claim_id: c_WLJvBwxxxJHGP7DGQJAmhK
          source_id: s_xt7D1nyE99w192JszsC2SG
          stance: supports
          locator: CBDB:69304
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69304）
          source: &a1
            id: s_xt7D1nyE99w192JszsC2SG
            source_type: api_record
            title: 中国历代人物传记资料库：王春（CBDB 69304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69304&o=json
            external_identifier: CBDB:69304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.203Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1Q9vGsV79fTfV41Bw1tZeJ
        subject_person_id: p_23AbppZ1Xf9KzBrsyJhKNj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1826年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_He33X7LhXESMZyeMprmiBX
          claim_id: c_1Q9vGsV79fTfV41Bw1tZeJ
          source_id: s_xt7D1nyE99w192JszsC2SG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_esxP3iauhmwi3gsQ9cKdVR
        subject_person_id: p_23AbppZ1Xf9KzBrsyJhKNj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春（卒于1826年），清人物。籍贯大通，入仕募入軍伍，曾任營經制外委。（中国历代人物传记资料库 CBDB 69304）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d7jD2I9-w2WRxcNEjMe8vS
          claim_id: c_esxP3iauhmwi3gsQ9cKdVR
          source_id: s_xt7D1nyE99w192JszsC2SG
          stance: supports
          locator: CBDB:69304
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

# 王春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春 | accepted |
| death.date | 1826年 | accepted |
| bio.summary | 王春（卒于1826年），清人物。籍贯大通，入仕募入軍伍，曾任營經制外委。（中国历代人物传记资料库 CBDB 69304） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王春（CBDB 69304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69304&o=json)
