---
schema: wang-person/v1
id: p_CJAhVQwJVZJ2tVtvabkR2j
status: active
merged_into: null
display_name: 王牧之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nUAtSHdSXhJPNxx3HMgAo8
        subject_person_id: p_CJAhVQwJVZJ2tVtvabkR2j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王牧之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zogGL9fX86DNkNngBwg5Af
          claim_id: c_nUAtSHdSXhJPNxx3HMgAo8
          source_id: s_2ZYQZfM2j5MquM2mc9LgiF
          stance: supports
          locator: CBDB:639362
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639362）
          source: &a1
            id: s_2ZYQZfM2j5MquM2mc9LgiF
            source_type: api_record
            title: 中国历代人物传记资料库：王牧之（CBDB 639362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639362&o=json
            external_identifier: CBDB:639362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cW4GSsXZ7y3VGQC7LYos1G
        subject_person_id: p_CJAhVQwJVZJ2tVtvabkR2j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王牧之，清人物。籍贯睢州，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 639362）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SiYU8xA0GUdfKZh0qdGO_3
          claim_id: c_cW4GSsXZ7y3VGQC7LYos1G
          source_id: s_2ZYQZfM2j5MquM2mc9LgiF
          stance: supports
          locator: CBDB:639362
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

# 王牧之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王牧之 | accepted |
| bio.summary | 王牧之，清人物。籍贯睢州，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 639362） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王牧之（CBDB 639362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639362&o=json)
