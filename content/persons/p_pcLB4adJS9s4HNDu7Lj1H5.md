---
schema: wang-person/v1
id: p_pcLB4adJS9s4HNDu7Lj1H5
status: active
merged_into: null
display_name: 王錫瑑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c3URrBMUU9e14hmBkKyphv
        subject_person_id: p_pcLB4adJS9s4HNDu7Lj1H5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫瑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fvo8LgvTzGSHWrZcu4RUzx
          claim_id: c_c3URrBMUU9e14hmBkKyphv
          source_id: s_g7oMdXWFbLYbg35Q1aDG4s
          stance: supports
          locator: CBDB:640621
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640621）
          source: &a1
            id: s_g7oMdXWFbLYbg35Q1aDG4s
            source_type: api_record
            title: 中国历代人物传记资料库：王錫瑑（CBDB 640621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640621&o=json
            external_identifier: CBDB:640621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.317Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yVvcycLAATXWEwSbbJC2SH
        subject_person_id: p_pcLB4adJS9s4HNDu7Lj1H5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫瑑，清人物。籍贯河內，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 640621）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__oaYsLPt5xP1xn9HOyB6uE
          claim_id: c_yVvcycLAATXWEwSbbJC2SH
          source_id: s_g7oMdXWFbLYbg35Q1aDG4s
          stance: supports
          locator: CBDB:640621
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

# 王錫瑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫瑑 | accepted |
| bio.summary | 王錫瑑，清人物。籍贯河內，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 640621） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫瑑（CBDB 640621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640621&o=json)
