---
schema: wang-person/v1
id: p_BvEbCp9iKDaJkrtv2DcAo8
status: active
merged_into: null
display_name: 王繼周
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2pPpMA2Psz43pYYLR1qKZc
        subject_person_id: p_BvEbCp9iKDaJkrtv2DcAo8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼周
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_15y484KPbN33JYMKnFJfHH
          claim_id: c_2pPpMA2Psz43pYYLR1qKZc
          source_id: s_PNKVQiAPLBv6A4GCC2wHuS
          stance: supports
          locator: CBDB:639868
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639868）
          source: &a1
            id: s_PNKVQiAPLBv6A4GCC2wHuS
            source_type: api_record
            title: 中国历代人物传记资料库：王繼周（CBDB 639868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639868&o=json
            external_identifier: CBDB:639868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.990Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XL4n8YB2tSZ95MPXd3yo9N
        subject_person_id: p_BvEbCp9iKDaJkrtv2DcAo8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9zuQWqgNTc6ZvyEfFPcu37
          claim_id: c_XL4n8YB2tSZ95MPXd3yo9N
          source_id: s_PNKVQiAPLBv6A4GCC2wHuS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王繼周

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼周 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼周（CBDB 639868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639868&o=json)
