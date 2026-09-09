---
schema: wang-person/v1
id: p_bnZTTUXdQEkiwbHG6pPM7d
status: active
merged_into: null
display_name: 王璨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gWewVx3FcJyw4YP8HApxr3
        subject_person_id: p_bnZTTUXdQEkiwbHG6pPM7d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ohxXcjNJxJEncbAqDkee8q
          claim_id: c_gWewVx3FcJyw4YP8HApxr3
          source_id: s_UAyJ8DBMhAgseMLzGiqnnh
          stance: supports
          locator: CBDB:290693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290693）
          source: &a1
            id: s_UAyJ8DBMhAgseMLzGiqnnh
            source_type: api_record
            title: 中国历代人物传记资料库：王璨（CBDB 290693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290693&o=json
            external_identifier: CBDB:290693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.338Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EcxLDFqGzhf6rFQ9TK2vzt
        subject_person_id: p_bnZTTUXdQEkiwbHG6pPM7d
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
        - id: cs_j9NEaP6tk4trnx7Tx9y6JE
          claim_id: c_EcxLDFqGzhf6rFQ9TK2vzt
          source_id: s_UAyJ8DBMhAgseMLzGiqnnh
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

# 王璨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璨 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璨（CBDB 290693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290693&o=json)
