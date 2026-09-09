---
schema: wang-person/v1
id: p_QcyE2kVTYfXqZATPNPBHVr
status: active
merged_into: null
display_name: 王之翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xBGcrwYSCQWDwc7D8XLUeu
        subject_person_id: p_QcyE2kVTYfXqZATPNPBHVr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c2Y13iyBKSbK3Fk4V2E65t
          claim_id: c_xBGcrwYSCQWDwc7D8XLUeu
          source_id: s_BcRL6g68wsVN6W56q3NjWZ
          stance: supports
          locator: CBDB:328693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328693）
          source: &a1
            id: s_BcRL6g68wsVN6W56q3NjWZ
            source_type: api_record
            title: 中国历代人物传记资料库：王之翰（CBDB 328693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328693&o=json
            external_identifier: CBDB:328693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.310Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_23LwVAtGKaEdmNzc6x8n3X
        subject_person_id: p_QcyE2kVTYfXqZATPNPBHVr
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
        - id: cs_7ornM6V4fjkHvRUMhUgYo5
          claim_id: c_23LwVAtGKaEdmNzc6x8n3X
          source_id: s_BcRL6g68wsVN6W56q3NjWZ
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

# 王之翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之翰 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之翰（CBDB 328693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328693&o=json)
