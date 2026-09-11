---
schema: wang-person/v1
id: p_bFMsDnYZwCi9GhoLahN7Ae
status: active
merged_into: null
display_name: 王侁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RVdqNrWN9DLLg7YxqHGM2g
        subject_person_id: p_bFMsDnYZwCi9GhoLahN7Ae
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UiPqp6xsfuYCcdPNAUTUD9
          claim_id: c_RVdqNrWN9DLLg7YxqHGM2g
          source_id: s_z5KK2n2V92Nnig33tVF5aT
          stance: supports
          locator: CBDB:326161
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326161）
          source: &a1
            id: s_z5KK2n2V92Nnig33tVF5aT
            source_type: api_record
            title: 中国历代人物传记资料库：王侁（CBDB 326161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326161&o=json
            external_identifier: CBDB:326161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.209Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yrj2RhKioKRhUbThm98iyt
        subject_person_id: p_bFMsDnYZwCi9GhoLahN7Ae
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侁，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 326161）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e2Gdq-b6boZYVTOup2c5a9
          claim_id: c_yrj2RhKioKRhUbThm98iyt
          source_id: s_z5KK2n2V92Nnig33tVF5aT
          stance: supports
          locator: CBDB:326161
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
  descendants:
    - claim:
        id: c_Z-JtfR8yltk-SPOsrs1pVP
        subject_person_id: p_bFMsDnYZwCi9GhoLahN7Ae
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Kf6CG7GiTEZFms57CWBMuQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GBTttGA7j2U0JH_nZGlLGO
          claim_id: c_Z-JtfR8yltk-SPOsrs1pVP
          source_id: s_z5KK2n2V92Nnig33tVF5aT
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第一甲第二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Kf6CG7GiTEZFms57CWBMuQ
        status: active
        display_name: 王錫爵
        merged_into_person_id: null
  other: []
---

# 王侁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王侁 | accepted |
| bio.summary | 王侁，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 326161） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Kf6CG7GiTEZFms57CWBMuQ | 王錫爵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王侁（CBDB 326161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326161&o=json)
