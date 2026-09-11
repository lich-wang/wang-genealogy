---
schema: wang-person/v1
id: p_j7o3ViGYFeAbVqa2mtV1EV
status: active
merged_into: null
display_name: 王國珖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z71ziez3dmsued3UtHdAQK
        subject_person_id: p_j7o3ViGYFeAbVqa2mtV1EV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國珖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VMhe5WhhYVA1XPf1nRtrGS
          claim_id: c_z71ziez3dmsued3UtHdAQK
          source_id: s_mpqQ9PdQaaHndavtCmdkhF
          stance: supports
          locator: CBDB:636663
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636663）
          source: &a1
            id: s_mpqQ9PdQaaHndavtCmdkhF
            source_type: api_record
            title: 中国历代人物传记资料库：王國珖（CBDB 636663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636663&o=json
            external_identifier: CBDB:636663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.062Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XoEg3x5uM79cdr4i5jYRFt
        subject_person_id: p_j7o3ViGYFeAbVqa2mtV1EV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國珖，清人物。籍贯成都，曾任訓導。（中国历代人物传记资料库 CBDB 636663）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_T3p07LM3VkGJwUu2sfGxHG
          claim_id: c_XoEg3x5uM79cdr4i5jYRFt
          source_id: s_mpqQ9PdQaaHndavtCmdkhF
          stance: supports
          locator: CBDB:636663
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

# 王國珖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國珖 | accepted |
| bio.summary | 王國珖，清人物。籍贯成都，曾任訓導。（中国历代人物传记资料库 CBDB 636663） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國珖（CBDB 636663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636663&o=json)
