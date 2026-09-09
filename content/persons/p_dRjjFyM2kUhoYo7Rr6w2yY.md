---
schema: wang-person/v1
id: p_dRjjFyM2kUhoYo7Rr6w2yY
status: active
merged_into: null
display_name: 王烈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Htw7eKwEBG7XVGnJNgKYNS
        subject_person_id: p_dRjjFyM2kUhoYo7Rr6w2yY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LpqtgKR3YP1N14v99NFAe8
          claim_id: c_Htw7eKwEBG7XVGnJNgKYNS
          source_id: s_Mn7HkJhXD3yW3VoQBQrzgU
          stance: supports
          locator: CBDB:573399
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573399）
          source: &a1
            id: s_Mn7HkJhXD3yW3VoQBQrzgU
            source_type: api_record
            title: 中国历代人物传记资料库：王烈（CBDB 573399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573399&o=json
            external_identifier: CBDB:573399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.900Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5dHE5h3X56nGHU5ePGoPiZ
        subject_person_id: p_dRjjFyM2kUhoYo7Rr6w2yY
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
        - id: cs_CQG4kDCvL57Dq2m8BATb4G
          claim_id: c_5dHE5h3X56nGHU5ePGoPiZ
          source_id: s_Mn7HkJhXD3yW3VoQBQrzgU
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

# 王烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王烈 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王烈（CBDB 573399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573399&o=json)
