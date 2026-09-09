---
schema: wang-person/v1
id: p_6CZ2S5K7nrKPB2axD2JU9t
status: active
merged_into: null
display_name: 王承曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nNcBfAQECSp7Kckm7PNUAQ
        subject_person_id: p_6CZ2S5K7nrKPB2axD2JU9t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4gkjj2sZoUhQATE6jzqX2M
          claim_id: c_nNcBfAQECSp7Kckm7PNUAQ
          source_id: s_Ndai57tKCcPqRFyXjmmzaG
          stance: supports
          locator: CBDB:71831
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71831）
          source: &a1
            id: s_Ndai57tKCcPqRFyXjmmzaG
            source_type: api_record
            title: 中国历代人物传记资料库：王承曾（CBDB 71831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71831&o=json
            external_identifier: CBDB:71831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.889Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gXNASKh9yghFHM184Bwvz5
        subject_person_id: p_6CZ2S5K7nrKPB2axD2JU9t
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1686年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WF7q55ywNAYtFcGt7Wr8HD
          claim_id: c_gXNASKh9yghFHM184Bwvz5
          source_id: s_Ndai57tKCcPqRFyXjmmzaG
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
        id: c_H4TP6HEJ1iahi2QVB5P8Nd
        subject_person_id: p_6CZ2S5K7nrKPB2axD2JU9t
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1752年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_38RTgxKv61VuS5HZm38S5G
          claim_id: c_H4TP6HEJ1iahi2QVB5P8Nd
          source_id: s_Ndai57tKCcPqRFyXjmmzaG
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
        id: c_N4wmc6N3y6izEW5C7pBCgW
        subject_person_id: p_6CZ2S5K7nrKPB2axD2JU9t
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
        - id: cs_M26LaeBRx69wSPxmWnM7J1
          claim_id: c_N4wmc6N3y6izEW5C7pBCgW
          source_id: s_Ndai57tKCcPqRFyXjmmzaG
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

# 王承曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承曾 | accepted |
| birth.date | 1686年 | accepted |
| death.date | 1752年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承曾（CBDB 71831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71831&o=json)
