---
schema: wang-person/v1
id: p_2cRABX5wBf8b4hCzoF6szG
status: active
merged_into: null
display_name: 王格
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J1n4XXd9kG8pH4ZZvLPmbu
        subject_person_id: p_2cRABX5wBf8b4hCzoF6szG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王格
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rKQH3dLN5uD8LmfC42xmsM
          claim_id: c_J1n4XXd9kG8pH4ZZvLPmbu
          source_id: s_UDSL5UkpAf4aFWwovZqJbY
          stance: supports
          locator: CBDB:38092
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38092）
          source: &a1
            id: s_UDSL5UkpAf4aFWwovZqJbY
            source_type: api_record
            title: 中国历代人物传记资料库：王格（CBDB 38092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38092&o=json
            external_identifier: CBDB:38092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.356Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h112GeWwTo2GNP62KzMAK7
        subject_person_id: p_2cRABX5wBf8b4hCzoF6szG
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
        - id: cs_TkWJnW9fyGX2tZ5FNuXTRd
          claim_id: c_h112GeWwTo2GNP62KzMAK7
          source_id: s_UDSL5UkpAf4aFWwovZqJbY
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

# 王格

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王格 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王格（CBDB 38092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38092&o=json)
