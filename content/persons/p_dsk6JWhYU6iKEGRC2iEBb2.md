---
schema: wang-person/v1
id: p_dsk6JWhYU6iKEGRC2iEBb2
status: active
merged_into: null
display_name: 王崟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hTpSjzzZcNMFBxhArKbqgw
        subject_person_id: p_dsk6JWhYU6iKEGRC2iEBb2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ojChr7jx4orCdA5UoJj2y9
          claim_id: c_hTpSjzzZcNMFBxhArKbqgw
          source_id: s_mvv1Bm9auVRsJQW3mYT8Q7
          stance: supports
          locator: CBDB:445500
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445500）
          source: &a1
            id: s_mvv1Bm9auVRsJQW3mYT8Q7
            source_type: api_record
            title: 中国历代人物传记资料库：王崟（CBDB 445500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445500&o=json
            external_identifier: CBDB:445500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.147Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V61Xdv88apAzDZzZvB36J6
        subject_person_id: p_dsk6JWhYU6iKEGRC2iEBb2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v44o8gzWiDLDED9mQac5NR
          claim_id: c_V61Xdv88apAzDZzZvB36J6
          source_id: s_mvv1Bm9auVRsJQW3mYT8Q7
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

# 王崟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崟 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崟（CBDB 445500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445500&o=json)
