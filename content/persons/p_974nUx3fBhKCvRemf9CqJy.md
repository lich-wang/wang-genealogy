---
schema: wang-person/v1
id: p_974nUx3fBhKCvRemf9CqJy
status: active
merged_into: null
display_name: 王鴻翔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xPGpkFZbk5frJCLEG7EsUC
        subject_person_id: p_974nUx3fBhKCvRemf9CqJy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻翔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M7HNBbAibjHMMzGWf4ERRz
          claim_id: c_xPGpkFZbk5frJCLEG7EsUC
          source_id: s_vdNiYjyw3UJTnsz3bMeCyk
          stance: supports
          locator: CBDB:72018
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72018）
          source: &a1
            id: s_vdNiYjyw3UJTnsz3bMeCyk
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻翔（CBDB 72018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72018&o=json
            external_identifier: CBDB:72018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PxvSgas5V4F6bWsq3TzajP
        subject_person_id: p_974nUx3fBhKCvRemf9CqJy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1868年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gxrJJ1bomAY9ffk3Z9zhGN
          claim_id: c_PxvSgas5V4F6bWsq3TzajP
          source_id: s_vdNiYjyw3UJTnsz3bMeCyk
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
        id: c_Eu9sqGHoRm9HzcDWcb7mrp
        subject_person_id: p_974nUx3fBhKCvRemf9CqJy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1933年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q1GyFFU9FZgHxv8xCCQjAY
          claim_id: c_Eu9sqGHoRm9HzcDWcb7mrp
          source_id: s_vdNiYjyw3UJTnsz3bMeCyk
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
        id: c_owUW5BNKzNAo9JntPNs6m6
        subject_person_id: p_974nUx3fBhKCvRemf9CqJy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hEY3Kio6buME7dZEkhNLHJ
          claim_id: c_owUW5BNKzNAo9JntPNs6m6
          source_id: s_vdNiYjyw3UJTnsz3bMeCyk
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

# 王鴻翔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鴻翔 | accepted |
| birth.date | 1868年 | accepted |
| death.date | 1933年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鴻翔（CBDB 72018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72018&o=json)
