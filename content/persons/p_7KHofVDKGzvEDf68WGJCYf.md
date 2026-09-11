---
schema: wang-person/v1
id: p_7KHofVDKGzvEDf68WGJCYf
status: active
merged_into: null
display_name: 王太平
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JxGLCz9nPRdAgd7QxoFkf7
        subject_person_id: p_7KHofVDKGzvEDf68WGJCYf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王太平
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VhjXGd5sBQxSVCJxEcC7dK
          claim_id: c_JxGLCz9nPRdAgd7QxoFkf7
          source_id: s_kJxQSW36RFnd9Yg1sLKvp9
          stance: supports
          locator: CBDB:636944
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636944）
          source: &a1
            id: s_kJxQSW36RFnd9Yg1sLKvp9
            source_type: api_record
            title: 中国历代人物传记资料库：王太平（CBDB 636944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636944&o=json
            external_identifier: CBDB:636944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.298Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9W65o1r3JaWfKW5Jp9BYm5
        subject_person_id: p_7KHofVDKGzvEDf68WGJCYf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王太平，清人物。籍贯廣平，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 636944）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6MNb_YmrSJxAuoa9_TDBg6
          claim_id: c_9W65o1r3JaWfKW5Jp9BYm5
          source_id: s_kJxQSW36RFnd9Yg1sLKvp9
          stance: supports
          locator: CBDB:636944
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

# 王太平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王太平 | accepted |
| bio.summary | 王太平，清人物。籍贯廣平，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 636944） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王太平（CBDB 636944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636944&o=json)
