---
schema: wang-person/v1
id: p_x3JmKAo4rfZaRBxJ8pmy7d
status: active
merged_into: null
display_name: 王玘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3a6CnQQmb4TY8LQpGCrhfh
        subject_person_id: p_x3JmKAo4rfZaRBxJ8pmy7d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LdMQRV61GhZZnvo14ZB2Dy
          claim_id: c_3a6CnQQmb4TY8LQpGCrhfh
          source_id: s_3HhM1Q8eiVPuN3FMGw65wH
          stance: supports
          locator: CBDB:299649
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（299649）
          source: &a1
            id: s_3HhM1Q8eiVPuN3FMGw65wH
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 299649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299649&o=json
            external_identifier: CBDB:299649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.607Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_io1RJzDWrNQBEhTQAEmMq6
        subject_person_id: p_x3JmKAo4rfZaRBxJ8pmy7d
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
        - id: cs_UHaW6DtX9qNXu1rXHJM2Qt
          claim_id: c_io1RJzDWrNQBEhTQAEmMq6
          source_id: s_3HhM1Q8eiVPuN3FMGw65wH
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
        id: c_Ke1GRZOnvCV4YV6CTynWDK
        subject_person_id: p_x3JmKAo4rfZaRBxJ8pmy7d
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pg2fYMa25vFJ1qFwgpCHBx
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xZIt--IZkJZQJfSw68a1qe
          claim_id: c_Ke1GRZOnvCV4YV6CTynWDK
          source_id: s_3HhM1Q8eiVPuN3FMGw65wH
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第九十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pg2fYMa25vFJ1qFwgpCHBx
        status: active
        display_name: 王嘉謨
        merged_into_person_id: null
  other: []
---

# 王玘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玘 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_pg2fYMa25vFJ1qFwgpCHBx | 王嘉謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玘（CBDB 299649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299649&o=json)
