---
schema: wang-person/v1
id: p_4CKNX9eKmoFECM1X7mWad7
status: active
merged_into: null
display_name: 王家琛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3KD4Jq32nadgM3C8ZMNWnU
        subject_person_id: p_4CKNX9eKmoFECM1X7mWad7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家琛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BWWyHqX35wyD56yv21mVju
          claim_id: c_3KD4Jq32nadgM3C8ZMNWnU
          source_id: s_GX46eRpsWqsAcCeoyG8YzD
          stance: supports
          locator: CBDB:637203
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637203）
          source: &a1
            id: s_GX46eRpsWqsAcCeoyG8YzD
            source_type: api_record
            title: 中国历代人物传记资料库：王家琛（CBDB 637203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637203&o=json
            external_identifier: CBDB:637203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.364Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j85Tae7DE3u1WfEnoV3fvJ
        subject_person_id: p_4CKNX9eKmoFECM1X7mWad7
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
        - id: cs_KNJrzrReMEDAcQ7811T81H
          claim_id: c_j85Tae7DE3u1WfEnoV3fvJ
          source_id: s_GX46eRpsWqsAcCeoyG8YzD
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

# 王家琛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家琛 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家琛（CBDB 637203）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637203&o=json)
