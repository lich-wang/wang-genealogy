---
schema: wang-person/v1
id: p_caHuDEBgFvtFSd57cT6pjA
status: active
merged_into: null
display_name: 王在耘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6bnnJpH1DscoV15EpNk21m
        subject_person_id: p_caHuDEBgFvtFSd57cT6pjA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王在耘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gPGh9CvznkxEGRadH5VciK
          claim_id: c_6bnnJpH1DscoV15EpNk21m
          source_id: s_twr5E9CikqxJxjj5EZs9h1
          stance: supports
          locator: CBDB:636685
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636685）
          source: &a1
            id: s_twr5E9CikqxJxjj5EZs9h1
            source_type: api_record
            title: 中国历代人物传记资料库：王在耘（CBDB 636685）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636685&o=json
            external_identifier: CBDB:636685
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.069Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HUh8tvrspt8MuCNZNScTuJ
        subject_person_id: p_caHuDEBgFvtFSd57cT6pjA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王在耘，清人物。籍贯甘肅省，入仕行伍，曾任遊擊。（中国历代人物传记资料库 CBDB 636685）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UyrOnxe5O0Pt__oKPnn7_3
          claim_id: c_HUh8tvrspt8MuCNZNScTuJ
          source_id: s_twr5E9CikqxJxjj5EZs9h1
          stance: supports
          locator: CBDB:636685
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

# 王在耘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王在耘 | accepted |
| bio.summary | 王在耘，清人物。籍贯甘肅省，入仕行伍，曾任遊擊。（中国历代人物传记资料库 CBDB 636685） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王在耘（CBDB 636685）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636685&o=json)
