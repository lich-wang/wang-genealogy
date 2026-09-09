---
schema: wang-person/v1
id: p_vKvHG7UMXSLLWFpR2WERxD
status: active
merged_into: null
display_name: 王震
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hrbmmK1NbB6jz4N4FGmG1r
        subject_person_id: p_vKvHG7UMXSLLWFpR2WERxD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XG28NK9h9PkegY31H6egnr
          claim_id: c_hrbmmK1NbB6jz4N4FGmG1r
          source_id: s_sEg5K173jXX89aht4NNHGc
          stance: supports
          locator: CBDB:451206
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（451206）
          source: &a1
            id: s_sEg5K173jXX89aht4NNHGc
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 451206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=451206&o=json
            external_identifier: CBDB:451206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.251Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9qP5v5iH4y9FvHPTQV5ehd
        subject_person_id: p_vKvHG7UMXSLLWFpR2WERxD
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
        - id: cs_r3Qo7FFuZHhA1T398DK756
          claim_id: c_9qP5v5iH4y9FvHPTQV5ehd
          source_id: s_sEg5K173jXX89aht4NNHGc
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

# 王震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王震 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王震（CBDB 451206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=451206&o=json)
