---
schema: wang-person/v1
id: p_39GvdpgmfJ6WNqFacLWaGh
status: active
merged_into: null
display_name: 王巨孝
cbdb_id: 69136
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SAmW3iQdVRJ9sRu1s21jWf
        subject_person_id: p_39GvdpgmfJ6WNqFacLWaGh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巨孝（卒于1874年），清人物。籍贯歸德府，入仕武舉進士，曾任協副將、營都司、營遊擊。（中国历代人物传记资料库 CBDB 69136）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_hqEqFeDm-3Y5qfd60JyDQ0
          claim_id: c_SAmW3iQdVRJ9sRu1s21jWf
          source_id: s_K9iv8CQtJHfFNm1PBkRa2b
          stance: supports
          locator: CBDB:69136
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_K9iv8CQtJHfFNm1PBkRa2b
            source_type: api_record
            title: 中国历代人物传记资料库：王巨孝（CBDB 69136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69136&o=json
            external_identifier: CBDB:69136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2niQQ5HbSbChL3Q8zaf6Zj
        subject_person_id: p_39GvdpgmfJ6WNqFacLWaGh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1874年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1874-01-01
            latest: 1874-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tUVF3Lg1JSg97S3kN3cYF1
          claim_id: c_2niQQ5HbSbChL3Q8zaf6Zj
          source_id: s_K9iv8CQtJHfFNm1PBkRa2b
          stance: supports
          locator: CBDB:69136
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1874
          source:
            id: s_K9iv8CQtJHfFNm1PBkRa2b
            source_type: api_record
            title: 中国历代人物传记资料库：王巨孝（CBDB 69136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69136&o=json
            external_identifier: CBDB:69136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_t4f494oroB81sXpv8HrdSa
        subject_person_id: p_39GvdpgmfJ6WNqFacLWaGh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巨孝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rAHfMMCkv5epFUm67YFSTd
          claim_id: c_t4f494oroB81sXpv8HrdSa
          source_id: s_K9iv8CQtJHfFNm1PBkRa2b
          stance: supports
          locator: CBDB:69136
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1874
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

# 王巨孝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王巨孝（卒于1874年），清人物。籍贯歸德府，入仕武舉進士，曾任協副將、營都司、營遊擊。（中国历代人物传记资料库 CBDB 69136） | accepted |
| death.date | 1874年 | accepted |
| name.primary | 王巨孝 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王巨孝（CBDB 69136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69136&o=json)
