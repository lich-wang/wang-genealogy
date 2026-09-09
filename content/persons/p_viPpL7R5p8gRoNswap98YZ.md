---
schema: wang-person/v1
id: p_viPpL7R5p8gRoNswap98YZ
status: active
merged_into: null
display_name: 王士能
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kBo53MpgGpc86pStF5k1R3
        subject_person_id: p_viPpL7R5p8gRoNswap98YZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士能
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EatMFBEph2vT95HPK7DiPe
          claim_id: c_kBo53MpgGpc86pStF5k1R3
          source_id: s_z6z5pXJW9xJVdGXchJGMTn
          stance: supports
          locator: CBDB:209338
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209338）
          source: &a1
            id: s_z6z5pXJW9xJVdGXchJGMTn
            source_type: api_record
            title: 中国历代人物传记资料库：王士能（CBDB 209338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209338&o=json
            external_identifier: CBDB:209338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YdxJ4V2BRypPUCkm56JD6E
        subject_person_id: p_viPpL7R5p8gRoNswap98YZ
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
        - id: cs_FnfhbC6ou7udFRAtHHs5uB
          claim_id: c_YdxJ4V2BRypPUCkm56JD6E
          source_id: s_z6z5pXJW9xJVdGXchJGMTn
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

# 王士能

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士能 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士能（CBDB 209338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209338&o=json)
