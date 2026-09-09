---
schema: wang-person/v1
id: p_tHYCzriS6LnJ4HHGiVfcHQ
status: active
merged_into: null
display_name: 王汝清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dAVTVWuitFPpL1gw4eWWeD
        subject_person_id: p_tHYCzriS6LnJ4HHGiVfcHQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zABjm4jV5pL8TSRiRnJdZm
          claim_id: c_dAVTVWuitFPpL1gw4eWWeD
          source_id: s_H4iDGZJiekNbnssCEsjJsY
          stance: supports
          locator: CBDB:201079
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201079）
          source: &a1
            id: s_H4iDGZJiekNbnssCEsjJsY
            source_type: api_record
            title: 中国历代人物传记资料库：王汝清（CBDB 201079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201079&o=json
            external_identifier: CBDB:201079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.651Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rw6mr42i4zLZLiJ1CtYFiX
        subject_person_id: p_tHYCzriS6LnJ4HHGiVfcHQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1460年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5tawGnEN1ZytTxbuKqxwQP
          claim_id: c_rw6mr42i4zLZLiJ1CtYFiX
          source_id: s_H4iDGZJiekNbnssCEsjJsY
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
        id: c_WFwHLQ6m6yPHqFfb5E8eaA
        subject_person_id: p_tHYCzriS6LnJ4HHGiVfcHQ
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
        - id: cs_REzZ1GsBpM93xsp4AYH8eQ
          claim_id: c_WFwHLQ6m6yPHqFfb5E8eaA
          source_id: s_H4iDGZJiekNbnssCEsjJsY
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

# 王汝清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝清 | accepted |
| birth.date | 1460年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝清（CBDB 201079）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201079&o=json)
