---
schema: wang-person/v1
id: p_ni3QvWLsdPw67BvGMMNL8c
status: active
merged_into: null
display_name: 王居政
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k5612tKN9GUJKApPDsEZFy
        subject_person_id: p_ni3QvWLsdPw67BvGMMNL8c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3nHcdrzKFuSqHZ2Q6x2SSW
          claim_id: c_k5612tKN9GUJKApPDsEZFy
          source_id: s_GzbsQ1dJ2NvEfHQcfvS2r9
          stance: supports
          locator: CBDB:482539
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（482539）
          source: &a1
            id: s_GzbsQ1dJ2NvEfHQcfvS2r9
            source_type: api_record
            title: 中国历代人物传记资料库：王居政（CBDB 482539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=482539&o=json
            external_identifier: CBDB:482539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rgTCQQfMuUw1VuVJhPW3tW
        subject_person_id: p_ni3QvWLsdPw67BvGMMNL8c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居政，元人物。曾任推官。（中国历代人物传记资料库 CBDB 482539）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F58qXBMr2lZtudayFO1g2K
          claim_id: c_rgTCQQfMuUw1VuVJhPW3tW
          source_id: s_GzbsQ1dJ2NvEfHQcfvS2r9
          stance: supports
          locator: CBDB:482539
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

# 王居政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王居政 | accepted |
| bio.summary | 王居政，元人物。曾任推官。（中国历代人物传记资料库 CBDB 482539） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王居政（CBDB 482539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=482539&o=json)
