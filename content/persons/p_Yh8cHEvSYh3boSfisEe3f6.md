---
schema: wang-person/v1
id: p_Yh8cHEvSYh3boSfisEe3f6
status: active
merged_into: null
display_name: 王之綱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9poZ3ATRCDZHZZ4g5TN9CL
        subject_person_id: p_Yh8cHEvSYh3boSfisEe3f6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bKwF5ZCwPZQpgqLQYRhAji
          claim_id: c_9poZ3ATRCDZHZZ4g5TN9CL
          source_id: s_MZcsDxnQUMDXo82piTo3cB
          stance: supports
          locator: CBDB:307689
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（307689）
          source: &a1
            id: s_MZcsDxnQUMDXo82piTo3cB
            source_type: api_record
            title: 中国历代人物传记资料库：王之綱（CBDB 307689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307689&o=json
            external_identifier: CBDB:307689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.794Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bo3fSKKVt2PXKGRGoJYeP2
        subject_person_id: p_Yh8cHEvSYh3boSfisEe3f6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之綱，明人物。嘉靖二十三年進士，籍贯石首。（中国历代人物传记资料库 CBDB 307689）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q0ib6edLyKv2_VAHOah9-V
          claim_id: c_Bo3fSKKVt2PXKGRGoJYeP2
          source_id: s_MZcsDxnQUMDXo82piTo3cB
          stance: supports
          locator: CBDB:307689
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

# 王之綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之綱 | accepted |
| bio.summary | 王之綱，明人物。嘉靖二十三年進士，籍贯石首。（中国历代人物传记资料库 CBDB 307689） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之綱（CBDB 307689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307689&o=json)
