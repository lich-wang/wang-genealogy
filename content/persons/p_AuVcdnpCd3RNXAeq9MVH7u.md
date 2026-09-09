---
schema: wang-person/v1
id: p_AuVcdnpCd3RNXAeq9MVH7u
status: active
merged_into: null
display_name: 王國才
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UTfy66HM6iN6c9S3RSMDa3
        subject_person_id: p_AuVcdnpCd3RNXAeq9MVH7u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1Lnvk9mcNS54fmTSDECgLn
          claim_id: c_UTfy66HM6iN6c9S3RSMDa3
          source_id: s_fhVooWDtMjADDB7R69Cc8d
          stance: supports
          locator: CBDB:69350
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69350）
          source: &a1
            id: s_fhVooWDtMjADDB7R69Cc8d
            source_type: api_record
            title: 中国历代人物传记资料库：王國才（CBDB 69350）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69350&o=json
            external_identifier: CBDB:69350
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.220Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gLFXEMSfZD2k2awvymBVKv
        subject_person_id: p_AuVcdnpCd3RNXAeq9MVH7u
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1813年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CUh16MHGA37ByJFUpWzEtJ
          claim_id: c_gLFXEMSfZD2k2awvymBVKv
          source_id: s_fhVooWDtMjADDB7R69Cc8d
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_rbR9RQzC3EUsVmhD9JKaup
        subject_person_id: p_AuVcdnpCd3RNXAeq9MVH7u
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1857年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kDfBKv4TS8BiNnHXgpT2q8
          claim_id: c_rbR9RQzC3EUsVmhD9JKaup
          source_id: s_fhVooWDtMjADDB7R69Cc8d
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2vEoNWdYpBEK7NFQgW2UPu
        subject_person_id: p_AuVcdnpCd3RNXAeq9MVH7u
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
        - id: cs_26Km6cE6DCejFxq4ajHmuG
          claim_id: c_2vEoNWdYpBEK7NFQgW2UPu
          source_id: s_fhVooWDtMjADDB7R69Cc8d
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

# 王國才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國才 | accepted |
| birth.date | 1813年 | accepted |
| death.date | 1857年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國才（CBDB 69350）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69350&o=json)
