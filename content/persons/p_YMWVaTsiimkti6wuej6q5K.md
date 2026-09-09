---
schema: wang-person/v1
id: p_YMWVaTsiimkti6wuej6q5K
status: active
merged_into: null
display_name: 王文炳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s88phfbNG4oYTNsSNHCyg5
        subject_person_id: p_YMWVaTsiimkti6wuej6q5K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文炳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HwFpAdyTepFhLmeWkB77qr
          claim_id: c_s88phfbNG4oYTNsSNHCyg5
          source_id: s_rNN2GLDiQLKjGo18q4xBEy
          stance: supports
          locator: CBDB:341629
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341629）
          source: &a1
            id: s_rNN2GLDiQLKjGo18q4xBEy
            source_type: api_record
            title: 中国历代人物传记资料库：王文炳（CBDB 341629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341629&o=json
            external_identifier: CBDB:341629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.618Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4vxCEAVwqgycLXjeYD3LmC
        subject_person_id: p_YMWVaTsiimkti6wuej6q5K
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
        - id: cs_iu6mcZELj7KQZ7an5SkpLf
          claim_id: c_4vxCEAVwqgycLXjeYD3LmC
          source_id: s_rNN2GLDiQLKjGo18q4xBEy
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

# 王文炳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文炳 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文炳（CBDB 341629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341629&o=json)
