---
schema: wang-person/v1
id: p_FEYWQFkPcP4MoBMykCedVH
status: active
merged_into: null
display_name: 王恩綸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SnJkuB7YPqREifQKUcTMCJ
        subject_person_id: p_FEYWQFkPcP4MoBMykCedVH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E18J16NZPBexQM2Ygn2s8X
          claim_id: c_SnJkuB7YPqREifQKUcTMCJ
          source_id: s_r3GA2i3WC9HXuCthQikJLC
          stance: supports
          locator: CBDB:637857
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637857）
          source: &a1
            id: s_r3GA2i3WC9HXuCthQikJLC
            source_type: api_record
            title: 中国历代人物传记资料库：王恩綸（CBDB 637857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637857&o=json
            external_identifier: CBDB:637857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9BrcM6t3F6Hepc1JYrF2GH
        subject_person_id: p_FEYWQFkPcP4MoBMykCedVH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩綸，清人物。籍贯廣南府，入仕鄉貢舉人，曾任教授、復設訓導。（中国历代人物传记资料库 CBDB 637857）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xEzd3Mor6oFADvbdGGNhcu
          claim_id: c_9BrcM6t3F6Hepc1JYrF2GH
          source_id: s_r3GA2i3WC9HXuCthQikJLC
          stance: supports
          locator: CBDB:637857
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

# 王恩綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恩綸 | accepted |
| bio.summary | 王恩綸，清人物。籍贯廣南府，入仕鄉貢舉人，曾任教授、復設訓導。（中国历代人物传记资料库 CBDB 637857） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恩綸（CBDB 637857）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637857&o=json)
