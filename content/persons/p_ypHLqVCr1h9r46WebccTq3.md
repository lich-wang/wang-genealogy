---
schema: wang-person/v1
id: p_ypHLqVCr1h9r46WebccTq3
status: active
merged_into: null
display_name: 王國璽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nDqL8VkDaonHzT6VEfdGS3
        subject_person_id: p_ypHLqVCr1h9r46WebccTq3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RPPoB1c5yQFNEV2AbVPXNX
          claim_id: c_nDqL8VkDaonHzT6VEfdGS3
          source_id: s_Q8zeLzv1fBSkV6h58tkHKF
          stance: supports
          locator: CBDB:458396
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（458396）
          source: &a1
            id: s_Q8zeLzv1fBSkV6h58tkHKF
            source_type: api_record
            title: 中国历代人物传记资料库：王國璽（CBDB 458396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458396&o=json
            external_identifier: CBDB:458396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.649Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c1PU4LVLAVq5uB1DtPXZ1z
        subject_person_id: p_ypHLqVCr1h9r46WebccTq3
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
        - id: cs_jPtMrCG2YHNCdR95WyraA3
          claim_id: c_c1PU4LVLAVq5uB1DtPXZ1z
          source_id: s_Q8zeLzv1fBSkV6h58tkHKF
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

# 王國璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國璽 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國璽（CBDB 458396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458396&o=json)
