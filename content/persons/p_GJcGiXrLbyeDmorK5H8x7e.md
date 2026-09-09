---
schema: wang-person/v1
id: p_GJcGiXrLbyeDmorK5H8x7e
status: active
merged_into: null
display_name: 王國光
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Npv1LWrnA732v9GUBFgEQ4
        subject_person_id: p_GJcGiXrLbyeDmorK5H8x7e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bHTJ1cmPNEwVjSS8G1bnQ1
          claim_id: c_Npv1LWrnA732v9GUBFgEQ4
          source_id: s_UmBQHNtWVVDBPhh7A1VnwS
          stance: supports
          locator: CBDB:71748
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71748）
          source: &a1
            id: s_UmBQHNtWVVDBPhh7A1VnwS
            source_type: api_record
            title: 中国历代人物传记资料库：王國光（CBDB 71748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71748&o=json
            external_identifier: CBDB:71748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.854Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7HfDY3UnaySMb5wzpxEALN
        subject_person_id: p_GJcGiXrLbyeDmorK5H8x7e
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1787年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6F2QMg5Ykg7jntiR6QWaKV
          claim_id: c_7HfDY3UnaySMb5wzpxEALN
          source_id: s_UmBQHNtWVVDBPhh7A1VnwS
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
        id: c_RLcuZ4icHdhecne1yLMACj
        subject_person_id: p_GJcGiXrLbyeDmorK5H8x7e
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1844年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aKFgSPGZoa4EF6o2j2m533
          claim_id: c_RLcuZ4icHdhecne1yLMACj
          source_id: s_UmBQHNtWVVDBPhh7A1VnwS
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
        id: c_7YtQAyrvC6ap4XCmRgFczS
        subject_person_id: p_GJcGiXrLbyeDmorK5H8x7e
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
        - id: cs_2vEECenjULUg3rVy16kZ3Y
          claim_id: c_7YtQAyrvC6ap4XCmRgFczS
          source_id: s_UmBQHNtWVVDBPhh7A1VnwS
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

# 王國光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國光 | accepted |
| birth.date | 1787年 | accepted |
| death.date | 1844年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國光（CBDB 71748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71748&o=json)
