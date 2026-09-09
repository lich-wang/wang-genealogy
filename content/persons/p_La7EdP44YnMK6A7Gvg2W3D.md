---
schema: wang-person/v1
id: p_La7EdP44YnMK6A7Gvg2W3D
status: active
merged_into: null
display_name: 王積
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dNXQVrbXmQWTP22wrXzNhU
        subject_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王積
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hTEyNAhQaCbPVoTbY2vQme
          claim_id: c_dNXQVrbXmQWTP22wrXzNhU
          source_id: s_UzrMNYt4hLiXQhrsqJ6zWr
          stance: supports
          locator: CBDB:126838
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126838）
          source: &a1
            id: s_UzrMNYt4hLiXQhrsqJ6zWr
            source_type: api_record
            title: 中国历代人物传记资料库：王積（CBDB 126838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126838&o=json
            external_identifier: CBDB:126838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.251Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uCvX1NwN9m9WXrBj6RvNsf
        subject_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1492年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qr3FssStQeeWQvTDNFvG3r
          claim_id: c_uCvX1NwN9m9WXrBj6RvNsf
          source_id: s_UzrMNYt4hLiXQhrsqJ6zWr
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
        id: c_J5LSfaBEKkE83TSQ3U8brZ
        subject_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1567年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9JpvvLeXGgm2xbgTF9GmyG
          claim_id: c_J5LSfaBEKkE83TSQ3U8brZ
          source_id: s_UzrMNYt4hLiXQhrsqJ6zWr
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
        id: c_CEgdGoqWw4tNokL5uoVCgp
        subject_person_id: p_La7EdP44YnMK6A7Gvg2W3D
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
        - id: cs_GjX8Gca3PZq2kGuQkyQbV2
          claim_id: c_CEgdGoqWw4tNokL5uoVCgp
          source_id: s_UzrMNYt4hLiXQhrsqJ6zWr
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

# 王積

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王積 | accepted |
| birth.date | 1492年 | accepted |
| death.date | 1567年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王積（CBDB 126838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126838&o=json)
