---
schema: wang-person/v1
id: p_AwF1Q45zJzvuRjLUYnist2
status: active
merged_into: null
display_name: 王敬謨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vrjQnxdH2P9FbKeCxsur4c
        subject_person_id: p_AwF1Q45zJzvuRjLUYnist2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hraUmzdLShoKG4Vw1DUxf2
          claim_id: c_vrjQnxdH2P9FbKeCxsur4c
          source_id: s_FC9JaBCySt7J1nioyE69im
          stance: supports
          locator: CBDB:638202
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638202）
          source: &a1
            id: s_FC9JaBCySt7J1nioyE69im
            source_type: api_record
            title: 中国历代人物传记资料库：王敬謨（CBDB 638202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638202&o=json
            external_identifier: CBDB:638202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.562Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1Ey2nFHWNvGcCmGfqqCAkb
        subject_person_id: p_AwF1Q45zJzvuRjLUYnist2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬謨，清人物。籍贯單縣，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 638202）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Rc1ZoVUOniJsSfd5q0u00N
          claim_id: c_1Ey2nFHWNvGcCmGfqqCAkb
          source_id: s_FC9JaBCySt7J1nioyE69im
          stance: supports
          locator: CBDB:638202
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

# 王敬謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬謨 | accepted |
| bio.summary | 王敬謨，清人物。籍贯單縣，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 638202） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬謨（CBDB 638202）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638202&o=json)
