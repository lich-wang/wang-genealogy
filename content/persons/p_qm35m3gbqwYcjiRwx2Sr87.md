---
schema: wang-person/v1
id: p_qm35m3gbqwYcjiRwx2Sr87
status: active
merged_into: null
display_name: 王穎士
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Btz36H7jV4HLz8X7XfbiEp
        subject_person_id: p_qm35m3gbqwYcjiRwx2Sr87
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穎士
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bC47Y3BxotQb169c5SavcY
          claim_id: c_Btz36H7jV4HLz8X7XfbiEp
          source_id: s_biMf6Ve15KAtNn2UHQ4qPH
          stance: supports
          locator: CBDB:72132
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72132）
          source: &a1
            id: s_biMf6Ve15KAtNn2UHQ4qPH
            source_type: api_record
            title: 中国历代人物传记资料库：王穎士（CBDB 72132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72132&o=json
            external_identifier: CBDB:72132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.009Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sxtx1EFBMcsUiEx8oDadVR
        subject_person_id: p_qm35m3gbqwYcjiRwx2Sr87
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1654年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c5DDpJNkm7JjXL1anZRHUa
          claim_id: c_sxtx1EFBMcsUiEx8oDadVR
          source_id: s_biMf6Ve15KAtNn2UHQ4qPH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_749p7gN3DKv53YQr12qKmT
        subject_person_id: p_qm35m3gbqwYcjiRwx2Sr87
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
        - id: cs_NA2ukMFjsfmpJGLVGZNhRU
          claim_id: c_749p7gN3DKv53YQr12qKmT
          source_id: s_biMf6Ve15KAtNn2UHQ4qPH
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

# 王穎士

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王穎士 | accepted |
| birth.date | 1654年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王穎士（CBDB 72132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72132&o=json)
