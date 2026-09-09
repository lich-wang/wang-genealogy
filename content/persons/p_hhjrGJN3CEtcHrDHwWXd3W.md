---
schema: wang-person/v1
id: p_hhjrGJN3CEtcHrDHwWXd3W
status: active
merged_into: null
display_name: 王蘇蘇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G4m9VDHxLJJunUr34WFFKL
        subject_person_id: p_hhjrGJN3CEtcHrDHwWXd3W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘇蘇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b4g2VjsWcr6SEhKV3B1NnR
          claim_id: c_G4m9VDHxLJJunUr34WFFKL
          source_id: s_67e4RmQAVKEPMuDCsfyEex
          stance: supports
          locator: CBDB:92007
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92007）
          source: &a1
            id: s_67e4RmQAVKEPMuDCsfyEex
            source_type: api_record
            title: 中国历代人物传记资料库：王蘇蘇（CBDB 92007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92007&o=json
            external_identifier: CBDB:92007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.076Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X89D1cc4WbJuuamMzkCBPT
        subject_person_id: p_hhjrGJN3CEtcHrDHwWXd3W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PQEmmoPifnufDvTHYA3W7F
          claim_id: c_X89D1cc4WbJuuamMzkCBPT
          source_id: s_67e4RmQAVKEPMuDCsfyEex
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

# 王蘇蘇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘇蘇 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘇蘇（CBDB 92007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92007&o=json)
