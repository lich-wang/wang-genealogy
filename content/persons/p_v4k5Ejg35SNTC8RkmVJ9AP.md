---
schema: wang-person/v1
id: p_v4k5Ejg35SNTC8RkmVJ9AP
status: active
merged_into: null
display_name: 王開
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tquA47EEGdiubz3fNkqJGN
        subject_person_id: p_v4k5Ejg35SNTC8RkmVJ9AP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q31sCy2frdjCFLfwDJzf2r
          claim_id: c_tquA47EEGdiubz3fNkqJGN
          source_id: s_Gt6m6up5rv2TeP5nJiL4tW
          stance: supports
          locator: CBDB:453921
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（453921）
          source: &a1
            id: s_Gt6m6up5rv2TeP5nJiL4tW
            source_type: api_record
            title: 中国历代人物传记资料库：王開（CBDB 453921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453921&o=json
            external_identifier: CBDB:453921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.421Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xZs5Qefac1sC8oapNLvaaJ
        subject_person_id: p_v4k5Ejg35SNTC8RkmVJ9AP
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
        - id: cs_RsY9Qk6BYjRBFf5PCBmYgH
          claim_id: c_xZs5Qefac1sC8oapNLvaaJ
          source_id: s_Gt6m6up5rv2TeP5nJiL4tW
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

# 王開

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王開 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王開（CBDB 453921）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453921&o=json)
