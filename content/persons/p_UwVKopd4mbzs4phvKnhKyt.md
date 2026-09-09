---
schema: wang-person/v1
id: p_UwVKopd4mbzs4phvKnhKyt
status: active
merged_into: null
display_name: 王葵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kEeEG4E2HR8nSMzjG3PeGh
        subject_person_id: p_UwVKopd4mbzs4phvKnhKyt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EQTi5aPonAomfmToKUSSqe
          claim_id: c_kEeEG4E2HR8nSMzjG3PeGh
          source_id: s_Eyomc6KMWJe8R6EB9oK7iW
          stance: supports
          locator: CBDB:685177
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（685177）
          source: &a1
            id: s_Eyomc6KMWJe8R6EB9oK7iW
            source_type: api_record
            title: 中国历代人物传记资料库：王葵（CBDB 685177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685177&o=json
            external_identifier: CBDB:685177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.318Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k1BnhhcrAZyYQqQBU5XnsB
        subject_person_id: p_UwVKopd4mbzs4phvKnhKyt
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
        - id: cs_7PN1kgQbziJto8DpS9WSG3
          claim_id: c_k1BnhhcrAZyYQqQBU5XnsB
          source_id: s_Eyomc6KMWJe8R6EB9oK7iW
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

# 王葵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王葵 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王葵（CBDB 685177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685177&o=json)
