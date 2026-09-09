---
schema: wang-person/v1
id: p_F8PhYcm76CqvUGAD1hQ3fN
status: active
merged_into: null
display_name: 王忱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7xp4teDutNwpZFKqFynUED
        subject_person_id: p_F8PhYcm76CqvUGAD1hQ3fN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3yUhzjM63xBQWfnC7bMbZx
          claim_id: c_7xp4teDutNwpZFKqFynUED
          source_id: s_LaPNRq1ZihXrWiVk4De7GR
          stance: supports
          locator: CBDB:685791
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（685791）
          source: &a1
            id: s_LaPNRq1ZihXrWiVk4De7GR
            source_type: api_record
            title: 中国历代人物传记资料库：王忱（CBDB 685791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685791&o=json
            external_identifier: CBDB:685791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.352Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H9zYCMN6LZJM7mLso8YQNK
        subject_person_id: p_F8PhYcm76CqvUGAD1hQ3fN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6iirLf8xGPZthktLSAnR4p
          claim_id: c_H9zYCMN6LZJM7mLso8YQNK
          source_id: s_LaPNRq1ZihXrWiVk4De7GR
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

# 王忱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忱 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王忱（CBDB 685791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685791&o=json)
