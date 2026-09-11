---
schema: wang-person/v1
id: p_Xx6A1dBFzmqmxvBfyK7Bha
status: active
merged_into: null
display_name: 王維
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YYMRrQFfVxgg8EJoBQMH8r
        subject_person_id: p_Xx6A1dBFzmqmxvBfyK7Bha
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zF4kr56HQf6QNMm5NNjv5m
          claim_id: c_YYMRrQFfVxgg8EJoBQMH8r
          source_id: s_3sDapsFdJk9xubFbS3R3T4
          stance: supports
          locator: CBDB:212634
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212634）
          source: &a1
            id: s_3sDapsFdJk9xubFbS3R3T4
            source_type: api_record
            title: 中国历代人物传记资料库：王維（CBDB 212634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212634&o=json
            external_identifier: CBDB:212634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.089Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ghVNShKBKnzEgxEBwMcZjm
        subject_person_id: p_Xx6A1dBFzmqmxvBfyK7Bha
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 212634）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X0PTZW8eobFsvZG2vd3wcP
          claim_id: c_ghVNShKBKnzEgxEBwMcZjm
          source_id: s_3sDapsFdJk9xubFbS3R3T4
          stance: supports
          locator: CBDB:212634
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_GAmWlYZOgwh0jO-CVC92rz
        subject_person_id: p_Xx6A1dBFzmqmxvBfyK7Bha
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9WD2WpcaAMBVHNJjVMQ2UR
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zT9fGZ6oY8zLD50X6NAhVl
          claim_id: c_GAmWlYZOgwh0jO-CVC92rz
          source_id: s_3sDapsFdJk9xubFbS3R3T4
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第三十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9WD2WpcaAMBVHNJjVMQ2UR
        status: active
        display_name: 王錄
        merged_into_person_id: null
  other: []
---

# 王維

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維 | accepted |
| bio.summary | 王維，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 212634） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_9WD2WpcaAMBVHNJjVMQ2UR | 王錄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王維（CBDB 212634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212634&o=json)
