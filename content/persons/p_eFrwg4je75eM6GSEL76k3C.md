---
schema: wang-person/v1
id: p_eFrwg4je75eM6GSEL76k3C
status: active
merged_into: null
display_name: 侯氏
revision: 1
cbdb_id: 119468
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uFo--IWGalAKPEkfzJWVlS
        subject_person_id: p_eFrwg4je75eM6GSEL76k3C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 侯氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t-SFJZTMqZz4KfMCTXc_mE
          claim_id: c_uFo--IWGalAKPEkfzJWVlS
          source_id: s_At_0zfDd1zBIy4bzEME23t
          stance: supports
          locator: CBDB:119468
          quotation: null
          interpretation_note: CBDB 明确记录的王景配偶
          source: &a1
            id: s_At_0zfDd1zBIy4bzEME23t
            source_type: api_record
            title: 中国历代人物传记资料库：侯氏(王景妻)（CBDB 119468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119468&o=json
            external_identifier: CBDB:119468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_schgSLttMbpJ7ZMydB0kSH
        subject_person_id: p_cWq3Ad37Fg61KqGA2RFrbD
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_eFrwg4je75eM6GSEL76k3C
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cSOd4b5jHqBvK7OxI5qQ0a
          claim_id: c_schgSLttMbpJ7ZMydB0kSH
          source_id: s_At_0zfDd1zBIy4bzEME23t
          stance: supports
          locator: 宋史：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cWq3Ad37Fg61KqGA2RFrbD
        status: active
        display_name: 王景
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 侯氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 侯氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_cWq3Ad37Fg61KqGA2RFrbD | 王景 | accepted |

## 外部来源

- [中国历代人物传记资料库：侯氏(王景妻)（CBDB 119468）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119468&o=json)
