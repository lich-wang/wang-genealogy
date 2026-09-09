---
schema: wang-person/v1
id: p_Q1EY7fedT4DVJtqbbg3w9Z
status: active
merged_into: null
display_name: 王果
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6PieyvETvnF2BfCxoKkfCK
        subject_person_id: p_Q1EY7fedT4DVJtqbbg3w9Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王果
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Vi5b4ctCbB5MdEN74FZPuh
          claim_id: c_6PieyvETvnF2BfCxoKkfCK
          source_id: s_QZPjFWKZx6UhDNsP5BX6CL
          stance: supports
          locator: CBDB:194269
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（194269）
          source: &a1
            id: s_QZPjFWKZx6UhDNsP5BX6CL
            source_type: api_record
            title: 中国历代人物传记资料库：王果（CBDB 194269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194269&o=json
            external_identifier: CBDB:194269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.449Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8X4J2ZrUpDK86Bn5sD9H4q
        subject_person_id: p_Q1EY7fedT4DVJtqbbg3w9Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i3QfUkQ6wPKy41YgHMQ8Mh
          claim_id: c_8X4J2ZrUpDK86Bn5sD9H4q
          source_id: s_QZPjFWKZx6UhDNsP5BX6CL
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

# 王果

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王果 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王果（CBDB 194269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194269&o=json)
