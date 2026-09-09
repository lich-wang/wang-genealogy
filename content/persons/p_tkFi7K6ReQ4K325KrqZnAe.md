---
schema: wang-person/v1
id: p_tkFi7K6ReQ4K325KrqZnAe
status: active
merged_into: null
display_name: 王相
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MqdbZ5AcX4nJCL213sXFSu
        subject_person_id: p_tkFi7K6ReQ4K325KrqZnAe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ffSjHUz8FBrUyUs1qBquMA
          claim_id: c_MqdbZ5AcX4nJCL213sXFSu
          source_id: s_Gx5rz9c5arrbu2e3oyu71K
          stance: supports
          locator: CBDB:68072
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68072）
          source: &a1
            id: s_Gx5rz9c5arrbu2e3oyu71K
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 68072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68072&o=json
            external_identifier: CBDB:68072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.049Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TBhMWWMkXBCMKc8PP9iXuj
        subject_person_id: p_tkFi7K6ReQ4K325KrqZnAe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1488年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XqkJ17XvAv5HraPZeVBUFC
          claim_id: c_TBhMWWMkXBCMKc8PP9iXuj
          source_id: s_Gx5rz9c5arrbu2e3oyu71K
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
        id: c_YXbQJVxRi2FvFKpz48sQMN
        subject_person_id: p_tkFi7K6ReQ4K325KrqZnAe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1524年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fbmk5MD957sVNhYEkvQMEE
          claim_id: c_YXbQJVxRi2FvFKpz48sQMN
          source_id: s_Gx5rz9c5arrbu2e3oyu71K
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
        id: c_WiMEXUFb7eGkHgpGPRxcMR
        subject_person_id: p_tkFi7K6ReQ4K325KrqZnAe
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
        - id: cs_pvH5wuu34hDNPpKcV2wvjb
          claim_id: c_WiMEXUFb7eGkHgpGPRxcMR
          source_id: s_Gx5rz9c5arrbu2e3oyu71K
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

# 王相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相 | accepted |
| birth.date | 1488年 | accepted |
| death.date | 1524年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王相（CBDB 68072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68072&o=json)
