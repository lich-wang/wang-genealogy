---
schema: wang-person/v1
id: p_UKxM8D7YyYE48L4AiD4TEV
status: active
merged_into: null
display_name: 王炳煜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RNiNio57eAtsCV5F7bgNqv
        subject_person_id: p_UKxM8D7YyYE48L4AiD4TEV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳煜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8NaP53vzW3ggp5mRjcQN1B
          claim_id: c_RNiNio57eAtsCV5F7bgNqv
          source_id: s_1kRsRPyW4mPBXehFSWKt2E
          stance: supports
          locator: CBDB:639284
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639284）
          source: &a1
            id: s_1kRsRPyW4mPBXehFSWKt2E
            source_type: api_record
            title: 中国历代人物传记资料库：王炳煜（CBDB 639284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639284&o=json
            external_identifier: CBDB:639284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HZ1usFYxph3ABWQDbVBgTa
        subject_person_id: p_UKxM8D7YyYE48L4AiD4TEV
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
        - id: cs_EAp12ugKGKiSQ6HN86eghG
          claim_id: c_HZ1usFYxph3ABWQDbVBgTa
          source_id: s_1kRsRPyW4mPBXehFSWKt2E
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

# 王炳煜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炳煜 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炳煜（CBDB 639284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639284&o=json)
