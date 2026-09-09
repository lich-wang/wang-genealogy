---
schema: wang-person/v1
id: p_47oJrG7HyQBRU2bicpc5cG
status: active
merged_into: null
display_name: 王樹祺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mDm2yTRgQYrNYkgz1qiy7n
        subject_person_id: p_47oJrG7HyQBRU2bicpc5cG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹祺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J2D9fby2FvQKU1HCNpQHkx
          claim_id: c_mDm2yTRgQYrNYkgz1qiy7n
          source_id: s_SSeiBa5RLBTHRgMrKb3Tw5
          stance: supports
          locator: CBDB:698790
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698790）
          source: &a1
            id: s_SSeiBa5RLBTHRgMrKb3Tw5
            source_type: api_record
            title: 中国历代人物传记资料库：王樹祺（CBDB 698790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698790&o=json
            external_identifier: CBDB:698790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.568Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P7XxnH1jAGF5iJGEF6gVzz
        subject_person_id: p_47oJrG7HyQBRU2bicpc5cG
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
        - id: cs_MSLqNQF9HCfwRGMFnG4bQC
          claim_id: c_P7XxnH1jAGF5iJGEF6gVzz
          source_id: s_SSeiBa5RLBTHRgMrKb3Tw5
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

# 王樹祺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樹祺 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樹祺（CBDB 698790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698790&o=json)
