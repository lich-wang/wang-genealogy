---
schema: wang-person/v1
id: p_A9vJuh2UYD5eWvCSDmg7tj
status: active
merged_into: null
display_name: 王疇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aXPzuBYZ52YgryGK42ywoP
        subject_person_id: p_A9vJuh2UYD5eWvCSDmg7tj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王疇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4L3iu2FAH2rnnfVRGcMjge
          claim_id: c_aXPzuBYZ52YgryGK42ywoP
          source_id: s_QCs4gUzQgKAbYYevDeG3Qu
          stance: supports
          locator: CBDB:264225
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264225）
          source: &a1
            id: s_QCs4gUzQgKAbYYevDeG3Qu
            source_type: api_record
            title: 中国历代人物传记资料库：王疇（CBDB 264225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264225&o=json
            external_identifier: CBDB:264225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.632Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EFwUjDMZwbeMRqFCxvxk33
        subject_person_id: p_A9vJuh2UYD5eWvCSDmg7tj
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
        - id: cs_j2NMfDjX6V2GELvVEQ2sTZ
          claim_id: c_EFwUjDMZwbeMRqFCxvxk33
          source_id: s_QCs4gUzQgKAbYYevDeG3Qu
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

# 王疇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王疇 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王疇（CBDB 264225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264225&o=json)
