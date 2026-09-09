---
schema: wang-person/v1
id: p_Z4hzFiH9Ucmy4Qy5Pznb81
status: active
merged_into: null
display_name: 王宗侃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_817x2EzhE1gV2NNLDARXrt
        subject_person_id: p_Z4hzFiH9Ucmy4Qy5Pznb81
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗侃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iR6fHv4HeyM84LuacA2KG7
          claim_id: c_817x2EzhE1gV2NNLDARXrt
          source_id: s_2y9tE9ueVs32h1ya1Dz2qM
          stance: supports
          locator: CBDB:383744
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（383744）
          source: &a1
            id: s_2y9tE9ueVs32h1ya1Dz2qM
            source_type: api_record
            title: 中国历代人物传记资料库：王宗侃（CBDB 383744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383744&o=json
            external_identifier: CBDB:383744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.856Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MjF1N6XnDKVFAYK66DZHAf
        subject_person_id: p_Z4hzFiH9Ucmy4Qy5Pznb81
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MHMSyQvFmYXpv6ScX5HvcR
          claim_id: c_MjF1N6XnDKVFAYK66DZHAf
          source_id: s_2y9tE9ueVs32h1ya1Dz2qM
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

# 王宗侃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗侃 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗侃（CBDB 383744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383744&o=json)
