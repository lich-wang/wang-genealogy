---
schema: wang-person/v1
id: p_SM931QLbxC9G6yXBpDks4g
status: active
merged_into: null
display_name: 王聚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gC3T3GhxqJJEW4MC5hopBy
        subject_person_id: p_SM931QLbxC9G6yXBpDks4g
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
        - id: cs_HG5cDG85Nhm5WUPCoKUzuZ
          claim_id: c_gC3T3GhxqJJEW4MC5hopBy
          source_id: s_7BtpqvnQpu6DSaL1YRMCni
          stance: supports
          locator: CBDB:490053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（490053）
          source: &a1
            id: s_7BtpqvnQpu6DSaL1YRMCni
            source_type: api_record
            title: 中国历代人物传记资料库：王聚（CBDB 490053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490053&o=json
            external_identifier: CBDB:490053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.102Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vEK5V3D9RMqDFT5SrWKZ1U
        subject_person_id: p_SM931QLbxC9G6yXBpDks4g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聚，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 490053）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tar5-iImcfi75TnNLWgiCp
          claim_id: c_vEK5V3D9RMqDFT5SrWKZ1U
          source_id: s_7BtpqvnQpu6DSaL1YRMCni
          stance: supports
          locator: CBDB:490053
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
| bio.summary | 王聚，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 490053） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聚（CBDB 490053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490053&o=json)
