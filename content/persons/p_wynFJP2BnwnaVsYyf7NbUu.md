---
schema: wang-person/v1
id: p_wynFJP2BnwnaVsYyf7NbUu
status: active
merged_into: null
display_name: 王選
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W36M6C8FBSRrDTRBGRVsV9
        subject_person_id: p_wynFJP2BnwnaVsYyf7NbUu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tMCag4q67gM97W2KR6nJ4W
          claim_id: c_W36M6C8FBSRrDTRBGRVsV9
          source_id: s_YSBU3ige9Qmpc89vQ7vSsQ
          stance: supports
          locator: CBDB:286305
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（286305）
          source: &a1
            id: s_YSBU3ige9Qmpc89vQ7vSsQ
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 286305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286305&o=json
            external_identifier: CBDB:286305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.238Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2g57jBGDrWmGPX1niVFrgu
        subject_person_id: p_wynFJP2BnwnaVsYyf7NbUu
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
        - id: cs_3zNRDi8XdMACEZ8JrG43Yk
          claim_id: c_2g57jBGDrWmGPX1niVFrgu
          source_id: s_YSBU3ige9Qmpc89vQ7vSsQ
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

# 王選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王選 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王選（CBDB 286305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286305&o=json)
