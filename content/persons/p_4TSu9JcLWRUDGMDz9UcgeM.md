---
schema: wang-person/v1
id: p_4TSu9JcLWRUDGMDz9UcgeM
status: active
merged_into: null
display_name: 王得魁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kYCGc3zM4JKuJ71QJD1m2D
        subject_person_id: p_4TSu9JcLWRUDGMDz9UcgeM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得魁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9d8iLkAUq3qy8e2T4k2sQJ
          claim_id: c_kYCGc3zM4JKuJ71QJD1m2D
          source_id: s_cSHC1aqH76RjDMPPc7ehfM
          stance: supports
          locator: CBDB:69352
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69352）
          source: &a1
            id: s_cSHC1aqH76RjDMPPc7ehfM
            source_type: api_record
            title: 中国历代人物传记资料库：王得魁（CBDB 69352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69352&o=json
            external_identifier: CBDB:69352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.107Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_fG2xQNAjRVqdod5CEVntmj
        subject_person_id: p_4TSu9JcLWRUDGMDz9UcgeM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1893年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kLYMnQ3ACVgXvEnN2oVTxx
          claim_id: c_fG2xQNAjRVqdod5CEVntmj
          source_id: s_cSHC1aqH76RjDMPPc7ehfM
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
        id: c_AkTCd83mEP6yKcfUGducbN
        subject_person_id: p_4TSu9JcLWRUDGMDz9UcgeM
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
        - id: cs_5mjrD8Z8kSfGZAyNBJoyW2
          claim_id: c_AkTCd83mEP6yKcfUGducbN
          source_id: s_cSHC1aqH76RjDMPPc7ehfM
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

# 王得魁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得魁 | accepted |
| death.date | 1893年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王得魁（CBDB 69352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69352&o=json)
