---
schema: wang-person/v1
id: p_5XXJB5x5p3DLq5eCrzqr2r
status: active
merged_into: null
display_name: 王鎮疆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qt1sJFybhq551MwC9ZH8rh
        subject_person_id: p_5XXJB5x5p3DLq5eCrzqr2r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮疆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QvByr1CP5CPMPwiewxmcue
          claim_id: c_Qt1sJFybhq551MwC9ZH8rh
          source_id: s_H2h3EF6GoMtp3CijrFyBbC
          stance: supports
          locator: CBDB:640697
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640697）
          source: &a1
            id: s_H2h3EF6GoMtp3CijrFyBbC
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮疆（CBDB 640697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640697&o=json
            external_identifier: CBDB:640697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.336Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r56KZk9g4Zmyj7QjBUWCMS
        subject_person_id: p_5XXJB5x5p3DLq5eCrzqr2r
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
        - id: cs_hd81uGf4r9D3nLp61caDsV
          claim_id: c_r56KZk9g4Zmyj7QjBUWCMS
          source_id: s_H2h3EF6GoMtp3CijrFyBbC
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

# 王鎮疆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎮疆 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎮疆（CBDB 640697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640697&o=json)
