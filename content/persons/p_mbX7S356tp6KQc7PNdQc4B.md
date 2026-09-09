---
schema: wang-person/v1
id: p_mbX7S356tp6KQc7PNdQc4B
status: active
merged_into: null
display_name: 王啟緒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5Fa7BxUsFjKb1HeY3KVn6o
        subject_person_id: p_mbX7S356tp6KQc7PNdQc4B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NdkvAwocFEeKX3xywpecaf
          claim_id: c_5Fa7BxUsFjKb1HeY3KVn6o
          source_id: s_R6Fe9dTgk3p4txKeZp2K11
          stance: supports
          locator: CBDB:30090
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30090）
          source: &a1
            id: s_R6Fe9dTgk3p4txKeZp2K11
            source_type: api_record
            title: 中国历代人物传记资料库：王啟緒（CBDB 30090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30090&o=json
            external_identifier: CBDB:30090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.022Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HZFFgxF5UUY2UHGB37N3gf
        subject_person_id: p_mbX7S356tp6KQc7PNdQc4B
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
        - id: cs_DLWptZKi7AFBwvEijpWa7f
          claim_id: c_HZFFgxF5UUY2UHGB37N3gf
          source_id: s_R6Fe9dTgk3p4txKeZp2K11
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

# 王啟緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟緒 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟緒（CBDB 30090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30090&o=json)
