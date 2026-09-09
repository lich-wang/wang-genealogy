---
schema: wang-person/v1
id: p_kV2M8mNuL5tX3Lt5LuEirX
status: active
merged_into: null
display_name: 王景
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TFwCdyEA6WhDpkbnrLyaBg
        subject_person_id: p_kV2M8mNuL5tX3Lt5LuEirX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B2JZ5fY6kGeMJyRiZKz6vw
          claim_id: c_TFwCdyEA6WhDpkbnrLyaBg
          source_id: s_2n5k1paB8JychxEVpiQdp5
          stance: supports
          locator: CBDB:495658
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（495658）
          source: &a1
            id: s_2n5k1paB8JychxEVpiQdp5
            source_type: api_record
            title: 中国历代人物传记资料库：王景（CBDB 495658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495658&o=json
            external_identifier: CBDB:495658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.507Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4EtNZ6FwisF3GLMjbAaKP8
        subject_person_id: p_kV2M8mNuL5tX3Lt5LuEirX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为後晉人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cthh6Mpy2FkeiaB39S5496
          claim_id: c_4EtNZ6FwisF3GLMjbAaKP8
          source_id: s_2n5k1paB8JychxEVpiQdp5
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

# 王景

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景 | accepted |
| bio.summary | CBDB 记载为後晉人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景（CBDB 495658）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495658&o=json)
