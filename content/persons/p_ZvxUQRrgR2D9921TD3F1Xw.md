---
schema: wang-person/v1
id: p_ZvxUQRrgR2D9921TD3F1Xw
status: active
merged_into: null
display_name: 王大鬱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GBRpMEbCbPP6jdsjN995Vs
        subject_person_id: p_ZvxUQRrgR2D9921TD3F1Xw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大鬱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CoAM4qHPKhWVMzHLwp9Z4G
          claim_id: c_GBRpMEbCbPP6jdsjN995Vs
          source_id: s_4g76ixuCJkRAHpW6QjV5B5
          stance: supports
          locator: CBDB:636920
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636920）
          source: &a1
            id: s_4g76ixuCJkRAHpW6QjV5B5
            source_type: api_record
            title: 中国历代人物传记资料库：王大鬱（CBDB 636920）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636920&o=json
            external_identifier: CBDB:636920
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.148Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ge35DYvSCLeLDEfRctPdf7
        subject_person_id: p_ZvxUQRrgR2D9921TD3F1Xw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dEh2VEAMeb89MBcgceYjJs
          claim_id: c_ge35DYvSCLeLDEfRctPdf7
          source_id: s_4g76ixuCJkRAHpW6QjV5B5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王大鬱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大鬱 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大鬱（CBDB 636920）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636920&o=json)
