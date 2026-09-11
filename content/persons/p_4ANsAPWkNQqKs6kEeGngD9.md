---
schema: wang-person/v1
id: p_4ANsAPWkNQqKs6kEeGngD9
status: active
merged_into: null
display_name: 王介
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LD16NToRcLqKgCuvjmGydT
        subject_person_id: p_4ANsAPWkNQqKs6kEeGngD9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aNb1oHWzt7quRsSY5ynzXn
          claim_id: c_LD16NToRcLqKgCuvjmGydT
          source_id: s_n9hEdZ7bKMPpmAkB4d7Ja8
          stance: supports
          locator: CBDB:270220
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270220）
          source: &a1
            id: s_n9hEdZ7bKMPpmAkB4d7Ja8
            source_type: api_record
            title: 中国历代人物传记资料库：王介（CBDB 270220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270220&o=json
            external_identifier: CBDB:270220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_82HTWx9fr82V6GoLq3Ugtm
        subject_person_id: p_4ANsAPWkNQqKs6kEeGngD9
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
        - id: cs_Bn1q666jPtNDgVStFmtn7a
          claim_id: c_82HTWx9fr82V6GoLq3Ugtm
          source_id: s_n9hEdZ7bKMPpmAkB4d7Ja8
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
        id: c_injSulnVS5GRmC_3YGTfGB
        subject_person_id: p_4ANsAPWkNQqKs6kEeGngD9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_izy1XkGQRABqBnA1F9R3jt
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sG-T52a4a5fQqNFWXl_vFD
          claim_id: c_injSulnVS5GRmC_3YGTfGB
          source_id: s_n9hEdZ7bKMPpmAkB4d7Ja8
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第四十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_izy1XkGQRABqBnA1F9R3jt
        status: active
        display_name: 王昹
        merged_into_person_id: null
  other: []
---

# 王介

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王介 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_izy1XkGQRABqBnA1F9R3jt | 王昹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王介（CBDB 270220）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270220&o=json)
