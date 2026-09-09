---
schema: wang-person/v1
id: p_3JXmUyAG5SM1NxgguQKH5M
status: active
merged_into: null
display_name: 王鍈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wj5YzPJybG3qrWiAE4P2zM
        subject_person_id: p_3JXmUyAG5SM1NxgguQKH5M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MNN5nwjYwAwAWgQJ8NB1KK
          claim_id: c_wj5YzPJybG3qrWiAE4P2zM
          source_id: s_LJkcLYdMPzAN61sDb6Cwyw
          stance: supports
          locator: CBDB:285958
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（285958）
          source: &a1
            id: s_LJkcLYdMPzAN61sDb6Cwyw
            source_type: api_record
            title: 中国历代人物传记资料库：王鍈（CBDB 285958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285958&o=json
            external_identifier: CBDB:285958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.224Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kmo8mViRAUrC2tnmdR7tJ8
        subject_person_id: p_3JXmUyAG5SM1NxgguQKH5M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GUDxSxgB2PB7fN8Fr4FxSt
          claim_id: c_kmo8mViRAUrC2tnmdR7tJ8
          source_id: s_LJkcLYdMPzAN61sDb6Cwyw
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

# 王鍈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍈 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍈（CBDB 285958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285958&o=json)
