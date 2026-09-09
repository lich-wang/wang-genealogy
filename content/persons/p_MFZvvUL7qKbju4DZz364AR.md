---
schema: wang-person/v1
id: p_MFZvvUL7qKbju4DZz364AR
status: active
merged_into: null
display_name: 王璽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gAi5rz7aRoCbkgATBA8HkE
        subject_person_id: p_MFZvvUL7qKbju4DZz364AR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hw3Du2F2tuqFBBCJxpRWB3
          claim_id: c_gAi5rz7aRoCbkgATBA8HkE
          source_id: s_hFGZTZiocFpFr1rYomPVng
          stance: supports
          locator: CBDB:67594
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67594）
          source: &a1
            id: s_hFGZTZiocFpFr1rYomPVng
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 67594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67594&o=json
            external_identifier: CBDB:67594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.998Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_e6reM6FnHSXhPKYdm9fUyE
        subject_person_id: p_MFZvvUL7qKbju4DZz364AR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1488年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nG22wsjKnYfvvKZ6RhBz11
          claim_id: c_e6reM6FnHSXhPKYdm9fUyE
          source_id: s_hFGZTZiocFpFr1rYomPVng
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
        id: c_7Y9CAvWmnG6NCpMCh8hjXs
        subject_person_id: p_MFZvvUL7qKbju4DZz364AR
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
        - id: cs_mS5uEvDr5f2mTMX2E4ox55
          claim_id: c_7Y9CAvWmnG6NCpMCh8hjXs
          source_id: s_hFGZTZiocFpFr1rYomPVng
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

# 王璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璽 | accepted |
| death.date | 1488年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璽（CBDB 67594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67594&o=json)
