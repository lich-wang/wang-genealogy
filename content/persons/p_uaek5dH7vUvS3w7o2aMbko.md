---
schema: wang-person/v1
id: p_uaek5dH7vUvS3w7o2aMbko
status: active
merged_into: null
display_name: 王存禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2xYvKR5xB4JGWpAhntC9Qm
        subject_person_id: p_uaek5dH7vUvS3w7o2aMbko
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HgV9MeVZd8pUmsHoA3gUCV
          claim_id: c_2xYvKR5xB4JGWpAhntC9Qm
          source_id: s_2ALbcHnh28ruonXPAzF68S
          stance: supports
          locator: CBDB:198619
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198619）
          source: &a1
            id: s_2ALbcHnh28ruonXPAzF68S
            source_type: api_record
            title: 中国历代人物传记资料库：王存禮（CBDB 198619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198619&o=json
            external_identifier: CBDB:198619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.504Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HvkBeUqNqDZQzu147eFiRC
        subject_person_id: p_uaek5dH7vUvS3w7o2aMbko
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1420年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dVb2QiK1rM9X1UF45eCzuc
          claim_id: c_HvkBeUqNqDZQzu147eFiRC
          source_id: s_2ALbcHnh28ruonXPAzF68S
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hvdpgLwMRRDZVpMGGpgUQq
        subject_person_id: p_uaek5dH7vUvS3w7o2aMbko
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
        - id: cs_DWbL6SPnB3QmmM4LGYFdEs
          claim_id: c_hvdpgLwMRRDZVpMGGpgUQq
          source_id: s_2ALbcHnh28ruonXPAzF68S
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

# 王存禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王存禮 | accepted |
| birth.date | 1420年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王存禮（CBDB 198619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198619&o=json)
