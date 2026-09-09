---
schema: wang-person/v1
id: p_skaqKUrGBbHX7hb1EeAZdW
status: active
merged_into: null
display_name: 王肇坤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qKXjDeV2GhLD6MKQPVicTt
        subject_person_id: p_skaqKUrGBbHX7hb1EeAZdW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇坤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sFD449Ht9Zdxs766yNomZq
          claim_id: c_qKXjDeV2GhLD6MKQPVicTt
          source_id: s_vH76fJ5FQwp2xt2HKUqoqu
          stance: supports
          locator: CBDB:68148
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68148）
          source: &a1
            id: s_vH76fJ5FQwp2xt2HKUqoqu
            source_type: api_record
            title: 中国历代人物传记资料库：王肇坤（CBDB 68148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68148&o=json
            external_identifier: CBDB:68148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EEy37BHNutoBi7SGedQqSc
        subject_person_id: p_skaqKUrGBbHX7hb1EeAZdW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1636年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y3vibQutG6FdPmo5FMj9ro
          claim_id: c_EEy37BHNutoBi7SGedQqSc
          source_id: s_vH76fJ5FQwp2xt2HKUqoqu
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
        id: c_a9TgaDmb2wXcgtWQ8YnaB5
        subject_person_id: p_skaqKUrGBbHX7hb1EeAZdW
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
        - id: cs_DE1Dpxq98iuEbKS6ZUJNzs
          claim_id: c_a9TgaDmb2wXcgtWQ8YnaB5
          source_id: s_vH76fJ5FQwp2xt2HKUqoqu
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

# 王肇坤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肇坤 | accepted |
| death.date | 1636年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王肇坤（CBDB 68148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68148&o=json)
