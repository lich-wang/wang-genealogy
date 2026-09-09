---
schema: wang-person/v1
id: p_7Ey4H4S8vj3ZM1kgSLQcBT
status: active
merged_into: null
display_name: 王朝堂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tHbJmXMVJdHV6oywMpsVx7
        subject_person_id: p_7Ey4H4S8vj3ZM1kgSLQcBT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝堂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hjgo1mNwUyC7VFy8teqUrX
          claim_id: c_tHbJmXMVJdHV6oywMpsVx7
          source_id: s_muv2Nj5vRQpJJNBm8e9UbE
          stance: supports
          locator: CBDB:638611
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638611）
          source: &a1
            id: s_muv2Nj5vRQpJJNBm8e9UbE
            source_type: api_record
            title: 中国历代人物传记资料库：王朝堂（CBDB 638611）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638611&o=json
            external_identifier: CBDB:638611
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.693Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E8PCTqyG65UDHKBkg8mor6
        subject_person_id: p_7Ey4H4S8vj3ZM1kgSLQcBT
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
        - id: cs_CHUDM1qzP19sS9FPgPTzZA
          claim_id: c_E8PCTqyG65UDHKBkg8mor6
          source_id: s_muv2Nj5vRQpJJNBm8e9UbE
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

# 王朝堂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝堂 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝堂（CBDB 638611）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638611&o=json)
