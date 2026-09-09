---
schema: wang-person/v1
id: p_1nj5Vo66whrteQ2mchLsSE
status: active
merged_into: null
display_name: 王思齊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H4Qu7i4J56H9nLbFPyBsqj
        subject_person_id: p_1nj5Vo66whrteQ2mchLsSE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思齊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kb5TiuDcggnGAW7hQEXMJ9
          claim_id: c_H4Qu7i4J56H9nLbFPyBsqj
          source_id: s_LJuHE17UufbNY26bmdjKS5
          stance: supports
          locator: CBDB:140628
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140628）
          source: &a1
            id: s_LJuHE17UufbNY26bmdjKS5
            source_type: api_record
            title: 中国历代人物传记资料库：王思齊（CBDB 140628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140628&o=json
            external_identifier: CBDB:140628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.521Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_v6PGyw19fAWTUwxvNs4io6
        subject_person_id: p_1nj5Vo66whrteQ2mchLsSE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 647年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JLPGMSWq7DTsQmv4BKc1X4
          claim_id: c_v6PGyw19fAWTUwxvNs4io6
          source_id: s_LJuHE17UufbNY26bmdjKS5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_xZCKEMy8KP4bFQUt7Q888u
        subject_person_id: p_1nj5Vo66whrteQ2mchLsSE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 708年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W889ro9yYKN8gs97kH2FZT
          claim_id: c_xZCKEMy8KP4bFQUt7Q888u
          source_id: s_LJuHE17UufbNY26bmdjKS5
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
        id: c_YMFweCM3WeeTSa7ShxHq91
        subject_person_id: p_1nj5Vo66whrteQ2mchLsSE
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
        - id: cs_1kt72MpMDjpLz5MJSnqBgc
          claim_id: c_YMFweCM3WeeTSa7ShxHq91
          source_id: s_LJuHE17UufbNY26bmdjKS5
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

# 王思齊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思齊 | accepted |
| birth.date | 647年 | accepted |
| death.date | 708年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思齊（CBDB 140628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140628&o=json)
