---
schema: wang-person/v1
id: p_MDT5Nx4TzWgxkBx8TTTSTj
status: active
merged_into: null
display_name: 王和
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dqfdbPNwoRGFg5y7ofKwwh
        subject_person_id: p_MDT5Nx4TzWgxkBx8TTTSTj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9jvpQ8gs7wukeiJd5uuFPX
          claim_id: c_dqfdbPNwoRGFg5y7ofKwwh
          source_id: s_EhGN2PK4Qg4WkEVQkCVgMB
          stance: supports
          locator: CBDB:498222
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（498222）
          source: &a1
            id: s_EhGN2PK4Qg4WkEVQkCVgMB
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 498222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=498222&o=json
            external_identifier: CBDB:498222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.688Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_19PUQkZJtazP2HxZmS5huo
        subject_person_id: p_MDT5Nx4TzWgxkBx8TTTSTj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 498222）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ur3zG58rRnBAC3zQzNsvzV
          claim_id: c_19PUQkZJtazP2HxZmS5huo
          source_id: s_EhGN2PK4Qg4WkEVQkCVgMB
          stance: supports
          locator: CBDB:498222
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

# 王和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王和 | accepted |
| bio.summary | 王和，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 498222） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王和（CBDB 498222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=498222&o=json)
