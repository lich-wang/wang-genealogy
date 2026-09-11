---
schema: wang-person/v1
id: p_2NNS6FSBR2iH7scNKg73hA
status: active
merged_into: null
display_name: 王炳謨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bweoxD2PXZ9zuEisDCz34s
        subject_person_id: p_2NNS6FSBR2iH7scNKg73hA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J8tPUgBsqmgJ5XLGhssrs3
          claim_id: c_bweoxD2PXZ9zuEisDCz34s
          source_id: s_u2izZAnZyocXw3n8ZSDsNT
          stance: supports
          locator: CBDB:639288
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639288）
          source: &a1
            id: s_u2izZAnZyocXw3n8ZSDsNT
            source_type: api_record
            title: 中国历代人物传记资料库：王炳謨（CBDB 639288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639288&o=json
            external_identifier: CBDB:639288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.893Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VJrRfB7ecdzCAzECV3GDfq
        subject_person_id: p_2NNS6FSBR2iH7scNKg73hA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳謨，清人物。籍贯嘉善，曾任典史。（中国历代人物传记资料库 CBDB 639288）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_v8yxvtGpL6_EF_ZwILaDIX
          claim_id: c_VJrRfB7ecdzCAzECV3GDfq
          source_id: s_u2izZAnZyocXw3n8ZSDsNT
          stance: supports
          locator: CBDB:639288
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

# 王炳謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炳謨 | accepted |
| bio.summary | 王炳謨，清人物。籍贯嘉善，曾任典史。（中国历代人物传记资料库 CBDB 639288） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炳謨（CBDB 639288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639288&o=json)
