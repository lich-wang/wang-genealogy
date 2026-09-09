---
schema: wang-person/v1
id: p_ResYE64ryyAsWfUzYFbfRC
status: active
merged_into: null
display_name: 王僖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WKbNwveaP8RCXAki7QU9i5
        subject_person_id: p_ResYE64ryyAsWfUzYFbfRC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Yo6XNpmDYJqAXUJ5H5fbAZ
          claim_id: c_WKbNwveaP8RCXAki7QU9i5
          source_id: s_NaUXPg4afiCidNioHYVtnE
          stance: supports
          locator: CBDB:237325
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237325）
          source: &a1
            id: s_NaUXPg4afiCidNioHYVtnE
            source_type: api_record
            title: 中国历代人物传记资料库：王僖（CBDB 237325）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237325&o=json
            external_identifier: CBDB:237325
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.835Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R1vzRj9LfgVCrhmX8sKtKJ
        subject_person_id: p_ResYE64ryyAsWfUzYFbfRC
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
        - id: cs_PLxG5DU2DhH9EoB9YeXKQk
          claim_id: c_R1vzRj9LfgVCrhmX8sKtKJ
          source_id: s_NaUXPg4afiCidNioHYVtnE
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

# 王僖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王僖 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王僖（CBDB 237325）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237325&o=json)
