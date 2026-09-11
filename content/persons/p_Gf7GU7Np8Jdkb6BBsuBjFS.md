---
schema: wang-person/v1
id: p_Gf7GU7Np8Jdkb6BBsuBjFS
status: active
merged_into: null
display_name: 王克銘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qZWKiyjtx5eE4A9Se4igTw
        subject_person_id: p_Gf7GU7Np8Jdkb6BBsuBjFS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克銘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UfCCjE1rWWEgGncXBNZ3et
          claim_id: c_qZWKiyjtx5eE4A9Se4igTw
          source_id: s_LJDrZ7Gh7Pg2TfiN1Bpxrp
          stance: supports
          locator: CBDB:324108
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324108）
          source: &a1
            id: s_LJDrZ7Gh7Pg2TfiN1Bpxrp
            source_type: api_record
            title: 中国历代人物传记资料库：王克銘（CBDB 324108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324108&o=json
            external_identifier: CBDB:324108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.160Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ULHTMj39BY9JDPxMqicZqk
        subject_person_id: p_Gf7GU7Np8Jdkb6BBsuBjFS
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
        - id: cs_iEFcuKDu8qTMuxXRCvVAYG
          claim_id: c_ULHTMj39BY9JDPxMqicZqk
          source_id: s_LJDrZ7Gh7Pg2TfiN1Bpxrp
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
        id: c_DRJMFHqOodo3SgpLT5Cqf4
        subject_person_id: p_Gf7GU7Np8Jdkb6BBsuBjFS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HvKxCmK79R4YwoS4fwu3e3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c9_Aa5KUmghB2jZIgXnfMi
          claim_id: c_DRJMFHqOodo3SgpLT5Cqf4
          source_id: s_LJDrZ7Gh7Pg2TfiN1Bpxrp
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第一百零二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HvKxCmK79R4YwoS4fwu3e3
        status: active
        display_name: 王璽
        merged_into_person_id: null
  other: []
---

# 王克銘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克銘 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_HvKxCmK79R4YwoS4fwu3e3 | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王克銘（CBDB 324108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324108&o=json)
