---
schema: wang-person/v1
id: p_nMTfTHCiK68GBCA9Zmyxva
status: active
merged_into: null
display_name: 王光祖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jNdPHrzagHg8BXi6KKArXP
        subject_person_id: p_nMTfTHCiK68GBCA9Zmyxva
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XYTgjWLvEU7RjigiqfR2Gf
          claim_id: c_jNdPHrzagHg8BXi6KKArXP
          source_id: s_HPFcBEdijZkX6XL8n8mNGk
          stance: supports
          locator: CBDB:126518
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126518）
          source: &a1
            id: s_HPFcBEdijZkX6XL8n8mNGk
            source_type: api_record
            title: 中国历代人物传记资料库：王光祖（CBDB 126518）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126518&o=json
            external_identifier: CBDB:126518
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.997Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8Fsx9Pccq9AyDETc2h594X
        subject_person_id: p_nMTfTHCiK68GBCA9Zmyxva
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1518年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LBzuEws6QLryJQpH1kstX4
          claim_id: c_8Fsx9Pccq9AyDETc2h594X
          source_id: s_HPFcBEdijZkX6XL8n8mNGk
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
        id: c_okzAg8f21XhVqEN6h7QN5Y
        subject_person_id: p_nMTfTHCiK68GBCA9Zmyxva
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1581年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g7CxBKKGDF7riaCpWdh7Fu
          claim_id: c_okzAg8f21XhVqEN6h7QN5Y
          source_id: s_HPFcBEdijZkX6XL8n8mNGk
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
        id: c_bt25vKEZCrPVVH9359ZxBT
        subject_person_id: p_nMTfTHCiK68GBCA9Zmyxva
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
        - id: cs_RSrnrC6V6gXSEbG34TGAwF
          claim_id: c_bt25vKEZCrPVVH9359ZxBT
          source_id: s_HPFcBEdijZkX6XL8n8mNGk
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

# 王光祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光祖 | accepted |
| birth.date | 1518年 | accepted |
| death.date | 1581年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光祖（CBDB 126518）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126518&o=json)
