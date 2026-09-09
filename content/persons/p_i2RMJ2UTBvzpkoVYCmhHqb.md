---
schema: wang-person/v1
id: p_i2RMJ2UTBvzpkoVYCmhHqb
status: active
merged_into: null
display_name: 王漸鴻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VRBKVFESe4H4b481B9wHt1
        subject_person_id: p_i2RMJ2UTBvzpkoVYCmhHqb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漸鴻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r5vMM4M9b8LNQb1dVim9o7
          claim_id: c_VRBKVFESe4H4b481B9wHt1
          source_id: s_E79F2SWxDFSUCMmYFratR4
          stance: supports
          locator: CBDB:639204
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639204）
          source: &a1
            id: s_E79F2SWxDFSUCMmYFratR4
            source_type: api_record
            title: 中国历代人物传记资料库：王漸鴻（CBDB 639204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639204&o=json
            external_identifier: CBDB:639204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.872Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y6FzKf4DEA7PtqKceAqcCJ
        subject_person_id: p_i2RMJ2UTBvzpkoVYCmhHqb
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
        - id: cs_NNFFYj4KsKNpcDQHHMxWzy
          claim_id: c_y6FzKf4DEA7PtqKceAqcCJ
          source_id: s_E79F2SWxDFSUCMmYFratR4
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

# 王漸鴻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漸鴻 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王漸鴻（CBDB 639204）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639204&o=json)
