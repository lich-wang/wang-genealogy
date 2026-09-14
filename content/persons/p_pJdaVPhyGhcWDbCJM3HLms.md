---
schema: wang-person/v1
id: p_pJdaVPhyGhcWDbCJM3HLms
status: active
merged_into: null
display_name: 王澍
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8QQWaFhzj4xZs21LnxJMJG
        subject_person_id: p_pJdaVPhyGhcWDbCJM3HLms
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ukujHKf6Gx7pzmpLGR7mby
          claim_id: c_8QQWaFhzj4xZs21LnxJMJG
          source_id: s_81XYPdLeRQGCauyxr4aCEo
          stance: supports
          locator: CBDB:284473
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284473）
          source: &a1
            id: s_81XYPdLeRQGCauyxr4aCEo
            source_type: api_record
            title: 中国历代人物传记资料库：王澍（CBDB 284473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284473&o=json
            external_identifier: CBDB:284473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.204Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gAmCrgqCVCFx6xWEHsX9oj
        subject_person_id: p_pJdaVPhyGhcWDbCJM3HLms
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澍，明人物。正德十六年進士，籍贯涉縣，曾任百戶。（中国历代人物传记资料库 CBDB 284473）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__bmusIJFgok1Vwn-Nqsol_
          claim_id: c_gAmCrgqCVCFx6xWEHsX9oj
          source_id: s_81XYPdLeRQGCauyxr4aCEo
          stance: supports
          locator: CBDB:284473
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_TKayduU3hJtsrIJRHfN6dh
        subject_person_id: p_pJdaVPhyGhcWDbCJM3HLms
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YjqDvH1b52eQK3xtYDboFp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4Nhj3LspgWVmfxIJvkTchP
          claim_id: c_TKayduU3hJtsrIJRHfN6dh
          source_id: s_81XYPdLeRQGCauyxr4aCEo
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第三十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YjqDvH1b52eQK3xtYDboFp
        status: active
        display_name: 王科
        merged_into_person_id: null
    - claim:
        id: c_zXX7VvsgmNJkKyaLfPQMTT
        subject_person_id: p_pJdaVPhyGhcWDbCJM3HLms
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EAzSLXFsWwLH1FujzzyNR3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yAWVr4hSYnziSV3WqJqVhQ
          claim_id: c_zXX7VvsgmNJkKyaLfPQMTT
          source_id: s_g5Q4N6DTA4o-XvvSAbuC5v
          stance: supports
          locator: CBDB：兄弟 王科（68373）之父／母 王澍
          quotation: null
          interpretation_note: 由兄弟关系推断：王和 与 王科 为同胞（CBDB 记「弟」），王科 之父／母即 王和 之父／母。
          source:
            id: s_g5Q4N6DTA4o-XvvSAbuC5v
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 284476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284476&o=json
            external_identifier: CBDB:284476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EAzSLXFsWwLH1FujzzyNR3
        status: active
        display_name: 王和
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王澍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澍 | accepted |
| bio.summary | 王澍，明人物。正德十六年進士，籍贯涉縣，曾任百戶。（中国历代人物传记资料库 CBDB 284473） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_YjqDvH1b52eQK3xtYDboFp | 王科 | accepted |
| children | p_EAzSLXFsWwLH1FujzzyNR3 | 王和 | accepted |

## 外部来源

- [中国历代人物传记资料库：王和（CBDB 284476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284476&o=json)
- [中国历代人物传记资料库：王澍（CBDB 284473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284473&o=json)
