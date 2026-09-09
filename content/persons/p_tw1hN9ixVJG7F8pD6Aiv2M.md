---
schema: wang-person/v1
id: p_tw1hN9ixVJG7F8pD6Aiv2M
status: active
merged_into: null
display_name: 王溥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S8W5po8BHhgHqmK56XbaG9
        subject_person_id: p_tw1hN9ixVJG7F8pD6Aiv2M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HRsL3iQ8JJs21ioMgbe8Hs
          claim_id: c_S8W5po8BHhgHqmK56XbaG9
          source_id: s_gSDoNjrnJ73JPgf7fvRnMq
          stance: supports
          locator: CBDB:467191
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（467191）
          source: &a1
            id: s_gSDoNjrnJ73JPgf7fvRnMq
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 467191）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467191&o=json
            external_identifier: CBDB:467191
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.011Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hqqkAy9sFfBRCt5WQguU3B
        subject_person_id: p_tw1hN9ixVJG7F8pD6Aiv2M
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
        - id: cs_SUtim132f82D6k3hoiN7gK
          claim_id: c_hqqkAy9sFfBRCt5WQguU3B
          source_id: s_gSDoNjrnJ73JPgf7fvRnMq
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

# 王溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溥 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王溥（CBDB 467191）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467191&o=json)
