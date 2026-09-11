---
schema: wang-person/v1
id: p_DQaUBoXfg8x1v2xDYRi35S
status: active
merged_into: null
display_name: 王聚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BGPLq7Z59rfTX1Krqrpc1S
        subject_person_id: p_DQaUBoXfg8x1v2xDYRi35S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GpdvzHXJSBSgCBunfMMMpN
          claim_id: c_BGPLq7Z59rfTX1Krqrpc1S
          source_id: s_n5zM2AkskRUPuCHs8h9aqc
          stance: supports
          locator: CBDB:263244
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（263244）
          source: &a1
            id: s_n5zM2AkskRUPuCHs8h9aqc
            source_type: api_record
            title: 中国历代人物传记资料库：王聚（CBDB 263244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263244&o=json
            external_identifier: CBDB:263244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.618Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K2scKKNHcWAWLwSYEPQCzn
        subject_person_id: p_DQaUBoXfg8x1v2xDYRi35S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聚，明人物。弘治三年進士，曾任稅課局大使。（中国历代人物传记资料库 CBDB 263244）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C4RwWYpXBajxDeipH-Axgk
          claim_id: c_K2scKKNHcWAWLwSYEPQCzn
          source_id: s_n5zM2AkskRUPuCHs8h9aqc
          stance: supports
          locator: CBDB:263244
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

# 王聚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聚 | accepted |
| bio.summary | 王聚，明人物。弘治三年進士，曾任稅課局大使。（中国历代人物传记资料库 CBDB 263244） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聚（CBDB 263244）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263244&o=json)
