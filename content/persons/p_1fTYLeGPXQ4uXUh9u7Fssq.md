---
schema: wang-person/v1
id: p_1fTYLeGPXQ4uXUh9u7Fssq
status: active
merged_into: null
display_name: 王徵瑞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2L9EREpMX7rpDUN891UiAx
        subject_person_id: p_1fTYLeGPXQ4uXUh9u7Fssq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徵瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R9A2RGFuZPZmDtxt4pTaPt
          claim_id: c_2L9EREpMX7rpDUN891UiAx
          source_id: s_A7QcuWJv6q572EK85NUGGX
          stance: supports
          locator: CBDB:694590
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694590）
          source: &a1
            id: s_A7QcuWJv6q572EK85NUGGX
            source_type: api_record
            title: 中国历代人物传记资料库：王徵瑞（CBDB 694590）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694590&o=json
            external_identifier: CBDB:694590
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.524Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bcLaTPBd3k54ggcrf2yGPt
        subject_person_id: p_1fTYLeGPXQ4uXUh9u7Fssq
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
        - id: cs_yS589YJwnLFV2HwZ4Sp1Ef
          claim_id: c_bcLaTPBd3k54ggcrf2yGPt
          source_id: s_A7QcuWJv6q572EK85NUGGX
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

# 王徵瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王徵瑞 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王徵瑞（CBDB 694590）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694590&o=json)
