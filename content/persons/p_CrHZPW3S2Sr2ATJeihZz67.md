---
schema: wang-person/v1
id: p_CrHZPW3S2Sr2ATJeihZz67
status: active
merged_into: null
display_name: 王垿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HeFfesXbsNN4SvgiCxru86
        subject_person_id: p_CrHZPW3S2Sr2ATJeihZz67
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Lky5g8QrPgCBoefHEhhmju
          claim_id: c_HeFfesXbsNN4SvgiCxru86
          source_id: s_n8opJ1K6jtCEXcFY8H7DxC
          stance: supports
          locator: CBDB:636702
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636702）
          source: &a1
            id: s_n8opJ1K6jtCEXcFY8H7DxC
            source_type: api_record
            title: 中国历代人物传记资料库：王垿（CBDB 636702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636702&o=json
            external_identifier: CBDB:636702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.231Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7UeYEWoeHhRQevrqw3gEhX
        subject_person_id: p_CrHZPW3S2Sr2ATJeihZz67
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垿，清人物。籍贯廬州府，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 636702）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GCYlixoXzR_0qGbuBBzVAd
          claim_id: c_7UeYEWoeHhRQevrqw3gEhX
          source_id: s_n8opJ1K6jtCEXcFY8H7DxC
          stance: supports
          locator: CBDB:636702
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

# 王垿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王垿 | accepted |
| bio.summary | 王垿，清人物。籍贯廬州府，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 636702） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王垿（CBDB 636702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636702&o=json)
