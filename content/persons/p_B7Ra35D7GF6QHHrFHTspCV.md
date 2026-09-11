---
schema: wang-person/v1
id: p_B7Ra35D7GF6QHHrFHTspCV
status: active
merged_into: null
display_name: 王洎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZkiTZ2y7Es3GeLLWvm15Rb
        subject_person_id: p_B7Ra35D7GF6QHHrFHTspCV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ywj38VsBqKfPZ6TXuK928A
          claim_id: c_ZkiTZ2y7Es3GeLLWvm15Rb
          source_id: s_7tnVLQEWRjiirHbTFLxyUr
          stance: supports
          locator: CBDB:156474
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（156474）
          source: &a1
            id: s_7tnVLQEWRjiirHbTFLxyUr
            source_type: api_record
            title: 中国历代人物传记资料库：王洎（CBDB 156474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156474&o=json
            external_identifier: CBDB:156474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.895Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_muNsT7ZMcJhfdVkxdfqj9o
        subject_person_id: p_B7Ra35D7GF6QHHrFHTspCV
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
        - id: cs_NC13zx6CcSq46USvkKEe6Q
          claim_id: c_muNsT7ZMcJhfdVkxdfqj9o
          source_id: s_7tnVLQEWRjiirHbTFLxyUr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_V1fLIHw_BN8f88zloffRGf
        subject_person_id: p_2KfZ4qZPoW4uxG2E5viFAA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B7Ra35D7GF6QHHrFHTspCV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HMkSeipRVkD5kZyLZJ48ov
          claim_id: c_V1fLIHw_BN8f88zloffRGf
          source_id: s_7tnVLQEWRjiirHbTFLxyUr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yuanhe 34：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2KfZ4qZPoW4uxG2E5viFAA
        status: active
        display_name: 王大劍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王洎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洎 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2KfZ4qZPoW4uxG2E5viFAA | 王大劍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洎（CBDB 156474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156474&o=json)
