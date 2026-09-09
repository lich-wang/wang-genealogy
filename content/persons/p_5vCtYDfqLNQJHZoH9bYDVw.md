---
schema: wang-person/v1
id: p_5vCtYDfqLNQJHZoH9bYDVw
status: active
merged_into: null
display_name: 王傳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VsD1JgAp7jvRtEduAGkSh2
        subject_person_id: p_5vCtYDfqLNQJHZoH9bYDVw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fL9jdzQN9fWgx1X1T14CxB
          claim_id: c_VsD1JgAp7jvRtEduAGkSh2
          source_id: s_jNWkhvxBoGqjeXPTDSg9m6
          stance: supports
          locator: CBDB:698037
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698037）
          source: &a1
            id: s_jNWkhvxBoGqjeXPTDSg9m6
            source_type: api_record
            title: 中国历代人物传记资料库：王傳（CBDB 698037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698037&o=json
            external_identifier: CBDB:698037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.735Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ianNhAU9NrvStVVtStCbw2
        subject_person_id: p_5vCtYDfqLNQJHZoH9bYDVw
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
        - id: cs_S2B4DEC8WguA6SR9sToCen
          claim_id: c_ianNhAU9NrvStVVtStCbw2
          source_id: s_jNWkhvxBoGqjeXPTDSg9m6
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

# 王傳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傳 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王傳（CBDB 698037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698037&o=json)
