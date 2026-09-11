---
schema: wang-person/v1
id: p_GypUXAESvZMDEj1Sjwho34
status: active
merged_into: null
display_name: 王嘉屏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_172nJKPqVHGrby8Px8VRhs
        subject_person_id: p_GypUXAESvZMDEj1Sjwho34
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉屏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gf3CHgprH6U1pLfZW99CBb
          claim_id: c_172nJKPqVHGrby8Px8VRhs
          source_id: s_Rzg6QAFDPkLvVYciAWaFuY
          stance: supports
          locator: CBDB:636611
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636611）
          source: &a1
            id: s_Rzg6QAFDPkLvVYciAWaFuY
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉屏（CBDB 636611）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636611&o=json
            external_identifier: CBDB:636611
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.050Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JB1bNj8ABo9MvoGKCb1QnF
        subject_person_id: p_GypUXAESvZMDEj1Sjwho34
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉屏，清人物。籍贯順天府，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 636611）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wwBY35_SB9wycJi_yrcg0e
          claim_id: c_JB1bNj8ABo9MvoGKCb1QnF
          source_id: s_Rzg6QAFDPkLvVYciAWaFuY
          stance: supports
          locator: CBDB:636611
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

# 王嘉屏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉屏 | accepted |
| bio.summary | 王嘉屏，清人物。籍贯順天府，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 636611） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉屏（CBDB 636611）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636611&o=json)
