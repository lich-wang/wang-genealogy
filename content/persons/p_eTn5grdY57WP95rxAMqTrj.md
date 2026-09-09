---
schema: wang-person/v1
id: p_eTn5grdY57WP95rxAMqTrj
status: active
merged_into: null
display_name: 王炎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tYXZXH1N7eqBuozJWtZhsS
        subject_person_id: p_eTn5grdY57WP95rxAMqTrj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5Q2XEMY4pvQj5GL6xExwU8
          claim_id: c_tYXZXH1N7eqBuozJWtZhsS
          source_id: s_ayXwHa3P8JZGjiVZ55uyM9
          stance: supports
          locator: CBDB:16692
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（16692）
          source: &a1
            id: s_ayXwHa3P8JZGjiVZ55uyM9
            source_type: api_record
            title: 中国历代人物传记资料库：王炎（CBDB 16692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16692&o=json
            external_identifier: CBDB:16692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.652Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xEGGrs5FXjqtPvLbQUGjtw
        subject_person_id: p_eTn5grdY57WP95rxAMqTrj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1138年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_84VFB4crih466BNNoiM44W
          claim_id: c_xEGGrs5FXjqtPvLbQUGjtw
          source_id: s_ayXwHa3P8JZGjiVZ55uyM9
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
        id: c_ZaFXcLBV8c8Mz5CAGFNV9a
        subject_person_id: p_eTn5grdY57WP95rxAMqTrj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1218年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8NrCU6a88WPWFubyT93DLF
          claim_id: c_ZaFXcLBV8c8Mz5CAGFNV9a
          source_id: s_ayXwHa3P8JZGjiVZ55uyM9
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
        id: c_QT6sLTeLBLgJXTy3o1ea19
        subject_person_id: p_eTn5grdY57WP95rxAMqTrj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BAgqf8FVdMfmC6cC8MDF5J
          claim_id: c_QT6sLTeLBLgJXTy3o1ea19
          source_id: s_ayXwHa3P8JZGjiVZ55uyM9
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

# 王炎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炎 | accepted |
| birth.date | 1138年 | accepted |
| death.date | 1218年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炎（CBDB 16692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16692&o=json)
