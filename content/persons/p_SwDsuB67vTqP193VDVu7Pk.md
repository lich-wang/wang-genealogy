---
schema: wang-person/v1
id: p_SwDsuB67vTqP193VDVu7Pk
status: active
merged_into: null
display_name: 王逸卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nXPn2aq4b53qWVZiw6n16a
        subject_person_id: p_SwDsuB67vTqP193VDVu7Pk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逸卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tEWYUbD2eHTpQ1aWQRd8Up
          claim_id: c_nXPn2aq4b53qWVZiw6n16a
          source_id: s_5BWU5G5x9tf7D5oDHRBoUy
          stance: supports
          locator: CBDB:305708
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（305708）
          source: &a1
            id: s_5BWU5G5x9tf7D5oDHRBoUy
            source_type: api_record
            title: 中国历代人物传记资料库：王逸卿（CBDB 305708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305708&o=json
            external_identifier: CBDB:305708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.744Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zAeeUsSaE5AGM5TXpmtwQk
        subject_person_id: p_SwDsuB67vTqP193VDVu7Pk
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
        - id: cs_KELhjRE8GyKhdWX9FURCvK
          claim_id: c_zAeeUsSaE5AGM5TXpmtwQk
          source_id: s_5BWU5G5x9tf7D5oDHRBoUy
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

# 王逸卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逸卿 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王逸卿（CBDB 305708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305708&o=json)
