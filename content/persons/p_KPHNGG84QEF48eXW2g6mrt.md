---
schema: wang-person/v1
id: p_KPHNGG84QEF48eXW2g6mrt
status: active
merged_into: null
display_name: 王士俊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_johKvauBE95L4CEpKZA6CB
        subject_person_id: p_KPHNGG84QEF48eXW2g6mrt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TxPLwH7xP4N9B54n5FNMNG
          claim_id: c_johKvauBE95L4CEpKZA6CB
          source_id: s_8UiJRPqffAudf3EJidPGbv
          stance: supports
          locator: CBDB:71321
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71321）
          source: &a1
            id: s_8UiJRPqffAudf3EJidPGbv
            source_type: api_record
            title: 中国历代人物传记资料库：王士俊（CBDB 71321）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71321&o=json
            external_identifier: CBDB:71321
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.592Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fBNk3Y3KEdwTbBa89DUFkv
        subject_person_id: p_KPHNGG84QEF48eXW2g6mrt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1777年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s2D439ipSWD7kC8QXvEAxC
          claim_id: c_fBNk3Y3KEdwTbBa89DUFkv
          source_id: s_8UiJRPqffAudf3EJidPGbv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ypXhHgGF1XbofytxQ8pGLB
        subject_person_id: p_KPHNGG84QEF48eXW2g6mrt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1842年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1RafQ4zPppEZNkEpYKNKEN
          claim_id: c_ypXhHgGF1XbofytxQ8pGLB
          source_id: s_8UiJRPqffAudf3EJidPGbv
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
        id: c_eFwX6pHSw4C56XcFy4yT2M
        subject_person_id: p_KPHNGG84QEF48eXW2g6mrt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士俊（1777年—1842年），清人物。籍贯乾州直隸州。（中国历代人物传记资料库 CBDB 71321）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PeG8Dhu1fy6M7aUd4IanI5
          claim_id: c_eFwX6pHSw4C56XcFy4yT2M
          source_id: s_8UiJRPqffAudf3EJidPGbv
          stance: supports
          locator: CBDB:71321
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

# 王士俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士俊 | accepted |
| birth.date | 1777年 | accepted |
| death.date | 1842年 | accepted |
| bio.summary | 王士俊（1777年—1842年），清人物。籍贯乾州直隸州。（中国历代人物传记资料库 CBDB 71321） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士俊（CBDB 71321）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71321&o=json)
