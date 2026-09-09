---
schema: wang-person/v1
id: p_XVdUz1uj9P5L1HGhQ8MZA4
status: active
merged_into: null
display_name: 王价
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_siDu3u8x1YPWKhoDiXKtXL
        subject_person_id: p_XVdUz1uj9P5L1HGhQ8MZA4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王价
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QJS1jwNuCifRRcMy4XHDGU
          claim_id: c_siDu3u8x1YPWKhoDiXKtXL
          source_id: s_XMKdxAGYyP6rgnMGTw4DyN
          stance: supports
          locator: CBDB:262459
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262459）
          source: &a1
            id: s_XMKdxAGYyP6rgnMGTw4DyN
            source_type: api_record
            title: 中国历代人物传记资料库：王价（CBDB 262459）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262459&o=json
            external_identifier: CBDB:262459
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.590Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cp7X9PAQmD8Lwhiprj5tw5
        subject_person_id: p_XVdUz1uj9P5L1HGhQ8MZA4
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
        - id: cs_pb8J6wfMoMMHw4v7Fg2cYb
          claim_id: c_cp7X9PAQmD8Lwhiprj5tw5
          source_id: s_XMKdxAGYyP6rgnMGTw4DyN
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

# 王价

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王价 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王价（CBDB 262459）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262459&o=json)
