---
schema: wang-person/v1
id: p_911BxA5Lpd8icbnB3uUpjb
status: active
merged_into: null
display_name: 王澤璜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8cMLxPuFdD3xBgP8gqQM3T
        subject_person_id: p_911BxA5Lpd8icbnB3uUpjb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤璜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4HwC6hMx52SeBEwpiCLSMG
          claim_id: c_8cMLxPuFdD3xBgP8gqQM3T
          source_id: s_86Cbq44t7hMQNnvRNmWc4i
          stance: supports
          locator: CBDB:639236
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639236）
          source: &a1
            id: s_86Cbq44t7hMQNnvRNmWc4i
            source_type: api_record
            title: 中国历代人物传记资料库：王澤璜（CBDB 639236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639236&o=json
            external_identifier: CBDB:639236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FH3J9RDKgY4UHSjrdB463v
        subject_person_id: p_911BxA5Lpd8icbnB3uUpjb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤璜，清人物。籍贯大興，曾任贊禮郎。（中国历代人物传记资料库 CBDB 639236）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IRSdFydnWPJHl4qTWmo4fK
          claim_id: c_FH3J9RDKgY4UHSjrdB463v
          source_id: s_86Cbq44t7hMQNnvRNmWc4i
          stance: supports
          locator: CBDB:639236
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

# 王澤璜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤璜 | accepted |
| bio.summary | 王澤璜，清人物。籍贯大興，曾任贊禮郎。（中国历代人物传记资料库 CBDB 639236） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澤璜（CBDB 639236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639236&o=json)
