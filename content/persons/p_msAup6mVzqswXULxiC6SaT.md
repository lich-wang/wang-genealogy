---
schema: wang-person/v1
id: p_msAup6mVzqswXULxiC6SaT
status: active
merged_into: null
display_name: 王簡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hm3RFATNAxx9uoxkTMFCBF
        subject_person_id: p_msAup6mVzqswXULxiC6SaT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5MX142mHAhhXTDhjJgA2KG
          claim_id: c_hm3RFATNAxx9uoxkTMFCBF
          source_id: s_nVweCivxT9R8mWvnzWjK8v
          stance: supports
          locator: CBDB:126864
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126864）
          source: &a1
            id: s_nVweCivxT9R8mWvnzWjK8v
            source_type: api_record
            title: 中国历代人物传记资料库：王簡（CBDB 126864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126864&o=json
            external_identifier: CBDB:126864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.268Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PV2ZLVNoELbzeUzzjQ98qn
        subject_person_id: p_msAup6mVzqswXULxiC6SaT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1420年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fNvU5xRp9K7bXy1pJX7XJg
          claim_id: c_PV2ZLVNoELbzeUzzjQ98qn
          source_id: s_nVweCivxT9R8mWvnzWjK8v
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Tu93hkEZKcxErPUSzXFoFr
        subject_person_id: p_msAup6mVzqswXULxiC6SaT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1449年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2v2U5njVyRDAD895Bg5fHE
          claim_id: c_Tu93hkEZKcxErPUSzXFoFr
          source_id: s_nVweCivxT9R8mWvnzWjK8v
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a2K6EWt7nnvKBUny6yfa8s
        subject_person_id: p_msAup6mVzqswXULxiC6SaT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簡（1420年—1449年），明人物。籍贯上元，身份为道士。（中国历代人物传记资料库 CBDB 126864）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lJtcmTajuwMCUqR3rqLtNE
          claim_id: c_a2K6EWt7nnvKBUny6yfa8s
          source_id: s_nVweCivxT9R8mWvnzWjK8v
          stance: supports
          locator: CBDB:126864
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王簡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王簡 | accepted |
| birth.date | 1420年 | accepted |
| death.date | 1449年 | accepted |
| bio.summary | 王簡（1420年—1449年），明人物。籍贯上元，身份为道士。（中国历代人物传记资料库 CBDB 126864） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王簡（CBDB 126864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126864&o=json)
