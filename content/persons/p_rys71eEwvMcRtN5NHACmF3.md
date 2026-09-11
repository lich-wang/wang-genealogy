---
schema: wang-person/v1
id: p_rys71eEwvMcRtN5NHACmF3
status: active
merged_into: null
display_name: 王緝熙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R8XqzvRAh9qo9971QGiWac
        subject_person_id: p_rys71eEwvMcRtN5NHACmF3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緝熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ywzo2tEk9EEQaT3vZpV5to
          claim_id: c_R8XqzvRAh9qo9971QGiWac
          source_id: s_c1asGBt1mTQ1bQpgq84CF1
          stance: supports
          locator: CBDB:639846
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639846）
          source: &a1
            id: s_c1asGBt1mTQ1bQpgq84CF1
            source_type: api_record
            title: 中国历代人物传记资料库：王緝熙（CBDB 639846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639846&o=json
            external_identifier: CBDB:639846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XRzU8FRGtRVsfJAieR2wHQ
        subject_person_id: p_rys71eEwvMcRtN5NHACmF3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緝熙，清人物。籍贯綏寧，曾任訓導。（中国历代人物传记资料库 CBDB 639846）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L1AAUzOQ6jTY4YZv_oTKaQ
          claim_id: c_XRzU8FRGtRVsfJAieR2wHQ
          source_id: s_c1asGBt1mTQ1bQpgq84CF1
          stance: supports
          locator: CBDB:639846
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

# 王緝熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緝熙 | accepted |
| bio.summary | 王緝熙，清人物。籍贯綏寧，曾任訓導。（中国历代人物传记资料库 CBDB 639846） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王緝熙（CBDB 639846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639846&o=json)
