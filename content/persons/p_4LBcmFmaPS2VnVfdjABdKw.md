---
schema: wang-person/v1
id: p_4LBcmFmaPS2VnVfdjABdKw
status: active
merged_into: null
display_name: 王錱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PgzSUDMeZVPJU5xacVL6hP
        subject_person_id: p_4LBcmFmaPS2VnVfdjABdKw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FCdn7FcFXsF6KhAbp7LssL
          claim_id: c_PgzSUDMeZVPJU5xacVL6hP
          source_id: s_ap7EabmaHPEY44fFFf3zJY
          stance: supports
          locator: CBDB:69460
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69460）
          source: &a1
            id: s_ap7EabmaHPEY44fFFf3zJY
            source_type: api_record
            title: 中国历代人物传记资料库：王錱（CBDB 69460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69460&o=json
            external_identifier: CBDB:69460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.280Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qZ81v3ztPVo9DN8gAtbc6y
        subject_person_id: p_4LBcmFmaPS2VnVfdjABdKw
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
        - id: cs_sNhja2j3J34kWLJyGuTBBC
          claim_id: c_qZ81v3ztPVo9DN8gAtbc6y
          source_id: s_ap7EabmaHPEY44fFFf3zJY
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
        id: c_TSAaVBF74y33hyPYjDLpoD
        subject_person_id: p_4LBcmFmaPS2VnVfdjABdKw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1857年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_agVimdR2oJ99tz8bHqzjgV
          claim_id: c_TSAaVBF74y33hyPYjDLpoD
          source_id: s_ap7EabmaHPEY44fFFf3zJY
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
        id: c_LLkBCUC1ERAP4iiFqCYfMh
        subject_person_id: p_4LBcmFmaPS2VnVfdjABdKw
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
        - id: cs_SJ7fLgh3dNJ5RJgB5nGhEx
          claim_id: c_LLkBCUC1ERAP4iiFqCYfMh
          source_id: s_ap7EabmaHPEY44fFFf3zJY
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

# 王錱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錱 | accepted |
| birth.date | 1825年 | accepted |
| death.date | 1857年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錱（CBDB 69460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69460&o=json)
