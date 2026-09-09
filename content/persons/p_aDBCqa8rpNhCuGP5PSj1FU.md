---
schema: wang-person/v1
id: p_aDBCqa8rpNhCuGP5PSj1FU
status: active
merged_into: null
display_name: 王光大
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sY3MwRzCB1bCF9EDrrj6od
        subject_person_id: p_aDBCqa8rpNhCuGP5PSj1FU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光大
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sHg9tBgdSULPzd1sxcHRwc
          claim_id: c_sY3MwRzCB1bCF9EDrrj6od
          source_id: s_53foFbq5WKHLeooqZhEQLe
          stance: supports
          locator: CBDB:175858
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175858）
          source: &a1
            id: s_53foFbq5WKHLeooqZhEQLe
            source_type: api_record
            title: 中国历代人物传记资料库：王光大（CBDB 175858）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175858&o=json
            external_identifier: CBDB:175858
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.165Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_BbXvtZsr1cAfy7SL6nAckf
        subject_person_id: p_aDBCqa8rpNhCuGP5PSj1FU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 741年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bynk6F2C7g5L4wWTCmfrSY
          claim_id: c_BbXvtZsr1cAfy7SL6nAckf
          source_id: s_53foFbq5WKHLeooqZhEQLe
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H7tS2hqoCgVL84N72vQZUz
        subject_person_id: p_aDBCqa8rpNhCuGP5PSj1FU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y92WtGFqFG25CscxnmKGkn
          claim_id: c_H7tS2hqoCgVL84N72vQZUz
          source_id: s_53foFbq5WKHLeooqZhEQLe
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

# 王光大

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光大 | accepted |
| death.date | 741年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光大（CBDB 175858）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175858&o=json)
