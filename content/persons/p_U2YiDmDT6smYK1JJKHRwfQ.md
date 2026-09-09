---
schema: wang-person/v1
id: p_U2YiDmDT6smYK1JJKHRwfQ
status: active
merged_into: null
display_name: 王顒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2QQAoCsyBCY2GEG3vAhSbE
        subject_person_id: p_U2YiDmDT6smYK1JJKHRwfQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p4feKWaUeHxAJXpeNWa8z5
          claim_id: c_2QQAoCsyBCY2GEG3vAhSbE
          source_id: s_BFo837xf3DsLPaLeKBPCxJ
          stance: supports
          locator: CBDB:145057
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145057）
          source: &a1
            id: s_BFo837xf3DsLPaLeKBPCxJ
            source_type: api_record
            title: 中国历代人物传记资料库：王顒（CBDB 145057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145057&o=json
            external_identifier: CBDB:145057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.646Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CXHENcDBXTAcyuePc8fdL6
        subject_person_id: p_U2YiDmDT6smYK1JJKHRwfQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 779年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GQGBSXY2sZBw3PbLWNsYgT
          claim_id: c_CXHENcDBXTAcyuePc8fdL6
          source_id: s_BFo837xf3DsLPaLeKBPCxJ
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
        id: c_moo741URwDoy5jVCwEPXcr
        subject_person_id: p_U2YiDmDT6smYK1JJKHRwfQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 848年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ubw915k4FEL89FkNTjZeLu
          claim_id: c_moo741URwDoy5jVCwEPXcr
          source_id: s_BFo837xf3DsLPaLeKBPCxJ
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
        id: c_JsgsxTMLE8kezw2E4Yw6mm
        subject_person_id: p_U2YiDmDT6smYK1JJKHRwfQ
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
        - id: cs_HVHcgATAjqQW27xZGic97g
          claim_id: c_JsgsxTMLE8kezw2E4Yw6mm
          source_id: s_BFo837xf3DsLPaLeKBPCxJ
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

# 王顒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顒 | accepted |
| birth.date | 779年 | accepted |
| death.date | 848年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顒（CBDB 145057）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145057&o=json)
