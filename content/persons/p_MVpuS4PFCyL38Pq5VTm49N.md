---
schema: wang-person/v1
id: p_MVpuS4PFCyL38Pq5VTm49N
status: active
merged_into: null
display_name: 王賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tU6eChxyxe3b3PaAP1T8pu
        subject_person_id: p_MVpuS4PFCyL38Pq5VTm49N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u99yc3xMx5sYp93GZzWoBT
          claim_id: c_tU6eChxyxe3b3PaAP1T8pu
          source_id: s_JxG7QSGC3knB4xgfRLCBg9
          stance: supports
          locator: CBDB:280992
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280992）
          source: &a1
            id: s_JxG7QSGC3knB4xgfRLCBg9
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 280992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280992&o=json
            external_identifier: CBDB:280992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.037Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wHNGcy4gaRJdbAHvdDKb9n
        subject_person_id: p_MVpuS4PFCyL38Pq5VTm49N
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
        - id: cs_tJf5sqsQZXu6rqzbbN6J3D
          claim_id: c_wHNGcy4gaRJdbAHvdDKb9n
          source_id: s_JxG7QSGC3knB4xgfRLCBg9
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

# 王賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賓 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 280992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280992&o=json)
