---
schema: wang-person/v1
id: p_PyS2DGeV2U4cCPgde9o5L4
status: active
merged_into: null
display_name: 王銜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oaVUhXNMug8pDPPC6m2zhb
        subject_person_id: p_PyS2DGeV2U4cCPgde9o5L4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B2h7k2SQT6JftebGJoKvHe
          claim_id: c_oaVUhXNMug8pDPPC6m2zhb
          source_id: s_5breBp2PFicfVmsCnf7pnE
          stance: supports
          locator: CBDB:640566
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640566）
          source: &a1
            id: s_5breBp2PFicfVmsCnf7pnE
            source_type: api_record
            title: 中国历代人物传记资料库：王銜（CBDB 640566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640566&o=json
            external_identifier: CBDB:640566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.299Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gcRZLz8zZz3EsNfwDHFyA9
        subject_person_id: p_PyS2DGeV2U4cCPgde9o5L4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銜，清人物。籍贯吳縣，入仕附貢生，曾任知縣。（中国历代人物传记资料库 CBDB 640566）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BxqO79TmZJGhgVUTISadvb
          claim_id: c_gcRZLz8zZz3EsNfwDHFyA9
          source_id: s_5breBp2PFicfVmsCnf7pnE
          stance: supports
          locator: CBDB:640566
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

# 王銜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銜 | accepted |
| bio.summary | 王銜，清人物。籍贯吳縣，入仕附貢生，曾任知縣。（中国历代人物传记资料库 CBDB 640566） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銜（CBDB 640566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640566&o=json)
