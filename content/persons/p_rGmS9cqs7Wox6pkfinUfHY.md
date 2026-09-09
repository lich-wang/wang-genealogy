---
schema: wang-person/v1
id: p_rGmS9cqs7Wox6pkfinUfHY
status: active
merged_into: null
display_name: 王錦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pA2unsuHCfF8JhaJp6mZuc
        subject_person_id: p_rGmS9cqs7Wox6pkfinUfHY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W31oa68Hnp1tcvDaLnQPZA
          claim_id: c_pA2unsuHCfF8JhaJp6mZuc
          source_id: s_y1RQZNFg553gmPtKQ2Y6BQ
          stance: supports
          locator: CBDB:474774
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（474774）
          source: &a1
            id: s_y1RQZNFg553gmPtKQ2Y6BQ
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 474774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474774&o=json
            external_identifier: CBDB:474774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.385Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nnR1uP2tEyEKNCm8myuG8c
        subject_person_id: p_rGmS9cqs7Wox6pkfinUfHY
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
        - id: cs_7Z9jJpvRkgV5NwUDQ9T23w
          claim_id: c_nnR1uP2tEyEKNCm8myuG8c
          source_id: s_y1RQZNFg553gmPtKQ2Y6BQ
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

# 王錦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錦 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錦（CBDB 474774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474774&o=json)
