---
schema: wang-person/v1
id: p_HiG2GSGG1BU3tAoqGMnt3j
status: active
merged_into: null
display_name: 王鍇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vk1BUzLGq1vwteqhS7MEYD
        subject_person_id: p_HiG2GSGG1BU3tAoqGMnt3j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7NtQg9ARBfKGee5NyBso8C
          claim_id: c_Vk1BUzLGq1vwteqhS7MEYD
          source_id: s_WgcvsP2WM83DHnSGsdrLtq
          stance: supports
          locator: CBDB:175719
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175719）
          source: &a1
            id: s_WgcvsP2WM83DHnSGsdrLtq
            source_type: api_record
            title: 中国历代人物传记资料库：王鍇（CBDB 175719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175719&o=json
            external_identifier: CBDB:175719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.079Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_dTC9TeDb6v1H4XG5mKHZYS
        subject_person_id: p_HiG2GSGG1BU3tAoqGMnt3j
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 915年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z3ChiJ9BSaUnEMcciXr3GW
          claim_id: c_dTC9TeDb6v1H4XG5mKHZYS
          source_id: s_WgcvsP2WM83DHnSGsdrLtq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CSzKvXXi9j8cvtDfKbg2VF
        subject_person_id: p_HiG2GSGG1BU3tAoqGMnt3j
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
        - id: cs_7w39YNNGBc8NZStCZ9N6So
          claim_id: c_CSzKvXXi9j8cvtDfKbg2VF
          source_id: s_WgcvsP2WM83DHnSGsdrLtq
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

# 王鍇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍇 | accepted |
| death.date | 915年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍇（CBDB 175719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175719&o=json)
