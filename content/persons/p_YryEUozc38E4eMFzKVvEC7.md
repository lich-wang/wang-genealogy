---
schema: wang-person/v1
id: p_YryEUozc38E4eMFzKVvEC7
status: active
merged_into: null
display_name: 王才
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yzsFBdFhDUzu1amuRZP41E
        subject_person_id: p_YryEUozc38E4eMFzKVvEC7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vKuZW2FH8NHdSnTCTQBZeM
          claim_id: c_yzsFBdFhDUzu1amuRZP41E
          source_id: s_wuJQv1NrBro31kgN2wFQfp
          stance: supports
          locator: CBDB:150531
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（150531）
          source: &a1
            id: s_wuJQv1NrBro31kgN2wFQfp
            source_type: api_record
            title: 中国历代人物传记资料库：王才（CBDB 150531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150531&o=json
            external_identifier: CBDB:150531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8B5jMCxm1wjD9UoZ2d49Fe
        subject_person_id: p_YryEUozc38E4eMFzKVvEC7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y6DBtGC3ek4SEoCixjqhAK
          claim_id: c_8B5jMCxm1wjD9UoZ2d49Fe
          source_id: s_wuJQv1NrBro31kgN2wFQfp
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

# 王才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王才 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王才（CBDB 150531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150531&o=json)
