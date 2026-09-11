---
schema: wang-person/v1
id: p_HKDr4WqMxqe47AmDhxrfoZ
status: active
merged_into: null
display_name: 王汝揆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Agou5LS312c7F8jnjtwza6
        subject_person_id: p_HKDr4WqMxqe47AmDhxrfoZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝揆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VSv6Y6R6yuAMXrraTA8js6
          claim_id: c_Agou5LS312c7F8jnjtwza6
          source_id: s_1JfNxqNyAafd6MwUuB8mFR
          stance: supports
          locator: CBDB:290269
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290269）
          source: &a1
            id: s_1JfNxqNyAafd6MwUuB8mFR
            source_type: api_record
            title: 中国历代人物传记资料库：王汝揆（CBDB 290269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290269&o=json
            external_identifier: CBDB:290269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5KwAAbSP25SdXn4LMN8eqv
        subject_person_id: p_HKDr4WqMxqe47AmDhxrfoZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝揆，明人物。嘉靖八年進士，籍贯德州。（中国历代人物传记资料库 CBDB 290269）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hABH-z97rNxf2IetU9S3LZ
          claim_id: c_5KwAAbSP25SdXn4LMN8eqv
          source_id: s_1JfNxqNyAafd6MwUuB8mFR
          stance: supports
          locator: CBDB:290269
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

# 王汝揆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝揆 | accepted |
| bio.summary | 王汝揆，明人物。嘉靖八年進士，籍贯德州。（中国历代人物传记资料库 CBDB 290269） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝揆（CBDB 290269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290269&o=json)
