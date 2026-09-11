---
schema: wang-person/v1
id: p_mXkwDN1VUJs6jFQiQGhJAA
status: active
merged_into: null
display_name: 王禎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kUnW6KKoBh92nhu7b1HLin
        subject_person_id: p_mXkwDN1VUJs6jFQiQGhJAA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bp2JK2jQbEdygWdka1D6yc
          claim_id: c_kUnW6KKoBh92nhu7b1HLin
          source_id: s_vZGaxXy8LP6brNcKf8s7bM
          stance: supports
          locator: CBDB:508480
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（508480）
          source: &a1
            id: s_vZGaxXy8LP6brNcKf8s7bM
            source_type: api_record
            title: 中国历代人物传记资料库：王禎（CBDB 508480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508480&o=json
            external_identifier: CBDB:508480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.088Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G4xJQFcWRS3JPbqcLiBods
        subject_person_id: p_mXkwDN1VUJs6jFQiQGhJAA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禎，明人物。入仕世襲(替)，曾任百戶。（中国历代人物传记资料库 CBDB 508480）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YizJ6MXZXntH6UGWMKX2s9
          claim_id: c_G4xJQFcWRS3JPbqcLiBods
          source_id: s_vZGaxXy8LP6brNcKf8s7bM
          stance: supports
          locator: CBDB:508480
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

# 王禎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禎 | accepted |
| bio.summary | 王禎，明人物。入仕世襲(替)，曾任百戶。（中国历代人物传记资料库 CBDB 508480） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禎（CBDB 508480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508480&o=json)
