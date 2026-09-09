---
schema: wang-person/v1
id: p_HpbUTN3VPMqvxY18ZEjq8M
status: active
merged_into: null
display_name: 王肱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QG8eaRx4pe4UvQdpaEoyUA
        subject_person_id: p_HpbUTN3VPMqvxY18ZEjq8M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UkDXUMBY81tMz5a86CCB99
          claim_id: c_QG8eaRx4pe4UvQdpaEoyUA
          source_id: s_RGa9cnRD4hCfgfsaL8WBUf
          stance: supports
          locator: CBDB:39593
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39593）
          source: &a1
            id: s_RGa9cnRD4hCfgfsaL8WBUf
            source_type: api_record
            title: 中国历代人物传记资料库：王肱（CBDB 39593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39593&o=json
            external_identifier: CBDB:39593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.640Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KKFv1V73i61SUDm8ya9EfQ
        subject_person_id: p_HpbUTN3VPMqvxY18ZEjq8M
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1043年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jkAH5VvhkEPr64n2Gpr9Nb
          claim_id: c_KKFv1V73i61SUDm8ya9EfQ
          source_id: s_RGa9cnRD4hCfgfsaL8WBUf
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
        id: c_jxz81T1sYNZ89qzuM5tv73
        subject_person_id: p_HpbUTN3VPMqvxY18ZEjq8M
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1077年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_83PVZ9rpbFo18hS1VqVcVg
          claim_id: c_jxz81T1sYNZ89qzuM5tv73
          source_id: s_RGa9cnRD4hCfgfsaL8WBUf
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
        id: c_iid4G7Bhy3uTXYD86FMd8R
        subject_person_id: p_HpbUTN3VPMqvxY18ZEjq8M
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
        - id: cs_B1um1f2A5mt1fWxZ1nL8Rf
          claim_id: c_iid4G7Bhy3uTXYD86FMd8R
          source_id: s_RGa9cnRD4hCfgfsaL8WBUf
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

# 王肱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肱 | accepted |
| birth.date | 1043年 | accepted |
| death.date | 1077年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王肱（CBDB 39593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39593&o=json)
