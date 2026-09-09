---
schema: wang-person/v1
id: p_go4cdMuDhTYdCJQPVadaDB
status: active
merged_into: null
display_name: 王霖蒼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Sgrctfsf9aKEaJUASqFL2Y
        subject_person_id: p_go4cdMuDhTYdCJQPVadaDB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霖蒼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_25Y4ejTDBymhPFscoXLQgk
          claim_id: c_Sgrctfsf9aKEaJUASqFL2Y
          source_id: s_s9AdHG6d9Zdb79QsN46H2J
          stance: supports
          locator: CBDB:640837
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640837）
          source: &a1
            id: s_s9AdHG6d9Zdb79QsN46H2J
            source_type: api_record
            title: 中国历代人物传记资料库：王霖蒼（CBDB 640837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640837&o=json
            external_identifier: CBDB:640837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.387Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wTqSfuiRCwDRMhEjBg2rs5
        subject_person_id: p_go4cdMuDhTYdCJQPVadaDB
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
        - id: cs_TGT9nHsEbmSqmMFKSz1qSf
          claim_id: c_wTqSfuiRCwDRMhEjBg2rs5
          source_id: s_s9AdHG6d9Zdb79QsN46H2J
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

# 王霖蒼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霖蒼 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王霖蒼（CBDB 640837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640837&o=json)
