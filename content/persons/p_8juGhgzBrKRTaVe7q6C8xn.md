---
schema: wang-person/v1
id: p_8juGhgzBrKRTaVe7q6C8xn
status: active
merged_into: null
display_name: 王崑崖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DhFwLRLffuP5pwnZS1LU4d
        subject_person_id: p_8juGhgzBrKRTaVe7q6C8xn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崑崖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MMJAvV2T438Kehfc8vwfZz
          claim_id: c_DhFwLRLffuP5pwnZS1LU4d
          source_id: s_8m6uRD8HVQVgzhCBffdDb2
          stance: supports
          locator: CBDB:459678
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（459678）
          source: &a1
            id: s_8m6uRD8HVQVgzhCBffdDb2
            source_type: api_record
            title: 中国历代人物传记资料库：王崑崖（CBDB 459678）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459678&o=json
            external_identifier: CBDB:459678
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.718Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QTkAAcX2UWqmLNdw21WebG
        subject_person_id: p_8juGhgzBrKRTaVe7q6C8xn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t9Q7PP491e24z6wDgfGdt4
          claim_id: c_QTkAAcX2UWqmLNdw21WebG
          source_id: s_8m6uRD8HVQVgzhCBffdDb2
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

# 王崑崖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崑崖 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崑崖（CBDB 459678）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459678&o=json)
