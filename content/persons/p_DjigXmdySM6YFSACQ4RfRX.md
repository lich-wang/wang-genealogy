---
schema: wang-person/v1
id: p_DjigXmdySM6YFSACQ4RfRX
status: active
merged_into: null
display_name: 王綱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8B584iAYDuYM6TAz2Sbftc
        subject_person_id: p_DjigXmdySM6YFSACQ4RfRX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A98W35AeU5CcHbM6dLXaso
          claim_id: c_8B584iAYDuYM6TAz2Sbftc
          source_id: s_GibXTwFx9cmK9ALBStHFgD
          stance: supports
          locator: CBDB:492108
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（492108）
          source: &a1
            id: s_GibXTwFx9cmK9ALBStHFgD
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 492108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492108&o=json
            external_identifier: CBDB:492108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.253Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XPRTevh6dThTXDQRLNjNqV
        subject_person_id: p_DjigXmdySM6YFSACQ4RfRX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 492108）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XAyVhOd6bFDv_tG3RCUBcd
          claim_id: c_XPRTevh6dThTXDQRLNjNqV
          source_id: s_GibXTwFx9cmK9ALBStHFgD
          stance: supports
          locator: CBDB:492108
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

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | 王綱，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 492108） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 492108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492108&o=json)
