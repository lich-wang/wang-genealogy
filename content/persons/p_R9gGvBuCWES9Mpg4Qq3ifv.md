---
schema: wang-person/v1
id: p_R9gGvBuCWES9Mpg4Qq3ifv
status: active
merged_into: null
display_name: 王省躬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GMn81XBNVnzKEQiL1HJEMb
        subject_person_id: p_R9gGvBuCWES9Mpg4Qq3ifv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王省躬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BxDb37JY7E81nxTEn38asq
          claim_id: c_GMn81XBNVnzKEQiL1HJEMb
          source_id: s_K4QsG12QXQMuA2yuwbFWPu
          stance: supports
          locator: CBDB:458832
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（458832）
          source: &a1
            id: s_K4QsG12QXQMuA2yuwbFWPu
            source_type: api_record
            title: 中国历代人物传记资料库：王省躬（CBDB 458832）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458832&o=json
            external_identifier: CBDB:458832
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.666Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pE4LUPhizk4H7QRhBHVm3P
        subject_person_id: p_R9gGvBuCWES9Mpg4Qq3ifv
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
        - id: cs_2YPsvq9CAC1mgBWuPua3Bq
          claim_id: c_pE4LUPhizk4H7QRhBHVm3P
          source_id: s_K4QsG12QXQMuA2yuwbFWPu
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

# 王省躬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王省躬 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王省躬（CBDB 458832）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458832&o=json)
