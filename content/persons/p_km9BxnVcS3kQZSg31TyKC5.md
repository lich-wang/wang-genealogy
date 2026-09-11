---
schema: wang-person/v1
id: p_km9BxnVcS3kQZSg31TyKC5
status: active
merged_into: null
display_name: 王應豫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8BFU86zr4YFTQib1ZQjHqn
        subject_person_id: p_km9BxnVcS3kQZSg31TyKC5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應豫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k6yeVC8QL98ixm9tUTdhrS
          claim_id: c_8BFU86zr4YFTQib1ZQjHqn
          source_id: s_VKyoMycaEEWFqVwgGPrETJ
          stance: supports
          locator: CBDB:637999
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637999）
          source: &a1
            id: s_VKyoMycaEEWFqVwgGPrETJ
            source_type: api_record
            title: 中国历代人物传记资料库：王應豫（CBDB 637999）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637999&o=json
            external_identifier: CBDB:637999
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u2PZAqgEmrXG41bNuLGnF2
        subject_person_id: p_km9BxnVcS3kQZSg31TyKC5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應豫，清人物。籍贯閬中，入仕鄉貢舉人，曾任縣丞、訓導、知縣。（中国历代人物传记资料库 CBDB 637999）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AR_v-ZWbT0lRw05Rtg89fT
          claim_id: c_u2PZAqgEmrXG41bNuLGnF2
          source_id: s_VKyoMycaEEWFqVwgGPrETJ
          stance: supports
          locator: CBDB:637999
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

# 王應豫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應豫 | accepted |
| bio.summary | 王應豫，清人物。籍贯閬中，入仕鄉貢舉人，曾任縣丞、訓導、知縣。（中国历代人物传记资料库 CBDB 637999） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應豫（CBDB 637999）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637999&o=json)
