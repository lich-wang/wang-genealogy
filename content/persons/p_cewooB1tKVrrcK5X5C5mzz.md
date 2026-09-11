---
schema: wang-person/v1
id: p_cewooB1tKVrrcK5X5C5mzz
status: active
merged_into: null
display_name: 王俊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2PHEJTsFUUxXAC9EvMLez7
        subject_person_id: p_cewooB1tKVrrcK5X5C5mzz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MYRnMAF4dmQ9h5Hk2hyNUL
          claim_id: c_2PHEJTsFUUxXAC9EvMLez7
          source_id: s_XGsG5GtLrMv2wWj1C66GKs
          stance: supports
          locator: CBDB:491831
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（491831）
          source: &a1
            id: s_XGsG5GtLrMv2wWj1C66GKs
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 491831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491831&o=json
            external_identifier: CBDB:491831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.220Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hQ4fsQy9QaBZ7zB719fxjE
        subject_person_id: p_cewooB1tKVrrcK5X5C5mzz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 491831）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_p-hov3jhSaoZNfDzExdGVp
          claim_id: c_hQ4fsQy9QaBZ7zB719fxjE
          source_id: s_XGsG5GtLrMv2wWj1C66GKs
          stance: supports
          locator: CBDB:491831
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

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| bio.summary | 王俊，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 491831） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 491831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491831&o=json)
