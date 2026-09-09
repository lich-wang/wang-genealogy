---
schema: wang-person/v1
id: p_7i2UfHQhQwGinD89G3F3Ex
status: active
merged_into: null
display_name: 王舜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zhSwJe3yLqUH2ZKRXJXZH5
        subject_person_id: p_7i2UfHQhQwGinD89G3F3Ex
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XDJtPYqQBfzhpJeLBWoETQ
          claim_id: c_zhSwJe3yLqUH2ZKRXJXZH5
          source_id: s_EL5QVc1UFCSuVwMNVorP3b
          stance: supports
          locator: CBDB:38486
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38486）
          source: &a1
            id: s_EL5QVc1UFCSuVwMNVorP3b
            source_type: api_record
            title: 中国历代人物传记资料库：王舜（CBDB 38486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38486&o=json
            external_identifier: CBDB:38486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.497Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c9Mc1mBWiwvZScFEn7ehJ5
        subject_person_id: p_7i2UfHQhQwGinD89G3F3Ex
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8DQqcf1pG7FUfAXCmKF6CX
          claim_id: c_c9Mc1mBWiwvZScFEn7ehJ5
          source_id: s_EL5QVc1UFCSuVwMNVorP3b
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

# 王舜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舜 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舜（CBDB 38486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38486&o=json)
