---
schema: wang-person/v1
id: p_CHhqzqzyQSUAH5PWjnDQmk
status: active
merged_into: null
display_name: 王澄慧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_etHvpLLSTvnG8si4R5xn76
        subject_person_id: p_CHhqzqzyQSUAH5PWjnDQmk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄慧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SdiRKcB7wB61bwUN1KmCFP
          claim_id: c_etHvpLLSTvnG8si4R5xn76
          source_id: s_yFi3APMGRHrL2dahkrV5KP
          stance: supports
          locator: CBDB:342671
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342671）
          source: &a1
            id: s_yFi3APMGRHrL2dahkrV5KP
            source_type: api_record
            title: 中国历代人物传记资料库：王澄慧（CBDB 342671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342671&o=json
            external_identifier: CBDB:342671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.009Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MzPJYK2u8v5fUsd3iWh2KR
        subject_person_id: p_CHhqzqzyQSUAH5PWjnDQmk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄慧，清人物。明清進士進士，籍贯睢州，入仕進士，曾任戶部員外郎、鄉試考官。（中国历代人物传记资料库 CBDB 342671）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8CvLQyjL2R0GGVel4jJX_P
          claim_id: c_MzPJYK2u8v5fUsd3iWh2KR
          source_id: s_yFi3APMGRHrL2dahkrV5KP
          stance: supports
          locator: CBDB:342671
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

# 王澄慧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澄慧 | accepted |
| bio.summary | 王澄慧，清人物。明清進士進士，籍贯睢州，入仕進士，曾任戶部員外郎、鄉試考官。（中国历代人物传记资料库 CBDB 342671） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澄慧（CBDB 342671）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342671&o=json)
