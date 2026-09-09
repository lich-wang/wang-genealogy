---
schema: wang-person/v1
id: p_78yNoGkxXzyy3Nc3EYWtgS
status: active
merged_into: null
display_name: 王翔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1NZaornX3CjB19h9QXNH97
        subject_person_id: p_78yNoGkxXzyy3Nc3EYWtgS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jEhuVJ1QoQDRrp9w7jWpgn
          claim_id: c_1NZaornX3CjB19h9QXNH97
          source_id: s_Zj8YVbYuBe1w8DYvg7dMtG
          stance: supports
          locator: CBDB:491242
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（491242）
          source: &a1
            id: s_Zj8YVbYuBe1w8DYvg7dMtG
            source_type: api_record
            title: 中国历代人物传记资料库：王翔（CBDB 491242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491242&o=json
            external_identifier: CBDB:491242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.169Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X7W9KQ5QwohmhbJ1GhH7Uf
        subject_person_id: p_78yNoGkxXzyy3Nc3EYWtgS
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
        - id: cs_AoNCY2Crako1mGxafvf9LM
          claim_id: c_X7W9KQ5QwohmhbJ1GhH7Uf
          source_id: s_Zj8YVbYuBe1w8DYvg7dMtG
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

# 王翔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翔 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翔（CBDB 491242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491242&o=json)
