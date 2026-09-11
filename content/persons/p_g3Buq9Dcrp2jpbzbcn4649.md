---
schema: wang-person/v1
id: p_g3Buq9Dcrp2jpbzbcn4649
status: active
merged_into: null
display_name: 王蘊章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ljqhovu2rHQaM9v6wP2z7v
        subject_person_id: p_g3Buq9Dcrp2jpbzbcn4649
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘊章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1tGCLZyFMvk2tCPt9dtYva
          claim_id: c_Ljqhovu2rHQaM9v6wP2z7v
          source_id: s_6vw61MLJzSAYwYL7mB6ya7
          stance: supports
          locator: CBDB:691201
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（691201）
          source: &a1
            id: s_6vw61MLJzSAYwYL7mB6ya7
            source_type: api_record
            title: 中国历代人物传记资料库：王蘊章（CBDB 691201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691201&o=json
            external_identifier: CBDB:691201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.603Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_VrPMw4HYGmvSGK7S343xYU
        subject_person_id: p_g3Buq9Dcrp2jpbzbcn4649
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1884年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cCMHi8cd8x6S1AWwf2JVQR
          claim_id: c_VrPMw4HYGmvSGK7S343xYU
          source_id: s_6vw61MLJzSAYwYL7mB6ya7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PLGEjkxzo6CJ4hFoFFGwpr
        subject_person_id: p_g3Buq9Dcrp2jpbzbcn4649
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1942年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9FxzrFRxqZHiL9vQACU1Pa
          claim_id: c_PLGEjkxzo6CJ4hFoFFGwpr
          source_id: s_6vw61MLJzSAYwYL7mB6ya7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y8MV1EaX6vXuprXcNuv3um
        subject_person_id: p_g3Buq9Dcrp2jpbzbcn4649
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘊章（1884年—1942年），中華民國人物。籍贯無錫，身份为戲曲作家，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 691201）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JoxUgY_N9hfTTV3i6ChbAw
          claim_id: c_Y8MV1EaX6vXuprXcNuv3um
          source_id: s_6vw61MLJzSAYwYL7mB6ya7
          stance: supports
          locator: CBDB:691201
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

# 王蘊章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘊章 | accepted |
| birth.date | 1884年 | accepted |
| death.date | 1942年 | accepted |
| bio.summary | 王蘊章（1884年—1942年），中華民國人物。籍贯無錫，身份为戲曲作家，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 691201） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘊章（CBDB 691201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691201&o=json)
