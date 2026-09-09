---
schema: wang-person/v1
id: p_Wz1dyZuHE3HHx85Y9QSDRx
status: active
merged_into: null
display_name: 王曰賡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CVr9uSWLs258G2fWGQMDW3
        subject_person_id: p_Wz1dyZuHE3HHx85Y9QSDRx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰賡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ttQSoV9Ah5NKJFWgb2ByBx
          claim_id: c_CVr9uSWLs258G2fWGQMDW3
          source_id: s_amDYR2JwcuruMSFCG2hGyK
          stance: supports
          locator: CBDB:71399
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71399）
          source: &a1
            id: s_amDYR2JwcuruMSFCG2hGyK
            source_type: api_record
            title: 中国历代人物传记资料库：王曰賡（CBDB 71399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71399&o=json
            external_identifier: CBDB:71399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.640Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_G2dw2mRCciviiESBUUD6zA
        subject_person_id: p_Wz1dyZuHE3HHx85Y9QSDRx
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1715年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WP6GE1dQGqfHJtyCTyxCAv
          claim_id: c_G2dw2mRCciviiESBUUD6zA
          source_id: s_amDYR2JwcuruMSFCG2hGyK
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
        id: c_XeTCAZk6nZuYwtqQnAsBB3
        subject_person_id: p_Wz1dyZuHE3HHx85Y9QSDRx
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
        - id: cs_ZSZzdXLR4iP2Ha7jpGdYA4
          claim_id: c_XeTCAZk6nZuYwtqQnAsBB3
          source_id: s_amDYR2JwcuruMSFCG2hGyK
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

# 王曰賡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曰賡 | accepted |
| birth.date | 1715年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王曰賡（CBDB 71399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71399&o=json)
