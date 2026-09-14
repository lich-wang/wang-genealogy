---
schema: wang-person/v1
id: p_7w7R7PSA759EpLs8K9jpxH
status: active
merged_into: null
display_name: 王民秀
cbdb_id: 210125
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6pinygP4v3FxeTnwcFBZZV
        subject_person_id: p_7w7R7PSA759EpLs8K9jpxH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民秀，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 210125）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_9CZP0Qd9nSwbxoZ5W-xC6Q
          claim_id: c_6pinygP4v3FxeTnwcFBZZV
          source_id: s_QKdKiYPaeS5Wiv4xrDQaWC
          stance: supports
          locator: CBDB:210125
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QKdKiYPaeS5Wiv4xrDQaWC
            source_type: api_record
            title: 中国历代人物传记资料库：王民秀（CBDB 210125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210125&o=json
            external_identifier: CBDB:210125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HJdzoZN1RGvrQTNUeGFsUG
        subject_person_id: p_7w7R7PSA759EpLs8K9jpxH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YmbAL6t7YfE99gB1iQGd8U
          claim_id: c_HJdzoZN1RGvrQTNUeGFsUG
          source_id: s_QKdKiYPaeS5Wiv4xrDQaWC
          stance: supports
          locator: CBDB:210125
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qWXlGr4yzgaWc2tj1BoYqG
        subject_person_id: p_THa8fUajs7gLagomkz7Gpb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7w7R7PSA759EpLs8K9jpxH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2K959fmuNct8q2txb-NluL
          claim_id: c_qWXlGr4yzgaWc2tj1BoYqG
          source_id: s_byEVRzP__f5u_5APNhJgU2
          stance: supports
          locator: CBDB：兄弟 王民順（205877）之父／母 王勑
          quotation: null
          interpretation_note: 由兄弟关系推断：王民秀 与 王民順 为同胞（CBDB 记「弟」），王民順 之父／母即 王民秀 之父／母。
          source:
            id: s_byEVRzP__f5u_5APNhJgU2
            source_type: api_record
            title: 中国历代人物传记资料库：王民秀（CBDB 210125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210125&o=json
            external_identifier: CBDB:210125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_THa8fUajs7gLagomkz7Gpb
        status: active
        display_name: 王勑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FPng5EzMckCMmc5ZLI3uGm
        subject_person_id: p_7w7R7PSA759EpLs8K9jpxH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VGBsaulYEPQGi_T84HWE2k
          claim_id: c_FPng5EzMckCMmc5ZLI3uGm
          source_id: s_byEVRzP__f5u_5APNhJgU2
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205877 王民順）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_byEVRzP__f5u_5APNhJgU2
            source_type: api_record
            title: 中国历代人物传记资料库：王民秀（CBDB 210125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210125&o=json
            external_identifier: CBDB:210125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j9BHN5bLCRAdnEfQP7Yp6q
        status: active
        display_name: 王民順
        merged_into_person_id: null
---

# 王民秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王民秀，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 210125） | accepted |
| name.primary | 王民秀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_THa8fUajs7gLagomkz7Gpb | 王勑 | accepted |
| other | p_j9BHN5bLCRAdnEfQP7Yp6q | 王民順 | accepted |

## 外部来源

- [中国历代人物传记资料库：王民秀（CBDB 210125）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210125&o=json)
