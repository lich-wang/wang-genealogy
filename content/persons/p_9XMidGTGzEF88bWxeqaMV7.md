---
schema: wang-person/v1
id: p_9XMidGTGzEF88bWxeqaMV7
status: active
merged_into: null
display_name: 王尚辰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iQL3A3pmHR64jhcBa5arLF
        subject_person_id: p_9XMidGTGzEF88bWxeqaMV7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚辰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_54tFZQxv3tFjpMBP6ELwV1
          claim_id: c_iQL3A3pmHR64jhcBa5arLF
          source_id: s_jvRKRwaEHnmiWr3XezsvQE
          stance: supports
          locator: CBDB:71746
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71746）
          source: &a1
            id: s_jvRKRwaEHnmiWr3XezsvQE
            source_type: api_record
            title: 中国历代人物传记资料库：王尚辰（CBDB 71746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71746&o=json
            external_identifier: CBDB:71746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.853Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MTg9xYyymctvFZuDHNB3nf
        subject_person_id: p_9XMidGTGzEF88bWxeqaMV7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1825年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EaXsehftmvQDRsP67PyrP4
          claim_id: c_MTg9xYyymctvFZuDHNB3nf
          source_id: s_jvRKRwaEHnmiWr3XezsvQE
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
        id: c_8j7Gq43YRHdJPDhL29DDnh
        subject_person_id: p_9XMidGTGzEF88bWxeqaMV7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1902年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FRaDLVXELLiM8CewgumJ5H
          claim_id: c_8j7Gq43YRHdJPDhL29DDnh
          source_id: s_jvRKRwaEHnmiWr3XezsvQE
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
        id: c_ST2wmRedQ1pSmiQEKrE1Rg
        subject_person_id: p_9XMidGTGzEF88bWxeqaMV7
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
        - id: cs_PC6K8XCvKafnhpX6inmXxV
          claim_id: c_ST2wmRedQ1pSmiQEKrE1Rg
          source_id: s_jvRKRwaEHnmiWr3XezsvQE
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

# 王尚辰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚辰 | accepted |
| birth.date | 1825年 | accepted |
| death.date | 1902年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王尚辰（CBDB 71746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71746&o=json)
