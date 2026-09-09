---
schema: wang-person/v1
id: p_NP83eRQZCVJ4JAS1U7Qz9a
status: active
merged_into: null
display_name: 王多煌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oJC1VQnQ6tFqEVLTiN4qV2
        subject_person_id: p_NP83eRQZCVJ4JAS1U7Qz9a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王多煌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1yByWTCFUvGrQUe4xH31cF
          claim_id: c_oJC1VQnQ6tFqEVLTiN4qV2
          source_id: s_551sh9fBFe9PusyHTuN6FA
          stance: supports
          locator: CBDB:530971
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（530971）
          source: &a1
            id: s_551sh9fBFe9PusyHTuN6FA
            source_type: api_record
            title: 中国历代人物传记资料库：王多煌（CBDB 530971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=530971&o=json
            external_identifier: CBDB:530971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.357Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mmzt1GWJa1it8b5G2m9Rn6
        subject_person_id: p_NP83eRQZCVJ4JAS1U7Qz9a
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
        - id: cs_ZQfxd4UVarKBx7qvUMP18X
          claim_id: c_Mmzt1GWJa1it8b5G2m9Rn6
          source_id: s_551sh9fBFe9PusyHTuN6FA
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

# 王多煌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王多煌 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王多煌（CBDB 530971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=530971&o=json)
