---
schema: wang-person/v1
id: p_YQh2UnWjAUpFCsSFq5tiaF
status: active
merged_into: null
display_name: 王夢熊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4vFTKiGqM9icNnc46BXCX6
        subject_person_id: p_YQh2UnWjAUpFCsSFq5tiaF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢熊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mCjhWDG6oc7mdq1LwpB5Sg
          claim_id: c_4vFTKiGqM9icNnc46BXCX6
          source_id: s_RWgCjgm9HYC83e1y2k6N4U
          stance: supports
          locator: CBDB:297278
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297278）
          source: &a1
            id: s_RWgCjgm9HYC83e1y2k6N4U
            source_type: api_record
            title: 中国历代人物传记资料库：王夢熊（CBDB 297278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297278&o=json
            external_identifier: CBDB:297278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KXLcZb7rdgWdWDSjQCdnnU
        subject_person_id: p_YQh2UnWjAUpFCsSFq5tiaF
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
        - id: cs_uHaTs5HX66mCQcAMrkjBPV
          claim_id: c_KXLcZb7rdgWdWDSjQCdnnU
          source_id: s_RWgCjgm9HYC83e1y2k6N4U
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

# 王夢熊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢熊 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢熊（CBDB 297278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297278&o=json)
