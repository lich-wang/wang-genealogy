---
schema: wang-person/v1
id: p_AbVcjzx5u1oivmsbfrqHB3
status: active
merged_into: null
display_name: 王和
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P6QggRDr5PTbpGnCYi5eGJ
        subject_person_id: p_AbVcjzx5u1oivmsbfrqHB3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R81KV9znTzv7wC8Qf6m2uQ
          claim_id: c_P6QggRDr5PTbpGnCYi5eGJ
          source_id: s_EW8kQ4gtTTL5QRFGJSxTjX
          stance: supports
          locator: CBDB:300353
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（300353）
          source: &a1
            id: s_EW8kQ4gtTTL5QRFGJSxTjX
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 300353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300353&o=json
            external_identifier: CBDB:300353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.622Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uWBNxnvoAGKyLSk3xt6BRo
        subject_person_id: p_AbVcjzx5u1oivmsbfrqHB3
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
        - id: cs_kc8FcyemFaFszQ7Phs51Gw
          claim_id: c_uWBNxnvoAGKyLSk3xt6BRo
          source_id: s_EW8kQ4gtTTL5QRFGJSxTjX
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
        id: c_-5kbZZK-JLGxIC0g470FXc
        subject_person_id: p_AbVcjzx5u1oivmsbfrqHB3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EyEZV5aewC3P4xUZwdPZ5Y
          claim_id: c_-5kbZZK-JLGxIC0g470FXc
          source_id: s_EW8kQ4gtTTL5QRFGJSxTjX
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第六十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PBPvLNJEK4jPNCWDSKfDp5
        status: active
        display_name: 王春復
        merged_into_person_id: null
  other: []
---

# 王和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王和 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_PBPvLNJEK4jPNCWDSKfDp5 | 王春復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王和（CBDB 300353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300353&o=json)
