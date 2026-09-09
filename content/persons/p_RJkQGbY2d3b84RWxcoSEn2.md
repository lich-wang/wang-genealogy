---
schema: wang-person/v1
id: p_RJkQGbY2d3b84RWxcoSEn2
status: active
merged_into: null
display_name: 王堯華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h1BKQ4QVkwjL4mni7KnNYD
        subject_person_id: p_RJkQGbY2d3b84RWxcoSEn2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1762R4Gu6K2ZW3vPGGHsFS
          claim_id: c_h1BKQ4QVkwjL4mni7KnNYD
          source_id: s_SNH9az93hSdmv4p4K66vWF
          stance: supports
          locator: CBDB:568732
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568732）
          source: &a1
            id: s_SNH9az93hSdmv4p4K66vWF
            source_type: api_record
            title: 中国历代人物传记资料库：王堯華（CBDB 568732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568732&o=json
            external_identifier: CBDB:568732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.860Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YpmrMiXAoC6BYob1mQvfKs
        subject_person_id: p_RJkQGbY2d3b84RWxcoSEn2
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
        - id: cs_mbu1duq5kBvbpuXkuz8HwD
          claim_id: c_YpmrMiXAoC6BYob1mQvfKs
          source_id: s_SNH9az93hSdmv4p4K66vWF
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

# 王堯華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堯華 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王堯華（CBDB 568732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568732&o=json)
