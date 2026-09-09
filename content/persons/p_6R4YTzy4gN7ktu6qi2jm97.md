---
schema: wang-person/v1
id: p_6R4YTzy4gN7ktu6qi2jm97
status: active
merged_into: null
display_name: 王翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8Emw6RH6fF1CPBYMp8rjeH
        subject_person_id: p_6R4YTzy4gN7ktu6qi2jm97
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_57KMdVKVrvqNLe7H8F4pxJ
          claim_id: c_8Emw6RH6fF1CPBYMp8rjeH
          source_id: s_EMM82r7fWFtBvGGWTm2A5g
          stance: supports
          locator: CBDB:696705
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696705）
          source: &a1
            id: s_EMM82r7fWFtBvGGWTm2A5g
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 696705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696705&o=json
            external_identifier: CBDB:696705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.701Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1CH9Ph5ahTW6aUft6c6U2D
        subject_person_id: p_6R4YTzy4gN7ktu6qi2jm97
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
        - id: cs_CPpBFvHAiFCfiYrcEjUE2p
          claim_id: c_1CH9Ph5ahTW6aUft6c6U2D
          source_id: s_EMM82r7fWFtBvGGWTm2A5g
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

# 王翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翰 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翰（CBDB 696705）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696705&o=json)
