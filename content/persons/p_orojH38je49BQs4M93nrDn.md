---
schema: wang-person/v1
id: p_orojH38je49BQs4M93nrDn
status: active
merged_into: null
display_name: 王壽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aA2Tt6YM1hH57GXQBDSu2v
        subject_person_id: p_orojH38je49BQs4M93nrDn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6WYf5YNkK7LACzZXu1LLrk
          claim_id: c_aA2Tt6YM1hH57GXQBDSu2v
          source_id: s_Ri3yCoC5JgQUbhMQjCewAg
          stance: supports
          locator: CBDB:253200
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253200）
          source: &a1
            id: s_Ri3yCoC5JgQUbhMQjCewAg
            source_type: api_record
            title: 中国历代人物传记资料库：王壽（CBDB 253200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253200&o=json
            external_identifier: CBDB:253200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hgiPwvR54U9ASfmmau98qP
        subject_person_id: p_orojH38je49BQs4M93nrDn
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
        - id: cs_5gfvLSdmv2r42Li3AK9TcL
          claim_id: c_hgiPwvR54U9ASfmmau98qP
          source_id: s_Ri3yCoC5JgQUbhMQjCewAg
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
        id: c_B5TT8KixiDaCnWhgfdlTP8
        subject_person_id: p_orojH38je49BQs4M93nrDn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ycYMvRnUtkJaB3y8gmGyCM
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1-EVlWhoefsU8e9XBqoczV
          claim_id: c_B5TT8KixiDaCnWhgfdlTP8
          source_id: s_Ri3yCoC5JgQUbhMQjCewAg
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百六十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ycYMvRnUtkJaB3y8gmGyCM
        status: active
        display_name: 王鑑之
        merged_into_person_id: null
  other: []
---

# 王壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ycYMvRnUtkJaB3y8gmGyCM | 王鑑之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王壽（CBDB 253200）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253200&o=json)
