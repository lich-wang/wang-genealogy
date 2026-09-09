---
schema: wang-person/v1
id: p_qqpZcUW8n87fkyEHxiQr3G
status: active
merged_into: null
display_name: 王治安
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mGmK1Ky6Ac5Z3cvRTTXr2y
        subject_person_id: p_qqpZcUW8n87fkyEHxiQr3G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_78ygHM2PQM2yLL2nMJm3mB
          claim_id: c_mGmK1Ky6Ac5Z3cvRTTXr2y
          source_id: s_7EdtU5z6mRc1jrbU6CZEML
          stance: supports
          locator: CBDB:639062
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639062）
          source: &a1
            id: s_7EdtU5z6mRc1jrbU6CZEML
            source_type: api_record
            title: 中国历代人物传记资料库：王治安（CBDB 639062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639062&o=json
            external_identifier: CBDB:639062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.848Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ewxLYEbjGq7ZWTrtppEwcR
        subject_person_id: p_qqpZcUW8n87fkyEHxiQr3G
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
        - id: cs_eGF7VtmxtNULBs5Ji32bqr
          claim_id: c_ewxLYEbjGq7ZWTrtppEwcR
          source_id: s_7EdtU5z6mRc1jrbU6CZEML
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

# 王治安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王治安 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王治安（CBDB 639062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639062&o=json)
