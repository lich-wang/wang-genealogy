---
schema: wang-person/v1
id: p_MBHRpaK8e4wuxL7rkxgYDe
status: active
merged_into: null
display_name: 王奇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ci5i1t7utWNb2U4MXi8ZNz
        subject_person_id: p_MBHRpaK8e4wuxL7rkxgYDe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_49xPATw485xfHqpSN4hEn1
          claim_id: c_ci5i1t7utWNb2U4MXi8ZNz
          source_id: s_NXynGGRiAGiV3MSgMdKrZu
          stance: supports
          locator: CBDB:335211
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（335211）
          source: &a1
            id: s_NXynGGRiAGiV3MSgMdKrZu
            source_type: api_record
            title: 中国历代人物传记资料库：王奇（CBDB 335211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335211&o=json
            external_identifier: CBDB:335211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.448Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2uzB1CQad4ynF5euzkJapk
        subject_person_id: p_MBHRpaK8e4wuxL7rkxgYDe
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
        - id: cs_KSddmPijZ41Wun8McGRR7H
          claim_id: c_2uzB1CQad4ynF5euzkJapk
          source_id: s_NXynGGRiAGiV3MSgMdKrZu
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
  descendants:
    - claim:
        id: c_iCptNp4kx-9Wy_wS3TO5xo
        subject_person_id: p_MBHRpaK8e4wuxL7rkxgYDe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_iKF3URQYd2AiG1hYtKBDpV
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2g9_VIhTuI093IKraCl93O
          claim_id: c_iCptNp4kx-9Wy_wS3TO5xo
          source_id: s_NXynGGRiAGiV3MSgMdKrZu
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第七十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iKF3URQYd2AiG1hYtKBDpV
        status: active
        display_name: 王京
        merged_into_person_id: null
  other: []
---

# 王奇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奇 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_iKF3URQYd2AiG1hYtKBDpV | 王京 | accepted |

## 外部来源

- [中国历代人物传记资料库：王奇（CBDB 335211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335211&o=json)
