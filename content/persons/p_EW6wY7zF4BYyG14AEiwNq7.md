---
schema: wang-person/v1
id: p_EW6wY7zF4BYyG14AEiwNq7
status: active
merged_into: null
display_name: 王琦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iC4JEf2yb9jKuq4wYcmD2J
        subject_person_id: p_EW6wY7zF4BYyG14AEiwNq7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aNM2XdnaFCAk8ZziZGBJ3M
          claim_id: c_iC4JEf2yb9jKuq4wYcmD2J
          source_id: s_4zU3VM5a8kC1Lzq81mD4J8
          stance: supports
          locator: CBDB:458392
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（458392）
          source: &a1
            id: s_4zU3VM5a8kC1Lzq81mD4J8
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 458392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458392&o=json
            external_identifier: CBDB:458392
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.648Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BPFuUWAFb7WpsZgeuyecCg
        subject_person_id: p_EW6wY7zF4BYyG14AEiwNq7
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
        - id: cs_FhL5Wfb1LciC3JNTcxqzee
          claim_id: c_BPFuUWAFb7WpsZgeuyecCg
          source_id: s_4zU3VM5a8kC1Lzq81mD4J8
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

# 王琦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琦 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琦（CBDB 458392）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458392&o=json)
