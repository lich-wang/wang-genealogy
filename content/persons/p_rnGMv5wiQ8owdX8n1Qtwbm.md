---
schema: wang-person/v1
id: p_rnGMv5wiQ8owdX8n1Qtwbm
status: active
merged_into: null
display_name: 王嘉言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wsGgfSNkbXXZWfF69qvWez
        subject_person_id: p_rnGMv5wiQ8owdX8n1Qtwbm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5hP5ZeEMcmZ6Q2BE6m7EUE
          claim_id: c_wsGgfSNkbXXZWfF69qvWez
          source_id: s_d1V3aRDkQunmSQesybG8HJ
          stance: supports
          locator: CBDB:126780
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126780）
          source: &a1
            id: s_d1V3aRDkQunmSQesybG8HJ
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉言（CBDB 126780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126780&o=json
            external_identifier: CBDB:126780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.198Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6sEHxZ1M5FXt7yYbFFe4sB
        subject_person_id: p_rnGMv5wiQ8owdX8n1Qtwbm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1524年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nFhyBKYVQeVDBiaCet8pH1
          claim_id: c_6sEHxZ1M5FXt7yYbFFe4sB
          source_id: s_d1V3aRDkQunmSQesybG8HJ
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
        id: c_Q2tzuZi6fK4UzyD17zbc1D
        subject_person_id: p_rnGMv5wiQ8owdX8n1Qtwbm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1579年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CYoy52U426jE58crTRruNR
          claim_id: c_Q2tzuZi6fK4UzyD17zbc1D
          source_id: s_d1V3aRDkQunmSQesybG8HJ
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
        id: c_nhP29yWUevKBwKhM787LNF
        subject_person_id: p_rnGMv5wiQ8owdX8n1Qtwbm
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
        - id: cs_xkV16Cf4DxeEoR2HPyxR28
          claim_id: c_nhP29yWUevKBwKhM787LNF
          source_id: s_d1V3aRDkQunmSQesybG8HJ
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

# 王嘉言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉言 | accepted |
| birth.date | 1524年 | accepted |
| death.date | 1579年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉言（CBDB 126780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126780&o=json)
