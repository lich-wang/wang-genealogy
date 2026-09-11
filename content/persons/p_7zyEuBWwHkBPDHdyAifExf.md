---
schema: wang-person/v1
id: p_7zyEuBWwHkBPDHdyAifExf
status: active
merged_into: null
display_name: 王國恩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_thoLW7JPot142BrafNL5M6
        subject_person_id: p_7zyEuBWwHkBPDHdyAifExf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國恩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1pYWmSQzyb7ooEJdV1auns
          claim_id: c_thoLW7JPot142BrafNL5M6
          source_id: s_Q3Y1C3SBR9E2epS6h2PF7D
          stance: supports
          locator: CBDB:636648
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636648）
          source: &a1
            id: s_Q3Y1C3SBR9E2epS6h2PF7D
            source_type: api_record
            title: 中国历代人物传记资料库：王國恩（CBDB 636648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636648&o=json
            external_identifier: CBDB:636648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.058Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1QK4xfwg9uDwQSmfx26mxq
        subject_person_id: p_7zyEuBWwHkBPDHdyAifExf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國恩，清人物。籍贯榮縣，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 636648）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_z5NKfVKOAGPqU3l6xXkGHM
          claim_id: c_1QK4xfwg9uDwQSmfx26mxq
          source_id: s_Q3Y1C3SBR9E2epS6h2PF7D
          stance: supports
          locator: CBDB:636648
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

# 王國恩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國恩 | accepted |
| bio.summary | 王國恩，清人物。籍贯榮縣，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 636648） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國恩（CBDB 636648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636648&o=json)
