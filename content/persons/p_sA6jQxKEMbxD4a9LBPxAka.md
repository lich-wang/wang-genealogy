---
schema: wang-person/v1
id: p_sA6jQxKEMbxD4a9LBPxAka
status: active
merged_into: null
display_name: 王汝安
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8kFoogpMC2xTMU6vx5J727
        subject_person_id: p_sA6jQxKEMbxD4a9LBPxAka
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AASU14kAkx2Bv1wCj5veKK
          claim_id: c_8kFoogpMC2xTMU6vx5J727
          source_id: s_aAuZZJi8VdPUfS1VHwHUpb
          stance: supports
          locator: CBDB:505416
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（505416）
          source: &a1
            id: s_aAuZZJi8VdPUfS1VHwHUpb
            source_type: api_record
            title: 中国历代人物传记资料库：王汝安（CBDB 505416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=505416&o=json
            external_identifier: CBDB:505416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.961Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RBjfHCmjQGATLBrLfSmLyF
        subject_person_id: p_sA6jQxKEMbxD4a9LBPxAka
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
        - id: cs_CeRYSAQnbcgSrUAkeDvjHU
          claim_id: c_RBjfHCmjQGATLBrLfSmLyF
          source_id: s_aAuZZJi8VdPUfS1VHwHUpb
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

# 王汝安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝安 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝安（CBDB 505416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=505416&o=json)
