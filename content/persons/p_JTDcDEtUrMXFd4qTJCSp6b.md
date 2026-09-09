---
schema: wang-person/v1
id: p_JTDcDEtUrMXFd4qTJCSp6b
status: active
merged_into: null
display_name: 王承榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZaW17GFLxXmMnpbwbEDkbn
        subject_person_id: p_JTDcDEtUrMXFd4qTJCSp6b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Yg5TRQHyT5yWJiMqk7Q4fK
          claim_id: c_ZaW17GFLxXmMnpbwbEDkbn
          source_id: s_x7RJgMfwhrPzFyny9C65ZT
          stance: supports
          locator: CBDB:185615
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（185615）
          source: &a1
            id: s_x7RJgMfwhrPzFyny9C65ZT
            source_type: api_record
            title: 中国历代人物传记资料库：王承榮（CBDB 185615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185615&o=json
            external_identifier: CBDB:185615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.248Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ZqWr2p631ZCU18C4AN6Rgh
        subject_person_id: p_JTDcDEtUrMXFd4qTJCSp6b
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 829年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HsfV9yHS13Pz9hLaYuYe3L
          claim_id: c_ZqWr2p631ZCU18C4AN6Rgh
          source_id: s_x7RJgMfwhrPzFyny9C65ZT
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
        id: c_GBubsDbuetbUUSK1c1SnqZ
        subject_person_id: p_JTDcDEtUrMXFd4qTJCSp6b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iVkmFVjX4q7X3GSDeim3uF
          claim_id: c_GBubsDbuetbUUSK1c1SnqZ
          source_id: s_x7RJgMfwhrPzFyny9C65ZT
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

# 王承榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承榮 | accepted |
| death.date | 829年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承榮（CBDB 185615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185615&o=json)
