---
schema: wang-person/v1
id: p_hHZ5eNrL27jeg6kvNsSboK
status: active
merged_into: null
display_name: 王德興
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ccD3VJPP6tdWyRGQ2co3o1
        subject_person_id: p_hHZ5eNrL27jeg6kvNsSboK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zPPS7i8o9Qa8EJ6BAMK5Lm
          claim_id: c_ccD3VJPP6tdWyRGQ2co3o1
          source_id: s_au3qtRGUrcbEbKd5W119u7
          stance: supports
          locator: CBDB:322397
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（322397）
          source: &a1
            id: s_au3qtRGUrcbEbKd5W119u7
            source_type: api_record
            title: 中国历代人物传记资料库：王德興（CBDB 322397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322397&o=json
            external_identifier: CBDB:322397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.118Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QNT1NLLiLspPtVz6HjH7K5
        subject_person_id: p_hHZ5eNrL27jeg6kvNsSboK
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
        - id: cs_2YGzsfkhoQkYCndKU61xSr
          claim_id: c_QNT1NLLiLspPtVz6HjH7K5
          source_id: s_au3qtRGUrcbEbKd5W119u7
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

# 王德興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德興 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德興（CBDB 322397）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322397&o=json)
