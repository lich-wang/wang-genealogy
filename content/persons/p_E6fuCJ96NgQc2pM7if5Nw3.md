---
schema: wang-person/v1
id: p_E6fuCJ96NgQc2pM7if5Nw3
status: active
merged_into: null
display_name: 王陞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_abJ17gwpM5mvcmr9279qJW
        subject_person_id: p_E6fuCJ96NgQc2pM7if5Nw3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PqAQNWPTFVfG4S6bRyVwBQ
          claim_id: c_abJ17gwpM5mvcmr9279qJW
          source_id: s_iZrXrq3ngT8BttbUcn18K7
          stance: supports
          locator: CBDB:476760
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（476760）
          source: &a1
            id: s_iZrXrq3ngT8BttbUcn18K7
            source_type: api_record
            title: 中国历代人物传记资料库：王陞（CBDB 476760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476760&o=json
            external_identifier: CBDB:476760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bGvQ9GTRu5q3fJM3srWeDA
        subject_person_id: p_E6fuCJ96NgQc2pM7if5Nw3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陞，明人物。入仕鄉貢舉人，曾任通判。（中国历代人物传记资料库 CBDB 476760）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j8N6CN2O0ULm08XBRoXKXj
          claim_id: c_bGvQ9GTRu5q3fJM3srWeDA
          source_id: s_iZrXrq3ngT8BttbUcn18K7
          stance: supports
          locator: CBDB:476760
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

# 王陞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王陞 | accepted |
| bio.summary | 王陞，明人物。入仕鄉貢舉人，曾任通判。（中国历代人物传记资料库 CBDB 476760） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王陞（CBDB 476760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476760&o=json)
