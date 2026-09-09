---
schema: wang-person/v1
id: p_pSQAMEfM1fVPfB2wyacFov
status: active
merged_into: null
display_name: 王吉人
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BMu7U49tYJt97XkVZ38Tgu
        subject_person_id: p_pSQAMEfM1fVPfB2wyacFov
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉人
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H1N374Rzvp1VbNcCq5NLjn
          claim_id: c_BMu7U49tYJt97XkVZ38Tgu
          source_id: s_NNo358ugD6P4m2Zp9MzdmD
          stance: supports
          locator: CBDB:60007
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（60007）
          source: &a1
            id: s_NNo358ugD6P4m2Zp9MzdmD
            source_type: api_record
            title: 中国历代人物传记资料库：王吉人（CBDB 60007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60007&o=json
            external_identifier: CBDB:60007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_v822n28dHuKFWfJ23Phif5
        subject_person_id: p_pSQAMEfM1fVPfB2wyacFov
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1613年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xmi23v6wEiTmx96Bq35WPN
          claim_id: c_v822n28dHuKFWfJ23Phif5
          source_id: s_NNo358ugD6P4m2Zp9MzdmD
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
        id: c_2K7DS8cS4obRYVkjLbpRCC
        subject_person_id: p_pSQAMEfM1fVPfB2wyacFov
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1668年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i7nLBXE4WQktVBGTN35BJZ
          claim_id: c_2K7DS8cS4obRYVkjLbpRCC
          source_id: s_NNo358ugD6P4m2Zp9MzdmD
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
        id: c_UrUpxSxaWQfAVSTGhYGDWF
        subject_person_id: p_pSQAMEfM1fVPfB2wyacFov
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
        - id: cs_yDT5xqTJEhx8XJrW7HCGCL
          claim_id: c_UrUpxSxaWQfAVSTGhYGDWF
          source_id: s_NNo358ugD6P4m2Zp9MzdmD
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

# 王吉人

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王吉人 | accepted |
| birth.date | 1613年 | accepted |
| death.date | 1668年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王吉人（CBDB 60007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60007&o=json)
