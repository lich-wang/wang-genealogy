---
schema: wang-person/v1
id: p_CXGDZ4TtenvyXzccKHr5Hz
status: active
merged_into: null
display_name: 王巍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_obrw71KqqUFPBXKmEMjj8Q
        subject_person_id: p_CXGDZ4TtenvyXzccKHr5Hz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pUrNQQjJdJM8pHdcUSAiYY
          claim_id: c_obrw71KqqUFPBXKmEMjj8Q
          source_id: s_KmAxTzQfmgiYSXNYqEADCU
          stance: supports
          locator: CBDB:61255
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61255）
          source: &a1
            id: s_KmAxTzQfmgiYSXNYqEADCU
            source_type: api_record
            title: 中国历代人物传记资料库：王巍（CBDB 61255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61255&o=json
            external_identifier: CBDB:61255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_69GWEes4qXZSLRb3z3shE2
        subject_person_id: p_CXGDZ4TtenvyXzccKHr5Hz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巍，清人物。入仕武舉人，曾任協中軍都司、鎮標左營遊擊、鎮總兵。（中国历代人物传记资料库 CBDB 61255）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_S0rUQpt7qStspjwg6Q_kaU
          claim_id: c_69GWEes4qXZSLRb3z3shE2
          source_id: s_KmAxTzQfmgiYSXNYqEADCU
          stance: supports
          locator: CBDB:61255
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

# 王巍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王巍 | accepted |
| bio.summary | 王巍，清人物。入仕武舉人，曾任協中軍都司、鎮標左營遊擊、鎮總兵。（中国历代人物传记资料库 CBDB 61255） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王巍（CBDB 61255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61255&o=json)
