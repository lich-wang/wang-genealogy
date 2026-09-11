---
schema: wang-person/v1
id: p_gZV9QZUPPMMe855MuSpUMS
status: active
merged_into: null
display_name: 王麟瑞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8ffRujFYCQs7RugeW3eZiz
        subject_person_id: p_gZV9QZUPPMMe855MuSpUMS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yb9RnrpYQuKn7wJEg4QcLa
          claim_id: c_8ffRujFYCQs7RugeW3eZiz
          source_id: s_5GJCCNLHzRY92JWDZi4Y3d
          stance: supports
          locator: CBDB:454955
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（454955）
          source: &a1
            id: s_5GJCCNLHzRY92JWDZi4Y3d
            source_type: api_record
            title: 中国历代人物传记资料库：王麟瑞（CBDB 454955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454955&o=json
            external_identifier: CBDB:454955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.487Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5XtjJaMy2QG4SSWMrXmVYP
        subject_person_id: p_gZV9QZUPPMMe855MuSpUMS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟瑞，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 454955）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lEVpEpTe1Fg_9_Rp1lrVEm
          claim_id: c_5XtjJaMy2QG4SSWMrXmVYP
          source_id: s_5GJCCNLHzRY92JWDZi4Y3d
          stance: supports
          locator: CBDB:454955
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

# 王麟瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麟瑞 | accepted |
| bio.summary | 王麟瑞，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 454955） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王麟瑞（CBDB 454955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454955&o=json)
