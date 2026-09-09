---
schema: wang-person/v1
id: p_Tx5e1nr85Ax8xBvbkFoMbF
status: active
merged_into: null
display_name: 王三錫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_shnUgGtXDAyemLfL8fPQEC
        subject_person_id: p_Tx5e1nr85Ax8xBvbkFoMbF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L7BubSoW42DWcEwLTp5vQU
          claim_id: c_shnUgGtXDAyemLfL8fPQEC
          source_id: s_PJPGdtorD8D8P1TSyQnC4r
          stance: supports
          locator: CBDB:202405
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202405）
          source: &a1
            id: s_PJPGdtorD8D8P1TSyQnC4r
            source_type: api_record
            title: 中国历代人物传记资料库：王三錫（CBDB 202405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202405&o=json
            external_identifier: CBDB:202405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.741Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3nZJaTU9n6fK2ebnoVC9KY
        subject_person_id: p_Tx5e1nr85Ax8xBvbkFoMbF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1505年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MJSKq7r9hfv79QuugSULuF
          claim_id: c_3nZJaTU9n6fK2ebnoVC9KY
          source_id: s_PJPGdtorD8D8P1TSyQnC4r
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Fp68dYEvHnv4Pa7m37oMCB
        subject_person_id: p_Tx5e1nr85Ax8xBvbkFoMbF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V7AqKLQRprG7Sts624A8AE
          claim_id: c_Fp68dYEvHnv4Pa7m37oMCB
          source_id: s_PJPGdtorD8D8P1TSyQnC4r
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

# 王三錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三錫 | accepted |
| birth.date | 1505年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三錫（CBDB 202405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202405&o=json)
