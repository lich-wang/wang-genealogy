---
schema: wang-person/v1
id: p_61gqb4S8dGq6zPHhmQTQtX
status: active
merged_into: null
display_name: 王野
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2254QQr52yW9AvuBdocbH5
        subject_person_id: p_61gqb4S8dGq6zPHhmQTQtX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王野
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ygBC8vtTimJGd9ni41ZNax
          claim_id: c_2254QQr52yW9AvuBdocbH5
          source_id: s_DUKeF7wRFiELwn65VSgJtw
          stance: supports
          locator: CBDB:576949
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576949）
          source: &a1
            id: s_DUKeF7wRFiELwn65VSgJtw
            source_type: api_record
            title: 中国历代人物传记资料库：王野（CBDB 576949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576949&o=json
            external_identifier: CBDB:576949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.963Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SMHKMG9k2AW88JWUXmwr8R
        subject_person_id: p_61gqb4S8dGq6zPHhmQTQtX
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
        - id: cs_viceyBYZ6ixRcCdJQLe2pC
          claim_id: c_SMHKMG9k2AW88JWUXmwr8R
          source_id: s_DUKeF7wRFiELwn65VSgJtw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_LIYVdc87t3gEfZrOccwG7J
        subject_person_id: p_61gqb4S8dGq6zPHhmQTQtX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FcbG3jDLN4BY1mSZPFAFA3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SM4ERdh_2YZTnQOCxxJiFo
          claim_id: c_LIYVdc87t3gEfZrOccwG7J
          source_id: s_DUKeF7wRFiELwn65VSgJtw
          stance: supports
          locator: 袁宏道集箋校，584：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FcbG3jDLN4BY1mSZPFAFA3
        status: active
        display_name: 王僧劭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王野

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王野 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_FcbG3jDLN4BY1mSZPFAFA3 | 王僧劭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王野（CBDB 576949）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576949&o=json)
