---
schema: wang-person/v1
id: p_5NFCpq12ps2mNvfWZTgJQw
status: active
merged_into: null
display_name: 王麟書
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hStTtACjv3cB9wVMXv2VHg
        subject_person_id: p_5NFCpq12ps2mNvfWZTgJQw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟書
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mG98nCpRa9CLnqDzsFzBde
          claim_id: c_hStTtACjv3cB9wVMXv2VHg
          source_id: s_C2cBG56K2Z5F2fJgNaDsfC
          stance: supports
          locator: CBDB:500487
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（500487）
          source: &a1
            id: s_C2cBG56K2Z5F2fJgNaDsfC
            source_type: api_record
            title: 中国历代人物传记资料库：王麟書（CBDB 500487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500487&o=json
            external_identifier: CBDB:500487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.800Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ykz13N2WSjFKQEWWBJYsSf
        subject_person_id: p_5NFCpq12ps2mNvfWZTgJQw
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
        - id: cs_9PEVWLvFi7E6Mt8pN1gvgA
          claim_id: c_ykz13N2WSjFKQEWWBJYsSf
          source_id: s_C2cBG56K2Z5F2fJgNaDsfC
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

# 王麟書

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麟書 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王麟書（CBDB 500487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500487&o=json)
