---
schema: wang-person/v1
id: p_ncJMsYgNL3hQVCtFzxU5EN
status: active
merged_into: null
display_name: 王子輿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TppunX68dSmLxAD6aBJL6B
        subject_person_id: p_ncJMsYgNL3hQVCtFzxU5EN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子輿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PyUEDp5yC9yo7EnojQ2jLx
          claim_id: c_TppunX68dSmLxAD6aBJL6B
          source_id: s_fP78VdDt5bTzzyVF9Kg6cW
          stance: supports
          locator: CBDB:1912
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1912）
          source: &a1
            id: s_fP78VdDt5bTzzyVF9Kg6cW
            source_type: api_record
            title: 中国历代人物传记资料库：王子輿（CBDB 1912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1912&o=json
            external_identifier: CBDB:1912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.391Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_LesfUcmeTkP4nXDPGBmkD1
        subject_person_id: p_ncJMsYgNL3hQVCtFzxU5EN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1002年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pYsGFsStNX9sbusgPiAkUT
          claim_id: c_LesfUcmeTkP4nXDPGBmkD1
          source_id: s_fP78VdDt5bTzzyVF9Kg6cW
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
        id: c_QfcGwjbZcDzarH4hYmyu8W
        subject_person_id: p_ncJMsYgNL3hQVCtFzxU5EN
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
        - id: cs_65fKs3v6rEAMHSd4k6X2pe
          claim_id: c_QfcGwjbZcDzarH4hYmyu8W
          source_id: s_fP78VdDt5bTzzyVF9Kg6cW
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

# 王子輿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子輿 | accepted |
| death.date | 1002年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子輿（CBDB 1912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1912&o=json)
