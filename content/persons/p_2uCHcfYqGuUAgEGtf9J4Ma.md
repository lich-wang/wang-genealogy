---
schema: wang-person/v1
id: p_2uCHcfYqGuUAgEGtf9J4Ma
status: active
merged_into: null
display_name: 王東珣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8XAEPXsdZNF9FQ1GQhJCZC
        subject_person_id: p_2uCHcfYqGuUAgEGtf9J4Ma
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王東珣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ctpgv5hawMxRGyLhzWK6HV
          claim_id: c_8XAEPXsdZNF9FQ1GQhJCZC
          source_id: s_oti4ao7RAJqFKfHKWUwR1M
          stance: supports
          locator: CBDB:12127
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12127）
          source: &a1
            id: s_oti4ao7RAJqFKfHKWUwR1M
            source_type: api_record
            title: 中国历代人物传记资料库：王東珣（CBDB 12127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12127&o=json
            external_identifier: CBDB:12127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.587Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_F7K8JwnrKD4bYqmefJfSYb
        subject_person_id: p_2uCHcfYqGuUAgEGtf9J4Ma
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1016年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VK4NMrP9WehnZHreEMA6BT
          claim_id: c_F7K8JwnrKD4bYqmefJfSYb
          source_id: s_oti4ao7RAJqFKfHKWUwR1M
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
        id: c_ico787DPCG593nUtDvt8wN
        subject_person_id: p_2uCHcfYqGuUAgEGtf9J4Ma
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1097年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_txq5c83Xi3vacqNn9gyA7i
          claim_id: c_ico787DPCG593nUtDvt8wN
          source_id: s_oti4ao7RAJqFKfHKWUwR1M
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
        id: c_U8g5MeQcTAFFGNLGNJRcvm
        subject_person_id: p_2uCHcfYqGuUAgEGtf9J4Ma
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
        - id: cs_giZcPe3bNBLkLPR6q8LxcZ
          claim_id: c_U8g5MeQcTAFFGNLGNJRcvm
          source_id: s_oti4ao7RAJqFKfHKWUwR1M
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

# 王東珣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王東珣 | accepted |
| birth.date | 1016年 | accepted |
| death.date | 1097年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王東珣（CBDB 12127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12127&o=json)
