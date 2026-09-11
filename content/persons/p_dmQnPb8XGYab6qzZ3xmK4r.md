---
schema: wang-person/v1
id: p_dmQnPb8XGYab6qzZ3xmK4r
status: active
merged_into: null
display_name: 王寍
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_muU2a8KBcC6eWUVwFhJdpC
        subject_person_id: p_dmQnPb8XGYab6qzZ3xmK4r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D1R4F1L3AsuDa3SxiAP8w7
          claim_id: c_muU2a8KBcC6eWUVwFhJdpC
          source_id: s_4d331juLZa1kKxoYqWofHc
          stance: supports
          locator: CBDB:334031
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（334031）
          source: &a1
            id: s_4d331juLZa1kKxoYqWofHc
            source_type: api_record
            title: 中国历代人物传记资料库：王寍（CBDB 334031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334031&o=json
            external_identifier: CBDB:334031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.428Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WfxxkKhS4sUsMGQKG5n7Rd
        subject_person_id: p_dmQnPb8XGYab6qzZ3xmK4r
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
        - id: cs_TMgLw6kYCb4d778zMNhSZv
          claim_id: c_WfxxkKhS4sUsMGQKG5n7Rd
          source_id: s_4d331juLZa1kKxoYqWofHc
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
  descendants:
    - claim:
        id: c_nFdyU1gmUx_R5IEkv2WuY6
        subject_person_id: p_dmQnPb8XGYab6qzZ3xmK4r
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Q5jiewEf7qr9FT4CBgkaYV
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OBKGbVBiUESWcyIWiJ_a3F
          claim_id: c_nFdyU1gmUx_R5IEkv2WuY6
          source_id: s_4d331juLZa1kKxoYqWofHc
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第四十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Q5jiewEf7qr9FT4CBgkaYV
        status: active
        display_name: 王繼祖
        merged_into_person_id: null
  other: []
---

# 王寍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寍 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Q5jiewEf7qr9FT4CBgkaYV | 王繼祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寍（CBDB 334031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334031&o=json)
