---
schema: wang-person/v1
id: p_iKF3URQYd2AiG1hYtKBDpV
status: active
merged_into: null
display_name: 王京
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aaLddU2SN6x4k9Q2cLZz5i
        subject_person_id: p_iKF3URQYd2AiG1hYtKBDpV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王京
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w5QPC9q7tFn2sx16i2JCVX
          claim_id: c_aaLddU2SN6x4k9Q2cLZz5i
          source_id: s_p8SF1qnXdovPg4gXKQPEXa
          stance: supports
          locator: CBDB:205560
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205560）
          source: &a1
            id: s_p8SF1qnXdovPg4gXKQPEXa
            source_type: api_record
            title: 中国历代人物传记资料库：王京（CBDB 205560）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205560&o=json
            external_identifier: CBDB:205560
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.865Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_cBSGSv6FkrfoKGLD3NyMFp
        subject_person_id: p_iKF3URQYd2AiG1hYtKBDpV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1543年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rzQDNNintwnFHV2qwcttTT
          claim_id: c_cBSGSv6FkrfoKGLD3NyMFp
          source_id: s_p8SF1qnXdovPg4gXKQPEXa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jz5Krut6w2mp8X4CWqQfZd
        subject_person_id: p_iKF3URQYd2AiG1hYtKBDpV
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
        - id: cs_2TQ48ZuHFXF4U6Lb7FmFSi
          claim_id: c_Jz5Krut6w2mp8X4CWqQfZd
          source_id: s_p8SF1qnXdovPg4gXKQPEXa
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

# 王京

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王京 | accepted |
| birth.date | 1543年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王京（CBDB 205560）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205560&o=json)
