---
schema: wang-person/v1
id: p_b5R1So1Z3XLD4KqnNJufMg
status: active
merged_into: null
display_name: 王悅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hmgqQQBTnu4z6Mb7U5M1D3
        subject_person_id: p_b5R1So1Z3XLD4KqnNJufMg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王悅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XGjRAwuF8UNwVDLG2Jeq4H
          claim_id: c_hmgqQQBTnu4z6Mb7U5M1D3
          source_id: s_gkpF29M2yFHEnWt6f6Ce9i
          stance: supports
          locator: CBDB:25789
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25789）
          source: &a1
            id: s_gkpF29M2yFHEnWt6f6Ce9i
            source_type: api_record
            title: 中国历代人物传记资料库：王悅（CBDB 25789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25789&o=json
            external_identifier: CBDB:25789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.918Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8NLsk5sRGgAztGwFPW3BRq
        subject_person_id: p_b5R1So1Z3XLD4KqnNJufMg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为東晉人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A4bTR5DTsKsKNPLDKWaHnw
          claim_id: c_8NLsk5sRGgAztGwFPW3BRq
          source_id: s_gkpF29M2yFHEnWt6f6Ce9i
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

# 王悅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王悅 | accepted |
| bio.summary | CBDB 记载为東晉人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王悅（CBDB 25789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25789&o=json)
