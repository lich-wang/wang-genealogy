---
schema: wang-person/v1
id: p_1tJ8dKPLNdPvJxm7w6R44z
status: active
merged_into: null
display_name: 王德憲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dQveDUU9bpzPxfUwygKtPX
        subject_person_id: p_1tJ8dKPLNdPvJxm7w6R44z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德憲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jSNuyouAH24NhHjgkv2NjE
          claim_id: c_dQveDUU9bpzPxfUwygKtPX
          source_id: s_X3jSGiwW7pCvBW2HnqD11h
          stance: supports
          locator: CBDB:637677
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637677）
          source: &a1
            id: s_X3jSGiwW7pCvBW2HnqD11h
            source_type: api_record
            title: 中国历代人物传记资料库：王德憲（CBDB 637677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637677&o=json
            external_identifier: CBDB:637677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.391Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5Su7efj9E3bRg5TKpHDmKq
        subject_person_id: p_1tJ8dKPLNdPvJxm7w6R44z
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
        - id: cs_QFAks7exRvkxayfP5Dy5ZX
          claim_id: c_5Su7efj9E3bRg5TKpHDmKq
          source_id: s_X3jSGiwW7pCvBW2HnqD11h
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

# 王德憲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德憲 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德憲（CBDB 637677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637677&o=json)
