---
schema: wang-person/v1
id: p_am8LuLzf6mmp1gRTAqK3Ku
status: active
merged_into: null
display_name: 王綱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mYYaXKDKoPVy33bPyap3o9
        subject_person_id: p_am8LuLzf6mmp1gRTAqK3Ku
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BqkDSb49sV44FbcVX1435Z
          claim_id: c_mYYaXKDKoPVy33bPyap3o9
          source_id: s_QW79JWQkwwDuQMFdj7sgs7
          stance: supports
          locator: CBDB:456064
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（456064）
          source: &a1
            id: s_QW79JWQkwwDuQMFdj7sgs7
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 456064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456064&o=json
            external_identifier: CBDB:456064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.562Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rHGkUoXXdPLJ2C4JGouhE9
        subject_person_id: p_am8LuLzf6mmp1gRTAqK3Ku
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱，明人物。入仕監生，曾任訓導。（中国历代人物传记资料库 CBDB 456064）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yDZrp_tXNNEk6CHIjGcdka
          claim_id: c_rHGkUoXXdPLJ2C4JGouhE9
          source_id: s_QW79JWQkwwDuQMFdj7sgs7
          stance: supports
          locator: CBDB:456064
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
  descendants: []
  other: []
---

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | 王綱，明人物。入仕監生，曾任訓導。（中国历代人物传记资料库 CBDB 456064） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 456064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456064&o=json)
