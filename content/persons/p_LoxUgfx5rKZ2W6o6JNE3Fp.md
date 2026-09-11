---
schema: wang-person/v1
id: p_LoxUgfx5rKZ2W6o6JNE3Fp
status: active
merged_into: null
display_name: 王廷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6zWzCZEC3d13X29YsjFK4o
        subject_person_id: p_LoxUgfx5rKZ2W6o6JNE3Fp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T6kUrw1B7qwD37JHdPskCm
          claim_id: c_6zWzCZEC3d13X29YsjFK4o
          source_id: s_UMRSk6ExD66Mf6P8BRQFrB
          stance: supports
          locator: CBDB:452238
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（452238）
          source: &a1
            id: s_UMRSk6ExD66Mf6P8BRQFrB
            source_type: api_record
            title: 中国历代人物传记资料库：王廷（CBDB 452238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452238&o=json
            external_identifier: CBDB:452238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.328Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NCj2rDNTCh54p6h6vE3x5Z
        subject_person_id: p_LoxUgfx5rKZ2W6o6JNE3Fp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷，明人物。曾任典史。（中国历代人物传记资料库 CBDB 452238）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_efbGNFg0s-TAcdNCCCFZLn
          claim_id: c_NCj2rDNTCh54p6h6vE3x5Z
          source_id: s_UMRSk6ExD66Mf6P8BRQFrB
          stance: supports
          locator: CBDB:452238
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

# 王廷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷 | accepted |
| bio.summary | 王廷，明人物。曾任典史。（中国历代人物传记资料库 CBDB 452238） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷（CBDB 452238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452238&o=json)
