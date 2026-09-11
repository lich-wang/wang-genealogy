---
schema: wang-person/v1
id: p_6FiYr9HtsB6xqct233x4x9
status: active
merged_into: null
display_name: 王旭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ajKEdB3km4D8hUaDShchgy
        subject_person_id: p_6FiYr9HtsB6xqct233x4x9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6iUy673Lgi3Po9JvcDF4Fn
          claim_id: c_ajKEdB3km4D8hUaDShchgy
          source_id: s_LCV6R6ezTfM5qzJM1HMKtV
          stance: supports
          locator: CBDB:175856
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175856）
          source: &a1
            id: s_LCV6R6ezTfM5qzJM1HMKtV
            source_type: api_record
            title: 中国历代人物传记资料库：王旭（CBDB 175856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175856&o=json
            external_identifier: CBDB:175856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.164Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_zpK84svtVJD9fFpe4xcL5v
        subject_person_id: p_6FiYr9HtsB6xqct233x4x9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 741年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bj1V6rNUzYcDLzf4SoqYTn
          claim_id: c_zpK84svtVJD9fFpe4xcL5v
          source_id: s_LCV6R6ezTfM5qzJM1HMKtV
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
        id: c_UGaLNpziPaXnxMHYXWvkva
        subject_person_id: p_6FiYr9HtsB6xqct233x4x9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旭（卒于741年），唐人物。籍贯祁縣，曾任郎中。（中国历代人物传记资料库 CBDB 175856）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xMqf8hZqTSI5odrcCXVdDp
          claim_id: c_UGaLNpziPaXnxMHYXWvkva
          source_id: s_LCV6R6ezTfM5qzJM1HMKtV
          stance: supports
          locator: CBDB:175856
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zZJdBbpP60OD7yWxglg3MF
        subject_person_id: p_6aKQmuB1xaRvMcBNGSGgUM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6FiYr9HtsB6xqct233x4x9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r-hDVqN4gHeJGr01p2yOg6
          claim_id: c_zZJdBbpP60OD7yWxglg3MF
          source_id: s_LCV6R6ezTfM5qzJM1HMKtV
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6aKQmuB1xaRvMcBNGSGgUM
        status: active
        display_name: 王齐望
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王旭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王旭 | accepted |
| death.date | 741年 | accepted |
| bio.summary | 王旭（卒于741年），唐人物。籍贯祁縣，曾任郎中。（中国历代人物传记资料库 CBDB 175856） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6aKQmuB1xaRvMcBNGSGgUM | 王齐望 | accepted |

## 外部来源

- [中国历代人物传记资料库：王旭（CBDB 175856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175856&o=json)
