---
schema: wang-person/v1
id: p_GNFb85v3G7BAQhdQDA9hY9
status: active
merged_into: null
display_name: 王祜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sMkqyp7uN1E1Km68rL5uGv
        subject_person_id: p_GNFb85v3G7BAQhdQDA9hY9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pP12mPxLuBA2x4wYr3TEpK
          claim_id: c_sMkqyp7uN1E1Km68rL5uGv
          source_id: s_7aXRnHA6a4mDyMB23Rb3vm
          stance: supports
          locator: CBDB:3956
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3956）
          source: &a1
            id: s_7aXRnHA6a4mDyMB23Rb3vm
            source_type: api_record
            title: 中国历代人物传记资料库：王祜（CBDB 3956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3956&o=json
            external_identifier: CBDB:3956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.431Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oDvDUXxduRuyrXLSNLuHL5
        subject_person_id: p_GNFb85v3G7BAQhdQDA9hY9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 924年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oRbR7Ku7wFEuNJoLHYP4HV
          claim_id: c_oDvDUXxduRuyrXLSNLuHL5
          source_id: s_7aXRnHA6a4mDyMB23Rb3vm
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
        id: c_MPYnohLFYU34QJo8mVNiXK
        subject_person_id: p_GNFb85v3G7BAQhdQDA9hY9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 987年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NWar4YaxFx8hqF6E2LJoRY
          claim_id: c_MPYnohLFYU34QJo8mVNiXK
          source_id: s_7aXRnHA6a4mDyMB23Rb3vm
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
        id: c_bUqJj6FQDU5SoQYmG5Wdqr
        subject_person_id: p_GNFb85v3G7BAQhdQDA9hY9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MdvVLVUoNowxGPzXWdD4kr
          claim_id: c_bUqJj6FQDU5SoQYmG5Wdqr
          source_id: s_7aXRnHA6a4mDyMB23Rb3vm
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

# 王祜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祜 | accepted |
| birth.date | 924年 | accepted |
| death.date | 987年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祜（CBDB 3956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3956&o=json)
