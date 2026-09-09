---
schema: wang-person/v1
id: p_24rBZdMeh1F86V1qpGw9Uh
status: active
merged_into: null
display_name: 王光祖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1ZpAxHv6Ksj59k6qxzL3S8
        subject_person_id: p_24rBZdMeh1F86V1qpGw9Uh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2yxDGotAA2Y7EVCB27dH3s
          claim_id: c_1ZpAxHv6Ksj59k6qxzL3S8
          source_id: s_DnsEW15ZWP6XZdHmoD23Rn
          stance: supports
          locator: CBDB:636268
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636268）
          source: &a1
            id: s_DnsEW15ZWP6XZdHmoD23Rn
            source_type: api_record
            title: 中国历代人物传记资料库：王光祖（CBDB 636268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636268&o=json
            external_identifier: CBDB:636268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.135Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t9tNvXmiNx5eMAg3m9C7z6
        subject_person_id: p_24rBZdMeh1F86V1qpGw9Uh
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
        - id: cs_Vwf48SJNu1saZLb36q7Huf
          claim_id: c_t9tNvXmiNx5eMAg3m9C7z6
          source_id: s_DnsEW15ZWP6XZdHmoD23Rn
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

# 王光祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光祖 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光祖（CBDB 636268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636268&o=json)
