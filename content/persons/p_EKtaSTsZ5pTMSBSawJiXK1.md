---
schema: wang-person/v1
id: p_EKtaSTsZ5pTMSBSawJiXK1
status: active
merged_into: null
display_name: 王加湘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HfpbUec2mPWTYvapcL1w9P
        subject_person_id: p_EKtaSTsZ5pTMSBSawJiXK1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王加湘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XupWH9DjEg45Dg7JLCc3iH
          claim_id: c_HfpbUec2mPWTYvapcL1w9P
          source_id: s_Ut2tgVRq8G3LBk9nACBtru
          stance: supports
          locator: CBDB:636372
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636372）
          source: &a1
            id: s_Ut2tgVRq8G3LBk9nACBtru
            source_type: api_record
            title: 中国历代人物传记资料库：王加湘（CBDB 636372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636372&o=json
            external_identifier: CBDB:636372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.970Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G19e6Yp5sDCiRBEjmVAi6F
        subject_person_id: p_EKtaSTsZ5pTMSBSawJiXK1
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
        - id: cs_53unAPuNB6c5JLSeytDV71
          claim_id: c_G19e6Yp5sDCiRBEjmVAi6F
          source_id: s_Ut2tgVRq8G3LBk9nACBtru
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

# 王加湘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王加湘 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王加湘（CBDB 636372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636372&o=json)
