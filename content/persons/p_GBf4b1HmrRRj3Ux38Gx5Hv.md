---
schema: wang-person/v1
id: p_GBf4b1HmrRRj3Ux38Gx5Hv
status: active
merged_into: null
display_name: 王子卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XwgUKPgMgy7Enejs5Zzvc6
        subject_person_id: p_GBf4b1HmrRRj3Ux38Gx5Hv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_82DJAp7K7DDsEN7kAxH59n
          claim_id: c_XwgUKPgMgy7Enejs5Zzvc6
          source_id: s_VHuWKkxgrHdpNZE1BMKxZu
          stance: supports
          locator: CBDB:265622
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265622）
          source: &a1
            id: s_VHuWKkxgrHdpNZE1BMKxZu
            source_type: api_record
            title: 中国历代人物传记资料库：王子卿（CBDB 265622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265622&o=json
            external_identifier: CBDB:265622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2C6k2uRcQWssr6yrJv2gX6
        subject_person_id: p_GBf4b1HmrRRj3Ux38Gx5Hv
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
        - id: cs_DU9Wj4Nm6BXsuDw3Gf5gEA
          claim_id: c_2C6k2uRcQWssr6yrJv2gX6
          source_id: s_VHuWKkxgrHdpNZE1BMKxZu
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

# 王子卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子卿 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子卿（CBDB 265622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265622&o=json)
