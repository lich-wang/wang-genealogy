---
schema: wang-person/v1
id: p_ME2jsgBkJ6bMketskkKisN
status: active
merged_into: null
display_name: 王亮功
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L98XR1gKHVwNXDrZwHuWh4
        subject_person_id: p_ME2jsgBkJ6bMketskkKisN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亮功
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gEu4KpfS7ajBhgpAJZKAMA
          claim_id: c_L98XR1gKHVwNXDrZwHuWh4
          source_id: s_yUJpB59QnKu97gnT2GuQqb
          stance: supports
          locator: CBDB:22932
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22932）
          source: &a1
            id: s_yUJpB59QnKu97gnT2GuQqb
            source_type: api_record
            title: 中国历代人物传记资料库：王亮功（CBDB 22932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22932&o=json
            external_identifier: CBDB:22932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.866Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Myg2asSQC8Vp3Y6rRpzr6z
        subject_person_id: p_ME2jsgBkJ6bMketskkKisN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1104年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MUcdJREf9V5ByxpsxbauLo
          claim_id: c_Myg2asSQC8Vp3Y6rRpzr6z
          source_id: s_yUJpB59QnKu97gnT2GuQqb
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
        id: c_4R6nKhz5oQ2mP9GvehbjYj
        subject_person_id: p_ME2jsgBkJ6bMketskkKisN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1149年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZB4vDJ3XqYya6BN7abpnLY
          claim_id: c_4R6nKhz5oQ2mP9GvehbjYj
          source_id: s_yUJpB59QnKu97gnT2GuQqb
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
        id: c_ZCR5ud6gEni7GUjbN5mCFx
        subject_person_id: p_ME2jsgBkJ6bMketskkKisN
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
        - id: cs_9PmDUfxpp8vHqdNqN8QRCK
          claim_id: c_ZCR5ud6gEni7GUjbN5mCFx
          source_id: s_yUJpB59QnKu97gnT2GuQqb
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

# 王亮功

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亮功 | accepted |
| birth.date | 1104年 | accepted |
| death.date | 1149年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王亮功（CBDB 22932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22932&o=json)
