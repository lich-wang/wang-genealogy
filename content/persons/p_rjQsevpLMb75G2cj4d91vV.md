---
schema: wang-person/v1
id: p_rjQsevpLMb75G2cj4d91vV
status: active
merged_into: null
display_name: 王孝傑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XUoYbpabJko79b9bjpkJSL
        subject_person_id: p_rjQsevpLMb75G2cj4d91vV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3CJw2C9Qa8NCqZ8qKZcULc
          claim_id: c_XUoYbpabJko79b9bjpkJSL
          source_id: s_E9mNyG6XNRo91eCKUpX5pU
          stance: supports
          locator: CBDB:175925
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175925）
          source: &a1
            id: s_E9mNyG6XNRo91eCKUpX5pU
            source_type: api_record
            title: 中国历代人物传记资料库：王孝傑（CBDB 175925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175925&o=json
            external_identifier: CBDB:175925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.203Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mfS7z7HBawC1mA2FfFRcME
        subject_person_id: p_rjQsevpLMb75G2cj4d91vV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 675年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BvS5ZaNp3fx7PQcMnXzukv
          claim_id: c_mfS7z7HBawC1mA2FfFRcME
          source_id: s_E9mNyG6XNRo91eCKUpX5pU
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
        id: c_kADoN48MRBz7HUyY2KSQ93
        subject_person_id: p_rjQsevpLMb75G2cj4d91vV
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
        - id: cs_7HjmfuqABMJkFp8FjTBGKA
          claim_id: c_kADoN48MRBz7HUyY2KSQ93
          source_id: s_E9mNyG6XNRo91eCKUpX5pU
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

# 王孝傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孝傑 | accepted |
| death.date | 675年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孝傑（CBDB 175925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175925&o=json)
