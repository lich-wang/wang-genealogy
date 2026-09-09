---
schema: wang-person/v1
id: p_VRtT5vFcDCauY5297DVNu8
status: active
merged_into: null
display_name: 王豐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r8dzDPHGSxwAiMjaGbACg3
        subject_person_id: p_VRtT5vFcDCauY5297DVNu8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pNUrZFK5aS16TrLLuPE5cJ
          claim_id: c_r8dzDPHGSxwAiMjaGbACg3
          source_id: s_idtKRQwrCADMX7ADAQ5H5U
          stance: supports
          locator: CBDB:640294
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640294）
          source: &a1
            id: s_idtKRQwrCADMX7ADAQ5H5U
            source_type: api_record
            title: 中国历代人物传记资料库：王豐（CBDB 640294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640294&o=json
            external_identifier: CBDB:640294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.071Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dS3ojb3iHuBWEpYGp4f931
        subject_person_id: p_VRtT5vFcDCauY5297DVNu8
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
        - id: cs_pgxbFb8toQQPr96S2xfgvG
          claim_id: c_dS3ojb3iHuBWEpYGp4f931
          source_id: s_idtKRQwrCADMX7ADAQ5H5U
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

# 王豐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王豐 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王豐（CBDB 640294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640294&o=json)
