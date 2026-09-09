---
schema: wang-person/v1
id: p_5NEx66Cr35Z2KLMjk9Z6Fx
status: active
merged_into: null
display_name: 王大卞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q8pGVyWRUeNsMU892GNrYP
        subject_person_id: p_5NEx66Cr35Z2KLMjk9Z6Fx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大卞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BbKgPGSN2NVip4Eum5eiu3
          claim_id: c_Q8pGVyWRUeNsMU892GNrYP
          source_id: s_BWMGZUuZpGcQdvLqD28PUx
          stance: supports
          locator: CBDB:541377
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（541377）
          source: &a1
            id: s_BWMGZUuZpGcQdvLqD28PUx
            source_type: api_record
            title: 中国历代人物传记资料库：王大卞（CBDB 541377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=541377&o=json
            external_identifier: CBDB:541377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.432Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jp3WDGZFMFCCJUUft728hC
        subject_person_id: p_5NEx66Cr35Z2KLMjk9Z6Fx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EmDVFF6b1Tr3aGUk8ozF9x
          claim_id: c_Jp3WDGZFMFCCJUUft728hC
          source_id: s_BWMGZUuZpGcQdvLqD28PUx
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

# 王大卞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大卞 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大卞（CBDB 541377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=541377&o=json)
