---
schema: wang-person/v1
id: p_Qcg31UhpgjmvhoebpVEYfL
status: active
merged_into: null
display_name: 王犖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c2tm84L8N8EnUj8JHvmhug
        subject_person_id: p_Qcg31UhpgjmvhoebpVEYfL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王犖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zD7qxoaSovGJRrXw9zPDBn
          claim_id: c_c2tm84L8N8EnUj8JHvmhug
          source_id: s_mUKjH6PoWtp6zPWc7CQt6H
          stance: supports
          locator: CBDB:565019
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（565019）
          source: &a1
            id: s_mUKjH6PoWtp6zPWc7CQt6H
            source_type: api_record
            title: 中国历代人物传记资料库：王犖（CBDB 565019）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565019&o=json
            external_identifier: CBDB:565019
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.806Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HuN32dEWJT1nzjCsDLYL9n
        subject_person_id: p_Qcg31UhpgjmvhoebpVEYfL
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
        - id: cs_Ku8sg4gC6uv3McAs9GfeTa
          claim_id: c_HuN32dEWJT1nzjCsDLYL9n
          source_id: s_mUKjH6PoWtp6zPWc7CQt6H
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

# 王犖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王犖 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王犖（CBDB 565019）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565019&o=json)
