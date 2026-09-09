---
schema: wang-person/v1
id: p_zjAp5GG3WSvDfuHDHGpQQJ
status: active
merged_into: null
display_name: 王廷芳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kjLJPSwr4SGSjhSWL51ysG
        subject_person_id: p_zjAp5GG3WSvDfuHDHGpQQJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WfounmzAPZf3iMfeAiGfo3
          claim_id: c_kjLJPSwr4SGSjhSWL51ysG
          source_id: s_UkZK4eGkEHLMoeUXEaLKL9
          stance: supports
          locator: CBDB:301179
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（301179）
          source: &a1
            id: s_UkZK4eGkEHLMoeUXEaLKL9
            source_type: api_record
            title: 中国历代人物传记资料库：王廷芳（CBDB 301179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301179&o=json
            external_identifier: CBDB:301179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.636Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DD4v1uK1xouX4HXKM9S6s7
        subject_person_id: p_zjAp5GG3WSvDfuHDHGpQQJ
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
        - id: cs_uYr8YUxkr3KdWKPXVKDwgi
          claim_id: c_DD4v1uK1xouX4HXKM9S6s7
          source_id: s_UkZK4eGkEHLMoeUXEaLKL9
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

# 王廷芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷芳 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷芳（CBDB 301179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301179&o=json)
