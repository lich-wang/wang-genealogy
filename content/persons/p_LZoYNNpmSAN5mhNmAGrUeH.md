---
schema: wang-person/v1
id: p_LZoYNNpmSAN5mhNmAGrUeH
status: active
merged_into: null
display_name: 王楚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8DxH34thUFmCoA4MAYWGk3
        subject_person_id: p_LZoYNNpmSAN5mhNmAGrUeH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q7N6MTofLFf3WF81kAd1QC
          claim_id: c_8DxH34thUFmCoA4MAYWGk3
          source_id: s_JjZrS78BoLL2KPqiccLTBN
          stance: supports
          locator: CBDB:145120
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145120）
          source: &a1
            id: s_JjZrS78BoLL2KPqiccLTBN
            source_type: api_record
            title: 中国历代人物传记资料库：王楚（CBDB 145120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145120&o=json
            external_identifier: CBDB:145120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.651Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HYiYPisSX4QH7k1jKNCgkn
        subject_person_id: p_LZoYNNpmSAN5mhNmAGrUeH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 849年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dQg5QbCD1xmSkMAUEdbjdd
          claim_id: c_HYiYPisSX4QH7k1jKNCgkn
          source_id: s_JjZrS78BoLL2KPqiccLTBN
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
        id: c_FS1D2NdHnzHJPRUEjHXY9y
        subject_person_id: p_LZoYNNpmSAN5mhNmAGrUeH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 869年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kZ8AW62C2PrHWoifQ4ATAx
          claim_id: c_FS1D2NdHnzHJPRUEjHXY9y
          source_id: s_JjZrS78BoLL2KPqiccLTBN
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
        id: c_HR4KkiFPMvqUZ3nWVjJd44
        subject_person_id: p_LZoYNNpmSAN5mhNmAGrUeH
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
        - id: cs_KaRFJ635wcza18bzi8hbpp
          claim_id: c_HR4KkiFPMvqUZ3nWVjJd44
          source_id: s_JjZrS78BoLL2KPqiccLTBN
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

# 王楚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楚 | accepted |
| birth.date | 849年 | accepted |
| death.date | 869年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楚（CBDB 145120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145120&o=json)
