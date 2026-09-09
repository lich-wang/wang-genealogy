---
schema: wang-person/v1
id: p_cnN8Qwq9XduFw216Ep1U5h
status: active
merged_into: null
display_name: 王宏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5A9QRjqC2LRkVzNedBC8UB
        subject_person_id: p_cnN8Qwq9XduFw216Ep1U5h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hkw63J77CEFh5RLQwj88P3
          claim_id: c_5A9QRjqC2LRkVzNedBC8UB
          source_id: s_ve93VSJUa1HjZN4arDZM8k
          stance: supports
          locator: CBDB:199956
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199956）
          source: &a1
            id: s_ve93VSJUa1HjZN4arDZM8k
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 199956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199956&o=json
            external_identifier: CBDB:199956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.582Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9EnpjGbDDCxHNtk9AVmtmm
        subject_person_id: p_cnN8Qwq9XduFw216Ep1U5h
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1447年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QFDYPwZ9hyaH1BRfwkCfwG
          claim_id: c_9EnpjGbDDCxHNtk9AVmtmm
          source_id: s_ve93VSJUa1HjZN4arDZM8k
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
        id: c_ug7BVU6h5xVkVZjVnT2k5Q
        subject_person_id: p_cnN8Qwq9XduFw216Ep1U5h
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
        - id: cs_jy4Jstsemit43sWHEVNeNr
          claim_id: c_ug7BVU6h5xVkVZjVnT2k5Q
          source_id: s_ve93VSJUa1HjZN4arDZM8k
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

# 王宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宏 | accepted |
| birth.date | 1447年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宏（CBDB 199956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199956&o=json)
