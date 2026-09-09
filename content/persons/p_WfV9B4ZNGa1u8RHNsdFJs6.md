---
schema: wang-person/v1
id: p_WfV9B4ZNGa1u8RHNsdFJs6
status: active
merged_into: null
display_name: 王瑩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hEM4ZZ5hv55vXUCeD985ZC
        subject_person_id: p_WfV9B4ZNGa1u8RHNsdFJs6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zJuWbSqdQEFUw4o6hg5oJQ
          claim_id: c_hEM4ZZ5hv55vXUCeD985ZC
          source_id: s_iMmEnYxU2ZMyKKJUntiDW2
          stance: supports
          locator: CBDB:200655
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200655）
          source: &a1
            id: s_iMmEnYxU2ZMyKKJUntiDW2
            source_type: api_record
            title: 中国历代人物传记资料库：王瑩（CBDB 200655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200655&o=json
            external_identifier: CBDB:200655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.627Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_72maNZwXfgAXBfQsajNGkW
        subject_person_id: p_WfV9B4ZNGa1u8RHNsdFJs6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1451年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zn4hR8WbKLnqQvxjTd3uXA
          claim_id: c_72maNZwXfgAXBfQsajNGkW
          source_id: s_iMmEnYxU2ZMyKKJUntiDW2
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
        id: c_d83FiGvyLBQ3XY8bDQpXcx
        subject_person_id: p_WfV9B4ZNGa1u8RHNsdFJs6
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
        - id: cs_dK6WMwJ5msXKaG8FTgEea2
          claim_id: c_d83FiGvyLBQ3XY8bDQpXcx
          source_id: s_iMmEnYxU2ZMyKKJUntiDW2
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

# 王瑩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑩 | accepted |
| birth.date | 1451年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑩（CBDB 200655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200655&o=json)
