---
schema: wang-person/v1
id: p_pcM8guw6i5wyX7fqUXjoNt
status: active
merged_into: null
display_name: 王繩曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KcHGozwVRRUuYHSFtm8SCF
        subject_person_id: p_pcM8guw6i5wyX7fqUXjoNt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繩曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9TZ28UAnrEbfNMggntQ23U
          claim_id: c_KcHGozwVRRUuYHSFtm8SCF
          source_id: s_iJrDgMxJyac5ZwPJBLNXJd
          stance: supports
          locator: CBDB:72029
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72029）
          source: &a1
            id: s_iJrDgMxJyac5ZwPJBLNXJd
            source_type: api_record
            title: 中国历代人物传记资料库：王繩曾（CBDB 72029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72029&o=json
            external_identifier: CBDB:72029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.963Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9RLoc1ghX2VXDoQ2DUCKbS
        subject_person_id: p_pcM8guw6i5wyX7fqUXjoNt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1676年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qedH377j1xg8npAvnZiYgn
          claim_id: c_9RLoc1ghX2VXDoQ2DUCKbS
          source_id: s_iJrDgMxJyac5ZwPJBLNXJd
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
        id: c_wNAwniQPV4RLYhgb9n5aCf
        subject_person_id: p_pcM8guw6i5wyX7fqUXjoNt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1755年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BEMYsT42y2RP4Vq22ymzKb
          claim_id: c_wNAwniQPV4RLYhgb9n5aCf
          source_id: s_iJrDgMxJyac5ZwPJBLNXJd
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
        id: c_9WbXUnC8FRXseTsmLMMjHE
        subject_person_id: p_pcM8guw6i5wyX7fqUXjoNt
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
        - id: cs_FHgx7sWJAp97cMjHDi92qM
          claim_id: c_9WbXUnC8FRXseTsmLMMjHE
          source_id: s_iJrDgMxJyac5ZwPJBLNXJd
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

# 王繩曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繩曾 | accepted |
| birth.date | 1676年 | accepted |
| death.date | 1755年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繩曾（CBDB 72029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72029&o=json)
