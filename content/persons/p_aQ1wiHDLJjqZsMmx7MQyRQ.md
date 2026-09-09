---
schema: wang-person/v1
id: p_aQ1wiHDLJjqZsMmx7MQyRQ
status: active
merged_into: null
display_name: 王魯瞻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aoiHXn4Qj3Q2yg4vWA1qcT
        subject_person_id: p_aQ1wiHDLJjqZsMmx7MQyRQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王魯瞻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qaHVp9SH2f78AJFmVevsCA
          claim_id: c_aoiHXn4Qj3Q2yg4vWA1qcT
          source_id: s_mrjD1nfyxSzSMM9VKQg7Bt
          stance: supports
          locator: CBDB:640916
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640916）
          source: &a1
            id: s_mrjD1nfyxSzSMM9VKQg7Bt
            source_type: api_record
            title: 中国历代人物传记资料库：王魯瞻（CBDB 640916）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640916&o=json
            external_identifier: CBDB:640916
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.411Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GyBSaLfhZHQhf4d7ZLXBXP
        subject_person_id: p_aQ1wiHDLJjqZsMmx7MQyRQ
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
        - id: cs_HKDJ37PaUtNzVbDUPbcmL5
          claim_id: c_GyBSaLfhZHQhf4d7ZLXBXP
          source_id: s_mrjD1nfyxSzSMM9VKQg7Bt
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

# 王魯瞻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王魯瞻 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王魯瞻（CBDB 640916）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640916&o=json)
