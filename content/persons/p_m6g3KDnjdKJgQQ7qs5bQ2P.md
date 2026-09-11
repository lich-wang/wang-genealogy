---
schema: wang-person/v1
id: p_m6g3KDnjdKJgQQ7qs5bQ2P
status: active
merged_into: null
display_name: 王琨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1A724qsSrnj8m9RGoxQJV6
        subject_person_id: p_m6g3KDnjdKJgQQ7qs5bQ2P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KNSLwbqEVQAq5HCau1fHTw
          claim_id: c_1A724qsSrnj8m9RGoxQJV6
          source_id: s_L7uScMykVE7ozrvdVXbYnq
          stance: supports
          locator: CBDB:475988
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（475988）
          source: &a1
            id: s_L7uScMykVE7ozrvdVXbYnq
            source_type: api_record
            title: 中国历代人物传记资料库：王琨（CBDB 475988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475988&o=json
            external_identifier: CBDB:475988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.435Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LbrYEcvPY2y99Aj7jN3HqK
        subject_person_id: p_m6g3KDnjdKJgQQ7qs5bQ2P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琨，明人物。入仕進士。（中国历代人物传记资料库 CBDB 475988）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Oj7Quzsy-mjo9NO4HpV8Oj
          claim_id: c_LbrYEcvPY2y99Aj7jN3HqK
          source_id: s_L7uScMykVE7ozrvdVXbYnq
          stance: supports
          locator: CBDB:475988
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王琨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琨 | accepted |
| bio.summary | 王琨，明人物。入仕進士。（中国历代人物传记资料库 CBDB 475988） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琨（CBDB 475988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475988&o=json)
