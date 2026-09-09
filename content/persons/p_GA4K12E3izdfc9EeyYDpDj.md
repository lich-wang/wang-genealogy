---
schema: wang-person/v1
id: p_GA4K12E3izdfc9EeyYDpDj
status: active
merged_into: null
display_name: 王作哲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hm4d17vojeFdP8M8AcsFHD
        subject_person_id: p_GA4K12E3izdfc9EeyYDpDj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作哲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tQYV2gWuSsL7HGGbhr4sq1
          claim_id: c_hm4d17vojeFdP8M8AcsFHD
          source_id: s_jLB4DXrTSpKJ2XnLV63x2i
          stance: supports
          locator: CBDB:342454
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342454）
          source: &a1
            id: s_jLB4DXrTSpKJ2XnLV63x2i
            source_type: api_record
            title: 中国历代人物传记资料库：王作哲（CBDB 342454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342454&o=json
            external_identifier: CBDB:342454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8dVekPvMq6vsTqCfZqB7kf
        subject_person_id: p_GA4K12E3izdfc9EeyYDpDj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ew21mkMFqSybmXmMbRznUx
          claim_id: c_8dVekPvMq6vsTqCfZqB7kf
          source_id: s_jLB4DXrTSpKJ2XnLV63x2i
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

# 王作哲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王作哲 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王作哲（CBDB 342454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342454&o=json)
