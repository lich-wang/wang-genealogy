---
schema: wang-person/v1
id: p_WimAa966h9CQCAcmYPid3X
status: active
merged_into: null
display_name: 王鼎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AMDLhJUzQfH6USrePwZi6U
        subject_person_id: p_WimAa966h9CQCAcmYPid3X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_19nb8PssE33sCSxPHymi5X
          claim_id: c_AMDLhJUzQfH6USrePwZi6U
          source_id: s_hQVr1HDSxyHMEqFa65PxWh
          stance: supports
          locator: CBDB:322416
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（322416）
          source: &a1
            id: s_hQVr1HDSxyHMEqFa65PxWh
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 322416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322416&o=json
            external_identifier: CBDB:322416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.123Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BJfeoVL7DErMyHKGwRhtnB
        subject_person_id: p_WimAa966h9CQCAcmYPid3X
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
        - id: cs_56UMkbH71B5Lqe3f6UKDV2
          claim_id: c_BJfeoVL7DErMyHKGwRhtnB
          source_id: s_hQVr1HDSxyHMEqFa65PxWh
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

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 322416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322416&o=json)
