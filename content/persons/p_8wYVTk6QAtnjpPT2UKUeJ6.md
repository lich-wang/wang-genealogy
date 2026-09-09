---
schema: wang-person/v1
id: p_8wYVTk6QAtnjpPT2UKUeJ6
status: active
merged_into: null
display_name: 王殊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HBLbE8x7eGDk4E3hYPnJyg
        subject_person_id: p_8wYVTk6QAtnjpPT2UKUeJ6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b8gwNakUrCJBSxtCEjDq1M
          claim_id: c_HBLbE8x7eGDk4E3hYPnJyg
          source_id: s_314xFm6LSL5L8y3s4DxF8C
          stance: supports
          locator: CBDB:119729
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（119729）
          source: &a1
            id: s_314xFm6LSL5L8y3s4DxF8C
            source_type: api_record
            title: 中国历代人物传记资料库：王殊（CBDB 119729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119729&o=json
            external_identifier: CBDB:119729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TteS8oDEedAU7G4A1UZ4AM
        subject_person_id: p_8wYVTk6QAtnjpPT2UKUeJ6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FcExrTthMd3R9nBw9csGYm
          claim_id: c_TteS8oDEedAU7G4A1UZ4AM
          source_id: s_314xFm6LSL5L8y3s4DxF8C
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

# 王殊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王殊 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王殊（CBDB 119729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119729&o=json)
