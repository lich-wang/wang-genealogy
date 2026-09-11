---
schema: wang-person/v1
id: p_CyqYWioCxJHdmo5eHYxXiX
status: active
merged_into: null
display_name: 王壽光
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RFTQXdJvjEdna2PXXfxKxg
        subject_person_id: p_CyqYWioCxJHdmo5eHYxXiX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JuDbzzKVxgcb6mr4dAVzvu
          claim_id: c_RFTQXdJvjEdna2PXXfxKxg
          source_id: s_LfeigSf2BLK1tCe9YDtb9r
          stance: supports
          locator: CBDB:636853
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636853）
          source: &a1
            id: s_LfeigSf2BLK1tCe9YDtb9r
            source_type: api_record
            title: 中国历代人物传记资料库：王壽光（CBDB 636853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636853&o=json
            external_identifier: CBDB:636853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.126Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CuxaCcykA17mJLTt3i5fTT
        subject_person_id: p_CyqYWioCxJHdmo5eHYxXiX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽光，清人物。籍贯青州府，曾任訓導。（中国历代人物传记资料库 CBDB 636853）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HY64tE2iC4nlR-pWzu7hWj
          claim_id: c_CuxaCcykA17mJLTt3i5fTT
          source_id: s_LfeigSf2BLK1tCe9YDtb9r
          stance: supports
          locator: CBDB:636853
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

# 王壽光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽光 | accepted |
| bio.summary | 王壽光，清人物。籍贯青州府，曾任訓導。（中国历代人物传记资料库 CBDB 636853） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壽光（CBDB 636853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636853&o=json)
