---
schema: wang-person/v1
id: p_GWFEkztvU4WKU3V9oKT3uW
status: active
merged_into: null
display_name: 王肇新
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eHm19JTGD2MWKzhEkkyf2h
        subject_person_id: p_GWFEkztvU4WKU3V9oKT3uW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U6Z7yGS5f3777kznGmytN1
          claim_id: c_eHm19JTGD2MWKzhEkkyf2h
          source_id: s_R6q87MLCrcCUztddSDv5f2
          stance: supports
          locator: CBDB:72175
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72175）
          source: &a1
            id: s_R6q87MLCrcCUztddSDv5f2
            source_type: api_record
            title: 中国历代人物传记资料库：王肇新（CBDB 72175）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72175&o=json
            external_identifier: CBDB:72175
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.037Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TUfC1EmmXjJLRqhzeketnr
        subject_person_id: p_GWFEkztvU4WKU3V9oKT3uW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1787年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fFRXt7A36Xj2DDmJUU5GWM
          claim_id: c_TUfC1EmmXjJLRqhzeketnr
          source_id: s_R6q87MLCrcCUztddSDv5f2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vhV7CEGsFjn7eCZEiQfDaJ
        subject_person_id: p_GWFEkztvU4WKU3V9oKT3uW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kq5khDDZP1yqkkZyYHc8oG
          claim_id: c_vhV7CEGsFjn7eCZEiQfDaJ
          source_id: s_R6q87MLCrcCUztddSDv5f2
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

# 王肇新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肇新 | accepted |
| birth.date | 1787年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王肇新（CBDB 72175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72175&o=json)
