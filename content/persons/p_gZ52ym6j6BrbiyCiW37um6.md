---
schema: wang-person/v1
id: p_gZ52ym6j6BrbiyCiW37um6
status: active
merged_into: null
display_name: 王鏞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M48PPJ54JQYXyDR5onxVT3
        subject_person_id: p_gZ52ym6j6BrbiyCiW37um6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5NDbU87Xqg9E8g1tk3fQPH
          claim_id: c_M48PPJ54JQYXyDR5onxVT3
          source_id: s_reN6Pi6WNnrPExPjd6RoZi
          stance: supports
          locator: CBDB:465669
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（465669）
          source: &a1
            id: s_reN6Pi6WNnrPExPjd6RoZi
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 465669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465669&o=json
            external_identifier: CBDB:465669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.945Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4qGBw2ok1WDsLxvVrD6XqS
        subject_person_id: p_gZ52ym6j6BrbiyCiW37um6
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
        - id: cs_ToESUvYytn4qEo4J4RaeSN
          claim_id: c_4qGBw2ok1WDsLxvVrD6XqS
          source_id: s_reN6Pi6WNnrPExPjd6RoZi
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

# 王鏞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏞 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鏞（CBDB 465669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465669&o=json)
