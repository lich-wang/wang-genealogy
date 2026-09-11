---
schema: wang-person/v1
id: p_sFbincvqaHnjLgXRArBNNb
status: active
merged_into: null
display_name: 王克培
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mv2QVg7QAeAgAPFFMScFpb
        subject_person_id: p_sFbincvqaHnjLgXRArBNNb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克培
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tZrHqvbPqGDb478RMe1BKE
          claim_id: c_mv2QVg7QAeAgAPFFMScFpb
          source_id: s_mzBtDkFst8q9d19g8X7t6W
          stance: supports
          locator: CBDB:636292
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636292）
          source: &a1
            id: s_mzBtDkFst8q9d19g8X7t6W
            source_type: api_record
            title: 中国历代人物传记资料库：王克培（CBDB 636292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636292&o=json
            external_identifier: CBDB:636292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ji8X9jpgaVv3rHMoTqn6wz
        subject_person_id: p_sFbincvqaHnjLgXRArBNNb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克培，清人物。籍贯灤平，曾任知縣。（中国历代人物传记资料库 CBDB 636292）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_l2PjUEDk9lw6jm7EjXsoil
          claim_id: c_Ji8X9jpgaVv3rHMoTqn6wz
          source_id: s_mzBtDkFst8q9d19g8X7t6W
          stance: supports
          locator: CBDB:636292
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

# 王克培

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克培 | accepted |
| bio.summary | 王克培，清人物。籍贯灤平，曾任知縣。（中国历代人物传记资料库 CBDB 636292） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克培（CBDB 636292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636292&o=json)
