---
schema: wang-person/v1
id: p_8sTUn23Edd72FMVNTK1Kj6
status: active
merged_into: null
display_name: 王銛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nPGiGGRznCJYDc68u8MY8H
        subject_person_id: p_8sTUn23Edd72FMVNTK1Kj6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aMr5RPDhAAAX7JDrhARGxk
          claim_id: c_nPGiGGRznCJYDc68u8MY8H
          source_id: s_UvvfraXzW3uXrdyTykrp3o
          stance: supports
          locator: CBDB:343782
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343782）
          source: &a1
            id: s_UvvfraXzW3uXrdyTykrp3o
            source_type: api_record
            title: 中国历代人物传记资料库：王銛（CBDB 343782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343782&o=json
            external_identifier: CBDB:343782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.496Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Px4hLyfQcyc4SpMARg8RQM
        subject_person_id: p_8sTUn23Edd72FMVNTK1Kj6
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
        - id: cs_67u4HKaKGQvvm8w979zABN
          claim_id: c_Px4hLyfQcyc4SpMARg8RQM
          source_id: s_UvvfraXzW3uXrdyTykrp3o
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

# 王銛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銛 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銛（CBDB 343782）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343782&o=json)
