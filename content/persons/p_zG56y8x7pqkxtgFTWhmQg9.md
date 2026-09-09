---
schema: wang-person/v1
id: p_zG56y8x7pqkxtgFTWhmQg9
status: active
merged_into: null
display_name: 王誼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gBD12CHhWCVjzc7JqK2kiT
        subject_person_id: p_zG56y8x7pqkxtgFTWhmQg9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aMhqC29DpJ6BHnAReaT5VR
          claim_id: c_gBD12CHhWCVjzc7JqK2kiT
          source_id: s_YDC6EMZ66CnAuQqwFq9M51
          stance: supports
          locator: CBDB:338659
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（338659）
          source: &a1
            id: s_YDC6EMZ66CnAuQqwFq9M51
            source_type: api_record
            title: 中国历代人物传记资料库：王誼（CBDB 338659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338659&o=json
            external_identifier: CBDB:338659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.558Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qPcxWzcxXJzv9SwYWwiAWG
        subject_person_id: p_zG56y8x7pqkxtgFTWhmQg9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1425年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qXbJdnPsWiSpvNhQpt5dtR
          claim_id: c_qPcxWzcxXJzv9SwYWwiAWG
          source_id: s_YDC6EMZ66CnAuQqwFq9M51
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
        id: c_JaKzGr6XJDwr4HZ7oRp4UK
        subject_person_id: p_zG56y8x7pqkxtgFTWhmQg9
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
        - id: cs_rgfQqMGtyvJnMoJnTjEDmG
          claim_id: c_JaKzGr6XJDwr4HZ7oRp4UK
          source_id: s_YDC6EMZ66CnAuQqwFq9M51
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

# 王誼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誼 | accepted |
| birth.date | 1425年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王誼（CBDB 338659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338659&o=json)
