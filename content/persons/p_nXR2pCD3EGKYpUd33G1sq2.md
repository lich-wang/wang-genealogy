---
schema: wang-person/v1
id: p_nXR2pCD3EGKYpUd33G1sq2
status: active
merged_into: null
display_name: 王綽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fSiNh5dw98e72y3dEahMsA
        subject_person_id: p_nXR2pCD3EGKYpUd33G1sq2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LMu1yW4HJKwyPt9ahALPee
          claim_id: c_fSiNh5dw98e72y3dEahMsA
          source_id: s_HSFbucCv43UGJyp8WUKAwj
          stance: supports
          locator: CBDB:119722
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（119722）
          source: &a1
            id: s_HSFbucCv43UGJyp8WUKAwj
            source_type: api_record
            title: 中国历代人物传记资料库：王綽（CBDB 119722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119722&o=json
            external_identifier: CBDB:119722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_26t4K7ix3jPfZ6DkivBsYa
        subject_person_id: p_nXR2pCD3EGKYpUd33G1sq2
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
        - id: cs_dTCMYpr6iRYxP1TrURmX9c
          claim_id: c_26t4K7ix3jPfZ6DkivBsYa
          source_id: s_HSFbucCv43UGJyp8WUKAwj
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

# 王綽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綽 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綽（CBDB 119722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119722&o=json)
