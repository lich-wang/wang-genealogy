---
schema: wang-person/v1
id: p_ukJ2qr82oEuCTM4WYW3F7J
status: active
merged_into: null
display_name: 王文翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hYNzQ9Q5fHx6A7JpbLPAva
        subject_person_id: p_ukJ2qr82oEuCTM4WYW3F7J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uFYSTZZWH6xEzp71LCbSVf
          claim_id: c_hYNzQ9Q5fHx6A7JpbLPAva
          source_id: s_JEVg3Z186Azmc5PHLLX9Xc
          stance: supports
          locator: CBDB:204105
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204105）
          source: &a1
            id: s_JEVg3Z186Azmc5PHLLX9Xc
            source_type: api_record
            title: 中国历代人物传记资料库：王文翰（CBDB 204105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204105&o=json
            external_identifier: CBDB:204105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.816Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_etTU2qVEmoHZA9vy2LuKgy
        subject_person_id: p_ukJ2qr82oEuCTM4WYW3F7J
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1512年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B5YFT14R8z2YDFB6bj15JY
          claim_id: c_etTU2qVEmoHZA9vy2LuKgy
          source_id: s_JEVg3Z186Azmc5PHLLX9Xc
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
        id: c_15NbLfSUviJUbe1C4v9J7N
        subject_person_id: p_ukJ2qr82oEuCTM4WYW3F7J
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
        - id: cs_q1543ftqzEK7wJgboTPAEY
          claim_id: c_15NbLfSUviJUbe1C4v9J7N
          source_id: s_JEVg3Z186Azmc5PHLLX9Xc
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

# 王文翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文翰 | accepted |
| birth.date | 1512年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文翰（CBDB 204105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204105&o=json)
