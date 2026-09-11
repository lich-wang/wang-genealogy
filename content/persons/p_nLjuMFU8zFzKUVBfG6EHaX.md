---
schema: wang-person/v1
id: p_nLjuMFU8zFzKUVBfG6EHaX
status: active
merged_into: null
display_name: 王弘學
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3b8qz5KPgz1V22QV1173EK
        subject_person_id: p_nLjuMFU8zFzKUVBfG6EHaX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1MueTqsNRDnhzqvwAH98AM
          claim_id: c_3b8qz5KPgz1V22QV1173EK
          source_id: s_xxJ484BAFV816yd3KmKHRs
          stance: supports
          locator: CBDB:71511
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71511）
          source: &a1
            id: s_xxJ484BAFV816yd3KmKHRs
            source_type: api_record
            title: 中国历代人物传记资料库：王弘學（CBDB 71511）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71511&o=json
            external_identifier: CBDB:71511
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.730Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_dtoFtRigEEUPqgJyPYZW3W
        subject_person_id: p_nLjuMFU8zFzKUVBfG6EHaX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1660年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uD7t9jhVJ3ZrH21Gm3vq3E
          claim_id: c_dtoFtRigEEUPqgJyPYZW3W
          source_id: s_xxJ484BAFV816yd3KmKHRs
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
        id: c_9gK4m1mb6HqLhkVrK11M5i
        subject_person_id: p_nLjuMFU8zFzKUVBfG6EHaX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘學（卒于1660年），清人物。籍贯華陰。（中国历代人物传记资料库 CBDB 71511）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_267wkgDhPdfkmTMPILykWt
          claim_id: c_9gK4m1mb6HqLhkVrK11M5i
          source_id: s_xxJ484BAFV816yd3KmKHRs
          stance: supports
          locator: CBDB:71511
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

# 王弘學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘學 | accepted |
| death.date | 1660年 | accepted |
| bio.summary | 王弘學（卒于1660年），清人物。籍贯華陰。（中国历代人物传记资料库 CBDB 71511） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弘學（CBDB 71511）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71511&o=json)
