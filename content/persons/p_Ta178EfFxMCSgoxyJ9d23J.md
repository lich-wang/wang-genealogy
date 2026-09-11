---
schema: wang-person/v1
id: p_Ta178EfFxMCSgoxyJ9d23J
status: active
merged_into: null
display_name: 王際華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AKsjCe1sc5B8yEDy74w3b5
        subject_person_id: p_Ta178EfFxMCSgoxyJ9d23J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王際華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zL796rsSraEDVzL6MkkbTb
          claim_id: c_AKsjCe1sc5B8yEDy74w3b5
          source_id: s_vTYLrF15KPBPmMrS43m1io
          stance: supports
          locator: CBDB:57212
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57212）
          source: &a1
            id: s_vTYLrF15KPBPmMrS43m1io
            source_type: api_record
            title: 中国历代人物传记资料库：王際華（CBDB 57212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57212&o=json
            external_identifier: CBDB:57212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.805Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PhXmH4RCVz2854ygrE4pN7
        subject_person_id: p_Ta178EfFxMCSgoxyJ9d23J
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1717年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QxRg8B5feowvc1r3RXHcKY
          claim_id: c_PhXmH4RCVz2854ygrE4pN7
          source_id: s_vTYLrF15KPBPmMrS43m1io
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
        id: c_EhiCFWPvYZzkfRMJhzgvpg
        subject_person_id: p_Ta178EfFxMCSgoxyJ9d23J
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1776年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i8cCsmerfo8Jurz7L2UY35
          claim_id: c_EhiCFWPvYZzkfRMJhzgvpg
          source_id: s_vTYLrF15KPBPmMrS43m1io
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
        id: c_3H1h1Cc4dot19W3VcSJKD6
        subject_person_id: p_Ta178EfFxMCSgoxyJ9d23J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王際華（1717年—1776年），清人物。明清進士進士，籍贯錢塘，入仕進士，曾任編修、兵部侍郎、戶部侍郎。（中国历代人物传记资料库 CBDB 57212）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rAX3MAWGhXQxXTu3N8dN2v
          claim_id: c_3H1h1Cc4dot19W3VcSJKD6
          source_id: s_vTYLrF15KPBPmMrS43m1io
          stance: supports
          locator: CBDB:57212
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王際華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王際華 | accepted |
| birth.date | 1717年 | accepted |
| death.date | 1776年 | accepted |
| bio.summary | 王際華（1717年—1776年），清人物。明清進士進士，籍贯錢塘，入仕進士，曾任編修、兵部侍郎、戶部侍郎。（中国历代人物传记资料库 CBDB 57212） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王際華（CBDB 57212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57212&o=json)
